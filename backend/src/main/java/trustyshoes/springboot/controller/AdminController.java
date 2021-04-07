package trustyshoes.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import trustyshoes.springboot.model.Admin;
import trustyshoes.springboot.model.Role;
import trustyshoes.springboot.model.SendEmailService;
import trustyshoes.springboot.repository.AdminRepository;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private SendEmailService sendEmailService;

    @GetMapping("/admins")
    public List<Admin> getAllAdmins(){
        return adminRepository.findAll();
    }

    @PostMapping("/admins/login")
    public ResponseEntity<Admin> adminLogin(@RequestBody Admin admin){
        Admin found = null;
        if(admin.getPhone()==null) {
            found = adminRepository.findByEmailAndPassword(admin.getEmail(), admin.getPassword());
        }else if(admin.getEmail()==null){
            found = adminRepository.findByPhoneAndPassword(admin.getPhone(), admin.getPassword());
        }
        if(found!=null){
            return ResponseEntity.ok(found);
        }else {return ResponseEntity.notFound().build();}
    }

    @PostMapping("/admins/sendoffers")
    public void sendOffers() {
        sendEmailService.sendEmail("razvan.frunza@student.usv.ro", "Puiule, nu rata aceasta mega tzeaca! O camera la pret de 2.", "Hotel TrustyShoes");
    }
}
