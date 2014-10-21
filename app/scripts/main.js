'use strict';

$('#filter').keyup(function () {
        var filter_array = new Array();
        var filter = this.value.toLowerCase();  // no need to call jQuery here

        filter_array = filter.split(' '); // split the user input at the spaces

        var arrayLength = filter_array.length; // Get the length of the filter array

        $('.errno').each(function() {
            /* cache a reference to the current .media (you're using it twice) */
            var _this = $(this);
            var title = _this.find('h4').text().toLowerCase();

            /*
                title and filter are normalized in lowerCase letters
                for a case insensitive search
             */

            var hidden = 0; // Set a flag to see if a div was hidden

            // Loop through all the words in the array and hide the div if found
            for (var i = 0; i < arrayLength; i++) {
                 if (title.indexOf(filter_array[i]) < 0) {
                    _this.hide();
                    hidden = 1;
                }
            }
            // If the flag hasn't been tripped show the div
            if (hidden == 0)  {
               _this.show();
            }
        });
    });
