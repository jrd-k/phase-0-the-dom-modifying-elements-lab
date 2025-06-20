// Write your code here!
// Remove the <main> element from the page
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of the new element to 'victory'
newHeader.id = "victory";

// Set the text content of the new element
newHeader.textContent = "Jared Kiprop is the champion";

// Append the new element to the body
document.body.append(newHeader);
