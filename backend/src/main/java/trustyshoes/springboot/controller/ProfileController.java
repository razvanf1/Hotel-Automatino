package trustyshoes.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import trustyshoes.springboot.model.Guest;
import trustyshoes.springboot.model.Room;
import trustyshoes.springboot.repository.GuestRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProfileController {

    @Autowired
    GuestRepository guestRepository;

    @GetMapping("/profile/{id}")
    public Guest getGuestById(@PathVariable Integer id){
        return guestRepository.findById(id).get();
    }

}