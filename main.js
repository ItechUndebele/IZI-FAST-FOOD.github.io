/*navigation*/
let bar = document.querySelector('#bar');
let navigation = document.querySelector('.navigation');
let last = document.querySelector('#last');

function responsive_nav()
{
   if (navigation.classList.contains('navigation')){
    navigation.classList.remove('navigation');
   }
   else
   {
    navigation.classList.add('navigation');
   }
}
bar.addEventListener('click', responsive_nav);


//from-validation
let input= document.querySelector('#text-field');
let subscribeButton = document.querySelector('#button');

function validate()
{
   if(input.value == "")
   {
     let create = document.createElement('p');
         create.innerText = 'Please enter email-addres';
         create.style.fontFamily = 'sans-serif';
         create.style.color = 'red';
         document.body.querySelector('#validation-massage').appendChild(create);
   }
   else
   {
      let create = document.createElement('p');
      create.innerText = 'Submision succesful';
      create.style.fontFamily = 'sans-serif';
      create.style.color = 'blue';
      document.querySelector('#validation-massage').appendChild(create);

   }
}
subscribeButton.addEventListener('click', validate);


/*whole color */
let color = document.querySelector('.whole-color');
let color_toggle = document.querySelector('#color_toggle');

function colors()
{ 
   if(color.classList.contains('whole-color'))
   {
      color.classList.remove('whole-color')
   }
   else
   {
      color.classList.add('whole-color')
   }
}
color_toggle.addEventListener('click', colors)

/**ANIMATION**/


const cont = document.querySelector('#video-all');
const form = document.querySelector('#form');
const about = document.querySelector('#about');
const burger = document.querySelector('#burger');
const man_image = document.querySelector('#owner');
/*
//BURGER ANIMATION
gsap.from(burger,{
   x:'100rem',
   opcity: 0,
   duration: 2, 
  
});

//ABOUT ANIMATION
gsap.from(about,{
   x:'100rem',
   opcity: 0,
   duration: 2, 
   delay: 0.5
});

//MEN ANIMATION
gsap.from(man_image,{
   x:'100rem',
   opcity: 0,
   duration: 2, 
   delay: 1
});

*/
//VIDEO ANIMATION
let tl = gsap.timeline({
     scrollTrigger:{
          trigger: cont
     }
});

tl.from(cont,{
     x:'200rem',
     opcity: 0,
     duration: 3,
     ease: 'back',
    
});

//FORM ANIMATION
let tl0 = gsap.timeline({
   scrollTrigger:{
        trigger:form
   }
});

tl0.from(form,{
   x:'200rem',
   opcity: 0,
   duration: 2,
   ease: 'back',
   delay: 1
});

////////////////////
/*
let well =
[
   {
      img: 'images0/kota1.jpg',
      img: 'images0/kota2.jpg',
      img: 'images0/kota3.jpg',
      img: 'images0/kota4.jpg',
      img: 'images0/kot5.jpg',
      img: 'images0/kota6.jpg',
      img: 'images0/kota7.jpg',
      img: 'images0/kota1.jpg'
   }
]
   
   
  last.innerHTML = well.map(index =>
   `
     <div><img src=${index.img}></div>
   `
     
  ).join('');
  */