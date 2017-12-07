var jetzt;
function berechne() {
        jetzt = new Date(),
        tag = jetzt.getDate(),
        tagZahl = jetzt.getDay(),
        wochentag = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag' ],
        monatZahl = jetzt.getMonth(),
 	      monat = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September',
                'Oktober','November','Dezember']
}


function Ausgabe_monat(){
  document.getElementById("monat").innerHTML = monat;
}

berechne();
var tag= jetzt.getDay();
var Wochentag=wochentag[tag];
var monat= monat[monatZahl];
var jahr= jetzt.getFullYear();
document.addEventListener("DOMContentLoaded",function(){


Ausgabe_monat();
MonthButtons();
});

function MonthButtons(){
  var countDays=new Date(new Date().getFullYear(), new Date().getMonth() -1,0).getDate();
  var container=document.getElementById("Buttons");
  for (var i = 1; i <= countDays; i++) {
    var button= document.createElement("button");
    button.className="btn btn_k";
    button.innerHTML=i;
    button.setAttribute("day",i);
    button.addEventListener("click",function(e){
    document.getElementById("js_kalender_day").value=e.target.getAttribute("day");

    if (!e.target.classList.contains("btn_bright")) {

      var btn_array=document.getElementsByClassName("btn_k");
      for (var i = 0; i < btn_array.length ; i++) {
        btn_array[i].classList.remove("btn_bright");

      }
      e.target.classList.add("btn_bright");
    }


    });
    container.appendChild(button);
  }
}
var event;
function Kalender_Speichern(){
  var ul = document.getElementById("yourUL");
  var li = document.createElement("li");
  var day_value = document.getElementById("js_kalender_day").value;
  var event_value = document.getElementById("js_kalender_event").value;

  li.innerHTML=day_value+" "+event_value;
  ul.appendChild(li);
}

function Kalender_Clear(){
  document.getElementById(js_kalender_event);
  
}
