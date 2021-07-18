import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <div>
      <footer style={bgStyle} className="mt-auto py-3 text-center">
          Coded with <i className="fas fa-heart"></i> by{" "}
          <a
            className="badge badge-dark"
            rel="noopener"
            href="https://github.com/hozrifai"
            aria-label="My GitHub"
          >
            Hozayfa El Rifai
          </a>{" "}
          using <i className="fab fa-react"></i>
          <p>
            <small className="text-muted">
              {" "}
              Project code is open source. Feel free to fork and make your own
              version.
            </small>
          </p>
      </footer>
    </div>
  );
};

export default Footer;