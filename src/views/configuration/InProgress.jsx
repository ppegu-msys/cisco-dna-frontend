import React from "react";
import BuildingIcon from "src/assets/icons/building.svg";
import SuccessIcon from "src/assets/icons/success-filled.svg";
import InProgressIcon from "src/assets/icons/in-progress.svg";
import DnacInProgressIcon from "src/assets/icons/dnac-in-progressing.svg";
import DnacSuccessIcon from "src/assets/icons/dnac-progress-success.svg";
import ClipboardIcon from "src/assets/icons/clipboard.svg";
import { Popover, OverlayTrigger } from "react-bootstrap";

const InProgress = () => {
  const [success, setSuccess] = React.useState(false);

  const copiedPopOver = (
    <Popover id="popover-positioned-top" title="Popover top" className="p-2">
      <div className="text-center">
        <img alt="building.svg" src={SuccessIcon} className="mx-1" />
        Copied to clipboard
      </div>
    </Popover>
  );

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setSuccess(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="col-12">
      <h3 className="title">
        {success
          ? "Done! Cisco DNA Center Configured"
          : "Cisco DNA Center Configuration In progress"}
      </h3>

      <div className="mt-4 row justify-content-between">
        <div className="col-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center activity-container pb-4 mt-3">
              <img alt="building.svg" src={BuildingIcon} className="mx-1" />
              <span className="mx-1">
                Environment Setup {!success && "Initated"}
              </span>
              <img
                alt="building.svg"
                src={success ? SuccessIcon : InProgressIcon}
                className="mx-5"
              />
            </li>
          </ul>
          {success && (
            <div className="col-12 card mt-5 p-2">
              <h6 className="subtitle">CISCO DNA CENTER Details </h6>
              <div className="row justify-content-between">
                <div className="col-3 subtitle">IP Address</div>
                <div className="col-6 step-title">
                  <a href="#ip">https://16.10.1.34.2:9809</a>
                </div>
              </div>
              <div className="row justify-content-between mt-2">
                <div className="col-3 subtitle">SSH Key</div>
                <div className="col-7 step-subtitle">
                  DwDafEcKkamkug3A7g240021*CD2O0;f…
                </div>
                <div className="col-2">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={copiedPopOver}
                  >
                    <img
                      alt="clipboard.svg"
                      src={ClipboardIcon}
                      className="mx-5 pointer"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      onClick={(e) => {
                        if (!navigator.clipboard) return;
                        navigator.clipboard.writeText(
                          "DwDafEcKkamkug3A7g240021*CD2O0;f"
                        );
                      }}
                    />
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-5">
          <img
            alt="building.svg"
            src={success ? DnacSuccessIcon : DnacInProgressIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default InProgress;
