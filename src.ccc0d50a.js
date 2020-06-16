parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dwy3":[function(require,module,exports) {
module.exports="ball.7408aea6.png";
},{}],"gX8e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ball=void 0;var t=function(){function t(t){this.game=t,this.image=new Image,this.dx=0,this.dy=0,this.velocity=10,this.x=620,this.y=607,this.width=40,this.height=40,this.running=!1,this.image.src=require("./ball.png"),this.game=t}return t.prototype.start=function(t){this.dy=-this.velocity,this.dx=t},t.prototype.move=function(){this.dy&&(this.y+=this.dy),this.dx&&(this.x+=this.dx)},t.prototype.collide=function(t){var i=this.x+this.dx,h=this.y+this.dy;return i+this.width>t.x&&i<t.x+t.width&&h+this.height>t.y&&h<t.y+t.height},t.prototype.collideWorldBounds=function(){var t=this.x+this.dx,i=this.y+this.dy,h=t,s=h+this.width,e=i,o=e+this.height,d=this.game.width,r=this.game.height;h<0?(this.x=0,this.dx=this.velocity):s>d?(this.x=d-this.width,this.dx=-this.velocity):e<0?(this.y=0,this.dy=this.velocity):o>r&&this.game.gameOver()},t.prototype.bumpBlock=function(t){this.dy*=-1,t.render=!1},t.prototype.bumpPlatform=function(){if(this.game.platform.dx&&(this.x+=this.game.platform.dx),this.dy>0){var t=this.x+this.width/2;this.dy=-this.velocity,this.dx=this.velocity*this.game.platform.getTouchOffset(t)}},t}();exports.Ball=t;
},{"./ball.png":"dwy3"}],"fhf2":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.KEYS=void 0,function(e){e[e.LEFT=37]="LEFT",e[e.RIGHT=39]="RIGHT",e[e.SPACE=32]="SPACE"}(e=exports.KEYS||(exports.KEYS={}));
},{}],"g98E":[function(require,module,exports) {
module.exports="platform.91eec14f.png";
},{}],"ecpz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Platform=void 0;var t=require("../../interfaces"),i=function(){function i(t){this.game=t,this.image=new Image,this.velocity=15,this.dx=0,this.x=514.5,this.y=647,this.width=251,this.height=41,this.image.src=require("./platform.png"),this.game=t}return i.prototype.fire=function(t){this.game.ball.running||(this.game.ball.start(t),this.game.ball.running=!0)},i.prototype.start=function(i){i===t.KEYS.LEFT?this.dx=-this.velocity:i===t.KEYS.RIGHT&&(this.dx=+this.velocity)},i.prototype.stop=function(){this.dx=0},i.prototype.move=function(){this.dx&&(this.x+=this.dx,this.game.ball.running||(this.game.ball.x+=this.dx))},i.prototype.getTouchOffset=function(t){var i=this.x+this.width-t;return 2*(this.width-i)/this.width-1},i.prototype.collideWorldBounds=function(){var t=this.x+this.dx,i=t+this.width,e=this.game.width;(t<0||i>e)&&(this.dx=0)},i}();exports.Platform=i;
},{"../../interfaces":"fhf2","./platform.png":"g98E"}],"FGd9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Platform=exports.Ball=void 0;var e=require("./Ball");Object.defineProperty(exports,"Ball",{enumerable:!0,get:function(){return e.Ball}});var r=require("./Platform");Object.defineProperty(exports,"Platform",{enumerable:!0,get:function(){return r.Platform}});
},{"./Ball":"gX8e","./Platform":"ecpz"}],"DOAq":[function(require,module,exports) {

},{}],"gXMY":[function(require,module,exports) {

},{"normalize.css":"DOAq","./images/loader.gif":[["loader.81b92677.gif","HgRH"],"HgRH"]}],"HLqT":[function(require,module,exports) {
module.exports="background.b918fe97.jpg";
},{}],"wVVW":[function(require,module,exports) {
module.exports="block.ab6574fa.png";
},{}],"Ru24":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var t=require("../components"),e=require("../interfaces");require("./app.scss");var o=function(){function o(){this.background=new Image,this.imageBlock=new Image,this.ball=new t.Ball(this),this.platform=new t.Platform(this),this.width=1280,this.height=720,this.rows=4,this.cols=8,this.score=0,this.blocks=[],this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.width,this.canvas.height=this.height,this.background.src=require("./images/background.jpg"),this.imageBlock.src=require("./images/block.png")}return o.prototype.setEvents=function(){var t=this;window.addEventListener("keydown",function(o){if(o.keyCode===e.KEYS.SPACE){var i=t.random(-t.ball.velocity,+t.ball.velocity);t.platform.fire(i)}else o.keyCode!==e.KEYS.LEFT&&o.keyCode!==e.KEYS.RIGHT||t.platform.start(o.keyCode)}),window.addEventListener("keyup",function(){t.platform.stop()})},o.prototype.preload=function(t){var e=this,o=[this.background,this.imageBlock,this.platform.image,this.ball.image],i=0;o.forEach(function(r){r.addEventListener("load",function(){++i===o.length&&(e.canvas.classList.add("loaded"),t())})})},o.prototype.createBlocks=function(){this.blocks=[];for(var t=this.rows;t--;)for(var e=this.cols;e--;)this.blocks.push({x:115*e+182,y:44*t+90,width:111,height:39,render:!0})},o.prototype.update=function(){this.collideBlocks(),this.collidePlatform(),this.ball.collideWorldBounds(),this.platform.collideWorldBounds(),this.platform.move(),this.ball.move()},o.prototype.collideBlocks=function(){var t=this;this.blocks.forEach(function(e){e.render&&t.ball.collide(e)&&(t.ball.bumpBlock(e),t.score+=10,t.blocks.filter(function(t){return t.render}).length||t.levelUp())})},o.prototype.collidePlatform=function(){this.ball.collide(this.platform)&&this.ball.bumpPlatform()},o.prototype.run=function(){var t=this;window.requestAnimationFrame(function(){t.update(),t.render(),t.run()})},o.prototype.render=function(){this.ctx.clearRect(0,0,this.width,this.height),this.ctx.drawImage(this.background,0,0,this.width,this.height),this.ctx.drawImage(this.platform.image,this.platform.x,this.platform.y),this.ctx.drawImage(this.ball.image,this.ball.x,this.ball.y),this.renderBlocks()},o.prototype.renderBlocks=function(){var t=this;this.blocks.forEach(function(e){e.render&&t.ctx.drawImage(t.imageBlock,e.x,e.y)})},o.prototype.random=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},o.prototype.gameOver=function(){alert("Вы проиграли!"),this.restart()},o.prototype.levelUp=function(){alert("Вы победили!"),this.restart()},o.prototype.restart=function(){this.createBlocks(),this.renderBlocks(),this.ball=new t.Ball(this),this.platform=new t.Platform(this)},o.prototype.start=function(){var t=this;this.setEvents(),this.preload(function(){t.run(),t.createBlocks()})},o}();exports.App=o;
},{"../components":"FGd9","../interfaces":"fhf2","./app.scss":"gXMY","./images/background.jpg":"HLqT","./images/block.png":"wVVW"}],"fUdq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./App"),r=new e.App;r.start();
},{"./App":"Ru24"}]},{},["fUdq"], null)