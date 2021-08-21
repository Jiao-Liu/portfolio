


const imgList=document.querySelector('.project-img-list');
const imgArr=document.getElementsByClassName('project-img')
 imgList.style.width = 640*imgArr.length+"px";
 var navDiv = document.getElementById("navDiv");
 var outer = document.getElementsByClassName("outer");
 //设置navDiv的left值
 navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";
 


 var index = 0;

 var allA = document.querySelectorAll("#navDiv a");
 //设置默认选中的效果
 allA[index].style.backgroundColor = "black";
 

 for(var i=0; i<allA.length ; i++){

     allA[i].num = i;
     allA[i].onclick = function(){
         index = this.num;
         setA();
    
            imgList.style.left=-620*index+'px';
   
     };
 }


 //var width=document.documentElement.scrollWidth; 
 //console.log(width);
// var btn=document.getElementsByClassName('first-page-button');


 /*if (width>416){
 

    imgList.style.backgroundColor='red'
    for(var i=0; i<allA.length ; i++){
        allA[i].num = i;
        allA[i].onclick = function(){
            index = this.num;
            setA();
       
               imgList.style.left=-620*index+'px';
      
        };
    }

 }*/

 
 
 function setA(){
     
     
     for(var i=0 ; i<allA.length ; i++){
         allA[i].style.backgroundColor = "";
     }
     allA[index].style.backgroundColor = "black";
 };
 


if (width <=320){


}
