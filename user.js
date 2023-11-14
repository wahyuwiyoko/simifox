// Startup
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");

// Web rendering
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);

// Experimental features
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);

// Language/locale
user_pref("intl.accept_languages", "en-US, en");

// Tab page
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");

// Auto updates & recommendations
user_pref("app.update.auto", false);
user_pref("app.update.background.scheduling.enabled", false);
user_pref("extensions.getAddons.showPane", false)
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);

// Telemetry
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.debugSlowSql", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.urlbar.eventTelemetry.enabled", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.identitypopup.recordEventTelemetry", false);
user_pref("services.sync.telemetry.maxPayloadCount", 0);
user_pref("services.sync.telemetry.submissionInterval", 0);
user_pref("beacon.enabled", false);

// Studies
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("dom.ipc.tabs.createKillHardCrashReports", false);

// Captive portal detection & network checks
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// Safe browsing services from Google
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.allowOverride", false);

// Network
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.http.sendRefererHeader", 0);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.gio.supported-protocols", "");
user_pref("network.file.disable_unc_paths", true);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("network.IDN_show_punycode", true);
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.ssl_tokens_cache_capacity", 32768);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.proxy.socks_remote_dns", true);

// Search bar
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.urlbar.quicksuggest.scenario", "history");
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);

// Password & autofill
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", true);
user_pref("editor.truncate_user_pastes", false);

// Disk cache & memory
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.max_entry_size", 153600);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("image.cache.size", 10485760);
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 2560000);
user_pref("media.cache_readahead_limit", 9000);
user_pref("media.cache_resume_threshold", 6000);

// HTTPS, SSL/TLS, OSCP, CERTS
user_pref("dom.security.https_first", true);
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.OCSP.enabled", 0); // enabled?
user_pref("security.OCSP.require", true);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("network.stricttransportsecurity.preloadlist", true);

// Headers/referers
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// Audio/video: WebRTC, WebGL, DRM
user_pref("media.peerconnection.enabled", true);
user_pref("webgl.disabled", false);
user_pref("media.autoplay.default", 5);
user_pref("media.eme.enabled", false);

// Downloads
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);

// Cookies
user_pref("privacy.partition.serviceWorkers", true);
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", true);

// GFX & hardware acceleration
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("gfx.x11-egl.force-enabled", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("layers.acceleration.disabled", false);
user_pref("layers.acceleration.force-enabled", true);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("widget.dmabuf-webgl.enabled", true);
user_pref("image.mem.decode_bytes_at_a_time", 131072);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.ffvpx.enabled", false);

// Geolocation
user_pref("geo.enabled", false);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.provider.use_geoclue", false);
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);

// Privacy features
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);

// Tracking protection
user_pref("browser.contentblocking.category", "standard");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);

// Mixed content + cross-site
user_pref("pdfjs.enableScripting", false);
user_pref("permissions.delegation.enabled", false);

// Mozilla
user_pref("browser.uitour.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("accessibility.force_disabled", 1);
user_pref("identity.fxaccounts.enabled", false);
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("layout.spellcheckDefault", 0);
user_pref("security.dialog_enable_delay", 0);

// Firefox UI
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("findbar.highlightAll", true);
user_pref("middlemouse.contentLoadURL", false);
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
user_pref("font.name.serif.x-western", "sans-serif");
user_pref("browser.uidensity", 1);
user_pref("apz.gtk.kinetic_scroll.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.toolbars.bookmarks.visibility", "never");
user_pref("browser.gesture.swipe.left", "");
user_pref("browser.gesture.swipe.right", "");

// Fullscreen
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

// URL bar
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.calculator", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.unitConversion.enabled", false);

// Services permissions
user_pref("network.trr.mode", 5);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("doh-rollout.disable-heuristics", true);

// Extensions
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("extensions.ui.dictionary.hidden", true);
user_pref("extensions.ui.locale.hidden", true);
user_pref("extensions.ui.sitepermission.hidden", true);
