# Linux Sunucularda SSL güvenliğini artırma

Bugün sizlere mevcut sunucunuzda eğer bir websitesi ve/veya App serve ediyorsanız mutlaka ihtiyacınız olan SSL bağlantısından ve bununla bağlantılı olarak openssl kütüphanesinden bahsedeceğim. SSL (Secure Socket Layer) ve TLS (Transport Layer Security) sunucunuza bağlanmak isteyen kişileri siteniz ile güvenli şekilde iletişim kurmasına imkan sağlayan bir bağlantı şeklidir. Eskiden SSL v1-v3 arasında değişen sürümler mevcut ve siteler genelde bu SSL sürümlerini kullanırken artık SSL siteler tarafından terk edilmiş ve yerini daha güvenli olan TLS'ye bırakmıştır. Fakat yine de işin anlatımı kısmında ve config dosyalarını düzenlerken halen "ssl" kelimesini kullanmamız gerekecektir. Bunu ufak bir espiri ile de anlatmak gerekirse eğer bir uygulamanın 64 bit versiyonunu indirmek istediğiniz aman "amd_64" olarak neden geçtiğini hiç düşündünüz mü? Çünkü 64 bit'e ilk geçen AMD olduğu için buna bir saygı göstergesi ve/veya alışkanlık olarak amd_64 olarak kaldı bu isimlendirme. Aynı şekilde de şu an TLS kullanıyor olmamıza rağmen isimlendirme ve konfigürasyon parametreleri "SSL" olarak kaldı.

Daha önceki yazımızda olduğu gibi süreci yine basit, önerilen ve ileri-seviye olarak üç farklı başlık altında anlatacağım. Başlık içerikleri kişisel gerekliliklere göre aşamalı düşünülmüştür. Başlıklar bir biri ile bağlantılı olmasına rağmen istenilen bir aşamada bırakılması sorun oluşturmayacaktır.


## Basit konfigürasyon

Öncelikle içinde bulunduğumuz Linux sürümünün paket yöneticisi ile güncellemeleri konsol üzerinden yüklememiz gerekmektedir.
```
Ubuntu için: sudo apt update && sudo apt upgrade -y

Fedora için: sudo yum update -y

Arch Linux için: sudo pacman -Syyu
```

Güncellemeler yüklendikten sonra ise sunucunuzdaki (Benim olayımda Ubuntu) nginx/apache servisini (ki bu servis dışarıdan gelen web bağlantılarını almanıza yarayan servistir) yapılandırmaya başlıyoruz. Nginx servisinin ayarlarının tutulduğu dosya genel itibariyle "/etc/nginx/nginx.conf" konumunda bulunur. Bunu kendi kullandığımız metin editörlerinden istediğimiz biriyle ama sudo (yani yönetici) yetkilerine sahip bir kullanıcı ile açmamız gerekmektedir.

Ubuntu üzerinden devam edecek olursak (Tek Ip Tek Sunucu Yapılandırması)

```
sudo nano /etc/nginx/nginx.config # Ayar dosyasını açmaya yarayan komut
```

