document.addEventListener('DOMContentLoaded', function() {
    var paymentMethodSelect = document.getElementById('payment-method');
    var mastercardSection = document.getElementById('mastercard-section');
    var visaSection = document.getElementById('visa-section');
    var paysafecardSection = document.getElementById('paysafecard-section'); // Corrected variable name

    // Initially hide all sections
    mastercardSection.style.display = 'none';
    visaSection.style.display = 'none';
    paysafecardSection.style.display = 'none';

    // Add event listener to the payment method select element
    paymentMethodSelect.addEventListener('change', function() {
        var selectedOption = paymentMethodSelect.value;

        // Toggle visibility based on selected payment method
        if (selectedOption === 'mastercard') {
            mastercardSection.style.display = 'block';
            visaSection.style.display = 'none';
            paysafecardSection.style.display = 'none';
        } else if (selectedOption === 'visa') {
            mastercardSection.style.display = 'none';
            visaSection.style.display = 'block';
            paysafecardSection.style.display = 'none';
        } else if (selectedOption === 'paysafecard') {
            mastercardSection.style.display = 'none';
            visaSection.style.display = 'none';
            paysafecardSection.style.display = 'block';
        } else {
            mastercardSection.style.display = 'none';
            visaSection.style.display = 'none';
            paysafecardSection.style.display = 'none';
        }
    });
});
