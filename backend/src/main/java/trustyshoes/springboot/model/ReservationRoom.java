package trustyshoes.springboot.model;


import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@RequiredArgsConstructor
@Data
@Table(name = "reservations_rooms")
public class ReservationRoom {
    @Id
    private int id;

    @Column(name="room_id")
    private int roomId;

    @Column(name="reservation_id")
    private int reservationId;
}
