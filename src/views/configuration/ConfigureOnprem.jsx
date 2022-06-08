import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alert, Button } from "react-bootstrap";
import "./style.css";

const ConfigureOnprem = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-3">Wizard component here</div>
        <div className="col-8">
          <div className="col-12">
            <h3>Configure On-prem</h3>
            <p>
              Please use the configuration file to complete the on-prem
              configuration
            </p>
            <div className="instructions">
              <h5>Instructions</h5>
              <div className="step">
                <h6 className="text-primary text-bold">Step 1:</h6>
                <p className="text-secondary">Create an IPsec policy</p>
              </div>
              <div className="step">
                <h6 className="text-primary text-bold">Step 2:</h6>
                <p className="text-secondary">Create two IPsec Connections</p>
              </div>
              <div className="step">
                <h6 className="text-primary text-bold">Step 3:</h6>
                <p className="text-secondary">Connect IPsec Tunnels</p>
              </div>
            </div>
            <div className="mt-5">
              <Alert variant="primary">
                <div className="row align-items-center justify-content-around ">
                  <div className="col-6">
                    <h6 className="text-black">
                      Please download the config gile and forward this to your
                      network administrator to configure the IPsec tunnel.
                    </h6>
                  </div>
                  <div className="col-4">
                    <Button variant="outline-primary">
                      <FontAwesomeIcon icon={faDownload} />
                      <span className="m-2">Download Configuration File</span>
                    </Button>
                  </div>
                </div>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigureOnprem;
