import React, { useState , } from "react";
import { useSelector, useDispatch } from "react-redux";

export const RegLogin = () => {
  const [username, setUsername] = useState("");
  const [ password, setPassword ] = useState("");
  const dispatch = useDispatch();
  const users = useSelector( state => state.users );


  const login = () =>
  {
    const payload = users.find( user => user.username === username && user.password === password );
      
    if ( payload )
    {
      dispatch( {
        type: 'LOGIN',
        payload : true
        
      } )
      alert("Success...!!!")
    } else
    {
      alert( "Wrong Credentials" );
    }
  }

  return (
    <div className="container">
      <form action="login">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <input type="button" value="login" onClick={login} />
      </form>
    </div>
  );
};
