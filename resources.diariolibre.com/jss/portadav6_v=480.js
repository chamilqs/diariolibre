var googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
var REFRESH_KEY = 'refresh';
var REFRESH_VALUE = 'true';
// Bloques de anuncios
googletag.defineSlot('/1659553/dl_160x600_skin_left', [160, 600], 'dl_160x600_skin_left_1').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_160x600_skin_right', [160, 600], 'dl_160x600_skin_right_1').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_160x600_skin_left_2', [160, 600], 'dl_160x600_skin_left_2').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_160x600_skin_right_2', [160, 600], 'dl_160x600_skin_right_2').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_970x250_1', [970, 90], 'dl_970x250_1').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_970x250_2', [[728, 90], [970, 250], [970, 90]], 'dl_970x250_2').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_970x250_3', [[728, 90],[970, 250], [970, 90]], 'dl_970x250_3').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_970x250_4', [[728, 90],[970, 250], [970, 90]], 'dl_970x250_4').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_970x250_5', [[728, 90],[970, 250], [970, 90]], 'dl_970x250_5').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_970x250_6', [[728, 90],[970, 250], [970, 90]], 'dl_970x250_6').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_300x600_1', [300, 600], 'dl_300x600_1').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_300x600_2', [300, 600], 'dl_300x600_2').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_300x250_1', [300, 250], 'dl_300x250_1').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_300x250_2', [300, 250], 'dl_300x250_2').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_1x1', [1, 1], 'dl_1x1').addService(googletag.pubads());
googletag.defineSlot('/1659553/dl_1x1_internacional', [1, 1], 'div-gpt-ad-1639578244472-0').addService(googletag.pubads());
    
  // Segundos que pasan hasta que el espacio se hace visible.
  var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 5;

  googletag.pubads().addEventListener('impressionViewable', function(event) {
    var slot = event.slot;
    if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
      setTimeout(function() {
        googletag.pubads().refresh([slot]);
      }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 12000);
    }
  });

  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();
  googletag.pubads().set('page_url', 'https://www.diariolibre.com');
  googletag.pubads().setTargeting('seccion', 'portada');
  googletag.pubads().setTargeting('tipocolocacion', 'Premium');
        if (typeof Storage !== "undefined") {
            var targetingParamStr = localStorage.getItem("bcDFPTargetingParams");
            if (targetingParamStr) {
                var targetingParameters = JSON.parse(targetingParamStr);
                // set page-level targeting parameters
                for (var i = 0; i < targetingParameters.length - 1; i++) {
                    googletag.pubads().setTargeting(targetingParameters[i].key, targetingParameters[i].value);
                }
            }
        }
  });

  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
  googletag.defineSlot('/1659553/dl_160x600_skin_left_3', [160, 600], 'dl_160x600_skin_left_3').addService(googletag.pubads());
  googletag.defineSlot('/1659553/dl_160x600_skin_right_3', [160, 600], 'dl_160x600_skin_right_3').addService(googletag.pubads());
  googletag.defineSlot('/1659553/dl_970x250_7', [[728, 90],[970, 250], [970, 90]], 'dl_970x250_7').addService(googletag.pubads());
  googletag.defineSlot('/1659553/dl_970x250_8', [[728, 90],[970, 250], [970, 90]], 'dl_970x250_8').addService(googletag.pubads());
  googletag.defineSlot('/1659553/dl_970x250_9', [[728, 90],[970, 250], [970, 90]], 'dl_970x250_9').addService(googletag.pubads());
  googletag.defineSlot('/1659553/dl_970x250_footer', [[728, 90],[970, 250], [970, 90]], 'dl_970x250_footer').addService(googletag.pubads());
  googletag.defineSlot('/1659553/dl_300x250_3', [300, 250], 'dl_300x250_3').addService(googletag.pubads());
  googletag.defineSlot('/1659553/dl_300x250_4', [300, 250], 'dl_300x250_4').addService(googletag.pubads());

    // Some examples of ways to enable below. Normally, only one of these
    // methods should be used.

  // A) Enable with defaults.
  googletag.pubads().enableLazyLoad();

  // B) Enable without lazy fetching. Additional calls override previous
  // ones.
  googletag.pubads().enableLazyLoad({fetchMarginPercent: -1});

  // C) Enable lazy loading with...
  googletag.pubads().enableLazyLoad({
  // Fetch slots within 5 viewports.
  fetchMarginPercent: 500,
  // Render slots within 2 viewports.
  renderMarginPercent: 200,
  // Double the above values on mobile, where viewports are smaller
  // and users tend to scroll faster.
  mobileScaling: 2.0
  });

  googletag.enableServices();
  });