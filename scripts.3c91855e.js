parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"DW13":[function(require,module,exports) {
module.exports="background.bfcb5afb.png";
},{}],"Et2l":[function(require,module,exports) {
module.exports="platform.91eec14f.png";
},{}],"YebZ":[function(require,module,exports) {
module.exports="ball.7408aea6.png";
},{}],"eEg1":[function(require,module,exports) {
module.exports="block.ab6574fa.png";
},{}],"jPyT":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Game=void 0;var s,i=t(require("../images/background.png")),e=t(require("../images/platform.png")),o=t(require("../images/ball.png")),r=t(require("../images/block.png"));!function(t){t[t.LEFT=37]="LEFT",t[t.RIGHT=39]="RIGHT",t[t.SPACE=32]="SPACE"}(s||(s={}));var n=function(){function t(){this.sprites={background:new Image,platform:new Image,ball:new Image,block:new Image},this.ball={dy:0,velocity:3,x:620,y:607,motionless:!0,start:function(){this.dy=-this.velocity},move:function(){this.dy&&(this.y+=this.dy)}},this.platform={velocity:6,dx:0,x:514.5,y:647,ball:this.ball,fire:function(){this.ball.motionless&&(this.ball.start(),this.ball.motionless=!1)},start:function(t){t===s.LEFT?this.dx=-this.velocity:t===s.RIGHT&&(this.dx=+this.velocity)},stop:function(){this.dx=0},move:function(){this.dx&&(this.x+=this.dx,this.ball.motionless&&(this.ball.x+=this.dx))}},this.rows=4,this.cols=8,this.blocks=[],this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d")}return t.prototype.init=function(){this.setEvents()},t.prototype.setEvents=function(){var t=this;window.addEventListener("keydown",function(i){i.keyCode===s.SPACE?t.platform.fire():i.keyCode!==s.LEFT&&i.keyCode!==s.RIGHT||t.platform.start(i.keyCode)}),window.addEventListener("keyup",function(){t.platform.stop()})},t.prototype.preload=function(t){var s=this;this.sprites.background.src=i.default,this.sprites.platform.src=e.default,this.sprites.ball.src=o.default,this.sprites.block.src=r.default;var n=Object.keys(this.sprites),a=0;n.forEach(function(i){s.sprites[i].addEventListener("load",function(){++a===n.length&&(s.canvas.classList.add("loaded"),t())})})},t.prototype.create=function(){for(var t=this.rows;t--;)for(var s=this.cols;s--;)this.blocks.push({x:115*s+182,y:44*t+90})},t.prototype.update=function(){this.platform.move(),this.ball.move()},t.prototype.run=function(){var t=this;window.requestAnimationFrame(function(){t.update(),t.render(),t.run()})},t.prototype.render=function(){this.ctx.drawImage(this.sprites.background,0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.sprites.platform,this.platform.x,this.platform.y),this.ctx.drawImage(this.sprites.ball,this.ball.x,this.ball.y),this.renderBlocks()},t.prototype.renderBlocks=function(){var t=this;this.blocks.forEach(function(s){t.ctx.drawImage(t.sprites.block,s.x,s.y)})},t.prototype.start=function(){var t=this;this.init(),this.preload(function(){t.run(),t.create()})},t}();exports.Game=n;
},{"../images/background.png":"DW13","../images/platform.png":"Et2l","../images/ball.png":"YebZ","../images/block.png":"eEg1"}],"KqmS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./Game"),r=new e.Game;r.start();
},{"./Game":"jPyT"}]},{},["KqmS"], null)