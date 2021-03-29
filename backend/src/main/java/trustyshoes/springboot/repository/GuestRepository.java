package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trustyshoes.springboot.model.Guest;

public interface GuestRepository extends JpaRepository<Guest,Integer> {
}
