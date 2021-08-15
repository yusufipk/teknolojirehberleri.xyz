Dış İP Adresi Nasıl Sabitlenir

### Dış İP Adresi Nedir ? Neden Sabitleyelim ?

Her modem'in internete açılırken kullandıgı adrestir.

Genellikle servis saglayıncınızdan ek bir hizmet almadıysanız modeminiz her açılma kapanma işleminde otomatik olarak yeni bir adres alır.

Küçük bir web sitesi açmak,çoklu oyuncu destegi olan oyunları oynamak yada ip kameranıza uzaktan erişmek için adresinizi bilmeniz gerekmektedir. (tabiki port da açmaniz gerekir fakat bu konu ip sabitleme uzerine)

### Nasıl Sabitlerim ?

Öncelikle [bu siteden](https://www.nsupdate.info/account/register/) üyelik almaniz gerekmekte ardından ['Add host'](https://www.nsupdate.info/host/add/) seçeneginden kendi alt alan adınızı olusturmanız gerekmekte.

![1.webp](https://i.hizliresim.com/468lu93.png)

Bu kısımda önemli olan kısım 'Name' ve 'Domain' kısmıdır yani sabit alan adımız testaltalanadi.awsmppl.com şeklinde olucak.

![2.webp](https://i.hizliresim.com/40wbzhd.png)

Ardından ipmizi surekli güncellememiz için bu baglanti bize lazım olucak.

![3.webp](https://i.hizliresim.com/kb8rezd.png)

Gördügünüz gibi ip adresimiz alan adımızla eşleştirilmiş. Fakat eşleştirmeyi açmassak sonraki degişikliktede aynı ip de oluca için sorun çıkarıcaktır.

İP adresimizi eşitlemenin biçok yolu vardır.

## 1.Yol (Tarayıcı Üzerinden)

Alan adımızı verdiginde çıkan linki tarayıcımızdan açarak kolayca eşitleyebiliriz.

![4.webp](https://i.hizliresim.com/3ino821.png)

Linke gittigimizde görüldügü gibi ip adresimizin aynı oldugunu degiştirmeye gerek olmadıgını görüyoruz.

Lakin bu işlemi manuel olarak yapmanız gerekmekte uzaktan ip cam izlemek gibi işlemlerde sizi yarı yolda bırakabilir. (ihtiyacınız olur diye eklemek istedim)

## 2\. Yol (bash scripti uzerinden otomatik degişim)

Bu kısımda bize 2 program lazim olucak ; curl (`sudo apt install curl`) ve gnu screen (`sudo apt install screen`)

herhangi bir isimde .sh dosyası olarak aşşagıdaki kodu kaydetmeden önce tek degiştirmemiz gereken yer url ve sn cinsinden bekleme suresi ardından

`chmod a+x dosya.sh`

ile calıstırma yetkisi alıp ./dosya.sh ile çalıstırabiliriz.

```bash
#!/bin/bash
URL=
SURE=

 for (( ; ; )); do
curl $URL 
        sleep $SURE
done
```

Örnek Doldurma şekli

![4.webp](https://i.hizliresim.com/73btlae.png)
Ve çalıştıgını görüyörüz
![5.webp](https://i.hizliresim.com/d89tmg5.png)

fakat eger ssh baglantımızı koparırsak yada terminali kapatırsak çalışmayı durdurucaktır.

Bunun için screen uygulamasını kullanıcaz.

`screen` komutunu girdikten sonra yeni bir terminal ekranı gelicektir `./dosya.sh` şeklinde çalıstırdıktan sonra kapatabilirisniz.

```bash
omer@omer-mint:~$ screen
omer@omer-mint:~$ ./guncelle.sh
```

Peki nasıl geri getiricez ? İlk öncelikle `screen -ls` ile açık terminallerimizi kontrol edip id sini alıcaz

```bash
omer@omer-mint:~$ screen -ls
There is a screen on:
    27516.pts-1.omer-mint	(15-08-2021 17:46:14)	(Attached)
1 Socket in /run/screen/S-omer.
omer@omer-mint:~$ screen -r 27516.pts-1.omer-mint
```

ardından görüldügü gibi `screen -r id `

şeklinde eski ekranımıza geri donebilir durdurabilir yada durmunu izleyebilirsiniz.

## 3.Yol (başlangiçta çalıstırararak)

Bu kısım dagıtımdan dagıtıma yada masa üstü ortamına göre degişmekte 

ama yapmanız gereken şey`curl url`komutunu başlangiçta çalışmasını saglamak.

![6.webp](https://i.hizliresim.com/1vr3ztl.png)

### SON
[Github](https://github.com/omerscofield31) yazım yanlışları gibi şeyleri izin istemeden duzeltebilirisiniz.
Okuyanlara teşekkürler [bu link](https://kutt.it/AqSit5)e tıklayarak okudugunuzu belli edebilirsiniz (malum izleyici yok link ile sadece kişi sayısı alınacaktır zorunlu degildir. [kurallara aykırı ise silinebilir] )


