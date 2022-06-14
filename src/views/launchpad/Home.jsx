import React, { useState } from "react";
import DetailsModal from "./DetailsModal";

const LaunchPadHome = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="col-12 m-5">
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Check Deatils
      </button>
      <DetailsModal show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default LaunchPadHome;
