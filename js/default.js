function outPutFizzBuzz(){  
    const FIZZBUZZ_MAX_COUNT = 101;
    const OUTPUT_FIZZ ='Fizz';
    const OUTPUT_BUZZ ='Buzz';

    for (i = 1; i < FIZZBUZZ_MAX_COUNT; i++){
        if(i%3== 0 && i%5== 0){
            alert(OUTPUT_FIZZ + OUTPUT_BUZZ)

        }else if(i%3== 0){
            alert(OUTPUT_FIZZ);

        }else if(i%5== 0){
            alert(OUTPUT_BUZZ);

        }else{
            alert(i);

        }

    }
}
