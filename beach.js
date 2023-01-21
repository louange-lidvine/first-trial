const b=document.querySelector(".section-b");
const a=document.querySelector(".section-c");
const box2= document.querySelector("#box2");
const btn=document.querySelector(".button");
const showcase=document.querySelector(".showcase");
const images=[
    "https://images.pexels.com/photos/9361349/pexels-photo-9361349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9745475/pexels-photo-9745475.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/13756703/pexels-photo-13756703.jpeg?auto=compress&cs=tinysrgb&w=600"
]

btn.addEventListener("click",()=>{
    var number= Math.floor(math.random()*images.length);
    console.log(number);
    showcase.style.backgroundImage=url(images[number]);

})



