import { createStore } from "redux";

const initialState = {
  users: [],
  loggedUsers: null,
  products: [
    {
      id: 1,
      name: "Pen",
      price: 50,
    },
    {
      id: 2,
      name: "Pencil",
      price: 10,
    },
    {
      id: 3,
      name: "Earaser",
      price: 20,
    },
    {
      id: 4,
      name: "Sharpner",
      price: 30,
    },
  ],
  cart: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      }
    
    
    default:
      return state;
  }
};

export default createStore(userReducer);
