!function(e){var t={};function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){var o;(o=function(e){if(this.vue=e.vue||null,this.mode=e.mode||"production",this.jsErrorInfo={},this.count=0,this.cdn="https://static.mobilelegends.com/resource/report/public/",this.url="https://api.mobilelegends.com/r",this.ipUrl="https://api.mobilelegends.com/base/ip",this.pako=null,this.platform="",this.version="",this.brand="",this.engine="",this.supporter="",this.supporterVs="",this.errData={error:{},url:window.location.href.split("?")[0],params:window.location.href.split("?")[1]||"",type:"error",fp:window.localStorage.getItem("__murmur__")||""},!e.activity)throw Error("activity must be exist");this.visitData={fp:window.localStorage.getItem("__murmur__")||"",type:"event",ffp:"",fzoneid:"",froleid:"",data:{act_type:e.activity}},this.murmur="",this.listenError()}).prototype={constructor:o,listenError:function(){var e=this;window.Vue&&Vue.config?Vue.config.errorHandler=function(t,r,o){e.errData.error.stack?e.count<30&&(e.errData.error.stack+="\n"+e.ClearBr(t.stack)):e.errData.error.stack=e.ClearBr(t.stack),e.sendData(),console.error(t)}:window.onerror=function(t,r,o,i,n){if(e.jsErrorInfo={errorMessage:t,scriptURI:r,lineNo:o,columnNo:i,error:n},e.errData.error.message=t,e.errData.error.location="".concat(r,":").concat(o,":").concat(i),e.errData.error.stack){var a=new RegExp("\n","g"),s=e.errData.error.stack.match(a);e.count=s?s.length:0,e.count<30&&(e.errData.error.stack+=n&&"\n"+e.ClearBr(n.stack))}else e.errData.error.stack=n&&e.ClearBr(n.stack);e.sendData()}},ClearBr:function(e){return e=(e=e.replace(/<\/?.+?>/g,"")).replace(/[\r\n]/g,"")},getCookie:function(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!==t){t+=e.length+1;var r=document.cookie.indexOf(";",t);return-1===r&&(r=document.cookie.length),unescape(document.cookie.substring(t,r))}}return null},fingerHash:function(e,t){if(window.localStorage.getItem("__murmur__"))t();else{var r=this;if(this.murmur)return t(),!1;Fingerprint2.get(e,(function(e){r.murmur=Fingerprint2.x64hash128(e.map((function(e){return e.value})).join(),31),r.errData.fp=r.murmur,r.visitData.fp=r.murmur,r.murmur&&window.localStorage.setItem("__murmur__",r.murmur),t()}))}},judgeClient:function(){try{var e=navigator.userAgent,t=e.indexOf("Android")>-1||e.indexOf("Adr")>-1,r=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return t?"Android":r?"IOS":"PC"}catch(e){return"Android"}},getPcVersion:function(){return""},getAndroidVersion:function(){try{var e=navigator.userAgent.toLowerCase(),t="";return e.indexOf("android")>0&&(t=(e.match(/android [\d._]+/gi)+"").replace(/[^0-9|_.]/gi,"").replace(/_/gi,".")),t}catch(e){return""}},getIosVersion:function(){try{var e=navigator.userAgent.toLowerCase(),t="";return e.indexOf("like mac os x")>0&&(t=(e.match(/os [\d._]+/gi)+"").replace(/[^0-9|_.]/gi,"").replace(/_/gi,".")),t}catch(e){return""}},getBrand:function(e){var t="iphone"==e.match(/iphone/i),r="huawei"==e.match(/huawei/i),o="honor"==e.match(/honor/i),i="oppo"==e.match(/oppo/i),n="pacm00"==e.match(/pacm00/i),a="vivo"==e.match(/vivo/i),s="mi "==e.match(/mi\s/i),u="mix "==e.match(/mix\s/i),c="redmi"==e.match(/redmi/i),p="sm-"==e.match(/sm-/i),d="pixel"==e.match(/pixel/i);return t?"iphone":r||o?"huawei":i||n?"oppo":a?"vivo":s||c||u?"xiaomi":p?"samsung":d?"pixel":"other"},getBroswer:function(){var e=navigator.userAgent.toLowerCase(),t=function(t){return t.test(e)},r=function(t){return(e.match(t)||"").toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")};t(/applewebkit/g)?(this.engine="webkit",t(/edge/g)?(this.supporter="edge",this.supporterVs=r(/edge\/[\d._]+/g)):t(/opr/g)?(this.supporter="opera",this.supporterVs=r(/opr\/[\d._]+/g)):t(/chrome/g)?(this.supporter="chrome",this.supporterVs=r(/chrome\/[\d._]+/g)):t(/safari/g)&&(this.supporter="safari",this.supporterVs=r(/version\/[\d._]+/g))):t(/gecko/g)&&t(/firefox/g)?(this.engine="gecko",this.supporter="firefox",this.supporterVs=r(/firefox\/[\d._]+/g)):t(/presto/g)?(this.engine="presto",this.supporter="opera",this.supporterVs=r(/opr\/[\d._]+/g),this.engine="trident",this.supporter="iexplore",this.supporterVs=r(/(msie [\d._]+)|(rv:[\d._]+)/g)):(this.engine="other",this.supporter="other",this.supporterVs="other")},visitLog:function(e,t){for(var r in"[object Object]"==Object.prototype.toString.call(t)&&(this.visitData.ffp=t.ffp||"",this.visitData.fzoneid=t.fzoneid||"",this.visitData.froleid=t.froleid||""),this.getCookie("userGroup")&&(this.visitData.zoneid=this.getCookie("userGroup")),this.getCookie("userId")&&(this.visitData.roleid=this.getCookie("userId")),this.visitData.data)"act_type"!=r&&delete this.visitData.data[r];if(!this.platform||!this.version){var o={Android:this.getAndroidVersion,IOS:this.getIosVersion,PC:this.getPcVersion};this.platform=this.judgeClient(),this.version=o[this.platform]()}for(var i in this.brand||(this.brand=this.getBrand(navigator.userAgent.toLowerCase())),this.engine&&this.supporter&&!this.supporterVs||this.getBroswer(),"other"==this.brand&&"IOS"==this.platform&&(this.brand="iphone"),e.os_platform=this.platform,e.os_version=this.version,e.phone_brand=this.brand,e.browser_brand=this.supporter,e.browser_version=this.supporterVs,e.browser_engine=this.engine,e.ga=this.getCookie("_ga")||"",e)this.visitData.data[i]=e[i];var n=this;this.loadResource((function(){if(navigator.sendBeacon){var e=pako.deflate(JSON.stringify(n.visitData),{to:"string"}),t=new URLSearchParams;t.set("v",window.b64(e));var r=new Blob([t],{type:"application/x-www-form-urlencoded"});navigator.sendBeacon(n.url,r)}else e=pako.deflate(JSON.stringify(n.visitData),{to:"string"}),n.ajax_({url:n.url,type:"POST",async:!1,data:{v:window.b64(e)}})}))},sendData:function(){this.getCookie("userId")&&(this.errData.roleid=this.getCookie("userId")),this.getCookie("userGroup")&&(this.errData.zoneid=this.getCookie("userGroup"));var e=this;this.loadResource((function(){if(navigator.sendBeacon){var t=pako.deflate(JSON.stringify(e.errData),{to:"string"}),r=new URLSearchParams;r.set("v",window.b64(t));var o=new Blob([r],{type:"application/x-www-form-urlencoded"});navigator.sendBeacon(e.url,o)}else t=pako.deflate(JSON.stringify(e.errData),{to:"string"}),this.ajax_({url:e.url,type:"POST",async:!1,data:{v:window.b64(t)}})}))},loadJS:function(e,t){var r=document.createElement("script"),o=t||function(){};r.type="text/javascript",r.readyState?r.onreadystatechange=function(){"loaded"!=r.readyState&&"complete"!=r.readyState||(r.onreadystatechange=null,o())}:r.onload=function(){o()},r.src=e,document.getElementsByTagName("head")[0].appendChild(r)},getParams:function(e){var t=[];for(var r in e)t.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t.push(("randomNumber="+Math.random()).replace(".")),t.join("&")},ajax_:function(e){(e=e||{}).type=(e.type||"GET").toUpperCase(),e.dataType=e.dataType||"json",e.async=e.async||!0;var t,r=this.getParams(e.data);(t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange=function(){if(4==t.readyState){var r=t.status;r>=200&&r<300?e.success&&e.success(t.responseText,t.responseXML):e.fail&&e.fail(r)}},"GET"==e.type?(t.open("GET",e.url+"?"+r,e.async),t.send(null)):"POST"==e.type&&(t.open("POST",e.url,e.async),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(r))},loadResource_:function(e,t){var r={extraComponents:[{key:"ip",getData:function(t,r){t(e)}}]},o=this;if(window.b64&&Fingerprint2&&pako)return o.fingerHash(r,t),!1;this.loadJS(o.cdn+"fingerprint2.min.js",(function(){o.fingerHash(r,(function(){o.loadJS(o.cdn+"pako.min.js",(function(){window.btoa?(window.b64=window.btoa,t()):o.loadJS(o.cdn+"base64.js",(function(){window.b64=Base64.encode,t()}))}))}))}))},loadResource:function(e){window.localStorage.getItem("mt_ip"),this.loadResource_("",e)}},window.Mlog=o}]);