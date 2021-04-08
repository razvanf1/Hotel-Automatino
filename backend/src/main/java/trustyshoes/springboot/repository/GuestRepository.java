package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import trustyshoes.springboot.model.Guest;

public interface GuestRepository extends JpaRepository<Guest,Integer> {
    @Query("SELECT g FROM Guest g WHERE g.phone = ?1 and g.password = ?2")
    Guest findByPhoneAndPassword(String phone, String password);

    @Query("SELECT g FROM Guest g WHERE g.email = ?1 and g.password = ?2")
    Guest findByEmailAndPassword(String email, String password);


}
