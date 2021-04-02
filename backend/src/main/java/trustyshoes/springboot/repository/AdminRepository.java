package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import trustyshoes.springboot.model.Admin;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
    @Query("SELECT a FROM Admin a WHERE a.phone = ?1 and a.password = ?2")
    Admin findByPhoneAndPassword(String phone, String password);

    @Query("SELECT a FROM Admin a WHERE a.email = ?1 and a.password = ?2")
    Admin findByEmailAndPassword(String email, String password);
}
