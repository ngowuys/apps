/** TELEMETRY ***/
/* 0330: disable new data submission [FF41+]
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
user_pref('datareporting.policy.dataSubmissionEnabled', false);
/* 0331: disable Health Reports
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical... data ***/
user_pref('datareporting.healthreport.uploadEnabled', false);
/* 0332: disable telemetry
 * The "unified" pref affects the behavior of the "enabled" pref
 * - If "unified" is false then "enabled" controls the telemetry module
 * - If "unified" is true then "enabled" only controls whether to record extended data
 * [NOTE] "toolkit.telemetry.enabled" is now LOCKED to reflect prerelease (true) or release builds (false) [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 ***/
user_pref('toolkit.telemetry.unified', false);
user_pref('toolkit.telemetry.enabled', false); // see [NOTE]
user_pref('toolkit.telemetry.server', 'data:,');
user_pref('toolkit.telemetry.archive.enabled', false);
user_pref('toolkit.telemetry.newProfilePing.enabled', false); // [FF55+]
user_pref('toolkit.telemetry.shutdownPingSender.enabled', false); // [FF55+]
user_pref('toolkit.telemetry.updatePing.enabled', false); // [FF56+]
user_pref('toolkit.telemetry.bhrPing.enabled', false); // [FF57+] Background Hang Reporter
user_pref('toolkit.telemetry.firstShutdownPing.enabled', false); // [FF57+]
/* 0333: disable Telemetry Coverage
 * [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/ ***/
user_pref('toolkit.telemetry.coverage.opt-out', true); // [HIDDEN PREF]
user_pref('toolkit.coverage.opt-out', true); // [FF64+] [HIDDEN PREF]
user_pref('toolkit.coverage.endpoint.base', '');
/* 0334: disable PingCentre telemetry (used in several System Add-ons) [FF57+]
 * Defense-in-depth: currently covered by 0331 ***/
user_pref('browser.ping-centre.telemetry', false);
/* 0335: disable Firefox Home (Activity Stream) telemetry ***/
user_pref('browser.newtabpage.activity-stream.feeds.telemetry', false);
user_pref('browser.newtabpage.activity-stream.telemetry', false);

/** STUDIES ***/
/* 0340: disable Studies
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies ***/
user_pref('app.shield.optoutstudies.enabled', false);
/* 0341: disable Normandy/Shield [FF60+]
 * Shield is a telemetry system that can push and test "recipes"
 * [1] https://mozilla.github.io/normandy/ ***/
user_pref('app.normandy.enabled', false);
user_pref('app.normandy.api_url', '');

/** CRASH REPORTS ***/
/* 0350: disable Crash Reports ***/
user_pref('breakpad.reportURL', '');
user_pref('browser.tabs.crashReporting.sendReport', false); // [FF44+]
// user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]
/* 0351: enforce no submission of backlogged Crash Reports [FF58+]
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send backlogged crash reports  ***/
user_pref('browser.crashReports.unsubmittedCheck.autoSubmit2', false); // [DEFAULT: false]

/** OTHER ***/
/* 0360: disable Captive Portal detection
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy ***/
user_pref('captivedetect.canonicalURL', '');
user_pref('network.captive-portal-service.enabled', false); // [FF52+]
/* 0361: disable Network Connectivity checks [FF65+]
 * [1] https://bugzilla.mozilla.org/1460537 ***/
user_pref('network.connectivity-service.enabled', false);

/*** [SECTION 0400]: SAFE BROWSING (SB)
    SB has taken many steps to preserve privacy. If required, a full url is never sent
    to Google, only a part-hash of the prefix, hidden with noise of other real part-hashes.
    Firefox takes measures such as stripping out identifying parameters and since SBv4 (FF57+)
    doesn't even use cookies. (#Turn on browser.safebrowsing.debug to monitor this activity)
    [1] https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
    [2] https://wiki.mozilla.org/Security/Safe_Browsing
    [3] https://support.mozilla.org/kb/how-does-phishing-and-malware-protection-work
    [4] https://educatedguesswork.org/posts/safe-browsing-privacy/
 ***/
user_pref('_user.js.parrot', "0400 syntax error: the parrot's passed on!");
/* 0401: disable SB (Safe Browsing)
 * [WARNING] Do this at your own risk! These are the master switches
 * [SETTING] Privacy & Security>Security>... Block dangerous and deceptive content ***/
