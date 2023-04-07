# Firefox: How to configure

- [Optimize Firefox](#optimize-firefox)
- [Customize Firefox](#customize-firefox)
- [Others](#others)
- [Credits](#credits)

## Optimize Firefox

### about:config tweaks

| key                                                 | value   | note                                                                                       |
|-----------------------------------------------------|---------|--------------------------------------------------------------------------------------------|
| extensions.pocket.enabled                           | false   | Disable Pocket                                                                             |
| extensions.pocket.onSaveRecs                        | false   | Remove Save to Pocket                                                                      |
| extensions.screenshots.disabled                     | true    | Disable Firefox Screenshot                                                                 |
| nglayout.initialpaint.delay                         | 2000    | Delay render refresh to 2 seconds                                                          |
| gfx.webrender.all                                   | true    | Force enable WebRender                                                                     |
| browser.cache.disk.enable                           | false   | Disable disk cache                                                                         |
| browser.cache.memory.enable                         | true    | Enable RAM cache (enabled by default)                                                      |
| browser.cache.memory.capacity                       | 1048576 | Capacity for RAM cache 1048576 = 1GB (you can decrease/increase value to fit with your PC) |
| browser.cache.memory.max_entry_size                 | 512000  | Cache entry size Default: 5120 (you can decrease/increase value to fit with your PC)       |
| devtools.accessibility.enabled                      | false   | Disable Inspect Accessibility Properties                                                   |
| toolkit.legacyUserProfileCustomizations.stylesheets | true    | Enable userChrome                                                                          |

### Disable telemetry

1. Go to `about:support` and open your Firefox Profile Folder
2. Copy user.js file to that Firefox Profile Folder

### Apply userChrome.css

1. Go to `about:support` and open your Firefox Profile Folder
2. Move `chrome` folder to that Firefox Profile Folder


### Extensions list

| extension                                                                                                         | note                                              |
|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin)                                     | Ads blocker                                       |
| [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager)                            | Free password manager                             |
| [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls)                                             | Remove tracking elements from URLs                |
| [TWP - Translate Web Pages](https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web)                  | Translate webpages                                |
| [LibRedirect](https://addons.mozilla.org/en-US/firefox/addon/libredirect)                                         | Redirects Youtube, Medium... to privacy frontend  |
| [Voz Next](https://addons.mozilla.org/en-US/firefox/addon/voz-next)                                               | For voz.vn                                        |
| [Sponsor Block](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock)                                      | Skip sponsor video                                |
| [Header Editor](https://addons.mozilla.org/en-US/firefox/addon/header-editor)                                     | Edit resquest/response header                     |
| [External Application Button (WebExtension)](https://addons.mozilla.org/en-US/firefox/addon/external-application) | Open in External application                      |

## Others

### Custom uBlock filter lists

| list                                                                            | note                           |
|---------------------------------------------------------------------------------|--------------------------------|
| [ABPVN](https://abpvn.com/)                                                     | Ads filter list for Vietnamese |
| [Bypass Paywall](https://gitlab.com/magnolia1234/bypass-paywalls-clean-filters) | Bypass Paywall filter list     |
| [Facebook Blocklist](https://ethan-xd.github.io/)                               | Facebook ads filter list       |
| [Reddit Blocklist](https://ethan-xd.github.io/)                                 | Reddit ads filter list         |

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