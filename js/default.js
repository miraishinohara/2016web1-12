function outPutFizzBuzz(){  

    //ダイアログ合計出力回数(1からカウントするので30回出力される）
    const FIZZBUZZ_MAX_COUNT = 31;
    //ダイアログ出力回数が3の倍数の際に出力されるテキスト
    const OUTPUT_FIZZ ='Fizz';
    //ダイアログ出力回数が5の倍数の際に出力されるテキスト
    const OUTPUT_BUZZ ='Buzz';

    for (i = 1; i < FIZZBUZZ_MAX_COUNT; i++){

        //ダイアログ出力回数が3と5の倍数の場合はFizzBuzzと出力する
        if(i%3== 0 && i%5== 0){
            alert(OUTPUT_FIZZ + OUTPUT_BUZZ)

        }else if(i%3== 0){
            alert(OUTPUT_FIZZ);

        }else if(i%5== 0){
            alert(OUTPUT_BUZZ);

        }else{
            //現在の出力回数表示
            alert(i);

        }//if

    }//for

}
