/* ==========================================================
   VnoCyber H-X
   Premium Pterodactyl Panel Hosting
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================
       LOADING SCREEN
    ========================================================== */

    const loader = document.getElementById("loader")

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0"
            loader.style.visibility = "hidden"

        }, 1800)

    })

    /* ==========================================================
       HEADER SCROLL
    ========================================================== */

    const header = document.querySelector(".vhx-header")

    function headerScroll(){

        if(window.scrollY > 50){

            header.classList.add("scrolled")

        }else{

            header.classList.remove("scrolled")

        }

    }

    window.addEventListener("scroll", headerScroll)

    headerScroll()

    /* ==========================================================
       SCROLL PROGRESS
    ========================================================== */

    const progress = document.getElementById("scroll-progress")

    function scrollProgress(){

        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const progressWidth =
            (window.pageYOffset / totalHeight) * 100

        progress.style.width = progressWidth + "%"

    }

    window.addEventListener("scroll", scrollProgress)

    scrollProgress()

    /* ==========================================================
       MOBILE MENU
    ========================================================== */

    const menuButton =
        document.querySelector(".menu-button")

    const navbar =
        document.querySelector(".navbar")

    if(menuButton){

        menuButton.addEventListener("click",()=>{

            navbar.classList.toggle("active")

            menuButton.classList.toggle("active")

        })

    }

    document.querySelectorAll(".navbar a").forEach(link=>{

        link.addEventListener("click",()=>{

            navbar.classList.remove("active")

            menuButton.classList.remove("active")

        })

    })

    /* ==========================================================
       SMOOTH SCROLL
    ========================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault()

            const target =
                document.querySelector(this.getAttribute("href"))

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                })

            }

        })

    })

})
/* ==========================================================
   COUNTER
==========================================================*/

const counters = document.querySelectorAll(".counter")

const counterObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return

        const counter = entry.target

        const target = Number(counter.dataset.target)

        let current = 0

        const speed = Math.max(10, target / 120)

        const update = () => {

            current += speed

            if(current >= target){

                counter.innerText = target.toLocaleString()

                return

            }

            counter.innerText = Math.floor(current).toLocaleString()

            requestAnimationFrame(update)

        }

        update()

        counterObserver.unobserve(counter)

    })

})

counters.forEach(counter=>{

    counterObserver.observe(counter)

})

/* ==========================================================
   REVEAL ANIMATION
==========================================================*/

const revealElements = document.querySelectorAll(

    ".feature-card,.statistics-card,.pricing-card,.process-card,.testimonial-card,.contact-card,.cta-box,.section-title"

)

const revealObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active")

        }

    })

},{
    threshold:.15
})

revealElements.forEach(item=>{

    item.classList.add("reveal")

    revealObserver.observe(item)

})

/* ==========================================================
   BACK TO TOP
==========================================================*/

const backToTop = document.getElementById("backToTop")

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backToTop.classList.add("show")

    }else{

        backToTop.classList.remove("show")

    }

})

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    })

})

/* ==========================================================
   FAQ
==========================================================*/

document.querySelectorAll(".faq-item").forEach(item=>{

    const question = item.querySelector(".faq-question")

    const answer = item.querySelector(".faq-answer")

    question.addEventListener("click",()=>{

        document.querySelectorAll(".faq-answer").forEach(content=>{

            if(content !== answer){

                content.classList.remove("active")

            }

        })

        answer.classList.toggle("active")

    })

})

/* ==========================================================
   CURSOR GLOW
==========================================================*/

const cursorGlow = document.getElementById("cursorGlow")

document.addEventListener("mousemove",event=>{

    cursorGlow.style.left = event.clientX + "px"

    cursorGlow.style.top = event.clientY + "px"

})

document.addEventListener("touchmove",event=>{

    const touch = event.touches[0]

    cursorGlow.style.left = touch.clientX + "px"

    cursorGlow.style.top = touch.clientY + "px"

})
/* ==========================================================
   LIVE SERVER STATUS
==========================================================*/

const cpuValue = document.getElementById("cpuValue")
const ramValue = document.getElementById("ramValue")
const networkValue = document.getElementById("networkValue")

const cpuBar = document.querySelector(".cpu-fill")
const ramBar = document.querySelector(".ram-fill")
const networkBar = document.querySelector(".network-fill")

