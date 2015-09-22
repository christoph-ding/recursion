// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

function stringifyJSON(obj) {

  // debugging logs
  
  // have logic based on type of data obj

  // NON COLLECTION  
  if (typeof(obj) === "undefined")   
      {return;}

  else if (typeof(obj) === "number" || typeof(obj) === "boolean" || obj === null) 
      {return "" + obj + ""}

  else if (typeof(obj) === "string") {
  return "\"" + obj + "\"";
  };  

  // COLLECTIONS

  var stringified_elements = [];
  
  // Arrays
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++ ) {
      stringified_elements.push(stringifyJSON(obj[i]));
    };
    return "[" + stringified_elements.join(",") + "]";
    };

  // Objects
  if (typeof(obj) === "object") {
    for (var key in obj) {    
      // we should not stringify functions or undefined
      if (!(typeof(obj[key]) === "undefined" || typeof(obj[key]) === "function")) { 
        var stringified_key_value_pair;  
        stringified_key_value_pair = stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
        stringified_elements.push(stringified_key_value_pair) 
        };
    }
    return "{" + stringified_elements.join(',') + "}"; 
  };
};
