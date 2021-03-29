package trustyshoes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trustyshoes.springboot.model.Staff;

public interface StaffRepository extends JpaRepository<Staff, Integer> {
}
