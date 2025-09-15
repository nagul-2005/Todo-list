const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
let img = document.getElementById("img");

function showdisplay(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showdisplay();

function display(){
  localStorage.setItem("notes",notesContainer.innerHTML);
}

btn.addEventListener("click",() =>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src = "image/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
   
})
notesContainer.addEventListener("click",function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    display();
  }
  else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nnt=>{
        nnt.onkeyup = function(){
            display();
        }
    })
  }
    
  
})
