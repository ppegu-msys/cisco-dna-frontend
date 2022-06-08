import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.css";

const TimeLine = ({ steps }) => {
  return (
    <div className="row justify-content-center">
      {steps.map((step, i) => (
        <div key={i} className="col-11">
          <div className="row">
            <div className="col-2">
              <div
                className={`${
                  step.success
                    ? "oval-done"
                    : step.active
                    ? "oval-active"
                    : "oval"
                } d-flex justify-content-center align-items-center`}
              >
                {step.success && <FontAwesomeIcon icon={faCheck} />}
                {!step.success && <span>{i + 1}</span>}
              </div>
            </div>
            <div className="col-9 d-flex flex-column justify-content-center mx-2">
              <div className="timeline-texts">
                <p className="label">{step.label}</p>
                <p className="details">{step.details}</p>
              </div>
            </div>
          </div>
          {steps.length > i + 1 && <div className="step-line"></div>}
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
