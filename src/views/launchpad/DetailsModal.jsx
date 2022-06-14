import {
  faChevronDown,
  faChevronRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Modal,
  useAccordionButton,
} from "react-bootstrap";

const DetailsModal = ({ show, onHide }) => {
  const CollepseButton = ({ eventKey, title, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);

    return (
      <div
        className="d-flex align-items-center  pointer"
        onClick={useAccordionButton(eventKey, callback)}
      >
        <FontAwesomeIcon
          icon={activeEventKey === eventKey ? faChevronDown : faChevronRight}
        />
        <span className="mx-2">{title}</span>
      </div>
    );
  };

  return (
    <Modal show={show} onHide={onHide} className="modal-lg">
      <Modal.Body className="p-4">
        <div className="col-12">
          <div className="row justify-content-end">
            <div className="col-1 text-end">
              <FontAwesomeIcon
                icon={faClose}
                className="pointer"
                onClick={onHide}
              />
            </div>
          </div>
          <h5 className="mt-2">DNAC_VA1</h5>
          <div className="col-12 mt-4">
            <Accordion>
              <CollepseButton title="AWS Infrastructure" eventKey="0" />
              <Accordion.Collapse eventKey="0" className="mt-3">
                <div className="col-12">
                  <h6>ENVIRONMENT DETAILS</h6>
                  <div className="row  mt-4">
                    <div className="col-3">
                      <p>Environment Name</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">DNAC_VIRTUAL_Settup</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>Region</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">us-east-2</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>Availability Xone</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">us-east-2-lax-1a</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>AWS VPC CIDR</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">10.192.0.0/28</p>
                    </div>
                  </div>
                  <h6 className="mt-4">VPN DETAILS</h6>
                  <div className="row  mt-4">
                    <div className="col-3">
                      <p>Customer Gateway IP</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">187.34.56.1</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>VPN Vendor</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">ExpressVPN</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>VPN Model</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">X2.4</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>VPN Version</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">VPN0.5</p>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-3">
                      <p>Customer Profile</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">Medium</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>Backup Target</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">Cloud Backup (NFS)</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>Backup Target Path</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">
                        \aws-dnac\Msoft\Serverdata\BackupDirectory
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion.Collapse>
              <hr />
              <CollepseButton
                title="Cisco DNA Center Configuration"
                eventKey="1"
              />
              <Accordion.Collapse eventKey="1" className="mt-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-3">
                      <p>Customer DNS</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">89.89.98.8</p>
                    </div>
                  </div>
                  <h6 className="mt-3">PROXY DETAILS</h6>
                  <div className="row  mt-4">
                    <div className="col-3">
                      <p>Customer HTTPS Network Proxy</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">Unauthenticated</p>
                    </div>
                  </div>

                  <h6 className="mt-3">Cisco DNA Center Credentials</h6>
                  <div className="row mt-3">
                    <div className="col-3">
                      <p>SSH Password</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">●●●●●●●●●●●●●●●●</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>UI Username</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">admin</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <p>UI Password</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">●●●●●●●●●●●●●●●●</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-3">
                      <p>Cisdco DNA Center Url</p>
                    </div>
                    <div className="col-6">
                      <p className="mx-5">
                        <a href="#link">https://16.10.1.34.2:9809</a>
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex flex-row-reverse px-4">
          <button onClick={onHide} className="btn btn-outline-primary px-5">
            Close
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
