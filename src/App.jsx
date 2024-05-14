import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Cards from "./Components/Cards/Cards";
import Credit from "./Components/Credit/Credit";
import { useState } from "react";

const App = () => {
  const [credit, setCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [prices, setPrices] = useState(0);
  const [names, setNames] = useState([]);

  const handleCredit = (title, totalCradites, price) => {
    if (totalCredit + totalCradites <= 20) {
      if (!names.includes(title)) {
        setNames([...names, title]);
        setCredit(credit - totalCradites);
        setTotalCredit(totalCredit + totalCradites);
        setPrices(prices + price);
      } else {
        alert("ekbarer besi 2bar add korah jabeh nah");
      }
    } else {
      alert("20 besi coros korte parbah nah");
    }
  };

  return (
    <div className="bg-slate-100">
      <Header />
      <Hero />
      <div className="container md:mx-auto md:flex mx-4 gap-4">
        <Cards handleCredit={handleCredit} />
        <Credit
          totalCredit={totalCredit}
          credit={credit}
          prices={prices}
          names={names}
        />
      </div>
    </div>
  );
};

export default App;
