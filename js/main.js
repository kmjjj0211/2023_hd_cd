
//카드이미지
const next = document.querySelector(".arrow_right"); 
const prev = document.querySelector(".arrow_left");
const card_total = document.querySelector(".card_design>ul");
const card = document.querySelectorAll(".card_design>ul>li");

let cardNum = 0;
let lastNum = card.length - 1;

next.addEventListener("click", e =>{
    e.preventDefault();
    cardNum++;
    if(cardNum>lastNum) cardNum = 0;
    for(let i = 0; i<card.length; i++){
        card.forEach(item => {
            item.classList.remove("active")
        })
    }
    card[cardNum].classList.add("active")
})

prev.addEventListener("click", e =>{
    e.preventDefault();
    cardNum--;
    if(cardNum<0) cardNum = lastNum;
    for(let i = 0; i<card.length; i++){
        card.forEach(item => {
            item.classList.remove("active")
        })
    }
    card[cardNum].classList.add("active")
})


//스크롤이벤트
const event_text = document.querySelector(".event_text");
const event_text2_text = document.querySelector(".event_text2_text");
const event_text3 = document.querySelector(".event_text3>p");
const event_order_list = document.querySelectorAll(".event_order>ol>li");
const card_benefit_lists = document.querySelectorAll(".card_benefit_lists>li");

function scrollActive(el) {
    el.style.opacity = "1";
    el.style.transform = "translate3d(0,0,0)"
}

window.addEventListener("scroll",e=>{
    let scroll = document.querySelector("html").scrollTop;
    console.log(scroll)

    if(scroll>400){scrollActive(event_text)}else{
        event_text.style.opacity = "0";
    }

    if(scroll>800){scrollActive(event_text2_text)}else{
        event_text2_text.style.opacity = "0";
    }

    if(scroll>1400){
        event_text3.classList.add("on")
    }else{
        event_text3.classList.remove("on")
    }

    if(scroll>1800){
        for(let i=0;i<event_order_list.length; i++){
            event_order_list[i].classList.add("on");
        }
    }

    if(scroll>3500){
        card_benefit_lists[0].classList.add("on");
    }
    if(scroll>3700){
        card_benefit_lists[1].classList.add("on");
    }
    if(scroll>3900){
        card_benefit_lists[2].classList.add("on");
    }
    if(scroll>4100){
        card_benefit_lists[3].classList.add("on");
    }
})

//
const logo = document.querySelector("#header>.logo>h1>img");

setTimeout(()=>{
    logo.classList.add("on")
},1500)

const main_text = document.querySelector(".main_text");

setTimeout(()=>{
    main_text.classList.add("on")
},1500)

const header_arrow = document.querySelector("#header>i");
setTimeout(()=>{
    header_arrow.classList.add("on")
},1500)