```
Eklenecek (varsa değiştirilecek) başlıklar
listen 443 ssl http2; >> ipv4 üzerinden 443 portuna gelen istekleri http2 protokolü ile karşılayıp ssl bağlantısı kurmaya yarıyor.

listen [::]:443 ssl http2; >> ipv6 üzerinden 443 portuna gelen istekleri http2 protokolü ile karşılayıp ssl bağlantısı kurmaya yarıyor. (Eğer ipv6 desteğiniz yok ise veya native olarak desteklemek istemiyorsanız kaldırabilirsiniz)

server_name SUNUCU_ADINIZ; >> Eğer sunucu adınızı default olarak belirlemek istemiyorsanız bir Server Name Indicator belirleyebilirsiniz. Bu gelen tüm istekleri karşılamak yerine sadece sunucu adınıza gelen istekleri karşılamaya yarar.

ssl_certificate /etc/letsencrypt/live/SUNUCU_ADINIZ/fullchain.pem; >> Eğer free ssl için Let's Encrypt kullanıyor iseniz default sertifika konumu burasıdır. Aksi halde kendi sertifika dosyanız ile değiştirin.

ssl_certificate_key /etc/letsencrypt/live/SUNUCU_ADINIZ/privkey.pem; >> Eğer free ssl için Let's Encrypt kullanıyor iseniz default private key konumu burasıdır. Aksi halde kendi private key dosya konumunuz ile değiştirin.

ssl_protocols TLSv1.3 TLSv1.2;  >> Sadece en güncel ve en güvenilir TLS protokollerini kabul etmek için gerekli komut.

ssl_prefer_server_ciphers on; >> Sunucu ile istemcinin konuşması sırasında "tamam nelerimiz var bakalım" diye konuştuklarını tahmin ettiğim :D kısımda sunucunun sadece kendi seçtiği şifreleme algoritmaları ile bu görüşmeyi devam ettireceğini söylemesine yarayan komut. Kısacası işine gelirse böyle işine gelmezse konuşmuyorum.

ssl_ecdh_curve secp521r1:secp384r1; >> Ekliptik eğrileri kullanmamız gereken durumlarda hangi eğrileri tercih ettiğimizi bildiren komuttur.

ssl_ciphers DH-RSA-AES256-SHA:DH-RSA-AES256-SHA256:DHE-RSA-AES256-GCM-SHA384:DH-RSA-AES256-GCM-SHA384:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDH-ECDSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:ECDH-RSA-AES256-SHA:AECDH-AES256-SHA:ECDHE-ECDSA-AES256-SHA384:ECDH-ECDSA-AES256-SHA384:ECDH-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:ECDH-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDH-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-CCM:DHE-RSA-AES256-CCM8:ECDHE-ECDSA-AES256-CCM:ECDHE-ECDSA-AES256-CCM8:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-CHACHA20-POLY1305:DHE-RSA-CHACHA20-POLY1305; >> En güvenilir bulduğum SSL algoritmalarının bir araya getirilerek sadece bunları kullanmasını sunucuya söyleyen kod.
```
Tek tek araştırmak isteyenler için tüm cipherlar: "https://testssl.sh/openssl-iana.mapping.html"

Ayarları yaptıktan sonra kontrol etmek isterseniz: "sudo nginx -t" komutunu kullanabilirsiniz. Eğer bir hata mesajı görmez iseniz "sudo systemctl restart nginx" veya "sudo service nginx restart" komutu ile ayarları uygulayıp servisi baştan başlatabilirsiniz

## Önerilen ayarlar
Bir önceki ayarlara ek olarak performans özelinde bazı iyileştirmeler ve bunun yanı sıra sitenizin SSL test sitelerinde üst sıralara çıkmasını sağlayacak bazı ek konfigürasyonlar yapacağız. Bunun ardından ise sitenizin kullanıcı ile erişiminde faydalı olarak bazı başlıkları (header) ve sitenizin kaynaklarının üçüncü kişi siteler tarafından sömürülmemesi için bir takım iyileştirmeler yapacağız.

```
Eklenecek (varsa değiştirilecek) başlıklar
ssl_session_cache shared:TLS:2m; >> TLS bağlantılarının işçiler (nginx workers) arasında nasıl dağıtılacağını ve ne kadar süre ile bağlantıların ortak kullanılacağını belirten kod

ssl_buffer_size 4k; >> SSL isteklerine cevap verirken ve handshake sonrası paket gönderimi yaparken paketlerin kaçlık konteynırlara bölüneceğini belirten kod. Daha düşük bir değer daha çok paket gönderilmesi ama daha az taşma (overhead) anlamına gelir.

ssl_stapling on; >> OCSP zımbalama özelliğini aktif hale getirir

ssl_stapling_verify on; OCSP zımbalamanın üst ve kök sunucularda dahil olmak üzere doğrulanması özelliğini açar.

resolver 1.1.1.1 1.0.0.1 2606:4700:4700::1111 2606:4700:4700::1001; >> Cloudlfare ile OCSP zımbalama doğrulamasının yapılmasını sağlar. Eğer IPV6 kullanmıyor veya native olarak desteklemek istemiyorsanız ipv6 adreslerini silebilirsiniz.

add_header X-Content-Type-Options "nosniff" always; >> Tarayıcıların MIME içeriklerini anlamak için koklama (sniff) yapmasını engeleyen başlık değeridir.

add_header X-Xss-Protection "1; mode=block" always; >> Olası bir XSS açığında kullanıcıların beyaz ekran görmesini sağlayarak açığı bir nebze de olsa engelleyen bir başlıktır.

add_header X-Frame-Options "SAMEORIGIN" always; >> Herhangi bir şekilde i-frame vb bir kod ile sunucunuzun bir sayfasının başka bir sayfada gösterilmesini ve/veya alt-alta üst-üste yayımlanmasını engeller. Sadece siz kendi siteniz içerisinde kendi sitenizden bir pencere yayımlayabilirsiniz.

add_header Referrer-Policy "no-referrer-when-downgrade" always; >> Daha alt güvenlik önlemine sahip bir siteye yönlendirme veya link verdiğinizde otomatik olarak referrer başlığı eklemez ve sitenizden trafik geldiği belli olmaz.

add_header Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';" always; >> Sizin ve diğer kullanıcıların dışarıdan çağırabilecekleri isteklerin hangi koşullar altında çağrılabileceğini düzenleyen başlık. Ben default olarak https üzerinden gelen bazı kaynaklara güveniyorum.

add_header Permissions-Policy "camera=(), fullscreen=(self), geolocation=(), microphone=(), payment=()" always; >> Tarayıcıya hangi izinleri isteyeceğinizi veya hangilerine hiç ihtiyacınız olmayacağını belirterek çeşitli zehirleme türleri (cache-poisoning veya js-poisoning) ile sizin siteniz üzerinden bilgi toplanmasını engeller.
```
Ayarları yaptıktan sonra kontrol etmek isterseniz: "sudo nginx -t" komutunu kullanabilirsiniz. Eğer bir hata mesajı görmez iseniz "sudo systemctl restart nginx" veya "sudo service nginx restart" komutu ile ayarları uygulayıp servisi baştan başlatabilirsiniz.

