  class Slider{
    constructor(){
      this.images = [];
      this.images[0]= "image/22.jpg";
      this.images[1]= "image/quiz 3.png";
      this.images[2]= "image/I4.jpg";

      this.links=[];
      this.links[0]= "#";
      this.links[1]= "#";
      this.links[2]= "#";
      this.counter = 0;
      setInterval(() => {
        this.privuos();
      }, 2400);
    }
    privuos(){
        if(this.counter<this.images.length - 1){
            this.counter++;
        }else{

            this.counter = 0;
        }
        document.slid.src= this.images[this.counter];
        document.getElementById("slider").href= this.links[this.counter];
    }
    next(){
      if(this.counter<this.images.length - 1){
          this.counter++;
      }else{

          this.counter = 0;
      }
      document.slid.src= this.images[this.counter];
      document.getElementById("img2").href= this.links[this.counter];
  }
    

}

onload = new Slider();

function tam(){
  
  
  let num =  document.getElementById("t1").value;
  let numRe = /^[a-z]+$/i ;
  let val = numRe.test(num);

  
  

  let num2 =  document.getElementById("t2").value;
  let numRe2 = /(\d{10})/;
  let val2 = numRe2.test(num2);
/*
  let num3 =  document.getElementById("t3").value;
  let numRe3  = /^[a-z]+$/i+"@"+".";
  let val3 = numRe3.test(num3);
*/

  if( val == true && val2 == true  ){
     alert("Welcome to WebSite");
  } else{
     alert("Invalid Login");
  }
   
 
}
