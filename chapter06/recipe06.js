/*global YSLOW:true */
YSLOW.registerRuleset({
  id: 'cookbook',
  name: 'PhantomJS Cookbook Example Ruleset',
  rules: {
    ynumreq: {},
    yexpires: {},
    ycompress: {},
    ycsstop: {},
    yjsbottom: {},
    ydupes: {},
    ymindom: {},
    yno404: {},
    yemptysrc: {}
  },
  weights: {
    ynumreq: 8,
    yexpires: 2,
    ycompress: 4,
    ycsstop: 2,
    yjsbottom: 2,
    ydupes: 4,
    ymindom: 2,
    yno404: 2,
    yemptysrc: 4
  }
});
