webpackJsonp([1],{"/4kj":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("c/Tr"),r=i.n(o),n=i("jyDt"),a={data:function(){return{value:""}},methods:{generate:function(){!function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200;t.children.length&&r()(t.children).forEach(function(t){t.remove()});new n(t,{text:e||"http://106.54.128.146/test-demo/#/demolist",width:i,height:o,colorDark:"#000000",colorLight:"#ffffff",correctLevel:n.CorrectLevel.H,dotScale:1,quietZone:0,quietZoneColor:"transparent"})}(this.$refs.qrcode,this.value)},back:function(){this.$router.push("/demolist")}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("my-header",{attrs:{title:t.$route.meta.title},on:{leftClick:t.back}}),t._v(" "),i("my-sub"),t._v(" "),i("div",{ref:"qrcode",staticClass:"qrcode"}),t._v(" "),i("my-sub"),t._v(" "),i("div",{staticClass:"input"},[i("van-field",{attrs:{type:"textarea",autosize:"",rows:"1",placeholder:"请输入要生成的内容"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("my-sub"),t._v(" "),i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.generate}},[t._v("生成二维码")])],1)],1)},staticRenderFns:[]};var s=i("VU/8")(a,l,!1,function(t){i("WBOf")},"data-v-8be38384",null);e.default=s.exports},"3IRH":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},WBOf:function(t,e){},jyDt:function(t,e,i){(function(t,i){var o;(function(){"use strict";function r(t){this.mode=_.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,i=this.data.length;e<i;e++){var o=[],r=this.data.charCodeAt(e);r>65536?(o[0]=240|(1835008&r)>>>18,o[1]=128|(258048&r)>>>12,o[2]=128|(4032&r)>>>6,o[3]=128|63&r):r>2048?(o[0]=224|(61440&r)>>>12,o[1]=128|(4032&r)>>>6,o[2]=128|63&r):r>128?(o[0]=192|(1984&r)>>>6,o[1]=128|63&r):o[0]=r,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function n(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function a(t,e){if(t.length==g)throw new Error(t.length+"/"+e);for(var i=0;i<t.length&&0==t[i];)i++;this.num=new Array(t.length-i+e);for(var o=0;o<t.length-i;o++)this.num[o]=t[o+i]}function l(t,e){this.totalCount=t,this.dataCount=e}function s(){this.buffer=[],this.length=0}function h(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var i=e.toString().match(/android ([0-9]\.[0-9])/i);i&&i[1]&&(t=parseFloat(i[1]))}return t}function u(t,e){for(var i=1,o=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),r=0,n=T.length;r<=n;r++){var a=0;switch(e){case y.L:a=T[r][0];break;case y.M:a=T[r][1];break;case y.Q:a=T[r][2];break;case y.H:a=T[r][3]}if(o<=a)break;i++}if(i>T.length)throw new Error("Too long data");return i}var g,d,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=c||f||Function("return this")(),m="object"==typeof e&&e&&!e.nodeType&&e,v=(m&&"object"==typeof i&&i&&i.nodeType,p.QRCode);r.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,i=this.parsedData.length;e<i;e++)t.put(this.parsedData[e],8)}},n.prototype={addData:function(t){var e=new r(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e][0]},getEye:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);var i=this.modules[t][e];if(i[1]){var o="P"+i[1]+"_"+i[2];return"A"==i[2]&&(o="A"+i[1]),{isDark:i[0],type:o}}return null},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++){this.modules[i]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[i][o]=[]}this.setupPositionProbePattern(0,0,"TL"),this.setupPositionProbePattern(this.moduleCount-7,0,"BL"),this.setupPositionProbePattern(0,this.moduleCount-7,"TR"),this.setupPositionAdjustPattern("A"),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e,i){for(var o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(0<=o&&o<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==o||6==o)||2<=o&&o<=4&&2<=r&&r<=4?(this.modules[t+o][e+r][0]=!0,this.modules[t+o][e+r][2]=i,this.modules[t+o][e+r][1]=-0==o||-0==r||6==o||6==r?"O":"I"):this.modules[t+o][e+r][0]=!1)},getBestMaskPattern:function(){for(var t=0,e=0,i=0;i<8;i++){this.makeImpl(!0,i);var o=C.getLostPoint(this);(0==i||t>o)&&(t=o,e=i)}return e},createMovieClip:function(t,e,i){var o=t.createEmptyMovieClip(e,i);this.make();for(var r=0;r<this.modules.length;r++)for(var n=1*r,a=0;a<this.modules[r].length;a++){var l=1*a;this.modules[r][a][0]&&(o.beginFill(0,100),o.moveTo(l,n),o.lineTo(l+1,n),o.lineTo(l+1,n+1),o.lineTo(l,n+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6][0]&&(this.modules[t][6][0]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e][0]&&(this.modules[6][e][0]=e%2==0)},setupPositionAdjustPattern:function(t){for(var e=C.getPatternPosition(this.typeNumber),i=0;i<e.length;i++)for(var o=0;o<e.length;o++){var r=e[i],n=e[o];if(null==this.modules[r][n][0])for(var a=-2;a<=2;a++)for(var l=-2;l<=2;l++)-2==a||2==a||-2==l||2==l||0==a&&0==l?(this.modules[r+a][n+l][0]=!0,this.modules[r+a][n+l][2]=t,this.modules[r+a][n+l][1]=-2==a||-2==l||2==a||2==l?"O":"I"):this.modules[r+a][n+l][0]=!1}},setupTypeNumber:function(t){for(var e=C.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var o=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3][0]=o}for(i=0;i<18;i++){o=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)][0]=o}},setupTypeInfo:function(t,e){for(var i=this.errorCorrectLevel<<3|e,o=C.getBCHTypeInfo(i),r=0;r<15;r++){var n=!t&&1==(o>>r&1);r<6?this.modules[r][8][0]=n:r<8?this.modules[r+1][8][0]=n:this.modules[this.moduleCount-15+r][8][0]=n}for(r=0;r<15;r++){n=!t&&1==(o>>r&1);r<8?this.modules[8][this.moduleCount-r-1][0]=n:r<9?this.modules[8][15-r-1+1][0]=n:this.modules[8][15-r-1][0]=n}this.modules[this.moduleCount-8][8][0]=!t},mapData:function(t,e){for(var i=-1,o=this.moduleCount-1,r=7,n=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var l=0;l<2;l++)if(null==this.modules[o][a-l][0]){var s=!1;n<t.length&&(s=1==(t[n]>>>r&1)),C.getMask(e,o,a-l)&&(s=!s),this.modules[o][a-l][0]=s,-1==--r&&(n++,r=7)}if((o+=i)<0||this.moduleCount<=o){o-=i,i=-i;break}}}},n.PAD0=236,n.PAD1=17,n.createData=function(t,e,i){for(var o=l.getRSBlocks(t,e),r=new s,a=0;a<i.length;a++){var h=i[a];r.put(h.mode,4),r.put(h.getLength(),C.getLengthInBits(h.mode,t)),h.write(r)}var u=0;for(a=0;a<o.length;a++)u+=o[a].dataCount;if(r.getLengthInBits()>8*u)throw new Error("code length overflow. ("+r.getLengthInBits()+">"+8*u+")");for(r.getLengthInBits()+4<=8*u&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(!1);for(;!(r.getLengthInBits()>=8*u)&&(r.put(n.PAD0,8),!(r.getLengthInBits()>=8*u));)r.put(n.PAD1,8);return n.createBytes(r,o)},n.createBytes=function(t,e){for(var i=0,o=0,r=0,n=new Array(e.length),l=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,u=e[s].totalCount-h;o=Math.max(o,h),r=Math.max(r,u),n[s]=new Array(h);for(var g=0;g<n[s].length;g++)n[s][g]=255&t.buffer[g+i];i+=h;var d=C.getErrorCorrectPolynomial(u),c=new a(n[s],d.getLength()-1).mod(d);l[s]=new Array(d.getLength()-1);for(g=0;g<l[s].length;g++){var f=g+c.getLength()-l[s].length;l[s][g]=f>=0?c.get(f):0}}var p=0;for(g=0;g<e.length;g++)p+=e[g].totalCount;var m=new Array(p),v=0;for(g=0;g<o;g++)for(s=0;s<e.length;s++)g<n[s].length&&(m[v++]=n[s][g]);for(g=0;g<r;g++)for(s=0;s<e.length;s++)g<l[s].length&&(m[v++]=l[s][g]);return m};for(var _={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},y={L:1,M:0,Q:3,H:2},b={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},C={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;C.getBCHDigit(e)-C.getBCHDigit(C.G15)>=0;)e^=C.G15<<C.getBCHDigit(e)-C.getBCHDigit(C.G15);return(t<<10|e)^C.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;C.getBCHDigit(e)-C.getBCHDigit(C.G18)>=0;)e^=C.G18<<C.getBCHDigit(e)-C.getBCHDigit(C.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return C.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case b.PATTERN000:return(e+i)%2==0;case b.PATTERN001:return e%2==0;case b.PATTERN010:return i%3==0;case b.PATTERN011:return(e+i)%3==0;case b.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case b.PATTERN101:return e*i%2+e*i%3==0;case b.PATTERN110:return(e*i%2+e*i%3)%2==0;case b.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),i=0;i<t;i++)e=e.multiply(new a([1,w.gexp(i)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case _.MODE_NUMBER:return 10;case _.MODE_ALPHA_NUM:return 9;case _.MODE_8BIT_BYTE:case _.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case _.MODE_NUMBER:return 12;case _.MODE_ALPHA_NUM:return 11;case _.MODE_8BIT_BYTE:return 16;case _.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case _.MODE_NUMBER:return 14;case _.MODE_ALPHA_NUM:return 13;case _.MODE_8BIT_BYTE:return 16;case _.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,o=0;o<e;o++)for(var r=0;r<e;r++){for(var n=0,a=t.isDark(o,r),l=-1;l<=1;l++)if(!(o+l<0||e<=o+l))for(var s=-1;s<=1;s++)r+s<0||e<=r+s||0==l&&0==s||a==t.isDark(o+l,r+s)&&n++;n>5&&(i+=3+n-5)}for(o=0;o<e-1;o++)for(r=0;r<e-1;r++){var h=0;t.isDark(o,r)&&h++,t.isDark(o+1,r)&&h++,t.isDark(o,r+1)&&h++,t.isDark(o+1,r+1)&&h++,0!=h&&4!=h||(i+=3)}for(o=0;o<e;o++)for(r=0;r<e-6;r++)t.isDark(o,r)&&!t.isDark(o,r+1)&&t.isDark(o,r+2)&&t.isDark(o,r+3)&&t.isDark(o,r+4)&&!t.isDark(o,r+5)&&t.isDark(o,r+6)&&(i+=40);for(r=0;r<e;r++)for(o=0;o<e-6;o++)t.isDark(o,r)&&!t.isDark(o+1,r)&&t.isDark(o+2,r)&&t.isDark(o+3,r)&&t.isDark(o+4,r)&&!t.isDark(o+5,r)&&t.isDark(o+6,r)&&(i+=40);var u=0;for(r=0;r<e;r++)for(o=0;o<e;o++)t.isDark(o,r)&&u++;return i+Math.abs(100*u/e/e-50)/5*10}},w={glog:function(t){if(t<1)throw new Error("glog("+t+")");return w.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return w.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},k=0;k<8;k++)w.EXP_TABLE[k]=1<<k;for(k=8;k<256;k++)w.EXP_TABLE[k]=w.EXP_TABLE[k-4]^w.EXP_TABLE[k-5]^w.EXP_TABLE[k-6]^w.EXP_TABLE[k-8];for(k=0;k<255;k++)w.LOG_TABLE[w.EXP_TABLE[k]]=k;a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var o=0;o<t.getLength();o++)e[i+o]^=w.gexp(w.glog(this.get(i))+w.glog(t.get(o)));return new a(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=w.glog(this.get(0))-w.glog(t.get(0)),i=new Array(this.getLength()),o=0;o<this.getLength();o++)i[o]=this.get(o);for(o=0;o<t.getLength();o++)i[o]^=w.gexp(w.glog(t.get(o))+e);return new a(i,0).mod(t)}},l.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],l.getRSBlocks=function(t,e){var i=l.getRsBlockTable(t,e);if(i==g)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=i.length/3,r=[],n=0;n<o;n++)for(var a=i[3*n+0],s=i[3*n+1],h=i[3*n+2],u=0;u<a;u++)r.push(new l(s,h));return r},l.getRsBlockTable=function(t,e){switch(e){case y.L:return l.RS_BLOCK_TABLE[4*(t-1)+0];case y.M:return l.RS_BLOCK_TABLE[4*(t-1)+1];case y.Q:return l.RS_BLOCK_TABLE[4*(t-1)+2];case y.H:return l.RS_BLOCK_TABLE[4*(t-1)+3];default:return g}},s.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var T=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],A=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var o in e)e.hasOwnProperty(o)&&i.setAttribute(o,e[o]);return i}var i=this._htOption,o=this._el,r=t.getModuleCount();Math.floor(i.width/r),Math.floor(i.height/r),this.clear();var n=e("svg",{viewBox:"0 0 "+String(r)+" "+String(r),width:"100%",height:"100%",fill:i.colorLight});n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.appendChild(n),n.appendChild(e("rect",{fill:i.colorLight,width:"100%",height:"100%"})),n.appendChild(e("rect",{fill:i.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<r;a++)for(var l=0;l<r;l++)if(t.isDark(a,l)){var s=e("use",{x:String(l),y:String(a)});s.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),n.appendChild(s)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),D="svg"===document.documentElement.tagName.toLowerCase()?A:"undefined"!=typeof CanvasRenderingContext2D?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="inline",this._elCanvas.style.display="none"}if(p._android&&p._android<=2.1){var e=1/window.devicePixelRatio,i=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,o,r,n,a,l,s,h,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var g=arguments.length-1;g>=1;g--)arguments[g]=arguments[g]*e;else void 0===h&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);i.apply(this,arguments)}}var o=function(t,e){this._bIsPainted=!1,this._android=h(),this._htOption=e,this._elCanvas=document.createElement("canvas"),t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return o.prototype.draw=function(t){function e(){r.lineWidth=0,r.fillStyle=n.quietZoneColor,r.fillRect(0,0,h._elCanvas.width,n.quietZone),r.fillRect(0,n.quietZone,n.quietZone,h._elCanvas.height-2*n.quietZone),r.fillRect(h._elCanvas.width-n.quietZone,n.quietZone,n.quietZone,h._elCanvas.height-2*n.quietZone),r.fillRect(0,h._elCanvas.height-n.quietZone,h._elCanvas.width,n.quietZone)}function i(t){n.onRenderingStart&&n.onRenderingStart(),n.quietZone>0&&n.quietZoneColor&&e();for(var i=0;i<a;i++)for(var o=0;o<a;o++){var h=o*l+n.quietZone,u=i*s+n.quietZone,g=t.isDark(i,o),d=t.getEye(i,o);if(d){g=d.isDark;var c=d.type,f=n[c]||n[c.substring(0,2)]||n.colorDark;r.lineWidth=0,r.strokeStyle=g?f:n.colorLight,r.fillStyle=g?f:n.colorLight,r.fillRect(h,n.titleHeight+u,l,s)}else{r.lineWidth=0,r.strokeStyle=g?n.colorDark:n.colorLight,r.fillStyle=g?n.colorDark:n.colorLight;var p=n.dotScale;if(6==i){p=1;var m=n.timing_H||n.timing||n.colorDark;r.fillStyle=g?m:n.colorLight,r.strokeStyle=r.fillStyle,r.fillRect(h+l*(1-p)/2,n.titleHeight+u+s*(1-p)/2,l*p,s*p)}else if(6==o){p=1;var v=n.timing_V||n.timing||n.colorDark;r.fillStyle=g?v:n.colorLight,r.strokeStyle=r.fillStyle,r.fillRect(h+l*(1-p)/2,n.titleHeight+u+s*(1-p)/2,l*p,s*p)}else n.backgroundImage?(n.autoColor?(r.strokeStyle=g?"rgba(0, 0, 0, .6)":"rgba(255, 255, 255, .7)",r.fillStyle=g?"rgba(0, 0, 0, .6)":"rgba(255, 255, 255, .7)"):(r.strokeStyle=g?n.colorDark:"rgba(0,0,0,0)",r.fillStyle=g?n.colorDark:"rgba(0,0,0,0)",r.strokeStyle=r.fillStyle),r.fillRect(h+l*(1-p)/2,n.titleHeight+u+s*(1-p)/2,l*p,s*p)):(r.strokeStyle=r.fillStyle,r.fillRect(h+l*(1-p)/2,n.titleHeight+u+s*(1-p)/2,l*p,s*p))}1==n.dotScale||d||(r.strokeStyle=n.colorLight)}if(n.title&&(r.fillStyle=n.titleBackgroundColor,r.fillRect(0,0,this._elCanvas.width,n.titleHeight),r.font=n.titleFont,r.fillStyle=n.titleColor,r.textAlign="center",r.fillText(n.title,this._elCanvas.width/2,30)),n.subTitle&&(r.font=n.subTitleFont,r.fillStyle=n.subTitleColor,r.fillText(n.subTitle,this._elCanvas.width/2,60)),n.logo){var _=new Image,y=this;_.onload=function(){var t,e;t=Math.round(n.width/3.5),e=Math.round(n.height/3.5),t!=e&&(t=e),n.logoWidth&&(t=Math.round(n.logoWidth)),n.logoHeight&&(e=Math.round(n.logoHeight)),n.logoBackgroundTransparent||(r.fillStyle=n.logoBackgroundColor,r.fillRect((n.width+2*n.quietZone-t)/2,(n.height+n.titleHeight+2*n.quietZone-e)/2,t,t)),r.drawImage(_,(n.width+2*n.quietZone-t)/2,(n.height+n.titleHeight+2*n.quietZone-e)/2,t,e),y._bIsPainted=!0,y.makeImage()},_.onerror=function(t){console.error(t)},_.src=n.logo}else this._bIsPainted=!0,this.makeImage()}var o=this._elImage,r=this._oContext,n=this._htOption;n.title||n.subTitle||(n.height-=n.titleHeight,n.titleHeight=0);var a=t.getModuleCount(),l=Math.round(n.width/a),s=Math.round((n.height-n.titleHeight)/a);this._htOption.width=l*a,this._htOption.height=s*a+n.titleHeight,this._htOption.quietZone=Math.round(this._htOption.quietZone),this._elCanvas.width=this._htOption.width+2*this._htOption.quietZone,this._elCanvas.height=this._htOption.height+2*this._htOption.quietZone,o.style.display="none",this.clear();var h=this;if(n.backgroundImage){var u=new Image;u.onload=function(){r.globalAlpha=1,r.globalAlpha=n.backgroundImageAlpha,r.drawImage(u,0,n.titleHeight,n.width+2*n.quietZone,n.height+2*n.quietZone-n.titleHeight),r.globalAlpha=1,i.call(h,t)},u.src=n.backgroundImage}else i.call(h,t)},o.prototype.makeImage=function(){this._bIsPainted&&function(t,e){var i=this;if(i._fFail=e,i._fSuccess=t,null===i._bSupportDataURI){var o=document.createElement("img"),r=function(){i._bSupportDataURI=!1,i._fFail&&i._fFail.call(i)};return o.onabort=r,o.onerror=r,o.onload=function(){i._bSupportDataURI=!0,i._fSuccess&&i._fSuccess.call(i)},void(o.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===i._bSupportDataURI&&i._fSuccess?i._fSuccess.call(i):!1===i._bSupportDataURI&&i._fFail&&i._fFail.call(i)}.call(this,t)},o.prototype.isPainted=function(){return this._bIsPainted},o.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height+50),this._bIsPainted=!1},o.prototype.remove=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height+50),this._bIsPainted=!1,this._el.innerHTML=""},o.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},o}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,i=this._el,o=t.getModuleCount(),r=Math.round(e.width/o),n=Math.round((e.height-e.titleHeight)/o);this._htOption.width=r*o,this._htOption.height=n*o+e.titleHeight,this._htOption.quietZone=Math.round(this._htOption.quietZone);var a=[],l="",s=Math.round(r*e.dotScale),h=Math.round(n*e.dotScale);s<4&&(s=4,h=4);var u=e.colorDark,g=e.colorLight;if(e.backgroundImage){e.autoColor?(e.colorDark="rgba(0, 0, 0, .6);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#99000000', EndColorStr='#99000000');",e.colorLight="rgba(255, 255, 255, .7);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#B2FFFFFF', EndColorStr='#B2FFFFFF');"):e.colorLight="transparent";var d='<div style="display:inline-block; z-index:-10;position:absolute;"><img src="'+e.backgroundImage+'" widht="'+(e.width+2*e.quietZone)+'" height="'+(e.height+2*e.quietZone)+'" style="opacity:'+e.backgroundImageAlpha+";filter:alpha(opacity="+100*e.backgroundImageAlpha+'); "/></div>';a.push(d)}if(e.quietZone&&(l="padding:"+e.quietZone+"px; display:inline-block; width:"+(e.width+2*e.quietZone)+"px; height:"+(e.width+2*e.quietZone)+"px;background:"+e.quietZoneColor+"; text-align:center;"),a.push('<div style="font-size:0;'+l+'">'),a.push('<table  style="font-size:0;border:0;border-collapse:collapse; margin-top:0;" border="0" cellspacing="0" cellspadding="0" align="center" valign="middle">'),a.push('<tr height="'+e.titleHeight+'" align="center"><td style="border:0;border-collapse:collapse;margin:0;padding:0" colspan="'+o+'">'),e.title){var c=e.titleColor,f=e.titleFont;a.push('<div style="width:100%;margin-top:'+e.titleTop+"px;color:"+c+";font:"+f+";background:"+e.titleBackgroundColor+'">'+e.title+"</div>")}e.subTitle&&a.push('<div style="width:100%;margin-top:'+(e.subTitleTop-e.titleTop)+"px;color:"+e.subTitleColor+"; font:"+e.subTitleFont+'">'+e.subTitle+"</div>"),a.push("</td></tr>");for(var p=0;p<o;p++){a.push('<tr style="border:0; padding:0; margin:0;" height="7">');for(var m=0;m<o;m++){var v=t.isDark(p,m),_=t.getEye(p,m);if(_){v=_.isDark;var y=_.type,b=e[y]||e[y.substring(0,2)]||u;a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+n+'px;"><span style="width:'+r+"px;height:"+n+"px;background-color:"+(v?b:g)+';display:inline-block"></span></td>')}else{var C=e.colorDark;6==p?(C=e.timing_H||e.timing||u,a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+n+"px;background-color:"+(v?C:g)+';"></td>')):6==m?(C=e.timing_V||e.timing||u,a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+n+"px;background-color:"+(v?C:g)+';"></td>')):a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+n+'px;"><div style="display:inline-block;width:'+s+"px;height:"+h+"px;background-color:"+(v?C:e.colorLight)+';"></div></td>')}}a.push("</tr>")}if(a.push("</table>"),a.push("</div>"),e.logo){(new Image).src=e.logo;var w=e.width/3.5,k=e.height/3.5;w!=k&&(w=k),e.logoWidth&&(w=e.logoWidth),e.logoHeight&&(k=e.logoHeight);var T="position:relative; z-index:1;display:inline-block;top:-"+((e.height-e.titleHeight)/2+k/2+e.quietZone)+"px;text-align:center; width:"+w+"px; height:"+k+"px;";e.logoBackgroundTransparent||(T+="background:"+e.logoBackgroundColor),a.push('<div style="'+T+'"><img  src="'+e.logo+'" width="'+w+'" height="'+k+'"  style="" /></div>')}e.onRenderingStart&&e.onRenderingStart(),i.innerHTML=a.join("");var A=i.childNodes[0],D=(e.width-A.offsetWidth)/2,E=(e.height-A.offsetHeight)/2;D>0&&E>0&&(A.style.margin=E+"px "+D+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();(d=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:y.H,dotScale:1,quietZone:0,quietZoneColor:"transparent",title:"",titleFont:"bold 16px Arial",titleColor:"#000000",titleBackgroundColor:"#ffffff",titleHeight:0,titleTop:30,subTitle:"",subTitleFont:"14px Arial",subTitleColor:"#4F4F4F",subTitleTop:0,logo:g,logoWidth:g,logoHeight:g,logoBackgroundColor:"#ffffff",logoBackgroundTransparent:!1,PO:g,PI:g,PO_TL:g,PI_TL:g,PO_TR:g,PI_TR:g,PO_BL:g,PI_BL:g,AO:g,AI:g,timing:g,timing_H:g,timing_V:g,backgroundImage:g,backgroundImageAlpha:1,autoColor:!1,onRenderingStart:g},"string"==typeof e&&(e={text:e}),e)for(var i in e)this._htOption[i]=e[i];(this._htOption.dotScale<0||this._htOption.dotScale>1)&&(console.warn(this._htOption.dotScale+" , is invalidate, dotScale must greater than 0, less than or equal to 1, now reset to 1. "),this._htOption.dotScale=1),(this._htOption.backgroundImageAlpha<0||this._htOption.backgroundImageAlpha>1)&&(console.warn(this._htOption.backgroundImageAlpha+" , is invalidate, backgroundImageAlpha must between 0 and 1, now reset to 1. "),this._htOption.backgroundImageAlpha=1),this._htOption.height=this._htOption.height+this._htOption.titleHeight,"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(D=A),this._android=h(),this._el=t,this._oQRCode=null,this._oDrawing=new D(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new n(u(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode)},d.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},d.prototype.clear=function(){this._oDrawing.remove()},d.prototype.noConflict=function(){return p.QRCode===this&&(p.QRCode=v),d},d.CorrectLevel=y,void 0===(o=function(){return d}.apply(e,[]))||(i.exports=o)}).call(this)}).call(e,i("DuR2"),i("3IRH")(t))}});
//# sourceMappingURL=1.c4f81a88cd9823082928.js.map