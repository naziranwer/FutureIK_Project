// // MainFolder.js
// import React, { useState } from "react";
// import Subfolder from "./subFolder";
// import "../App.css";

// const MainFolder = ({ mainFolder }) => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [activeMain, setActiveMain] = useState(null);
//   const [showSubFolder, setShowSubFolder] = useState(false);

//   const toggleCheckbox = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleShowSubFolder = () => {
//     setActiveMain(mainFolder);
//     setShowSubFolder(!showSubFolder);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={isChecked}
//           onChange={toggleCheckbox}
//         />
//         <h3 style={{ color: "green" }} onClick={handleShowSubFolder}>
//           <span className="mr-2">
//             <i className="fas fa-folder-open text-blue-800"></i>
//           </span>
//           {mainFolder.name}
//         </h3>
//       </label>
//       {showSubFolder &&
//         mainFolder?.subfolders?.map((subfolder, index) => (
//           <div key={index} style={{ marginLeft: "30px" }}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={isChecked}
//                 onChange={toggleCheckbox}
//               />
//               <Subfolder subfolder={subfolder} isChecked={isChecked} />
//             </label>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default MainFolder;


// MainFolder.js
// MainFolder.js
import React, { useState, useEffect } from "react";
import Subfolder from "./subFolder";
// import "../App.css";


const MainFolder = ({ mainFolder }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeMain, setActiveMain] = useState(null);
  const [showSubFolder, setShowSubFolder] = useState(false);

  const subfolders = mainFolder?.subfolders || [];

  useEffect(() => {
    // When all subfolder checkboxes are checked, set the main folder checkbox to checked
    const allSubfoldersChecked = subfolders.every(subfolder => subfolder.isChecked);
    setIsChecked(allSubfoldersChecked);
  }, [subfolders]);
  
  console.log("isChecked status",isChecked);
  const toggleCheckbox = () => {
    // Toggle the main folder checkbox
    setIsChecked(!isChecked);
    // Update the isChecked property for all subfolders
    // subfolders.forEach(subfolder => {
    //   subfolder.isChecked = !isChecked;
    // });
  };

  const handleSubfolderChange = () => {
    // When a subfolder checkbox changes, update the main folder checkbox
    const allSubfoldersChecked = subfolders.every(subfolder => subfolder.isChecked);
    setIsChecked(allSubfoldersChecked);
  };

  const handleShowSubFolder = () => {
    setActiveMain(mainFolder);
    setShowSubFolder(!showSubFolder);
  };

  return (
    <div >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <h3 style={{ color: "green", marginLeft: "10px" }} onClick={handleShowSubFolder}>
          <span className="mr-2">
            <i className="fas fa-folder-open text-blue-800"></i>
          </span>
          {mainFolder.name}
        </h3>
      </div>
      {showSubFolder &&
        subfolders.map((subfolder, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
            <input
            className="bg-red-800"
              type="checkbox"
              checked={subfolder.isChecked}
              onChange={() => {
                subfolder.isChecked = !subfolder.isChecked;
                handleSubfolderChange();
              }}
            />
            <Subfolder subfolder={subfolder} isChecked={subfolder.isChecked} />
          </div>
        ))}
    </div>
  );
};

export default MainFolder;
