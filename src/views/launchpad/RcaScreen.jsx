import { useFormik } from "formik";
import React from "react";
import { PasswordInput } from "src/components/Input";
import { FormikInput } from "src/components/Input";

const RcaScreen = () => {
  const form = useFormik({
    initialValues: {
      ip_address: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="col-12">
      <div className="row justify-content-around mt-5">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body p-4">
              <h5>Cisco DNA Center Plateform Logs</h5>
              <p>
                For triggering RCA we need to get the logs for Cisco DNA Center
                logs.
              </p>
              <h6 className="text-muted">SSH Details</h6>
              <div className="mt-4">IP /Host Name</div>
              <FormikInput
                id="ip_address"
                form={form}
                placeholder="IP Address"
              />
              <label className="mt-4">SSH Password</label>
              <div className="input-group">
                <PasswordInput
                  id="password"
                  form={form}
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body p-4">
              <h5>AWS/Cloud Logs</h5>
              <p>
                Access your AWS logs from Cisco DNA Center instance, CloudTrail,
                and other sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RcaScreen;
