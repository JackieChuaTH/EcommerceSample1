
/*

Assignment: CA2
Purpose: Validation for Forms

*/
/*

--------------------------------------------------------------------------------------------------------

Validations for Forms

--------------------------------------------------------------------------------------------------------

*/


//Contact Forms HAS Email, Name, Subject, Description
class contactForm {
    constructor(email,fullName,subject,description,cardholdername,cardholdernum,cardexp,cvv,paymode,address,postalcode){
        /*Personal Info*/
        this.email = email;
        this.fullName = fullName;
        this.subject = subject;
        this.description = description;
        /*Payment Info */
        this.cardholdername = cardholdername;
        this.cardholdernum = cardholdernum;
        this.cardexp = cardexp;
        this.cvv = cvv;
        this.paymode = paymode;
        this.address = address;
        this.postalcode = postalcode;
    }


}

//Validate Form's value
function validateContactForm() {
    var enquiry = new contactForm(document.forms['contactForm']['email'],document.forms['contactForm']['fullname'],
                    document.forms['contactForm']['subject'],document.forms['contactForm']['description']);
    var listofInputs = [enquiry.email, enquiry.fullName, enquiry.description];

    var isValidInputs = true;


    for(var i = 0; i < listofInputs.length; i++){

        switch (i) {
            case 0: if (listofInputs[i].value.indexOf("@", 0) < 0 || listofInputs[i].value.indexOf(".", 0) < 0) {
                        listofInputs[i].value = "";
                        isValidInputs = false;
                    }
                break;
        
            case 1: if(validateNoWhitespace(listofInputs[i].value) == false) {
                        listofInputs[i].value = "";
                        isValidInputs = false;
                    }
                break;

            case 2: if(validateNoWhitespace(listofInputs[i].value) == false) {
                        listofInputs[i].value = "";
                        isValidInputs = false;
                    }
                break;
        }
    }

    //Validation stops from submission of form if there are error validation fields.
    if(isValidInputs !== false) {
        
        return false;
    }
    
}


//Validate Checkout Form's value
function validateCheckoutForm() {
    var checkout = new contactForm(document.forms['checkoutForm']['email'],
                    document.forms['checkoutForm']['billfullname'],
                    "","",document.forms['checkoutForm']['cardholdername'],
                    document.forms['checkoutForm']['cardnumber'],
                    document.forms['checkoutForm']['cardexpiry'],
                    document.forms['checkoutForm']['cvv'],
                    document.forms['checkoutForm']['paymentmode'],
                    document.forms['checkoutForm']['address'],
                    document.forms['checkoutForm']['postalcode']);

    var cardexpYear = parseInt(checkout.cardexp.value.substring(0,4));
    var cardexpMonth = parseInt(checkout.cardexp.value.substring(5,7));

    var listofInputs = [checkout.cardholdername, checkout.cardholdernum, checkout.cardexp, 
                        checkout.cvv, checkout.fullName, checkout.email, checkout.address,
                        checkout.postalcode];

    var isCheckedShipAdd = document.getElementById("shippingbilladdress").checked;

    //If all inputs are valid, it will result as "true".
    var isValidInputs1 = true;
    var isValidInputs2 = true;


    for(var i = 0; i < listofInputs.length; i++){


        switch (i) {
            //Payment Section (FOR case 0 to 3)
            case 0: if(validateNoWhitespace(listofInputs[i].value) == false) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                    }
                break;
        
            case 1: if(validateCard(listofInputs[i].value) == false) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                    }
                break;

            case 2: if (validateNoWhitespace(listofInputs[i].value) == false) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                        
                    } else if(cardexpYear < getCurrentYear()) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                
                    } else if(cardexpMonth < getCurrentMonth()) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                    }
                break;

            case 3: if(validateCVV(listofInputs[i].value) == false) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                    }
                break;

            //Billing Section (FOR case 4 to 7)
            case 4: if(validateNoWhitespace(listofInputs[i].value) == false) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                    }
                break;
            
            case 5: if (listofInputs[i].value.indexOf("@", 0) < 0 || listofInputs[i].value.indexOf(".", 0) < 0) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                    }
                break;
            
            case 6: if(validateNoWhitespace(listofInputs[i].value) == false) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                    }
                break;

            case 7: if(validateNoWhitespace(listofInputs[i].value) == false) {
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                
                    } else if(document.forms["checkoutForm"]["country"].value == "SG" && validatePostalCode(postalcode.value) == false){
                        listofInputs[i].value = "";
                        isValidInputs1 = false;
                    }
                break;    
        }
    } 

    //This validation is only for Users who have different Shipping Address
    if (isCheckedShipAdd == false) {
        
        var listofInputs2 = [document.forms["checkoutForm"]["shippingaddress"], 
                            document.forms["checkoutForm"]["shippingcountry"], 
                            document.forms["checkoutForm"]["shippingpostalcode"],
                            document.getElementById("agreeterm")];

        for (var i = 0; i < listofInputs2.length; i++) {
            switch (i) {
                case 0: if (validateNoWhitespace(listofInputs2[i].value) == false) {
                            listofInputs2[i].value = "";
                            isValidInputs2 = false;
                    
                        }
                    break;

                case 1: if (validateNoWhitespace(listofInputs2[i].value) == false) {
                            listofInputs2[i].value = "";
                            isValidInputs2 = false;
                    
                        }
                    break;

                case 2: if (validateNoWhitespace(listofInputs2[i].value) == false) {
                            listofInputs2[i].value = "";
                            isValidInputs2 = false;
                    
                        }
                    break;

                case 3: if(listofInputs2[i].checked == false){
                    isValidInputs2 = false;
            
                }
                    break;                
            }
        }
    }

    //focus on the 2nd section of error field if 1st section of the input field (billing & payment) have no errors
    //focus on the 1st section of error field if 1st section has error in spite of 2nd section have errors or not.
    if(isValidInputs2 == false && isValidInputs1 == true) {
        document.getElementById("shippingsection").scrollIntoView();

    } else if(isValidInputs1 == false) {
        document.getElementById("paymentsection").scrollIntoView();
    }


    //Validation stops from submission of form if there are error validation fields.
    if(isValidInputs1 !== isValidInputs2) {
        return false;
    }
}

