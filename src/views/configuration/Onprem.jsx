import React from "react";
import { Alert, Button } from "react-bootstrap";
import DownloadIcon from "src/assets/download.svg";

const OnpremView = () => {
  return (
    <div className="col-12">
      <h1 className="title">Configure On-prem</h1>
      <p className="subtitle">
        Please use the configuration file to complete the on-prem configuration
      </p>
      <div className="instructions mt-5">
        <h5>Instructions</h5>
        <div className="step mt-4 mb-2">
          <h6 className="step-title">Step 1:</h6>
          <p className="step-subtitle">Create an IPsec policy</p>
        </div>
        <div className="step my-2">
          <h6 className="step-title text-bold">Step 2:</h6>
          <p className="step-subtitle">Create two IPsec Connections</p>
        </div>
        <div className="step my-2">
          <h6 className="step-title text-bold">Step 3:</h6>
          <p className="step-subtitle">Connect IPsec Tunnels</p>
        </div>
      </div>
      <div className="mt-5">
        <Alert variant="primary">
          <div className="row align-items-center justify-content-around ">
            <div className="col-6">
              <h6 className="subtitle">
                Please download the config gile and forward this to your network
                administrator to configure the IPsec tunnel.
              </h6>
            </div>
            <div className="col-4">
              <Button variant="outline-primary">
                <img alt="download-icon" src={DownloadIcon} />
                <span className="m-2 ste-title">
                  Download Configuration File
                </span>
              </Button>
            </div>
          </div>
        </Alert>
      </div>
    </div>
  );
};

export default OnpremView;
