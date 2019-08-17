function myFunction() {
var image = [
  "https://lh3.googleusercontent.com/KPy8DsEcr9NoHHATcAx55nApiZ5VsmbPtanpno1tOGeiMJVkXHFqUdBhzStGcy8rL-Q4If0jUzPSqFEvutx4jYbB22GMD5hxS-4H-qXqhtO4t1vc9jquuycmHuV11XOufhoX8U_PMA=w2400",
  "https://lh3.googleusercontent.com/unNKr2_P1HEbgC1-8um731javG3xtlS5WVk-RZrydJVuchzJykG4lRx8vZUOgPv6IV1IUuvDXLJHMo0ZF0ljkTtS3a4-9j_c_AHlAIUNR_gNN87VNcB_dwnqu4ONWOWTSK1NRsbLuw=w2400",
  "https://lh3.googleusercontent.com/PjDJGZfLNQH-JqpVwUJMbVAmbp3nqTcD8nJWXzh0q6KLOiYQPULYZUNoYacXOnsQoQSkgx01JjgEO6IMXjV_vAvMo4CPzURWFi_YsHROo8zl09PKJWBloiEOE4yzKdcsFyzUK8hU3w=w2400",
  "https://lh3.googleusercontent.com/J15SZe87GMw9CXsA20_gkBtfbIALdAJnvUHtBMUFszkHoNP123pl77l6uktE848UU0vchKPcrCwuciSILAQdxLGWVbIAvu5YTH1J8-IPEQlQCzcipWBxFnG7hGwoq-zWGJbC_7P1Qg=w2400",
  "https://lh3.googleusercontent.com/vXwCt5b3s8lyjB6_fvPymG5Xc0ntGJoy0RA4gzNxwX08GT6lPt57PXzQsCBy1rVrZP12__nsp2VyW4Nxq3_3w3DpBhTXasjGcpoE68Obs8q7liZ_Wpmp-Bc12c1YB4zPVcYAK64rGQ=w2400",
  "https://lh3.googleusercontent.com/OqSDAgw9S0PpUADIHjRFk2wWrbJR_t6t9cZ4hiL9jnrfr5o0pVrHkVazsxh1UliruA7xK2ROUdC8Ru8wJNyLZatWonB5Zflc1bFpB9nSBFYvhUCTbitBAzhAuQTdcp7scRNEFXiYZw=w2400"
];
  document.body.style.backgroundColor = "#000";
  var ran = Math.random();
  var num = Math.round(3*ran);

  document.body.style.backgroundImage = "url('"+ image[num] + "')";
  document.body.style.backgroundSize = "auto auto";
  t = setTimeout(function(){myFunction()}, 3600000)
}

x = myFunction();
