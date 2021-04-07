package trustyshoes.springboot.model;


import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="doors")
@RequiredArgsConstructor
@Data
public class Door {
    @Id
    @GeneratedValue
    private int id;

    @Column(name="room_id")
    private int roomId;

    @Column(name="status")
    private int status;
}
