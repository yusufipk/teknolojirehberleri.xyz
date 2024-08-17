# Gizlilik ve Güvenlik Rehberi

**Soru: Neden gizlilik?**

**Cevap: Kapitalism'in ele geçirdiği teknoloji çağında maalesef herkes sizden birşeyler koparmak istiyor. Büyük şirketlerden tut Hacker gruplarına. Gizlilik ve güvenlik önemlidir!**

# 

# 1- İşletim sistemi

### Gizlilik ve güvenlik için işletim sistemini iyi seçmek gerekir. Bİlgisayarınızı veya laptopunuzu satın aldığınızda varsayılan olan gelen işletim sistemleri çoğu zaman verilerinizi toplamakla beraber güvenliğinizide düşürmektedir.

## Tercih edilebilecek mobil işletim sistemleri:

Calyx os (AOSP)

GrapheneOS (AOSP)

LineageOS (AOSP)

AOSP: Android açık kaynak projesi (Android open source project)

## Tercih edilebilecek basit  masaüstü işletim sistemleri:

Fedora Workstation (GNU/LINUX)

Ubuntu (GNU/LINUX)

## Tercih edilebilecek gelişmiş masaüstü işletim sistemleri:

Alpine Linux (LINUX)

Arch Linux (GNU/LINUX)

Debian (GNU/LINUX)

Nix OS (GNU/LINUX)

 Qubes os (GNU/LINUX)

## Tor ağı kullanan GNU/LINUX dağıtımları:

Tails OS 

 Whonix

###### Kaynak:[Operating Systems | PrivacyTools](https://privacytools.io/operating-systems/)

## 

# 2- Sağlayıcılar

## Servis sağlayıcıları internetin büyük bir bölümünü oluştururlar. Ve onları dikkatlice seçmek gerekir.

### 1/2 Arama Motorları

### Önerilen arama motoru:

 [Searx](searx.me) - Tamamen açık kaynak kodlu, gizliliğe önem veren, meta arama motoru. Sonuçlarını hangi arama motorlarından alacağını kendiniz seçebilirsiniz. Açık kaynak kodlu olduğu için birçok sunucuda host edilir.   

### Kullanılabilicek diğer arama motorları:

[Duckduckgo](https:duckduckgo.com) - Eklentisi ve birkaç yazlımı daha açık kaynak kodludur. Ancak kendisi kapalı kaynak kodludur. Gizliliğe önem verir. Sonuçları Yandex'den alır. Sunucuları Amerikadadır.

