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
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
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
    var ul = document.getElementById("myUL");
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var inputValue2 = document.getElementById("myInput2").value;
  var inputValue3 = document.getElementById("myInput3").value;
  var inputValue4 = document.getElementById("myInput4").value;
  var t = document.createTextNode(inputValue);
  var t2 = document.createTextNode(inputValue2);
  var t3 = document.createTextNode(inputValue3);
  var t4 = document.createTextNode(inputValue4);
  li.innerHTML= "<label id=listenLabel>Name:</label> " + inputValue + "<br> <label id=listenLabel>Mobil:</label> " + inputValue2 + "<br> <label id=listenLabel>Telefon:</label> " + inputValue3 + "<br> <label id=listenLabel>Email:</label> " + inputValue4;
    li.className="name-" + inputValue;
  ul.appendChild(li);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }}
  function search(elementTofind){
      var find =elementTofind;
      var liArray = document.querySelectorAll("#myUL li");
      for (var index = 0; index < liArray.length; index++) {
        var valueArray = liArray[index].className.split("-"); //array aus 2 elementen
        var value = valueArray[1]; 
        
        if (value == find) {
              liArray[index].style.display= "list-item";
          }
          else{
            liArray[index].style.display= "none";
          }
          if(find == ""){
            liArray[index].style.display= "list-item"; 
          }
          
      }
        
     }
  
  document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("searchTextBOX").addEventListener("keyup",function(e){

        
        search( document.getElementById("searchTextBOX").value);

    });

  });

