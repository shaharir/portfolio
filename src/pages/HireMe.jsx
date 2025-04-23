import React from "react";
import { Download, Mail } from "lucide-react";

const HireMe = () => {
  const handleRandomCVDownload = () => {
    const cvFiles = ["/cv-1.pdf"];

    const link = document.createElement("a");
    link.href = cvFiles;
    link.download = cvFiles.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        flexDirection: "column",
        gap: "2rem",
        backgroundColor: "#f8f9fa", // হালকা ব্যাকগ্রাউন্ড
        padding: "2rem",
      }}
    >
      <h2 className="fw-bold mb-4 text-primary">📬 Let's Work Together!</h2>

      <p className="text-muted mb-4" style={{ maxWidth: "600px" }}>
        If you're looking for a passionate and skilled frontend developer who
        can bring life to your product UI and user experience — I'm just one
        click away!
      </p>

      {/* Download CV */}
      <button
        type="button"
        className="btn btn-outline-primary d-flex align-items-center gap-2 px-4 py-2"
        onClick={handleRandomCVDownload}
        style={{ borderRadius: "8px", fontWeight: "500" }}
      >
        <Download size={22} className="transition-transform" />
        Download My CV
      </button>

      {/* Email Contact */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=shaharir.cse@gmail.com&su=Subject%20Here&body=Write%20your%20message%20here"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center gap-2 text-decoration-none text-white bg-success py-2 px-4 mt-3"
        style={{
          borderRadius: "8px",
          fontWeight: "500",
          transition: "background-color 0.3s ease",
        }}
      >
        <Mail size={22} className="transition-transform" />
        <span className="fs-5">Contact Me via Email</span>
      </a>
    </div>
  );
};

export default HireMe;
