document.addEventListener('DOMContentLoaded', function() {
  const mainNav = document.querySelectorAll('nav')[0];

  //Side nav toggle
  const sidenav = document.querySelectorAll('.sidenav');
  const sidenavInstance = M.Sidenav.init(sidenav);
  
  var instance = M.Sidenav.getInstance(sidenav);

  sidenavInstance[0].options.onOpenStart = () => {
    mainNav.classList.add('nav--hidden');
  };

  sidenavInstance[0].options.onCloseEnd = () => {
    mainNav.classList.remove('nav--hidden');
  };


  // Parallax effect
  const parallaxElems = document.querySelectorAll('.parallax');
  const parallaxinstances = M.Parallax.init(parallaxElems);

  // Nav dock effect
  document.addEventListener('scroll', () => {
    if(window.scrollY > mainNav.offsetHeight) {
      mainNav.classList.add('scrolled');
    }

    if(window.scrollY === 0) {
      mainNav.classList.remove('scrolled');
    }
  })
});
