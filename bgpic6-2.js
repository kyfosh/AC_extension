function myFunction() {
var image = [
  "https://lh3.googleusercontent.com/KPy8DsEcr9NoHHATcAx55nApiZ5VsmbPtanpno1tOGeiMJVkXHFqUdBhzStGcy8rL-Q4If0jUzPSqFEvutx4jYbB22GMD5hxS-4H-qXqhtO4t1vc9jquuycmHuV11XOufhoX8U_PMA=w2400",
  "https://lh3.googleusercontent.com/vQ_wCrn_nItvrTP_QfYuyqoRjrJ-0H28hin3hW52T_1oJ0rwag8l-zQYM82E332HSsYt6kPjg0GwX29lGMF__G5vknR_tTAKL-VuTj3prM-B0v9a980lSBcsAUhZnoFmJFTqP_AMcQ=w2400",
  "https://lh3.googleusercontent.com/PjDJGZfLNQH-JqpVwUJMbVAmbp3nqTcD8nJWXzh0q6KLOiYQPULYZUNoYacXOnsQoQSkgx01JjgEO6IMXjV_vAvMo4CPzURWFi_YsHROo8zl09PKJWBloiEOE4yzKdcsFyzUK8hU3w=w2400",
  "https://lh3.googleusercontent.com/cQsC6-8RA6tuD_iz11JPltyuCOB1-x6YU_mgmPk5FhdniRZF8GafJrXJm_ZkOgWQOYWA1TryypcdHqE1iv_aoY-HbRjpEUnEjIZciJVqh_YZdJwSE6Mr_h7492THbuX-uCOs9TL7sw=w2400",
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
