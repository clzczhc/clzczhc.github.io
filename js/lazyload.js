(function () {
  const images = [...document.querySelectorAll('.card-image')].map(ele => ele.children[0]);

  function callback(intersectionObserverEntrys) {
    for (const i of intersectionObserverEntrys) {
      // isIntersecting属性，当目标元素在视口中为true，否则为false
      if (i.isIntersecting) {

        const img = i.target;
        const realImg = img.nextElementSibling;

        const realUrl = realImg.getAttribute('data-src');
        realImg.setAttribute('src', realUrl);

        realImg.addEventListener('load', () => {
          realImg.classList.add('show');
          img.classList.remove('show');

          realImg.addEventListener('transitionend', function animationend() {
            img.classList.add('hidden');
            realImg.removeEventListener('transitionend', animationend);
          })
        })

        // 结束观察
        observer.unobserve(img);
      }
    }
  }

  const observer = new IntersectionObserver(callback);

  for (const i of images) {
    observer.observe(i);
  }
})();