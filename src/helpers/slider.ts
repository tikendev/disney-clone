const titlesNodeList = document.querySelectorAll('[data-banner="title-overlay"]');
const titlesArray = Array.from(titlesNodeList);
const swiperNodeList = document.querySelectorAll('.swiper-slide');
const swiperArray = Array.from(swiperNodeList);

export const initHandleActiveSlide = () => {
    titlesArray[0].classList.toggle('active');
    
    swiperArray.forEach( swiper => {
        swiper.classList.add('background-color');
    });

    swiperArray[0].classList.remove('background-color');
}

export const handleActiveSlide = () => {
    const activeSlide = document.querySelector('.swiper-slide-active') as HTMLElement;
    const swiperNodeList = document.querySelectorAll('.swiper-slide');
    const titlesNodeList = document.querySelectorAll('[data-banner="title-overlay"]');
    const swiperArray = Array.from(swiperNodeList);
    const titlesArray = Array.from(titlesNodeList);
    
    const index = swiperArray.indexOf(activeSlide);

    swiperArray.forEach( swiper => {
        swiper.classList.add('background-color');
    });
    
    titlesArray.forEach(title => {
        title.classList.remove('active');
    });
    
    titlesArray[index].classList.toggle('active');
    swiperArray[index].classList.toggle('background-animation');
    swiperArray[index].classList.remove('background-color');
}