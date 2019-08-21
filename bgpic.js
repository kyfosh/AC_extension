function myFunction() {
var image = [
  "https://lh3.googleusercontent.com/KPy8DsEcr9NoHHATcAx55nApiZ5VsmbPtanpno1tOGeiMJVkXHFqUdBhzStGcy8rL-Q4If0jUzPSqFEvutx4jYbB22GMD5hxS-4H-qXqhtO4t1vc9jquuycmHuV11XOufhoX8U_PMA=w2400",
  "https://lh3.googleusercontent.com/J15SZe87GMw9CXsA20_gkBtfbIALdAJnvUHtBMUFszkHoNP123pl77l6uktE848UU0vchKPcrCwuciSILAQdxLGWVbIAvu5YTH1J8-IPEQlQCzcipWBxFnG7hGwoq-zWGJbC_7P1Qg=w2400",
  "https://lh3.googleusercontent.com/F9RH6v6K8wWON7hrg1JaUGOcWlQAGWRKBpUb5OrZa-fyd4xURmAz9Pg5-bzTzhHVR2GOyxLnJhlrwVi-YwTc0NYeyxzug_cZY1GX9FvcAOgNMV0xms_pp_GhP0DMnp7mVlzY4hD2Qw=w2400",
  "https://lh3.googleusercontent.com/vXwCt5b3s8lyjB6_fvPymG5Xc0ntGJoy0RA4gzNxwX08GT6lPt57PXzQsCBy1rVrZP12__nsp2VyW4Nxq3_3w3DpBhTXasjGcpoE68Obs8q7liZ_Wpmp-Bc12c1YB4zPVcYAK64rGQ=w2400",
  "https://lh3.googleusercontent.com/OqSDAgw9S0PpUADIHjRFk2wWrbJR_t6t9cZ4hiL9jnrfr5o0pVrHkVazsxh1UliruA7xK2ROUdC8Ru8wJNyLZatWonB5Zflc1bFpB9nSBFYvhUCTbitBAzhAuQTdcp7scRNEFXiYZw=w2400"
];
  document.html.style.backgroundColor = "#000";
  var ran = Math.random();
  var num = Math.round(3*ran);

  document.html.style.backgroundImage = "url('"+ image[num] + "')";
  document.html.style.backgroundSize = "auto auto";
  t = setTimeout(function(){myFunction()}, 3600000)
}

x = myFunction();
