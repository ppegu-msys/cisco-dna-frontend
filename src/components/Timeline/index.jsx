import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const TimeLine = ({ steps }) => {
  const configure = useSelector((state) => state.configure);

  return (
    <div className="row justify-content-center">
      {steps.map((step, i) => (
        <div key={i} className="col-11">
          <div className="row">
            <div className="col-2">
              <div
                className={`${
                  configure.currentStep > i
                    ? "oval-done"
                    : i === configure.currentStep
                    ? "oval-active"
                    : "oval"
                } d-flex justify-content-center align-items-center`}
              >
                {i > configure.currentStep && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
                {i <= configure.currentStep && <span>{i + 1}</span>}
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
