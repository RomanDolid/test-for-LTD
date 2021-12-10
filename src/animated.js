
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('active');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.animated');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  
  // const animItems = document.querySelectorAll('.animated');

  // if (animItems.length > 0) {
  //   window.addEventListener('scroll', animOnScroll);
  //   function animOnScroll() {
  //     for (let i = 0; i < animItems.length; i++) {
  //       const animItem = animItems[i];
  //       const animItemHeight = animItem.offsetHeight;
  //       const animItemOffset = offset(animItem).top;
  //       const animStart = 4;

  //       let animItemPoint = window.innerHeight - animItemHeight / animStart;
  //       if(animItemHeight > window.innerHeigh) {
  //         animItemPoint = window.innerHeight - window.innerHeight / animStart;
  //       }

  //       if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
  //         animItem.classList.add('active');
  //       } else {
  //         animItem.classList.remove('active');
  //       }
  //     }
  //   }
    
  //   function offset(el) {
  //     const rect = el.getBoundingClientRect(),
  //     scrollTop = window.scrollY || document.documentElement.scrollTop,
  //     scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  //     return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  
  //   }
  //   setTimeout(() => {
  //     animOnScroll();
  //   }, 250);


  // }
