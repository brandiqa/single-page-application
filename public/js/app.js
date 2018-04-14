window.addEventListener('load', () => {
  const el = $('#app');

  // Compile Handlebar Templates
  const errorTemplate = Handlebars.compile($('#error-template').html());
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
      const html = errorTemplate({
        color: 'yellow',
        title: 'Error 404 - Page NOT Found!',
        message: `The path '/${path}' does not exist on this site`,
      });
      el.html(html);
    },
  });

  const showError = (error) => {
    const { title, message } = error.response.data;
    const html = errorTemplate({ color: 'red', title, message });
    el.html(html);
  };

  router.add('/', async () => {
    // Display loader first
    el.html(loaderTemplate({ pageTitle: 'Currency Rates' }));
    try {
      // Load Currency Rates
      const response = await api.get('/rates');
      const { base, date, rates } = response.data;
      // Display Rates Table
      const html = ratesTemplate({ base, date, rates });
      el.html(html);
    } catch (error) {
      showError(error);
    }
  });

  const convertRatesHandler = () => {
    if ($('.ui.form').form('is valid')) {
      console.log('form is valid');
    }
    // Prevent page from submitting to server
    return false;
  };

  router.add('/exchange', async () => {
    // Display loader first
    el.html(loaderTemplate({ pageTitle: 'Exchange Rates' }));
    try {
      // Load Symbols
      const response = await api.get('/symbols');
      const { symbols } = response.data;
      const html = exchangeTemplate({ symbols });
      el.html(html);
      // Specify Form Validation Rules
      $('.ui.form').form({
        fields: {
          from: 'empty',
          to: 'empty',
          amount: 'decimal',
        },
      });
      // Specify Submit Handler
      $('.submit').click(convertRatesHandler);
    } catch (error) {
      showError(error);
    }
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
