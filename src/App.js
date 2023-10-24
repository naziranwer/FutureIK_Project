// App.js
import "./App.css"
import React from 'react';
import MainFolder from './components/mainFolder';


const mainFolders = [
  {
    name: 'Main Folder 1',
    subfolders: [
      {
        name: 'Subfolder 1.1',
        files: ['File 1', 'File 2', 'File 3', 'File 4', 'File 5'],
      },
      {
        name: 'Subfolder 1.2',
        files: ['File 6', 'File 7', 'File 8', 'File 9', 'File 10'],
      },
      {
        name: 'Subfolder 1.3',
        files: ['File 11', 'File 12', 'File 13', 'File 14', 'File 15'],
      },
      {
        name: 'Subfolder 1.4',
        files: ['File 16', 'File 17', 'File 18', 'File 19', 'File 20'],
      },
      {
        name: 'Subfolder 1.5',
        files: ['File 21', 'File 22', 'File 23', 'File 24', 'File 25'],
      },
    ],
  },
  {
    name: 'Main Folder 2',
    subfolders: [
      {
        name: 'Subfolder 2.1',
        files: ['File 1', 'File 2', 'File 3', 'File 4', 'File 5'],
      },
      {
        name: 'Subfolder 2.2',
        files: ['File 6', 'File 7', 'File 8', 'File 9', 'File 10'],
      },
      {
        name: 'Subfolder 2.3',
        files: ['File 11', 'File 12', 'File 13', 'File 14', 'File 15'],
      },
      {
        name: 'Subfolder 2.4',
        files: ['File 16', 'File 17', 'File 18', 'File 19', 'File 20'],
      },
      {
        name: 'Subfolder 2.5',
        files: ['File 21', 'File 22', 'File 23', 'File 24', 'File 25'],
      },
    ],
  },
  {
    name: 'Main Folder 3',
    subfolders: [
      {
        name: 'Subfolder 3.1',
        files: ['File 1', 'File 2', 'File 3', 'File 4', 'File 5'],
      },
      {
        name: 'Subfolder 3.2',
        files: ['File 6', 'File 7', 'File 8', 'File 9', 'File 10'],
      },
      {
        name: 'Subfolder 3.3',
        files: ['File 11', 'File 12', 'File 13', 'File 14', 'File 15'],
      },
      {
        name: 'Subfolder 3.4',
        files: ['File 16', 'File 17', 'File 18', 'File 19', 'File 20'],
      },
      {
        name: 'Subfolder 3.5',
        files: ['File 21', 'File 22', 'File 23', 'File 24', 'File 25'],
      },
    ],
  },
  {
    name: 'Main Folder 4',
    subfolders: [
      {
        name: 'Subfolder 4.1',
        files: ['File 1', 'File 2', 'File 3', 'File 4', 'File 5'],
      },
      {
        name: 'Subfolder 4.2',
        files: ['File 6', 'File 7', 'File 8', 'File 9', 'File 10'],
      },
      {
        name: 'Subfolder 4.3',
        files: ['File 11', 'File 12', 'File 13', 'File 14', 'File 15'],
      },
      {
        name: 'Subfolder 4.4',
        files: ['File 16', 'File 17', 'File 18', 'File 19', 'File 20'],
      },
      {
        name: 'Subfolder 4.5',
        files: ['File 21', 'File 22', 'File 23', 'File 24', 'File 25'],
      },
    ],
  },
  {
    name: 'Main Folder 5',

    subfolders: [
      {
        name: 'Subfolder 5.1',
        files: ['File 1', 'File 2', 'File 3', 'File 4', 'File 5'],
      },
      {
        name: 'Subfolder 5.2',
        files: ['File 6', 'File 7', 'File 8', 'File 9', 'File 10'],
      },
      {
        name: 'Subfolder 5.3',
        files: ['File 11', 'File 12', 'File 13', 'File 14', 'File 15'],
      },
      {
        name: 'Subfolder 5.4',
        files: ['File 16', 'File 17', 'File 18', 'File 19', 'File 20'],
      },
      {
        name: 'Subfolder 5.5',
        files: ['File 21', 'File 22', 'File 23', 'File 24', 'File 25'],
      },
    ],
  },
];

const App = () => {
  return (
    <div className='App '>
      {mainFolders.map((mainFolder, index) => (
        <MainFolder key={index} mainFolder={mainFolder} />
      ))}
    </div>
  );
};

export default App;

