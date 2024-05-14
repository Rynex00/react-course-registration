import PropTypes from "prop-types";

const Card = ({ card, handleCredit }) => {
  const { title, description, image, price, time } = card;
  return (
    <div>
      <div className="card bg-white shadow-xl ">
        <figure className="px-4 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>

        <div className="card-body ">
          <div>
            <h2 className="card-title text-2xl">{title}</h2>
            <p className=" w-full text-lg text-gray-500">{description}</p>
            <div className="flex justify-between md:text-xl text-gray-500">
              <p>Price: {price}</p>
              <p className="flex justify-end">Credit: {time}hr</p>
            </div>
          </div>
          <div className="">
            <button
              onClick={() => handleCredit(title, time, price)}
              className="btn bg-blue-500 w-full "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleCredit: PropTypes.func.isRequired,
};

export default Card;
