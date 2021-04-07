package trustyshoes.springboot.controller;

import ch.qos.logback.core.util.TimeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import trustyshoes.springboot.model.Guest;
import trustyshoes.springboot.model.Reservation;
import trustyshoes.springboot.model.Room;
import trustyshoes.springboot.repository.GuestRepository;
import trustyshoes.springboot.repository.ReservationRepository;
import trustyshoes.springboot.repository.RoomRepository;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class GuestController {
    @Autowired
    private GuestRepository guestRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping("/guests")
    public List<Guest> getAllGuests(){
        return guestRepository.findAll();
    }

    @PostMapping("/guests/login")
    public ResponseEntity<Guest> guestLogin(@RequestBody Guest guest){
        Guest found = null;
        if(guest.getPhone()==null) {
            found = guestRepository.findByEmailAndPassword(guest.getEmail(), guest.getPassword());
        }else if(guest.getEmail()==null){
            found = guestRepository.findByPhoneAndPassword(guest.getPhone(), guest.getPassword());
        }
        if(found!=null){
            return ResponseEntity.ok(found);
        }else return ResponseEntity.notFound().build();
    }

    @GetMapping("/guests/{id}")
    public Guest getGuestById(@PathVariable Integer id){
        return guestRepository.findById(id).get();
    }

    @GetMapping("/guests/search")
    public List<Room> getAvailableRooms(@RequestParam String start, @RequestParam String end, @RequestParam int type){
        return roomRepository.findByReservationDate(start,end,type);
    }

    @GetMapping("/guests/reservations/{id}")
    public List<Map<String,Object>> getReservations(@PathVariable int id){
        List<Object[]> list = reservationRepository.getReservations(id);
        List<Map<String, Object>> reply = new LinkedList<>();
        list.forEach(objects -> {
            Map<String,Object> map = new HashMap<>();
            map.put("startDate",objects[0]);
            map.put("endDate",objects[1]);
            map.put("roomNumber",objects[2]);
            map.put("roomType",objects[3]);
            map.put("roomId",objects[4]);
            reply.add(map);
        });
        return reply;
    }

    @PutMapping("/guests/reservations/{id}")
    public ResponseEntity checkIn(@PathVariable Integer id) {
        Room roomToCheckIn = roomRepository.findById(roomRepository.findRoomIdFromReservation(id)).get();
        Reservation currentReservation = reservationRepository.findById(id).get();

        Timestamp currentTime = new Timestamp(System.currentTimeMillis());

        if(currentTime.after(currentReservation.getStartDate()) && currentTime.before(currentReservation.getEndDate()))
        {
            roomToCheckIn.setStatus(1);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/guests/reservations/checkout/{id}")
    public ResponseEntity checkOut(@PathVariable Integer id) {
        Room roomToCheckOut = roomRepository.findById(roomRepository.findRoomIdFromReservation(id)).get();
        Reservation currentReservation = reservationRepository.findById(id).get();

        Timestamp currentTime = new Timestamp(System.currentTimeMillis());

        if(currentTime.after(currentReservation.getStartDate()) && currentTime.before(currentReservation.getEndDate()))
        {
            roomToCheckOut.setStatus(0);
            reservationRepository.deleteById(currentReservation.getId());
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.badRequest().build();
    }

}
