package yourSolution.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "room_status")
    private int roomStatus;

    @Column(name = "room_type")
    private int roomType;

    @Column(name = "price")
    private int price;

    @Column(name = "room_number")
    private int roomNumber;

    public Room() {

    }

    public Room(int roomStatus, int roomType, int price, int roomNumber) {
        this.roomStatus = roomStatus;
        this.roomType = roomType;
        this.price = price;
        this.roomNumber = roomNumber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRoomStatus() {
        return roomStatus;
    }

    public void setRoomStatus(int roomStatus) {
        this.roomStatus = roomStatus;
    }

    public int getRoomType() {
        return roomType;
    }

    public void setRoomType(int roomType) {
        this.roomType = roomType;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }
}
