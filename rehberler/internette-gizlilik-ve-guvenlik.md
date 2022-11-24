# Gizlilik ve Güvenlik Rehberi

**Soru: Neden gizlilik?**

**Cevap: Kapitalizmin ele geçirdiği teknoloji çağında maalesef herkes sizden bir şeyler koparmak istiyor. Büyük şirketlerden tutun hacker gruplarına. Gizlilik ve güvenlik önemlidir!**

# 

# 1- İşletim sistemi

### Gizlilik ve güvenlik için işletim sistemini iyi seçmek gerekir. Bİlgisayarınızı veya laptopunuzu satın aldığınızda varsayılan olan gelen işletim sistemleri çoğu zaman verilerinizi toplamakla beraber güvenliğinizi de düşürmektedir.

## Tercih edilebilecek mobil işletim sistemleri:

Calyx OS (AOSP)

GrapheneOS (AOSP)

LineageOS (AOSP)

AOSP: Android Open Source Project (Android Açık Kaynak Projesi)

## Tercih edilebilecek basit  masaüstü işletim sistemleri:

Fedora Workstation (GNU/Linux)

Ubuntu (GNU/Linux)

## Tercih edilebilecek gelişmiş masaüstü işletim sistemleri:

Alpine Linux (GNU/Linux)

Arch Linux (GNU/Linux)

Debian (GNU/Linux)

Nix OS (GNU/Linux)

 Qubes os (GNU/Linux)

## Tor ağı kullanan GNU/Linux dağıtımları:

Tails OS 

Whonix

###### Kaynak:[Operating Systems | PrivacyTools](https://privacytools.io/operating-systems/)

## 

# 2- Sağlayıcılar

## Servis sağlayıcıları internetin büyük bir bölümünü oluştururlar ve onları dikkatlice seçmek gerekir.

### 1/2 Arama Motorları

### Önerilen arama motoru:

 [Searx](searx.me) - Tamamen açık kaynak kodlu, gizliliğe önem veren, meta arama motoru. Sonuçlarını hangi arama motorlarından alacağını kendiniz seçebilirsiniz. Açık kaynak kodlu olduğu için birçok sunucuda host edilir.   

### Kullanılabilecek diğer arama motorları:

