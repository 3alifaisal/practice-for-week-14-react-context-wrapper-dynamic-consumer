import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
function Match() {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  return (
    <div>
      <button onClick={() => setMatch(!match)}> MATCHH !!!</button>
      {match && <div>{sign.match}</div>}
    </div>
  );
}
export default Match;
