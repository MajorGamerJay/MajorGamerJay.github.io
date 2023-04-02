# Arch linux installation guide

This is a cleaner and a faster guide in installing arch-linux on your system. Note that you should not do everything exactly in this guide, rather just follow the instruction and modify as you wish

## Please Read:

If I make any mistake in improving this guide, do send an email to `majorgamerjay@protonmail.com` issues and help me fix it! Thanks. This guide is divided in three stages/parts:

- **Stage 1** - Base installation
- **Stage 2** - Preparing accounts and other things for basic use
- **Stage 3** - Installing graphical interfaces and X server (WIP)

## Note

- `/dev/sdX | X` -> preferred disk. check using `lsblk`
- Examples: `/dev/sda1` for root & `/dev/sda2` for boot partitions respectively.

## Stage 1:

### Do the proper partitioning in cfdisk

- 1 partition for `root` of any reasonable size (i.e 20GB) \[/dev/sdX1\]
- 1 partition for `boot` of any reasonable size (i.e 200MB) \[/dev/sdX2\]

```
cfdisk /dev/sdX 
```

### Format The partitions

```
mkfs.ext4 /dev/sdX1
mkfs.vfat -F 32 /dev/sdX2
```

### Change mirrorlist on pacman (optional)

This makes your downloading speed from package manager super fast!

```
nano /etc/pacman.d/mirrorlist
```

Put your favorite mirror on top of all the mirrors or delete all other mirrors than your favorite!

### Mount Root and boot drives

```
mount /dev/sdX1 /mnt
mkdir /mnt/boot
mount /dev/sdX2 /mnt/boot
```

### Install arch-base packages, linux-kernel & linux-firmware driver and other necessary things

```
pacstrap /mnt base linux linux-firmware base-devel netctl dialog grub efibootmgr dhcpcd
```

### Generate FSTAB

```
genfstab -U /mnt >> /mnt/etc/fstab
```

### Chroot into Arch (/)

```
arch-chroot /mnt
```

### Update Hostname

```
echo HOSTNAME >> /etc/hostname
```

replace HOSTNAME with your preferred Hostname

### Update Hosts File

- Install nano (or your favorite text editor): pacman -Syy nano --noconfirm
- Edit /etc/hosts by executing nano /etc/hosts and add the following:-

```
127.0.0.1    localhost    HOSTNAME
            ::1          localhost    HOSTNAME
```

Replace HOSTNAME with your hostname

### Update resolv.conf

```
nano /etc/resolv.conf
```

Add `nameserver 1.1.1.1`

You could change 1.1.1.1 with your favorite DNS resolver

### Update locale

```
nano /etc/locale.gen and uncomment (remove # before) your locale, must uncomment en_US.UTF-8 UTF-8 locale-gen
```

### Setup Bootloader (GRUB)

```
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
grub-mkconfig -o /boot/grub/grub.cfg
```

If there are no errors and the kernels are detected, then you are ready to reboot!

### Set root password

```
passwd 
```

You are now ready to reboot but it is recommended to do it up to stage 2.

## Stage 2:

If you haven't rebooted, then reboot now and then enter root account. We will now make a new user account and add it to the wheel group.

### Make user account:

Make user account with home directory 

```
useradd -m <username>
```

### Change user password

```
passwd <username>
```

### Add users to the wheel group

The wheel group is the `sudo` group, it is the group of users that can perform root/sudo operations using `sudo` or `doas` or `su` or whatever else.

To ensure that `sudo` is installed,

```
pacman -S sudo
```

Then edit the sudoers file:
```
visudo
```

If it shows an error about some editors not found, just do 
```
EDITOR=<your favorite editor> visudo
```

Then, move to the line where it says

```
## Uncomment to allow members of group wheel to execute any command
# %wheel ALL=(ALL) ALL
```

Uncomment it, remove the # before %wheel Now, users in wheel group can execute any commands in sudo but will be asked an password to do that.

```
usermod -a -G wheel <username>
```

Now the given user will be in the wheel group and now can execute any commands.

This is the end of stage 2, you can now just `exit` and then log in to your non-root user and can have fun doing anything! :D