/*
--------------------------------------------------------------------------------------------------------

Addtional Functions to help out validation of some complicated inputs
E.g. Regex expressions, Date extraction

--------------------------------------------------------------------------------------------------------
*/

function validateCVV(cvv) {
    var regexCVV = /^\d\d\d$/;
    return regexCVV.test(cvv);
}

function validateCard(card) {
    var regexCard = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
    return regexCard.test(card);
}

function validatePostalCode(postalcode) {
    var regexPostal = /^\d\d\d\d\d\d$/;
    return regexPostal.test(postalcode);
}

function getCurrentYear() {
    var currentYear = new Date().getFullYear();
    return currentYear;
}

function getCurrentMonth() {
    var currentMonth = new Date().getMonth()+1;
    return currentMonth;
}

function validateNoWhitespace(input) {
    var regexGeneric = /^[^\s]/;
    return regexGeneric.test(input);
}

/*
--------------------------------------------------------------------------------------------------------

Autofill

--------------------------------------------------------------------------------------------------------
*/

function autoFillForm() {
    var checkout = new contactForm(document.forms['checkoutForm']['email'],document.forms['checkoutForm']['billfullname'],
                    "","",document.forms['checkoutForm']['cardholdername'],document.forms['checkoutForm']['cardnumber'],document.forms['checkoutForm']['cardexpiry'],
                    document.forms['checkoutForm']['cvv'],document.forms['checkoutForm']['paymentmode'],document.forms['checkoutForm']['address'],document.forms['checkoutForm']['postalcode']);

    var sameShippingAddbox = document.forms['checkoutForm']['shippingbilladdress'];

    var billaddress = checkout.address;
    var billcountry = document.forms['checkoutForm']['country'];
    var billpostalcode = checkout.postalcode;
    var shipaddress = document.forms["checkoutForm"]["shippingaddress"];
    var shipcountry = document.forms["checkoutForm"]["shippingcountry"];
    var shippostalcode = document.forms["checkoutForm"]["shippingpostalcode"];

    //If shipping address is the same, autofill it
    if (sameShippingAddbox.checked == true) {
        shipaddress.value = billaddress.value;
        shipcountry.value = billcountry.value;
        shippostalcode.value = billpostalcode.value;
        shipaddress.readOnly = true;
        shipcountry.readOnly = true;
        shippostalcode.readOnly = true;

    } else {
        shipaddress.value = "";
        shipcountry.value = "";
        shippingpostalcode.value = "";
        shipaddress.readOnly = false;
        shipcountry.readOnly = false;
        shippostalcode.readOnly = false;
    }
}

