"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3444],{23774:function(g,c,a){var h=a(7297),d=a(87379),e=a(57247);function f(){var a=(0,h.Z)(["\n  ","\n"]);return f=function(){return a},a}var b=d.ZP.div.withConfig({componentId:"sc-df4f0a61-0"}).withConfig({componentId:"sc-657c9e-0"})(f(),e.Dh);b.defaultProps={p:"24px"},c.Z=b},95596:function(g,c,a){var h=a(7297),d=a(87379),e=a(57247);function f(){var a=(0,h.Z)(["\n  border-top: 1px solid ",";\n  ","\n"]);return f=function(){return a},a}var b=d.ZP.div.withConfig({componentId:"sc-5ed8a823-0"}).withConfig({componentId:"sc-cddac6ee-0"})(f(),function(a){return a.theme.colors.cardBorder},e.Dh);b.defaultProps={p:"24px"},c.Z=b},43444:function(n,d,a){a.d(d,{"_":function(){return aF},Z:function(){return aG}});var o=a(26042),p=a(69396),q=a(99534),r=a(7297),s=a(85893),e=a(23774),t=a(44850),f=a(4318),g=a(97114),u=a(56503),v=a(77044),w=a(30621),x=a(40508),y=a(9070),z=a(99150),A=a(23637),B=a(45101),b=a(87379),C=a(73322),D=a(68624),E=a(12020),F=a(5619),G=a(21754),H=a(17166),I=a(53136),J=a(36544),K=a(17634),L=a(20922),M=a(37528),N=function(a){var c=a.cakeToDisplay,d=a.pool,e=a.account,b=(0,J.Z)((0,s.jsx)(M.Z,{pool:d,account:e}),{placement:"bottom-end"}),f=b.targetRef,g=b.tooltip,h=b.tooltipVisible;return(0,s.jsxs)(s.Fragment,{children:[h&&g,(0,s.jsx)(K.Z,{ref:f,small:!0,children:(0,s.jsx)(L.Z,{fontSize:"14px",value:c})})]})},O=function(h){var b=h.pool,i=(0,z.$G)().t,c=(0,v.Ge)().account,d=(0,A.eB)(b.vaultKey),j=d.pricePerFullShare,a=d.userData,k=(0,H.Iu)(),e=(0,I.UN)(c,a.cakeAtLastUserAction,a.userShares,j,k.toNumber(),b.vaultKey===B.om.CakeVault?a.currentPerformanceFee.plus(a.currentOverdueFee):null),l=e.hasAutoEarnings,m=e.autoCakeToDisplay;return a.userShares.gt(0)&&c?(0,s.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,s.jsx)(g.Z,{fontSize:"14px",children:"".concat(i("Recent OVE profit"),":")}),l&&(0,s.jsx)(N,{cakeToDisplay:m,pool:b,account:c})]}):null},P=a(10253),Q=a(65528),R=a(96293),S=a(47509),T=a(84091),U=a(36261),V=a(41273),c=a(67294),W=a(86082);function h(){var a=(0,r.Z)(["\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return h=function(){return a},a}var X=(0,b.ZP)(f.Z).withConfig({componentId:"sc-c2c2e49f-0"})(h()),Y=(0,c.memo)(function(h){var a=h.pool,b=(0,z.$G)().t,c=(0,V.o)(),d=c.flexibleApy,e=c.lockedApy,i=(0,P.Z)((0,Q.Z)((0,s.jsx)(W.E,{pool:a})),1)[0],j=(0,P.Z)((0,Q.Z)((0,s.jsx)(W.E,{pool:a,initialView:1})),1)[0];return(0,s.jsxs)(U.m5,{children:[(0,s.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,s.jsxs)(g.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[b("Flexible")," APY:"]}),d?(0,s.jsxs)(X,{alignItems:"center",justifyContent:"flex-start",children:[(0,s.jsx)(L.Z,{fontSize:"16px",value:parseFloat(d),decimals:2,unit:"%",bold:!0}),(0,s.jsx)(R.Z,{onClick:function(a){a.stopPropagation(),i()},variant:"text",width:"20px",height:"20px",padding:"0px",marginLeft:"4px",children:(0,s.jsx)(S.Z,{color:"textSubtle",width:"20px"})})]}):(0,s.jsx)(T.Z,{width:"80px",height:"16px"})]}),a.vaultKey===B.om.CakeVault&&(0,s.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,s.jsxs)(g.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[b("Locked")," APY:"]}),e?(0,s.jsxs)(x.O,{gap:"4px",flexWrap:"wrap",justifyContent:"flex-end",children:[(0,s.jsx)(g.Z,{style:{whiteSpace:"nowrap"},bold:!0,children:b("Up to")}),(0,s.jsxs)(X,{alignItems:"center",children:[(0,s.jsx)(L.Z,{fontSize:"16px",value:parseFloat(e),decimals:2,unit:"%",bold:!0}),(0,s.jsx)(R.Z,{onClick:function(a){a.stopPropagation(),j()},variant:"text",width:"20px",height:"20px",padding:"0px",marginLeft:"4px",children:(0,s.jsx)(S.Z,{color:"textSubtle",width:"20px"})})]})]}):(0,s.jsx)(T.Z,{width:"80px",height:"16px"})]})]})}),i=a(44431),Z=a.n(i),$=a(35128),_=a(19729),aa=a(51029),ab=function(a){var e=a.vaultKey,c=a.isLoading,f=a.setLastUpdated,g=(0,z.$G)().t,d=(0,aa.Le)(e,f),h=d.handleApprove,b=d.pendingTx;return(0,s.jsx)(s.Fragment,{children:void 0!==c&&c?(0,s.jsx)(T.Z,{width:"100%",height:"52px"}):(0,s.jsx)(R.Z,{isLoading:b,endIcon:b?(0,s.jsx)(_.Z,{spin:!0,color:"currentColor"}):null,disabled:b,onClick:h,width:"100%",children:g("Enable")})})},ac=a(67576),ad=a(58427),ae=a(86487),af=a(24237),ag=a(5527),ah=a(72943),ai=a(543),aj=a(65044),ak=a(24416),al=function(b){var a=b.pool,e=b.stakingTokenBalance,k=b.performanceFee,h=(0,A.eB)(a.vaultKey).userData.balance,i=h.cakeAsBigNumber,j=h.cakeAsNumberBalance,c=a.stakingToken,d=(0,H.Iu)(),l=d.gt(0)?(0,aj.mW)(i.multipliedBy(d),c.decimals):0,m=(0,P.Z)((0,Q.Z)((0,s.jsx)(ac.Z,{tokenSymbol:c.symbol})),1)[0],n=(0,P.Z)((0,Q.Z)((0,s.jsx)(ae.Z,{stakingMax:e,performanceFee:k,pool:a})),1),o=n[0],p=(0,P.Z)((0,Q.Z)((0,s.jsx)(ae.Z,{stakingMax:i,pool:a,isRemovingStake:!0}),!0,!0,"withdraw-vault"),1),q=p[0];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(f.Z,{mb:"16px",justifyContent:"space-between",alignItems:"center",children:[(0,s.jsxs)(f.Z,{flexDirection:"column",children:[(0,s.jsx)(L.Z,{fontSize:"20px",bold:!0,value:j,decimals:5}),(0,s.jsx)(g.Z,{as:f.Z,fontSize:"12px",color:"textSubtle",flexWrap:"wrap",children:d.gt(0)?(0,s.jsx)(L.Z,{value:l,fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",unit:" USD"}):(0,s.jsx)(T.Z,{mt:"1px",height:16,width:64})})]}),(0,s.jsxs)(f.Z,{children:[(0,s.jsx)(ag.Z,{variant:"secondary",onClick:q,mr:"6px",children:(0,s.jsx)(ah.Z,{color:"primary",width:"24px"})}),(0,s.jsx)(ag.Z,{variant:"secondary",onClick:e.gt(0)?o:m,children:(0,s.jsx)(ai.Z,{color:"primary",width:"24px",height:"24px"})})]})]}),a.vaultKey===B.om.CakeVault&&(0,s.jsx)(t.Z,{mb:"16px",children:(0,s.jsx)(ak.Z,{stakingToken:c,currentStakedAmount:j})})]})},am=function(c){var a=c.pool,b=c.stakingTokenBalance,g=c.accountHasSharesStaked,d=c.performanceFee,e=a.stakingToken,h=a.userDataLoaded,i=(0,P.Z)((0,Q.Z)((0,s.jsx)(ac.Z,{tokenSymbol:e.symbol})),1)[0],j=(0,P.Z)((0,Q.Z)((0,s.jsx)(ae.Z,{stakingMax:b,pool:a,performanceFee:d})),1)[0],k=(0,P.Z)((0,Q.Z)((0,s.jsx)(af.Z,{currentBalance:b,stakingToken:e,stakingTokenBalance:b})),1)[0];return(0,s.jsx)(f.Z,{flexDirection:"column",children:h?g?(0,s.jsx)(al,{pool:a,stakingTokenBalance:b,performanceFee:d}):(0,s.jsx)(ad.w,{onFlexibleClick:b.gt(0)?j:i,onLockedClick:a.vaultKey===B.om.CakeVault?k:null}):(0,s.jsx)(T.Z,{width:"100%",height:"52px"})})};function j(){var a=(0,r.Z)(["\n  display: inline;\n"]);return j=function(){return a},a}var an=(0,b.ZP)(g.Z).withConfig({componentId:"sc-ff53f008-0"})(j()),ao=function(c){var a=c.pool,b=c.accountHasSharesStaked,i=c.isLoading,j=c.performanceFee,e=a.stakingToken,d=a.userData,g=(0,z.$G)().t,k=(null==d?void 0:d.stakingTokenBalance)?new(Z())(d.stakingTokenBalance):$.HW,h=(0,aa.dI)(a.vaultKey),l=h.isVaultApproved,m=h.setLastUpdated;return(0,s.jsx)(f.Z,{flexDirection:"column",children:(0,s.jsxs)(f.Z,{flexDirection:"column",children:[(0,s.jsxs)(t.Z,{display:"inline",children:[(0,s.jsxs)(an,{color:b?"secondary":"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[b?e.symbol:g("Stake")," "]}),(0,s.jsx)(an,{color:b?"textSubtle":"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:b?g("Staked"):"".concat(e.symbol)})]}),l?(0,s.jsx)(am,{pool:a,stakingTokenBalance:k,accountHasSharesStaked:b,performanceFee:j}):(0,s.jsx)(ab,{vaultKey:a.vaultKey,isLoading:i,setLastUpdated:m})]})})},ap=a(17101),aq=a(14275),ar=a(90834),as=a(12157),at=a(88028),au=a(90706),av=a(28353),aw=a(39421),ax=function(a){var l=a.userShares,m=a.locked,b=a.lockEndTime,d=a.lockStartTime,e=a.stakingToken,g=a.stakingTokenBalance,h=a.lockedAmount,i=(0,c.useMemo)(function(){return(0,ap.cP)({userShares:l,locked:m,lockEndTime:b})},[l,m,b]),n=(0,z.$G)().t,j=(0,aj.mW)(h),k=(0,c.useMemo)(function(){return g?new(Z())(g):$.HW},[g]);return i===ap.PS.Locked?(0,s.jsxs)(f.Z,{children:[(0,s.jsx)(t.Z,{width:"100%",mr:"4px",children:(0,s.jsx)(au.Z,{lockEndTime:b,lockStartTime:d,currentLockedAmount:h,stakingToken:e,currentBalance:k,stakingTokenBalance:g})}),(0,s.jsx)(t.Z,{width:"100%",ml:"4px",children:(0,s.jsx)(av.Z,{lockEndTime:b,lockStartTime:d,stakingToken:e,currentBalance:k,currentLockedAmount:j,children:n("Extend")})})]}):(0,s.jsx)(aw.Z,{lockEndTime:b,lockStartTime:d,position:i,currentLockedAmount:j,stakingToken:e})},ay=a(96635),az=a(5450),k=a(80421);function l(){var a=(0,r.Z)(["\n  display: inline;\n"]);return l=function(){return a},a}var aA=(0,b.ZP)(k.Z).withConfig({componentId:"sc-4e8acbb6-0"})(l()),aB=function(){var a=(0,z.$G)().t,c=(0,A.cq)(),d=(0,A.dd)(),e=(0,I.XW)(d),b=(0,J.Z)((0,s.jsxs)(t.Z,{children:[(0,s.jsx)(g.Z,{children:a("The number of iOVE equals the locked staking amount if the staking duration is longer than %weeks% weeks. If the staking duration is less than %weeks% weeks, it will linearly decrease based on the staking duration.",{weeks:e})}),(0,s.jsx)(aA,{external:!0,href:"#",children:a("Learn more about iOVE")})]}),{placement:"bottom-start"}),h=b.targetRef,i=b.tooltip,j=b.tooltipVisible;return(0,s.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[j&&i,(0,s.jsx)(K.Z,{children:(0,s.jsx)(g.Z,{ref:h,color:"textSubtle",bold:!0,fontSize:"12px",children:a("iOVE")})}),(0,s.jsx)(L.s,{color:"text",bold:!0,fontSize:"16px",decimals:3,value:(0,aj.mW)(c)})]})},aC=a(51553),aD=(0,c.memo)(function(e){var i,n=e.stakingToken,o=e.stakingTokenBalance,a=e.userData,p=e.showICake,b=(0,z.$G)().t,d=(0,c.useMemo)(function(){return(0,ap.cP)({userShares:null==a?void 0:a.userShares,locked:null==a?void 0:a.locked,lockEndTime:null==a?void 0:a.lockEndTime})},[a]),j=(0,c.useMemo)(function(){var b;return null==a?void 0:null===(b=a.balance)|| void 0===b?void 0:b.cakeAsBigNumber},[null==a?void 0:null===(i=a.balance)|| void 0===i?void 0:i.cakeAsBigNumber]),l=(0,aj.mW)(j),q=(0,ar.Tx)(l),h=(0,aC.Z)({lockStartTime:null==a?void 0:a.lockStartTime,lockEndTime:null==a?void 0:a.lockEndTime}),r=h.weekDuration,u=h.lockEndDate,m=h.secondDuration,v=h.remainingTime,w=(0,V.o)({duration:m}).lockedApy,x=(0,c.useMemo)(function(){return(0,aj.mW)(j.minus(null==a?void 0:a.cakeAtLastUserAction))},[j,null==a?void 0:a.cakeAtLastUserAction]),y=b("Calculated based on current rates and subject to change based on pool conditions. It is an estimate provided for your convenience only, and by no means represents guaranteed returns."),k=(0,J.Z)(y,{placement:"bottom-start"}),A=k.targetRef,B=k.tooltip,C=k.tooltipVisible;return(0,s.jsxs)(U.m5,{children:[(0,s.jsxs)(f.Z,{justifyContent:"space-between",mb:"16px",children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(g.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:b("CAKE locked")}),(0,s.jsx)(L.s,{color:"text",bold:!0,fontSize:"16px",value:l,decimals:5}),(0,s.jsx)(L.s,{value:q,fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",unit:" USD"})]}),(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(g.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:b("Unlocks In")}),(0,s.jsx)(g.Z,{color:d>=ap.PS.LockedEnd?"#D67E0A":"text",bold:!0,fontSize:"16px",children:d>=ap.PS.LockedEnd?b("Unlocked"):v}),(0,s.jsx)(g.Z,{color:d>=ap.PS.LockedEnd?"#D67E0A":"text",fontSize:"12px",children:b("On %date%",{date:u})})]})]}),(0,s.jsx)(t.Z,{mb:"16px",children:(0,s.jsx)(ax,{userShares:null==a?void 0:a.userShares,locked:null==a?void 0:a.locked,lockEndTime:null==a?void 0:a.lockEndTime,lockStartTime:null==a?void 0:a.lockStartTime,stakingToken:n,stakingTokenBalance:o,lockedAmount:j})}),(0,s.jsx)(aq.Z,{}),![ap.PS.LockedEnd,ap.PS.AfterBurning].includes(d)&&(0,s.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[C&&B,(0,s.jsx)(K.Z,{children:(0,s.jsx)(g.Z,{ref:A,color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:b("APY")})}),(0,s.jsx)(L.s,{color:"text",bold:!0,fontSize:"16px",value:parseFloat(w),decimals:2,unit:"%"})]}),(0,s.jsx)(az.Z,{weekDuration:r}),![ap.PS.LockedEnd,ap.PS.AfterBurning].includes(d)&&(0,s.jsx)(ay.Z,{secondDuration:m}),(0,s.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,s.jsx)(g.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:b("Recent CAKE profit")}),(0,s.jsx)(L.s,{color:"text",bold:!0,fontSize:"16px",value:x,decimals:5})]}),d===ap.PS.LockedEnd&&(0,s.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,s.jsx)(g.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:b("After Burning In")}),(0,s.jsx)(g.Z,{color:"failure",bold:!0,children:(0,s.jsx)(at.Z,{lockEndTime:null==a?void 0:a.lockEndTime})})]}),d===ap.PS.AfterBurning&&(0,s.jsxs)(f.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,s.jsx)(g.Z,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:b("After burning")}),(0,s.jsx)(g.Z,{color:"failure",bold:!0,children:(0,as.Z)(null==a?void 0:a.currentOverdueFee)?"-":b("%amount% Burned",{amount:(0,aj.NJ)(null==a?void 0:a.currentOverdueFee,18,5)})})]}),p&&(0,s.jsx)(aB,{})]})});function m(){var a=(0,r.Z)(["\n  min-height: ",";\n"]);return m=function(){return a},a}var aE=(0,b.ZP)(e.Z).withConfig({componentId:"sc-2869e017-0"})(m(),function(a){return a.isLoading?"0":"254px"}),aF=function(b){var d,h=b.isLoading,i=void 0!==h&&h,c=b.account,a=b.pool,e=b.vaultPool,j=b.accountHasSharesStaked,k=b.showICake,l=b.performanceFeeAsDecimal,m=b.defaultFooterExpanded,n=(0,z.$G)().t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(aE,{isLoading:i,children:[c&&a.vaultKey===B.om.CakeVault&&(0,s.jsx)(F.X,{userData:e.userData}),c&&a.vaultKey===B.om.CakeVault&&e.userData.locked?(0,s.jsx)(aD,{userData:e.userData,stakingToken:null==a?void 0:a.stakingToken,stakingTokenBalance:null==a?void 0:null===(d=a.userData)|| void 0===d?void 0:d.stakingTokenBalance,showICake:k}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Y,{pool:a}),(0,s.jsxs)(x.O,{mt:"16px",gap:"24px",flexDirection:j?"column-reverse":"column",children:[(0,s.jsxs)(t.Z,{children:[c&&(0,s.jsx)(t.Z,{mb:"8px",children:(0,s.jsx)(G.Z,{vaultKey:a.vaultKey})}),(0,s.jsx)(O,{pool:a})]}),(0,s.jsx)(f.Z,{flexDirection:"column",children:c?(0,s.jsx)(ao,{pool:a,accountHasSharesStaked:j,isLoading:i,performanceFee:l}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:n("Start earning")}),(0,s.jsx)(w.Z,{})]})})]})]})]}),(0,s.jsx)(C.Z,{defaultExpanded:m,pool:a,account:c})]})},aG=function(b){var a=b.pool,h=b.showStakedOnly,i=b.defaultFooterExpanded,e=b.showICake,j=(0,q.Z)(b,["pool","showStakedOnly","defaultFooterExpanded","showICake"]),k=(0,v.Ge)().account,c=(0,A.eB)(a.vaultKey),f=c.userData,g=f.userShares,l=f.isLoading,m=c.fees.performanceFeeAsDecimal,d=g&&g.gt(0),n=!a.userData||l;return h&&!d?null:(0,s.jsxs)(E.r,(0,p.Z)((0,o.Z)({isActive:!0},j),{children:[(0,s.jsxs)(D.Z,{isStaking:d,children:[(0,s.jsx)(D.e,{title:y.Y4[a.vaultKey].name,subTitle:y.Y4[a.vaultKey].description}),(0,s.jsx)(u.Z,(0,p.Z)((0,o.Z)({},y.Y4[a.vaultKey].tokenImage),{width:64,height:64}))]}),(0,s.jsx)(aF,{isLoading:n,account:k,pool:a,vaultPool:c,accountHasSharesStaked:d,showICake:void 0!==e&&e,performanceFeeAsDecimal:m,defaultFooterExpanded:i})]}))}},73322:function(g,d,a){var h=a(7297),i=a(85893),j=a(67294),b=a(87379),k=a(99150),c=a(4318),l=a(36544),m=a(95596),n=a(62276),o=a(10763),p=a(69160),q=a(91692);function e(){var a=(0,h.Z)(["\n  align-items: center;\n  justify-content: space-between;\n  button {\n    padding: 0;\n  }\n"]);return e=function(){return a},a}function f(){var a=(0,h.Z)(["\n  svg {\n    height: 14px;\n    width: 14px;\n  }\n"]);return f=function(){return a},a}var r=(0,b.ZP)(c.Z).withConfig({componentId:"sc-50dc8069-0"})(e()),s=(0,b.ZP)(c.Z).withConfig({componentId:"sc-50dc8069-1"})(f());d.Z=function(a){var f=a.pool,t=a.account,u=a.defaultExpanded,v=a.children,g=f.vaultKey,b=(0,k.$G)().t,h=(0,j.useState)(u||!1),d=h[0],B=h[1],w=b("You must harvest and compound your earnings from this pool manually."),x=b("Rewards are distributed and included into your staking balance automatically. There\u2019s no need to manually compound your rewards."),e=(0,l.Z)(g?x:w,{placement:"bottom"}),y=e.targetRef,z=e.tooltip,A=e.tooltipVisible;return(0,i.jsxs)(m.Z,{children:[(0,i.jsxs)(r,{children:[(0,i.jsxs)(c.Z,{alignItems:"center",children:[g?(0,i.jsx)(p.yd,{}):(0,i.jsx)(p.EM,{}),A&&z,(0,i.jsx)(c.Z,{ref:y,children:(0,i.jsx)(n.Z,{ml:"4px",width:"20px",height:"20px",color:"textSubtle"})})]}),(0,i.jsx)(o.L,{expanded:d,onClick:function(){return B(!d)},children:b(d?"Hide":"Details")})]}),d&&(0,i.jsx)(s,{flexDirection:"column",children:v||(0,i.jsx)(q.Z,{pool:f,account:t})})]})}},68624:function(f,b,a){a.d(b,{e:function(){return m}});var g=a(7297),h=a(85893),c=a(87654),i=a(4318),j=a(59750),k=a(97114),d=a(87379);function e(){var a=(0,g.Z)(["\n  background: ",";\n  border-radius: ",";\n"]);return e=function(){return a},a}var l=(0,d.ZP)(c.Z).withConfig({componentId:"sc-7f0398ff-0"})(e(),function(a){var c=a.isFinished,d=a.background,b=a.theme;return c?b.colors.backgroundDisabled:b.colors.gradients[d]},function(b){var a=b.theme;return"".concat(a.radii.card," ").concat(a.radii.card," 0 0")}),m=function(a){var b=a.isFinished,c=a.title,d=a.subTitle;return(0,h.jsxs)(i.Z,{flexDirection:"column",children:[(0,h.jsx)(j.Z,{color:b?"textDisabled":"body",scale:"lg",children:c}),(0,h.jsx)(k.Z,{fontSize:"14px",color:b?"textDisabled":"textSubtle",children:d})]})};b.Z=function(a){var b=a.isFinished,c=a.isStaking,d=a.children;return(0,h.jsx)(l,{isFinished:void 0!==b&&b,background:void 0!==c&&c?"bubblegum":"cardHeader",children:(0,h.jsx)(i.Z,{alignItems:"center",justifyContent:"space-between",children:d})})}},12020:function(f,b,a){a.d(b,{r:function(){return h}});var g=a(7297),c=a(87379),d=a(38144);function e(){var a=(0,g.Z)(["\n  min-width: 280px;\n  max-width: 100%;\n  margin: 0 0 24px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-self: baseline;\n  position: relative;\n  color: ",";\n\n  "," {\n    max-width: 350px;\n    margin: 0 12px 46px;\n  }\n"]);return e=function(){return a},a}var h=(0,c.ZP)(d.Z).withConfig({componentId:"sc-34431ece-0"})(e(),function(a){var b=a.isFinished,c=a.theme;return c.colors[b?"textDisabled":"secondary"]},function(a){return a.theme.mediaQueries.sm})}}])
//# sourceMappingURL=3444-638b4080750e6234.js.map