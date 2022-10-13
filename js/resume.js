//question1
function details(id) {
    var div = document.getElementById(id);
    if (div.style.display === "none") {
        
         div.style.display = "block";
         fadeIn(div, 2000);
    } 
    else {
    div.style.display = "none";
    }
}

//question2
function alterner(id){
    
    if(id=='stage'){
        details('stage');
        document.getElementById('imo').style.display = 'none';
        document.getElementById('depart').style.display = 'none';
       
    }
    else if(id=="imo"){
        details('imo');
        document.getElementById('stage').style.display = 'none';
        document.getElementById('depart').style.display = 'none';
      
    }
    else {
        details('depart');
        document.getElementById('stage').style.display = 'none';
        document.getElementById('imo').style.display = 'none';
      
    }
}
 

//question3


function fadeIn(el, time) {
    el.style.opacity = 0;
  
    var last = +new Date();
    var tick = function () {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
          setTimeout(tick, 16);
      }
    };
  
    tick();
}


// question 2.5

var tooltip = document.querySelectorAll('.coupontooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}