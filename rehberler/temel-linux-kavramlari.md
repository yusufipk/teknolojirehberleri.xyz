# Temel Linux kavramları
![Linux](https://i.imgur.com/gaLZ7nO.png)
## 
Her kese merhablar. Bu yazıda ilk kullanıcıların aşina olduğunda önüne çıkan problemleri daha kolay hall edebilecekleri yani her Linux kullanıcısın bilmesi gereken kavramları anlatacağım.
## Boot işlemi
![boot](https://i.imgur.com/KGE3qy2.png)
## 
Herhangi bir bilgisayarı ilk açtığımızda POST (Power on self-test) denilen, ilk kontrollerden sorumlu olan bir yazılım başlatılır. Bu yazılımı bizler, eski bilgisayarımız ilk başladığında gözüken, anakartın markasının logosuyla siyah beyaz yazıların olduğu kısım olarak tanıyoruz. POST çalıştıktan sonra bootloaderı başlatmaktan sorumlu olan bir yazılım çalıştırılır, BIOS. BIOS'un görevi gerekli donanım parçalarını kontrol ederek boot işlemini başlatmaktır. Bu işlemi de bootloader aracılığıyla yapar. Günümüzde BIOS'un işini, UEFI (Unified Extensible Firmware Interface) denilen bir yazılım yapmaktadır. Genellikle 2013 öncesi bilgisayarlar BIOS boot seçeneği ile gelirken, sonraki bilgisayarlar UEFI boot seçeneği ile gelmektedir. UEFI ve BIOS aynı işi yapsalar da, yapma biçimleri farklıdır. Herhangi bir işletim sistemi için boot diski/usb'si hazırlanırken bilgisayarın BIOS veya UEFI boot işleminden hangisine sahip olduğunun bilinmesi işte bu nedenle önemlidir. BIOS boot aynı zamanda Legacy boot olarak da adlandırılır.
## Bootloader (GRUB vs.)
![bootloader](https://i.imgur.com/m0UBuLC.png)
##  
Bootlader, BIOS veya UEFI tarafından başlatılan, istenilen kernel parametreleri ile kerneli başlatmaktan sorumlu olan yazılımdır. Günümüzde birçok yaygın Linux dağıtımında popüler bir bootloader olan GRUB (GRand Unified Bootloader) kullanılmaktadır. Bootloader aynı zamanda birden fazla işletim sistemi yüklü olan bilgisayarlarda işletim sistemini seçmemizi sağlar. Genelde ekran kartı veya ekran parlaklığı problemlerini çözme işi de kernel parametreleri ile grub üstünden yapılmaktadır.

## Kernel(Linux)
![kernel](https://i.imgur.com/a2nBihB.png)
##  
Bildiğiniz üzere Ubuntu, Mint, Arch vb. işletim sistemleri aslında Linux kernelini içeren birer Linux dağıtımıdır. Aslında Linux ismi de Linux kernelini içeren tüm dağıtımlara verilen ortak isimdir. Kernel ise genelde bootloaderdan sonra bilgisayarın ilk yüklenen programı olan, bilgisayarın temel bileşenlerinden sorumlu olup giriş cihazlarıyla iletişim kurmasını sağlayan yazılıma verilen isimdir.
## Init sistemleri (systemd, openrc, runit vs.)
![init](https://i.imgur.com/4GVsLVs.jpg)
##  
Init, bilgisayar başladığında başlatılan ilk işleme verilen isimdir. Bilgisayar kapanıncaya kadar çalışmaya devam eder. Günümüzdeki Linux dağıtımlarında genellikle systemd kullanılmaktadır. Bununla birlikte daha sade ve basit init sistemleri olarak OpenRC, Runit, Sysinit ve Systemv gibi sistemler mevcuttur. Sunucularda Systemd kullanımı daha avantajlı olsa da, günlük kullanım için diğer init sistemlerini kullanmak hem daha sağlıklı hem de güzenlik açığı bakımından daha mantıklı olacaktır.

## Getty
![getty](https://i.imgur.com/jYwzQE6.png)
##  
Getty init çalıştıktan sonra başlatılan sanal terminallere verilen genel isimdir. Genellikle birden fazla başlatılır. Linux bilgisayalarda Ctrl+Alt ve fonksiyon tuşlarıyla başlatılan diğer getty işlemleri arasında geçiş yapabiliriz. Getty, aynı zamanda kullanıcıya kullanıcı isim ve şifre sormaktan sorumludur. Ancak günümüzde bu işi grafiksel olarak başka yazılımlar aracılığıyla yapmaktayız.
## Shell
![shell](https://i.imgur.com/IQbKLhT.png)
##   
Shell, giriş yapıldıktan sonra ekrana gelen, bizim komutlar girerek bilgisayarın içine erişebileceğimiz araçlardır. Bir Linux bilgisayar açıkken, terminal açtığımızda yüklenen şeydir. Bash, fish, zsh örnek olarak verilebilir. Her kullanıcı için sistemde ayrı birer shell tanımlanabilir. Shell aynı zamanda giriş yapıldıktan sonra xinit veya startx aracılığıyla da grafiksel arayüzün yüklenmesinden sorumludur.
###     
Şimdiye kadar bahsettiklerimiz genel olarak bilgisayarın açıldığında neler olduğuyla alakalıydı. Şimdi ise grafiksel kısımlara geçebiliriz.
## Display Server(Wayland, Xorg)
![display server](https://i.imgur.com/RliNBDL.png)
##   
Bilgisayarların ekrana şekil, renk vb. şeyleri göstermesine yardımcı olan yazılımlara verilen isimdir. Xorg ve de Wayland akla gelen iki örnek olarak verilebilir. Her ne kadar Wayland daha yeni olsa da, destek açısından Xorg daha avantajlıdır. Ubuntu 17 sürümünde Wayland'e geçiş yapmayı denemiş, kullanıcılardan gelen geri bildirimlerden sonra 18 versiyonunda Xorg'a geri dönüş yapmıştır.
## Display Manager
![display manager](https://i.imgur.com/LLngss9.png)
##  
Display Manager'lar bilgisayar açıldığında getty'nin bize sunduğu kullanıcı adı/şifre ekranını grafiksel arayüz halinde sunan araçlardır. Bizlere desktop environment da seçme imkanı sunarlar. Aynı zamanda Login Manager olarak da adlandırılırlar. LightDM, GDM, LXDM gibi yazılımlar örnek verilebilir.
## Masaüstü ortamı (Desktop environment)
![de](https://i.imgur.com/YPXJ9XS.png)
##   
Masaüstü ortamları bilgisayara giriş yaptıktan sonra bilgisayardaki uygulamaları yönetebilmemiz, bilgisayar ayarlarını değiştirebilmemiz gibi grafiksel araçları sunan yazılımlardır. Gnome, Cinnamon, KDE, Xfce gibi yazılımlar örnek verilebilir.
###  
Not: Herhangi bir Linux dağıtımının kilit ekranını genelde ilk giriş yapılan ekrandan farklıdır. Bunun sebebi giriş yapılan ekranın display manager'ın parçası olması, kilit ekranının ise desktop environment'ın parçası olmasıdır.
## Pencere Yöneticisi (Window Manager)
![window manager](https://i.imgur.com/ZkJuMbO.png)
##   
Window manager'lar ekrandaki pencerelerin yönetilmesinden sorumlu olan araçlardır. Bir desktop environment'ın parçası olabilecekleri gibi, desktop environment olmadan da kullanılabilirler.Örnek olarak Xfwm Xfce'nin window manager'ı olup, i3 ise tek başına kullanılması için yaratılmış bir window manager'dır.
###  
Yukarıda bahsettiğim kavramlar bizlere Linux'ta karşılaşılan problemlerin çözümünde oldukça yardımcı olacaklar. Bilgisayar açılırken veya kapanırken sorunu yaşadığınız yerin hangi yazılımın parçası olduğunu bularak sorunu daha hızlı çözebilirsiniz. Muhtemelen yüklediğiniz Linux dağıtımında yukarıdaki yazılımların hepsi kurulmuş olacak ve sorun çıkmayacaktır.
##   
## Bitiş
Umarım bu yazıyla sizlere temel Linux kavramlarını anlatmış, size bir şeyler katabilmişimdir. Aşağıdaki bağlantılardan bana ulaşa bilirsiniz.

Email: subhanqedirli@protonmail.com                 [Youtube](https://www.youtube.com/channel/UCCyrdKjOWMQFu4MpAuD9ajg) [Discord](https://discord.gg/jwR4sAYQ5n)  [Telegram](https://t.me/LinuxisnotUNIXchannel) [Mastodon](https://mastodon.social/web/accounts/106607411263382617)  
##   
### Kaynakça
[Arch Wiki](http://wiki.archlinux.org/index.php/Arch_boot_process)
[Wikiwand](http://www.wikiwand.com/en/Linux)
[Linux.org.tr](https://e-bergi.com/y/linux-problem-1/)


##### Son.
