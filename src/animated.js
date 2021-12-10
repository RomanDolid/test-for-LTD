
  const animItems = document.querySelectorAll('.anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 100;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeigh) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItem.classList.add('active');
        } else {
          animItem.classList.remove('active');
        }
      }
    }
    
    function offset(e) {
      const rect = e.getBoundingClientRect(),
      scrollTop =  window.scrollY || document.body.scrollTop,
      scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
      
    }
  setTimeout(() => {
    animOnScroll();
    console.log(scrollY);
  }, 250);
  }

