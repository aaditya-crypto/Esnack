const del = document.getElementById(delulu);
const lis = document.getElementById(add-items);

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
    }
    del.value = "";
    locsto();
}   
lis.addEventListener("click", function(e)){
    if(e.target.tagname ==="li"){
        e.target.classlist.toggle("check-karo");
        locsto();
    }
    else if(e.target.tagname ==="span"){
        e,target.parentElement.remove();
        locsto();
    }
}

function locsto(){
    localStorage.setItem("data", lis.innerHTML);
}
function showtask(){
    lis.innerHTML = localStorage.getitem("data");
}
showtask();