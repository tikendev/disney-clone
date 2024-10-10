import type Swiper from 'swiper';

export const initHandleActiveCollection = (index: number) => {
    const swiperNodeList = document.querySelectorAll('.movie-carousel-item');
    const swiperArray = Array.from(swiperNodeList);
    
    swiperArray.forEach( swiper => {
        swiper.classList.add('inactive');
    });

    if (index > 0) {
        for (let i = 0; i < 5; i++) {
            swiperArray[i].classList.remove('inactive');
        }
    } else {
        swiperArray[index].classList.remove('inactive');
    }
}

export const handleActiveCollection = (swiper: Swiper) => {
    const activeIndex = swiper.activeIndex;
    const slidesPerview = swiper.slidesPerViewDynamic();

    swiper.slides.forEach( slide => {
        slide.classList.add('inactive')
    })

    for (let i = activeIndex; i < activeIndex + (slidesPerview - 1); i++) {
        swiper.slides[i].classList.remove('inactive');
    }
}

export const changeButtonOpacity = (button: string) => {
    const arrowButton = document.querySelector(`.${button}`) as HTMLElement;
    arrowButton.classList.remove('visible');    
}