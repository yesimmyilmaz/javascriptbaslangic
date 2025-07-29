let urun1={
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6.219

}
let urun2={
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 7.219

}
let urun3={
    isim: "ACER Gamer",
    kategori: "Teknoloji",
    fiyat: 9.219

}

let urunler= [urun1,urun2,urun3];
let filtreliUrunler=[];


let kullaniciUrunIsmi= prompt("Bir ürün ismi giriniz");
filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun);  
        }
    });
}


function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("-------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("-------------------------");

    });
}
