package trustyshoes.springboot.model;


import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;

@Entity
@Table(name = "rooms")
@RequiredArgsConstructor
@Data
public class Room {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "status")
    @PositiveOrZero
    @Max(2)
    private int status;

    @Column(name = "type")
    @PositiveOrZero
    @Max(2)
    private int type;

    @Column(name = "price")
    @Positive
    private int price;

    @Column(name = "number",unique=true)
    @Positive
    private int number;
}
