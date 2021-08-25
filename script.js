var images=[{
    name:"Palm",
    img:'img/IMG1.jpg',

},
{
    name:"Sunset",
    img:'img/IMG2.jpg',
},

{
    name:"Cancer",
    img:'img/IMG3.jpg',
},
{
    name:"Flamingo",
    img:'img/IMG4.jpg',
}
];

var index=0;
var slaytCount=images.length;
var interval;
var objects={
    duration:'2000',
    random:true
}

init(objects);
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function() {
    index--;
    showSlide(index);
    console.log(index)
}); 

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function() {
    index++;
    showSlide(index);
    console.log(index);
    
}); 
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter',function () {
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave',function () {
        init(objects);
    })
});

  function init(obj) {
    var prev;
    interval=setInterval(function() {
        //random=true
        if(obj.random){
            do{
                index=Math.floor(Math.random()*slaytCount);
            }
            while(index==prev){
                prev=index;
            }
            //console.log(index);
        }
        
        else{
            if(slaytCount==index+1){
                index=-1;
            }
            
            showSlide(index);
            index++;
        }
        
        showSlide(index);
        
    },objects.duration)
}
function showSlide(i) {
    index=i;
    if(i<0){
        index=slaytCount-1;
    }
    if(i>=slaytCount){
        index=0;
    }
document.querySelector('.card-title').textContent=images[index].name;
document.querySelector('.card-img-top').setAttribute('src',images[index].img);
}


