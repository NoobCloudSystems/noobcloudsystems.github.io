"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="Servers",s={unversionedId:"noobcloud-api/servers",id:"noobcloud-api/servers",title:"Servers",description:"Server Data",source:"@site/docs/noobcloud-api/servers.md",sourceDirName:"noobcloud-api",slug:"/noobcloud-api/servers",permalink:"/docs/noobcloud-api/servers",draft:!1,editUrl:"https://github.com/NoobCloudSystems/noobcloudsystems.github.io/blob/master/docs/noobcloud-api/servers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Groups",permalink:"/docs/noobcloud-api/groups"},next:{title:"Players",permalink:"/docs/noobcloud-api/players"}},l={},p=[{value:"Server Data",id:"server-data",level:2},{value:"Using GameStates",id:"using-gamestates",level:3},{value:"Handling motds",id:"handling-motds",level:3},{value:"Obtaining Servers",id:"obtaining-servers",level:3},{value:"Operating with Servers",id:"operating-with-servers",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"servers"},"Servers"),(0,a.kt)("h2",{id:"server-data"},"Server Data"),(0,a.kt)("p",null,"Using NoobCloudAPI you can easily obtain information about a ",(0,a.kt)("inlineCode",{parentName:"p"},"Server"),".\nEach ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," that was startet by NoobCloud can be listed by calling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"List<Server> servers = NoobCloudAPI.getInstance().getAllServers();\nList<Server> gameServers = NoobCloudAPI.getInstance().getAllGameServers();\nList<Server> proxyServers = NoobCloudAPI.getInstance().getAllProxyServers();\n")),(0,a.kt)("h3",{id:"using-gamestates"},"Using GameStates"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," can be characterised more precisely by checking its ",(0,a.kt)("inlineCode",{parentName:"p"},"GameState")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Server#getGameState()"),". The GameStats ",(0,a.kt)("inlineCode",{parentName:"p"},"AVAILABLE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"COUNTDOWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"INGAME"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ENDING")," are representing Minestom Servers and ",(0,a.kt)("inlineCode",{parentName:"p"},"PROXY")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"GameState")," that all proxy servers receive at start-up. You can change the ",(0,a.kt)("inlineCode",{parentName:"p"},"GameState")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"Server#setGameState(GameState gameState)")," and listen to a change through the ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerChangeGameStateEvent"),". Note: There are separate ServerChangeGameStateEvents for Minestom and Velocity."),(0,a.kt)("h3",{id:"handling-motds"},"Handling motds"),(0,a.kt)("p",null,"You can get the motd of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Server#getMotd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NoobCloudAPI.getInstance().getMotd(String serverName)"),". With ",(0,a.kt)("inlineCode",{parentName:"p"},"Server#setMotd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NoobCloudAPI.getInstance().setMotd(String serverName, String motd)")," you can modify the motd."),(0,a.kt)("h3",{id:"obtaining-servers"},"Obtaining Servers"),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," holds a unique id, which can be accessed with ",(0,a.kt)("inlineCode",{parentName:"p"},"Server#getUUID();"),". The UUID or the name of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," can also be used to obtain a ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Optional<Server> server = NoobCloudAPI.getInstance().getServerByName(String name);\nOptional<Server> server = NoobCloudAPI.getInstance().getServerByUUID(UUID uuid);\n// The server is online if the Optional returned by this methods is present.\n")),(0,a.kt)("p",null,"Moreover, you are able to get port and online count of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Server"),"."),(0,a.kt)("h2",{id:"operating-with-servers"},"Operating with Servers"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," can be forced to start and stop using NoobCloudAPI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"NoobCloudAPI.getInstance().startServer(String groupName)\nNoobCloudAPI.getInstance().stopServer(String name)\n")),(0,a.kt)("p",null,"Furthermore, you can send specific information to a server by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Server#sendServerMessage(List<String> message)"),". You can receive this messages sent to a server by listening to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerMessageEvent"),". Note: There are separate ServerMessageEvents for Minestom and Velocity."))}c.isMDXComponent=!0}}]);