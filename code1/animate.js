

var diag=document.getElementById("diag"),
    poly1=document.getElementById("1"),
    poly2=document.getElementById("2"),
    poly3=document.getElementById("3"),
    rect=document.getElementById("bgrect"),
    arrow=document.getElementById("arrow"),
    polyr1=document.getElementById("r1"),
    polyr2=document.getElementById("r2"),
    c=document.getElementById("movup"),
    pg2=document.getElementById("p2");
    pg31=document.getElementById("p31");
    polyp32=document.getElementById("p32");

var count=0;

var tl = new TimelineMax({delay:0 , onComplete:myFunction});
    tl.to(poly1, 0.4, {attr: {points:"0,130 0,600 960,600 960,600"}, ease:Quad.ease})
      .to(poly2, 0.2, {attr: {points:"1000,130 1000,600 100,600"}, ease: Quad.ease})
      .to(poly3, 0.2, {attr: {points:"0,0 0,200 400,0"}, ease: Quad.ease});        


function myFunction() {
        next();
        diag.style.visibility="visible";
        wrapper.style.visibility="visible";
        
        var t2 = new TimelineMax({delay:0.5});
            t2.to(diag , 0.5 , {attr:{points:"516,383 449,350 516,317 581,350"} , ease:Linear.ease});        
      }

function next(){
        arrow.style.visibility="visible";
        var tl = new TimelineMax({delay:0 , repeat:-1});

        tl.to(arrow, 0.4, {attr: {points:"516,460 496,443 516,460 536,443"}, ease:Linear.easeNone})
          .to(arrow, 0.4, {attr: {points:"516,460 496,460 516,460 536,460"}, ease:Linear.easeNone})
          .to(arrow, 0.4, {attr: {points:"516,460 516,460 516,460 516,460"}, ease:Linear.easeNone})       
          .to(arrow, 0.4, {attr: {points:"516,460 496,460 516,460 536,460"}, ease:Linear.easeNone})
          .to(arrow, 0.4, {attr: {points:"516,443 496,460 516,443 536,460"}, ease:Linear.easeNone})
          .to(arrow, 0.4, {attr: {points:"516,443 516,443 516,443 516,443"}, ease:Linear.easeNone})
          .to(arrow, 0.4, {attr: {points:"516,443 496,443 516,443 536,443"}, ease:Linear.easeNone});
}

