import React, { useState } from "react";
import "../Components/LoginCSS.css";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

export const Login = () => {
  const myLi = {
    listStyle: "none",
    display: "inline-block",
  };

  const products = useSelector((state) => state.products);
  const userData = useSelector((state) => state.users);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConfirmpassword] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    dispatch({
      type: "REGISTER",
      payload: {
        id: new Date().getTime(),
        name,
        username,
        password,
        conpassword,
      },
    });
  };
  return (
    <div className="container">
      <div
        style={{
          alignContent: "center",
          backgroundColor: "gray",
          textAlign: "center",
        }}
      >
        <nav
          style={{
            backgroundColor: "black",
            height: "40px",
            textAlign: "center",
            alignItems: "end",
          }}
        >
          <ul
            style={{
              padding: "10px",

              color: "white",
              justifyContent: "left",
            }}
          >
            <li style={myLi}>
              <a href="https://github.com/jagankumar-egov">Github</a>
            </li>
            <li style={myLi}>
              <a> Menu</a>
            </li>
            <li style={myLi}>
              <a> About</a>
            </li>
          </ul>
        </nav>
        <div>
          {/* <label htmlFor="userName">Username : </label> */}
          <form className="register">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            {/* <label htmlFor="password">Password : </label> */}
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
            <br />
            <input
              type="password"
              value={conpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <br />

            <input
              type="button"
              value={register}
              name="register"
              onClick={register}
            />
            <br />
          </form>
        </div>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, i) => (
              <tr key={i}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
