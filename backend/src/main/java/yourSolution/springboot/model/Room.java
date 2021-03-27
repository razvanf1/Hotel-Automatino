package yourSolution.springboot.model;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "rooms")
@RequiredArgsConstructor
@Data
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "status")
    private int status;

    @Column(name = "type")
    private int type;

    @Column(name = "price")
    private int price;

    @Column(name = "number")
    private int number;
}
