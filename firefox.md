# Firefox: How to configure

- [Optimize Firefox](#optimize-firefox)
- [Customize Firefox](#customize-firefox)
- [Others](#others)
- [Credits](#credits)

## Optimize Firefox

### Disable telemetry

1. Go to `about:support` and open your Firefox Profile Folder
2. Copy user.js file to that Firefox Profile Folder

### Disable Pocket

1. Go to `about:config`
2. Search for `extensions.pocket.enabled` and change value to `false`


### Delay render

1. Go to `about:config`
2. Search for `nglayout.initialpaint.delay` and change value to `2000`

### Use RAM to cache files

1. Go to `about:config`
2. Change those keys's value

| key                                 | value   |
|-------------------------------------|---------|
| browser.cache.disk.enable           | false   |
| browser.cache.memory.enable         | true    |
| browser.cache.memory.capacity       | 1048576 |
| browser.cache.memory.max_entry_size | 512000  |

## Customize Firefox

### Disable Inspect Accessibility Properties

1. Go to `about:config`
2. Search for `devtools.accessibility.enabled` and change value to `false`

### Apply userChrome.css

1. Goto `about:config`
2. Search for `toolkit.legacyUserProfileCustomizations.stylesheets` and change value to `true`
3. Go to `about:support` and open your Firefox Profile Folder
4. Move `chrome` folder to your Firefox Profile Folder

### Extensions list

- [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/) - Free password manager
- [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) - Remove tracking elements from URLs
- [External Application Button (WebExtension)](https://addons.mozilla.org/en-US/firefox/addon/external-application/) - Open in External application
- [FastForward](https://addons.mozilla.org/en-US/firefox/addon/fastforwardteam/) - Skip URL shorteners
- [Header Editor](https://addons.mozilla.org/en-US/firefox/addon/header-editor/) - Edit resquest/response header
- [TWP - Translate Web Pages](https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web/) - Translate web pages
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) - Ads blocker
- [Voz Next](https://addons.mozilla.org/en-US/firefox/addon/voz-next/) - For voz.vn

## Others

### Use Youtube mobile

1. Create new role with `Header Editor`

| option       | value                         |
|--------------|-------------------------------|
| Name         | What ever you want            |
| Rule type    | Modify request header         |
| Match type   | Domain                        |
| Header name  | user-agent                    |
| Header value | User agent of a mobile device |

2. Click `Save` and enjoy

### Open Youtube video in MPV

1. Make sure you installed [mpv](https://mpv.io) and follow [mpv config guide](https://github.com/ngowuys/apps/blob/main/mpv.md)
2. You'll need to install [External Application Button (WebExtension)](https://addons.mozilla.org/en-US/firefox/addon/external-application/) and it's [native client](https://github.com/andy-portmen/native-client/releases).
3. Open option page of extension then follow these steps

| option          | value                               |
|-----------------|-------------------------------------|
| Display Name    | What ever you want                  |
| Executable Name | mpv                                 |
| Arguments       | --ytdl [HREF]                       |
| Placement       | Toolbar button/Link Context or Both |

4. Click `Add application` and enjoy

## Credits
- [voz.vn - Tổng hợp những addon chất cho Firefox PC (+Mobile)](https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/)