## İleri Seviye Ayarlar
Öncelikle sitenize sadece ssl üzerinden bağlanması gerektiğini gösterecek bir başlık ekleyeceğiz. Bu sayede sizin sitenize daha önce girmiş olanlar ve hali hazırda bu başlığı tarayıcısında mevcut olanlar istese bile sizin sitenize Non-SSL şekilde erişemeyecekler. Ardından ise HTTP oturumlarına kullanılması gereken SSL sertifikalarını zımbalayacağız ve önceki yöntemin yanından hangi sertifikalar ile bağlanması gerekeceğini de önceden belirtmiş olacağız. Bu sayede yetkili bir üst sertifika yöneticisi veya kök yöneticisi olsanız dahi sizin adınıza imzaladığı sertifika ile sizin sitenize bağlanamayacaklar. Zamaında Türkiyede yerleşik E-Tuğra Kök Sertifika sağlayıcısı *.google.com adresine bir sertifika imzaladı. Biraz araştırırsanız hangi dönemde meydana geldiğini ve nedenini (ne kadar kötü sonuçlara neden olabileceğini) fardekersiniz. Şimdi başlayalım son konfigürasyon kısmına.

Öncelikle sitenizin SSL üzerinden hiçbir soruna neden olmaksızın erişilebiliyor olduğundan emin olun. Ardından nginx konfig dosyasına aşağıdaki başlıklardan isteğinize göre birini ekleyin. Ama dikkat edin sadece bir tanesini.

```
add_header Strict-Transport-Security "max-age=2592000;" always; >> Sitenize 30 gün boyunca sadece HTTPS üzerinden erişilebileceğini belirten başlık. (Alt alan adları dahil değil)

add_header Strict-Transport-Security "max-age=2592000; includeSubDomains;" always; >> Sitenize alt alan adları da dahil olmak üzere 30 gün boyunca sadece HTTPS üzerinden erişilebileceğini belirten başlık.

add_header Strict-Transport-Security "max-age=31536000; includeSubDomains;" always; >> Sitenize alt alan adları da dahil olmak üzere 1 yıl boyunca sadece HTTPS üzerinden erişilebileceğini belirten başlık.

add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always; >> Sitenize alt alan adları da dahil olmak üzere 1 yıl boyunca sadece HTTPS üzerinden erişilebileceğini ve bu başlığın tarayıcıların önbelleğine alınması talimatını veren başlık. Ayrıca yeni çıkan tarayıcılar sitenize daha önce hiç girmese dahi bu başlıktan haberdar olacaktır.

add_header Strict-Transport-Security "max-age=0; includeSubDomains"; >> HSTS özelliğini ve preload listesi üyeliğini tamamen kaldırmaya yarayan başlık.
```

