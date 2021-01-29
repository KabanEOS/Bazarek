import { Link } from "react-router-dom";
import React, { useState, Text, TextInput, View  } from "react";

export const QtyCounter = (props) => {
    const onChangeValue = props.onChangeValue;

    const [qtyValue, setQtyValue] = useState(1);

    const incAmount = () => {
      setQtyValue(qtyValue + 1);
      onChangeValue(qtyValue + 1);
    };
  
    const decAmount = () => {
      if (qtyValue > 0) setQtyValue(qtyValue - 1);
      if (qtyValue > 0) onChangeValue(qtyValue - 1);
    };
  
    return <>
      <p className="cartItem__qty__Block">
        <div className="cartItem__qty">
          <form>
            <label >
              x Qty 
              <input
                onChange={(event) => {
                    setQtyValue(parseInt(event.target.value));
                    onChangeValue(parseInt(event.target.value));
                }}
                value={qtyValue}
                // type="number"
                placeholder={1}
              />
            </label>
          </form>
        </div>
      </p>
      <p className="incDec__bts__Block">
        <div className="incDec__bts">
          <button className="qtyInc" onClick={incAmount}>
            <i className="fas fa-plus"></i>
          </button>
          <button className="qtyDec" onClick={decAmount}>
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </p>
    </>
}