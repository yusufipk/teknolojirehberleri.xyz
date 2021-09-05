# Arch Linux'ta Klavyeyi Türkçe Yapma

## Sorun
Arch Linux'ta "vconsole.conf" dosyasında Türkçe klavyeyi ayarlamama rağmen masaüstünde klavye dizilimim İngilizce oluyordu.

## Çözüm
**Uyarı: Bu işlemler Wayland'de çalışmamaktadır.**  

Öncelikle terminali açın ve şu komutu girin:
```
sudo nano /etc/X11/xorg.conf.d/00-keyboard.conf
```
Daha sonra alttaki kodları terminalde açılan programa yapıştırın.
```
Section "InputClass"
    Identifier "system-keyboard"
    MatchIsKeyboard "on"
    Option "XkbLayout" "tr"
    Option "XkbModel" "pc105"
EndSection
```
# Destek
Bu yazıyı okuduğunuz için teşekkürler.
#### Yazar: Ahmet Samet GÜLER (Discord: Skyfall#1515)
