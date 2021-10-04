# Linux Sunucularda SSH güvenliğini artırma

Bugün sizlerle bir sunucu kiraladığınız zaman güvenli bir şekilde bağlanmamızı sağlayan SSH hizmetini nasıl daha güvenli ve dışarıdan gelecek kötü niyetli isteklerden uzak tutabiliriz bundan bahsedeceğim. Öncelikle süreci basit, önerilen ve ileri-seviye olarak üç farklı başlık altında anlatacağım. Başlık içerikleri kişisel gerekliliklere göre aşamalı düşünülmüştür. Başlıklar bir biri ile bağlantılı olmasına rağmen istenilen bir aşamada bırakılması sorun oluşturmayacaktır.


## Basit Güvenlik Önlemleri

Öncelikle içinde bulunduğumuz Linux sürümünün paket yöneticisi ile güncellemeleri konsol üzerinden yüklememiz gerekmektedir.
```
Ubuntu için: sudo apt update && sudo apt upgrade -y

Fedora için: sudo yum update -y

Arch Linux için: sudo pacman -Syyu
```

Güncellemeler yüklendikten sonra ise sunucunuzdaki (Benim olayımda Ubuntu) sshd servisini (ki bu servis dışarıdan ssh bağlantıları almanıza yarayan servistir) yapılandırmaya başlıyoruz. Öncelikle çok karıştırılması nedeniyle belirtmek gerekir ki ssh servisi ile sshd servisi farklı servislerdir. SSH servisi sunucunun başkaca bilgisayar veya sunuculara bağlanmasını yarayan servisken SSHD servisi başka bilgisayarların sizin sunucunuza bağlanmasını yani gelen bağlantıları karşılayan servistir.

SSHD servisinin ayarlarının tutulduğu dosya genel itibariyle "/etc/ssh/sshd_config" konumunda bulunur. Bunu kendi kullandığımız metin editörlerinden istediğimiz biriyle ama sudo (yani yönetici) yetkilerine sahip bir kullanıcı ile açmamız gerekmektedir.

Ubuntu üzerinden devam edecek olursak

```
sudo nano /etc/ssh/sshd_config # Ayar dosyasını açmaya yarayan komut
```
Bulup değiştireceğimiz başlıklar

```
#ClientAliveInterval 0  >> Başındaki hashtag işaretini kaldırıyoruz ve "0" olan değeri 300 yapıyoruz. Bu komut bağlantı kullanılmadığı (idle konumunda kaldığı) zaman kaç sn sonra bağlantının otomatik kapatılacağını düzenler
#PermitEmptyPasswords no >> Başındaki hashtag işaretini kaldırıyoruz ve "no" olan değeri değiştirmiyoruz. Bu komut boş veya şifresiz kullanıcıların bağlanmasını engeller. Yani boş şifrelere izin vermez.
X11Forwarding yes >> Eğer başında hastag var ise kaldırıyoruz yok ise "yes" olan değeri no olarak değiştiriyoruz. Bu komut sunucu üzerinde GUI arayüzüne sahip uygulamaları çalıştırma kolaylığı sağlamasına rağmen suistimal edilmesi mümkün bir durum olduğundan kapatıyoruz.
#MaxAuthTries 6 >> Başındaki hashtag işaretini kaldırıyoruz ve "6" olan değeri 3 yapıyoruz. Bu komut şifrenizi kaç kez deneyebileceklerini düzenler. 6 sayısı gereksiz derece yüksek bir değer olup genel kabul 3 ve veya 4 olması yönündedir.
#Protocol 2 >> Eğer başında hastag var ise kaldırıyoruz, böyle bir kayıt hiç yok ise "Protocol 2" şeklindeki değeri ilk bulduğumuz boşluğa ekliyoruz. Bu komut SSH'ın sadece en yeni protokolü ile bağlantıların yapılmasını sağlayarak eski protokolün açıklıklarından sizi korur.
```
Ayarları yaptıktan sonra kontrol etmek isterseniz: "sudo sshd -t" komutunu kullanabilirsiniz. Eğer bir hata mesajı görmez iseniz "sudo systemctl restart sshd" veya "sudo service sshd restart" komutu ile ayarları uygulayıp servisi baştan başlatabilirsiniz

