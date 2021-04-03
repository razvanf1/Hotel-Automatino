package trustyshoes.springboot.model;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.*;

import javax.persistence.*;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "admins")

public class Admin {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="email")
    private String email;

    @Column(name="phone")
    private String phone;

    @Column(name="password")
    private String password;

    @Transient
    private Role role = Role.ROLE_ADMIN;

}
