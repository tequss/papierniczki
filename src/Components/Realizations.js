import React from "react";
import "../Components/Styles/Realizations.css";

function Realizations() {
  return (
    <div className="realizations">
      <h2 style={{ color: "#434343" }}>Portfolio</h2>
      <div className="realizations-container">
        <img src="/images/galery/galery2.jpg" alt="" />
        <img src="/images/galery/image0.jpeg" alt="" />
        <img src="/images/galery/image1.jpeg" alt="" />
        <img src="/images/galery/galery6.jpg" alt="" />
        <img src="/images/galery/galery1.jpg" alt="" />
        <img src="https://source.unsplash.com/1300x1200/?oman" alt="" />
        <img src="https://source.unsplash.com/1300x1200/?turkey" alt="" />
        <img src="https://source.unsplash.com/1300x1200/?iran" alt="" />
      </div>
    </div>
  );
}

export default Realizations;
