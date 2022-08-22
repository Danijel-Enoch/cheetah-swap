(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6664],{35077:function(j,d,e){"use strict";e.d(d,{Z:function(){return o}});var k={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function c(a){return function(){var b=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},c=b.width?String(b.width):a.defaultWidth,d=a.formats[c]||a.formats[a.defaultWidth];return d}}var f={date:c({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:c({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:c({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function a(a){return function(d,f){var c,b=f||{};if("formatting"===(b.context?String(b.context):"standalone")&&a.formattingValues){var e=a.defaultFormattingWidth||a.defaultWidth,g=b.width?String(b.width):e;c=a.formattingValues[g]||a.formattingValues[e]}else{var h=a.defaultWidth,i=b.width?String(b.width):a.defaultWidth;c=a.values[i]||a.values[h]}return c[a.argumentCallback?a.argumentCallback(d):d]}}var g={ordinalNumber:function(c,d){var a=Number(c),b=a%100;if(b>20||b<10)switch(b%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:a({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:a({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:a({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:a({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:a({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function b(a){return function(f){var b,d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},c=d.width,i=c&&a.matchPatterns[c]||a.matchPatterns[a.defaultMatchWidth],g=f.match(i);if(!g)return null;var j=g[0],e=c&&a.parsePatterns[c]||a.parsePatterns[a.defaultParseWidth],h=Array.isArray(e)?n(e,function(a){return a.test(j)}):m(e,function(a){return a.test(j)});return b=a.valueCallback?a.valueCallback(h):h,{value:b=d.valueCallback?d.valueCallback(b):b,rest:f.slice(j.length)}}}function m(a,c){for(var b in a)if(a.hasOwnProperty(b)&&c(a[b]))return b}function n(b,c){for(var a=0;a<b.length;a++)if(c(b[a]))return a}var h,i={ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}},function(a){var d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},e=a.match(h.matchPattern);if(!e)return null;var f=e[0],b=a.match(h.parsePattern);if(!b)return null;var c=h.valueCallback?h.valueCallback(b[0]):b[0];return{value:c=d.valueCallback?d.valueCallback(c):c,rest:a.slice(f.length)}}),era:b({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:b({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:b({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:b({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},o={code:"en-US",formatDistance:function(e,d,a){var b,c=k[e];return(b="string"==typeof c?c:1===d?c.one:c.other.replace("{{count}}",d.toString()),null!=a&&a.addSuffix)?a.comparison&&a.comparison>0?"in "+b:b+" ago":b},formatLong:f,formatRelative:function(a,b,c,d){return l[a]},localize:g,match:i,options:{weekStartsOn:0,firstWeekContainsDate:1}}},54290:function(a,c,b){var d=b(6557);a.exports=function(a){return"function"==typeof a?a:d}},98913:function(b,c,a){var d=a(22545),e=a(54290),f=a(40554),g=4294967295,h=Math.min;b.exports=function(a,b){if((a=f(a))<1||a>9007199254740991)return[];var c=g,i=h(a,g);b=e(b),a-=g;for(var j=d(i,b);++c<a;)b(c);return j}},95353:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/voting",function(){return c(39685)}])},9511:function(i,c,a){"use strict";var j=a(7297),k=a(29815),d=a(85893),l=a(67294),b=a(87379),e=a(57247),f=a(94528);function g(){var a=(0,j.Z)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  "," {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  "," {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return g=function(){return a},a}function h(){var a=(0,j.Z)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  ","\n"]);return h=function(){return a},a}var m=b.ZP.div.withConfig({componentId:"sc-dc391a6e-0"}).withConfig({componentId:"sc-aeea62df-0"})(g(),function(a){return a.theme.colors.textDisabled},function(a){return a.theme.mediaQueries.sm},function(a){return a.theme.mediaQueries.md}),n=b.ZP.ul.withConfig({componentId:"sc-dc391a6e-1"}).withConfig({componentId:"sc-aeea62df-1"})(h(),function(a){return a.theme.colors.primary},function(a){return a.theme.colors.primaryBright},e.Dh),o=(0,d.jsx)(f.Z,{color:"currentColor",width:"24px"});c.Z=function(a){var b,e,c=a.separator,f=a.children,g=(b=l.Children.toArray(f).filter(function(a){return(0,l.isValidElement)(a)}),e=void 0===c?o:c,b.reduce(function(a,b,c){return 0===c?(0,k.Z)(a).concat([b]):(0,k.Z)(a).concat([(0,d.jsx)(m,{"aria-hidden":!0,children:e},"separator-".concat(c)),b,])},[]));return(0,d.jsx)(n,{children:g.map(function(a,b){return(0,d.jsx)("li",{children:a},"child-".concat(b))})})}},16211:function(c,b,a){"use strict";var d=a(26042),e=a(69396),f=a(85893);a(67294);var g=a(17058);b.Z=function(a){return(0,f.jsx)(g.Z,(0,e.Z)((0,d.Z)({viewBox:"0 0 24 24"},a),{children:(0,f.jsx)("path",{d:"M8.99984 5.89661V6.27661C8.16984 5.94661 7.27984 5.77661 6.38984 5.77661C4.96985 5.77661 3.54985 6.20661 2.33985 7.06661C1.82985 7.42661 1.76985 8.15661 2.20985 8.59661L4.77985 11.1666H5.88984V12.2766C6.74984 13.1366 7.86984 13.5866 8.99984 13.6366V15.8966H6.99985C6.44984 15.8966 5.99985 16.3466 5.99985 16.8966V18.8966C5.99985 19.9966 6.89985 20.8966 7.99984 20.8966H17.9998C19.6598 20.8966 20.9998 19.5566 20.9998 17.8966V5.89661C20.9998 5.34661 20.5498 4.89661 19.9998 4.89661H9.99984C9.44984 4.89661 8.99984 5.34661 8.99984 5.89661ZM7.88984 11.3066V9.15661H5.60984L4.56985 8.11661C5.13985 7.89661 5.75985 7.77661 6.38984 7.77661C7.72984 7.77661 8.97985 8.29661 9.92984 9.23661L11.3398 10.6466L11.1398 10.8466C10.6298 11.3566 9.94984 11.6466 9.21984 11.6466C8.74985 11.6466 8.28984 11.5266 7.88984 11.3066ZM18.9998 17.8966C18.9998 18.4466 18.5498 18.8966 17.9998 18.8966C17.4498 18.8966 16.9998 18.4466 16.9998 17.8966V16.8966C16.9998 16.3466 16.5498 15.8966 15.9998 15.8966H10.9998V13.3066C11.5698 13.0766 12.0998 12.7366 12.5598 12.2766L12.7598 12.0766L15.5898 14.8966H16.9998V13.4866L10.9998 7.51661V6.89661H18.9998V17.8966Z"})}))}},92206:function(g,c,a){"use strict";var h=a(7297),d=a(87379),e=a(57247);function f(){var a=(0,h.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ",";\n  border-radius: ",";\n  font-size: 16px;\n  font-weight: 600;\n\n  "," {\n    flex-grow: 0;\n  }\n\n  ","\n"]);return f=function(){return a},a}var b=d.ZP.button.withConfig({componentId:"sc-e10c0dd0-0"}).withConfig({componentId:"sc-5cc178d-0"})(f(),function(a){return"md"===a.scale?"8px":"16px"},function(a){return"md"===a.scale?"16px 16px 0 0":"24px 24px 0 0"},function(a){return a.theme.mediaQueries.md},e.$_);b.defaultProps={scale:"md"},c.Z=b},23978:function(g,d,a){"use strict";var h=a(7297),i=a(85893),j=a(67294),b=a(87379),c=a(4318);function e(){var a=(0,h.Z)(["\n  border-bottom: 2px solid ",";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"]);return e=function(){return a},a}function f(){var a=(0,h.Z)(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  "," {\n    flex-grow: 0;\n  }\n"]);return f=function(){return a},a}var k=(0,b.ZP)(c.Z).withConfig({componentId:"sc-bc375619-0"}).withConfig({componentId:"sc-419d2a66-0"})(e(),function(a){return a.theme.colors.input}),l=(0,b.ZP)(c.Z).withConfig({componentId:"sc-bc375619-1"}).withConfig({componentId:"sc-419d2a66-1"})(f(),function(a){return a.theme.mediaQueries.md});d.Z=function(a){var b=a.activeIndex,d=void 0===b?0:b,e=a.onItemClick,c=a.children;return(0,i.jsx)(k,{p:["0 4px","0 16px"],children:(0,i.jsx)(l,{children:j.Children.map(c,function(b,c){var a=d===c;return(0,j.cloneElement)(b,{isActive:a,onClick:e?function(){return e(c)}:void 0,color:a?"backgroundAlt":"textSubtle",backgroundColor:a?"textSubtle":"input"})})})})}},39685:function(x,d,a){"use strict";a.r(d),a.d(d,{default:function(){return aC}});var y=a(7297),z=a(85893),e=a(4318),A=a(83559),b=a(87379),f=a(44850),B=a(59750),C=a(97114),D=a(96293),E=a(16211),F=a(99150),g=a(41664),G=a.n(g),H=a(55027),h=a(91186);function i(){var a=(0,y.Z)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"]);return i=function(){return a},a}var I=(0,b.ZP)(h.Z).withConfig({componentId:"sc-ef50ae32-0"})(i(),function(a){return a.theme.mediaQueries.lg});function j(){var a=(0,y.Z)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"]);return j=function(){return a},a}var J=(0,b.ZP)(f.Z).withConfig({componentId:"sc-793d1ed8-0"})(j(),function(a){return a.theme.colors.gradients.bubblegum}),K=function(){var a=(0,F.$G)().t;return(0,z.jsx)(J,{children:(0,z.jsx)(H.Z,{children:(0,z.jsxs)(e.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,z.jsxs)(f.Z,{pr:"32px",children:[(0,z.jsx)(B.Z,{as:"h2",scale:"lg",mb:"16px",children:a("Got a suggestion?")}),(0,z.jsx)(C.Z,{as:"p",children:a("Community proposals are a great way to see how the community feels about your ideas.")}),(0,z.jsx)(C.Z,{as:"p",mb:"16px",children:a("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),(0,z.jsx)(G(),{href:"/voting/proposal/create",passHref:!0,prefetch:!1,children:(0,z.jsx)(D.Z,{startIcon:(0,z.jsx)(E.Z,{color:"currentColor",width:"24px"}),children:a("Make a Proposal")})})]}),(0,z.jsx)(I,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})};function k(){var a=(0,y.Z)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"]);return k=function(){return a},a}var L=(0,b.ZP)(f.Z).withConfig({componentId:"sc-520a21bd-0"})(k(),function(a){return a.theme.colors.gradients.bubblegum}),M=function(){var a=(0,F.$G)().t;return(0,z.jsx)(L,{children:(0,z.jsx)(H.Z,{children:(0,z.jsxs)(e.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,z.jsxs)(f.Z,{pr:"32px",children:[(0,z.jsx)(B.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:a("Voting")}),(0,z.jsx)(B.Z,{as:"h3",scale:"lg",mb:"16px",children:a("Have your say in the future of the PancakeSwap Ecosystem")}),(0,z.jsx)(G(),{href:"/voting/proposal/create",passHref:!0,prefetch:!1,children:(0,z.jsx)(D.Z,{startIcon:(0,z.jsx)(E.Z,{color:"currentColor",width:"24px"}),children:a("Make a Proposal")})})]}),(0,z.jsx)(I,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},N=a(47568),O=a(26042),P=a(69396),Q=a(10253),l=a(34051),R=a.n(l),S=a(9511),T=a(38144),U=a(8100),c=a(45101),V=a(65992),W=a(97971),X=a(67294),Y=function(c,e){var a=(0,X.useState)(function(){try{var a=window.sessionStorage.getItem(c);if(a)return JSON.parse(a);return window.sessionStorage.setItem(c,JSON.stringify(e)),e}catch(b){return e}}),b=a[0],d=a[1];return(0,X.useEffect)(function(){try{window.sessionStorage.setItem(c,JSON.stringify(b))}catch(a){}},[c,b]),[b,d]},Z=a(97305),$=a(84091),m=a(98913),_=a.n(m),aa=a(65398);function n(){var a=(0,y.Z)(["\n  border-bottom: 1px solid ",";\n"]);return n=function(){return a},a}function o(){var a=(0,y.Z)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"]);return o=function(){return a},a}var p=(0,b.ZP)(e.Z).withConfig({componentId:"sc-d03c33ee-0"})(n(),function(a){return a.theme.colors.cardBorder}),ab=b.ZP.div.withConfig({componentId:"sc-d03c33ee-1"})(o(),p),ac=function(){return(0,z.jsx)(ab,{children:_()(aa.A4).map(function(a){return(0,z.jsxs)(p,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[(0,z.jsxs)(f.Z,{style:{flex:1},children:[(0,z.jsx)($.Z,{height:"21px",width:"70%",mb:"4px"}),(0,z.jsx)($.Z,{height:"21px",width:"30%",mb:"4px"}),(0,z.jsx)($.Z,{height:"21px",width:"40%"})]}),(0,z.jsx)($.Z,{height:"32px",width:"32px"})]},a)})})},ad=a(23978),ae=a(92206),af=a(29502),ag=a(11051);function q(){var a=(0,y.Z)(["\n  background-color: ",";\n  padding-top: 16px;\n"]);return q=function(){return a},a}var ah=b.ZP.div.withConfig({componentId:"sc-a870c8ca-0"})(q(),function(a){return a.theme.colors.input}),ai=function(a){switch(a){case c.nK.COMMUNITY:return 1;case c.nK.ALL:return 2;case c.nK.CORE:default:return 0}},aj=function(a){switch(a){case 1:return c.nK.COMMUNITY;case 2:return c.nK.ALL;default:return c.nK.CORE}},ak=function(a){var c=a.proposalType,d=a.onTypeChange,b=(0,F.$G)().t;return(0,z.jsx)(ah,{children:(0,z.jsxs)(ad.Z,{activeIndex:ai(c),onItemClick:function(a){d(aj(a))},children:[(0,z.jsx)(ae.Z,{children:(0,z.jsxs)(e.Z,{alignItems:"center",children:[(0,z.jsx)(af.Z,{color:"currentColor",mr:"4px"}),b("Core")]})}),(0,z.jsxs)(ae.Z,{children:[" ",(0,z.jsxs)(e.Z,{alignItems:"center",children:[(0,z.jsx)(ag.Z,{color:"currentColor",mr:"4px"}),b("Community")]})]}),(0,z.jsx)(ae.Z,{children:"All"})]})})},al=a(5527),am=a(16863),r=a(53629),an=a(19013),ao=a(42298),ap=function(a){var b=(0,an.default)(1e3*a);return(0,ao.default)(b,"MMM do, yyyy HH:mm")},aq=function(a){var g=a.startDate,e=a.endDate,f=a.proposalState,b=(0,F.$G)().t,d={fontSize:"16px",color:"textSubtle",ml:"8px"};return f===c.r7.CLOSED?(0,z.jsx)(C.Z,(0,P.Z)((0,O.Z)({},d),{children:b("Ended %date%",{date:ap(e)})})):f===c.r7.PENDING?(0,z.jsx)(C.Z,(0,P.Z)((0,O.Z)({},d),{children:b("Starts %date%",{date:ap(g)})})):(0,z.jsx)(C.Z,(0,P.Z)((0,O.Z)({},d),{children:b("Ends %date%",{date:ap(e)})}))},ar=a(37121);function s(){var a=(0,y.Z)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n"]);return s=function(){return a},a}var as=(0,b.ZP)(r.a).withConfig({componentId:"sc-e3552d11-0"})(s(),function(a){return a.theme.colors.cardBorder},function(a){return a.theme.colors.dropdown}),at=function(b){var a=b.proposal,c="/voting/proposal/".concat(a.id);return(0,z.jsxs)(as,{to:c,children:[(0,z.jsxs)(f.Z,{as:"span",style:{flex:1},children:[(0,z.jsx)(C.Z,{bold:!0,mb:"8px",children:a.title}),(0,z.jsx)(e.Z,{alignItems:"center",mb:"8px",children:(0,z.jsx)(aq,{startDate:a.start,endDate:a.end,proposalState:a.state})}),(0,z.jsxs)(e.Z,{alignItems:"center",children:[(0,z.jsx)(ar.U,{proposalState:a.state}),(0,z.jsx)(ar.g,{isCoreProposal:(0,Z.md)(a),ml:"8px"})]})]}),(0,z.jsx)(al.Z,{variant:"text",children:(0,z.jsx)(am.Z,{width:"24px"})})]})},au=a(17883);function t(){var a=(0,y.Z)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"]);return t=function(){return a},a}function u(){var a=(0,y.Z)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]);return u=function(){return a},a}var av=(0,b.ZP)(e.Z).attrs({alignItems:"center"}).withConfig({componentId:"sc-8304b852-0"})(t(),function(a){return a.theme.colors.cardBorder}),aw=b.ZP.label.withConfig({componentId:"sc-8304b852-1"})(u()),ax=[{value:c.r7.ACTIVE,label:"Vote Now"},{value:c.r7.PENDING,label:"Soon"},{value:c.r7.CLOSED,label:"Closed"},],ay=function(a){var b=a.filterState,c=a.onFilterChange,d=a.isLoading,e=(0,F.$G)().t;return(0,z.jsx)(av,{children:ax.map(function(a){var f=a.value,g=a.label;return(0,z.jsxs)(aw,{children:[(0,z.jsx)(au.Z,{scale:"sm",value:f,checked:b===f,onChange:function(a){c(a.currentTarget.value)},disabled:d}),(0,z.jsx)(C.Z,{ml:"8px",children:e(g)})]},g)})})},az=function(){var a=(0,F.$G)().t,h=(0,Q.Z)(Y("proposals-filter",{proposalType:c.nK.CORE,filterState:c.r7.ACTIVE}),2),i=h[0],m=h[1],j=i.proposalType,d=i.filterState,k=(0,U.ZP)(["proposals",d],(0,N.Z)(R().mark(function a(){return R().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,V.Bp)(1e3,0,d));case 1:case"end":return a.stop()}},a)}))),b=k.status,l=k.data,g=(0,Z.JY)((0,Z.LJ)(l,j),d);return(0,z.jsxs)(H.Z,{py:"40px",children:[(0,z.jsx)(f.Z,{mb:"48px",children:(0,z.jsxs)(S.Z,{children:[(0,z.jsx)(G(),{href:"/",children:a("Home")}),(0,z.jsx)(C.Z,{children:a("Voting")})]})}),(0,z.jsx)(B.Z,{as:"h2",scale:"xl",mb:"32px",id:"voting-proposals",children:a("Proposals")}),(0,z.jsxs)(T.Z,{children:[(0,z.jsx)(ak,{proposalType:j,onTypeChange:function(a){m(function(b){return(0,P.Z)((0,O.Z)({},b),{proposalType:a})})}}),(0,z.jsx)(ay,{filterState:d,onFilterChange:function(a){m(function(b){return(0,P.Z)((0,O.Z)({},b),{filterState:a})})},isLoading:b!==W.iF.Fetched}),b!==W.iF.Fetched&&(0,z.jsx)(ac,{}),b===W.iF.Fetched&&g.length>0&&g.map(function(a){return(0,z.jsx)(at,{proposal:a},a.id)}),b===W.iF.Fetched&&0===g.length&&(0,z.jsx)(e.Z,{alignItems:"center",justifyContent:"center",p:"32px",children:(0,z.jsx)(B.Z,{as:"h5",children:a("No proposals found")})})]})]})};function v(){var a=(0,y.Z)(["\n  flex: none;\n"]);return v=function(){return a},a}function w(){var a=(0,y.Z)(["\n  flex: 1;\n  height: 100%;\n"]);return w=function(){return a},a}var aA=b.ZP.div.withConfig({componentId:"sc-8002118c-0"})(v()),aB=b.ZP.div.withConfig({componentId:"sc-8002118c-1"})(w()),aC=function(){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A.V,{}),(0,z.jsxs)(e.Z,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[(0,z.jsx)(aA,{children:(0,z.jsx)(M,{})}),(0,z.jsx)(aB,{children:(0,z.jsx)(az,{})}),(0,z.jsx)(aA,{children:(0,z.jsx)(K,{})})]})]})}}},function(a){a.O(0,[2298,5547,938,9774,2888,179],function(){var b;return a(a.s=95353)}),_N_E=a.O()}])
//# sourceMappingURL=voting-11799fd92ded433a.js.map