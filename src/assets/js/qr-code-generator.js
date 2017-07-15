$(document).ready(function(){
  const btcAdress = `1pbarBA4zP1bbCRydBUxweQxVfsaAHqDo`;
  const ltcAdress = `LSDNJopkWAgEuhrD1ucKiFD6ybhoEeTRWH`;
  // const ethAdress = ``;

  function getRates() {
    return $.ajax({
      // BTC, ETH, LTC
      url: `https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=BTC,ETH,LTC`,
      type: 'GET',
      dataType: 'json',
    });
  }

  function generateUrl(adress, amount, rate) {
    const valueInCrypto = amount * rate;
    return `https://chart.googleapis.com/chart?cht=qr&chl=bitcoin%3A${adress}%3Famount%3D${valueInCrypto}&choe=UTF-8&chs=230x230`;
  }

  function setNewQrs(amount) {
    getRates().then(function (rate) {
      const btcUrl = generateUrl(btcAdress, amount, rate.BTC);
      const ltcUrl = generateUrl(ltcAdress, amount, rate.LTC);
      $('.btc').attr('src', btcUrl);
      $('.ltc').attr('src', ltcUrl);

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
      $('.donate-amount').on('input', function() {
        const amountInEur = $(this).val();
        delay(function(){
          setNewQrs(amountInEur);
        }, 500 );
      })
    } else {
      const amountInEur = $(this).val();
      setNewQrs(amountInEur);
    }
  });
});
