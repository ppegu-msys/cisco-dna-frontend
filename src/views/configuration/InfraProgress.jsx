import React, { useEffect, useState } from "react";
import BuildingIcon from "src/assets/icons/building.svg";
import InfraProgressIcon1 from "src/assets/icons/infra-progress-1.svg";
import InfraProgressIcon2 from "src/assets/icons/infra-progress-2.svg";
import InfraProgressIcon3 from "src/assets/icons/infra-progress-3.svg";
import SuccessIcon from "src/assets/icons/success-filled.svg";
import InProgressIcon from "src/assets/icons/in-progress.svg";

const InfraProgress = () => {
  const [step, setStep] = useState(1);

  const [currentProgress, setCurrentProgress] = useState(0);

  const [stages, setStages] = useState([
    { label: "AWS::EC2::VPNGatewayRoutePropagation", inprogress: true },
    { label: "AWS::EC2::VPNGatewayRoutePropagation", inprogress: false },
    { label: "AWS::EC2::VPNGatewayRoutePropagation", inprogress: false },
    { label: "AWS::EC2::VPNGatewayRoutePropagation", inprogress: false },
    { label: "AWS::EC2::VPNGatewayRoutePropagation", inprogress: false },
  ]);

  useEffect(() => {
    let timer = null;
    timer = setInterval(() => {
      setStages((prev) => {
        return prev.map((stage, i) => {
          if (i < currentProgress) stage.success = true;
          if (currentProgress === 2) setStep(2);
          if (currentProgress === 4) setStep(3);
          if (i === currentProgress + 1) {
            stage.inprogress = true;
            setCurrentProgress(i);
          }
          if (currentProgress + 1 === prev.length) clearInterval(timer);
          return stage;
        });
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [currentProgress]);

  return (
    <div className="col-12">
      <h3 className="title">AWS Infrastrcture Configuration In progress</h3>
      <div className="mt-4 row justify-content-between">
        <div className="col-5">
          <ul className="list-group list-group-flush">
            {stages
              .filter((stage) => stage.inprogress === true)
              .map((stage, i) => (
                <li
                  key={i}
                  className="list-group-item d-flex align-items-center activity-container pb-4 mt-3"
                >
                  <img alt="building.svg" src={BuildingIcon} className="mx-1" />
                  <span className="mx-1">{stage.label}</span>
                  <img
                    alt="building.svg"
                    src={stage.success ? SuccessIcon : InProgressIcon}
                    className="mx-5"
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className="col-6">
          <img
            alt="building.svg"
            src={
              step > 2
                ? InfraProgressIcon3
                : step > 1
                ? InfraProgressIcon2
                : InfraProgressIcon1
            }
          />
        </div>
      </div>
    </div>
  );
};

export default InfraProgress;
