import React, { useState, useEffect } from "react";

const Subfolder = ({ subfolder, isChecked }) => {
  const [activeSub, setActiveSub] = useState(null);
  const [showFile, setShowFile] = useState(false);

  const handleShowFile = () => {
    setActiveSub(subfolder);
    setShowFile(!showFile);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {showFile ? (
          <img src="/image/folder open.jpg" width={20} height={20} />
        ) : (
          <img src="/image/close folder.png" width={20} height={20} />
        )}
        <div style={{ color: "red" }} onClick={handleShowFile}>
          {subfolder.name}
        </div>
      </div>
      {showFile &&
        subfolder.files.map((file, index) => (
          <div
            key={index}
            style={{ display: "flex", marginLeft: "30px", gap: "10px" }}
          >
            <input
              type="checkbox"
              checked={isChecked}
              style={{ transform: "scale(0.6)" }}
            />
            <img src="/image/file.jpg" width={16} height={16} />
            {file}
          </div>
        ))}
    </div>
  );
};

export default Subfolder;
