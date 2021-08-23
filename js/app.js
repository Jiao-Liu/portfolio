


const imgList=document.querySelector('.project-img-list');
const imgArr=document.getElementsByClassName('project-img');
 imgList.style.width = 640*imgArr.length+"px";
 const navDiv = document.getElementById("navDiv");
const outer = document.getElementsByClassName("outer");

 navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";
 


  var index = 0;

 const allA = document.querySelectorAll("#navDiv a");

 allA[index].style.backgroundColor = "black";
 

 for(let i=0; i<allA.length ; i++){

     allA[i].num = i;
     allA[i].onclick = function(){
         index = this.num;
         setA();
    
            imgList.style.left=-620*index+'px';
   
     };
 }




 
 
 function setA(){
     
     
     for(let i=0 ; i<allA.length ; i++){
         allA[i].style.backgroundColor = "";
     }
     allA[index].style.backgroundColor = "black";
 }
 


