// Subfolder.js
import React, { useState, useEffect } from 'react';

const Subfolder = ({ subfolder, isChecked }) => {
  const [isSubfolderChecked, setIsSubfolderChecked] = useState(false);

  useEffect(() => {
    setIsSubfolderChecked(isChecked);
  }, [isChecked]);

  const toggleCheckbox = () => {
    setIsSubfolderChecked(!isSubfolderChecked);
  };

  return (
    <div>
      {/* <input type="checkbox" checked={isSubfolderChecked} onChange={toggleCheckbox} /> */}
      <h4>{subfolder.name}</h4>
      {/* {subfolder.files.map((file, index) => (
        <div key={index}>{file}</div>
      ))} */}
    </div>
  );
};

export default Subfolder;
