package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trustyshoes.springboot.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
}
