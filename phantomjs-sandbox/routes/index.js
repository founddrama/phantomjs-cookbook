/*jshint node:true */
/**
 * GET home page.
 */
exports.index = function(req, res) {
  res.render('index', {
    title: 'PhantomJS Cookbook Demo'
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
 * GET demo JSON response for simple ajax demo (Chapter 3, Recipe 13)
 */
exports.ajaxDemo = function(req, res) {
  res.json({
    time: new Date().getTime(),
    randomNumber: Math.floor(Math.random() * 100),
    initials: 'REF'
  });
};