## Önerilen ayarlar
Bir önceki ayarlara ek olarak kullanıcı bazlı oturum açma, sadece güvenli anahtar kullanarak oturum açma ve Root kullanıcısı ile oturum açmayı kısıtlama gibi ek ayarlamalar yapacağız. Öncelikle yerel bilgisayarınızdaki kullanıcınız için bir gizli anahtar üretmeniz gerekiyor. Bunun için eğer linux tabanlı bir işletim sistemi kullanıyor iseniz

```
ssh-keygen -t rsa -b 4096 # yazdıktan sonra aşağıdaki sorulara cevap olarak istediğiniz şifreyi giriniz
>>>> Enter passphrase (empty for no passphrase): [Press enter key]
>>>> Enter same passphrase again: [Press enter key]

veya

ssh-keygen -t ecdsa -b 521 # Daha güvenli ve daha hızlı olan ekliptik anahtar üretir. Aşağıdaki sorulara cevap olarak istediğiniz şifreyi giriniz
>>>> Enter passphrase (empty for no passphrase): [Press enter key]
>>>> Enter same passphrase again: [Press enter key]
```
Diğer sorulara Enter'a basarak cevap vermiş ve anahtar için belirli bir konum yazmamış iseniz anahtar çiftiniz (.pub= halka açık anahtar) / uzantısız olan gizli anahtar) /home/KULLANICI_ADINIZ/.ssh klasörüne kaydedilmiştir. Ürettiğiniz anahtarı sunucunuza tanıtmak için aşağıdaki kodu kullanabilirsiniz.

```
ssh-copy-id -i ~/.ssh/ANAHTAR_ISMINIZ.pub SUNUCUDAKI_KULLANICI_ADINIZ@SUNUCU_IP_ADRESI # yazdıktan sonra kullanıcınızın şifresini sorucak ve doğru girdiğiniz takdirde onay mesajı ile karşılaşacaksınız.
```

Kendi anahtarınızı ürettikten sonra sunucuya sadece anahtar ile erişmek için;
Bulup değiştireceğimiz başlıklar
```
#PasswordAuthentication no >> Başındaki hashtag işaretini kaldırıyoruz ve "no" olan değeri no olarak bırakıyoruz. Bu komut sunucuya şifre ile bağlanmayı engeller. Kullanıcılar sadece ssh_keyleri ile bağlanabilirler.
PubkeyAuthentication yes >> Eğer var ise başındaki hastag işaretini kaldırıyoruz ve değeri yes olarak belirliyoruz. Bu komut az önce oluşturduğunuz gizli key ile oturum açmanıza izin veren komuttur.
#PermitRootLogin no >> Başındaki hashtag işaretini kaldırıyoruz ve "no" olan değeri no olarak bırakıyoruz. Bu komut ROOT kullanıcısının ki en yetkili kullanıcıdır sunucuya erişmesini engelliyor. Ancak başka bir kullanıcı ile erişip sonra ROOT kullancısına geçiş yapabilirsiniz.
AllowUsers KULLANICI_ADINIZ >> Eğer yok ise böyle bir kayıt ekliyoruz. Başka kullanıcıların sunucuya bağlanmasını ve/veya kullanıcı adı denemesi yapmasını engelliyor.
LoginGraceTime 20 >> Eğer yok ise böyle bir kayıt ekliyoruz ve değeri 20 olarak ayarlıyoruz. Oturum açmak için gereken süreyi saniye cinsinden belirliyor. Uzun süre oturum açma isteği ile sunucuyu meşgul etmelerini engelliyoruz.
ChallengeResponseAuthentication no >> Var ise başındaki hastag işaretini kaldırıyoruz ve değeri no olarak belirliyoruz. Bu komut diğer oturum açma yöntemlerini devre dışı bırakıyor.
KerberosAuthentication no >> Var ise başındaki hastag işaretini kaldırıyoruz ve değeri no olarak belirliyoruz. Bu komut diğer oturum açma yöntemlerini devre dışı bırakıyor.
GSSAPIAuthentication no >> Var ise başındaki hastag işaretini kaldırıyoruz ve değeri no olarak belirliyoruz. Bu komut diğer oturum açma yöntemlerini devre dışı bırakıyor.
```
Ayarları yaptıktan sonra kontrol etmek isterseniz: "sudo sshd -t" komutunu kullanabilirsiniz. Eğer bir hata mesajı görmez iseniz "sudo systemctl restart sshd" veya "sudo service sshd restart" komutu ile ayarları uygulayıp servisi baştan başlatabilirsiniz

