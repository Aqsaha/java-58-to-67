
var mainContent = document.getElementById("main-content");


if (mainContent) {

} else {
    console.log("Element with id 'main-content' not found.");
}

var mainContent = document.getElementById("main-content");


if (mainContent) {

    var childElements = mainContent.children;


    for (var i = 0; i < childElements.length; i++) {
        console.log(childElements[i]);
    }
} else {
    console.log("Element with id 'main-content' not found.");
}

var renderElements = document.getElementsByClassName("render");


for (var i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}

var firstNameInput = document.getElementById("first-name");


if (firstNameInput) {

    firstNameInput.value = "John";
} else {
    console.log("Element with id 'first-name' not found.");
}

var lastNameInput = document.getElementById("last-name");


if (lastNameInput) {

    lastNameInput.value = "Doe";
} else {
    console.log("Element with id 'last-name' not found.");
}


var emailInput = document.getElementById("email");


if (emailInput) {

    emailInput.value = "abcd@example.com";
} else {
    console.log("Element with id 'email' not found.");
}
 
 var formContent = document.getElementById("form-content");
 var lastNameElement = document.getElementById("lastName");

    
    if (lastNameElement) {
     
      lastNameElement.firstChild.textContent = "Last Name: Smith";

     
    } else {
      console.log("Element with id 'lastName' not found.");
    } 
    
var mainContent = document.getElementById("main-content");


if (mainContent) {
  
  var firstChild = mainContent.firstElementChild;
  var lastChild = mainContent.lastElementChild;

  
  if (firstChild && lastChild) {
    console.log("First child:", firstChild);
    console.log("Last child:", lastChild);
  } else {
    console.log("No child elements found for element with id 'main-content'.");
  }
} else {
  console.log("Element with id 'main-content' not found.");
}

var lastNameElement = document.getElementById("lastName");


if (lastNameElement) {
  
  var nextSibling = lastNameElement.nextElementSibling;
  var previousSibling = lastNameElement.previousElementSibling;

  
  if (nextSibling) {
    console.log("Next sibling:", nextSibling);
  } else {
    console.log("No next sibling found for element with id 'lastName'.");
  }

  if (previousSibling) {
    console.log("Previous sibling:", previousSibling);
  } else {
    console.log("No previous sibling found for element with id 'lastName'.");
  }
} else {
  console.log("Element with id 'lastName' not found.");
}



 
 if (formContent) {
   
   var nodeType = formContent.nodeType;
   var result = "Node type of element with id 'form-content': " + nodeType;
   document.body.innerHTML += "<p>" + result + "</p>";
 } else {
   console.log("Element with id 'form-content' not found.");
 }
 
 var lastNameElement = document.getElementById("lastName");

 
 if (lastNameElement) {
   
   var lastNameNodeType = lastNameElement.nodeType;
   var result = "Node type of element with id 'lastName': " + lastNameNodeType;
   document.body.innerHTML += "<p>" + result + "</p>";

   
   var lastNameChildNodeType = lastNameElement.firstChild.nodeType;
   var childResult = "Node type of child node of 'lastName' element: " + lastNameChildNodeType;
   document.body.innerHTML += "<p>" + childResult + "</p>";
 } else {
   console.log("Element with id 'lastName' not found.");
 }
 
var emailElement = document.getElementById("email");


if (emailElement) {
 
  var parentNode = emailElement.parentNode;

 
  var nodeType = emailElement.nodeType;

  
  if (parentNode) {
    console.log("Parent node:", parentNode);
  } else {
    console.log("No parent node found for element with id 'email'.");
  }

 
  console.log("Node type of element with id 'email':", nodeType);
} else {
  console.log("Element with id 'email' not found.");
}



