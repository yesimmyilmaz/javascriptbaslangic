//----------Ders Ortalaması Bulma----------

//vize1 %30, vize2 %30 final %40

let vize1= Number(prompt("Vize 1 Notunuzu Giriniz:"));
let vize2 = Number(prompt("Vize 2 Notunuzu Giriniz:"));

let final= Number(prompt("Final Notunuzu Giriniz:"));

let ortalama= (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(ortalama>=60){
    alert("Dersten geçtiniz,tebrikler.");
    console.log("Dersten geçtiniz,tebrikler.");
}else{
    alert("Kaldınız.");
    console.log("Kaldınız.");
}
