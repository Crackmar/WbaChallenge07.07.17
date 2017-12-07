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
  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";
  document.getElementById("myInput3").value = "";
  document.getElementById("myInput4").value = "";
  sortList();

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
//   function sort(){
//       var list = document.getElementById("myUL");
// var shouldSwitch;
//       arbeite = true;
//       while (arbeite){
//           arbeite = false;
//           var b = list.getElementsByTagName("LI")
//           for (var index = 0; index < b.length-1; index++) {
//             shouldSwitch = false;
//             var listArray =b[index].className.split("-");
//             var list =listArray[1];
//             var listArray2 =b[index+1].className.split("-");
//             var list2 =listArray[1];
//              if(list.toLowerCase() > list2.toLowerCase()){
//                 shouldSwitch = true;
//                 break;
//                 if(shouldSwitch){
//                 b[i].parentNode.insertBefore(b[i + 1], b[i]);
//                 arbeite = true;
//              }
              
//           }
//       }
//   }
//   }


function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*check if the next item should
      switch place with the current item:*/
      var listArray1 =b[i].className.split("-");
        var list1 =listArray1[1];
      var listArray2 =b[i+1].className.split("-");
      var list2 =listArray2[1];
      if (list1.toLowerCase() > list2.toLowerCase()) {
        /*if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop:*/
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark the switch as done:*/
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}


