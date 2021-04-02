package trustyshoes.springboot.model;


import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "reservations")
@RequiredArgsConstructor
@Data
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "guest_id")
    private int guestId;

    @Column(name="start_date")
    private Timestamp startDate;

    @Column(name = "end_date")
    private Timestamp endDate;
}