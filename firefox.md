# Firefox: How to configure

- [Optimize Firefox](#optimize-firefox)
- [Customize Firefox](#customize-firefox)
- [Others](#others)
- [Credits](#credits)

## Optimize Firefox

### Disable telemetry + about:config tweaks

1. Go to `about:support` and open your Firefox Profile Folder
2. Copy user.js file to that Firefox Profile Folder (You can modify `about:config` tweaks at the end of `user.js` file)

### Apply userChrome.css

1. Go to `about:support` and open your Firefox Profile Folder
2. Move `chrome` folder to that Firefox Profile Folder

### Extensions list

| extension                                                                                         | note                          |
| ------------------------------------------------------------------------------------------------- | ----------------------------- |
| [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin)                     | Ads blocker                   |
| [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager)            | Free password manager         |
| [TWP - Translate Web Pages](https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web/) | Translate webpages            |
| [Voz Next](https://addons.mozilla.org/en-US/firefox/addon/voz-next)                               | For voz.vn                    |
| [Sponsor Block](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock)                      | Skip sponsor video            |
| [Header Editor](https://addons.mozilla.org/en-US/firefox/addon/header-editor)                     | Edit resquest/response header |

## Others

### Custom uBlock filter lists

| list                                                                                                | note                           |
| --------------------------------------------------------------------------------------------------- | ------------------------------ |
| [ABPVN](https://abpvn.com/)                                                                         | Ads filter list for Vietnamese |
| [Actually Legitimate URL Shortener Tool](https://github.com/DandelionSprout/adfilt/discussions/163) | Remove tracking param          |
| [Bypass Paywall](https://gitlab.com/magnolia1234/bypass-paywalls-clean-filters)                     | Bypass Paywall filter list     |
| [Facebook Blocklist](https://ethan-xd.github.io/)                                                   | Facebook ads filter list       |
| [Reddit Blocklist](https://ethan-xd.github.io/)                                                     | Reddit ads filter list         |

### Use Youtube mobile

1. Create new role with `Header Editor`

| option       | value                         |
| ------------ | ----------------------------- |
| Name         | What ever you want            |
| Rule type    | Modify request header         |
| Match type   | Domain                        |
| Header name  | user-agent                    |
| Header value | User agent of a mobile device |

2. Click `Save` and enjoy

## Credits

- [voz.vn - Tổng hợp những addon chất cho Firefox PC (+Mobile)](https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/)
