import React, { useState, useEffect } from "react";
import ValidCard from "./Algo.js";

export default function Window() {
  const [cardNumber, setCardNumber] = useState("");
  const [result, setResult] = useState("Please Enter a Card Number");

  useEffect(() => {
    if (cardNumber) {
      setResult(ValidCard(cardNumber) ? "CARD IS VALID" : "CARD IS INVALID");
    }
  }, [cardNumber]);

  return (
    <div className="window">
      <form>
        <label>Validation Form</label>
        <input
          type="text"
          id="card-number"
          name="card-number"
          placeholder="Enter credit card number..."
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        ></input>
      </form>
      <div>Result</div>
      <div className="result">{result}</div>
    </div>
  );
}
