# Fare Tekerleği İleri Geri Hareketini Tetikliyor Sorunu
Bugün sizlere başıma gelen bir olayı ve bunun çözümünü anlatmak istiyorum.

**NOT:** Eğer xorg kullanmıyorsanız üzgünüm ama bu post xorg için.

## Hikaye
Bugün merakıma yenik düşüp sanal makineye [FreeBSD](https://www.freebsd.org) işletim sistemini kurdum. Başta herşey çok güzel giderken masaüstü ortamı kurup firefoxu kurunca bir problemi farkettim. Örnek olarak bir arama yapıp sonuçlara bakmak istediğimde tekerleği aşağıya yuvarladığımda bazen sebepsiz yere sayfadan geri atıyordu. Başta küçük birşey diyip umursamadım ama yaklaşık 1-2 saat içinde ne kadar sinir bozucu bir problem olduğunu görmeye başladım.

## Asıl Sorun
İnternette kısa bir gezinme sonucu bu problemi yaşayan tek kişi olmadığını, hatta sadece FreeBSD değil Linux dağıtımlarınlarındada böyle bir sorun olabildiğini öğrendim. Bunun için terminali açıp `xev` komutunu yazdım. (Bu komut nedir derseniz özet olarak sizin pencerelerinizi izleyen ve bunları çıktı olarak konsola atan bir araç denebilir). Komutu yazıp tekerleğimi üst ve aşağıya doğru hareket ettirince ara sıra yanlış tuşlara basıldığını fark ettim. Kullandığım farede web sayfalarında ileri-geri gitmek için iki tane makro bulunuyor ve nedense tekerleği hareket ettirirkende bazen bu tuşlara basıyordu. Alta sahibi benim olmadığım virtual box forumundan örnek bir fotoğraf bırakıyorum:
![Görsel 1](https://i.imgur.com/kWEguCk.jpg)

## Çözüm
Çözüm ise aslında gayet basit. Eğer bu problem ile uğraşan biri iseniz:
- Home klasörü içinde `.Xmodmap` adında bir dosya açın. (`touch ~/.Xmodmap`)
- Bu dosyanın içine `pointer = 1 2 3 4 5 6 7 0 0 0` yazıp kaydedin. (Böylece artık 8-10 arasındaki tuşları devre dışı bırakmış oluyoruz.)
- Ve `xmodmap ~/.Xmodmap` yazıp komutu çalıştırın. (Bir postta gördüğüme göre çoğu masaüstü ortamı ve pencere yöneticisi zaten açılırken bu komutu çalıştırdığı için reboot atıp yine aynı sonucu alabilirsiniz.)

Tebrikler! çok büyük bir olasılık ile sorununuz çözülmüş olucaktır.

## Bitiriş
Buraya ek kaynaklar ve kendi hesabımı bırakıyorum.

### Yazar
Bu yazı 5elenay tarafından 18 ağustos 2021 tarihinde yazılmıştır.
- [Website](https://5elenay.me)
- [GitHub](https://github.com/5elenay)

### Kaynaklar
- [Örnek Resim Alınan Forum Postu](https://forums.virtualbox.org/viewtopic.php?f=4&t=80912)
- [Stack Exchange Üzerindeki Post](https://unix.stackexchange.com/questions/20550/how-to-disable-the-forward-back-buttons-on-my-mouse)