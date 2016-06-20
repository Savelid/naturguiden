/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Sets app default base URL
  app.baseUrl = '/';

  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    //app.baseUrl = 'naturguiden';
  }

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
      Polymer.dom(document).querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
    setHeaderProperties();
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Main area's paper-scroll-header-panel custom condensing transformation of
  // the appName in the middle-container and the bottom title in the bottom-container.
  // The appName is moved to top and shrunk on condensing. The bottom sub title
  // is shrunk to nothing on condensing.
  window.addEventListener('paper-header-transform', function(e) {
    if (app.desktop) {

      var middleContainer = Polymer.dom(document).querySelector('#mainToolbar .middle-container');
      var naturguidenName = Polymer.dom(document).querySelector('#mainToolbar .naturguiden_name');
      var detail = e.detail;
      var heightDiff = detail.height - detail.condensedHeight;
      var yRatio = Math.min(1, detail.y / heightDiff);

      // Move/translate middleContainer
      Polymer.Base.transform('translate3d(0,' + yRatio * 100 + '%,0)', middleContainer);

      naturguidenName.style.width = 100 - (yRatio * 50) + '%';
    }

  });

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    app.$.headerPanelMain.scrollToTop(true);
  };

  app.closeDrawer = function() {
    app.$.paperDrawerPanel.closeDrawer();
  };

  app.scrollingTo = function(target) {
    var targetPos = Polymer.dom(document).querySelector(target).getBoundingClientRect().top;
    app.$.headerPanelMain.scroll(targetPos, true);
  };

  window.addEventListener('resize', function() {
    setHeaderProperties();
  });

  function setHeaderProperties() {
    if (app.currentQueryMatches !== app.queryMatches) {
      app.currentQueryMatches = app.queryMatches;
      var mainToolbar = Polymer.dom(document).querySelector('#mainToolbar');
      var naturguidenName = Polymer.dom(document).querySelector('#mainToolbar .naturguiden_name');
      var middleContainer = Polymer.dom(document).querySelector('#mainToolbar .middle-container');
      if (app.queryMatches) {
        mainToolbar.className = mainToolbar.className.replace(/(?:^|\s)small(?!\S)/g , 'tall');
        app.desktop = true;
        naturguidenName.style.width = '100%';
      }else {
        app.desktop = false;
        mainToolbar.className = mainToolbar.className.replace(/(?:^|\s)tall(?!\S)/g , 'small');
        naturguidenName.style.width = '50%';
      }
      app.$.headerPanelMain.condenses = app.desktop;
      app.$.headerPanelMain.keepCondensedHeader = app.desktop;
      app.$.headerPanelMain.noReveal = app.desktop;
      app.$.headerPanelMain.fixed = !app.desktop;
      Polymer.Base.transform('translate3d(0,' + 0 + '%,0)', middleContainer);
      app.$.headerPanelMain.measureHeaderHeight();
    }
  }

})(document);
