
let container = document.querySelector(".list");
let error = document.querySelector(".errorMsg");
let inputField = document.querySelector("input");

document.querySelector(".btn").addEventListener("click", function () {

    let items = document.createElement("li");
    let icon = document.createElement("button");
    let edit=document.createElement("button");
    
    
    edit.innerHTML = '<i class="fas fa-edit"></i>';
    icon.innerHTML = '<i class="fas fa-trash-alt"></i>';


    edit.classList.add("editBtn");
   icon.classList.add("deleteBtn");

    items.classList.add("taskItem");

    let inputValue = document.querySelector("input").value;

    let changeToTextNode = document.createTextNode(inputValue);

    if (inputValue.trim() == "") {

        document.querySelector(".errorMsg").innerText = "Please Enter a TASK";
    }
    else {


        edit.addEventListener("click", function(){
        let newli=this.parentElement.childNodes[0];
        let newInput=document.createElement("input");
        
        newInput.value=newli.textContent;
        this.parentElement.replaceChild(newInput,newli);
        newInput.addEventListener("keydown", function(event){
         
            if(event.key=="Enter")
            {
                let textNode=document.createTextNode(newInput.value);

                 newInput.parentElement.replaceChild(textNode,newInput);
                 
            }
           
        });
       

        });

        icon.addEventListener("click", function () {
            this.parentElement.remove();
        });

        items.addEventListener("click", function () {
            this.classList.toggle("complete");
        });
        items.appendChild(changeToTextNode);
       
        items.appendChild(icon);
        items.appendChild(edit);
       
        container.appendChild(items);

        document.querySelector("input").value = "";
    }

});

inputField.addEventListener("input", function () {
    if (inputField.value.trim() !== "") {
        error.innerText = "";
    }

});

let all = document.querySelector(".viewAll");
let complete = document.querySelector(".completed");
let incomplete = document.querySelector(".pending");



all.addEventListener("click", function () {
    let lists = document.querySelectorAll("li");
    lists.forEach(function (list) {


        list.style.display = "block";


    });
});
complete.addEventListener("click", function () {
    let lists = document.querySelectorAll("li");
    lists.forEach(function (list) {
        if (list.classList.contains("complete")) {
            list.style.display = "block";

        }
        else {
            list.style.display = "none";
        }
    });
});

incomplete.addEventListener("click", function () {
    let lists = document.querySelectorAll("li");
    lists.forEach(function (list) {
        if (!list.classList.contains("complete")) {
            list.style.display = "block";

        }
        else {
            list.style.display = "none";
        }
    });
});

