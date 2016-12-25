(() => {
  let landNav = document.querySelector('div.land-nav');
  let talentDiv = document.querySelector('.talents');
  landNav.addEventListener('click', () => {
    console.log('giving a cuppa');
    // let body = document.getElementsByTagName("BODY")[0];
    // body.removeChild(landNav)
    landNav.className = 'hidden';
    talentDiv.className = 'talents';
  })
})();
