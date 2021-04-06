package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trustyshoes.springboot.model.ReservationRoom;

public interface ReservationRoomRepository extends JpaRepository<ReservationRoom,Integer> {
}
