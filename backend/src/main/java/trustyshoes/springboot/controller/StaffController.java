package trustyshoes.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import trustyshoes.springboot.model.Room;
import trustyshoes.springboot.model.Staff;
import trustyshoes.springboot.repository.RoomRepository;
import trustyshoes.springboot.repository.StaffRepository;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class StaffController {
    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping("/staff")
    public List<Staff> getAllStaff() {
        return staffRepository.findAll();
    }

    @PostMapping("/staff/login")
    public ResponseEntity<Staff> staffLogin(@RequestBody Staff staff){
        Staff found = null;
        if(staff.getPhone()==null) {
            found = staffRepository.findByEmailAndPassword(staff.getEmail(), staff.getPassword());
        }else if(staff.getEmail()==null){
            found = staffRepository.findByPhoneAndPassword(staff.getPhone(), staff.getPassword());
        }
        if(found!=null){
            return ResponseEntity.ok(found);
        }else return ResponseEntity.notFound().build();
    }

    @GetMapping("staff/rooms")
    public List<Room> getRooms () {
        return roomRepository.findAll();
    }
}
