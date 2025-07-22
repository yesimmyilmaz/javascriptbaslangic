//  Çoklu if kullanmak
/* adını ve tckn
   Ad: boş geçilmez
   TCKN: 11 karakterden oluşsun
*/
let ad= prompt("İsminizi giriniz:");
let tckn= prompt("TCKN giriniz:");

kontrolEt(ad,tckn);


function kontrolEt(ad, tckn){
    
    if( ad != ""){
        if( tckn.length==11){ 
            console.log("İsim ve TC problemsiz girildi.");
        }else{
            console.log("Lütfen tcnizi 11 karakter olarak giriniz.");
        }
    }else{
        console.log("Lütfen isim alanını boş bırakmayınız.");
    }

}