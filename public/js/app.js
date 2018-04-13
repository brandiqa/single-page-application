window.addEventListener('load', () => {
  const el = $('#app');
  el.html('SPA Rocks!');

  // Highlight Active Menu on Load
  const link = $(`a[href$='${window.location.pathname}']`);
  link.addClass('active');

  // Highlight Active Menu on Click
  $('a').on('click', (event) => {
    event.preventDefault();
    const target = $(event.target);
    $('.item').removeClass('active');
    target.addClass('active');
  });
});
