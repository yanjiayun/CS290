document.getElementById("create-twit-button").addEventListener("click", open);
document.getElementById("navbar-search-button").addEventListener("click", search);
document.getElementById("navbar-search-input").addEventListener("input", search);
document.getElementsByClassName("modal-close-button")[0].addEventListener("click", close);
document.getElementsByClassName("modal-cancel-button")[0].addEventListener("click", close);
document.getElementsByClassName("modal-accept-button")[0].addEventListener("click", both);

function open() {
  var a = document.getElementById("create-twit-modal");
  a.style.display = "flex";
  var b = document.getElementById("modal-backdrop");
  b.style.display = "flex";
}

function add(text, author) {
  var whole = document.getElementsByClassName("twit-container")[0];
  var article = document.createElement("article");
  article.classList.add("twit");

  var icon = document.createElement("div");
  icon.classList.add("twit-icon");
  article.appendChild(icon);

  var image = document.createElement("i");
  image.classList.add("fas");
  image.classList.add("fa-bullhorn");
  icon.appendChild(image);

  var content = document.createElement("div");
  content.classList.add("twit-content");
  article.appendChild(content);

  var t = document.createElement("p");
  t.classList.add("twit-text");
  t.textContent = text;
  content.appendChild(t);

  var a = document.createElement("p");
  a.classList.add("twit-author");
  content.appendChild(a);

  var l = document.createElement("a");
  l.setAttribute("href", "#");
  l.textContent = author;
  a.appendChild(l);

  whole.appendChild(article);
  y.push(article);

  close();
}

function both(){
  var a = document.getElementById("twit-text-input").value;
  var b = document.getElementById("twit-attribution-input").value;
  if(a === "" && b === ""){
    alert("Please enter something.");
  }
  else if(a === ""){
    alert("Please enter the Twit Text.");
  } 
  else if(b === ""){
    alert("Please enter the Author.");
  }
  else {
    add(a, b);
  }
}

function search() {
  reset();
  var a = document.getElementById("navbar-search-input").value.toLowerCase();
  for(var i = y.length - 1; i >= 0; i--){
    var b = y[i].children[1].children[0].textContent.toLowerCase();
    var c = y[i].children[1].children[1].textContent.toLowerCase();
    if(b.search(a) === -1 && c.search(a) === -1){
      x[i].remove();
    }
  }
}

function reset() {
  for(var i = x.length - 1; i >=0; i--){
    x[i].remove();
  }
  var a = document.getElementsByClassName("twit-container")[0];
  for(var i = 0; i < y.length; i++){
    a.appendChild(y[i]);
  }
}

function close() {
  var a = document.getElementById("create-twit-modal");
  a.style.display = "none";
  var b = document.getElementById("modal-backdrop");
  b.style.display = "none";
  /*Clean the input box*/
  var c = document.getElementById("twit-text-input");
  c.value = "";
  var d = document.getElementById("twit-attribution-input");
  d.value = "";
}

var x = document.getElementsByClassName("twit");
var y = [];
for(var i = 0; i < x.length; i++){
  y.push(x[i]);
}

alert('JS successfully loaded.');