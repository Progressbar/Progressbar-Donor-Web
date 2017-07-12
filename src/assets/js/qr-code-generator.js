$(document).ready(function(){

  function getRate(currency) {
    return $.ajax({
      url: `https://min-api.cryptocompare.com/data/price?fsym=EUR&tsyms=${currency}`,
      type: 'GET',
      dataType: 'json',
      success: function(data){
        return data[currency];
      }
    }).done()
  }

  function convert(rate, amount) {
    return rate * amount;
  }

  let amount;
  const btcAdress = `1pbarBA4zP1bbCRydBUxweQxVfsaAHqDo`;

  const ltcAdress = `LSDNJopkWAgEuhrD1ucKiFD6ybhoEeTRWH`;

  $('.donation-things__buttons__btn').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');

    amountInEur = $(this).val();
    console.log('rate', getRate('BTC'))
    const url = `https://chart.googleapis.com/chart?cht=qr&chl=bitcoin%3A${btcAdress}%3Famount%3D${amount}&choe=UTF-8&chs=230x230`
    console.log(url)
  });

  // $('.btc').attr('src')
});
