let turnbtn=document.querySelectorAll(".nextprev-btn");
turnbtn.forEach((el,index)=>{
    el.onclick=()=>{
        const pageturnId=el.getAttribute('data-page')
        const pageTurn =document.getElementById(pageturnId);
        if(pageTurn.classList.contains("turn")){
            pageTurn.classList.remove("turn");
            setTimeout(() => {
                pageTurn.style.zIndex=20-index;I
            }, 500);
        }
        else{
            pageTurn.classList.add("turn");
            setTimeout(() => {
                pageTurn.style.zIndex=20+index;I
            }, 500);
        }
    }
})

const pages=document.querySelectorAll(".book-page.page-right");
const contactMebtn=document.querySelector(".btn.contact-me");
contactMebtn.onclick=()=>{
    pages.forEach((page,index)=>{
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex=20+index;
            }, 500);
        }, (index+1)*300 + 100);
    })
}
let totalPages=pages.length;
let pageNumber=0;
function reverseIndex() {
    pageNumber--;
    if(pageNumber<0){
        pageNumber=totalPages-1;
    }
}

const backProfileBtn=document.querySelector(".back-profile");
backProfileBtn.onclick=()=>{
    pages.forEach((_,index)=>{
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10+index;
            },500);


        }, (index + 1) * 200 +100);
    })
}
const coverRight=document.querySelector(".cover.cover-right");
const pageLeft=document.querySelector(".book-page.page-left");

setTimeout(() => {
    coverRight.classList.add('turn');
}, 1500);

setTimeout(() => {
    coverRight.style.zIndex=-1;
}, 2800);

setTimeout(() => {
    pageLeft.style.zIndex=20;
}, 4000);


pages.forEach((_,index)=>{
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10+index;
        },500);


    }, (index + 1) * 200 + 2100);
})
