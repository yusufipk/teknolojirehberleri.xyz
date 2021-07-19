Dinamik DNS

Eğer bir sabit IP hizmeti almıyorsanız IP numaranız belirli aralıklarla ya da modeminizi kapatıp açtığınızda değişiyordur. Yerel ağınızdaki bir cihaza ya da bir istemciye dışarıdan uzun süreli bir erişim sağlamak istediğinizde IP adresinizin değişiyor olması size sıkıntı yaşatabilir. Bu durumu internet servis sağlayıcınıza ilettiğinizde size sabit IP hizmeti almanızı önerecektir. Bunu tercih etmek istemeyebilirsiniz çünkü ekstradan para ödemeniz gerekir ve IP adresinizi değiştirmek istediğinizde bu kolay olmayacaktır. İşte bu nedenle size dinamik DNS'ten bahsetmek istedim. Dinamik DNS için birden fazla çözüm mevcut fakat ben No-IP'yi ele alacağım.

## Neler Gerekli?

- [no-ip.com](https://www.noip.com/) üzerinden bir hesap açmak
- Web sitesindeki noip-duc yazılımını ağda bulunan cihazlardan herhangi birine kurmak

## Konfigürasyon

Hesabınız üzerinde kendinize ücretsiz bir hostname oluşturduktan sonra cihazınıza kurmuş olduğunuz yazılım üzerinden sahip olduğunuz hesap ile oturum açma, kullanacağınız ağ bağdaştırıcısını ve senkronizasyon sıklığını ayarlama gibi temel konfigürasyonları yapmalısınız. İsteğe bağlı olarak, yazılımı sistem başlangıcında otomatik olarak çalışacak şekilde ayarlayabilirsiniz.

## Çalışma Mantığı

Cihazınıza kurmuş olduğunuz yazılım, sizin belirlemiş olduğunuz aralıklarla no-ip sunucularına baplanıp, oluşturmuş olduğunuz hostname için gelen bağlantı isteklerini o an için geçerli olan IP adresinize yönlendirir. Böylece IP adresiniz değişse bile aynı hostname'i kullanarak cihazlarınıza ya da istemcilerinize erişmeye devam edersiniz.

## Katkıda Bulunanlar
theguidingcrow

;tags: ip dns dinamik