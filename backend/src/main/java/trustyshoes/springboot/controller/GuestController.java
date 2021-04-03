package trustyshoes.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import trustyshoes.springboot.model.Admin;
import trustyshoes.springboot.model.Guest;
import trustyshoes.springboot.model.Role;
import trustyshoes.springboot.repository.GuestRepository;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class GuestController {
    @Autowired
    private GuestRepository guestRepository;

    @GetMapping("/guests")
    public List<Guest> getAllGuests(){
        return guestRepository.findAll();
    }

    @GetMapping("/guests/login")
    public ResponseEntity<Guest> guestLogin(@RequestBody Guest guest){
        Guest found = null;
        if(guest.getPhone()==null) {
            found = guestRepository.findByEmailAndPassword(guest.getEmail(), guest.getPassword());
        }else if(guest.getEmail()==null){
            found = guestRepository.findByPhoneAndPassword(guest.getPhone(), guest.getPassword());
        }
        if(found!=null){
            found.setRole(Role.ROLE_GUEST);
            return ResponseEntity.ok(guest);
        }else return ResponseEntity.notFound().build();
    }
}
