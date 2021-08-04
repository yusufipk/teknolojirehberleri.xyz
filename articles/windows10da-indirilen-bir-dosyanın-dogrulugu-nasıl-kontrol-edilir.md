Windows 10'da İndirililen Bir Dosyanın Doğruluğu Nasıl Kontrol Edilir?

Bu yazımda sizlere Windows 10 platformunda indirilen bir dosyanın **checksum** kontrolünün nasıl yapılacağını göstereceğim.

# Checksum Nedir?
Checksum, bir dosyanın belirli hash algoritmasıyla şifrelenip elde edilmiş bir kimlik numarasıdır diyebiliriz. Örnek vermek gerekirse iki tane aynı isimde bir dosya olduğunu var sayalım. Boyutları da aynı olsun. Eğer iki dosyanın checksum verisi birbirine uyuşuyorsa bu iki dosya tamamen aynıdır diyebiliriz. Fakat checksum verileri birbirinden farklı ise içeriği aynı olsa bile orijinal dosyanın değiştirildiğini göstermektedir.

# Peki Nasıl Kontrol Edeceğim?
Örnek üzerinden gidelim. Mesela Archlinux indirmek istediniz ve indirdiğiniz dosyanın checksum kontrolünü yapmak istediniz.

- Öncelikle dosya gezgininden indirdiğiniz ISO dosyasının konumuna gelelim.
- Sonrasında konum çubuğuna *cmd* yazıp enter'a basalım.
![gezgin](https://i.ibb.co/7RJ7TjT/exp.png)
- Açılan CMD ekranında şu komutu girelim;
```
certutil -hashfile [dosyaismi] [algoritma]
```
![cmd](https://i.ibb.co/tLM3v7j/cmd.png)
- Örnek algoritmalar;
```
MD5
SHA1
SHA512
```
- Evet sonucumuzu aldık. Şimdi bunu 04.08.2021 tarihindeki Archlinux sitesinden aldığım veri ile karşılaştıralım
![cmd](https://i.ibb.co/z5gy8Q2/Screenshot-2021-08-04-at-18-31-21-Arch-Linux-Downloads.png)

Gördüğümüz gibi sonuçlar uyuşmaktadır. Bu da demek oluyor ki indirdiğimiz sunucudaki dosya ile bizim bilgisayarımızdaki dosya aynıdır, orijinaldir.

### Final
Yazım buraya kadardı. Teşekkür ederim.
Yazar: Berkin Çetin, [Github](https://github.com/darkao)

;tags: windows checksum 
