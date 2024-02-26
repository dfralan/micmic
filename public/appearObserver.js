

addEventListener("DOMContentLoaded", (event) => {

    // Smooth appear from side animtion on hover
    const toAnimate = document.querySelectorAll('.animate')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('disappear');
          if (entry.target.classList.contains("draw-me")) {
            {entry.target.classList.add('draw');}
          } else {entry.target.classList.add('appear');}
        }
      });
    },
      {
        threshold: 0.7
      });
    //
    for (let i = 0; i < toAnimate.length; i++) {
      const elements = toAnimate[i];
  
      observer.observe(elements);
    }
  
  });