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

//question 7
function  evaluerConnaissance(){
    let competences = document.querySelectorAll(".rating");
    try {
        for(let i=0; i < competences.length; i++){
            let r = competences[i].getAttribute("rating");

            if(r!=null){

                let starts = '<span style="color:#eeee6a; " >' 

                for(let j=0; j< r; j++){
                    starts+="★";
                }
                starts += '</span>';

                starts += '<span>';
                for(let j=r; j<5; j++){
                    starts+="★";
                }
                starts += '</span>';

                competences[i].innerHTML += starts;

            }

        }
        console.log("error")
    } catch (error) {
        console.log(error)
    }
}
evaluerConnaissance();

//question 8
mesCompetence ={
    "JAVA/JEE" : 4 ,
    "SpringBoot" : 4,
    "Python" : 4,
    "Django" : 3,
    "Angular" : 3 ,
    "PHP/Laravel" : 3,
    "MySQL" : 4 ,
    "MongoDB" : 4,
    "PostgreSQL" : 3 ,
    "UML" : 5,
    "Merise" : 3,
    "SCRUM" : 4
    
}

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Object.keys(mesCompetence),
    datasets: [{
      label: 'Competences',
      data: Object.values(mesCompetence),
      backgroundColor: 'rgba(153, 132, 128)',
    }]
  },
  options: {
    scales: {
      xAxes: [{
        display: true,
        barPercentage: 1.2, 
     }],
      yAxes: [{
        ticks: {
          max: 5,
          beginAtZero:true,
          stepSize: 1
        },
        stacked: true

      }]
    }
  }
});
