// ASAL SAYI BULMA UYGULAMASI
/** 
  15= 2,3,4,5,6,7.5 gibi sayıyı yarıya bölen sayılara kadar deniyoruz
 */

//   let a= Math.floor(7.9);
//   console.log(a); bu şekilde sayının küsüratlı kısmını attık tam kısmını yazdırdık


let sayi= Number(prompt("Lütfen bir sayı giriniz:"));
let sonuc=true;
for(let i=2 ; i<=Math.floor(sayi/2); i++){
    if(sayi%2==0){
        // Asal değildir.
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi+"asaldır.");
}else{
    alert(sayi+ "asal değildir.");
}
    
    