function random(min,max){

    return Math.floor(Math.random()*(max-min+1))+min

}

function updateServerStatus(){

    const cpu = random(18,55)

    const ram = random(35,70)

    const network = random(75,100)

    cpuValue.textContent = cpu + "%"

    ramValue.textContent = ram + "%"

    networkValue.textContent = network + "%"

    cpuBar.style.width = cpu + "%"

    ramBar.style.width = ram + "%"

    networkBar.style.width = network + "%"

}

updateServerStatus()

setInterval(updateServerStatus,2500)

/* ==========================================================
   SERVER CORE FLOAT
==========================================================*/

const serverCore = document.querySelector(".server-core")

let floating = 0

function animateCore(){

    floating += 0.02

    serverCore.style.transform =

        `translateY(${Math.sin(floating)*8}px)`

    requestAnimationFrame(animateCore)

}

if(serverCore){

    animateCore()

}

/* ==========================================================
   PARTICLE NETWORK
==========================================================*/

const canvas = document.getElementById("network")

if(canvas){

const ctx = canvas.getContext("2d")

let particles=[]

function resizeCanvas(){

    canvas.width=window.innerWidth

    canvas.height=window.innerHeight

}

window.addEventListener("resize",resizeCanvas)

resizeCanvas()

class Particle{

    constructor(){

        this.reset()

    }

    reset(){

        this.x=Math.random()*canvas.width

        this.y=Math.random()*canvas.height

        this.vx=(Math.random()-0.5)*0.6

        this.vy=(Math.random()-0.5)*0.6

        this.radius=Math.random()*2+1

    }

    update(){

        this.x+=this.vx

        this.y+=this.vy

        if(this.x<0||this.x>canvas.width||

           this.y<0||this.y>canvas.height){

            this.reset()

        }

    }

    draw(){

        ctx.beginPath()

        ctx.arc(

            this.x,

            this.y,

            this.radius,

            0,

            Math.PI*2

        )

        ctx.fillStyle="rgba(0,217,255,.8)"

        ctx.fill()

    }

}

for(let i=0;i<90;i++){

    particles.push(new Particle())

}

function connectParticles(){

    for(let a=0;a<particles.length;a++){

        for(let b=a+1;b<particles.length;b++){

            const dx=particles[a].x-particles[b].x

            const dy=particles[a].y-particles[b].y

            const distance=Math.sqrt(dx*dx+dy*dy)

            if(distance<120){

                ctx.beginPath()

                ctx.moveTo(

                    particles[a].x,

                    particles[a].y

                )

                ctx.lineTo(

                    particles[b].x,

                    particles[b].y

                )

                ctx.strokeStyle=

                    "rgba(0,217,255,"+

                    (1-distance/120)*0.25+

                    ")"

                ctx.lineWidth=1

                ctx.stroke()

            }

        }

    }

}

function particleAnimation(){

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    )

    particles.forEach(p=>{

        p.update()

        p.draw()

    })

    connectParticles()

    requestAnimationFrame(

        particleAnimation

    )

}

particleAnimation()

}
/* ==========================================================
   HERO PARALLAX
==========================================================*/

const hero = document.querySelector(".hero")

window.addEventListener("mousemove",(e)=>{

    if(!hero) return

    const x=(window.innerWidth/2-e.clientX)/40

    const y=(window.innerHeight/2-e.clientY)/40

    hero.style.backgroundPosition=`${x}px ${y}px`

})

/* ==========================================================
   BUTTON RIPPLE
==========================================================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span")

        const rect=this.getBoundingClientRect()

        const size=Math.max(rect.width,rect.height)

        ripple.style.width=size+"px"

        ripple.style.height=size+"px"

        ripple.style.left=e.clientX-rect.left-size/2+"px"

        ripple.style.top=e.clientY-rect.top-size/2+"px"

        ripple.className="ripple"

        this.appendChild(ripple)

        setTimeout(()=>{

            ripple.remove()

        },700)

    })

})

/* ==========================================================
   CARD GLOW FOLLOW
==========================================================*/