function nextpage(){
  
    wrapper.style.visibility="hidden";
    var d=new TimelineMax({delay:0.1 , onComplete:function sd(){
      arrow.style.visibility="hidden";
      diag.style.visibility="hidden";
    }});
        d.to(diag, 0.1, {attr: {points:"516,0 449,0 516,0 581,0"}, ease:Linear.easeNone})
         .to(arrow ,0.1 , {attr: {points:"516,0 496,0 516,0 536,0"}, ease:Linear.easeNone});
  if(arrow.getAttribute("stroke")=="black")
  {
    var t3=new TimelineMax({delay:0.2});
        t3.to(poly3, 0.3, {attr: {points:"0,0 0,0 400,0"}, ease:Quad.ease});

    var t2=new TimelineMax({delay:0});
        t2.to(poly2, 0.2, {attr: {points:"1000,600 1000,600 100,600"}, ease:Quad.ease});

    var tr=new TimelineMax({delay:0.3});
        tr.to(polyr1, 0.3, {attr: {points:"0,150 0,600 1010,600"}, ease:Quad.ease})
          .to(polyr2, 0.3, {attr: {points:"1000,130 1000,600 100,600 100,600 100,600"}, ease: Quad.ease})
          

    var t1=new TimelineMax({delay:0.1});
    t1.to(poly1, 0.3, {attr: {points:"0,130 0,600 1000,600 1000,400"}, ease:Quad.ease})
      .to(poly1, 0.3, {attr: {points:"0,0 0,600 1000,600 1000,400"}, ease:Quad.ease})
      .to(poly1, 0.3, {attr: {points:"0,0 0,600 1000,600 1000,0"}, ease:Quad.ease});


    var te=new TimelineMax({delay:1  ,onComplete:function sd(){
      wrapper.setAttribute("fill","#072E3B");
      arrow.setAttribute("stroke","red");
    }});
        te.to(pg2, 0.2, {attr : {points:"0,520 100,600 1000,130 1000,130 1000,130" , visibility: "visible"} , ease:Quad.ease})
          .to(pg2, 0.2, {attr : {points:"0,520 100,600 1000,130 1000,0 1000,0"} , ease:Quad.ease})
          .to(pg2, 0.2, {attr : {points:"0,380 100,600 1000,130 1000,0 1000,0"} , ease:Quad.ease})
          .to(pg2, 0.2, {attr : {points:"0,450 100,600 1000,130 1000,0 700,0"} , ease:Quad.ease});
   }
   else if(arrow.getAttribute("stroke")=="red")
   {
     var pg3rt=new TimelineMax({delay:0.4});
         pg3rt.to(polyr1, 0.2, {attr: {points:"0,600 0,600 1010,600"}, ease:Quad.ease});
     var pg3r2=new TimelineMax({delay:0.1});
        pg3r2.to(polyr2, 0.3, {attr: {points:"1000,190 1000,600 0,600 0,500 0,500"}, ease:Quad.ease})
             .to(polyr2, 0.3, {attr: {points:"1000,190 1000,600 0,600 0,0 0,0"}, ease: Quad.ease})
             .to(polyr2, 0.2, {attr: {points:"1000,190 1000,600 0,600 0,0 500,0"}, ease: Quad.ease})
             .to(polyp32 ,0.2 , {attr : {points:"1000,130 1000,600 100,600"}, ease:Quad.ease})
             .to(polyr2, 0.3, {attr: {points:"1000,190 1000,600 0,200 0,0 500,0"}, ease: Quad.ease});
     var pg3r1=new TimelineMax({delay:1});
         pg3r1.to(pg31, 0.2, {attr: {points:"0,130 0,600 960,600 960,600"}, ease:Quad.ease});
     var tmp=new TimelineMax({delay:0 , onComplete : function co()
     {
        pg2.setAttribute("fill","#1D6981");
        wrapper.setAttribute("fill","#BFE3F3");
        arrow.setAttribute("stroke","brown");
     }});
         tmp.to(pg2, 0.8, {attr : {points:"0,0 0,600 1000,250 1000,0 0,0"} , ease:Quad.ease});
   }
   else if(arrow.getAttribute("stroke")=="brown")
   {
      TweenLite.to(p2 , 0.5 , {fill : "#EBF3BF" , delay:0.5});
      TweenLite.to(polyp32 , 0.5 , {fill : "white" , delay:1});


      var tm1=new TimelineMax({delay:0.2});
        tm1.to(pg31, 0.3, {attr: {points:"0,600 0,600 1010,600"}, ease:Quad.ease});
      var pg4=new TimelineMax({delay:0, onComplete : function com()
     {
        wrapper.setAttribute("fill","#BFE3F3");
        arrow.setAttribute("stroke","#6316DE");
     }});
        pg4.to(polyr2, 0.3, {attr: {points:"1000,190 1000,600 0,200 0,0 500,0"}, ease:Quad.ease})
           .to(polyr2, 0.3, {attr: {points:"1000,190 1000,600 0,600 0,0 500,0"}, ease: Quad.ease})
           .to(polyr2, 0.3, {attr: {points:"1000,190 1000,600 0,600 0,500 0,500"}, ease: Quad.ease})           
           .to(polyr2, 0.3, {attr: {points:"1000,600 1000,600 0,600 0,600 0,600"}, ease: Quad.ease})
           .to(pg31, 0.3, {attr: {points:"0,130 0,600 960,600"}, ease:Quad.ease});
           //.to(polyp32 ,0.2 , {attr: {points:"1000,130 1000,600 100,600"}, ease:Quad.ease});
   }
   else if(arrow.getAttribute("stroke")=="#6316DE")
   {
     
   }

   var d=new TimelineMax({delay:1.7, onComplete:myFunction});
        d.to(diag, 0.1, {attr: {points:"516,383 449,350 516,383 581,350"}, ease:Linear.easeNone})
         .to(arrow ,0.1 , {attr: {points:"516,460 496,443 516,460 536,443"}, ease:Linear.easeNone});
 
}


function more()
{
  count=count+1;
 if(count%2=="0")
  {
      var d1=new TimelineMax({delay:0});
      d1.to(diag , 0.1 , {attr:{points :"516,383 0,600 0,0 1000,0"},ease:Linear.easeNone})  
        .to(diag , 0.1 , {attr:{points :"516,383 449,350 0,0 1000,0"},ease:Linear.easeNone})  
        .to(diag , 0.1 , {attr:{points :"516,383 449,350 0,0 581,350"},ease:Linear.easeNone})  
        .to(diag , 0.1 , {attr:{points :"516,383 449,350 516,317 581,350"},ease:Linear.easeNone});  
  }
  else
  {
    var d=new TimelineMax({delay:0});
    d.to(diag , 0.1 , {attr:{points :"516,383 449,350 0,0 581,350"},ease:Linear.easeNone})  
      .to(diag , 0.1 , {attr:{points :"516,383 449,350 0,0 1000,0"},ease:Linear.easeNone})  
      .to(diag , 0.1 , {attr:{points :"516,383 0,600 0,0 1000,0"},ease:Linear.easeNone})  
      .to(diag , 0.1 , {attr:{points :"1000,600 0,600 0,0 1000,0"},ease:Linear.easeNone});  
  }
}