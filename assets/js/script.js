window.addEventListener("scroll", function() {
  const scrollY = window.scrollY;
  const bannerImg = document.querySelector(".banner-img");
  bannerImg.style.transform = `translateY(${scrollY * 0.3}px)`; 
});