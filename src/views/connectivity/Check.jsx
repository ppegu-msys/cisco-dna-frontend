import React, { useEffect, useState } from "react";
import CheckingSvg from "src/assets/network-connectivity-check.svg";
import SuccessSvg from "src/assets/network-connectivity-success.svg";

const NetwrokConnectivityCheck = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let timer = null;
    timer = setTimeout(() => {
      setSuccess(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <div className="col-12">
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
  );
};

export default NetwrokConnectivityCheck;
