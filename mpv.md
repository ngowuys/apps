# mpv: How to configure

- [How to install for Windows](#how-to-install-for-windows)
- [Scripts list](#scripts-for-mpv)
- [How to configure](#how-to-configure)
- [Local scripts](#local-scripts)
- [mpv folder structure](#mpv-folder-structure)
- [Credits](#credits)

## How to install for Windows

1. Download latest version of mpv at [zhongfly/mpv-winbuild](https://github.com/zhongfly/mpv-winbuild/releases) - I recommend using non v3 version
2. Extract .7z file and rename the folder you got to `mpv`
3. Go to `mpv\installer` folder and run `mpv-install.bat` file, set up mpv as default video player also
4. Run `updater.bat` file in `mpv` folder
5. Make sure you choose to download `ytdlp` and `ffmpeg` when run `updater.bat`
6. Add `mpv` folder to `PATH`

## Scripts list

| script                                                                           | note                           |
| -------------------------------------------------------------------------------- | ------------------------------ |
| [thumbfast](https://github.com/po5/thumbfast)                                    | Thumbnailer for mpv            |
| [autoload](https://github.com/mpv-player/mpv/blob/master/TOOLS/lua/autoload.lua) | Autoload next file in playlist |

## Local scripts

- longtitle.lua - Fix freeze error when video have long title

## How to configure

1. Move all folders to mpv folder
2. Install all scripts in [Scripts list](#scripts-list)

## mpv folder structure

- `mpv` - For `mpv.conf`
- `script-opts` - For script's config files
- `scripts` - For scripts

## Credits

- [voz.vn - Tổng hợp những addon chất cho Firefox PC (+Mobile)](https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/)
