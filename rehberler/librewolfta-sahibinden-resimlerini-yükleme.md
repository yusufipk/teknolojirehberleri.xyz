# Librewolf'un Sarı site'yle anlaşmazlığı

## Sorun
Bir süredir sarı siteye (ülkemizdeki en bilindik 2.el ilan sitesi) her girişimde ilan fotoğraflarının gözükmediğini fark ettim ve bunu Yusuf'a ilettim. Sağolsun kendisi sorunun ne olduğunu buldu ve ben de aynı sorunu sizin de yaşıyor olabileceğinizi düşünerek bunu konu hakkında bilginiz olması için sizinle paylaşmak istedim.

## Çözümü
Sorunun çözümüne gelirsek about:config 'e girip arama kısmına security.ssl.require_safe_negotiation yazıp gelen kaydı false olarak seçerseniz sorun çözülüyor ancak sorunun çözümünü bilsek de teknik olarak detaylandırmasını yapamadığım gibi Librewolf'un bu anahtarda firefox'a göre değişiklik yapmasının altında güvenlik anlamında bir mantık olup olmadığı konusunda herhangi bir fikrim yok açıkçası. Ancak bunu yaptıktan sonra sorun kalmıyor.

## Not 1
Birçoğunuz seri olması açısından Chrome ya da Chromium tabanlı browser'lar kullanıyorsunuz ancak güvenlik anlamında neden Firefox tabanlı browser'ları kullanmanız gerektiğini anlamanız adına Yusuf'un [videosunu](https://www.youtube.com/watch?v=ToP6lg03LqM "videosunu") izlemenizi öneririm. (ki kendi adıma Firefox ve Firefox tabanlılar arasından özellikle Librewolf kullanmanızı öneririm). Bu arada mevzubahis videonun üzerinden epeyce bir versiyon geçti ve videodaki "eksi yanları" kısmındaki pip ve reader view konularında geliştirmeleri yaptılar bilginiz olsun.

## Not 2
Librewolf'u da indirdiğiniz haliyle kullanmamanızı, bazı eklentilerle desteklemenizi öneririm. Kendi adıma kullandığım eklentiler şu şekilde;
- **uBlock Origin** (Reklam engelleyici. Ayarlarından ekstra filtreleri de açmayı unutmayın)
- **Firefox Multi Account Containers** (Librewolf'la birlikte geliyor ancak Firefox kullanmak istemeniz durumunda aklınızda olsun diye yazdım)
- **Containerise** (Firefox Multi Account Containers'ı destekleyici bir eklentidir. Belli başlı siteleri hep aynı container'da açmak istiyorsanız bunları ve kategorilerini organize edilmesini kolaylaştırıyor. Ki güvenliğiniz açısından istemelisiniz de.)
- **Temporary Containers** (Belli başlı siteleri kategorize ettiğinizde gündelik olarak girdiğiniz tüm siteler aynı container'da cookie'lerini barındırır. Bunu engellemek için de bu eklentiyi kullanıyorum. Her yeni site için geçici bir container açıyor ve kapattığınızda container da kapanıyor. Kurulduğu andaki ayarları ancak siz yeni tab açıp bunu temporary container'da aç derseniz açar halde oluyor. Ayarlarını kurcalarsanız kategoriler dışında kalan açılan her siteyi temporary container'da otomatik olarak açılmasını sağlayabilirsiniz.)
- **CleanUrls** (tıkladığımız linklerin bazıları reklam/ticari işbirliği amaçlı yönlendirme linkler olur ya da parametrelerle reklam için analytic bilgileri sağlar. Bu tıkladığımız linkleri otomatik temizleyen bir eklenti)
- **Decentraleyes** (Bunun tam teknik detayını veremiyorum ancak özet geçmem gerekirse Google gibi merkezi library'lerle veri toplama işi yapan sitelerdeki bu tarz veri toplama kullanımlarını engelliyor anladığım kadarıyla)

Bahsi geçen eklentilerin detaylarını privacytools.io sitesinden edinebilirsiniz. Çoğu özelikle tavsiye ettikleri eklentilerdir.

### Yazar
**Discord:** C41#3446