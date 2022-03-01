# Windows Platformunda BalenaEtcher ile Yazılmış USB Bellek Nasıl Kurtarılır.

### BalenaEtcher USB Belleğimi Bozdu mu?

BalenaEtcher kullanıp daha sonra Windows sisteminizin USB belleğinizi okumadığını farketmiş olabilirsiniz. Bunun sebebi programın Windows'un okuyamadığı bir formatta yazmasıdır. Aşağıdaki adımları uygulayarak USB belleğinize tekrardan kavuşabilirsiniz.

## Başlayalım
Öncelikle cmd'yi açarak *"DISKPART.EXE"* yazıp enter'a basıyoruz.

![](https://assets.balena.io/blog-common/archive/2020/07/image10.png)

Daha sonra `list disk` yazarak makinemize bağlı diskleri görüntülüyoruz.

![](https://assets.balena.io/blog-common/archive/2020/07/image1.png)

Bu kısımda karşımıza gelen listeden USB belleğimizin olduğu diskin ID'sini buluyoruz "disk 1" şeklinde. `select disk n` komutunu çalıştırıyoruz (n yerine diskinizin numerik ID'si gelecek.)

Diskimizi seçtikten sonra `clean` komutu ile diski temizliyoruz.

Diskimizi şuan temizlemiş bulunmaktayız fakat daha biçimlendirmedik. Sırasıyla komutları yazalım;

* `create partition primary`
* `select partition 1`
* `format quick`

![](https://assets.balena.io/blog-common/archive/2020/07/image2-1.png)

Eğer harfiyen uygularsak USB belleğimizi tekrardan istediğimiz gibi kullanabiliriz. 

### Son
Yazar: [darkjon](https://github.com/darkao)

Yararlandığım [kaynak](https://www.balena.io/blog/did-etcher-break-my-usb-sd-card/)