[Duckduckgo](https://duckduckgo.com) - Eklentisi ve birkaç yazlımı daha açık kaynak kodludur. Ancak kendisi kapalı kaynak kodludur. Gizliliğe önem verir. Sonuçları Yandex'ten alır. Sunucuları Amerika'dadır.

[Startpage](https://startpage.com/)- Kapalı kaynak kodlu arama motoru. Sonuçlarını Google'dan alır. Sunucuları Avrupa'dadır.

### 2/2 E-Posta

[Protonmail](https://protonmail.com) - Hızlı, şifrelenmiş ve ücretsizdir.

[Tuttanota](https://tutanota.com/) - Ücretsiz, şifrelenmiş bir mail sağlayıcısıdır.

### 3/2 DNS

## DNS, internette girdiğiniz websitelerinin IP adreslerini söyleyen bir kitap gibidir.

[1.1.1.1](https://1.1.1.1) - Dünyadaki en hızlı DNS sağlayıcısıdır. Gizliliğinizi artırmakla beraber hızınızı da artırır.

[AdGuard DNS](https://adguard.com/en/adguard-dns/overview.html) - Reklamları engelleyebilen, Kıbrıs'ta bulunan DNS sağlaycısı.

### 4/2 VPN

## Not: VPN'ler sizi anonim yapmaz, sadece IP adresinizi değiştirip internet servis sağlayıcısının girdiğiniz şifrelenmemiş siteleri görmesini engeller. Ancak bu siteleri VPN sağlayıcısı da görebilir! [VPN Firmalarının Tuzakları - Yusuf İpek](https://youtu.be/dd3CopniBW4)

(Varsayılan DNS sunucularını kullanıyorsanız bu siteler engelli olabilir.)

[Proton VPN](https://protonvpn.com/) - Ücretsiz

[Mullvad VPN](https://mullvad.net/en/) - Ücretli

[IVPN](https://www.ivpn.net/) - Ücretli

### 5/2 Mesajlaşma

Mesajlaşırken eğer bağlantı şifreli değil ise aradaki herhangi biri veya sağlayıcı sizin mesajlarınızı okuyabilir. Hatta bazen şifreli olsa bile okunabilir.

Önerilen mesajlaşma programları:

[Matrix için Element](https://element.io/) Matrix üzerinden köprü ile WhatsApp ve Discord'ta konuşmak mümkün.

[Signal](https://signal.org/en/)- Şifrelenmiş, açık kaynak kodlu harika bir mesajlaşma programı.

# 3- Tarayıcılar

(Varsayılan DNS sunucularını kullanıyorsanız bu siteler engelli olabilir.)

[Tor Browser](https://torproject.org)- Girdiğiniz siteleri 3 anonim Tor sunucusundan geçirip size ulaştırır. Tamamen açık kaynak kodludur.

[Brave](https://brave.com)- Chromium tabanlı hızlı bir tarayıcı. Reklam engelleyici ve birçok içerik beraberinde gelir. Gizli sekmede Tor bağlantısı seçeneği vardır. Tamamen açık kaynak kodludur.

[Firefox](https://www.mozilla.org/en-US/firefox/new/) - Açık kaynak kodlu kişiselleştirilebilir tarayıcı. Brave'e göre yavaş olabilir. 

## 

# 2FA

## 2 aşamalı doğrulama olarak da bilinir. Sadece sizin bildiğiniz bir şeyin (parola) yanına sizde olan bir şeyin (birkaç haneli bir kod veya bir cihaz gibi) birleşmiş halidir.

FIDO - En güvenlisi denilebilir, sizin elinizde olan fiziksel bir USB cihazı bilgisayarınıza veya telefonuza bağlayıp bir tuşa basıp onaylarsınız. Unutmayın ki fiziksel erişim durumunda savunmasız kalır.

SMS - Telefon numaranıza gönderilen bir kod. O servise numaranızla güvenmeniz gerekir. Ve telefonunuza sms kodları çalan bir program yükleme ihtimalinizde olabilir.

OTP - Bir şifre veya [biyometrik](https://en.wikipedia.org/wiki/Biometrics) ile kendinizi doğrulayıp her 20 saniyede bir üretilen rastgele koddur. Ancak bu kurtarma kodlarını kaybetme durumunuzda geri getirmenin yolu yoktur. Önerilen OTP uygulamaları:

IOS: [Tofu](https://www.tofuauth.com/)

Android: [FreeOTP](https://freeotp.github.io/), [Aegis](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis&hl=en&gl=US)

      

# Kameralarınızı hem fiziksel hem de işletim sisteminiz üzerinden kapatın!

Siz istemeseniz bile bazen bazı zararlı yazılımlar mikrofon veya kameranıza erişim sağlayabilir. Bundan kurtulmak için ya kameranızı tamamen sökün ya da kameranızı bir kağıt parçasıyla kapatın. Ve Linux üzerinden sürücülerini devre dışı bırakın. 

Sürücüleri devre dışı bırakmak için:

Favori text editörünüz (nano, vim, gedit) ile bu dosyayı düzenleyin:

```
nano /etc/modprobe.d/blacklist.conf
```

İçerisine ise şunu yazın:

**

```
blacklist uvcvideo
```

Ve bilgisayarınızı yeniden başlatın. Bu sizin kameranızı tamamen devre dışı bırakacaktır. Bu yazıyı silmek kameranızı geri etkinleştirecektir.

Telefon içinse bazı aparatlar satın alabilirsiniz.

[Bunun gibi](https://www.gittigidiyor.com/bilgisayar-tablet/laptop-cep-telefonu-notebook-pc-bilgisayar-tv-kamera-webcam-cover-sticker-kapatici-koruyucu_pdp_575674088)

# Şifre yöneticisi

Şifre yöneticileri sizin için rastgele uzun ve karmaşık şifreler üretip saklarlar. Böylece her yerde aynı şifreyi kullanma derdinden de, şifreyi unutma derdinden de kurtulmuş olursunuz.

Önerilen şifre yöneticileri:

[Bitwarden](https://bitwarden.com/) - Bulut tabanlı şifre yöneticisi. Tamamen açık kaynaklıdır. İçine 2FA ekleyebilirsiniz.

[Keepass](https://keepass.info/) - Yerel tabanlı şifre yöneticisi. Tamamen açık kaynaklı.





# Tarayıcı eklentileri

[Noscript](https://noscript.net/) - Javascripti engeller. Sayfalar daha hızlı açılır ve izleyiciler manuel olarak engellenebilir.

[uBlock Origin](https://en.wikipedia.org/wiki/UBlock_Origin) - Reklam engelleyici ayarlarını doğru yaparsanız görüntü ve fontları da engelleyebilir.

[Terms of service; Didn't read](https://tosdr.org/)- Web sitelerinin kullanıcı sözleşmesi ve gizlilik politikasını önünüze seren bir eklenti.



 







# Destek

Buraya kadar okuduysan, teşekkürler! Bunlar benim bildiklerim. İletişim için bana `Schwarze#1234` ile Discord'tan ulaşabilirsin.

Eğer bana destek olmak istiyorsan, ben burada sadece bildiklerimi anlattım. Bunca açık kaynak kodlu proje varken sadece bunun hakkında bir makale yazan birine destek olmak saçma olur.

[Tor Projesi'ne Destek](https://donate.torproject.org/)

[Keepass Destek]([Donate - KeePass](https://keepass.info/donate.html))

[Graphene OS Destek](https://grapheneos.org/donate)

[Firefox Destek]([https://donate.mozilla.org/en-US/?presets=50,30,20,10&amount=30&utm_source=mozilla.org&utm_medium=referral&utm_content=company¤cy=usd&utm_campaign=footer](https://donate.mozilla.org/en-US/?presets=50,30,20,10&amount=30&utm_source=mozilla.org&utm_medium=referral&utm_content=company&currency=usd&utm_campaign=footer)

[Matrix Destek](https://matrix.org/)

Diğerleri için projelerin sayfalarını ziyaret edebilirsiniz.




