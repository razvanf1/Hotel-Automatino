package trustyshoes.springboot.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import trustyshoes.springboot.model.Guest;
import trustyshoes.springboot.model.Room;
import trustyshoes.springboot.repository.GuestRepository;
import trustyshoes.springboot.repository.ReservationRepository;
import trustyshoes.springboot.repository.RoomRepository;

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
    public List<Room> getAvailableRooms(@RequestParam String start, @RequestParam String end){
        return roomRepository.findByReservationDate(start,end);
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
            reply.add(map);
        });
        return reply;
    }
}
