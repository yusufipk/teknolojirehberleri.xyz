# Monster laptoplarda Linux için Control Center ve sürücülerin kurulumu

Monster bilgisayarlarda Linux tarafında klavye aydınlatması ve fon kontroller olmuyordu. Control Center'da yoktu aynı zamanda.

Bilindiği gibi Monster bilgisayarları Clevo markası tarafından yapılıyor. Bu yüzden dünyada farklı markalarda Monster ile aynı bilgisayarları kullanıyor. Linux tarafına destek veren Clevo laptopları kullanan Tuxedo Computer Linux için driver ve Control Center programı yazmış.

Sorunsuz çalışıyor her şey. Hatta pildeyken ve prize bağlıyken farklı modları aktif edebiliyorsunuz.

Elimdeki laptop Monster Abra A5 v16.6 ve sorunsuz çalışıyor. Diğer modellerde denemedim.

Programın kurulumunu anlatan linki ve GitHub reposunu bırakıyorum buraya. İleride değişiklik olursa bakarsınız.

[Tuxedo-Control-Center Resmi Site Kurulumu Rehberi](https://www.tuxedocomputers.com/en/Infos/Help-and-Support/Instructions/Add-TUXEDO-Computers-software-package-sources.tuxedo)

[Tuxedo-Control-Center Github Repository](https://github.com/tuxedocomputers/tuxedo-control-center)

## Kurulum

### Debian (Ubuntu)

Öncelikle repoları apt listesine ekleyelim (Ubuntu 22.04 olduğu için jammy yazıyor. Farklı sürümleri kullananlar değiştirsin):

```
echo -e "deb https://deb.tuxedocomputers.com/ubuntu jammy main" | sudo tee -a /etc/apt/sources.list.d/tuxedocomputers.list
```

Daha sonra apt için gpg'i ekleyelim:

```
cd /etc/apt/trusted.gpg.d/
sudo wget https://deb.tuxedocomputers.com/0x54840598.pub.asc
```

Daha sonra repoları güncelleyip programı kuralım:
```
sudo apt-get update && sudo apt-get install tuxedo-control-center
```

### Red Hat (Fedora)

İsterseniz copr reposundan da kurabilirsiniz. Copr reposunda fedora 36 için daha güncellenmediğinden alttaki gibi kurdum ben.

[Copr Reposu](https://copr.fedorainfracloud.org/coprs/computerkid/tuxedo-control-center/)

Repoyu indirelim:
```
cd /etc/yum.repos.d/
sudo wget https://rpm.tuxedocomputers.com/opensuse/15.3/repo-tuxedo-computers.repo
```

gpg kontrolünü kapatalım. gpgkey güncel değil galiba hata veriyor:
```
sudo sed -i 's/gpgcheck=1/gpgcheck=0/' repo-tuxedo-computers.repo 
```

Daha sonra repoları güncelleyip programı kuralım:
```
sudo dnf update && sudo dnf install tuxedo-control-center
```

### Arch

Aur'dan paketi indirmek için Yay kullanacağız. O yüzden ilk baş yay'i kuralım.

Yay reposunu çekelim:
```
git clone https://aur.archlinux.org/yay.git
```

Klasöre girelim ve derleyelim:

```
cd yay && makepkg -si
```

Repoları ve paketleri güncelleyelim ve programı kuralım:
```
yay -Syu tuxedo-control-center-bin
``` 

Ve program hazır. Hayırlı olsun. Alta arayüz fotoğraflarını ekleyeceğim.

**Yazar: [@yucellmustafa](https://github.com/yucellmustafa)**

![1](https://user-images.githubusercontent.com/49123562/163852854-ff79ce94-b9d1-4b4c-8723-2c204b477347.png)
![2](https://user-images.githubusercontent.com/49123562/163852870-171211da-8086-49cb-800c-b3414e08ff88.png)
![3](https://user-images.githubusercontent.com/49123562/163852877-f8d01fd9-5184-466c-a201-1f0541b22970.png)
![4](https://user-images.githubusercontent.com/49123562/163852892-8fb2c533-e1ce-4c1f-b9a6-2a545ca0f571.png)
![5](https://user-images.githubusercontent.com/49123562/163852898-87e3fbb4-5b14-4f80-aa37-609ef8257a05.png)
![6](https://user-images.githubusercontent.com/49123562/163852902-69608f03-4336-44eb-b0f2-ed076865afa0.png)
