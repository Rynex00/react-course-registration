import PropTypes from 'prop-types';


const Credit = ({ credit, totalCredit, prices, names }) => {
  console.log(names);
  return (
    <div className="md:w-1/3 mt-9 md:mt-0">
      <div className="bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-semibold  text-blue-600">
          Credit Hour Remaining: {credit}hr
        </h1>
        <br />
        <hr />
        <br />
        <div>
          <h1 className="text-2xl font-semibold">Course Name</h1>
          <div>
            {names.map((name, idx) => (
              <ol className="text-xl text-gray-500 space-x-3" key={idx}>
                <li>{idx+1} {name}</li>
              </ol>
            ))}
          </div>
        </div>
        <br />
        <hr />
        <br />
        <h1 className="text-xl font-semibold">
          Total Credit Hour : {totalCredit}
        </h1>
        <br />
        <hr />
        <br />
        <h1 className="text-xl font-bold">Total Price : {prices} </h1>
      </div>
    </div>
  );
};

Credit.propTypes = {
  credit:PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired,
  prices:PropTypes.number.isRequired,
  names: PropTypes.array.isRequired
  
}

export default Credit;
