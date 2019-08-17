function myFunction() {
var image = ["https://lh3.googleusercontent.com/Bp89hnzYkp7VdwG5NzDsviNGx8NtOnWxY0VbsPMsKT5qTXxnQGMjhnpUnrSwug4M2pK369XPlXImysU1KhN1NKjC2nTiuR-GsE1EGlw2WSHBD-TVJYc7RzaDKI7ZyUGd1tDwYWTJAg=w2400",
  "https://lh3.googleusercontent.com/UIWXz1makBMnznW54CAoBKvlJ9te87qYm_IuPnrn_vl9-BGROIptiNEVCHv1iXNidPjRes-I0I-l_Q-42C5ShnhQFEq1WHrEM_FsrD11HhiduFF4KFqFiEdbnvp-7mjgQBh_3dzF6w=w2400",
  "https://lh3.googleusercontent.com/BefPAAUvPvxx7-BzhORs8EHUhQz3Tx21rC8D-ODX_R6lUN3-ip4NwUNFozc_41ySSzj0ZB35MlsZLb7mTQ-Y_rp7OXvVXQSXzirY4BkPcORnv0HwLpRT1iasVqGbQ9IzkQreBp4Geg=w2400",
  "https://lh3.googleusercontent.com/J15SZe87GMw9CXsA20_gkBtfbIALdAJnvUHtBMUFszkHoNP123pl77l6uktE848UU0vchKPcrCwuciSILAQdxLGWVbIAvu5YTH1J8-IPEQlQCzcipWBxFnG7hGwoq-zWGJbC_7P1Qg=w2400",
  "https://lh3.googleusercontent.com/F9RH6v6K8wWON7hrg1JaUGOcWlQAGWRKBpUb5OrZa-fyd4xURmAz9Pg5-bzTzhHVR2GOyxLnJhlrwVi-YwTc0NYeyxzug_cZY1GX9FvcAOgNMV0xms_pp_GhP0DMnp7mVlzY4hD2Qw=w2400",
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
