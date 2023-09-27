var currentD = dayjs().format('dddd, MMMM DD')
var hour = dayjs().format("H")
var box9 = localStorage.getItem("box9")
var box10 = localStorage.getItem("box10")
var box11 = localStorage.getItem("box11")
var box12 = localStorage.getItem("box12")
var box13 = localStorage.getItem("box13")
var box14 = localStorage.getItem("box14")
var box15 = localStorage.getItem("box15")
var box16 = localStorage.getItem("box16")
var box17 = localStorage.getItem("box17")


window.addEventListener('DOMContentLoaded', () => {
var elements = $(".time-block");
for(var i = 0; i < elements.length; i++) {
    if(elements[i].id == hour){
    $(elements[i]).addClass("present")
    }else if (elements[i].id < hour) {
    $(elements[i]).addClass("past")
    } else if (elements[i].id > hour){
    $(elements[i]).addClass("future")
    } else {
      console.log("undefined")
    }
  }
  $('#currentDay').text(currentD)
  if($("#txt1") !== box9){
    $("#txt1").text(box9)
  }
  if($("#txt2") !== box10){
    $("#txt2").text(box10)
  }
  if($("#txt3") !== box11){
    $("#txt3").text(box11)
  }
  if($("#txt4") !== box12){
    $("#txt4").text(box12)
  }
  if($("#txt5") !== box13){
    $("#txt5").text(box13)
  }
  if($("#txt6") !== box14){
    $("#txt6").text(box14)
  }
  if($("#txt7") !== box15){
    $("#txt7").text(box15)
  }
  if($("#txt8") !== box16){
    $("#txt8").text(box16)
  }
  if($("#txt9") !== box17){
    $("#txt9").text(box17)
  }
});


$(document).on('click', '.saveBtn',function() {

  var txt = $(".description")
  var userTxt1 = txt[0].value
  localStorage.setItem("box9", userTxt1)
  var box9 = localStorage.getItem("box9")
  $("#txt1").text(box9)

  var userTxt2 = txt[1].value
  localStorage.setItem("box10", userTxt2)
  var box10 = localStorage.getItem("box10")
  $("#txt2").text(box10)

  var userTxt3 = txt[2].value
  localStorage.setItem("box11", userTxt3)
  var box11 = localStorage.getItem("box11")
  $("#txt3").text(box11)

  var userTxt4 = txt[3].value
  localStorage.setItem("box12", userTxt4)
  var box12 = localStorage.getItem("box12")
  $("#txt4").text(box12)

  var userTxt5 = txt[4].value
  localStorage.setItem("box13", userTxt5)
  var box13 = localStorage.getItem("box13")
  $("#txt5").text(box13)

  var userTxt6 = txt[5].value
  localStorage.setItem("box14", userTxt6)
  var box14 = localStorage.getItem("box14")
  $("#txt6").text(box14)

  var userTxt7 = txt[6].value
  localStorage.setItem("box15", userTxt7)
  var box15 = localStorage.getItem("box15")
  $("#txt7").text(box15)

  var userTxt8 = txt[7].value
  localStorage.setItem("box16", userTxt8)
  var box16 = localStorage.getItem("box16")
  $("#txt8").text(box16)

  var userTxt9 = txt[8].value
  localStorage.setItem("box17", userTxt9)
  var box17 = localStorage.getItem("box17")
  $("#txt9").text(box17)



  
});
