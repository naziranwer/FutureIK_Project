const useTraverseTree = () => {
  // Add a file or folder in tree
  // Can be optimised using Dynamic Programming
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id:new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: []
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };


  const selectInnerFiles = function (tree,isSelected){
    if(tree.isFolder){
      tree.isSelected = isSelected
      tree.items.forEach((item) => {
        selectInnerFiles(item,isSelected)
      });

    }else{
      tree.isSelected = isSelected;
    }
    return tree;
  }

  const selectNode = function (tree, folderId) {

    if(tree.id === folderId){
      selectInnerFiles(tree,!tree.isSelected)
    }
   
    tree.items.forEach((item) => {
      selectNode(item, folderId);
    });
       
    return tree;
  };

  

  return { insertNode,selectNode};
};

export default useTraverseTree;