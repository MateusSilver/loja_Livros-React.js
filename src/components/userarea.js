import { useState } from "react";

function UserArea(){
    const [User, setUser] = useState('');

    function handleSubmit(){
        setUser('Alex')
    }

    return(
        <div>
            <p>{User}</p>
            <input type="submit" onClick={handleSubmit}/>
        </div>
    )

}
export default UserArea;