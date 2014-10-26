'use strict';
$(document).ready(function() {
  var errnoFirebase = new Firebase('https://errno.firebaseio.com/');
  errnoFirebase.once('value', function(errnoListSnapshot) {
    errnoListSnapshot.forEach(function(erroSnapshot) {
      var errnoNumber = erroSnapshot.child('Number').val();
      var errnoMessage = erroSnapshot.child('Message').val();
      var errnoDesc = erroSnapshot.child('Description').val();
      $('.errnoTable').append('<tr class=errno><td>' + errnoNumber + '</td><td>' + errnoMessage + '</td><td>' + errnoDesc + '</td>');
      console.log(errnoNumber + errnoMessage + errnoDesc);
    });
  });

  // Attach an asynchronous callback to read the data at our posts reference
  $('#errnoInput').keyup(function () {
        var filterArray = [];
        var filter = this.value.toLowerCase();  // no need to call jQuery here

        filterArray = filter.split(' '); // split the user input at the spaces

        var arrayLength = filterArray.length; // Get the length of the filter array

        $('.errno').each(function() {
            /* cache a reference to the current .media (you're using it twice) */
            var _this = $(this);
            var title = _this.find('td').text().toLowerCase();

            /*
                title and filter are normalized in lowerCase letters
                for a case insensitive search
             */

            var hidden = 0; // Set a flag to see if a div was hidden

            // Loop through all the words in the array and hide the div if found
            for (var i = 0; i < arrayLength; i++) {
                 if (title.indexOf(filterArray[i]) < 0) {
                    _this.hide();
                    hidden = 1;
                }
            }
            // If the flag hasn't been tripped show the div
            if (hidden === 0)  {
               _this.show();
            }
        });
    });
});
