package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import trustyshoes.springboot.model.Room;

import java.util.Optional;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {

}

