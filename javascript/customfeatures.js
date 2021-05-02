/*

Assignment: CA2
Purpose: Any other custom features will be here

*/


/*
--------------------------------------------------------------------------------------------------------
HTML Content control
--------------------------------------------------------------------------------------------------------
*/

//Appears and Floats backtotop navigation button on scroll
function navButtonBack() {
    var buttonBackToTop = document.getElementById("navbackarrow");
    var offsetTarget = document.getElementById("latestdesktop");
    var fixed = offsetTarget.offsetTop;
    
    if (window.pageYOffset >= fixed) {

        buttonBackToTop.classList.remove("d-none");
        buttonBackToTop.classList.add("position-fixed");

    } else {
        buttonBackToTop.classList.add("d-none");
        buttonBackToTop.classList.remove("position-fixed");
    }

}

//Custom Forms using Bootstrap 4 styles


function customForm() {
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  }