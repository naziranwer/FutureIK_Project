// Subfolder.js
import React, { useState, useEffect } from "react";

const Subfolder = ({ subfolder, isChecked }) => {
  const [isSubfolderChecked, setIsSubfolderChecked] = useState(false);
  const [activeSub, setActiveSub] = useState(null);
  const [showFile, setShowFile] = useState(false);

  // console.log("status from parent",isChecked);

  useEffect(() => {
    setIsSubfolderChecked(isChecked);
  }, [isChecked]);

  const toggleCheckbox = () => {
    setIsSubfolderChecked(!isSubfolderChecked);
  };

  const handleShowFile = () => {
    setActiveSub(subfolder);
    setShowFile(!showFile);
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input

          type="checkbox"
          checked={isSubfolderChecked}
          onChange={toggleCheckbox}
        />
        <h4 style={{ color: "red" }}  onClick={handleShowFile}>
        
          {subfolder.name}
        </h4>
      </div>
      {showFile &&
        subfolder.files.map((file, index) => (
          <div key={index} style={{ marginLeft: "30px", color: "purple" }}>
            {file}
          </div>
        ))}
    </div>
  );
};

export default Subfolder;
