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
        gap: "1rem",
      }}
    >
      <button
        type="button"
        className="btn btn-primary d-flex align-items-center gap-2 mb-5"
        onClick={handleRandomCVDownload}
      >
        <Download
          size={22}
          className="transition-transform group-hover:rotate-12"
        />
        Curriculum Vitae
      </button>

      {/* Email Contact Button */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=shaharir.cse@gmail.com&su=Subject%20Here&body=Write%20your%20message%20here"
        target="_blank"
        className="d-flex align-items-center gap-2 text-decoration-none text-dark bg-info py-2 px-2"
      >
        <Mail
          size={22}
          className="transition-transform group-hover:-rotate-12"
        />
        <span className="font-semibold text-lg">Contact With Email</span>
      </a>
    </div>
  );
};

export default HireMe;
