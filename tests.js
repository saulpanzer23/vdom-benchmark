!function r(e,t,n){function o(i,a){if(!t[i]){if(!e[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(s)return s(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var m=t[i]={exports:{}};e[i][0].call(m.exports,function(r){var t=e[i][1][r];return o(t?t:r)},m,m.exports,r,e,t,n)}return t[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(r){"use strict";var e=r("vdom-benchmark-generator"),t=e.transformers,n=e.Generator,o=new n;o.addGroup([500],[[t.reverse],[t.shuffle],[t.insertFirst(1)],[t.insertLast(1)],[t.removeFirst(1)],[t.removeLast(1)],[t.moveFromEndToStart(1)],[t.moveFromStartToEnd(1)],[t.removeLast(500)],[t.removeFirst(250)],[t.removeLast(250)],[t.skip]]),o.addGroup([250],[[t.insertFirst(250)],[t.insertLast(250)]]),o.addGroup([50,10],[[t.reverse,t.skip],[t.shuffle,t.skip],[t.insertFirst(1),t.skip],[t.insertLast(1),t.skip],[t.removeFirst(1),t.skip],[t.removeLast(1),t.skip],[t.moveFromEndToStart(1),t.skip],[t.moveFromStartToEnd(1),t.skip]]),o.addGroup([5,100],[[t.reverse,t.skip],[t.shuffle,t.skip],[t.insertFirst(1),t.skip],[t.insertLast(1),t.skip],[t.removeFirst(1),t.skip],[t.removeLast(1),t.skip],[t.moveFromEndToStart(1),t.skip],[t.moveFromStartToEnd(1),t.skip]]),o.addGroup([50,0],[[t.skip,t.insertLast(10)]]),o.addGroup([5,0],[[t.skip,t.insertLast(100)]]),o.addGroup([1e4],[[t.shuffle]]),window.benchmarkTests=function(){return o.generate()}},{"vdom-benchmark-generator":2}],2:[function(r,e){"use strict";var t=r("./lib/generator");e.exports={Generator:t.Generator,createNode:t.createNode,NodeFlags:r("./lib/node_flags"),transformers:r("./lib/transformers")}},{"./lib/generator":3,"./lib/node_flags":4,"./lib/transformers":5}],3:[function(r,e){"use strict";function t(r,e,t){return void 0===e&&(e=0),void 0===t&&(t=null),{key:r,flags:0,children:t}}function n(r,e,o){void 0===e&&(e=null),void 0===o&&(o=0);var s,i=[],a=r[o];if(o===r.length-1)for(s=0;a>s;s++)i.push(t(s,0,null));else for(s=0;a>s;s++)i.push(t(s,0,n(r,e,o+1)));return null!=e&&e[o].fn(i),i}function o(){this.groups=[]}o.prototype.addGroup=function(r,e){this.groups.push({nodes:r,transformers:e})},o.prototype.generate=function(){var r,e,t,o,s,i,a,f=[];for(r=0;r<this.groups.length;r++)for(t=this.groups[r],s=n(t.nodes),a=JSON.stringify(t.nodes)+" ",e=0;e<t.transformers.length;e++)o=t.transformers[e],i=n(t.nodes,o),f.push({name:a+JSON.stringify(o.map(function(r){return r.name})),data:{a:s,b:i}});return f},e.exports={Generator:o,createNode:t}},{}],4:[function(r,e){"use strict";e.exports={component:1,style:2,attribute:4,classes:8}},{}],5:[function(r,e){"use strict";function t(r){return{name:"insertFirst("+r.toString()+")",fn:function(e){for(var t=0;r>t;t++)e.unshift(f(e.length))}}}function n(r){return{name:"insertLast("+r.toString()+")",fn:function(e){for(var t=0;r>t;t++)e.push(f(e.length))}}}function o(r){return{name:"removeFirst("+r.toString()+")",fn:function(e){for(var t=0;r>t;t++)e.shift()}}}function s(r){return{name:"removeLast("+r.toString()+")",fn:function(e){for(var t=0;r>t;t++)e.pop()}}}function i(r){return{name:"moveFromEndToStart("+r.toString()+")",fn:function(e){for(var t=0;r>t;t++)e.unshift(e.pop())}}}function a(r){return{name:"moveFromStartToEnd("+r.toString()+")",fn:function(e){for(var t=0;r>t;t++)e.push(e.shift())}}}var f=r("./generator").createNode,u={name:"skip",fn:function(){}},m={name:"reverse",fn:function(r){r.reverse()}},p={name:"shuffle",fn:function(r){for(var e,t,n=r.length;0!==n;)e=Math.floor(Math.random()*n--),t=r[n],r[n]=r[e],r[e]=t}};e.exports={skip:u,reverse:m,shuffle:p,insertFirst:t,insertLast:n,removeFirst:o,removeLast:s,moveFromEndToStart:i,moveFromStartToEnd:a}},{"./generator":3}]},{},[1]);
//# sourceMappingURL=tests.js.map