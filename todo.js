let emptyText = document.querySelector("#task")

let ulDOM = document.querySelector("#list")

// Create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName("li");

for (i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none"
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Creating new list element
let documentArray = []

function newElement() {
    const liDOM = document.createElement("li")
    liDOM.innerHTML = emptyText.value

    if (liDOM.innerHTML.trim() === "") {
        
        $('#livedToast').toast("show")
    } else {
        ulDOM.append(liDOM)
        documentArray.push(liDOM.innerHTML)
        localStorage.setItem("newListItems", JSON.stringify(documentArray))
        $('#liveToast').toast("show")
    }

    let myNodelist = document.getElementsByTagName("li");

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    liDOM.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none"
        }
    }
}
