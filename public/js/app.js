window.addEventListener('load', () => {
  const el = $('#app');

  // Compile Handlebar Templates
  const loaderTemplate = Handlebars.compile($('#loader-template').html());
  const ratesTemplate = Handlebars.compile($('#rates-template').html());
  const exchangeTemplate = Handlebars.compile($('#exchange-template').html());
  const historicalTemplate = Handlebars.compile($('#historical-template').html());

  // Instantiate api handler
  const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
  });

  const router = new Router({
    mode: 'history',
    page404: (path) => {
      el.html(`/${path} Page not found`);
    },
  });

  router.add('/', async () => {
    // Display loader first
    el.html(loaderTemplate({ pageTitle: 'Currency Rates' }));
    // Load Currency Rates
    const response = await api.get('/rates');
    const { base, date, rates } = response.data;
    // Display Rates Table
    const html = ratesTemplate({ base, date, rates });
    el.html(html);
  });

  router.add('/exchange', () => {
    const html = exchangeTemplate();
    el.html(html);
  });

  router.add('/historical', () => {
    const html = historicalTemplate();
    el.html(html);
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
