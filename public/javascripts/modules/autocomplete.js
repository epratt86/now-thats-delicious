function autocomplete(input, latInput, lngInput) {
  if(!input) return; //skip from running if no input on page
  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });
  //stop submission of form when someone hits 'enter' on address field
  input.on('keydown', (e) => {
    if(e.keyCode === 13) e.preventDefault();
  });
}

export default autocomplete;