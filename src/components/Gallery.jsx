import React from "react";
import { Link } from "react-router-dom";
import eco_1 from "../assets/jpg/eco-1.jpg";
import eco_2 from "../assets/jpg/eco-2.jpg";
import eco_3 from "../assets/jpg/eco-3.jpg";
import eco_4 from "../assets/jpg/eco-4.jpg";
import eco_5 from "../assets/jpg/eco-5.jpg";
import eco_6 from "../assets/jpg/eco-6.jpg";
import eco_7 from "../assets/jpg/eco-7.jpg";
import eco_8 from "../assets/jpg/eco-8.jpg";
import eco_10 from "../assets/jpg/eco-10.jpg";

import eco_12 from "../assets/jpg/eco-12.jpg";
import eco_13 from "../assets/jpg/eco-13.jpg";
import eco_14 from "../assets/jpg/eco-14.jpg";

import eco_16 from "../assets/jpg/eco-16.jpg";

function Gallery() {
  return (
    <div>
      <div className="grid-container">
        <Link
          className="grid-container-row-2"
          to="/category/sale/DLKOKGv32DK7TUTHmNS2"
        >
          <img src={eco_1} alt="rent" />
        </Link>
        <Link className="grid-2" to="/category/sale/gKrT172s8dXNxK7cnn8n">
          <img src={eco_2} alt="sell" />
        </Link>
        <Link className="grid-2" to="/category/sale/IsgJpnDJPa8nQQirnIol">
          <img src={eco_3} alt="sell" />
        </Link>
        <Link className="" to="/category/sale/Jz46gaZwbXMMl7rt9SAX">
          <img src={eco_4} alt="sell" />
        </Link>

        <Link
          className="grid-container-col-2"
          to="/category/sale/PTjLi2q8nKQkzr3Ygfl8"
        >
          <img src={eco_5} alt="sell" />
        </Link>

        <Link
          className="grid-container-row-2"
          to="/category/sale/TxNwpM4jZ4wVT4Tq4qBg"
        >
          <img src={eco_6} alt="sell" />
        </Link>
        <Link className="" to="/category/sale/s5HQG5TxnyIFr0jFN9jM">
          <img src={eco_7} alt="sell" />
        </Link>
        <Link className="" to="/category/sale/RYPGOMSRCfNM4LAPNgnM">
          <img src={eco_8} alt="sell" />
        </Link>
        <Link className="" to="/category/sale/OqgXL8dnW5urdFW5GPhX">
          <img src={eco_10} alt="sell" />
        </Link>
        <Link
          className="grid-container-col-2"
          to="/category/rent/9ZHP0VRj2udySxWswVb0"
        >
          <img src={eco_16} alt="rent" />
        </Link>

        <Link className="grid-2" to="/category/sale/bZBrq4NMVBeAPmpPcSE6">
          <img src={eco_12} alt="sell" />
        </Link>
        <Link
          className="grid-container-col-2"
          to="/category/sale/yFNkB2HHwRrL7NRdu0W3"
        >
          <img src={eco_13} alt="sell" />
        </Link>
        <Link className="grid-2" to="/category/sale/bzoInvPY5h81DHfmeMnf">
          <img src={eco_14} alt="sell" />
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
