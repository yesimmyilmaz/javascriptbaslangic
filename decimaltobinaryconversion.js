//  Decimal to Binary Conversion

convertDecimalToBinary(10);

function convertDecimalToBinary(number){
    let binary="";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            // artık bölme yok döngüden çıkacağız.
            binary+=1;
            console.log(typeof binary);
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuç:" + result);
    

}

function reverse(binary){
    let reverseBinary="";
    for(let i=binary.length-1 ; i>=0 ; i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
}