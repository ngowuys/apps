# WSL: How to configure

- [Enable WSL](#enable-wsl)
- [Enable Virtual Machine feature](#enable-virtual-machine-feature)
- [Install Linux kernel update package](#install-linux-kernel-update-package)
- [Set WSL 2 as your default version](#set-wsl-2-as-your-default-version)
- [Import Rocky Linux image](#import-rocky-linux-image)
- [Credits](#credits)

## Enable WSL

Open PowerShell as Administrator and enter this command:

`dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`

## Enable Virtual Machine feature

Open PowerShell as Administrator, enter this command then restart your computer:

`dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

## Install Linux kernel update package

1. Download latest package: [WSL2 Linux kernel update package](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
2. Install the package

## Set WSL 2 as your default version

Open PowerShell as Administrator and enter this command:

`wsl --set-default-version 2`

## Import Rocky Linux image

1. Get Rocky Linux image: [Rocky Linux 9 Base x86_64](https://dl.rockylinux.org/pub/rocky/9/images/x86_64/Rocky-9-Container-Base.latest.x86_64.tar.xz)
2. Create directory for WSL to store it's file. Eg: `C:\rocky`
3. Import image to WSL

`wsl --import <machine-name> <path-to-vm-dir> <path-to/rocky-9-image.tar.xz> --version 2`

## Credits

- [Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install-manual)
- [Rocky Linux](https://docs.rockylinux.org/guides/interoperability/import_rocky_to_wsl/)
