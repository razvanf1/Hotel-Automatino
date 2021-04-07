package trustyshoes.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;
import trustyshoes.springboot.model.Door;
import trustyshoes.springboot.model.Room;
import trustyshoes.springboot.repository.DoorRepository;
import trustyshoes.springboot.repository.RoomRepository;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;


    @Autowired
    private DoorRepository doorRepository;

    //get all rooms
    @GetMapping("/rooms")
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @GetMapping("/rooms/{id}")
    public Room getRoomById(@PathVariable Integer id){
        return roomRepository.findById(id).get();
    }

    @PostMapping("/rooms")
    public Room createRoom(@Valid @RequestBody Room room){
        Room addedRoom = roomRepository.save(room);
        Door door = new Door();
        door.setStatus(0);
        door.setRoomId(addedRoom.getId());
        doorRepository.save(door);
        return addedRoom;
    }

    @GetMapping("/rooms/unlock/{id}")
    public void unlockRoom(@PathVariable int id) throws InterruptedException {
        Door door = doorRepository.findByRoomId(id);
        System.out.println(door);
        door.setStatus(1);
        doorRepository.save(door);
        Thread.sleep(15000);
        door.setStatus(0);
        doorRepository.save(door);
    }

    @PutMapping("/rooms/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable Integer id, @RequestBody Room room){
        Room roomToUpdate = roomRepository.findById(id).get();
        roomToUpdate.setNumber(room.getNumber());
        roomToUpdate.setPrice(room.getPrice());
        roomToUpdate.setStatus(room.getStatus());
        roomToUpdate.setType(room.getStatus());
        return ResponseEntity.ok(roomRepository.save(roomToUpdate));
    }

    @DeleteMapping("/rooms/{id}")
    public void deleteRoom(@PathVariable int id){
        roomRepository.delete(roomRepository.findById(id).get());
    }

}
