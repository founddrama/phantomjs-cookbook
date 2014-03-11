/**
 * The PhantomJS Cookbook (Chapter 7, Recipe 3)
 *
 * Snap.svg script to generate the SVG used for the demo.
 */
var s = Snap('#svg-demo'),
    c = s.circle(200, 200, 180),
    eyes = s.group(
        s.ellipse(134, 160, 64, 90).attr({transform: 'rotate(-10, 140, 160)'}),
        s.ellipse(264, 160, 64, 90).attr({transform: 'rotate(10, 260, 160)'})
    );

c.attr({
  fill: 'r(0.25, 0.1, 1.2)#00B5BF-#006d73',
  stroke: '#41413C',
  strokeWidth: 8
});

eyes.attr({
  stroke: '#fff',
  strokeWidth: 4,
  'stroke-opacity': 0.5,
  fill: 'R(200, 270, 180)#aaa-#fff',
  'fill-opacity': 0.5
});