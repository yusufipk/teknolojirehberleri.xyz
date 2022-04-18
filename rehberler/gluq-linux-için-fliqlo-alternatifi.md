# Gluq : Linux için Fliqlo alternatifi (forked Gluqlo)

![gluq](https://user-images.githubusercontent.com/49123562/163304528-1ecc96d9-5c96-46e2-b4f1-4ea5883c1489.png)

[noflipqlo](https://github.com/bhm/noflipqlo) ile başlayıp [Gluqlo](https://github.com/alexanderk23/gluqlo) olarak devam eden ekran koruyucu projesine katkıda bulunduğum versiyondur.

Komut dosyası [alvinalexander.com](https://alvinalexander.com/source-code/ubuntu-shell-script-screensaver-rotate-images/) adresinden gelmektedir.

Katkınız için teşekkürler : [discover2](https://github.com/discover02)

**Amacı, xscreensaver olmadan gluqlo kullanmaktır.**

## Kurulum

Bağımlılıkları yükleyelim (Fedora):
```
sudo dnf update && sudo dnf install g++ sdl12-compat-devel SDL_ttf-devel SDL_gfx-devel xvinfo
```
```
wget https://download.copr.fedorainfracloud.org/results/alonid/xprintidle/epel-7-x86_64/00169163-xprintidle/xprintidle-0.1-2.el7.centos.x86_64.rpm

sudo dnf install xprintidle-0.1-2.el7.centos.x86_64.rpm -y
```

Ubuntu:
```
sudo apt-get update && sudo apt-get install build-essential libsdl1.2-dev libsdl-ttf2.0-dev libsdl-gfx1.2-dev libx11-dev xvinfo xprintidle
```
**Not: Wayland kullananlar için ```xprintidle``` bağımlılığına gerek yoktur.**

Repoyu çekelim ve ana klasöre girelim:
```
git clone https://github.com/yucellmustafa/gluq
cd gluq
```

Derleyelim ve yükleyelim:
```
make && sudo make install
```

Silmek isterseniz :
```
sudo make uninstall
```

## Kullanım

```
gluqstart -t <bekleme süresi> -p "parametreler" -l -w
```
Örneğin :
```
gluqstart -t 120 -p "-ampm -anykeyclose" -l
```
Parametreler :
```
-t <bekleme süresi> Bekleme süresi (saniye)
-p "parametreler"   Gluqlo parametreleri
-w                  Wayland için (sadece gnome)
-l                  Ekran kilidi
```

-p "parametreler":
```
-ampm           12 saat formatı için (AM/PM)
-noflip         Çevirme animasyonu kapalı
-anykeyclose    Fare hareketi veya bir tuşa basıldığında uygulamayı kapatma
-leadingzero    Saati her zaman iki basamakla göster
-w              Özel genişlik (1920)
-h              Özel yükseklik (1080)
-r              WxH formatında özel çözünürlük (1920x1080)
-s              Özel ekran ölçeği - boyutlandırma(0.5 - 1.5)
```
Ekran koruyucuyu sistem başlangıçınca çalıştırmak için başlatıcı ekleyelim

(Exec kısmını yukarıdan kişisel olarak değiştiriniz)

```
echo -e '[Desktop Entry]
Name=gluqstart
Comment=gluq autostarter
Exec=gluqstart -t 300 -l -p "-leadingzero -anykeyclose"
Type=Application
Terminal=false
Hidden=false' | tee $HOME/.config/autostart/gluqstart.desktop
```

**Yazar: [@yucellmustafa](https://github.com/yucellmustafa)**

![Screenshot from 2022-04-18 22-59-07](https://user-images.githubusercontent.com/49123562/163868911-8e7e48e8-c072-4812-b749-89ced43cbc43.png)