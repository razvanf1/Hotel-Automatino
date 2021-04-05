package trustyshoes.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import trustyshoes.springboot.model.Admin;
import trustyshoes.springboot.model.Guest;
import trustyshoes.springboot.model.Role;
import trustyshoes.springboot.model.Room;
import trustyshoes.springboot.repository.GuestRepository;
import trustyshoes.springboot.repository.RoomRepository;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class GuestController {
    @Autowired
    private GuestRepository guestRepository;

    @Autowired
    private RoomRepository roomRepository;

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

    @GetMapping("/guests/search")
    public List<Room> getAvailableRooms(@RequestParam String start, @RequestParam String end){
        return roomRepository.findByReservationDate(start,end);
    }
}
