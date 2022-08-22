"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4583],{4003:function(c,a,b){b.d(a,{BY:function(){return g},Bq:function(){return k},MV:function(){return e},OZ:function(){return d},Rr:function(){return j},Tb:function(){return l},hT:function(){return h},om:function(){return f},si:function(){return m},tE:function(){return n},xy:function(){return i}});var d=2,e=52.1429,f=.0025,g=.0017,h=225e-6,i=575e-6,j=1619136e3,k=86400,l=3600,m=10,n=["0x495c7f3a713870f68f8b418b355c085dfdc412c3","0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea","0xe31debd7abff90b06bca21010dd860d8701fd901","0xfc989fbb6b3024de5ca0144dc23c18a063942ac1","0xe40fc6ff5f2895b44268fd2e1a421e07f567e007","0xfd158609228b43aa380140b46fff3cdf9ad315de","0xc00af6212fcf0e6fd3143e692ccd4191dc308bea","0x205969b3ad459f7eba0dee07231a6357183d3fb6","0x0bd67d358636fd7b0597724aa4f20beedbf3073a","0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075","0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30","0x041929a760d7049edaef0db246fa76ec975e90cc","0xba098df8c6409669f5e6ec971ac02cd5982ac108","0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94","0xe99512305bf42745fae78003428dcaf662afb35d","0xbE609EAcbFca10F6E5504D39E3B113F808389056","0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e","0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b","0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653","0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b",]},71021:function(g,b,a){a.d(b,{jf:function(){return v},l4:function(){return w}});var c=a(47568),h=a(26042),i=a(69396),j=a(10253),k=a(7297),d=a(34051),e=a.n(d),l=a(28687),m=a(67294),n=a(75509),o=a(19683),p=a(2385),q=a(79900),r=a(79566),s=a(40393);function t(){var a=(0,k.Z)(["\n      query pools {\n        now: ","\n        oneDayAgo: ","\n        twoDaysAgo: ","\n        oneWeekAgo: ","\n        twoWeeksAgo: ","\n      }\n    "]);return t=function(){return a},a}var f,u=function(a,b){var c=a?"block: {number: ".concat(a,"}"):"",d='["'.concat(b.join('","'),'"]');return"pairs(\n    where: { id_in: ".concat(d," }\n    ").concat(c,"\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }")},v=(f=(0,c.Z)(e().mark(function a(b,c,d,f,g){var h,i;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,h=(0,l.gql)(t(),u(null,g),u(b,g),u(c,g),u(d,g),u(f,g)),a.next=4,n.dQ.request(h);case 4:return i=a.sent,a.abrupt("return",{data:i,error:!1});case 8:return a.prev=8,a.t0=a.catch(0),console.error("Failed to fetch pool data",a.t0),a.abrupt("return",{error:!0});case 12:case"end":return a.stop()}},a,null,[[0,8]])})),function(a,b,c,d,e){return f.apply(this,arguments)}),w=function(a){return a?a.reduce(function(b,a){var c=a.volumeUSD,d=a.reserveUSD,e=a.reserve0,f=a.reserve1,g=a.token0Price,j=a.token1Price;return b[a.id]=(0,i.Z)((0,h.Z)({},a),{volumeUSD:parseFloat(c),reserveUSD:parseFloat(d),reserve0:parseFloat(e),reserve1:parseFloat(f),token0Price:parseFloat(g),token1Price:parseFloat(j)}),b},{}):{}};b.ZP=function(h){var d=(0,m.useState)({error:!1}),i=d[0],B=d[1],a=(0,j.Z)((0,q.z)(),4),k=a[0],l=a[1],n=a[2],t=a[3],f=(0,r.Z)([k,l,n,t]),g=f.blocks,u=f.error,b=(0,j.Z)(null!=g?g:[],4),x=b[0],y=b[1],z=b[2],A=b[3];return(0,m.useEffect)(function(){var a,b=(a=(0,c.Z)(e().mark(function a(){var b,c,d,f,g,i,k,l,m;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(x.number,y.number,z.number,A.number,h);case 2:c=(b=a.sent).error,d=b.data,c?B({error:!0}):(f=w(null==d?void 0:d.now),g=w(null==d?void 0:d.oneDayAgo),i=w(null==d?void 0:d.twoDaysAgo),k=w(null==d?void 0:d.oneWeekAgo),l=w(null==d?void 0:d.twoWeeksAgo),m=h.reduce(function(e,b){var a=f[b],d=g[b],h=i[b],m=k[b],n=l[b],q=(0,j.Z)((0,o.T)(null==a?void 0:a.volumeUSD,null==d?void 0:d.volumeUSD,null==h?void 0:h.volumeUSD),2),r=q[0],w=q[1],t=(0,j.Z)((0,o.T)(null==a?void 0:a.volumeUSD,null==m?void 0:m.volumeUSD,null==n?void 0:n.volumeUSD),2),u=t[0],x=t[1],v=a?a.reserveUSD:0,y=(0,s.Y)(null==a?void 0:a.reserveUSD,null==d?void 0:d.reserveUSD),z=a?a.reserve0:0,A=a?a.reserve1:0,c=(0,p.z)(r,u,v),B=c.totalFees24h,C=c.totalFees7d,D=c.lpFees24h,E=c.lpFees7d,F=c.lpApr7d;return a&&(e[b]={address:b,token0:{address:a.token0.id,name:a.token0.name,symbol:a.token0.symbol},token1:{address:a.token1.id,name:a.token1.name,symbol:a.token1.symbol},token0Price:a.token0Price,token1Price:a.token1Price,volumeUSD:r,volumeUSDChange:w,volumeUSDWeek:u,volumeUSDChangeWeek:x,totalFees24h:B,totalFees7d:C,lpFees24h:D,lpFees7d:E,lpApr7d:F,liquidityUSD:v,liquidityUSDChange:y,liquidityToken0:z,liquidityToken1:A}),e},{}),B({data:m,error:!1}));case 6:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)}),d=(null==x?void 0:x.number)&&(null==y?void 0:y.number)&&(null==z?void 0:z.number)&&(null==A?void 0:A.number);h.length>0&&d&&!u&&b()},[h,x,y,z,A,u]),i}},56245:function(d,b,a){a.d(b,{d:function(){return f}});var c=a(92077),e=a.n(c),f=function(a,j){var k,b=j||{notation:"compact"},g=b.notation,d=b.displayThreshold,h=b.tokenPrecision,i=b.isInteger;if(0===a)return i?"0":"0.00";if(!a)return"-";if(d&&a<d)return"<".concat(d);if(a<1&&!h)return(k=a).toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];var c=2;h&&(c=a<1?3:2);var f="0.".concat("0".repeat(c),"a");"standard"===(void 0===g?"compact":g)&&(f="0,0.".concat("0".repeat(c))),i&&a<1e3&&(f="0");var l=parseFloat(a.toFixed(c));return e()(l).format(f).toUpperCase()}},12937:function(h,b,a){a.d(b,{z:function(){return p}});var c=a(47568),i=a(7297),d=a(34051),e=a.n(d),f=a(75472),j=a.n(f),k=a(28687),l=a(75126),m=a(85906);function n(){var a=(0,i.Z)(["query blocks {\n    ","\n  }"]);return n=function(){return a},a}var g,o=function(a){return(0,k.gql)(n(),a)},p=(g=(0,c.Z)(e().mark(function a(b){var c,d,f,g,h,i,k,n,p,q,r=arguments;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=r.length>1&& void 0!==r[1]?r[1]:"desc",d=r.length>2&& void 0!==r[2]?r[2]:500,(null==b?void 0:b.length)!==0){a.next=3;break}return a.abrupt("return",[]);case 3:var e;return a.next=5,(0,l.L)(o,(e=b).map(function(a){return"t".concat(a,":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ").concat(a,", timestamp_lt: ").concat(a+600," }) {\n      number\n    }")}),m.I0,d);case 5:if(f=a.sent,g=[],!f){a.next=26;break}for(h=!0,i=!1,k=void 0,a.prev=9,n=Object.keys(f)[Symbol.iterator]();!(h=(p=n.next()).done);h=!0)f[q=p.value].length>0&&g.push({timestamp:q.split("t")[1],number:parseInt(f[q][0].number,10)});a.next=17;break;case 13:a.prev=13,a.t0=a.catch(9),i=!0,k=a.t0;case 17:a.prev=17,a.prev=18,h||null==n.return||n.return();case 20:if(a.prev=20,!i){a.next=23;break}throw k;case 23:return a.finish(20);case 24:return a.finish(17);case 25:return a.abrupt("return",j()(g,function(a){return a.number},c));case 26:return a.abrupt("return",g);case 27:case"end":return a.stop()}},a,null,[[9,13,17,25],[18,,20,24]])})),function(a){return g.apply(this,arguments)})},19683:function(c,b,a){a.d(b,{T:function(){return e}});var d=a(40393),e=function(c,a,e){var b=(0,d.D)(c,a),f=(0,d.D)(a,e),g=(0,d.Y)(b,f);return[b,g]}},79900:function(c,b,a){a.d(b,{z:function(){return h}});var d=a(99982),e=a(18717),f=a(7069),g=a(77982),h=function(){var a=1e3*(0,d.Z)(new Date),b=(0,d.Z)((0,e.Z)((0,f.default)(a,1))),c=(0,d.Z)((0,e.Z)((0,f.default)(a,2))),h=(0,d.Z)((0,e.Z)((0,g.default)(a,1))),i=(0,d.Z)((0,e.Z)((0,g.default)(a,2)));return[b,c,h,i]}},2385:function(c,b,a){a.d(b,{z:function(){return e}});var d=a(4003),e=function(b,a,c){var f=b*d.om,g=a*d.om,h=b*d.BY,i=a*d.BY,e=c>0?a*d.BY*d.MV*100/c:0;return{totalFees24h:f,totalFees7d:g,lpFees24h:h,lpFees7d:i,lpApr7d:e!==1/0?e:0}}},75509:function(g,e,a){a.d(e,{dQ:function(){return h},vA:function(){return f}});var b=a(85906),c=a(28687),d=a(34155),f=function(a){if(a===b.JY)return{"X-Sf":d.env.NEXT_PUBLIC_SF_HEADER||window.sfHeader}},h=new c.GraphQLClient(b.JY,{headers:f(b.JY)});new c.GraphQLClient(b.JY,{headers:{"X-Sf":d.env.SF_HEADER},timeout:5e3}),new c.GraphQLClient("https://graphql.bitquery.io",{headers:{"X-API-KEY":d.env.BIT_QUERY_HEADER},timeout:5e3})},261:function(b,a){a.Z=function(a,b,c){var d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:3e4;return Promise.race([c?a.request(b,c):a.request(b),new Promise(function(a,b){setTimeout(function(){b(Error("Request timed out after ".concat(d," milliseconds")))},d)}),])}},79566:function(d,b,a){a.d(b,{Z:function(){return i}});var e=a(47568),c=a(34051),f=a.n(c),g=a(67294),h=a(12937),i=function(i){var j=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"desc",k=arguments.length>2&& void 0!==arguments[2]?arguments[2]:1e3,b=(0,g.useState)(),a=b[0],n=b[1],c=(0,g.useState)(!1),d=c[0],o=c[1],l=JSON.stringify(i),m=a?JSON.stringify(a):void 0;return(0,g.useEffect)(function(){var a,b=(a=(0,e.Z)(f().mark(function a(){var b,c;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=JSON.parse(l),a.next=3,(0,h.z)(b,j,k);case 3:0===(c=a.sent).length?o(!0):n(c);case 5:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)});(m?JSON.parse(m):void 0)||d||b()},[m,d,k,j,l]),{blocks:a,error:d}}},40393:function(c,a,b){b.d(a,{D:function(){return d},Y:function(){return e}});var d=function(a,b){return a&&b?a-b:a||0},e=function(b,a){return b&&a?(b-a)/a*100:0}},75126:function(g,b,a){a.d(b,{L:function(){return l}});var c,d=a(47568),h=a(26042),e=a(34051),f=a.n(e),i=a(28687),j=a(75509),k=a(261),l=(c=(0,d.Z)(f().mark(function a(b,c,d){var e,g,l,m,n,o,p,q,r=arguments;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e=r.length>3&& void 0!==r[3]?r[3]:1e3,g={},l=!1,m=0,n=new i.GraphQLClient(d,{headers:(0,j.vA)(d)}),a.prev=5;case 6:if(l){a.next=18;break}return o=c.length,m+e<c.length&&(o=m+e),p=c.slice(m,o),a.next=12,(0,k.Z)(n,b(p));case 12:q=a.sent,g=(0,h.Z)({},g,q),l=Object.keys(q).length<e||m+e>c.length,m+=e,a.next=6;break;case 18:return a.abrupt("return",g);case 21:return a.prev=21,a.t0=a.catch(5),console.error("Failed to fetch info data",a.t0),a.abrupt("return",null);case 25:case"end":return a.stop()}},a,null,[[5,21]])})),function(a,b,d){return c.apply(this,arguments)})}}])
//# sourceMappingURL=4583-de164762d07d3ee6.js.map