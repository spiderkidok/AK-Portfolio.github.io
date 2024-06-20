/* Adapted from:  https://youtu.be/AKmoccuRiN4?si=AemssESIYWQUDrwA */

const image = document.querySelector('.image')
const slider = document.querySelector('.slider')
const banner = document.querySelector('.banner')
// const header = document.querySelector('.header')

const tl = new TimelineMax();

tl.fromTo(
    image,
    1,
    { height: "0%"}, 
    { height: "80%", ease: Power2.easeInOut }
)