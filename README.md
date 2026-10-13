# NYUAD experiences

Project 2: Interactive Comic for Communications Lab, by Megan Del Villar, Sanjana Satendra and Tiffy Yu.

An interactive comic about the "spirits" of the NYU Abu Dhabi campus: the feelings and small moments every student recognizes. The home page is an illustrated map of campus, and clicking a building opens the comic strip that happens there. Inspired by Emma Carroll's web comic A Pretty Place, where a map of a house leads to a comic about each room.

Live site: https://megandelvillar.github.io/project-2-nyuad-comic/

## Pages

* `index.html`: the campus map. C2, C3, D1 and the Dorms are clickable (all the dorm buildings highlight together). C1, D2 and the Palms are part of the scenery so the map looks like the real campus.
* `places/c3.html`: the spirit of art and music. The music notes swing and play a piano note when clicked, and the Piano Class poster zooms in.
* `places/c2.html`: the spirit of mental clarity, in the library.
* `places/dorms.html`: the spirit of isolation. The phone plays a sad song, and the door opens and closes to show her friends.
* `places/d1.html`: the spirit of taking a break. The ice cream gets sprinkles when clicked.

## Folder structure

* `css/style.css`: styles for the map and the comic pages
* `js/`: one script per page with interactions (`c3.js`, `dorms.js`, `d1.js`)
* `images/`: our drawings and photos, with one folder per place and a `map` folder for the map layers
* `audio/`: the song for the phone in the Dorms
* `places/`: one page per clickable place

## Credits

* Drawings, stories and photos: our group
* Music: "Dreaming of you" by Komiku (Loyalty Freak Music), CC0: https://opengameart.org/node/82437
* Fonts: Fredoka and Nunito, Google Fonts

## References

* Emma Carroll, A Pretty Place: https://emcarroll.com/comics/prettyplace/back.html
* Scott McCloud, Understanding Comics (1993)
* Jack Du, web-dev-workshop (HTML and CSS; JavaScript): https://github.com/jackbdu/web-dev-workshop
* CSS-Tricks, A Complete Guide to Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* CSS-Tricks, A Complete Guide to CSS Grid: https://css-tricks.com/complete-guide-css-grid-layout/
* MDN, SVG `<polygon>`: https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/polygon
* MDN, SVG `<ellipse>`: https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/ellipse
* MDN, Web Audio API (piano notes): https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
