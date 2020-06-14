parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dwy3":[function(require,module,exports) {
module.exports="ball.7408aea6.png";
},{}],"gX8e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ball=void 0;var t=function(){function t(){this.image=new Image,this.dx=0,this.dy=0,this.velocity=10,this.x=620,this.y=607,this.width=40,this.height=40,this.image.src=require("./ball.png")}return t.prototype.start=function(t){this.dy=-this.velocity,this.dx=t},t.prototype.move=function(){this.dy&&(this.y+=this.dy),this.dx&&(this.x+=this.dx)},t.prototype.collide=function(t){var i=this.x+this.dx,h=this.y+this.dy;return i+this.width>t.x&&i<t.x+t.width&&h+this.height>t.y&&h<t.y+t.height},t.prototype.bumpBlock=function(t){this.dy*=-1},t.prototype.bumpPlatform=function(t){var i=this.x+this.width/2;this.dy*=-1,this.dx=this.velocity*t.getTouchOffset(i)},t}();exports.Ball=t;
},{"./ball.png":"dwy3"}],"fhf2":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.KEYS=void 0,function(e){e[e.LEFT=37]="LEFT",e[e.RIGHT=39]="RIGHT",e[e.SPACE=32]="SPACE"}(e=exports.KEYS||(exports.KEYS={}));
},{}],"g98E":[function(require,module,exports) {
module.exports="platform.91eec14f.png";
},{}],"ecpz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Platform=void 0;var t=require("../../interfaces"),i=function(){function i(t){this.image=new Image,this.velocity=15,this.dx=0,this.x=514.5,this.y=647,this.width=251,this.height=41,this.image.src=require("./platform.png"),this.ball=t}return i.prototype.fire=function(t){this.ball&&(this.ball.start(t),this.ball=null)},i.prototype.start=function(i){i===t.KEYS.LEFT?this.dx=-this.velocity:i===t.KEYS.RIGHT&&(this.dx=+this.velocity)},i.prototype.stop=function(){this.dx=0},i.prototype.move=function(){this.dx&&(this.x+=this.dx,this.ball&&(this.ball.x+=this.dx))},i.prototype.getTouchOffset=function(t){var i=this.x+this.width-t;return 2*(this.width-i)/this.width-1},i}();exports.Platform=i;
},{"../../interfaces":"fhf2","./platform.png":"g98E"}],"FGd9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Platform=exports.Ball=void 0;var e=require("./Ball");Object.defineProperty(exports,"Ball",{enumerable:!0,get:function(){return e.Ball}});var r=require("./Platform");Object.defineProperty(exports,"Platform",{enumerable:!0,get:function(){return r.Platform}});
},{"./Ball":"gX8e","./Platform":"ecpz"}],"DOAq":[function(require,module,exports) {

},{}],"gXMY":[function(require,module,exports) {

},{"normalize.css":"DOAq","./images/loader.gif":[["loader.81b92677.gif","HgRH"],"HgRH"]}],"HLqT":[function(require,module,exports) {
module.exports="background.b918fe97.jpg";
},{}],"wVVW":[function(require,module,exports) {
module.exports="block.ab6574fa.png";
},{}],"Ru24":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Game=void 0;var t=require("../components"),i=require("../interfaces");require("./app.scss");var e=function(){function e(){this.background=new Image,this.imageBlock=new Image,this.ball=new t.Ball,this.platform=new t.Platform(this.ball),this.width=1280,this.height=720,this.rows=4,this.cols=8,this.blocks=[],this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.width,this.canvas.height=this.height,this.background.src=require("./images/background.jpg"),this.imageBlock.src=require("./images/block.png")}return e.prototype.setEvents=function(){var t=this;window.addEventListener("keydown",function(e){if(e.keyCode===i.KEYS.SPACE){var o=t.random(-t.ball.velocity,+t.ball.velocity);t.platform.fire(o)}else e.keyCode!==i.KEYS.LEFT&&e.keyCode!==i.KEYS.RIGHT||t.platform.start(e.keyCode)}),window.addEventListener("keyup",function(){t.platform.stop()})},e.prototype.preload=function(t){var i=this,e=[this.background,this.imageBlock,this.platform.image,this.ball.image],o=0;e.forEach(function(s){s.addEventListener("load",function(){++o===e.length&&(i.canvas.classList.add("loaded"),t())})})},e.prototype.create=function(){for(var t=this.rows;t--;)for(var i=this.cols;i--;)this.blocks.push({x:115*i+182,y:44*t+90,width:111,height:39})},e.prototype.update=function(){this.platform.move(),this.ball.move(),this.collideBlocks(),this.collidePlatform()},e.prototype.collideBlocks=function(){var t=this;this.blocks.forEach(function(i){t.ball.collide(i)&&t.ball.bumpBlock(i)})},e.prototype.collidePlatform=function(){this.ball.collide(this.platform)&&this.ball.bumpPlatform(this.platform)},e.prototype.run=function(){var t=this;window.requestAnimationFrame(function(){t.update(),t.render(),t.run()})},e.prototype.render=function(){this.ctx.clearRect(0,0,this.width,this.height),this.ctx.drawImage(this.background,0,0,this.width,this.height),this.ctx.drawImage(this.platform.image,this.platform.x,this.platform.y),this.ctx.drawImage(this.ball.image,this.ball.x,this.ball.y),this.renderBlocks()},e.prototype.renderBlocks=function(){var t=this;this.blocks.forEach(function(i){t.ctx.drawImage(t.imageBlock,i.x,i.y)})},e.prototype.random=function(t,i){return Math.floor(Math.random()*(i-t+1)+t)},e.prototype.start=function(){var t=this;this.setEvents(),this.preload(function(){t.run(),t.create()})},e}();exports.Game=e;
},{"../components":"FGd9","../interfaces":"fhf2","./app.scss":"gXMY","./images/background.jpg":"HLqT","./images/block.png":"wVVW"}],"fUdq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./App"),r=new e.Game;r.start();
},{"./App":"Ru24"}]},{},["fUdq"], null)