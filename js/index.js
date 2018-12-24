// window.onload = function() {
//   let form = document.getElementById("form");
//   let input = document.getElementById("input");
//   let btn = document.getElementById("btn");
//   let list = document.getElementById("list");

//   let id = 1;

//   //butten event listener
//   btn.addEventListener("click", addToDoItem);

//   //checkbox event listener
//   list.addEventListener("click", boxChecked);

//   //add item to list
//   function addToDoItem () {
//     if(input.value === "") {
//       alert("enter some value");
//     }
//     else {
//         if (list.style.borderTop === "") {
//               list.style.borderTop = "2px solid black";
//         }

//         let text = input.value;
//         let item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;

//         list.insertAdjacentHTML('beforeend', item)
//         id++;
//         form.reset();

//   }

// }

//   //mark item as done
//   function boxChecked(event) {
//     const element = event.target;
//     if(element.type === "checkbox") {
//       element.parentNode.style.textDecoration = "line-through";
//     }
//   }
// }

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var c = document.getElementsByClassName("close");
var i;
for (i = 0; i < c.length; i++) {
  c[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}