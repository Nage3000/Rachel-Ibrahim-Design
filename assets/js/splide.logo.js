document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    focus  : 'center',
    autoplay: true,
    height   : '15rem',
    autoWidth: true,
    interval: 3000,
    speed: 1000,
    gap: '4rem',
    padding: {
      right: '5rem',
      left : '5rem',
    },
    breakpoints: {
      '640': {
        perPage: 2,
        gap    : '1rem',
      },
      '480': {
        perPage: 1,
        gap    : '1rem',
      },
    }
  } ).mount();
} );
