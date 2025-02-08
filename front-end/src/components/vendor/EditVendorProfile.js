import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorLogin from "./VendorLogin";
import VendorNavbar from "./VendorNavbar";
import Footer from "./Footer";
import bgimage4 from "../../../src/images/bg4.jpg";
import { baseurl } from "../baseurl";

function EditVendorProfile() {
  const history = useHistory();
  const vendorId = sessionStorage.getItem("vendorId");
  const isLoggedIn = sessionStorage.getItem("vendorLoggedIn");

  const [vendor, setVendor] = useState({
    vendorId: "",
    name: "",
    address: "",
    pincode: "",
    email: "",
    mobNo: "",
    activeStatus: "",
  });

  useEffect(() => {
    getMyProfile();
  }, []);

  const getMyProfile = async () => {
    try {
      const response = await axios.post(
        `${baseurl}/api/Vendors/getvendorbyid?vendorId=${vendorId}`
      );

      if (response.status === 200) {
        setVendor(response.data);
      }
    } catch (error) {
      console.error("Error fetching vendor profile:", error);
      toast.error("Failed to fetch vendor profile. Please try again.");
    }
  };

  const updateProfile = async () => {
    try {
      await axios.put(`${baseurl}/api/Vendors/updateprofile`, vendor);

      toast.success("Profile updated successfully");
      history.push("/vendorprofile");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  if (!isLoggedIn) {
    return <VendorLogin />;
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgimage4})`,
          backgroundAttachment: "fixed",
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -1,
          opacity: 0.5,
        }}
      ></div>
      <VendorNavbar />
      <div className="row" style={{ paddingTop: "180px" }}>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="container my-3">
            <label>
              <h4>Name</h4>
            </label>
            <input
              className="form-control my-3"
              type="text"
              style={{ height: "50px", fontSize: "20px" }}
              value={vendor.name}
              onChange={(e) => setVendor({ ...vendor, name: e.target.value })}
            />
            <label>
              <h4>Address</h4>
            </label>
            <textarea
              className="form-control my-3"
              rows="4"
              style={{ fontSize: "20px" }}
              value={vendor.address}
              onChange={(e) =>
                setVendor({ ...vendor, address: e.target.value })
              }
            />
            <label>
              <h4>Pincode</h4>
            </label>
            <input
              className="form-control my-3"
              type="text"
              style={{ height: "50px", fontSize: "20px" }}
              value={vendor.pincode}
              onChange={(e) =>
                setVendor({ ...vendor, pincode: e.target.value })
              }
            />
            <label>
              <h4>Email</h4>
            </label>
            <input
              className="form-control my-3"
              type="email"
              style={{ height: "50px", fontSize: "20px" }}
              value={vendor.email}
              onChange={(e) => setVendor({ ...vendor, email: e.target.value })}
            />
            <label>
              <h4>Mobile Number</h4>
            </label>
            <input
              className="form-control my-3"
              type="tel"
              style={{ height: "50px", fontSize: "20px" }}
              value={vendor.mobNo}
              onChange={(e) => setVendor({ ...vendor, mobNo: e.target.value })}
            />
          </div>
          <center>
            <button className="btn btn-success btn-lg my-3" onClick={updateProfile}>
              Update
            </button>
          </center>
        </div>
        <div className="col-md-3"></div>
      </div>
      <Footer />
    </div>
  );
}

export default EditVendorProfile;
