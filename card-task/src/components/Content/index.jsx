import React from "react";
import "./index.css";
import Card from "./components/Card";
import { useSelector } from "react-redux";

const Content = () => {
  const { cardsArray } = useSelector((state) => state.cards);
  return (
    <div className="content_container">
      <div className="card_content">
        {cardsArray?.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
export default Content;
