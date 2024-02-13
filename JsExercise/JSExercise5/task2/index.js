function filterNames() {
    var input = document.getElementById('search-input');
    var filter = input.value.toUpperCase();
    var cards = document.getElementsByClassName('cards');

    for (var i = 0; i < cards.length; i++) {
        // debugger;
      var card = cards[i];
      var fullName = card.textContent.toUpperCase();
      
      if (fullName.indexOf(filter) > -1) {
        card.innerHTML = card.textContent.replace(result, '<b class="yellow">$&</b>');
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    }
  }