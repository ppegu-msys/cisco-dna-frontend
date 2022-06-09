import React from "react";
import { Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ExitIcon from "src/assets/icons/exit.svg";
import TimeLine from "src/components/Timeline";
import "./styles.css";

const ConfigureElement = () => {
  const steps = [
    {
      label: "Configure AWS Infrastructure",
      details: "With EC2, VPN Details",
      success: true,
    },
    {
      label: "Configure On-pem",
      details: "Precheck with AWS",
      success: true,
    },
    {
      label: "Netwrok Connectivity Check",
      details: "Check IPSec tunnel connection",
      active: true,
    },
    {
      label: "Configure Cisco DNA center",
      details: "With proxy, Cisco DNA Center details",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row mt-5 mb-5">
        <div className="col-3">
          <TimeLine steps={steps} />
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>

      <div
        className="footer"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="row container-fluid justify-content-between align-items-center h-100">
          <div className="col-1 row justify-content-center align-items-center mx-3">
            <Button variant="light" className="exit-button">
              <img alt="exit-icon" src={ExitIcon} />
              <span className="text">Exit</span>
            </Button>
          </div>
          <div className="col-6 row justify-content-center align-items-center">
            <div className="col-4">
              <Button variant="outline-primary" className="w-100">
                Back
              </Button>
            </div>
            <div className="col-8">
              <Button variant="primary" className="w-100">
                Proceed to Network Connectivity Check
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigureElement;