Startpage](https://startpage.com/)- Kapalı kaynak kodlu arama motoru. Sonuçlarını Google'dan alır. Sunucuları Avrupadadır.

### 2/2 Email

[Protonmail](https://protonmail.com) - Hızlı, şifrelenmiş ve ücretsizdir. 

[Tuttanota](https://tutanota.com/) - Ücretsiz şifrelenmiş bir mail sağlayıcısıdır.

### 3/2 Dns

## Dns, internette girdiğiniz websitelerinin ip adreslerini söyleyen bir kitap gibidir.

[1.1.1.1](https://1.1.1.1) - DÜnyadaki en hızlı dns sağlayıcısıdır. Gizliliğinizi arttırmakla beraber hızınızıda arttırır.

[Adguard Dns](https://adguard.com/en/adguard-dns/overview.html) - Reklamları engelleyebilen, kıbrısta bulunan dns sağlaycısı.

### 4/2 VPN

## Not: VPN'ler sizi anonim yapmaz, sadece ip adresinizi değiştirip internet servis sağlayıcısının girdiğiniz şifrelenmemiş siteleri görmesini engeller. Ancak bu siteleri vpn sağlayıcısıda görebilir! [VPN Firmalarının Tuzakları - Yusuf İpek](https://youtu.be/dd3CopniBW4)

(Varsayılan dns sunucularını kullanıyorsanız bu siteler engelli olabilir.)

[Protonvpn](https://protonvpn.com/) -Ücretsiz

[Mullvad VPN ](https://mullvad.net/en/) - Ücretli

[I VPN](https://www.ivpn.net/) -  Ücretli

### 5/2 Mesajlaşma

Mesajlaşırken eğer bağlantı şifreli değil ise aradaki herhangi biri veya sağlayıcı sizin mesjlarınızı okuyabilir. Hatta bazen şifreli olsa bile okunabilir.

Önerilen mesajlaşma programları:

[Matrix için Element](https://element.io/) Matrix üzerinden köprü ile  Whatsapp ve Discordda konuşmak mümkün.

[Signal](https://signal.org/en/)- Şifrelenmiş açık kaynak kodlu harika bir mesajlaşma programı.

# 3-Tarayıcılar

(Varsayılan dns sunucularını kullanıyorsanız bu siteler engelli olabilir.)

[Tor Browser](https://torproject.org)- Girdiğiniz siteleri 3 anonim tor sunucusundan geçirip size ulaştırır. Tamamen açık kaynak kodludur.

[Brave](https://brave.com)- Chromium tabanlı hızlı bir tarayıcı. Reklam engelleyici ve birçok içerik beraberinde gelir. Gizli sekmede Tor bağlantısı seçeneği vardır.Tamamen açık kaynak kodludur.

[Firefox](https://www.mozilla.org/en-US/firefox/new/) - Açık kaynak kodlu kişiselleştirilebilir tarayıcı. Brave'e göre yavaş olabilir. 

## 

# 2FA

## 2 faktor doğrulama olarakta bilinir. Sadece sizin bildiğiniz birşey (parola)'in yanına sizde olan birşey (Birkaç haneli bir kod veya bir cihaz gibi)'in birleşmiş halidir.

FIDO - En güvenlisi denilebilir, sizin elinizde olan fiziksel bir usb cihazı bilgisayarınıza veya telefonuza bağlayıp bir tuşa basıp onaylarsınız. Unutmayın ki fiziksel erişim durumunda savunmasız kalır.

SMS- Telefon numaranıza gönderilen bir kod. O servise numaranızla güvenmeniz gerekir. Ve telefonunuza sms kodları çalan bir program yükleme ihtimalinizde olabilir.

OTP - Bir şifre veya [biometric](https://en.wikipedia.org/wiki/Biometrics) ile kendinizi doğrulayıp her 20 saniyede bir üretilen rastgele koddur. Ancak bu kurtarma kodlarını kaybetme durumunuzda geri getirmenin yolu yoktur. Önerilen OTP uygulamaları:

IOS: [Tofu](https://www.tofuauth.com/)

Android: [FreeOTP](https://freeotp.github.io/) ,[Aegis](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis&hl=en&gl=US)

      

# Kameralarınızı hem fiziksel hemde işletim sisteminiz üzerinden kapatın!

Siz istemeseniz bile bazen bazı zararlı yazılımlar mikrofon veya kameranıza erişim sağlayabilir. Bundan kurtulmak için ya kameranızı tamamen sökün, Veya Kameranızı bir kağıt parçasıyla kapatın. Ve Linux üzerinden sürücülerini devre dışı bırakın. 

Sürücüleri devre dışı bırakmak için:

 Favori text editörünüz (nano,vim,gedit) ile bu dosyayı düzenleyin:

```
nano /etc/modprobe.d/blacklist.conf
```

İçerisine ise şunu yazın:

**

```
blacklist uvcvideo
```

Ve bilgisayarınızı yeniden başlatın. Bu sizin kameranızı tamamen devre dışı bırakıcaktır. Bu yazıyı silmek kameranızı geri etkinleştiricektir.

Telefon içinse bazı aparatlar satın alabilirsiniz.

[Bunu gibi](https://www.gittigidiyor.com/bilgisayar-tablet/laptop-cep-telefonu-notebook-pc-bilgisayar-tv-kamera-webcam-cover-sticker-kapatici-koruyucu_pdp_575674088)

# Şifre yöneticisi

Şifre yöneticileri sizin için rastgele uzun ve karmaşık şifreler üretip saklarlar. Böylece heryerde aynı şifreyi kullanma derdinden de, Şifreyi unutma derdinden de kurtulmuş olursunuz.

Önerilen şifre yöneticileri:

[Bitwarden](https://bitwarden.com/) - Bulut tabanlı şifre yöneticisi. Tamamen açık kaynaklıdır. İçine 2fa ekleyebilirsiniz.

[Keepas](https://keepass.info/) - Yerel tabanlı şifre yöneticisi. Tamamen açık kaynaklı.





# Tarayıcı eklentileri

[Noscript](https://noscript.net/)- Javascripti engeller. Sayfalar daha hızlı açılır ve izleyiciler manuel olarak engellenebilir.

[Ublock Origin](https://en.wikipedia.org/wiki/UBlock_Origin)- Reklam engelleyici ayarlarını doğru yaparsanız görüntü ve fontlarıda engelleyebilir.

[Terms of service; Didn't read](https://tosdr.org/)- Websitelerinin kullanıcı sözleşmesi ve gizlilik politikasını önünüze seren bir eklenti. 



 







# Destek

Buraya kadar okuduysan, teşekkürler! Bunlar benim bildiklerim. İletişim için bana Schwarze#1234 ile Discorddan ulaşabilirsin.

Bana destek olmak istiyorsan eğer, ben burada sadece bildiklerimi anlattım. Bunca açık kaynak kodlu proje varken sadece bunun hakkında bir makale yazan birine destek olmak saçma olur.

[Tor Projesine Destek](https://donate.torproject.org/)

[Keepas Destek]([Donate - KeePass](https://keepass.info/donate.html))

[Graphene OS Destek](https://grapheneos.org/donate)

[Firefox Destek]([https://donate.mozilla.org/en-US/?presets=50,30,20,10&amount=30&utm_source=mozilla.org&utm_medium=referral&utm_content=company¤cy=usd&utm_campaign=footer](https://donate.mozilla.org/en-US/?presets=50,30,20,10&amount=30&utm_source=mozilla.org&utm_medium=referral&utm_content=company&currency=usd&utm_campaign=footer)

[Matrix Destek](https://matrix.org/)

Diğerleri için projelerin  sayfalarını ziyaret edebilirsiniz.




