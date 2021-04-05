package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import trustyshoes.springboot.model.Room;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    @Query("SELECT r FROM Room r " +
            "LEFT JOIN ReservationRoom rr ON r.id=rr.roomId " +
            "LEFT JOIN Reservation reservations ON rr.reservationId=reservations.id " +
            "WHERE reservations.id is NULL OR reservations.endDate<=DATE(:startDate) OR reservations.startDate>=DATE(:endDate)")
    List<Room> findByReservationDate(String startDate, String endDate);

}

