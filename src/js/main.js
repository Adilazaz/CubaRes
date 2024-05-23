document.addEventListener('scroll', function() {
    const texts = document.querySelectorAll('.hidden-text');
    texts.forEach(text => {
      const rect = text.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        text.classList.add('visible');
      }
    });
  });
  