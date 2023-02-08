#!/bin/bash

# Update
dnf update -y

# Set up repo
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo

# Require packages
dnf install -y epel-release
dnf install -y sudo procps util-linux-user ncurses wget unzip zip gzip htop neovim git fish
dnf groupinstall -y "Development Tools"
dnf install -y nodejs yarn

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
