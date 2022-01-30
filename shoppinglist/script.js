var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function checkList() {
    return document.getElementsByTagName("li").length;
}


function createListElement() {
    var li = document.createElement("li");
    li.classList.add("listItems")
    li.appendChild(document.createTextNode(input.value))
    li.addEventListener("click", toggleDone)
    ul.appendChild(li)
    input.value = "";

    function toggleDone() {
        li.classList.toggle("done")
    }

    if(checkList() > 0) {
        var emptyList = document.querySelector("h2");
        emptyList.style.display = "none"
    }

    var deleteBtn = document.createElement("button")
    var deleteX = document.createElement("i")
    deleteBtn.append("delete")
    deleteBtn.classList.add("custBtn")
    deleteBtn.appendChild(deleteX)
    deleteBtn.addEventListener("click", deleteItem)
    li.append(deleteBtn)

    function deleteItem() {
        li.remove();
        if(checkList() == 0) {
          var emptyList = document.querySelector('h2');
          emptyList.style.display = "block";
        }
      
      }
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}
 
function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);