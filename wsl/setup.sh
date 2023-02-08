#!/bin/bash

# Update
dnf update -y

# Set up repo
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -

# Require packages
dnf install -y epel-release
dnf install -y ncurses wget unzip zip gzip htop neovim procps git util-linux-user fish
dnf groupinstall -y "Development Tool"
dnf install -y nodejs 

# Enable systemd
cat > "/etc/wsl.conf" << END
[boot]
systemd=true
END

clear
echo "#####################"
echo
echo "# Should be done"
echo "# You can restart your computer"
echo "# Or shutdown WSL to see changes"
echo
echo "#####################"
