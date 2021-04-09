import React,{useState} from 'react'
import RoomServices from '../services/RoomService';

const UnlockDoorButtonComponent = (props) => {
    const [toggle, setToggle] = useState(true);

    const unlockDoor = () => {  
        console.log("Door unlocked cu id " + props.roomId);
        setToggle((prev) => !prev);

        RoomServices.unlockRoom(props.roomId).then(() => {  
            setToggle((prev) => !prev);
            console.log("Door locked");
        });

    };

    return(
        <div>
            {toggle ? 
                <button className="btn btn-primary btn-sm" onClick={unlockDoor}> Unlock door </button> 
                : 
                <button className="btn btn-primary btn-sm" > Door unlocked for 15 seconds</button>
            }
        </div>
    );
}

export default UnlockDoorButtonComponent;