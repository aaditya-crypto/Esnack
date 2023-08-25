const input = document.getElementById("plus");
const lis = document.getElementById("add-items");
//const ul = document.querySelector("ul.add-items");
//const arr = Array.from(lis);
 let itemsarray = localStorage.getItem("plus") ? 
 JSON.parse(localStorage.getItem("plus")) : [];

//var toto ={};

function Taskdalo(){
    if(input.value === ''){
        alert("Write something first!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        lis.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u274C";
        li.appendChild(span);

        storedata();
    }
    input.value = "";
    
}   
lis.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check-karo");
    } else if (e.target.tagName === "SPAN") {
        const taskText = e.target.parentElement.textContent.trim();
        const taskIndex = itemsarray.indexOf(taskText);
        if (taskIndex !== -1) {
            itemsarray.splice(taskIndex, 1); 
            localStorage.setItem("plus", JSON.stringify(itemsarray)); 
        }
        e.target.parentElement.remove();
    }
});



function storedata(){
     itemsarray.push(input.value);
     localStorage.setItem("plus",JSON.stringify(itemsarray));
    
      
 }
  
 function showtask() {
    const storedItems = JSON.parse(localStorage.getItem("plus"));

    if (storedItems) {
        itemsarray = storedItems; 
        storedItems.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = item;
            lis.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u274C";
            li.appendChild(span);
        });
    }
}

showtask(); 
