'use strict';
$(document).ready(function() {

  $('#aixButton').addClass('active');

  var errnoFirebase = new Firebase('https://errno.firebaseio.com/');

  errnoFirebase.once('value', function(errnoListSnapshot) {
    errnoListSnapshot.forEach(function(erroSnapshot) {
      var errnoNumber = erroSnapshot.child('Number').val();
      var errnoMessage = erroSnapshot.child('Message').val();
      var errnoDesc = erroSnapshot.child('Description').val();
      $('.errnoTable').append('<tr class="errnoRow"><td>' + errnoNumber + '</td><td>' + errnoMessage + '</td><td>' + errnoDesc + '</td></tr>');
    });
  });

  // Attach an asynchronous callback to read the data at our posts reference
  $('#errnoInput').keyup(function() {
        var filterArray = [];
        var filter = this.value.toLowerCase();  // no need to call jQuery here

        filterArray = filter.split(' '); // split the user input at the spaces

        var arrayLength = filterArray.length; // Get the length of the filter array

        $('.errnoRow').each(function() {
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

    // Select Firebase dependent on selected OS
    $('#aixButton').click(function () {
      if (!$('#aixButton').hasClass('active'))
        {
          $('#aixButton').addClass('active');
          $('#linuxButton').removeClass('active');
          $('.errnoRow').remove();
          errnoFirebase = new Firebase('https://errno.firebaseio.com/');
          errnoFirebase.once('value', function(errnoListSnapshot) {
            errnoListSnapshot.forEach(function(erroSnapshot) {
              var errnoNumber = erroSnapshot.child('Number').val();
              var errnoMessage = erroSnapshot.child('Message').val();
              var errnoDesc = erroSnapshot.child('Description').val();
              $('.errnoTable').append('<tr class="errnoRow"><td>' + errnoNumber + '</td><td>' + errnoMessage + '</td><td>' + errnoDesc + '</td></tr>');
            });
          });
          document.getElementById('errnoInput').value= '';
        }
    });

    $('#linuxButton').click(function () {
      if (!$('#linuxButton').hasClass('active'))
        {
          $('#linuxButton').addClass('active');
          $('#aixButton').removeClass('active');
          $('.errnoRow').remove();
          errnoFirebase = new Firebase('https://errno-linux.firebaseio.com/');
          errnoFirebase.once('value', function(errnoListSnapshot) {
            errnoListSnapshot.forEach(function(erroSnapshot) {
              var errnoNumber = erroSnapshot.child('Number').val();
              var errnoMessage = erroSnapshot.child('Message').val();
              var errnoDesc = erroSnapshot.child('Description').val();
              $('.errnoTable').append('<tr class="errnoRow"><td>' + errnoNumber + '</td><td>' + errnoMessage + '</td><td>' + errnoDesc + '</td></tr>');
            });
          });
          document.getElementById('errnoInput').value= '';
        }
      });

      $('.errnoTable').on( 'click', 'tr', function() {
        // console.log($(this)[0].outerText);
        //var stack_bar_bottom = {"dir1":"up", "dir2":"right", "push":"bottom" };
        // var opts = {
        //   text: 'Row copied to clipboard.',
        //   addclass: 'stack-bar-bottom',
        //   cornerclass: '',
          //width: '70%',
          //stack: stack_bar_bottom
        //});
        //new PNotify(opts);

      });
});
