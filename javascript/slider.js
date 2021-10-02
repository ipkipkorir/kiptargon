/**************************************
Slideshow animation
**************************************/
/**Select all images and hold them in a constant variable **/
const slide_show_images = document.querySelectorAll(".banner .slideshow-img");

/**Set the delay time and the image counter**/
const next_image_delay = 4000;
let current_image_counter = 0;

/**Display the images one at a time**/
slide_show_images[current_image_counter].style.opacity = 1;

setInterval(nextImage, next_image_delay);

function nextImage() {
	slide_show_images[current_image_counter].style.opacity = 0;
	current_image_counter = (current_image_counter + 1) % slide_show_images.length;
	slide_show_images[current_image_counter].style.opacity = 1;
}