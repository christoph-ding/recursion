// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // default values 
  function recur(className, root) {
    var elements_which_fit = [];
    var root = root || document.body;
    var root_classes = root.classList;
    
    // Base Case 
    // Does root CONTAIN className?  OH WAIT, we cannot use CONTAIN, so we have to iterate...        
    for (var i = 0; i < root_classes.length; i++) {
      if (root_classes[i] == className) {
        var current_node = root;
        elements_which_fit.push(current_node);
      };
    }
      
    // Recursive Case
    // recurse on children
    if (root.childNodes.length > 0 ) {
      var current_children = root.children;    
      for (var i = 0; i < current_children.length; i++) {
      // that child is its own 'tree'
      var child_elements_filtered = recur(className, current_children[i]);
      elements_which_fit = elements_which_fit.concat(child_elements_filtered);
      };
    };

    return elements_which_fit;
    };

  return recur(classNames);
};



