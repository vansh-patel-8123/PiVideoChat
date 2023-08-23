import React, {useCallback, useState} from 'react'

function LobbyScreen() {

    const [email, setEmail] = useState("")
    const [room, setRoom] = useState("")

    const handleFormOnSubmit = useCallback((e)=> {
      e.preventDefault();
      console.log({
        email,
        room
      })
    }, [email,room]);

  return (
    <div>
 <div>LobbyScreen</div>
    <form onSubmit={handleFormOnSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br />
      <label htmlFor="room">Room Number</label>
      <input type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)}/>
      <br />
      <button>Join</button>
    </form>
    </div>
   
  )
}

export default LobbyScreen