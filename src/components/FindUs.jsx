import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUs() {
  return (
    <div>
      <h2 className="font-semibold mb-4">Login with</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram></FaInstagram> Instagram
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter></FaTwitter> Twitter
        </button>
      </div>
    </div>
  );
}
