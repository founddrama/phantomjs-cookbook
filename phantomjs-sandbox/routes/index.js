/*jshint node:true */

var ipsum = require('lorem-ipsum');

/**
 * GET home page.
 */
exports.index = function(req, res) {
  res.render('index', {
    title: 'PhantomJS Cookbook Demo',
    links: [
      '/appcache-demo',
      '/cache-demo',
      '/cookie-demo',
      '/css-demo',
      '/hover-demo',
      '/input-demo',
      '/precision-click'
    ]
  });
};

/**
 * GET page for cookie demo (Chapter 1, Recipe 5)
 */
exports.cookieDemo = function(req, res) {
  // 5 minutes
  var MAX_AGE = 300000;

  res.cookie('dave', 'oatmeal-raisin', {
    // domain:'localhost',
    path:'/cookie-demo',
    maxAge: MAX_AGE
  });

  res.cookie('rob', 'chocolate-chip', {
    // domain:'localhost',
    path:'/cookie-demo',
    maxAge: MAX_AGE
  });

  res.render('cookie-demo', {
    title: 'PhantomJS Cookbook Cookie Demo (Chapter 1, Recipe 5)'
  });
};

/**
 * GET page for cache demo (Chapter 1, Recipe 6)
 */
exports.cacheDemo = function(req, res) {
  res.render('cache-demo', {
    title: 'PhantomJS Cookbook Cache Demo (Chapter 1, Recipe 6)'
  });
};

/**
 * POST demo
 */
exports.postDemo = function(req, res) {
  console.log(req.body);
  res.json(req.body);
};

/**
 * GET demo JSON response for simple ajax demo (Chapter 3, Recipe 13)
 */
exports.ajaxDemo = function(req, res) {
  res.json({
    time: new Date().getTime(),
    randomNumber: Math.floor(Math.random() * 100),
    initials: 'REF'
  });
};

/**
 * Input demo. (Chapter 3, Recipe 9)
 */
exports.inputDemo = function(req, res) {
  res.render('input-demo', {
    title: 'Input Demo'
  });
};

/**
 * Hover demo. (Chapter 3, Recipe 10)
 */
exports.hoverDemo = function(req, res) {
  res.render('hover-demo', {
    title: 'Hover Demo'
  });
};

/**
 * CSS demo. (Chapter 3, Recipe 12)
 */
exports.cssDemo = function(req, res) {
  res.render('css-demo', {
    title: 'CSS Demo',
    intro: ipsum({ count: 1, units: 'paragraphs' }),
    col1:  ipsum({ count: 3, units: 'paragraphs' }),
    col2:  ipsum({ count: 3, units: 'paragraphs' }),
    col3:  ipsum({ count: 3, units: 'paragraphs' })
  });
};

/**
 * Precision clicking in Capybara/Poltergeist. (Chapter 5, Recipe 5)
 */
exports.precisionClick = function(req, res) {
  res.render('precision-click', {
    title: 'Precision Clicks in Capybara/Poltergeist'
  });
};

/**
 * appcache manifest demo. (Chapter 6, Recipe 3)
 */
exports.appcacheDemo = function(req, res) {
  res.render('appcache-demo', {
    title: 'appcache manifest demo'
  });
};

/**
 * CDN demo. ("There's more..." in Chapter 6, Recipe 5)
 */
exports.cdnDemo = function(req, res) {
  res.render('cdn-demo', {
    title: 'CDN Demo',
    intro: ipsum({ count: 1, units: 'paragraphs' }),
    col1:  ipsum({ count: 3, units: 'paragraphs' }),
    col2:  ipsum({ count: 3, units: 'paragraphs' }),
    col3:  ipsum({ count: 3, units: 'paragraphs' })
  });
};