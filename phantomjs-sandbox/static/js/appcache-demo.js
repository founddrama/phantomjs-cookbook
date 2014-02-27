(function(d) {
  var clock = document.getElementById('clock');

  setInterval(function() {
    clock.innerHTML = moment().format('MMMM Do YYYY [at] h:mm:ss a');
  }, 1000);
}(document));