Bazı Yazılımları VPN'den Ayrı Tutma

VPN'den bahsedince bazı insanlar, verileri internet servis sağlayıcısı yerine VPN firmasına emanet etmenin çok farklı olmadığını söylüyor. Bu söylem çok hatalı olmamakla birlikte, neden ya hep ya hiç mantığı ile yaklaştığımız sorusunu aklıma getiriyor. İşletim sistemi seviyesinde VPN kullanırken, tüm sistem yazılımlarını VPN üzerinden kullanmak zorunda değilsiniz. Peki nasıl olacak? Bunu yapmanın elbette çok yolu vardır fakat ben, kendi kullandığım ve daha basit bulduğum bir yöntemden, yani SSH tünellemeden bahsedeceğim.

## Neler Gerekli?

- SSH bağlantısı kurulabilen bir modem (root kullanıcısı şart değil)
- VPN'den ayırmak istediğiniz yazılımın proxy desteği sunuyor olması

## SSH Tünellemesi

SSH tünelleme, kullandığınız işletim sistemine göre ufak tefek farklılıklar gösterebilir. Çalışma mantığı ise, bağlantıların bir tünel üzerinden yönlendirilmesidir. Oluşturacağımız bu yerel tüneli proxy olarak kullanıp, VPN'den ayrımak istediğimiz yazılımları bu proxy üzerinden çalıştıracağız. Örnek olarak, `ssh -D 8080 -fN kullanıcı@host -p port` komutu ile `8080` portunu kullanan bir SSH tüneli oluşturulabilir. Burada `-D` parametresi dinamik port yönlendirmesini, `-f` parametresi komutun arkaplanda çalışmasını ve `-N` parametresi de yönlendirme dışında başka bir komut çalıştırmayacağımızı bildirmemizi sağlıyor. Port olarak `8080` kullanmak yerine başka bir yerel port kullananilirsiniz. SSH tünel oluşturmak için kullanacağınız komutu bilgisayarınızın başlangıç programlarına ekleyerek, bilgisayar her açıldığında bağlantının otomatik olarak gerçekleşmesini sağlayabilirsiniz. DNS sorgularınızın SSH tünele yönlendirilmeyeceğini unutmayın.

## Otomatik Giriş

Normalde SSH bağlantısı gerçekleştirirken sizden şifre istenecektir. Her defasında şifre girmek istemiyorsanız öncelikle iki cihazda da `ssh-keygen` komutunu kullanarak anahtar çifti oluşturmanız gerekiyor. Daha sonra, `ssh-copy-id kullanıcı@host -p port` komutunu kullanarak cihazımızın public anahtarını, bağlantı kuracağımız cihazın `known_hosts` dosyasına eklemelisiniz. Bu işlemi yaparken yetkili kullanıcıda olmadığınızdan emin olun. İşlem tamamlandıktan sonra kendi kullanıcınız ile bağlanmak istediğiniz kullanıcı arasında SSH şifresi sorulmayacaktır.

## Proxy Ayarlaması

SSH tüneli oluşturduğumuza göre şimdi VPN'den ayırmak istediğimiz yazılımlara proxy ayarlaması yapalım. Ben örnek olarak Firefox'u ele alacağım. Firefox'un ayarlarına girip, genel sekmesinde ağ ayarlarına girin. Manuel proxy konfigürasyonunu aktif edin ve `SOCKS` kısmına `127.0.0.1` yazın, port kısmına ise oluşturduğunuz tünelin yerel port numarasını yazın ve değişiklikleri onaylayın. Tüm adımları tamamladıysanız artık Firefox, VPN'den ayrı çalışacaktır. İnternet kullanımımızın büyük bir kısmı web tarayıcıları üzerinde gerçekleşiyor, bu durumda Firefox örneğinin çok doğru bir örnek olmadığını düşünüyor olabilirsiniz. Peki o halde neden böyle bir örnek verdim? SSH tünel ile birlikte, birden fazla Firefox profili kullanarak, VPN kullanımını web sitesi bazında ayırabilirsiniz. Böylece çok kritik olduğunu düşündüğünüz bilgilerinizi, VPN firmasına emanet etmek zorunda kalmazsınız. Firefoxun profil yöneticisini `firefox -p` komutu ile açıp, yeni bir profil oluşturabilirsiniz.

![bir-yazilimi-vpnden-ayri-tutma](pictures/bazi-yazilimlari-vpnden-ayri-tutma.webp)

## Katkıda Bulunanlar
theguidingcrow

;tags: vpn ssh tünel