import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast(type, msg) {
  console.log("type", type);
  toast.success("nesssssssss");
  return <ToastContainer />;
}
