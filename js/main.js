const servicesSwiper = new Swiper(".services__swiper", {
slidesPerView: 1,
spaceBetween: 10,
pagination: {
    el: ".swiper-pagination",
},
breakpoints: {
    740:{        
        slidesPerView: 2,           
    },
    990:{        
        slidesPerView: 3,           
    },
    1200: {
        slidesPerView: 4,
    },
    1440: {
        slidesPerView: 5,
    }
}
});

const proudSwiper = new Swiper(".proud__slider", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    autoplay: false,
    speed: 500,
    breakpoints: {
        740:{
            direction: "vertical", 
            slidesPerView: 2,           
        }
    }  
});

document.querySelector(".proud__slider").addEventListener("mouseout", ()=> proudSwiper.autoplay.stop());
document.querySelector(".proud__slider").addEventListener("mouseover", ()=> proudSwiper.autoplay.start());

function setPulsPosition () {
    const elements = document.querySelectorAll('.puls')
    console.log()
    if(elements) {
        elements.forEach(el => {
            el.style.left = `${Math.random() * 100}%`
            el.style.bottom = `${Math.random() * 100}%`
            el.style.animationDuration = `${Math.random() * (16 - 4) + 4}s`
        })
    } 
};
setPulsPosition();

(function (){
    const cards = document.querySelectorAll('.services__card');
    if (cards.length > 0) {        
        cards.forEach(card => {
            const button = card.querySelector('.see-more');
            const closeButton = card.querySelector('.close-back');            
            button.addEventListener('click', ()=> {
                card.classList.add('active')                 
            })
            closeButton.addEventListener('click', ()=> {
                card.classList.remove('active')                 
            })            
        })
    }
})();