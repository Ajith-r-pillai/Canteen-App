import React, { useEffect, useState } from "react";
import "./Canteen.css";
import axios from "axios";

function Canteen() {
  const [result, setresult] = useState();
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  const token=(JSON.parse(localStorage.getItem("token") || " "))

  const Getproducts = async () => {
    try {
      const result = await axios.get(
        "https://api.denzo.io/api/cus/v1/products?page=1",
        {
          headers: { Accept: "application/json", Authorization:token }
        })
  
      setresult(result.data.message);
    } catch (error) {
      alert(error.response.data.message);

      //   console.log(error.response.data.message);
    }
  };

  console.log(result);
  useEffect(() => {
    Getproducts();
    getDate();
  }, []);

  return (
    <div className="canteen-main">
      <div style={{ fontFamily: "Alegreya Sans", fontSize: "1.5rem" }}>
        {getDate()}
      </div>
      <div className="canteen-list">
        <h2>Canteen</h2>
      </div>
    </div>
  );
}

export default Canteen;
