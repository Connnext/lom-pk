import React from "react";
//import logo from "./../../../img/logo.png";
import { Link } from "react-router-dom";
import logo from "./../../../img/loggo.jpg";

export default function Logo() {
  return (
    <>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </>
  );
}

{
  /* <svg
  style={{ height: "90px", width: "60px" }}
  className="logo__img"
  xmlns="http://www.w3.org/2000/svg"
  id="Layer_1"
  data-name="Layer 1"
  viewBox="0 0 24 24"
>
  <path d="m16,20c0,2.209-1.791,4-4,4s-4-1.791-4-4c0-1.15.667-2.04,1.33-2.725,0,0-.185,1.725.67,1.725,1.812,0,.786-2.59,2-3.991,1.263,1.263,4,2.675,4,4.991Zm-2.99.51h0l-1.01-1.01-1.01,1.01c-.558.558-.558,1.462,0,2.021.558.558,1.462.558,2.02,0,.558-.558.558-1.462,0-2.021Zm10.99,1.49v2h-6v-11.132c-.917-.574-3.285-1.868-6-1.868-2.732,0-5.088,1.292-6,1.866v11.134H0v-2h1V6h22v16h1ZM.052,2.114C-.217,1.04.595,0,1.702,0h20.595c1.107,0,1.919,1.04,1.651,2.114l-.948,1.886H1L.052,2.114Z" />
</svg> */
}
