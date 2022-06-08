import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const IndexView = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid mt-4">
      <Button variant="primary" onClick={() => navigate("/configure-on-prem")}>
        On Prem Screen
      </Button>
      <Button
        variant="primary"
        onClick={() => navigate("/network-connectivity-check")}
      >
        Netwrok Connectivity Check
      </Button>
    </div>
  );
};

export default IndexView;
