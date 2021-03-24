package yourSolution.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import yourSolution.springboot.model.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
}
