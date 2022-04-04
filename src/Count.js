import React, { useState, useEffect } from 'react';
import countapi from 'countapi-js';


function Count () {
    const [data, setData] = useState([]);

    const handleClick = () => {
      countapi.hit('1ccb732e-b55a-4404-ad3f-0f99c02fe44e').then(
        (data) => {
            setData(data);
        },
        (error) => {
            console.log(error);
        }
      );
    }
    
  countapi.get('1ccb732e-b55a-4404-ad3f-0f99c02fe44e').then(
    (data) => {
      setData(data);
    },
    (error) => {
      console.log(error);
    }
  );

  const value = data.value ? (Number(data.value)).toLocaleString() : "";

    return (
      <>
        <p className="button-count"> {value} Clicks</p>
        <button onClick={handleClick}>Click Me</button>
      </>
    );
}

export default Count;