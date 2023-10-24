import React, { useState, useEffect } from "react";
import Subfolder from "./subFolder";

const MainFolder = ({ mainFolder }) => {
  const [showSubFolder, setShowSubFolder] = useState(false);
  const [subfoldersChecked, setSubfoldersChecked] = useState(false);

  const subfolders = mainFolder?.subfolders || [];

  useEffect(() => {
    const allSubfoldersChecked = subfolders.every(
      (subfolder) => subfolder.isChecked
    );
    setSubfoldersChecked(allSubfoldersChecked);
  }, [subfolders]);

  const toggleSubfolders = () => {
    setSubfoldersChecked(!subfoldersChecked);
    subfolders.forEach((subfolder) => {
      subfolder.isChecked = !subfoldersChecked;
    });
  };

  const handleSubfolderChange = () => {
    const allSubfoldersChecked = subfolders.every(
      (subfolder) => subfolder.isChecked
    );
    setSubfoldersChecked(allSubfoldersChecked);
  };

  const handleShowSubFolder = () => {
    setShowSubFolder(!showSubFolder);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={subfoldersChecked}
          onChange={toggleSubfolders}
        />
        {showSubFolder ? (<img src="/image/folder open.jpg" width={20} height={20} />): (<img src="/image/close folder.png" width={20} height={20} />)}
        <div
          style={{ color: "green", marginLeft: "10px" }}
          onClick={handleShowSubFolder}
        >
          <span className="mr-2">
            <i className="fas fa-folder-open text-blue-800"></i>
          </span>
          {mainFolder.name}
        </div>
      </div>
      {showSubFolder &&
        subfolders.map((subfolder, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <input
              className="bg-red-800"
              type="checkbox"
              checked={subfolder.isChecked}
              onChange={() => {
                subfolder.isChecked = !subfolder.isChecked;
                handleSubfolderChange();
              }}
              style={{ transform: "scale(0.8)" }}
            />
            <Subfolder subfolder={subfolder} isChecked={subfolder.isChecked} />
          </div>
        ))}
    </div>
  );
};

export default MainFolder;
