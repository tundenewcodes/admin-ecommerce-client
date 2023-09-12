import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          tortor vel ex vehicula, eget dictum nisi faucibus. Nulla facilisi.
          Fusce tincidunt vestibulum turpis, nec tincidunt dolor elementum non.
          In hac habitasse platea dictumst. Vivamus tristique risus a dui
          gravida, nec cursus dolor auctor. Sed posuere bibendum ex, a ultricies
          felis volutpat eu. Vivamus volutpat eget justo eu commodo. Curabitur
          quis justo vel erat laoreet consequat. Integer sit amet ex vel enim
          elementum interdum vel at turpis. Pellentesque nec sem vel nulla
          pharetra hendrerit.
          your needs!
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
