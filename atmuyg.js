/*
1- bakiye görüntüleme
2- para çekme
3- para yatırma
4- çıkış

ATM UYGULAMASI 
*/
let yeniSatir= "\r\n";
let bakiye= 1000;

let metin= "1-Bakiye Görüntüleme" +yeniSatir
+"2-Para Çekme"+yeniSatir
+"3-Para Yatırma"+yeniSatir
+"4-Çıkış"+yeniSatir
+"Lütfen bir değer seçiniz.";

//  alert(metin);

let secim= prompt(metin);
switch(secim){
    case "1":
      alert("Bakiyeniz:" +bakiye);  
      break
    case "2" :
        let cekilecekTutar= Number(prompt("Çekmek istediğiniz tutarı girniz:"));
        if(cekilecekTutar<bakiye){
            // başarılıdır
        }else{
            alert("Bakiyenizden fazla para çekemezsiniz."+yeniSatir
             + "Bakiyeniz:" +bakiye + " " + "Çekilecek tutar:" + cekilecekTutar);
               
        }
        break;
    case "3" :
       let yatirilacakTutar= Number(prompt("Yatırılacak tutarı giriniz:"));
       bakiye= bakiye+yatirilacakTutar ;
       alert("Güncel Bakiyeniz:" + bakiye);
    break;

    case "4" :
        console.log("Sistemden çıkış yapılmıştır...");
        break;
    default:
        console.log("Lütfen 1-4 arasında değer giriniz!");   
        break;
      
}