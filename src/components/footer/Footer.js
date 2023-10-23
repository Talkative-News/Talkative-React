import React from "react";
import "./footer.css";
import dotLogo from "../../images/footer/Dot Talkative.svg";
import Informatics from "../../images/footer/infor.png";
import fti from "../../images/footer/fti.png";
import ukdw from "../../images/footer/ukdw.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="leftWing">
          <div className="logo-place">
            <img src={dotLogo} alt=""></img>
            <span>Talkative</span>
          </div>
          <div className="below-logo-text">
            <span>
              Situs berita terupdate di Indonesia! Terdapat banyak bacaan dan
              informasi terkini. Anda juga dapat berdiskusi bersama.{" "}
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="bottomText">
            <span>
              2023 Talkative News. All rights reserved. Terms of use | Privacy
              policy
            </span>
          </div>
        </div>
        <div className="instance-img">
          <img src={Informatics} alt=""></img>
          <img src={fti} alt=""></img>
          <img src={ukdw} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
