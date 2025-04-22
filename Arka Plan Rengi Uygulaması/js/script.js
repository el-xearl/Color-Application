// etkileşime girilecek ögeleri js'te tanıtma
// const btn = document.getElementById(".btn");
// query=sorgu

const btn= document.querySelector(".btn");
const color= document.querySelector(".color");
const body = document.querySelector("body")

// diziler(array)
// const users= ["ali","nida","hüseyin"];/string veriler/
// const sayilar=[3,8,5,21,12];/number veriler/

// diziler nesnelerin özel bir türüdür

// hex kodlarını içeren veriyi tanımlama

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// 1-hex index aralagına(0,15) göre rasgele sayı üreten fonksiyon
    function getRandomNumber(){
        // const randomNumber= Math.floor(Math.random()*hex.length);
        // return randomNumber;
      return  Math.floor(Math.random()*hex.length);
     // rastgele sayı üretme
    // const randomNumber = Math.random();
    // console.log(randomNumber);
    

    // 0-1 arası üretilen rastgele sayıya katsayı ile çarparak istedigimiz aralıga getir
    // const randomNumberForHex=randomNumber*hex.length;
    // console.log(randomNumberForHex);

    // üretilen ondalık sayının küsüratını atma
    // const randomInteger=Math.floor(randomNumberForHex)
    // console.log(randomInteger);
}
// 2-elde edilen ransgele sayı degerine göre hex renk kod bloğunu oluşturan fonksiyon
function getRandomHexColor(){
    let hexColor="#";
    for (let index = 0; index < 6; index++) {
       hexColor += hex[getRandomNumber()];  
    }
    return hexColor;
}

// 3-elde edilen hex renk kod bloğuyla ile ilgili yerin rengini degiştirme

function changeColor() {
    const hexColor = getRandomHexColor();
    body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    
}

// butonun tıklama olayına changeColor() adlı fonksiyonu baglama
btn.addEventListener("click",changeColor);
