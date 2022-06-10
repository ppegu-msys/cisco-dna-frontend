import React from "react";

const DNACenter = () => {
  return (
    <div className="col-12">
      <div className="col-8">
        <h3 className="title">Your Cisco DNA Center</h3>
        <p className="subtitle">
          Review your Cisco DNA Center Configuration details and make changes.
          if you satishfied, Start Cisco DNA Center Configuration now.
        </p>
      </div>

      <div className="mt-5">
        <h6 className="text-primary">Configure Cisco DNA Center</h6>
        <div className="d-flex mt-3">
          <p>Customer DNS</p>
          <p className="mx-5">89.89.98.8</p>
        </div>
      </div>

      <div className="mt-5">
        <h6>PROXY DETAILS</h6>
        <div className="d-flex mt-3">
          <p>Customer HTTPS Network Proxy</p>
          <p className="mx-5">Unauthenticated</p>
        </div>
      </div>

      <div className="mt-5">
        <h6>Cisco DNA Center Credentials</h6>
        <div className="d-flex mt-3">
          <div className="col-2">
            <p>SSH Password</p>
          </div>
          <div className="col-3">
            <p className="mx-5">●●●●●●●●●●●●●●●●</p>
          </div>
          <div className="col-1">
            <p className="mx-5 text-primary">Show</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-2">
            <p>UI Username</p>
          </div>
          <div className="col-3">
            <p className="mx-5">admin</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-2">
            <p>UI Password</p>
          </div>
          <div className="col-3">
            <p className="mx-5">●●●●●●●●●●●●●●●●</p>
          </div>
          <div className="col-1">
            <p className="mx-5 text-primary">Show</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DNACenter;