// user_pref("browser.safebrowsing.malware.enabled", false);
// user_pref("browser.safebrowsing.phishing.enabled", false);
/* 0402: disable SB checks for downloads (both local lookups + remote)
 * This is the master switch for the safebrowsing.downloads* prefs (0403, 0404)
 * [SETTING] Privacy & Security>Security>... "Block dangerous downloads" ***/
// user_pref("browser.safebrowsing.downloads.enabled", false);
/* 0403: disable SB checks for downloads (remote)
 * To verify the safety of certain executable files, Firefox may submit some information about the
 * file, including the name, origin, size and a cryptographic hash of the contents, to the Google
 * Safe Browsing service which helps Firefox determine whether or not the file should be blocked
 * [SETUP-SECURITY] If you do not understand this, or you want this protection, then override this ***/
user_pref('browser.safebrowsing.downloads.remote.enabled', false);
// user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth
/* 0404: disable SB checks for unwanted software
 * [SETTING] Privacy & Security>Security>... "Warn you about unwanted and uncommon software" ***/
// user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
// user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
/* 0405: disable "ignore this warning" on SB warnings [FF45+]
 * If clicked, it bypasses the block for that session. This is a means for admins to enforce SB
 * [TEST] see https://github.com/arkenfox/user.js/wiki/Appendix-A-Test-Sites#-mozilla
 * [1] https://bugzilla.mozilla.org/1226490 ***/
// user_pref("browser.safebrowsing.allowOverride", false);

/* 
[CUSTOM] Customize by wuys
*/

// Disable Pocket
user_pref('extensions.pocket.enabled', false);
user_pref('extensions.pocket.onSaveRecs', false);

// Disable Screenshot
user_pref('extensions.screenshots.disabled', true);

// Disable DevTools Accessibility
user_pref('devtools.accessibility.enabled', false);

// Disable List all tabs & Firefox Views
user_pref('browser.tabs.tabmanager.enabled', false);
user_pref('browser.tabs.firefox-view', false);

// Enable WebRender
user_pref('gfx.webrender.enabled', true);
user_pref('gfx.webrender.all', true);

// Delay render time
user_pref('nglayout.initialpaint.delay', 2000);

// Disable Disk cache
user_pref('browser.cache.disk.enable', false);

// Enable RAM cache
user_pref('browser.cache.memory.enable', true);
user_pref('browser.cache.memory.capacity', 1048576);
user_pref('browser.cache.memory.max_entry_size', 512000);

// Remove space at end
user_pref('layout.word_select.eat_space_to_next_word', false);

// Enable userChrome.css support
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);

// Cookies banner
user_pref('cookiebanners.service.mode', 2);
user_pref('cookiebanners.service.mode.privateBrowsing', 2);

// Disable OSCP
user_pref('security.OCSP.enabled', false);

// Use CrLite instead of OSCP
user_pref('security.remote_settings.crlite_filters.enabled', true);
user_pref('security.pki.crlite_mode', 2);

// Enable ECH
user_pref('network.dns.echconfig.enabled', true);
user_pref('network.dns.echconfig.fallback_to_origin_when_all_failed', false);
user_pref('network.dns.http3_echconfig.enabled', true);
user_pref('security.tls.ech.disable_grease_on_fallback', false);
user_pref('security.tls.ech.grease_http3', true);
user_pref('security.tls.ech.grease_probability', 100);

// Optimize HTTP/3
user_pref('network.http.http3.send_background_tabs_deprioritization', true);
user_pref('network.http.http3.version_negotiation.enabled', true);
user_pref('security.tls.ech.grease_http3', true);

// Force use HTTP/3 and QUICv2
user_pref(
	'network.http.http3.alt-svc-mapping-for-testing',
	'doh3.dns.nextdns.io;h3=":443"; quicv="6b3343cf,1"'
);

// TTR config
user_pref('network.trr.uri', 'https://doh3.dns.nextdns.io/');
user_pref('network.trr.custom_uri', 'https://doh3.dns.nextdns.io/');
user_pref('network.dns.skipTRR-when-parental-control-enabled', false);
user_pref('network.trr.async_connInfo', true);
user_pref('network.trr.confirmation_telemetry_enabled', false);
user_pref('network.trr.disable-ECS', false);
user_pref('network.trr.mode', 3);

// Unlimited DNS Cache Entries
user_pref('network.dnsCacheEntries', -1);
