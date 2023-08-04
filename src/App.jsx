import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/apis/v1/users")
    .then(res => {
      setUsers(res.data.data)
    })
  }, [])
  return (
    <div className="App">
      <form 
        onSubmit={(e) => {}} 
        action={`${process.env.REACT_APP_SERVER_HOST}apis/v1/users`}
        method="post"
        encType="multipart/form-data"
      >
      <img id="avatar_preview" style={{width: "100px", height: "100px", borderRadius: "50%"}} src={`${process.env.REACT_APP_SERVER_HOST}images/no_avatar.jpg`}/>
        Email: <input name="email" type="email" />
        <br></br>
        Password: <input name="password" type="password" />
        <br></br>
        Avatar: <input name="avatar" onChange={(e) => {
          if(e.target.files.length != 0) {
            document.getElementById("avatar_preview").src = URL.createObjectURL(e.target.files[0])
          }
        }} type="file" />
        <button type="submit">Register</button>
      </form>

      <div className="userList">
        <ul>
          {
            users.map((user, index) => (
              <li key={user.id}>
                <div>Emai: {user.email}</div>
                <img style={{width: "100px", height: "100px", borderRadius: "50%"}} src={`${process.env.REACT_APP_SERVER_HOST}${user.avatar}`}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
