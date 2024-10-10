import type Swiper from 'swiper';

const titlesNodeList = document.querySelectorAll('[data-banner="title-overlay"]');
const titlesArray = Array.from(titlesNodeList);
const swiperNodeList = document.querySelectorAll('.swiper-slide');
const swiperArray = Array.from(swiperNodeList);

export const initHandleActiveSlide = (index: number) => {
    titlesArray[index].classList.toggle('active');
    
    swiperArray.forEach( swiper => {
        swiper.classList.add('background-color');
    });

    swiperArray[index].classList.remove('background-color');
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

export const activeArrowOpacity = (pre: string, next: string) => {
    const prevButton = document.querySelector(`.${pre}`) as HTMLElement;
    const nextButton = document.querySelector(`.${next}`) as HTMLElement;

    const changeArrowOpacity = (arrow: HTMLElement) => {
        prevButton.classList.remove('visible');
        nextButton.classList.remove('visible');

        arrow.classList.add('visible');
    }

    prevButton.addEventListener('click', () => changeArrowOpacity(prevButton));
    nextButton.addEventListener('click', () => changeArrowOpacity(nextButton));
}