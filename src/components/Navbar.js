import horoscopesObj from "../data/horoscopes";
import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  const { setCurrentSign } = useContext(HoroscopeContext);
  console.log("the nav bar also rerenders damn ");
  return (
    <nav>
      {horoscopes.map((sign) => (
        <span key={sign} onClick={() => setCurrentSign(sign)}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
