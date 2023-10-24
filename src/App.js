import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./styles.css";
import explorer from "./data/folderData"

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode,selectNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  const handleSelectNode = (folderId) => {
    let finalTree = selectNode(explorerData, folderId);
    setExplorerData({...finalTree});
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} handleSelectNode={handleSelectNode} explorer={explorerData} />
    </div>
  );
}

// fix connect script in latest video
