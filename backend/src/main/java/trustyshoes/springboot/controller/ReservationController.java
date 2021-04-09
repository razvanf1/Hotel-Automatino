package trustyshoes.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import trustyshoes.springboot.model.Reservation;
import trustyshoes.springboot.model.ReservationRoom;
import trustyshoes.springboot.repository.ReservationRepository;
import trustyshoes.springboot.repository.ReservationRoomRepository;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private ReservationRoomRepository reservationRoomRepository;

    @GetMapping("/reservations")
    public List<Reservation> getAllReservations(){
        return reservationRepository.findAll();
    }

    @PostMapping("/guests/reservations")
    public ResponseEntity addReservation(@RequestParam int guestId, @RequestParam int roomId,
                                             @RequestParam String startDate, @RequestParam String endDate){

        Timestamp currentTime = new Timestamp(System.currentTimeMillis());
        Timestamp startDateTimestamp = Timestamp.valueOf(startDate.replace(".","-")+" 23:59:59");
        Timestamp endDateTimestamp = Timestamp.valueOf(endDate.replace(".","-")+" 23:59:59");

        if(startDateTimestamp.before(currentTime) || endDateTimestamp.before(startDateTimestamp))
            return ResponseEntity.badRequest().build();

        else {
            Map<String,Object> reply = new HashMap<>();
            Reservation reservation = new Reservation();
            reservation.setGuestId(guestId);
            reservation.setEndDate(endDateTimestamp);
            reservation.setStartDate(startDateTimestamp);
            Reservation added = reservationRepository.save(reservation);
            ReservationRoom reservationRoom = new ReservationRoom();
            reservationRoom.setReservationId(reservation.getId());
            reservationRoom.setRoomId(roomId);
            ReservationRoom addedRR = reservationRoomRepository.save(reservationRoom);
            reply.put("reservationId",added.getId());
            reply.put("guestId",added.getGuestId());
            reply.put("startDate",startDate);
            reply.put("endDate",endDate);
            reply.put("roomId",addedRR.getRoomId());
            return ResponseEntity.ok(reply);
        }
    }

    @DeleteMapping("/guests/reservations/{id}")
    public void deleteReservation(@PathVariable int id){
        reservationRepository.deleteById(id);
    }

}