//  Armstrong Sayısı Bulma Uygulaması
//  153 = 1*1*1 + 5*5*5 + 3*3*3 
//  sayının rakamlarının küpünün toplamı sayıyı veriyorsa ,bu sayıya Armstrong sayısı denir.

let sayi = prompt("Sayıyı giriniz:");
let toplam= 0;
for(let i=0 ; i<sayi.length; i++){
    let rakam = sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}
if(Number(sayi)==toplam){
    alert(" Armstrong sayısıdır.");

}else{
    alert(" Armstrong sayısı değildir.");
}
