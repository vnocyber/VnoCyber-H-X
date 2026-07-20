/* ==========================================================
   VnoCyber H-X
   pricing.js
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

/* ==========================================================
   PRICING CARD ACTIVE
==========================================================*/

const pricingCards=document.querySelectorAll(".pricing-card")

pricingCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

pricingCards.forEach(item=>{

item.classList.remove("active-card")

})

card.classList.add("active-card")

})

})

/* ==========================================================
   BUTTON RIPPLE
==========================================================*/

document.querySelectorAll(

".pricing-action a"

).forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span")

const rect=this.getBoundingClientRect()

const size=Math.max(rect.width,rect.height)

ripple.className="ripple"

ripple.style.width=size+"px"

ripple.style.height=size+"px"

ripple.style.left=

e.clientX-rect.left-size/2+"px"

ripple.style.top=

e.clientY-rect.top-size/2+"px"

this.appendChild(ripple)

setTimeout(()=>{

ripple.remove()

},700)

})

})

/* ==========================================================
   FAQ
==========================================================*/

document.querySelectorAll(".faq-item")

.forEach(item=>{

const question=

item.querySelector(".faq-question")

const answer=

item.querySelector(".faq-answer")

question.addEventListener("click",()=>{

document

.querySelectorAll(".faq-item")

.forEach(box=>{

if(box!==item){

box.classList.remove("active")

box

.querySelector(".faq-answer")

.classList.remove("active")

}

})

item.classList.toggle("active")

answer.classList.toggle("active")

})

})
/* ==========================================================
   GLOW FOLLOW
==========================================================*/

pricingCards.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=

card.getBoundingClientRect()

const x=e.clientX-rect.left

const y=e.clientY-rect.top

card.style.setProperty(

"--mouse-x",

x+"px"

)

card.style.setProperty(

"--mouse-y",

y+"px"

)

})

})

/* ==========================================================
   TABLE ANIMATION
==========================================================*/

const rows=

document.querySelectorAll(

".comparison-table tbody tr"

)

rows.forEach((row,index)=>{

row.style.opacity="0"

row.style.transform=

"translateY(30px)"

setTimeout(()=>{

row.style.transition=".6s"

row.style.opacity="1"

row.style.transform=

"translateY(0)"

},index*120)

})

/* ==========================================================
   CTA FLOAT
==========================================================*/

const cta=

document.querySelector(".cta-box")

if(cta){

let value=0

function animateCTA(){

value+=0.02

cta.style.transform=

`translateY(${Math.sin(value)*6}px)`

requestAnimationFrame(

animateCTA

)

}

animateCTA()

}
/* ==========================================================
   AUTO HIGHLIGHT
==========================================================*/

const bestSeller=

document.querySelector(".popular")

setInterval(()=>{

bestSeller.classList.toggle(

"pulse"

)

},2200)

/* ==========================================================
   CONSOLE
==========================================================*/

console.clear()

console.log(

"%cVnoCyber H-X",

"font-size:28px;color:#00d9ff;font-weight:bold;"

)

console.log(

"%cPricing Page Loaded",

"font-size:14px;color:#7c3aed;"

)

console.log(

"%cPremium Pterodactyl Hosting",

"font-size:14px;color:#00ff99;"

)

})
