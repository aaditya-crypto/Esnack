const del = document.getElementById("add-task");
const lis = document.getElementById("add-items");

function Taskdalo(){
    if(del.value === ''){
        alert("Write something first!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = del.value;
        lis.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u274C";
        li.appendChild(span);

        storedata(del.value);
    }
    del.value = "";
}   
lis.addEventListener("click", function(e){
    console.log(e.target.tagName);
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("check-karo");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
    }
})

function storedata(teask){

    localStorage.setItem("data", teask);
}
function showtask(){
    lis.innerHTML = localStorage.getItem("data");
}
showtask();