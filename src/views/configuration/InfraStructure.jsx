import React from "react";

const InfraStructure = () => {
  return (
    <div className="col-8 infraclass">
      <h3 className="title">Your AWS InfraStructure Configuration</h3>
      <p className="subtitle">
        Review your AWS Infrastructure details and make changes. Inf you are
        satishfied with your selection, click the "Start Configuring AWS Infra"
      </p>

      <div className="mt-5">
        <h6 className="text-primary">AWS Infrastructure</h6>
      </div>
      <div className="details mt-5">
        <h6>ENVIRONMENT DETAILS</h6>
        <div className="col-12 mt-4">
          <div className="row justify-content-between">
            <div className="col-4">Environment Name</div>
            <div className="col-8">
              <p>DNAC_Virtual_Setup</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-4">Region</div>
            <div className="col-8">
              <p>us-east-2</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-4">Availability Zone</div>
            <div className="col-8">
              <p>us-east-2-lax-1a</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-4">AWS VPC CIDR</div>
            <div className="col-8">
              <p>10.192.0.0/28</p>
            </div>
          </div>
        </div>
      </div>
      <div className="details mt-5">
        <h6>VPN DETAILS</h6>
        <div className="col-12 mt-4">
          <div className="row justify-content-between">
            <div className="col-4">Customer Gateway IP</div>
            <div className="col-8">
              <p>187.34.56.1</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-4">VPN Vendor</div>
            <div className="col-8">
              <p>ExpressVPN</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-4">VPN Model</div>
            <div className="col-8">
              <p>X2.4</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-4">VPN Version</div>
            <div className="col-8">
              <p>VPNV0.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfraStructure;
