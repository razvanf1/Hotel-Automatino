package trustyshoes.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;
import trustyshoes.springboot.model.Room;
import trustyshoes.springboot.repository.RoomRepository;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    //get all rooms
    @GetMapping("/rooms")
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @PostMapping("/rooms")
    public Room createRoom(@Valid @RequestBody Room room){
        return roomRepository.save(room);
    }

    @PutMapping("/rooms/{nr}")
    public ResponseEntity<Room> updateRoom(@PathVariable Integer nr, @RequestBody Room room){
        Room roomToUpdate = roomRepository.findById(nr).get();
        roomToUpdate.setNumber(room.getNumber());
        roomToUpdate.setPrice(room.getPrice());
        roomToUpdate.setStatus(room.getStatus());
        roomToUpdate.setType(room.getStatus());
        return ResponseEntity.ok(roomRepository.save(roomToUpdate));
    }

}
