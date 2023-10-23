// MainFolder.js
import React, { useState } from 'react';
import Subfolder from './subFolder';

const MainFolder = ({ mainFolder }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeMain,setActiveMain]= useState(null);
  const [showSubFolder,setShowSubFolder]=useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleShowSubFolder=()=>{
    setActiveMain(mainFolder);
    // console.log(activeMain,"is clicked");
    setShowSubFolder(!showSubFolder);
  }

  return (
    <div >
      {/* <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} /> */}
      <h3 onClick={handleShowSubFolder}>{mainFolder.name}</h3>
      {showSubFolder && activeMain?.name === mainFolder?.name && ( mainFolder?.subfolders?.map((subfolder, index) => (
        <Subfolder key={index} subfolder={subfolder} isChecked={isChecked} />)
      ))}
    </div>
  );
};

export default MainFolder;