document.querySelectorAll(

".feature-card,.pricing-card,.testimonial-card,.statistics-card,.process-card"

).forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect()

        const x=e.clientX-rect.left

        const y=e.clientY-rect.top

        card.style.setProperty("--x",x+"px")

        card.style.setProperty("--y",y+"px")

    })

})

/* ==========================================================
   HERO BADGE ANIMATION
==========================================================*/

const heroBadge=document.querySelector(".hero-badge")

if(heroBadge){

    setInterval(()=>{

        heroBadge.classList.toggle("pulse")

    },2200)

}

/* ==========================================================
   LOGO ROTATION
==========================================================*/

const logo=document.querySelector(".logo img")

if(logo){

    let degree=0

    function rotateLogo(){

        degree+=0.15

        logo.style.transform=

        `rotate(${degree}deg)`

        requestAnimationFrame(rotateLogo)

    }

    rotateLogo()

}

/* ==========================================================
   RANDOM GLOW
==========================================================*/

const blurOne=document.querySelector(".blur-one")

const blurTwo=document.querySelector(".blur-two")

setInterval(()=>{

    if(blurOne){

        blurOne.style.opacity=(0.2+Math.random()*0.3)

    }

    if(blurTwo){

        blurTwo.style.opacity=(0.2+Math.random()*0.3)

    }

},1800)

/* ==========================================================
   FLOATING STATUS CARD
==========================================================*/

document.querySelectorAll(".status-card").forEach((card,index)=>{

    let value=index

    function floatingCard(){

        value+=0.03

        card.style.transform=

        `translateY(${Math.sin(value)*8}px)`

        requestAnimationFrame(floatingCard)

    }

    floatingCard()

})

/* ==========================================================
   PAGE FADE
==========================================================*/

document.body.classList.add("fade-in")
/* ==========================================================
   ACTIVE NAVIGATION
==========================================================*/

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".navbar a")

function activeNavigation(){

    let current = ""

    sections.forEach(section=>{

        const top = section.offsetTop - 120
        const height = section.offsetHeight

        if(window.scrollY >= top &&
           window.scrollY < top + height){

            current = section.getAttribute("id")

        }

    })

    navLinks.forEach(link=>{

        link.classList.remove("active")

        const href = link.getAttribute("href")

        if(href === "#" + current){

            link.classList.add("active")

        }

    })

}

window.addEventListener("scroll",activeNavigation)

activeNavigation()

/* ==========================================================
   TYPING EFFECT
==========================================================*/

const typingTarget = document.querySelector(".typing")

if(typingTarget){

    const words=[

        "Pterodactyl Panel",

        "Bot WhatsApp Hosting",

        "NodeJS Hosting",

        "Premium Server"

    ]

    let wordIndex=0
    let charIndex=0
    let deleting=false

    function typingEffect(){

        const currentWord=words[wordIndex]

        if(!deleting){

            typingTarget.textContent=currentWord.substring(0,charIndex++)

            if(charIndex>currentWord.length){

                deleting=true

                setTimeout(typingEffect,1600)

                return

            }

        }else{

            typingTarget.textContent=currentWord.substring(0,charIndex--)

            if(charIndex<0){

                deleting=false

                wordIndex=(wordIndex+1)%words.length

            }

        }

        setTimeout(typingEffect,deleting?40:90)

    }

    typingEffect()

}

/* ==========================================================
   ONLINE CLIENT
==========================================================*/

const onlineClient=document.getElementById("onlineClient")

if(onlineClient){

    let total=250

    setInterval(()=>{

        total+=Math.floor(Math.random()*5)-2

        if(total<200) total=205

        if(total>350) total=345

        onlineClient.textContent=total

    },2500)

}

/* ==========================================================
   PERFORMANCE
==========================================================*/

window.addEventListener("resize",()=>{

    activeNavigation()

})

window.addEventListener("pageshow",()=>{

    activeNavigation()

})

/* ==========================================================
   CONSOLE
==========================================================*/

console.clear()

console.log(

"%cVnoCyber H-X",

"color:#00d9ff;font-size:28px;font-weight:bold;"

)

console.log(

"%cPremium Pterodactyl Panel Hosting",

"color:#7c3aed;font-size:14px;"

)

console.log(

"%cWebsite Loaded Successfully",

"color:#00ff99;font-size:14px;"

)

/* ==========================================================
   END OF FILE
==========================================================*/
