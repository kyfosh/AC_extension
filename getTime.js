  function startTime() {
      var today = new Date();
      var dayw = moment().format('dddd');
      var day = moment().format("MMM Do YYYY");
      var hour = moment().format('LT');
      var count = moment("20200320", "YYYYMMDD").fromNow();
      var start = moment();
      var end = moment([2020, 03, 20]);
      document.getElementById('time').innerHTML =  hour;
      document.getElementById('date').innerHTML =  dayw + " " + day;
      document.getElementById('countdown').innerHTML = end.to(start, true) + " until Animal Crossing New Horizons";
      t = setTimeout(function() {
        startTime()
      }, 1000);
    }



    x = startTime();
