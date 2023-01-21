const reviews=[
{
   id:1,
   img:"https://images.pexels.com/photos/2362887/pexels-photo-2362887.jpeg?auto=compress&cs=tinysrgb&w=600",
   work:"pediatrician",
   writer:"Susan Thrones",
   info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt officia quam odit labore aspernatur in, vero eius itaque obcaecati accusantium optio possimus distinctio quas dolores magni suscipit deleniti sunt!",
},
{
id:2,
img:"https://images.pexels.com/photos/1624111/pexels-photo-1624111.jpeg?auto=compress&cs=tinysrgb&w=600",
work:"an Actress",
writer:"zendaya Hollands",
info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt officia quam odit labore aspernatur in, vero eius itaque obcaecati accusantium optio possimus distinctio quas dolores magni suscipit deleniti sunt!",
},
{
id:3,
 img:"https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=600",
work:"A dancer",
writer:"Jackob Stones",
info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem incidunt officia quam odit labore aspernatur in, vero eius itaque obcaecati accusantium optio possimus distinctio quas dolores magni suscipit deleniti sunt!",
    }

]


const image=document.getElementById("image");
const author= document.getElementById("author");
const job= document.getElementById("job");
const text= document.getElementById("text");

const prev=document.querySelector("#btn-prev");
const next=document.querySelector("#btn-next");
const random=document.querySelector("#random");

let currentNumber=0;
window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentNumber);
        
})
function showPerson(person) {
    const item=reviews[person];
    image.src=item.img
    author.textcontent=item.writer;
    job.textContent=item.work;
    text.src=item.info;
    
}

next.addEventListener("click",function(){
    currentNumber++;
    if(currentNumber>reviews.length){
              currentNumber=0;
    }
    showPerson(currentNumber);
})
prev.addEventListener("click",function(){
    currentNumber--;
    if (currentNumber<0){
        currentNumber=3;
    }
    showPerson(currentNumber);
});
random.addEventListener("click",function(){
    currentNumber= Math.floor(Math.random()*reviews.length);
    console.log(currentNumber);
    showPerson(currentNumber);

})
    


















































class Teacher{
    constructor(){
        this.name;
        this.gender;
        this.birthYear;


    }
    get getName(){
        return this._name;

    }
    ;
    set setName(val){
        this._name=val;    
    }
    ;
    calcAge=function(){
        console.log("am "+this.name+"a "+this.gender+"BORN IN  "+this.birthYear);
    }
    ;
    greet=function(){
        console.log ("hi am a "+this.career);
    }
}
Teacher.prototype.career="medicine"

    const person=new Teacher;
    person.name="john";
    person.birthYear=1990;
    person.gender="female";
    console.log(person.calcAge());
    person.getName;
    person.setName="louange";
    person.name;


// const student=Object.create(person);
// student.grade=20;
// console.log(person.calcAge());
// person.greet();
// console.log(student.toString());
// console.log(Teacher.Prototype);
// console.log(Object.ge)