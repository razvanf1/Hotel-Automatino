package trustyshoes.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import trustyshoes.springboot.model.Admin;
import trustyshoes.springboot.model.Reservation;
import trustyshoes.springboot.model.SendEmailService;
import trustyshoes.springboot.repository.AdminRepository;
import trustyshoes.springboot.repository.GuestRepository;
import trustyshoes.springboot.repository.ReservationRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private GuestRepository guestRepository;

    @Autowired
    private ReservationRepository reservationRepository;

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

    @GetMapping("/admins/reservations")
    public List<Reservation> getReservations(@RequestParam String startDate, @RequestParam String endDate) {
       return reservationRepository.getReservationsByDate(startDate, endDate);
    }

    @PostMapping("/admins/sendoffers")
    public void sendOffers(@RequestParam String mailTopic, @RequestParam String mailBody) {
        for(int i = 1; i <= guestRepository.count(); i++) {
            sendEmailService.sendEmail(guestRepository.getOne(i).getEmail(), mailBody, mailTopic);
        }
    }

}
