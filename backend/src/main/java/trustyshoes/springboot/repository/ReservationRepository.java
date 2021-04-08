package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import trustyshoes.springboot.model.Reservation;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    //@Query("SELECT r FROM Reservation r WHERE r.guestId = ?1")
    //@Query(value = "SELECT * FROM reservations r WHERE r.guest_id = ?1", nativeQuery = true)
    @Query(value = "SELECT r.start_date, r.end_date, ro.number, ro.type, ro.id, rm.reservation_id FROM reservations r, rooms ro, reservations_rooms rm WHERE r.guest_id = ?1 AND r.id = rm.reservation_id AND rm.room_id = ro.id;", nativeQuery = true)
    List<Object[]> getReservations(int id);


}