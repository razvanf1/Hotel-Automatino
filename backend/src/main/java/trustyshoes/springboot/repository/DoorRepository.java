package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trustyshoes.springboot.model.Door;

public interface DoorRepository extends JpaRepository<Door, Integer> {
}
