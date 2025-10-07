document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});