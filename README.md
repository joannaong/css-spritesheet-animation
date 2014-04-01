# CSS spritesheet animation

Spritesheet animated using CSS, specifically SCSS mixins.

##Demo
http://codepen.io/joannaong/pen/xgnhD

##Usage
Add HTML
```html
<div class="y1960s"></div>
```

Include these SCSS mixins inside your scss file
```css
// MIXINS
@mixin sprite-sheet($img-url, $img-width, $duration, $frames, $name) {
  width: ($img-width / $frames) + px;
  background-image: url($img-url);
  -webkit-animation: $name $duration steps($frames - 1) forwards;
    -moz-animation: $name $duration steps($frames - 1) forwards;
      -ms-animation: $name $duration steps($frames - 1) forwards;
       -o-animation: $name $duration steps($frames - 1) forwards;
          animation: $name $duration steps($frames - 1) forwards;
}
@mixin sprite-sheet-key($img-width, $frames, $name) {
  @-webkit-keyframes $name {
    from { background-position: 0; }
    to { background-position: -(($img-width)-($img-width / $frames)) + px }
  }
  @-moz-keyframes $name {
    from { background-position: 0; }
    to { background-position: -(($img-width)-($img-width / $frames)) + px }
  }
  @-ms-keyframes $name {
    from { background-position: 0; }
    to { background-position: -(($img-width)-($img-width / $frames)) + px }
  }
  @keyframes $name {
    from { background-position: 0; }
    to { background-position: -(($img-width)-($img-width / $frames)) + px }
  } 
}
```
Use mixins inside your element
```css
.y1960s {
	@include sprite-sheet("http://dev.thesecretlocation.com/OPEN/codepen/60s.png", 7560, 1200ms, 24, y60);
}
@include sprite-sheet-key(7560, 24, y60);
```
##References
http://jsfiddle.net/simurai/CGmCe/