## İleri Seviye Ayarlar
Öncelikle standart SSH bağlantı portu olan 22 yi değiştirip ardından SSH bağlantısı sırasında kullanılan şifreleme araçlarını daha da güçlü hale getireceğiz. Ardından sunucunu SSH hizmetinin loglarının (kayıt defteri kayıtlarının) nasıl tutulacağını belirleyeceğiz.

Bulup değiştireceğimiz başlıklar
```
#Port 22 >> Bunu bulup başındaki hastag işaretini kaldırıyoruz ve oraya başka hizmet tarafından kullanılmayan ve açık olan bir port numarasını yazıyoruz. Örneğin 2992 olabilir.
LogLevel INFO >> Bu ayarı bulup değiştiriyoruz yok ise ekliyoruz. Kayıt seviyesini belirlememize yarıyor.
AllowAgentForwarding no >> Bu ayarı bulup değiştiriyoruz yok ise ekliyoruz. Alternatif yönlendirme yöntemlerini devredışı bırakıyor.
AllowTcpForwarding no >> Bu ayarı bulup değiştiriyoruz yok ise ekliyoruz. Alternatif yönlendirme yöntemlerini devredışı bırakıyor.
PrintMotd no >> Bu ayarı bulup değiştiriyoruz yok ise ekliyoruz. Bağlantı kurulmadan önce sunucu ile ilgili bilgi sahibi olmalarını engellemek için.
PermitUserEnvironment no >> Bu ayarı bulup değiştiriyoruz yok ise ekliyoruz.
PermitTunnel no >> Bu ayarı bulup değiştiriyoruz yok ise ekliyoruz.
```

Daha da ileri giderek SSH bağlantısı sırasında kullanılan şifreleme algoritmalarını, doğrulama algoritmalarını, anahtar değişim algoritmalarını ve diğer algoritmaların hangilerinin öntanımlı olacağını belirliyoruz.

Root kullanıcısı veya sudo yetkisine sahip bir kullanıcı ile aşağıdaki komutları sırasıyla çalıştırıyoruz.
```
1] rm /etc/ssh/ssh_host_*
2] ssh-keygen -t rsa -b 4096 -f /etc/ssh/ssh_host_rsa_key -N ""
3] ssh-keygen -t ed25519 -f /etc/ssh/ssh_host_ed25519_key -N ""
4] awk '$5 >= 3072' /etc/ssh/moduli > /etc/ssh/moduli.tmp
5] mv /etc/ssh/moduli.tmp /etc/ssh/moduli
6] sed -i 's/^\#HostKey \/etc\/ssh\/ssh_host_\(rsa\|ed25519\)_key$/HostKey \/etc\/ssh\/ssh_host_\1_key/g' /etc/ssh/sshd_config
7] echo -e "KexAlgorithms curve25519-sha256,curve25519-sha256@libssh.org,diffie-hellman-group16-sha512,diffie-hellman-group18-sha512,diffie-hellman-group-exchange-sha256\nCiphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr\nMACs hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,umac-128-etm@openssh.com\nHostKeyAlgorithms ssh-ed25519,ssh-ed25519-cert-v01@openssh.com,sk-ssh-ed25519@openssh.com,sk-ssh-ed25519-cert-v01@openssh.com,rsa-sha2-256,rsa-sha2-512,rsa-sha2-256-cert-v01@openssh.com,rsa-sha2-512-cert-v01@openssh.com" > /etc/ssh/sshd_config.d/ssh-hardening.conf
```

Ayarları yaptıktan sonra "sudo sshd -t" ve ardından eğer bir hata mesajı görmez iseniz "sudo service sshd restart" komutu ile ayarları uygulayıp servisi baştan başlatın. Artık yeni belirlediğiniz port üzerinden ve sadece sizin gizli anahtarınız ile sunucuya bağlanabileceksiniz. Bağlanmak için ise;
```
ssh -i ~/.ssh/ANAHTAR_ISMINIZ SUNUCUDAKI_KULLANICI_ADINIZ@SUNUCU_IP_ADRESI -p PORT_NUMARASI # komutunu kullanabilirsiniz. Gelen bildirimlere Enter deyip devam edebilirsiniz.
```

## Son
- Yazar ~Wise
