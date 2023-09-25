// Telemetry
user_pref('datareporting.policy.dataSubmissionEnabled', false);
user_pref('datareporting.healthreport.uploadEnabled', false);
user_pref('toolkit.telemetry.unified', false);
user_pref('toolkit.telemetry.enabled', false); // see [NOTE]
user_pref('toolkit.telemetry.server', 'data:,');
user_pref('toolkit.telemetry.archive.enabled', false);
user_pref('toolkit.telemetry.newProfilePing.enabled', false); // [FF55+]
user_pref('toolkit.telemetry.shutdownPingSender.enabled', false); // [FF55+]
user_pref('toolkit.telemetry.updatePing.enabled', false); // [FF56+]
user_pref('toolkit.telemetry.bhrPing.enabled', false); // [FF57+] Background Hang Reporter
user_pref('toolkit.telemetry.firstShutdownPing.enabled', false); // [FF57+]
user_pref('toolkit.telemetry.coverage.opt-out', true); // [HIDDEN PREF]
user_pref('toolkit.coverage.opt-out', true); // [FF64+] [HIDDEN PREF]
user_pref('toolkit.coverage.endpoint.base', '');
user_pref('browser.ping-centre.telemetry', false);
user_pref('browser.newtabpage.activity-stream.feeds.telemetry', false);
user_pref('browser.newtabpage.activity-stream.telemetry', false);

// Studies
user_pref('app.shield.optoutstudies.enabled', false);
user_pref('app.normandy.enabled', false);
user_pref('app.normandy.api_url', '');

// Crash Report
user_pref('breakpad.reportURL', '');
user_pref('browser.tabs.crashReporting.sendReport', false); // [FF44+]
user_pref('browser.crashReports.unsubmittedCheck.autoSubmit2', false); // [DEFAULT: false]

// Other
user_pref('captivedetect.canonicalURL', '');
user_pref('network.captive-portal-service.enabled', false); // [FF52+]
user_pref('network.connectivity-service.enabled', false);
user_pref('_user.js.parrot', "0400 syntax error: the parrot's passed on!");
user_pref('browser.safebrowsing.downloads.remote.enabled', false);

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
user_pref('nglayout.initialpaint.delay_in_oopif', 2000);

// Disable Disk cache
user_pref('browser.cache.disk.enable', false);

// Enable RAM cache
user_pref('browser.cache.memory.enable', true);
user_pref('browser.cache.memory.capacity', 1048576);
user_pref('browser.cache.memory.max_entry_size', 512000);

// Optimize RAM cache by disable RCWN
user_pref('network.http.rcwn.enabled', false);

// Remove space at end
user_pref('layout.word_select.eat_space_to_next_word', false);

// Enable userChrome.css support
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);

// Cookies banner
user_pref('cookiebanners.service.mode', 2);
user_pref('cookiebanners.service.mode.privateBrowsing', 2);
user_pref('cookiebanners.bannerClicking.enabled', true);
user_pref('cookiebanners.cookieInjector.enabled', true);

// Disable OSCP
user_pref('security.OCSP.enabled', false);

// Use CrLite instead of OSCP
user_pref('security.remote_settings.crlite_filters.enabled', true);
user_pref('security.pki.crlite_mode', 2);

// TTR config
user_pref('network.trr.uri', 'https://ultralow.dns.nextdns.io/1ef3ce');
user_pref('network.trr.custom_uri', 'https://ultralow.dns.nextdns.io/1ef3ce');
user_pref('network.dns.skipTRR-when-parental-control-enabled', false);
user_pref('network.trr.async_connInfo', true);
user_pref('network.trr.confirmation_telemetry_enabled', false);
user_pref('network.trr.disable-ECS', false);
user_pref('network.trr.mode', 3);

// Enable punycode
user_pref('network.IDN_show_punycode', true);

// Enable Early Hints
user_pref('network.early-hints.enabled', true);
user_pref('network.early-hints.preconnect.enabled', true);
user_pref('network.early-hints.preconnect.max_connections', 20);

// Better scroll
user_pref('apz.overscroll.enabled', true);
user_pref('general.smoothScroll', true);
user_pref('mousewheel.default.delta_multiplier_y', 275);

// Chrome-like scroll bar
user_pref('widget.non-native-theme.scrollbar.style', 2);

// Enable CSS overflow overlay
user_pref('layout.css.overflow-overlay.enabled', true);
