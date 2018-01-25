'use strict'
$(document).ready(function(){
  const btcAdress = `1pbarBA4zP1bbCRydBUxweQxVfsaAHqDo`;
  const ltcAdress = `LSDNJopkWAgEuhrD1ucKiFD6ybhoEeTRWH`;
  const ethAdress = `0x363A4300D6800E1a45673255928d00c8b2DC7845`;

  function getRates() {
    return $.ajax({
      // BTC, ETH, LTC
      url: `https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=BTC,ETH,LTC`,
      type: 'GET',
      dataType: 'json',
    });
  }

  function generateUrl(cryptoCr, adress, amount, rate) {
    const valueInCrypto = amount * rate;
    return `https://chart.googleapis.com/chart?cht=qr&chl=${cryptoCr}%3A${adress}%3Famount%3D${valueInCrypto}&choe=UTF-8&chs=230x230`;
  }

  function generateBySquareUrl(amount) {
    switch (amount) {
      case '0':
        return `./src/assets/img/pbsqr-0e.png`;
      case '5':
        return `./src/assets/img/pbsqr-5e.png`;
      case '10':
        return `./src/assets/img/pbsqr-10e.png`;
      case '20':
        return `./src/assets/img/pbsqr-20e.png`;
      default:
        return `https://ilfiron.com/payquicker/code.php?t=0&s=256&r=0&v=2&invoiceid=&amount=${amount}&iban=SK1583300000002600121198&bic=FIOZSKBAXXX&vs=102017&cs=&ss=&paynote=`
    }
  }

  function setNewQrs(amount) {
    getRates().then(function (rate) {
      const btcUrl = generateUrl('bitcoin', btcAdress, amount, rate.BTC);
      const ltcUrl = generateUrl('litecoin', ltcAdress, amount, rate.LTC);
      const ethUrl = generateUrl('ethereum', ethAdress, amount, rate.ETH);
      const bySquareUrl = generateBySquareUrl(amount);
      $('.btc').attr('src', btcUrl);
      $('.ltc').attr('src', ltcUrl);
      $('.eth').attr('src', ethUrl);
      $('.paybysquare').attr('src', bySquareUrl);

    })
  }

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  // handler for clicking on buttons
  $('.donation-things__buttons__btn').click(function() {
    // handle selection
    $('.active').removeClass('active');
    $(this).addClass('active');

    // handle generation of qr codes
    if ($(this)[0].classList[1] === 'other') {
      const inputValue = $('.donate-amount').val();

      if (inputValue) {
        setNewQrs(inputValue);
      }
    } else {
      const amountInEur = this.dataset.amount;
      setNewQrs(amountInEur);
    }
  });
  $('.donate-amount').on('input', function() {
    this.dataset.amount = $(this).val();
    const amountInEur = this.dataset.amount;
    delay(function(){
      setNewQrs(amountInEur);
    }, 500);
  })

  // make divs accessible
  window.addEventListener('keydown', function(e) {
    // if focused element is a crypto box  and space/return are pressed
    if(document.activeElement.classList.contains('donation-things__buttons__btn') && [32, 13].indexOf(e.keyCode) > -1) {
      document.activeElement.click();
      e.preventDefault();
    }
  })
});
