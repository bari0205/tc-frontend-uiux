import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  book: [
    {
      id: 1,
      bookid: "A12",
      title: "What if? Absurb Question",
      author: "Randall Munroe",
      photo: "Rectangle9.png",
    },
    {
      id: 2,
      bookid: "A13",
      title: "What if? Absurb Question",
      author: "Randall Munroe",
      photo: "Rectangle9.png",
    },
    {
      id: 3,
      bookid: "A14",
      title: "What if? Absurb Question",
      author: "Randall Munroe",
      photo: "Rectangle9.png",
    },
    {
      id: 4,
      bookid: "A15",
      title: "What if? Absurb Question",
      author: "Randall Munroe",
      photo: "Rectangle9.png",
    },
  ],
  isLogin: false || localStorage.getItem("isLogin"),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isLogin", true);

      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      localStorage.removeItem("isLogin");

      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};