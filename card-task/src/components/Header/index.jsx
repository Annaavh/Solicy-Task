import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import { addCard,sortCards } from "../../store/cards/cardSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleAddCard = () => {
    dispatch(
      addCard({ id: Math.random(), number: Math.floor(Math.random() * 900) })
    );
  };
  const handleSortCards = () =>{
    dispatch(sortCards())
  }
  return (
    <div className="header_container">
      <div className="header_btns_container">
        <button onClick={handleAddCard} className="add_card_btn">
          Add Card
        </button>
        <button onClick={handleSortCards} className="sort_card_btn">Sort Cards</button>
      </div>
    </div>
  );
};
export default Header;
