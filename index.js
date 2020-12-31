// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
newParagraph()
});
function newParagraph(){
let para=  document.getElementByID("text")
para.innerHTML= "This is really cool!"
}