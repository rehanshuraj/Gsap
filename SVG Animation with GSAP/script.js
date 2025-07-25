var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string=document.querySelector("#string")

//going to add mousemove event on string
string.addEventListener("mousemove" , function(e){
    path= `M 10 100 Q ${e.x} ${e.y} 990 100`

    gsap.to("svg path",{
        attr:{ d:path},
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave" , function(e){
      var finalPath = `M 10 100 Q 500 100 990 100`;
      gsap.to("svg path",{
        attr:{ d:finalPath},
        duration:1,
        ease:"elastic.out(1,0.3)"
      })

})