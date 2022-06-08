import React from "react";
import "./styles.css";
import CheckingSvg from "src/assets/network-connectivity-check.svg";
import SuccessSvg from "src/assets/network-connectivity-success.svg";

const NetwrokConnectivityCheck = ({ success }) => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-3">Wizard here</div>
        <div className="col-8">
          <div>
            <h3>Network Connectivity Check</h3>
            {success && <p>IPSec tunnel established</p>}
            {!success && <p>Checking IPSec tunnel connectivity .....</p>}
          </div>
          <div className="row justify-content-center img-container">
            <img
              alt="network-connectivity-check.png"
              src={success ? SuccessSvg : CheckingSvg}
              className="checking-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetwrokConnectivityCheck;
