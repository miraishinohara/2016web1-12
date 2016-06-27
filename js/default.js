for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0)  // iが3の倍数かつ5の倍数
    document.write("Fizz,Buzz<br>");
  else if (i % 3 == 0)  // iが3の倍数(かつ5の倍数でない)
    document.write("Fizz<br>");
  else if (i % 5 == 0)  // iが5の倍数(かつ3の倍数でない)
    document.write("Buzz<br>");
  else  // iが3の倍数でも5の倍数でもない
    document.write(i + "<br>");
}
