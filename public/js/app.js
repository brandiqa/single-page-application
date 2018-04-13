window.addEventListener('load', () => {
  const el = $('#app');

  const router = new Router({
    mode: 'history',
    page404: (path) => {
      el.html(`/${path} Page not found`);
    },
  });

  router.add('/', () => {
    el.html('Currency Page');
  });

  router.add('/exchange', () => {
    el.html('Exchange Page');
  });

  router.add('/historical', () => {
    el.html('Historical Page');
  });

  router.navigateTo(window.location.pathname);


  // Highlight Active Menu on Load
  const link = $(`a[href$='${window.location.pathname}']`);
  link.addClass('active');

  $('a').on('click', (event) => {
    // Block page load
    event.preventDefault();

    // Highlight Active Menu on Click
    const target = $(event.target);
    $('.item').removeClass('active');
    target.addClass('active');

    // Navigate to clicked url
    const href = target.attr('href');
    const path = href.substr(href.lastIndexOf('/'));
    router.navigateTo(path);
  });
});
