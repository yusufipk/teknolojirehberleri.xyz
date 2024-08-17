# Gizlilik ve Güvenlik Rehberi

Kapitalizmin ele geçirdiği teknoloji çağında maalesef şirketler sizin verilerinizi satıyor/kullanıyor. Sizin verileriniz onlara çok büyük güç veriyor. Öyle bir güç ki seçimleri bile değiştirebiliyorlar! Ancak bir çok kişinin sandığı aksine bu böyle olmak zorunda değil. 

Özgür yazılım kullanırsanız, yazılımın gerçek sahibi siz oluyorsunuz. Neyi verip vermediğinizi de gerçek sahibi olarak siz seçiyorsunuz. Bu özgür yazılımlar her zaman olmasa da çoğu zaman kapalı kaynak/sahipli yazılım alternatiflerinden çok çok daha iyi. 

Bu makalade sizlere internette daha gizli ve güvenli olmanızı sağlayacak özgür yazılımları önereceğiz. Gizlilik ve güvenlik önemlidir!

## İçerik Tablosu
1. [İşletim Sistemi](#1-i̇şletim-sistemi)
	- [Mobil](#tercih-edilebilecek-mobil-i̇şletim-sistemleri)
	- [Kullanıcı Dostu Masaüstü Sistemleri](#tercih-edilebilecek-kullanıcı-dostu-masaüstü-i̇şletim-sistemleri)
	- [Gelişmiş Masaüstü Sistemleri](#tercih-edilebilecek-gelişmiş-masaüstü-i̇şletim-sistemleri)
	- [Tor Ağı Kullanan Sistemler](#tor-ağı-kullanan-gnulinux-dağıtımları)
2. [Servis Sağlayıcıları](#2-servis-sağlayıcıları)
	- [Arama Motorları](#a-arama-motorları)
	- [E-posta](#b-e-posta)
	- [DNS](#c-dns)
	- [VPN](#d-vpn)
	- [Mesajlaşma](#e-mesajlaşma)
3. [Tarayıcılar](#3-tarayıcılar)
4. [Çift Faktörlü Doğrulama](#4-2fa)
5. [Şifre Yöneticileri](#5-şifre-yöneticileri)
6. [Tarayıcı Eklentileri](#6-tarayıcı-eklentileri)
7. [Kameranızı Yazılımsal Olarak Kapatın](#7-kameranızı-yazılımsal-olarak-kapatın)
8. [Destek](#destek)


---

# 1. İşletim Sistemi

Gizlilik ve güvenlik için işletim sistemini iyi seçmek gerekir. Bilgisayarınızı veya dizüstü bilgisayarınızı satın aldığınızda varsayılan olan gelen işletim sistemleri çoğu zaman verilerinizi toplamakla beraber güvenliğinizi de düşürmektedir.

[Windows'un içerisindeki gizli NSA arka kapısı.](https://www.heise.de/tp/features/How-NSA-access-was-built-into-Windows-3444341.html)

[55 binden fazla bilgisayar NSA arka kapısını artık silebiliyor!](https://arstechnica.com/information-technology/2017/04/nsa-backdoor-detected-on-55000-windows-boxes-can-now-be-remotely-removed/)

Bu haberler sadece birer örnek. Arka kapılar dışında özgür olmayan işletim sistemleri sizin verilerinizi zaten sürekli topluyor ve kullanıyor.

### Tercih Edilebilecek Mobil İşletim Sistemleri

1. [Calyx OS](https://calyxos.org/) (AOSP)
2. [GrapheneOS](https://grapheneos.org/) (AOSP)
3. [LineageOS](https://lineageos.org/) (AOSP)

**AOSP: Android açık kaynak projesi (Android open source project)**

### Tercih Edilebilecek Kullanıcı Dostu Masaüstü İşletim Sistemleri
1. [Fedora Workstation](https://getfedora.org) (GNU/LINUX)
2. [POP OS](https://pop.system76.com/) (GNU/LINUX)
3. [Ubuntu](https://ubuntu.com/download/desktop) (GNU/LINUX)
4. [Manjaro](https://manjaro.org/) (GNU/LINUX)

### Tercih Edilebilecek Gelişmiş Masaüstü İşletim Sistemleri

1. [Alpine Linux](https://alpinelinux.org/) (LINUX)
2. [Arch Linux](https://archlinux.org/) (GNU/LINUX)
3. [Debian](https://www.debian.org/) (GNU/LINUX)
4. [Nix OS](https://nixos.org/) (GNU/LINUX)
5. [Qubes OS](https://www.qubes-os.org/) (GNU/LINUX)

### Tor Ağı Kullanan GNU/LINUX Dağıtımları

1. [Tails OS](https://tails.boum.org/) (GNU/LINUX)
2. [Whonix](https://www.whonix.org/) (GNU/LINUX)

**Kaynak: [Operating Systems | PrivacyTools](https://privacytools.io/operating-systems/)**


# 2. Servis Sağlayıcıları

Servis sağlayıcıları internetin büyük bir bölümünü oluşturmakla beraber en sık kullandığımız servislerdir. Dolayısıyla kullandığınız servisleri dikkatlice seçmeniz gerekir.

### A. Arama Motorları
---

#### Önerilen Arama Motoru:

1. [Searx](https://searx.space/) - Tamamen açık kaynak kodlu, gizliliğe önem veren, meta arama motoru. Sonuçlarını hangi arama motorlarından alacağını kendiniz seçebilirsiniz. Açık kaynak kodlu olduğu için birçok sunucuda host edilir. İsterseniz kendi bilgisayarınıza/sunucunuza kurup aile ve arkadaşlarınızla paylaşabilirsiniz! 

#### Kullanılabilecek Diğer Arama Motorları:

1. [Duckduckgo](https:duckduckgo.com) - Eklentisi ve birkaç yazlımı daha açık kaynak kodludur. Ancak kendisi kapalı kaynak kodludur. Gizliliğe önem verir. Sonuçları Yandex'den alır. Sunucuları Amerikadadır.
2. [Startpage](https://startpage.com/) - Kapalı kaynak kodlu arama motoru. Sonuçlarını Google'dan alır. Sunucuları Avrupadadır.

**NOT: Duckduckgo ve Startpage gizlilik politikalarında hiçbir şekilde kullanıcıyı tanımlayabilecek bir veri almadıklarını belirtmişlerdir. İkisi de uzun süredir var olan servislerdir.**

### B. E-posta
---

1. [Protonmail](https://protonmail.com) - Ücretsiz, uçtan uca şifreleme kullanan bir mail servisi. 
2. [Tutanota](https://tutanota.com/) - Ücretsiz uçtan uca şifreleme kullanan bir mail servisi.

**[Uçtan uca şifreleme](https://tr.wikipedia.org/wiki/U%C3%A7tan_uca_%C5%9Fifreleme) verinizin başka bir bilgisayarda (sunucuda) olmasına rağmen fiziksel erişimi olan kişilerce bile verinize erişilememesini sağlayan şifreleme sistemi.**

### C. DNS
---

DNS, internette girdiğiniz websitelerinin IP adreslerini söyleyen bir kitapdır. Buradan da anlayacağınız üzere DNS sunucunuz sizin hangi sitelere erişim sağlamak istediğinizi bilir.

1. [1.1.1.1](https://1.1.1.1) - Dünyadaki en hızlı dns sağlayıcısıdır. Gizliliğinizi arttırmakla beraber hızınızıda arttırır.
2. [Adguard DNS](https://adguard.com/en/adguard-dns/overview.html) - Reklamları engelleyebilen, Kıbrsıta bulunan DNS servisi.
3. [QUAD9](https://quad9.net/) Sunucuları İsviçre'de olan ve zararlı yazılımları engelleyen bir DNS servisi.

**Kullandığınız DNS servisini mutlaka [DNS-Over-HTTPS](https://youtu.be/kxZ9EO1Cbog) ile kullanmanızı tavsiye ederiz.**

### D. VPN
---

**Not: VPN'ler sizi anonim yapmaz, sadece IP adresinizi değiştirip internet servis sağlayıcısının girdiğiniz siteleri görmesini engeller. Ancak bu siteleri VPN sağlayıcısı görebilir! [VPN Firmalarının Tuzakları - Yusuf İpek](https://youtu.be/dd3CopniBW4)**

(Varsayılan DNS sunucularını kullanıyorsanız bu siteler engelli olabilir.)

1. [ProtonVPN](https://protonvpn.com/) - Ücretsiz sürümü var.
2. [Mullvad VPN ](https://mullvad.net/en/) - Ücretli
3. [I VPN](https://www.ivpn.net/) -  Ücretli

**Sürekli güncellenen liste: [Techlore VPN Listesi](https://techlore.tech/vpnchart.html)**

**Ücretsiz kullandığınız VPN servislerine dikkat edin! Çoğu size ücretsiz servis vermenin yanında verilerinizi satıyor.**

### E. Mesajlaşma
---

Mesajlaşırken eğer bağlantı şifreli değil ise aradaki herhangi biri veya servis sağlayıcınız sizin mesjlarınızı okuyabilir. Şifreleme yöntemi uçtan uca değilse servisi sağlayan firma mesajlarınıza erişebilir.

Önerilen mesajlaşma programları:

1. [Matrix için Element](https://element.io/) - Matrix, uçtan uca şifreleme sağlayan [dağıtık](https://en.wikipedia.org/wiki/Federation_(information_technology)) protokol. Aynı zamanda Matrix üzerinden farklı servislerle (Discord, IRC) konuşmak mümkün.
2. [Signal](https://signal.org/en/) - Uçtan uca şifrelenmiş özgür bir yazılım ve harika bir mesajlaşma programı.

# 3. Tarayıcılar

(Varsayılan DNS sunucularını kullanıyorsanız bu siteler engelli olabilir.)

1. [Tor Browser](https://torproject.org) - Girdiğiniz siteleri 3 anonim tor sunucusundan geçirip size ulaştırır.
2. [Brave](https://brave.com) - Chromium tabanlı hızlı bir tarayıcı. Reklam engelleyici ve birçok içerik beraberinde gelir. Gizli sekmede Tor bağlantısı seçeneği vardır.
3. [Firefox](https://www.mozilla.org/en-US/firefox/new/) - Chromium tabanlı tek tarayıcı alternatifidir. Webi tamamen Chromium tabanlı tarayıcılara bırakmak istemiyorsanız kullanabilirsiniz. Ayrıca Chromium tabanlı tarayıcılara göre çok daha fazla kişiselleştirilebilir.

# 4. 2FA

Çift faktor doğrulama olarak da bilinir. Birinin parolanızı bulması halinde hesabınıza giriş yapabilmek için bir çeşit onaylama ister. En son güvenlik önlemidir.

1. **FIDO** - En güvenlisi denilebilir, sizin elinizde olan fiziksel bir usb cihazını bilgisayarınıza veya telefonuza bağlayıp bir tuşa basıp onaylarsınız.
2. **TOTP** - Zaman bazlı size rastgele bir kod üretir. TOTP giriş şifrenizi veya kurtarma kodlarınızı kaybetmeniz durumunda hesaplarınızı kaybedersiniz. Dolayısıyla düzenli yedekleme almanızı tavsiye ederiz. Önerilen OTP uygulamaları:
	1. [Tofu](https://www.tofuauth.com/) (IOS)
	2. [FreeOTP](https://freeotp.github.io/) (Android)
	3. [Aegis](https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis&hl=en&gl=US) (Android)
3. **SMS** - En güvensiz 2FA versiyonudur! Telefon numaranıza SMS olarak kod gönderilir. Kayıt olduğunuz servise telefon numaranızı vermeniz gerekir. SMS mesajları şifreli olmadığı için farklı yöntemlerle kodunuza teorik olarak erişilebilir!

[Telefon servis sağlayıcısı Google doğrulama SMS'ine reklam koydu!](https://9to5google.com/2021/06/29/google-verification-code-sms-ad/)


**Kullanabileceğiniz en kötü program Authydir! Sahipli bir yazılım olmasının yanı sıra 2FA kodlarınızın yedeklerini almanızı engeller ve sizi platformlarına kilitlerler!**



# 5. Şifre Yöneticileri

Şifre yöneticileri sizin için rastgele uzun ve karmaşık şifreler üretip saklarlar. Böylece heryerde aynı şifreyi kullanma derdinden de, şifreyi unutma derdinden de kurtulmuş olursunuz.

**Şifrenizin bir veritabanından sızması durumunda diğer hesaplarınız da güvenli kalmış olur!**

Önerilen şifre yöneticileri:

1. [Bitwarden](https://bitwarden.com/) - Bulut tabanlı şifre yöneticisi. İçine 2FA ekleyebilirsiniz.
2. [Keepass](https://keepass.info/) - Yerel tabanlı şifre yöneticisi.

**Kullanabileceğiniz en kötü şifre yöneticilerinden biri Lastpassdir. Sahipli bir yazılımdır ve sizi birçok yönden kısıtlar!**

# 6. Tarayıcı eklentileri

1. [Noscript](https://noscript.net/) - Javascripti engeller. Sayfalar daha hızlı açılır ve izleyiciler manuel olarak engellenebilir.
2. [Ublock Origin](https://en.wikipedia.org/wiki/UBlock_Origin) - En iyi reklam ve izleyici engelleyici. Bir çok sahipli adblock yazılımı uBlock'un kaynak kodu üstünden kurulmuştur!
3. [Terms of service; Didn't read](https://tosdr.org/) - Websitelerinin kullanıcı sözleşmesi ve gizlilik politikasını anlamanızı sağlayan bir eklenti. 
4. [Cookie Auto-Delete](https://github.com/Cookie-AutoDelete/Cookie-AutoDelete) - Seçtiğiniz websiteler dışındaki çerezleri otomatik olarak silen eklenti.


# 7. Kameranızı Yazılımsal Olarak Kapatın

Siz istemeseniz bile bazen bazı zararlı yazılımlar mikrofon veya kameranıza erişim sağlayabilir. Bundan kurtulmak için ya kameranızı tamamen sökün, veya kameranızı bir kağıt parçasıyla kapatın. Bunları yapmak istemiyorsanız GNU/Linux'ta sürücüleri devre dışı bırakabilirsiniz. 

Sürücüleri devre dışı bırakmak için terminali açın ve `sudo modprobe -r uvcvideo` yazın

Kameranızı kullanmanız gerektiğinde `sudo modprobe uvcvideo` yazabilirsiniz.

Bunları daha hızlı kullanmak için alias oluşturabilirsiniz!

Telefon içinse [bazı aparatlar](https://www.gittigidiyor.com/dizst-bilgisayar-laptop-aksesuar/laptop-etiketi-sticker?k=Laptop%20Cep%20Telefonu%20Notebook%20PC%20Bilgisayar%20TV%20Kamera%20Webcam%20Cover%20Sticker%20Kapat%C4%B1c%C4%B1%20Koruyucu&qm=1) satın alabilirsiniz.



# Destek

Buraya kadar okuduysanız, teşekkürler! Bunlar benim bildiklerim. 

**Yazar: Schwarze#1234 (Discord)**

**Düzenleyen: Yusuf İpek [Website](https://yusufipek.me)**

Bana destek olmak istiyorsan, ben burada sadece bildiklerimi anlattım. Bunca açık kaynak kodlu proje varken sadece bunun hakkında bir makale yazan birine destek olmak saçma olur.

1. [Tor Projesine Destek](https://donate.torproject.org/)
2. [Keepas Destek](https://keepass.info/donate.html)
3. [Graphene OS Destek](https://grapheneos.org/donate)
4. [Firefox Destek](https://donate.mozilla.org/en-US/?presets=50,30,20,10&amount=30&utm_source=mozilla.org&utm_medium=referral&utm_content=company&currency=usd&utm_campaign=footer)
5. [Matrix Destek](https://matrix.org/)

Diğerleri için projelerin  sayfalarını ziyaret edebilirsiniz.

etiketler: gizlilik güvenlik özgür-yazılım linux
