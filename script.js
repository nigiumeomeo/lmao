document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    let scrollAmount = 0;
    const scrollSpeed = 1; // Điều chỉnh tốc độ cuộn
    const carouselHeight = carousel.scrollHeight; // Tổng chiều cao của carousel
    const carouselVisibleHeight = carousel.clientHeight; // Chiều cao có thể nhìn thấy của carousel
    
    function scrollCarousel() {
      // Cuộn xuống và di chuyển carousel
      scrollAmount += scrollSpeed;
      if (scrollAmount >= carouselHeight) {
        scrollAmount = 0; // Reset cuộn khi đến cuối carousel
      }
      console.log("ád");
      carousel.style.transform = `translateY(-${scrollAmount}px)`; // Áp dụng vị trí cuộn
    }
  
    // Cuộn liên tục với interval
    setInterval(scrollCarousel, 20); // Mỗi 20ms cuộn một chút (bạn có thể điều chỉnh tốc độ này)
  });
  