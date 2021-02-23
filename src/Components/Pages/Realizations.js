import React from "react";
import "../Styles/Realizations.css";
import Zoom from "react-reveal/Zoom";

function Realizations() {
  return (
    <div className="realizations">
      <h2 style={{ color: "#434343" }}>Portfolio</h2>

      <div className="realizations-container">
        <Zoom>
          <img src="/images/galery/galery7.jpg" alt="" />
          <img src="/images/galery/galery10.jpg" alt="" />
          <img src="/images/galery/galery15.jpg" alt="" />
          <img src="/images/galery/galery16.jpg" alt="" />
          <img src="/images/galery/galery13.jpg" alt="" />
          <img src="/images/galery/galery14.jpg" alt="" />
          <img src="/images/galery/galery12.jpg" alt="" />
          <img src="/images/galery/image1.jpeg" alt="" />
          <img src="/images/galery/galery6.jpg" alt="" />
          <img src="/images/galery/galery1.jpg" alt="" />
          <img src="/images/galery/galery18.jpg" alt="" />
          <img src="/images/galery/image0.jpeg" alt="" />
          <img src="/images/galery/galery2.jpg" alt="" />
          <img src="/images/galery/image10.jpeg" alt="" />
          <img src="/images/galery/imagehero.jpeg" alt="" />
        </Zoom>
      </div>
    </div>
  );
}

export default Realizations;
