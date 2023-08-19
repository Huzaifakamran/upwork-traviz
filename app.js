const cont1 = document.getElementById('dropdown');
const cont2 = document.getElementById('dropdown-content');
let isClicked = false;

cont1.addEventListener('click', function () {
  if (isClicked) {
    cont1.classList.remove('clicked');
    cont2.classList.remove('clicked');
  } else {
    cont1.classList.add('clicked');
    cont2.classList.add('clicked');
  }
  isClicked = !isClicked;
});

try {
  const divDesc = document.querySelector('.divDesc');
  const showMoreBtn = document.getElementById('showMoreBtn');

  function initialize() {
    const input = document.getElementById('inputMagic');
    const autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
    // spinnerDiv.style.display = 'flex';
    // spinnerDiv.classList.remove("spinnerHidden");
    const place = autocomplete.getPlace();

  })
}
  google.maps.event.addDomListener(window, 'load', initialize);
  showMoreBtn.addEventListener('click', function () {

    // If the div is expanded, scroll to show the new content
    if (divDesc.classList.contains('expanded')) {
      divDesc.style.height = '270px'; // Reset to the default height
    } else {
      const scrollHeight = divDesc.scrollHeight;
      divDesc.style.height = scrollHeight + 'px';
    }
    divDesc.classList.toggle('expanded');
  });
} 
catch (error) {
  console.log(error);
}


