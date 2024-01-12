import React, { useState } from 'react';
import '../style/FolderStack.css'; // Import your CSS file

const FolderStack = () => {
  const [stackedFolders, setStackedFolders] = useState([]);
  const [resetStack, setResetStack] = useState(false);

  const folders = [
    { id: 1, title: 'Folder 1' },
    { id: 2, title: 'Folder 2' },
    { id: 3, title: 'Folder 3' },
    // Add more folders as needed
  ];

  const handleFolderClick = (id) => {
    if (resetStack) {
      setStackedFolders([]);
      setResetStack(false);
    }

    setStackedFolders((prevStack) => [...prevStack, id]);
  };

  const handleStackClick = () => {
    setResetStack(true);
  };

  return (
    <div className="folder-stack">
      {folders.map((folder) => (
        <div
          key={folder.id}
          className={`folder ${stackedFolders.includes(folder.id) ? 'expanded' : ''}`}
          onClick={() => handleFolderClick(folder.id)}
        >
          <h2>{folder.title}</h2>
        </div>
      ))}
      {stackedFolders.length > 1 && (
        <div className="stack" onClick={handleStackClick}>
          <h2>Stack</h2>
        </div>
      )}
    </div>
  );
};

export default FolderStack;
