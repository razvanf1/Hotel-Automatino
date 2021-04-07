package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import trustyshoes.springboot.model.Door;

public interface DoorRepository extends JpaRepository<Door, Integer> {
   //@Query("SELECT d from Door d WHERE d.roomId=:roomId")
    Door findByRoomId(int roomId);
}
