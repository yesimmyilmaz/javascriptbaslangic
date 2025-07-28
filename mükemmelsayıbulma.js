//  Mükemmel Sayı Uygulaması
//  6=  1,2,3,6 altının bölenlerini topladığımızda 12 eder ve altının iki katı on ikidir. 12=6*2


isPerfectNumber(6);

function isPerfectNumber(number){
    let toplam= 0;
    for(let i=2 ; i<=number/2 ; i++){
        if(number%i==0){
            toplam+=i;

        }
    }
    toplam+=1+number;
    if(toplam==number*2){
        console.log("Mükemmel sayıdır.");
    }else{
         console.log("Mükemmel sayı değildir.");
    }
}

