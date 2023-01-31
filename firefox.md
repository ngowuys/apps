# Firefox: How to configure

- [Disable telemetry](#disable-telemetry)
- [Disable Pocket](#disable-pocket)
- [Use RAM to cache files](#use-ram-to-cache-files)
- [Apply Cascade theme](#apply-cascade-theme)
- [Extensions list](#extensions-list)

## Disable telemetry

1. Go to `about:support` and open your Firefox Profile Folder
2. Copy user.js file to that Firefox Profile Folder

## Disable Pocket

1. Go to `about:config`
2. Search for `extensions.pocket.enabled` and change value to `false`

## Use RAM to cache files

1. Go to `about:config`
2. Search for `browser.cache.disk.enable` and change value to `false`
3. Search for `browser.cache.memory.enable` and change value to `true`
4. Search for `browser.cache.memory.capacity` and set value to `1048576` - 1GB. You can increase it if you want
5. Search for `browser.cache.memory.max_entry_size` and set value to `512000` - Default is 5120

## Apply Cascade theme

1. Follow installation guide of [Cascade](https://github.com/andreasgrafen/cascade)
2. Copy/Move `custom.css` file to `includes` folder of [Cascade](https://github.com/andreasgrafen/cascade)
3. Import `custom.css` file at `userChrome.css` file

## Extensions list

- [Auto Tab Discard](https://addons.mozilla.org/en-US/firefox/addon/auto-tab-discard/) - Unload inactivity tabs
- [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/) - Free password manager
- [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) - Remove tracking elements from URLs
- [Enhancer for YouTube™](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/) - Customize Youtube
- [FastForward](https://addons.mozilla.org/en-US/firefox/addon/fastforwardteam/) - Skip URL shorteners
- [SponsorBlock](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/) - Skip sponsors in Youtube videos
- [TWP - Translate Web Pages](https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web/) - Translate web pages
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) - Ads blocker
- [Voz Next](https://addons.mozilla.org/en-US/firefox/addon/voz-next/) - For Voz.vn
