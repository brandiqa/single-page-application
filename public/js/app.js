window.addEventListener('load', () => {
  const el = $('#app');
  el.html('SPA Rocks!');

  // Highlight Active Menu
  $('a').on('click', (event) => {
    event.preventDefault();
    const target = $(event.target);
    $('.item').removeClass('active');
    target.addClass('active');
  });
});
