document.addEventListener('DOMContentLoaded', function() {
    var paymentMethodSelect = document.getElementById('payment-method');
    var mastercardSection = document.getElementById('mastercard-section');
    var visaSection = document.getElementById('visa-section');
    var paysafecardSection = document.getElementById('paysafecard-section'); 

    mastercardSection.style.display = 'none';
    visaSection.style.display = 'none';
    paysafecardSection.style.display = 'none';

    paymentMethodSelect.addEventListener('change', function() {
        var selectedOption = paymentMethodSelect.value;

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
function showConfirmationPage() {
    document.getElementById('card-select').classList.add('hidden');
    document.getElementById('confirmation-page').classList.remove('hidden');
  }
  
  document.getElementById('mastercardPayButton').addEventListener('click', showConfirmationPage);
  document.getElementById('visaPayButton').addEventListener('click', showConfirmationPage);
  document.getElementById('paysafecardPayButton').addEventListener('click', showConfirmationPage);
  