(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9855],{43174:function(a,d,b){var c=b(55189)(function(a,b,c){a[c?0:1].push(b)},function(){return[[],[]]});a.exports=c},18842:function(f,c,a){"use strict";var g=a(26042),h=a(69396),i=a(99534),j=a(7297),k=a(85893);a(67294);var d=a(87379);function e(){var a=(0,j.Z)(["\n  z-index: ",";\n  background-color: ",";\n  color: white;\n  margin: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ",";\n  top: 0;\n  text-align: center;\n  transform: ",";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",';\n    content: "";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n']);return e=function(){return a},a}var l=d.ZP.div.withConfig({componentId:"sc-6cfbbab7-0"}).withConfig({componentId:"sc-979ef4ea-0"})(e(),function(a){return a.theme.zIndices.ribbon},function(a){var b=a.variantColor;return a.theme.colors[void 0===b?"secondary":b]},function(a){return"right"===a.ribbonPosition?0:"auto"},function(a){return"right"===a.ribbonPosition?"translateX(30%) translateY(0%) rotate(45deg)":"translateX(0%) translateY(200%) rotate(-45deg)"},function(a){var b=a.variantColor;return a.theme.colors[void 0===b?"secondary":b]}),b=function(a){var c=a.variantColor,b=a.text,d=a.ribbonPosition,e=(0,i.Z)(a,["variantColor","text","ribbonPosition"]);return(0,k.jsx)(l,(0,h.Z)((0,g.Z)({variantColor:c,ribbonPosition:d},e),{children:(0,k.jsx)("div",{title:b,children:b})}))};b.defaultProps={ribbonPosition:"right"},c.Z=b},99855:function(G,g,a){"use strict";a.d(g,{Z:function(){return bx}});var H=a(10253),I=a(7297),J=a(85893),d=a(67294),b=a(87379),K=a(2593),L=a(61744),h=a(44431),M=a.n(h),N=a(77044),e=a(97114),f=a(4318),i=a(80421),O=a(59750),j=a(75472),P=a.n(j),k=a(43174),Q=a.n(k),R=a(99150),S=a(76538),T=a(23637),U=a(11438),l=a(40508),V=a(83559),W=a(44482),X=a(14450),Y=a(37370),Z=a(45101),$=a(68605),_=a(46245),aa=a(11163),ab=a(8080),ac=a(37063),m=a(37519),ad=a(18842),ae=a(23774),af=a(30621),ag=a(35128),ah=a(95239),ai=a(36544),aj=a(17634),ak=a(67802),al=function(a){var d=a.pool,i=a.stakedBalance,e=a.performanceFee,g=a.showIcon,b=(0,R.$G)().t,h=d.vaultKey,j=b(h?"APY includes compounding, APR doesn\u2019t. This pool\u2019s OVE is compounded automatically, so we show APY.":"This pool\u2019s rewards aren\u2019t compounded automatically, so we show APR"),c=(0,ai.Z)(j,{placement:"bottom-start"}),k=c.targetRef,l=c.tooltip,m=c.tooltipVisible;return(0,J.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[m&&l,(0,J.jsx)(aj.Z,{ref:k,children:h?"".concat(b("APY"),":"):"".concat(b("APR"),":")}),(0,J.jsx)(ak.Z,{pool:d,stakedBalance:i,performanceFee:void 0===e?0:e,showIcon:void 0===g||g})]})},am=a(12020),an=a(73322),ao=a(68624),ap=a(44850),aq=a(97971),ar=a(67532),as=a(84091),at=a(96293),au=a(19729),av=a(5039),aw=a(51029),ax=function(c){var a=c.pool,d=c.isLoading,f=a.sousId,g=a.stakingToken,h=a.earningToken,i=(0,R.$G)().t,j=(0,av.X_)(g.address||""),e=(0,aw.iB)(j,f,h.symbol),k=e.handleApprove,b=e.pendingTx;return(0,J.jsx)(J.Fragment,{children:void 0!==d&&d?(0,J.jsx)(as.Z,{width:"100%",height:"52px"}):(0,J.jsx)(at.Z,{isLoading:b,endIcon:b?(0,J.jsx)(au.Z,{spin:!0,color:"currentColor"}):null,disabled:b,onClick:k,width:"100%",children:i("Enable")})})},ay=a(65528),az=a(5527),aA=a(72943),aB=a(543),aC=a(65044),aD=a(20922),aE=a(67576),aF=a(29458),aG=function(b){var a=b.pool,c=b.stakingTokenBalance,i=b.stakedBalance,j=b.isBnbPool,q=b.isStaked,k=b.isLoading,g=a.stakingToken,d=a.stakingTokenPrice,l=a.stakingLimit,m=a.isFinished,r=a.userData,n=(0,R.$G)().t,s=(0,aC.mW)(i,g.decimals),t=(0,aC.mW)(i.multipliedBy(d),g.decimals),o=(0,H.Z)((0,ay.Z)((0,J.jsx)(aE.Z,{tokenSymbol:g.symbol})),1)[0],p=(0,H.Z)((0,ay.Z)((0,J.jsx)(aF.Z,{isBnbPool:j,pool:a,stakingTokenBalance:c,stakingTokenPrice:d})),1)[0],u=(0,H.Z)((0,ay.Z)((0,J.jsx)(aF.Z,{stakingTokenBalance:c,isBnbPool:j,pool:a,stakingTokenPrice:d,isRemovingStake:!0})),1)[0],h=(0,ai.Z)(n("You\u2019ve already staked the maximum amount you can stake in this pool!"),{placement:"bottom"}),v=h.targetRef,w=h.tooltip,x=h.tooltipVisible,y=l.gt(0)&&r.stakedBalance.gte(l);return(0,J.jsx)(f.Z,{flexDirection:"column",children:void 0!==k&&k?(0,J.jsx)(as.Z,{width:"100%",height:"52px"}):q?(0,J.jsxs)(f.Z,{justifyContent:"space-between",alignItems:"center",children:[(0,J.jsx)(f.Z,{flexDirection:"column",children:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(aD.Z,{bold:!0,fontSize:"20px",decimals:3,value:s}),0!==d&&(0,J.jsx)(e.Z,{fontSize:"12px",color:"textSubtle",children:(0,J.jsx)(aD.Z,{fontSize:"12px",color:"textSubtle",decimals:2,value:t,prefix:"~",unit:" USD"})})]})}),(0,J.jsxs)(f.Z,{children:[(0,J.jsx)(az.Z,{variant:"secondary",onClick:u,mr:"6px",children:(0,J.jsx)(aA.Z,{color:"primary",width:"24px"})}),y?(0,J.jsx)("span",{ref:v,children:(0,J.jsx)(az.Z,{variant:"secondary",disabled:!0,children:(0,J.jsx)(aB.Z,{color:"textDisabled",width:"24px",height:"24px"})})}):(0,J.jsx)(az.Z,{variant:"secondary",onClick:c.gt(0)?p:o,disabled:m,children:(0,J.jsx)(aB.Z,{color:"primary",width:"24px",height:"24px"})})]}),x&&w]}):(0,J.jsx)(at.Z,{disabled:m,onClick:c.gt(0)?p:o,children:n("Stake")})})},aH=a(68971),aI=function(a){var b=a.earnings,c=a.earningToken,d=a.sousId,m=a.isBnbPool,g=a.earningTokenPrice,h=a.isLoading,n=(0,R.$G)().t,i=(0,aC.mW)(b,c.decimals),o=(0,aC.uf)(i,3,3),j=(0,aC.mW)(b.multipliedBy(g),c.decimals),p=(0,aC.NJ)(b,c.decimals),k=b.toNumber()>0,l=0===d,q=(0,H.Z)((0,ay.Z)((0,J.jsx)(aH.Z,{formattedBalance:o,fullBalance:p,earningToken:c,earningsDollarValue:j,sousId:d,isBnbPool:m,isCompoundPool:l})),1),r=q[0];return(0,J.jsxs)(f.Z,{justifyContent:"space-between",alignItems:"center",mb:"16px",children:[(0,J.jsx)(f.Z,{flexDirection:"column",children:void 0!==h&&h?(0,J.jsx)(as.Z,{width:"80px",height:"48px"}):(0,J.jsx)(J.Fragment,{children:k?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(aD.Z,{bold:!0,fontSize:"20px",decimals:5,value:i}),g>0&&(0,J.jsx)(aD.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:j,unit:" USD"})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(O.Z,{color:"textDisabled",children:"0"}),(0,J.jsx)(e.Z,{fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})}),(0,J.jsx)(at.Z,{disabled:!k,onClick:r,children:n(l?"Collect":"Harvest")})]})},aJ=a(95506);function n(){var a=(0,I.Z)(["\n  display: inline;\n"]);return n=function(){return a},a}var aK=(0,b.ZP)(e.Z).withConfig({componentId:"sc-b5cd1ad6-0"})(n()),aL=function(h){var b=h.pool,i=h.stakedBalance,n=b.sousId,j=b.stakingToken,k=b.earningToken,o=b.poolCategory,a=b.userData,p=b.earningTokenPrice,l=b.profileRequirement,d=o===aq.jh.BINANCE,e=(0,R.$G)().t,q=(null==a?void 0:a.allowance)?new(M())(a.allowance):ag.HW,r=(null==a?void 0:a.stakingTokenBalance)?new(M())(a.stakingTokenBalance):ag.HW,s=(null==a?void 0:a.pendingReward)?new(M())(a.pendingReward):ag.HW,t=!q.gt(0)&&!d,c=i.gt(0),g=!a,m=(0,ar.f)(l),u=m.notMeetRequired,v=m.notMeetThreshold;return(0,J.jsx)(f.Z,{flexDirection:"column",children:(0,J.jsxs)(f.Z,{flexDirection:"column",children:[(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(ap.Z,{display:"inline",children:[(0,J.jsx)(aK,{color:"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:"".concat(k.symbol," ")}),(0,J.jsx)(aK,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:e("Earned")})]}),(0,J.jsx)(aI,{earnings:s,earningToken:k,sousId:n,earningTokenPrice:p,isBnbPool:d,isLoading:g})]}),(0,J.jsxs)(ap.Z,{display:"inline",children:[(0,J.jsxs)(aK,{color:c?"secondary":"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[c?j.symbol:e("Stake")," "]}),(0,J.jsx)(aK,{color:c?"textSubtle":"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:c?e("Staked"):"".concat(j.symbol)})]}),u||v?(0,J.jsx)(aJ.Q,{profileRequirement:l}):t?(0,J.jsx)(ax,{pool:b,isLoading:g}):(0,J.jsx)(aG,{isLoading:g,pool:b,stakingTokenBalance:r,stakedBalance:i,isBnbPool:d,isStaked:c})]})})},aM=function(i){var a=i.pool,j=i.account,k=a.sousId,l=a.stakingToken,c=a.earningToken,d=a.isFinished,g=a.userData,b=(0,R.$G)().t,h=(null==g?void 0:g.stakedBalance)?new(M())(g.stakedBalance):ag.HW,n=h.gt(0),m="OVE"===c.symbol&&"OVE"===l.symbol;return(0,J.jsxs)(am.r,{isFinished:d&&0!==k,ribbon:d&&(0,J.jsx)(ad.Z,{variantColor:"textDisabled",text:b("Finished")}),children:[(0,J.jsxs)(ao.Z,{isStaking:n,isFinished:d&&0!==k,children:[(0,J.jsx)(ao.e,{title:m?b("Manual"):b("Earn %asset%",{asset:c.symbol}),subTitle:b(m?"Earn OVE, stake OVE":"Stake OVE")}),(0,J.jsx)(ah.q,{primaryToken:c,secondaryToken:l,width:64,height:64})]}),(0,J.jsxs)(ae.Z,{children:[(0,J.jsx)(al,{pool:a,stakedBalance:h}),(0,J.jsx)(f.Z,{mt:"24px",flexDirection:"column",children:j?(0,J.jsx)(aL,{pool:a,stakedBalance:h}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(e.Z,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:b("Start earning")}),(0,J.jsx)(af.Z,{})]})})]}),(0,J.jsx)(an.Z,{pool:a,account:j})]})},aN=a(43444),aO=a(53629),aP=a(31455),aQ=a(50156),aR=a(39320),aS=a(45341),aT=a(20508);function o(){var a=(0,I.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return o=function(){return a},a}function p(){var a=(0,I.Z)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"]);return p=function(){return a},a}function q(){var a=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"]);return q=function(){return a},a}var aU=b.ZP.div.withConfig({componentId:"sc-1497ab5-0"})(o(),e.Z),aV=b.ZP.div.withConfig({componentId:"sc-1497ab5-1"})(p(),function(a){return a.theme.mediaQueries.sm}),aW=b.ZP.div.withConfig({componentId:"sc-1497ab5-2"})(q(),function(a){return a.theme.mediaQueries.sm}),aX=function(a){var d=a.stakedOnly,m=a.setStakedOnly,f=a.hasStakeInFinishedPools,g=a.viewMode,h=a.setViewMode,c=(0,aa.useRouter)(),b=(0,R.$G)().t,i="/pools"===c.asPath||"/_mp/pools"===c.asPath,j=(0,J.jsx)(aP.Z,{idPrefix:"clickPool",viewMode:g,onToggle:h}),k=(0,J.jsx)(aW,{children:(0,J.jsxs)(aQ.Z,{activeIndex:i?0:1,scale:"sm",variant:"subtle",children:[(0,J.jsx)(aR.Z,{as:aO.a,to:"/pools",replace:!0,children:b("Live")}),(0,J.jsx)(aS.Z,{show:f,children:(0,J.jsx)(aR.Z,{id:"finished-pools-button",as:aO.a,to:"/pools/history",replace:!0,children:b("Finished")})})]})}),l=(0,J.jsxs)(aU,{children:[(0,J.jsx)(aT.Z,{checked:d,onChange:function(){return m(!d)},scale:"sm"}),(0,J.jsxs)(e.Z,{children:[" ",b("Staked only")]})]});return(0,J.jsxs)(aV,{children:[j,l,k]})},aY=a(40447),aZ=a(98946),a$=a(14405),c=a(70709);function r(){var a=(0,I.Z)(["\n  flex: 4.5;\n  "," {\n    flex: 1 0 120px;\n  }\n"]);return r=function(){return a},a}var a_=(0,b.ZP)(c.Z).withConfig({componentId:"sc-3267914a-0"})(r(),function(a){return a.theme.mediaQueries.sm}),a0=function(i){var a=i.pool,j=i.account,p=(0,R.$G)().t,k=(0,aZ.Z)().isMobile,l=a.sousId,b=a.earningToken,q=a.poolCategory,h=a.userData,m=a.earningTokenPrice,g=(null==h?void 0:h.pendingReward)?new(M())(h.pendingReward):ag.HW,n=(0,aC.mW)(g,b.decimals),o=(0,aC.mW)(g.multipliedBy(m),b.decimals),d=j&&g.gt(0),r=(0,aC.NJ)(g,b.decimals),s=(0,aC.uf)(n,3,3),t=q===aq.jh.BINANCE,u=p("%asset% Earned",{asset:b.symbol}),v=(0,H.Z)((0,ay.Z)((0,J.jsx)(aH.Z,{formattedBalance:s,fullBalance:r,earningToken:b,earningsDollarValue:o,sousId:l,isBnbPool:t,isCompoundPool:0===l})),1),w=v[0];return(0,J.jsx)(a_,{role:"cell",children:(0,J.jsxs)(c.J,{children:[(0,J.jsx)(e.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:u}),!a.userDataLoaded&&j?(0,J.jsx)(as.Z,{width:"80px",height:"16px"}):(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(f.Z,{children:(0,J.jsxs)(ap.Z,{mr:"8px",height:"32px",onClick:d?function(a){a.stopPropagation(),w()}:void 0,children:[(0,J.jsx)(aD.Z,{mt:"4px",bold:!k,fontSize:k?"14px":"16px",color:d?"primary":"textDisabled",decimals:d?5:1,value:d?n:0}),d?(0,J.jsx)(J.Fragment,{children:m>0&&(0,J.jsx)(aD.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:o,unit:" USD"})}):(0,J.jsx)(e.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},a1=a(81401);function s(){var a=(0,I.Z)(["\n  flex: 2 0 100px;\n"]);return s=function(){return a},a}var a2=(0,b.ZP)(c.Z).withConfig({componentId:"sc-f8a117c9-0"})(s()),a3=function(h){var a=h.pool,i=(0,R.$G)().t,j=a.stakingToken,b=a.totalStaked,g=a.vaultKey,k=(0,T.eB)(g).totalCakeInVault,l=(0,d.useMemo)(function(){return g?(0,aC.mW)(k,j.decimals):(0,aC.mW)(b,j.decimals)},[g,k,b,j.decimals]);return(0,J.jsx)(a2,{role:"cell",children:(0,J.jsxs)(c.J,{children:[(0,J.jsx)(e.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:i("Total staked")}),b&&b.gte(0)?(0,J.jsx)(f.Z,{height:"20px",alignItems:"center",children:(0,J.jsx)(aD.Z,{fontSize:"16px",value:l,decimals:0,unit:" OVE"})}):(0,J.jsx)(as.Z,{width:"80px",height:"16px"})]})})},a4=a(22491),a5=a(93293),a6=a(53136);function t(){var a=(0,I.Z)(["\n  flex: 2 0 100px;\n"]);return t=function(){return a},a}var a7=(0,b.ZP)(c.Z).withConfig({componentId:"sc-4c423023-0"})(t()),a8=function(k){var a=k.pool,l=a.sousId,m=a.totalStaked,n=a.startBlock,o=a.endBlock,p=a.isFinished,g=(0,ac.je)(),h=(0,R.$G)().t,b=(0,a6.zy)(a,g),j=b.shouldShowBlockCountdown,q=b.blocksUntilStart,r=b.blocksRemaining,d=b.hasPoolStarted,s=b.blocksToDisplay,t=j?(0,J.jsxs)(f.Z,{alignItems:"center",children:[(0,J.jsxs)(f.Z,{flex:"1.3",children:[(0,J.jsx)(aD.Z,{fontSize:"16px",value:s,decimals:0}),(0,J.jsx)(e.Z,{ml:"4px",textTransform:"lowercase",children:h("Blocks")})]}),(0,J.jsx)(f.Z,{flex:"1",children:(0,J.jsx)(i.Z,{external:!0,href:(0,a5.s6)(d?o:n,"countdown"),onClick:function(a){return a.stopPropagation()},children:(0,J.jsx)(a4.Z,{ml:"4px"})})})]}):(0,J.jsx)(e.Z,{children:"-"}),u=d&&!m.gt(0)||!g|| !r&&!q;return(0,J.jsx)(a7,{role:"cell",children:(0,J.jsxs)(c.J,{children:[(0,J.jsx)(e.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:h(d||!j?"Ends in":"Starts in")}),u&&0!==l&&!p?(0,J.jsx)(as.Z,{width:"80px",height:"16px"}):t]})})},a9=a(26347),ba=a(39442),bb=a(64030);function u(){var a=(0,I.Z)([""]);return u=function(){return a},a}var bc=(0,b.ZP)(c.Z).withConfig({componentId:"sc-3c2bdc91-0"})(u()),bd=function(j){var a=j.pool,k=j.account,q=(0,R.$G)().t,l=(0,aZ.Z)().isMobile,m=(0,T.eB)(a.vaultKey),d=m.userData,r=d.userShares,n=d.balance,s=n.cakeAsBigNumber,o=n.cakeAsNumberBalance,t=d.isLoading,u=r.gt(0),v=a.vaultKey&&u,p=a.stakingTokenPrice,g=a.stakingToken,h=a.userData,w=(0,aC.mW)(s.multipliedBy(p),g.decimals),i=(null==h?void 0:h.stakedBalance)?new(M())(h.stakedBalance):ag.HW,x=(0,aC.mW)(i,g.decimals),y=(0,aC.mW)(i.multipliedBy(p),g.decimals),z="".concat(a.stakingToken.symbol," ").concat(q(a.vaultKey===Z.om.CakeVault&&m.userData.locked?"Locked":"Staked")),b=k&&(i.gt(0)||v),A=a.vaultKey?t:!a.userDataLoaded;return(0,J.jsx)(bc,{role:"cell",flex:a.vaultKey===Z.om.CakeFlexibleSideVault?"1 0 162px":a.vaultKey!==Z.om.CakeVault||b?"2 0 100px":"1 0 120px",children:(0,J.jsxs)(c.J,{children:[(0,J.jsx)(e.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:z}),A&&k?(0,J.jsx)(as.Z,{width:"80px",height:"16px"}):(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(f.Z,{children:(0,J.jsxs)(ap.Z,{mr:"8px",height:"32px",children:[(0,J.jsx)(aD.Z,{mt:"4px",bold:!l,fontSize:l?"14px":"16px",color:b?"primary":"textDisabled",decimals:b?5:1,value:b?a.vaultKey?Number.isNaN(o)?0:o:x:0}),b?(0,J.jsx)(aD.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:a.vaultKey?w:y,unit:" USD"}):(0,J.jsx)(e.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},be=a(30798),bf=a(52079);function v(){var a=(0,I.Z)(["\n  background-color: transparent;\n  display: flex;\n  cursor: pointer;\n"]);return v=function(){return a},a}var bg=b.ZP.div.withConfig({componentId:"sc-485e2415-0"})(v()),bh=(0,d.memo)(function(a){var g=a.children,h=a.panel,b=a.initialActivity,m=(0,d.useRef)(!1),c=(0,aZ.Z)(),i=c.isTablet,j=c.isDesktop,e=(0,d.useState)(b),f=e[0],n=e[1],k=(0,be.Z)(f,300),l=(0,d.useCallback)(function(){n(function(a){return!a})},[]);return(0,d.useEffect)(function(){b&& !1===m.current&&(n(b),m.current=!0)},[b]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(bg,{role:"row",onClick:l,children:[g,(0,J.jsx)(bf.Z,{expanded:f,isFullLayout:i||j})]}),k&&h]})}),bi=(0,d.memo)(function(c){var i=c.vaultKey,d=c.account,j=c.initialActivity,a=(0,aZ.Z)(),k=a.isXs,l=a.isSm,m=a.isMd,g=a.isLg,e=a.isXl,f=a.isXxl,h=e||f,b=(0,T.YX)(i);return(0,J.jsxs)(bh,{initialActivity:j,panel:(0,J.jsx)(a9.Z,{account:d,pool:b,expanded:!0,breakpoints:{isXs:k,isSm:l,isMd:m,isLg:g,isXl:e,isXxl:f}}),children:[(0,J.jsx)(a$.Z,{pool:b}),h&&(0,J.jsx)(ba.Z,{pool:b,account:d}),h?(0,J.jsx)(bd,{pool:b,account:d}):null,(0,J.jsx)(bb.Z,{pool:b}),(g||e||f)&&(0,J.jsx)(a3,{pool:b})]})}),bj=(0,d.memo)(function(c){var h=c.sousId,d=c.account,i=c.initialActivity,a=(0,aZ.Z)(),j=a.isXs,k=a.isSm,l=a.isMd,e=a.isLg,f=a.isXl,g=a.isXxl,m=a.isDesktop,b=(0,T.AI)(h).pool;return(0,J.jsxs)(bh,{initialActivity:i,panel:(0,J.jsx)(a9.Z,{account:d,pool:b,expanded:!0,breakpoints:{isXs:j,isSm:k,isMd:l,isLg:e,isXl:f,isXxl:g}}),children:[(0,J.jsx)(a$.Z,{pool:b}),(0,J.jsx)(a0,{pool:b,account:d}),(e||f||g)&&(0,J.jsx)(a3,{pool:b}),(0,J.jsx)(a1.Z,{pool:b}),m&&(0,J.jsx)(a8,{pool:b})]})});function w(){var a=(0,I.Z)(["\n  border-radius: ",";\n  scroll-margin-top: 64px;\n\n  background-color: ",";\n  > div:not(:last-child) {\n    border-bottom: 2px solid ",";\n  }\n"]);return w=function(){return a},a}function x(){var a=(0,I.Z)(["\n  border-radius: ",";\n  background-color: ",";\n  padding: 1px 1px 3px 1px;\n  background-size: 400% 400%;\n"]);return x=function(){return a},a}function y(){var a=(0,I.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]);return y=function(){return a},a}var bk=b.ZP.div.withConfig({componentId:"sc-f5e8054-0"})(w(),function(a){return a.theme.radii.card},function(a){return a.theme.card.background},function(a){return a.theme.colors.disabled}),bl=b.ZP.div.withConfig({componentId:"sc-f5e8054-1"})(x(),function(a){return a.theme.radii.card},function(a){return a.theme.colors.cardBorder}),bm=b.ZP.div.withConfig({componentId:"sc-f5e8054-2"})(y()),bn=function(a){var b=a.pools,f=a.account,g=a.urlSearch,c=(0,R.$G)().t,e=(0,d.useRef)(null);return(0,J.jsx)(bl,{children:(0,J.jsxs)(bk,{id:"pools-table",role:"table",ref:e,children:[b.map(function(a){var b,c;return a.vaultKey?(0,J.jsx)(bi,{initialActivity:g.toLowerCase()===(null===(b=a.earningToken.symbol)|| void 0===b?void 0:b.toLowerCase()),vaultKey:a.vaultKey,account:f},a.vaultKey):(0,J.jsx)(bj,{initialActivity:g.toLowerCase()===(null===(c=a.earningToken.symbol)|| void 0===c?void 0:c.toLowerCase()),sousId:a.sousId,account:f},a.sousId)}),(0,J.jsx)(bm,{children:(0,J.jsxs)(at.Z,{variant:"text",onClick:function(){window.scrollTo({top:e.current.offsetTop,behavior:"smooth"})},children:[c("To Top"),(0,J.jsx)(aY.Z,{color:"primary"})]})})]})})};function z(){var a=(0,I.Z)(["\n  justify-content: center;\n"]);return z=function(){return a},a}function A(){var a=(0,I.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"]);return A=function(){return a},a}function B(){var a=(0,I.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  "," {\n    width: auto;\n    padding: 0;\n  }\n"]);return B=function(){return a},a}function C(){var a=(0,I.Z)(["\n  > "," {\n    font-size: 12px;\n  }\n"]);return C=function(){return a},a}function D(){var a=(0,I.Z)(["\n  > div {\n    flex: 1;\n  }\n"]);return D=function(){return a},a}function E(){var a=(0,I.Z)(["\n  padding-bottom: 32px;\n  flex-direction: column;\n  "," {\n    flex-direction: row;\n  }\n"]);return E=function(){return a},a}function F(){var a=(0,I.Z)(["\n  font-weight: 400;\n  white-space: nowrap;\n  text-decoration: underline;\n"]);return F=function(){return a},a}var bo=(0,b.ZP)(l.Z).withConfig({componentId:"sc-644ab6e0-0"})(z()),bp=b.ZP.div.withConfig({componentId:"sc-644ab6e0-1"})(A(),function(a){return a.theme.mediaQueries.sm}),bq=b.ZP.div.withConfig({componentId:"sc-644ab6e0-2"})(B(),function(a){return a.theme.mediaQueries.sm}),br=b.ZP.div.withConfig({componentId:"sc-644ab6e0-3"})(C(),e.Z),bs=(0,b.ZP)(f.Z).withConfig({componentId:"sc-644ab6e0-4"})(D()),bt=(0,b.ZP)(f.Z).withConfig({componentId:"sc-644ab6e0-5"})(E(),function(a){return a.theme.mediaQueries.md}),bu=(0,b.ZP)(i.Z).withConfig({componentId:"sc-644ab6e0-6"})(F()),bv=function(c,b,d,a){switch(b){case"apr":return P()(a,function(a){return a.apr?a.apr:0},"desc");case"earned":return P()(a,function(a){if(!a.userData||!a.earningTokenPrice)return 0;if(a.vaultKey){var b=a.userData,d=a.pricePerFullShare;return b&&b.userShares?(0,a6.UN)(c,b.cakeAtLastUserAction,b.userShares,d,a.earningTokenPrice,a.vaultKey===Z.om.CakeVault?a.userData.currentPerformanceFee.plus(a.userData.currentOverdueFee):null).autoUsdToDisplay:0}return a.userData.pendingReward.times(a.earningTokenPrice).toNumber()},"desc");case"totalStaked":return P()(a,function(a){var c,b=Number.NaN;if(a.vaultKey){var d=a;a.stakingTokenPrice&&d.totalCakeInVault.isFinite()&&(b=+(0,L.bM)(K.O$.from(d.totalCakeInVault.toString()),a.stakingToken.decimals)*a.stakingTokenPrice)}else(null===(c=a.totalStaked)|| void 0===c?void 0:c.isFinite())&&a.stakingTokenPrice&&(b=+(0,L.bM)(K.O$.from(a.totalStaked.toString()),a.stakingToken.decimals)*a.stakingTokenPrice);return Number.isFinite(b)?b:0},"desc");case"latest":return P()(a,function(a){return Number(a.sousId)},"desc");default:return a}},bw=60/m.hJ*4,bx=function(){var b,i=(0,aa.useRouter)(),a=(0,R.$G)().t,g=(0,N.Ge)().account,j=(0,T.f6)(),k=j.pools,z=j.userDataLoaded,l=(0,H.Z)((0,$.tw)(),2),c=l[0],A=l[1],m=(0,H.Z)((0,$.Yi)(),2),n=m[0],B=m[1],o=(0,d.useState)(12),C=o[0],ag=o[1],p=(0,S.Z)(),D=p.observerRef,E=p.isIntersecting,h=(0,d.useMemo)(function(){var a;return"string"==typeof(null==i?void 0:null===(a=i.query)|| void 0===a?void 0:a.search)?i.query.search:""},[i.query]),q=(0,d.useState)(""),r=q[0],ah=q[1],s=h&&!r?h:r,t=(0,d.useState)("hot"),F=t[0],ai=t[1],G=(0,d.useRef)(0),I=(0,ac.Xh)(),u=(0,d.useMemo)(function(){return Q()(k,function(a){return a.isFinished})},[k]),v=u[0],K=u[1],w=(0,d.useMemo)(function(){return K.filter(function(a){return!(I>0)||!a.startBlock||Number(a.startBlock)<I+bw})},[I,K]),x=(0,d.useMemo)(function(){return v.filter(function(a){return a.vaultKey?a.userData.userShares.gt(0):a.userData&&new(M())(a.userData.stakedBalance).isGreaterThan(0)})},[v]),L=(0,d.useCallback)(function(){return w.filter(function(a){return a.vaultKey?a.userData.userShares.gt(0):a.userData&&new(M())(a.userData.stakedBalance).isGreaterThan(0)})},[w]),P=x.length>0;(0,T.l7)(),(0,d.useEffect)(function(){E&&ag(function(a){return a<=G.current?a+12:a})},[E]);var y=i.pathname.includes("history"),Z=(0,d.useCallback)(function(a){return ah(a.target.value)},[]),ad=(0,d.useCallback)(function(a){return ai(a.value)},[]);b=y?c?x:v:c?L():w,b=(0,d.useMemo)(function(){var a=bv(g,F,k,b).slice(0,C);if(s){var c=(0,U.b)(s.toLowerCase());return a.filter(function(a){return(0,U.b)(a.earningToken.symbol.toLowerCase()).includes(c)})}return a},[g,F,k,b,C,s]),G.current=b.length;var ae=(0,J.jsx)(bo,{children:b.map(function(a){return a.vaultKey?(0,J.jsx)(aN.Z,{pool:a,showStakedOnly:c},a.vaultKey):(0,J.jsx)(aM,{pool:a,account:g},a.sousId)})}),af=(0,J.jsx)(bn,{urlSearch:h,pools:b,account:g});return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(W.Z,{children:(0,J.jsx)(f.Z,{justifyContent:"space-between",flexDirection:["column",null,null,"row"],children:(0,J.jsxs)(f.Z,{flex:"1",flexDirection:"column",mr:["8px",0],children:[(0,J.jsx)(O.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"24px",children:a("Syrup Pools")}),(0,J.jsx)(O.Z,{scale:"md",color:"text",children:a("Just stake some tokens to earn.")}),(0,J.jsx)(O.Z,{scale:"md",color:"text",children:a("High APR, low risk.")})]})})}),(0,J.jsxs)(V.Z,{children:[(0,J.jsxs)(bp,{children:[(0,J.jsx)(aX,{stakedOnly:c,setStakedOnly:A,hasStakeInFinishedPools:P,viewMode:n,setViewMode:B}),(0,J.jsxs)(bq,{children:[(0,J.jsxs)(br,{children:[(0,J.jsx)(e.Z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",children:a("Sort by")}),(0,J.jsx)(bs,{children:(0,J.jsx)(Y.Z,{options:[{label:a("Hot"),value:"hot"},{label:a("APR"),value:"apr"},{label:a("Earned"),value:"earned"},{label:a("Total staked"),value:"totalStaked"},{label:a("Latest"),value:"latest"},],onOptionChange:ad})})]}),(0,J.jsxs)(br,{style:{marginLeft:16},children:[(0,J.jsx)(e.Z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",children:a("Search")}),(0,J.jsx)(X.Z,{initialValue:s,onChange:Z,placeholder:"Search Pools"})]})]})]}),y&&(0,J.jsxs)(bt,{children:[(0,J.jsx)(e.Z,{fontSize:["16px",null,"20px"],color:"failure",pr:"4px",children:a("Looking for v1 OVE syrup pools?")}),(0,J.jsxs)(bu,{href:"/migration",fontSize:["16px",null,"20px"],color:"failure",children:[a("Go to migration page"),"."]})]}),g&&!z&&c&&(0,J.jsx)(f.Z,{justifyContent:"center",mb:"4px",children:(0,J.jsx)(ab.Z,{})}),n===_.wO.CARD?ae:af,(0,J.jsx)("div",{ref:D})]})]})}}}])
//# sourceMappingURL=9855-c52bdae4b0f092b7.js.map