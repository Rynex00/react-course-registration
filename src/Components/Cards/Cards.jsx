import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({ handleCredit }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("Course.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, inx) => (
            <Card key={inx} handleCredit={handleCredit} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  handleCredit:PropTypes.func.isRequired
  
}

export default Cards;
