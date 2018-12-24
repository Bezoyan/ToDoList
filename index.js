// Create the close button
let myList = document.getElementsByTagName("LI");
for (let i = 0; i < myList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// Hide the current item with close button
let cl = document.getElementsByClassName("close");
for (let i = 0; i < cl.length; i++) {
  cl[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Item is checked
let list = document.querySelector('ul');
list.addEventListener('click',  function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Add list item
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Oopss!!! You forgot the text");
  }
  else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < cl.length; i++) {
    cl[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
