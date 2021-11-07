# Librewolf'ta Sahibinden Resimlerini Yükleme

## Sorun
Bir süredir sarı siteye (ülkemizdeki en bilindik 2.el ilan sitesi) her girişimde ilan fotoğraflarının gözükmediğini fark ettim ve bunu Yusuf'a ilettim. Sağolsun kendisi sorunun ne olduğunu buldu ve ben de aynı sorunu sizin de yaşıyor olabileceğinizi düşünerek bu konu hakkında bilginiz olması için sizinle paylaşmak istedim.

## Çözümü
Sorunun çözümüne gelirsek about:config 'e girip arama kısmına security.ssl.require_safe_negotiation yazıp gelen kaydı false olarak seçerseniz sorun çözülüyor. Bu ayar açık olduğunda, herhangi bir saldırı açığı olan SSL/TLS protokollerini Librewolf reddediyor. [1](#kaynaklar) Buradan anlayacağımız üzere Sahibinden, resimleri yüklerken eski bir SSL/TLS teknolojisi kullanıyor ve Librewolf bunu reddediyor. Bu ayarı kapattığınızda başınıza bir şey gelmesi düşük ihtimal ancak website yöneticileri SSL konfigürasyonlarını olabildiğince iyi ayarlamalı. 

[Mozilla SSL Üreticisi](https://ssl-config.mozilla.org/)

## Not 1
Birçoğunuz seri olması açısından Chrome ya da Chromium tabanlı tarayıcılar kullanıyorsunuz. Ancak güvenlik anlamında Chrome yerlerde sürünüyor. Sadece 2021 yılında Chromium tabanlı tarayıcılarda 7 defa [sıfır gün](https://tr.wikipedia.org/wiki/S%C4%B1f%C4%B1r-g%C3%BCn) açığı bulundu.  [2](#kaynaklar) Bunun dışında neden Firefox tabanlı tarayıcıları kullanmanız gerektiğini anlamanız adına Yusuf'un [videosunu](https://www.youtube.com/watch?v=ToP6lg03LqM "videosunu") izlemenizi öneririm. (ki kendi adıma Firefox ve Firefox tabanlılar arasından özellikle Librewolf kullanmanızı öneririm). Bu arada mevzubahis videonun üzerinden epeyce bir versiyon geçti ve videodaki "eksi yanları" kısmındaki pip ve reader view konularında geliştirmeleri yaptılar bilginiz olsun.

### Kaynaklar
[1-Mozilla Wiki](https://wiki.mozilla.org/Security:Renegotiation#security.ssl.require_safe_negotiation)

[2-Chromium tabanlı tarayıcılarda 2021 yılında 7 adet sıfır gün açığı.](https://www.forbes.com/sites/gordonkelly/2021/06/19/google-chrome-warning-zero-day-security-exploit-free-upgrade-chrome-users/)

### İleri Okuma
[Sıfır Gün Açıkları](https://tr.wikipedia.org/wiki/S%C4%B1f%C4%B1r-g%C3%BCn)

### Katkıda Bulunanlar
Yazar: **Discord:** C41#3446

Düzenleyen: Yusuf İpek [website](https://yusufipek.me)
