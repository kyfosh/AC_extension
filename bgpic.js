function myFunction() {
var image = ["https://lh3.googleusercontent.com/XkpWbF-CIq0RkOIa7Is0_gGNQx5jObUiEShM0sLOplqFleraCpaQoNUs4sCG7v89u_a5nAfogT_lIFhzRWJJmoQ4XMCTiCeyIKnNGV-sCz69S57uLexgqHbASoleEaqHueWro0PE8Q=w2400",
      "https://lh3.googleusercontent.com/nJqtkbcBJgZCv_k3l1xs5KaJXNB8sAPZHnPHJ5OfQTe389fcMBYs1Gm1Qk-1N5rMesJAhEjRDCuAc7Ry7Ii0mODgmAsk9z77j07LpVOx18F7L-uk3k5VvSw7d-LI9U-Xnz7WeREJHg=w2400",
      "https://lh3.googleusercontent.com/PLuS7LsAj51iAOnOK5sXGyCuY8xDIBAFFW-IoTEuvEPVbCE1sh94stcZqLFuZy-H96jVH6jmf26U--4c019j0hGclA_aBbm2zZj9UGluUIR7q3ODWeYr0RRbTV-dEj6G7dAOMpQ_Zg=w2400",
      "https://lh3.googleusercontent.com/KPy8DsEcr9NoHHATcAx55nApiZ5VsmbPtanpno1tOGeiMJVkXHFqUdBhzStGcy8rL-Q4If0jUzPSqFEvutx4jYbB22GMD5hxS-4H-qXqhtO4t1vc9jquuycmHuV11XOufhoX8U_PMA=w2400"
      ];
  document.body.style.backgroundColor = "#000";
  var ran = Math.random();
  var num = Math.round(3*ran);

  document.body.style.backgroundImage = "url('"+ image[num] + "')";
  document.body.style.backgroundSize = "auto auto";
  t = setTimeout(function(){myFunction()}, 3600000)
}

x = myFunction();
