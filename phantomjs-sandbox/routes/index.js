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
  res.cookie('dave', 'oatmeal-raisin', {
    // domain:'localhost',
    path:'/cookie-demo',
    maxAge: 5 * 60 * 1000
  });

  res.cookie('rob', 'chocolate-chip', {
    // domain:'localhost',
    path:'/cookie-demo',
    maxAge: 5 * 60 * 1000
  });

  res.render('cookie-demo', {
    title: 'PhantomJS Cookbook Cookie Demo (Chapter 1, Recipe 5)'
  });
};