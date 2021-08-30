# Websitenize Tema Ekleme

![websitenize-tema-ekleme](https://i.ibb.co/KWG1jDK/websitenize-tema-ekleme.webp)

Karanlık temalara bayılıyorum. Kullandığım her websitesinde ve uygulamada karanlık tema tercih ediyorum. Peki tema seçeneklerini sitemize nasıl koyarız? Birden fazla temayı sitemizde nasıl yapabiliriz bu rehberde bunu anlatacağım.

1. [Ne Yapacağız?](#ne-yapacağız)
2. [Düğmeyi oluşturma](#düğmeyi-oluşturma)
3. [Renk düzenlerini oluşturma](#renk-düzenlerini-oluşturma)
4. [İşlevsellik](#i̇şlevselliği-ekliyoruz)
5. [Kullanıcının tercihine göre temayı kaydetme](#kullanıcının-tercihine-göre-temayı-kaydetme)
6. [Kapanış](#kapanış)
7. [Katkıda bulunanlar](#katkıda-bulunanlar)

## Ne Yapacağız?
Örnek olarak projelerimden birisini kullanacağım. Geçtiğimiz haftalarda 3 tane teması olan bir hesap makinesi yaptım.

[kod](https://github.com/yusufipk/another-calculator) | [canlı demo](https://yusufipk.github.io/another-calculator/)

![websitenize-tema-ekleme-01](https://i.ibb.co/jRXBw4H/websitenize-tema-ekleme-01.webp)

Gördüğünüz gibi düğmemiz var ve bu düğmeyle 3 tema arasında seçim yapabiliyoruz.

## Düğmeyi Oluşturma
Düğmeyi oluşturmak için checkbox, radio veya button elementlerini kullanabiliriz. Burada ben radio elementini kullanacağım.

```
<div class="radio">
  <input type="radio" id="theme1" name="theme1" />
  <input type="radio" id="theme2" name="theme2" />
  <input type="radio" id="theme3" name="theme3" />
</div>
```

## Renk Düzenlerini Oluşturma
Renk düzenlerini CSS değişkenlerini kullanarak oluşturacağız. SASS değişkenlerinin derlenmesi gerektiğinden SASS değişkenleri kullanamazsınız! Bu uygulamada ben üç tane tema yapıyorum dolayısıyla üç tane renk düzeni oluşturacağım. İlki;
```
 :root {
  --color-main: #3b4664;
  --color-white: #ffffff;
  --bg-main: #181f32;
  --bg-buttons: rgba(37, 45, 68, 0.6);
  --num: #eae3db;
  --number-color: #484b5a;
  --number-border: #b3a599;
  --button-secondary: #647299;
  --border-secondary: #404d70;
  --button-tertiary: #d13f30;
  --border-tertiary: #922417;
  --radio-color: #cf3f34;
}
```
Bu varsayılan temam olacak dolayısıyla herhangi bir attribute eklememe gerek yok. İkinci temam;
```
body[data-theme="light"] {
  --color-main: #e6e6e6;
  --color-white: #3a3a32;
  --bg-main: #eeeeee;
  --bg-buttons: #d3cdcd;
  --num: #e5e4e0;
  --number-color: #3a3a32;
  --number-border: #a69c93;
  --button-secondary: #388187;
  --border-secondary: #1a5d66;
  --button-tertiary: #c85401;
  --border-tertiary: #873a02;
}
```

Bu aydınlık temamız olacak. data-theme yazarak bunu belirtmemiz gerekli. Data özel bir attribute. Data hakkında daha fazla bilgi almak istiyorsanız [buraya bakın.](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)

Son temamızsa;
```
body[data-theme="purple"] {
  --color-main: #17062a;
  --color-white: #ffe43b;
  --bg-main: #1e0836;
  --bg-buttons: #1e0836;
  --num: #331b4d;
  --number-color: #ffe537;
  --number-border: #85219b;
  --button-secondary: #56077c;
  --border-secondary: #bf15f4;
  --button-tertiary: #00decf;
  --border-tertiary: #6dfaf1;
  --radio-color: #00e8d8;
}
```
Bu kurulumla birlikte değişkenlerimizi kodumuzda kullanıp istediğimiz temayı dinamik olarak sayfamızda değiştirebileceğiz.

## İşlevselliği Ekliyoruz
İlk olarak radio elementlerimizi Javascript ile seçmemiz gerekli.
```
const theme1 = document.getElementById("theme1");
const theme2 = document.getElementById("theme2");
const theme3 = document.getElementById("theme3");
```
Şimdi ``changeTheme()`` fonksiyonunu oluşturacağız. Bu fonksiyon body attribute değerini değiştirmemizi sağlayacak ve böylece istediğimiz temayı sitede kullanabileceğiz.

```
function changeTheme() {
  if (theme1.checked) {
    document.body.setAttribute("data-theme", "");
  } else if (theme2.checked) {
    document.body.setAttribute("data-theme", "light");
  } else if (theme3.checked) {
    document.body.setAttribute("data-theme", "purple");
  } else return;

```
Şimdi de eventListener eklememiz lazım, yapmasını istediğimiz iki şey var;

1. Radio elementine tıkladığımızda diğer bütün radio elementlerini ``uncheck`` haline getirmemiz lazım.
2. Her radio elementine tıkladığımızda changeTheme() fonksiyonunu çalıştırmamız lazım.
```
 theme1.addEventListener("click", () => {
  theme2.checked = false;
  theme3.checked = false;
  changeTheme();
});
theme2.addEventListener("click", () => {
  theme1.checked = false;
  theme3.checked = false;
  changeTheme();
});
theme3.addEventListener("click", () => {
  theme1.checked =false;
  theme2.checked = false;
  changeTheme();
});
```

Bununla birlikte bütün temalarımız işlevesel bir şekilde çalışıyor! Kullanıcı hangi temaya tıklarsa site ona göre değişecek.

## Kullanıcının Tercihine Göre Temayı Kaydetme
İki sorunumuz var:

1. Kodumuzda varsayılan tema yok.
2. Kullanıcının tercih ettiği temayı kaydetmiyoruz. Sayfa her yenilendiğinde tema eski haline dönüyor.

Bu sorunu localStorage kullanarak aşacağız.

İlk olarak varsayılan tema oluştralım.

```
// Varsayılan temam "theme1" olacak
if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "theme1");
}
```

Switch kullanarak her sayfayı yenilediğimizde seçilen temayı tekrar seçeceğiz.

```
switch (localStorage.getItem("theme")) {
  case "theme1":
    theme1.checked = true;
    break;
  case "theme2":
    theme2.checked = true;
    break;
  case "theme3":
    theme3.checked = true;
    break;
  default:
    break;
}
```
Daha sonrasında localStorage.setItem() kullanarak eventListener'larının kullanıcının seçtiği temayı localStorage'a kaydetmesini sağlayacağız.

```
theme1.addEventListener("click", () => {
  theme2.checked = false;
  theme3.checked = false;
  // New Code
  localStorage.setItem("theme", "theme1");
  changeTheme();
});
theme2.addEventListener("click", () => {
  theme1.checked = false;
  theme3.checked = false;
  // New Code
  localStorage.setItem("theme", "theme2");
  changeTheme();
});
theme3.addEventListener("click", () => {
  theme1.checked = false;
  theme2.checked = false;
  // New Code
  localStorage.setItem("theme", "theme3");
  changeTheme();
});
```
Son olarak kodun sonunda ``changeTheme()`` fonksiyonunu çağırmamız gerekli ki her sayfayı yenilediğimizde rengimiz değişebilsin.

Bu kadar! Websitemizde kullanıcının seçebileceği 3 tane temamız var ve localStrage kullanarak temayı kaydediyoruz. Sitenize bu yöntemle istediğiniz kadar tema ekleyebilirsiniz.

## Kapanış
Kullanıcının tema tercihini de göz önünde bulundurmak istiyorsanız CSS'te olan [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query'sini kullanarak varsayılan temayı karanlık/aydınlık olarak ayarlayabilirsiniz. Kolay bir işlem olduğundan bu rehberi daha fazla uzatmak istemiyorum.

Benim ilk kodlama rehberimdi ve herhangi bir geri bildiriminiz varsa lütfen bana ulaşın! Okuduğunuz için teşekkürler ve umarım bu rehber size faydalı olmuştur.

## Katkıda Bulunanlar
Yusuf İpek [website](https://yusufipek.me), [youtube](https://www.youtube.com/channel/UCVBX2n_5egE9XuJL8NUS0Xg)