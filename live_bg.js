function myFunction() {
var image = [
  "https://lh3.googleusercontent.com/I6Rcp2oJxpSZLiPpSUJMPSqhlzn1fEFBXSJVPStXCgj7VKQ0FRM66kVlyvB5-DRId4SMc1GiW3coHneu4eCm70-Z-antU26sLb4UEa1qrVveqyWwVfOQtqix-0zxjaayhlT6xHhqyw=w2400",
  "https://lh3.googleusercontent.com/RU2o1nRB97VI19SESRyvPVRO-6N12sJFjiEz_s9HVPJfq6UCbsUYz5mTs1ilrMWsRlV0J1qhUTBs4YdesxkvZKOg4s10GnftWAHAkpK0Lre9pmP9WXBOwmlktUbD4SevpffG8dj27w=w2400",
  "https://lh3.googleusercontent.com/cL7-xJkqWgrMG82Pt2et1W5_KQV6Dn7JZPnP2keSBfAcYsygJIJy7CFK-QFxjX1mmyAhshVyZDxC5EDEx2OdrKIPUQn5cqUIwFfoNBbU5rURIA3hf43BbjKdYx3Px0hZKVA0PTojMA=w2400",
  "https://lh3.googleusercontent.com/tunhasj6YeyTaUJCEk9Wam_XcZ3MzZpm0mNU3vrK3ClWPlayXEzZt-WwlRGg7r2xsuKE_o94TmyjRDSAlGDN8iDztd1PgfZf6mJ4IHwnPk0BKKmSfuAIGZYO5tKDKmiIQzsUEXbCqQ=w2400",
  "https://lh3.googleusercontent.com/jVM9MjJ3RXgeMFwMjXwD42AoI0o_FYqh0diySxhdW8nqXs6jYauY5C8qe1qJAh81v7SpkLbjO_I-dmca5R1-FlEzkAeJnB8dMYfhe46j0BakuhmfcVPzZZOezIxOo1k60gUQMj9qCg=w2400",
  "https://lh3.googleusercontent.com/no5AOzhmn_TfdwNCqcBm0qyzgkOgfkHvRVtqrPy1eSwoQhVqwJDbygvFloniarVyN9UQj5_nLkT5DgVfPcEy6XaH1FK16WC4TPC-fIaIl2VZiOuBV6EVEstavVbSZX-7gGJV33_wlQ=w2400",
  "https://lh3.googleusercontent.com/64pDxiqTGrMudzZIJNMiWgfQSoN_jEXoQI2hH4AKX4XLDGiksghVbQeYptmGgl38rUEL8YfO_aSGlbhl601zQv4cMNJbP_NZVmmz6xcSvQT4aIu61hYWTtV9-Ssj3A-0ewrzmowmBQ=w2400"
];
  
  
 var color = ["000", "#b3f4f4", "#000", "#405aa8"];
  var ran = Math.random();
  var num = Math.round(7*ran);

   
  document.body.style.backgroundColor = color[num];
  document.body.style.backgroundImage = "url('"+ image[num] + "')";
  document.body.style.backgroundSize = "cover cover";
  t = setTimeout(function(){myFunction()}, 3600000)
}

x = myFunction();
