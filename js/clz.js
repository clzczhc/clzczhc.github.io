window.onload = function () {
  let clzPjax = $(document).pjax('a[target!=_blank]', '#pageContent', { fragment: '#pageContent', timeout: 6000, scroll: false });
  clzPjax.on('pjax:complete', function () {
    $('body').css({
      overflow: 'auto'
    });

    if ($('#toc-content').length) {
      if (window.tocbot) {
        tocbot.destroy()
      }
    }
  })
}


