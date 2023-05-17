function convertLength(unit, value) {
    if (unit === 'millimeters') {
      var millimeters = parseFloat(value);
      var centimeters = millimeters / 10;
      var meters = millimeters / 1000;
      var kilometers = millimeters / 1000000;

      document.getElementById('centimeters').value = centimeters;
      document.getElementById('meters').value = meters;
      document.getElementById('kilometers').value = kilometers;
    } else if (unit === 'centimeters') {
      var centimeters = parseFloat(value);
      var millimeters = centimeters * 10;
      var meters = centimeters / 100;
      var kilometers = centimeters / 100000;

      document.getElementById('millimeters').value = millimeters;
      document.getElementById('meters').value = meters;
      document.getElementById('kilometers').value = kilometers;
    } else if (unit === 'meters') {
      var meters = parseFloat(value);
      var millimeters = meters * 1000;
      var centimeters = meters * 100;
      var kilometers = meters / 1000;

      document.getElementById('millimeters').value = millimeters;
      document.getElementById('centimeters').value = centimeters;
      document.getElementById('kilometers').value = kilometers;
    } else if (unit === 'kilometers') {
      var kilometers = parseFloat(value);
      var millimeters = kilometers * 1000000;
      var centimeters = kilometers * 100000;
      var meters = kilometers * 1000;

      document.getElementById('millimeters').value = millimeters;
      document.getElementById('centimeters').value = centimeters;
      document.getElementById('meters').value = meters;
    }
  }

function clearValues() {
document.getElementById('millimeters').value = '';
document.getElementById('centimeters').value = '';
document.getElementById('meters').value = '';
document.getElementById('kilometers').value = '';
}

const searchInput = document.getElementById('search-input');
const searchBar = document.querySelector('.search-bar');

searchInput.addEventListener('focus', () => {
  searchBar.classList.add('input-expanded');
});

searchInput.addEventListener('blur', () => {
  searchBar.classList.remove('input-expanded');
});