Yukarıda belirtilen başlığı ekledikten sonra şimdi kullanmış olduğunuz ssl sertifikasının özetinin HTTP oturumuna zımbalanmasına geldi. Bu aşamada mevcut sertifikanızın bir özetini çıkarmamız, üst imzalayan yetkilinin sertifikasının özetini çıkarmamız ve en üst kök sertifika yetkilisi de dahil olmak üzere tüm zinciri tamamlayana kadar bu özet çıkarma sürecini devam ettirmemiz gerekiyor. Bu nedenle root kullanıcısı veya sudo yetkisine sahip bir kullanıcı ile aşağıdaki komutları sırasıyla çalıştırıyoruz. (Anlatım Let's Encrypt özelinde yapılmıştır.)

```
1] cat /etc/letsencrypt/live/SUNUCU_ADINIZ/cert.pem | openssl x509 -pubkey | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | base64 >> Bu komut sizin sitenize ait sertifikanın özetini çıkaracaktır. Sonuç değerini bir yere kopyalayın.
2] curl -s https://letsencrypt.org/certs/lets-encrypt-x4-cross-signed.pem | openssl x509 -pubkey | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | base64 >> Bu komut letsencrypt'e ait çoklu imzalı sertifikalardan bir tanesinin özetini çıkaracaktır.
3] curl -s https://letsencrypt.org/certs/lets-encrypt-x3-cross-signed.pem | openssl x509 -pubkey | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | base64 >> Bu komut letsencrypt'e ait çoklu imzalı sertifikalardan bir tanesinin özetini çıkaracaktır.
4] curl -s https://letsencrypt.org/certs/isrgrootx1.pem | openssl x509 -pubkey | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | base64 >> Bu komut letsencrypt'e ait kök (en üst) sertifikasının özetini çıkaracaktır.

Nginx config dosyasına aşağıdaki değer eklenir
5] add_header Public-Key-Pins 'pin-sha256="ILK_SONUC"; pin-sha256="IKINCI_SONUC"; pin-sha256="UCUNCU_SONUC"; pin-sha256="DORDUNCU_SONUC"; max-age=2592000; includeSubDomains' always; >> Sitenize 30 gün boyunca sadece belirtilen sertifika ile bağlanılmasına izin verir. Max-age değerini isteğe bağlı olarak artırabilirsiniz. Sertifika geçerlilik süreniz 30 günden daha az kalmadan başlığı devredışı bırakmanız veya yeni sertifika edinmeniz ve beşinci değer olarak onu eklemeniz gerekmektedir.

Bonus olarak sunucunuzun yapmasının çok uzun süreceği ama faydası çok olan bir komut daha göstermek istiyorum.
6] openssl dhparam -out /etc/nginx/dhparams.pem 4096 >> Bu komutu uygulaması 15dk ile 1 saat arasında sürebilir.

İşlem bittikten sonra nginx konfig dosyasına aşağıdaki komutu eklemeniz gerekmektedir.
ssl_dhparam /etc/nginx/dhparam.pem; >> Diffie-Hellman anahtar değişim algoritması sırasında kullanılacak değerleri default değerler dışında az önce oluşturduğumuz gizli değerler ile değiştirmeye yarayan komut.
```

Ayarları yaptıktan sonra "sudo nginx -t" ve ardından eğer bir hata mesajı görmez iseniz "sudo service nginx restart" komutu ile ayarları uygulayıp servisi baştan başlatın. Artık sizin belirlediğiniz konfigürasyon ve şartlar ile bağlantı sağlanacaktır. Eğer öncesi/sonrası puanlama farkını görmek isterseniz aşağıdaki görsellere bakabilirsiniz veya kendi sitenizi "https://www.ssllabs.com/ssltest/index.html" adresinden test edebilirsiniz.

İLK HALİ
![İlk Hali](https://i.ibb.co/N72VF2j/Ekran-Resmi-2021-10-05-12-08-48.png)

SON DURUM
![Son Hali](https://i.ibb.co/TTyYH31/Ekran-Resmi-2021-10-05-12-05-51.png)

Neden Cipher Strength %100 değil derseniz TLS 1.3 ile otomatik gelen ve biz istemesek de eklenen "TLS_AES_128_GCM_SHA256 (0x1301)" yüzünden şu an %100 yapmak mümkün değil. TLS 1.3'ü kapatırım o zaman gelmez diye düşünürseniz o zaman da başka yerden puanınız gidiyor maalesef.

## Son
- Yazar ~Wise
