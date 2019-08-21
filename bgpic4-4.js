function myFunction() {
var image = [
  "https://lh3.googleusercontent.com/I6Rcp2oJxpSZLiPpSUJMPSqhlzn1fEFBXSJVPStXCgj7VKQ0FRM66kVlyvB5-DRId4SMc1GiW3coHneu4eCm70-Z-antU26sLb4UEa1qrVveqyWwVfOQtqix-0zxjaayhlT6xHhqyw=w2400",
  "https://lh3.googleusercontent.com/ENU2qidHPdXlGF-P-2EYXefhecB2ol5qQX86BH4Z5y8CMHR3YW84T2YCkzw8H1Vv1be1JvaEbvWMucXijWS0QxArLGB1e5Fc-nSsfFnlM4D54DfcXHkV-vkMTOqLIyHxoVx37bth7Q=w2400",
  "https://lh3.googleusercontent.com/cL7-xJkqWgrMG82Pt2et1W5_KQV6Dn7JZPnP2keSBfAcYsygJIJy7CFK-QFxjX1mmyAhshVyZDxC5EDEx2OdrKIPUQn5cqUIwFfoNBbU5rURIA3hf43BbjKdYx3Px0hZKVA0PTojMA=w2400",
  "https://lh3.googleusercontent.com/xcgSlQMPWAS5jzZr2_vU6IsU7sp5saAS0PRK6ZM3EqrMSoZ8tda-GwKMKbRohlb0uoOvorykDmAVef8URCxQoJ5UbpFcHwqXaA_WGo6iaCrVyVLzyN79SB-tJiQxhbSc4PIh4bCobw=w2400"
];
  document.body.style.backgroundColor = "#000";
  var ran = Math.random();
  var num = Math.round(3*ran);

  document.body.style.backgroundImage = "url('"+ image[num] + "')";
  document.body.style.backgroundSize = "auto auto";
  t = setTimeout(function(){myFunction()}, 3600000)
}

x = myFunction();
