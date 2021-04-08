package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import trustyshoes.springboot.model.Room;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    @Query("SELECT DISTINCT r FROM Room r " +
            "LEFT JOIN ReservationRoom rr ON r.id=rr.roomId " +
            "LEFT JOIN Reservation reservations ON rr.reservationId=reservations.id " +
            "WHERE (reservations.id is NULL OR reservations.endDate<=DATE(:startDate) OR reservations.startDate>=DATE(:endDate)) AND r.type=:type")
    List<Room> findByReservationDate(String startDate, String endDate, int type);

    @Query(value = "SELECT rr.room_id FROM reservations_rooms rr, reservations r WHERE r.id = ?1 AND r.id = rr.reservation_id", nativeQuery = true)
    int findRoomIdFromReservation(int reservationId);

}

