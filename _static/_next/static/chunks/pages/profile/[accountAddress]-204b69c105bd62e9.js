(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7148],{54290:function(a,c,b){var d=b(6557);a.exports=function(a){return"function"==typeof a?a:d}},98913:function(b,c,a){var d=a(22545),e=a(54290),f=a(40554),g=4294967295,h=Math.min;b.exports=function(a,b){if((a=f(a))<1||a>9007199254740991)return[];var c=g,i=h(a,g);b=e(b),a-=g;for(var j=d(i,b);++c<a;)b(c);return j}},95332:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[accountAddress]",function(){return c(92987)}])},92987:function(f,b,a){"use strict";a.r(b),a.d(b,{default:function(){return D}});var g=a(47568),d=a(34051),h=a.n(d),i=a(85893),j=a(77044),k=a(11163),l=a(48650),e=a(67342),m=a(21280),n=a(4318),o=a(97114),p=a(26170),q=a(99150),r=a(43591),s=a(71424),t=a(7402),u=function(b){var a=b.nfts,c=b.isLoading,d=(0,q.$G)().t;return(0,i.jsx)(i.Fragment,{children:0!==a.length||c?a.length>0?(0,i.jsx)(p.Z,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:a.map(function(a){var b=a.marketData;return(0,i.jsx)(r.ts,{nft:a,currentAskPrice:(null==b?void 0:b.currentAskPrice)&&(null==b?void 0:b.isTradable)&&parseFloat(null==b?void 0:b.currentAskPrice)},"".concat(null==a?void 0:a.tokenId,"-").concat(null==a?void 0:a.collectionName))})}):(0,i.jsx)(s.Z,{}):(0,i.jsxs)(n.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[(0,i.jsx)(t.Z,{}),(0,i.jsx)(o.Z,{pt:"8px",bold:!0,children:d("No NFTs found")})]})})},v=a(10253),w=a(67294),x=a(65528),y=a(75186),z=a(70739),A=a(68461),B=function(a){var b=a.nfts,h=a.isLoading,j=a.onSuccessSale,d=a.onSuccessEditProfile,e=(0,w.useState)({nft:null,location:null}),f=e[0],u=e[1],g=(0,w.useState)({nft:null,location:null,variant:null}),c=g[0],B=g[1],k=(0,v.Z)((0,x.Z)((0,i.jsx)(z.Z,{nft:f.nft,onSuccess:d})),1),C=k[0],l=(0,v.Z)((0,x.Z)((0,i.jsx)(A.Z,{variant:c.variant,nftToSell:c.nft,onSuccessSale:j,onSuccessEditProfile:d})),1),D=l[0],m=(0,q.$G)().t,E=function(b,a){switch(a){case y.Fb.PROFILE:u({nft:b,location:a});break;case y.Fb.WALLET:B({nft:b,location:a,variant:"sell"});break;case y.Fb.FORSALE:B({nft:b,location:a,variant:"edit"})}};return(0,w.useEffect)(function(){f.nft&&C()},[f]),(0,w.useEffect)(function(){c.nft&&D()},[c]),(0,i.jsx)(i.Fragment,{children:0!==b.length||h?b.length>0?(0,i.jsx)(p.Z,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:b.map(function(a){var b=a.marketData,c=a.location;return(0,i.jsx)(r.VK,{isUserNft:!0,onClick:function(){return E(a,c)},nft:a,currentAskPrice:(null==b?void 0:b.currentAskPrice)&&(null==b?void 0:b.isTradable)&&parseFloat(null==b?void 0:b.currentAskPrice),nftLocation:c},"".concat(null==a?void 0:a.tokenId,"-").concat(null==a?void 0:a.collectionName))})}):(0,i.jsx)(s.Z,{}):(0,i.jsxs)(n.Z,{p:"24px",flexDirection:"column",alignItems:"center",children:[(0,i.jsx)(t.Z,{}),(0,i.jsx)(o.Z,{pt:"8px",bold:!0,children:m("No NFTs found")})]})})},C=a(10056),c=function(){var d=(0,j.Ge)().account,a=(0,k.useRouter)().query.accountAddress,n=(null==d?void 0:d.toLowerCase())===(null==a?void 0:a.toLowerCase()),b=(0,l.lC)(a,{revalidateIfStale:!0,revalidateOnFocus:!0,revalidateOnReconnect:!0}),o=b.profile,p=b.isValidating,r=b.refresh,c=(0,C.L)(a,o,p),e=c.nfts,f=c.isLoading,q=c.refresh;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z,{}),n?(0,i.jsx)(B,{nfts:e,isLoading:f,onSuccessSale:q,onSuccessEditProfile:(0,g.Z)(h().mark(function a(){return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r();case 2:q();case 3:case"end":return a.stop()}},a)}))}):(0,i.jsx)(u,{nfts:e,isLoading:f})]})};c.Layout=e.K;var D=c},71424:function(d,b,a){"use strict";var e=a(26042),f=a(69396),g=a(99534),h=a(85893),i=a(44850),j=a(84091),k=a(26170),c=a(98913),l=a.n(c),m=function(a){return(0,h.jsxs)(i.Z,(0,f.Z)((0,e.Z)({},a),{children:[(0,h.jsx)(j.Z,{height:"258px",mb:"8px"}),(0,h.jsx)(j.Z,{width:"30%",mb:"4px"}),(0,h.jsx)(j.Z,{width:"45%",mb:"16px"}),(0,h.jsx)(j.Z,{})]}))};b.Z=function(a){var b=a.numItems,c=(0,g.Z)(a,["numItems"]);return(0,h.jsx)(k.Z,(0,f.Z)((0,e.Z)({gridGap:"16px",gridTemplateColumns:["1fr",null,null,"repeat(4, 1fr)"]},c),{children:l()(void 0===b?12:b).map(function(a){return(0,h.jsx)(m,{},a)})}))}},21280:function(f,b,a){"use strict";a.d(b,{Z:function(){return l}});var g=a(85893),h=a(99150),i=a(11163),j=a(7297),c=a(37282),d=a(87379);function e(){var a=(0,j.Z)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"]);return e=function(){return a},a}var k=(0,d.ZP)(c.Z).withConfig({componentId:"sc-12f79d1a-0"})(e(),function(a){return a.theme.colors.cardBorder}),l=function(){var a=(0,h.$G)().t,b=(0,i.useRouter)(),c=b.query.accountAddress,d=b.asPath,e=[{label:a("Items"),href:"/profile/".concat(c)},{label:a("Activity"),href:"/profile/".concat(c,"/activity")},];return(0,g.jsx)(k,{items:e,activeItem:d,justifyContent:"flex-start",mb:"18px"})}}},function(a){a.O(0,[6197,7603,4408,3114,2010,4554,6165,9774,2888,179],function(){var b;return a(a.s=95332)}),_N_E=a.O()}])
//# sourceMappingURL=[accountAddress]-204b69c105bd62e9.js.map