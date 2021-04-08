package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import trustyshoes.springboot.model.Staff;

public interface StaffRepository extends JpaRepository<Staff, Integer> {
    @Query("SELECT s FROM Staff s WHERE s.phone = ?1 and s.password = ?2")
    Staff findByPhoneAndPassword(String phone, String password);

    @Query("SELECT s FROM Staff s WHERE s.email = ?1 and s.password = ?2")
    Staff findByEmailAndPassword(String email, String password);
}
