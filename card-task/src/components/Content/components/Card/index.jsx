import React from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../../store/cards/cardSlice";
import "./index.css";

const Card = ({ item,index }) => {
  const dispatch = useDispatch();
  const handleDeleteBtn = (index) => {
    dispatch(deleteCard(index));
  };
  return (
    <div className="card_container">
      <button
        onClick={() => handleDeleteBtn(index)}
        className="close_card_btn"
      >
        x
      </button>
      <p>{item?.number}</p>
    </div>
  );
};
export default Card;
