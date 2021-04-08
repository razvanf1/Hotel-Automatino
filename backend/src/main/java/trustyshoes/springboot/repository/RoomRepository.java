package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import trustyshoes.springboot.model.Room;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
     @Query("SELECT DISTINCT rr.roomId from ReservationRoom rr " +
            "INNER JOIN Reservation r on r.id = rr.reservationId " +
            "WHERE NOT(r.startDate>=DATE(:endDate) or r.endDate<=DATE(:startDate))")
    List<Integer> findOccupiedRoomsIds(String startDate, String endDate);

    @Query(value = "SELECT rr.room_id FROM reservations_rooms rr, reservations r WHERE r.id = ?1 AND r.id = rr.reservation_id", nativeQuery = true)
    int findRoomIdFromReservation(int reservationId);

}

