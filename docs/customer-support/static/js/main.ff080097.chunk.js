(this.webpackJsonpcommerce=this.webpackJsonpcommerce||[]).push([[0],{265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},269:function(e,t,n){},404:function(e,t,n){},405:function(e,t,n){},406:function(e,t,n){},505:function(e,t,n){},506:function(e,t,n){},507:function(e,t,n){},508:function(e,t,n){},509:function(e,t,n){},520:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(30),s=n.n(c),i=n(23),r=n.n(i),l=n(40),o=n(19),h=n(555),d=n(29),j=n(556),u=(n(264),n(265),n(551)),p=n(539),b=n(540),m=n(552),x=n(554),C=n(49),O=n(553),g=(n(266),n(267),n(1)),_=function(e){var t=e.error,n=void 0!==t&&t,a=e.loading,c=e.children;return n?Object(g.jsx)("div",{className:"agent-channel-list",children:Object(g.jsx)("p",{className:"agent-channel-list__message",children:"Connection error, please wait a moment and try again."})}):a?Object(g.jsx)("div",{className:"agent-channel-list",children:Object(g.jsx)("p",{className:"agent-channel-list__message",children:"Conversations loading...."})}):Object(g.jsx)("div",{className:"agent-channel-list",children:c})},f=n(7),v=(n(269),function(e){var t=e.agentChannelId,n=e.channel,c=e.customerChannelId,s=e.setActiveChannel,i=Object(f.b)(),r=i.channel,l=i.client,h=Object(a.useState)(n.state.unreadCount),d=Object(o.a)(h,2),j=d[0],u=d[1],p=(null===n||void 0===n?void 0:n.id)===(null===r||void 0===r?void 0:r.id);Object(a.useEffect)((function(){return l.on("message.read",(function(){return u(0)})),function(){return l.off("message.read")}}),[]),Object(a.useEffect)((function(){return l.on("message.new",(function(){return u(n.state.unreadCount)})),function(){return l.off("message.new")}}),[]);return!n.state.messages.length||n.id!==t&&n.id!==c?null:Object(g.jsxs)("div",{className:p?"agent-channel-preview__wrapper selected":"agent-channel-preview__wrapper",onClick:function(){return s(n)},children:[Object(g.jsxs)("div",{className:"agent-channel-preview__top",children:[Object(g.jsx)("div",{className:"agent-channel-preview__image-wrapper",children:Object(g.jsx)("img",{alt:n.data.name,src:n.data.image,height:"36px",width:"36px"})}),Object(g.jsxs)("div",{className:"agent-channel-preview__name-wrapper",children:[Object(g.jsxs)("div",{className:"agent-channel-preview__name-count-wrapper",children:[Object(g.jsx)("p",{className:"agent-channel-preview__name",children:n.data.name}),!!j&&!p&&Object(g.jsx)("div",{className:"agent-channel-preview__unread-count",children:j})]}),Object(g.jsx)("p",{className:"agent-channel-preview__text-inquiry",children:n.data.subtitle})]})]}),Object(g.jsx)("p",{className:"agent-channel-preview__message",children:function(){var e=n.state.messages[n.state.messages.length-1].text;return e.length<70?e:"".concat(e.slice(0,70),"...")}()})]})}),w=function(){return Object(g.jsx)("div",{style:{display:"flex",marginLeft:"4px",marginRight:"20px"},children:Object(g.jsx)("svg",{width:"16",height:"19",viewBox:"0 0 16 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M7.79403 3.53208C8.10593 3.53208 8.84693 3.7293 8.84693 3.7293C10.8544 4.18933 12.2674 6.03841 12.2674 8.12611V13.1636V13.7454L12.6779 14.1577L13.0208 14.5022H2.47921L2.82214 14.1577L3.23259 13.7454V13.1636V8.12611C3.23259 6.03845 4.6456 4.18933 6.65307 3.7293C6.65307 3.7293 7.44757 3.53208 7.70597 3.53208H7.79403ZM7.75 0.340881C6.97491 0.340881 6.38234 0.936134 6.38234 1.71474V2.35584C3.78367 2.95131 1.8235 5.33259 1.8235 8.12611V13.1636L0 14.9954V15.9113H15.5V14.9954L13.6765 13.1636V8.12611C13.6765 5.33259 11.7163 2.95131 9.11765 2.35584V1.71474C9.11765 0.936134 8.52509 0.340881 7.75 0.340881ZM9.5735 16.8272H5.92646C5.92646 17.8348 6.74695 18.6591 7.75 18.6591C8.75305 18.6591 9.5735 17.8348 9.5735 16.8272Z",fill:"white"})})})},N=function(){return Object(g.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M6.00003 10.7999C8.65203 10.7999 10.8 8.65079 10.8 5.99993C10.8 3.34913 8.65203 1.19995 6.00003 1.19995C3.34802 1.19995 1.20001 3.34913 1.20001 5.99993C1.20001 8.65079 3.34802 10.7999 6.00003 10.7999ZM5.99703 0C9.31263 0 12 2.68619 12 5.99999C12 9.31386 9.31263 12 5.99703 12C2.68079 12 0 9.31386 0 5.99999C0 2.68619 2.68079 0 5.99703 0ZM6.30003 3V6.14999L9.00003 7.75145L8.54823 8.49005L5.40003 6.59999V3H6.30003Z",fill:"white",fillOpacity:"0.5"})})},y=function(){return Object(g.jsx)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M7 0.03125C3.13438 0.03125 0 3.16563 0 7.03125C0 10.8969 3.13438 14.0312 7 14.0312C10.8656 14.0312 14 10.8969 14 7.03125C14 3.16563 10.8656 0.03125 7 0.03125ZM10.3844 9.39062C10.4312 9.4375 10.4563 9.5 10.4563 9.56563C10.4563 9.63125 10.4312 9.69688 10.3844 9.74063L9.70938 10.4187C9.65938 10.4688 9.59688 10.4906 9.53438 10.4906C9.47188 10.4906 9.40625 10.4656 9.35938 10.4187L7 8.05625L4.64375 10.4219C4.59688 10.4719 4.53125 10.4937 4.46875 10.4937C4.40625 10.4937 4.34062 10.4688 4.29375 10.4219L3.61875 9.74375C3.57188 9.69687 3.54688 9.63438 3.54688 9.56875C3.54688 9.50313 3.57188 9.4375 3.61875 9.39375L5.98438 7.01875L3.6125 4.675C3.51563 4.57812 3.51563 4.41875 3.6125 4.32188L4.2875 3.64375C4.33437 3.59688 4.39687 3.57188 4.4625 3.57188C4.52813 3.57188 4.59062 3.59688 4.6375 3.64375L7.00313 5.97813L9.36875 3.64375C9.41562 3.59688 9.47812 3.57188 9.54375 3.57188C9.60938 3.57188 9.67188 3.59688 9.71875 3.64375L10.3938 4.32188C10.4906 4.41875 10.4906 4.57812 10.3938 4.675L8.02188 7.01875L10.3844 9.39062Z",fill:"white",fillOpacity:"0.5"})})},I=function(){return Object(g.jsxs)("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(g.jsx)("circle",{cx:"30",cy:"30",r:"30",fill:"white"}),Object(g.jsx)("path",{d:"M37.5233 35.4135L32.1098 30L37.5233 24.5865C38.1078 24.0021 38.1078 23.0611 37.5233 22.4767C36.9388 21.8922 35.9979 21.8922 35.4135 22.4767L30 27.8901L24.5865 22.4767C24.0021 21.8922 23.0611 21.8922 22.4767 22.4767C21.8922 23.0611 21.8922 24.0021 22.4767 24.5865L27.8901 30L22.4767 35.4135C21.8922 35.9979 21.8922 36.9388 22.4767 37.5233C23.0611 38.1078 24.0021 38.1078 24.5865 37.5233L30 32.1098L35.4135 37.5233C35.9979 38.1078 36.9388 38.1078 37.5233 37.5233C38.1036 36.9388 38.1036 35.9938 37.5233 35.4135Z",fill:"#858688"})]})},V=function(){return Object(g.jsx)("div",{style:{display:"flex",marginLeft:"6px"},children:Object(g.jsx)("svg",{width:"13",height:"7",viewBox:"0 0 13 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M6.50004 4.65663L11.2633 0.0847562C11.3809 -0.0300876 11.575 -0.0273533 11.6954 0.0902248L12.5321 0.907803C12.6524 1.02538 12.6551 1.21679 12.5375 1.33163L6.72152 6.91522C6.66137 6.97538 6.57934 7.00272 6.50004 6.99726C6.41801 6.99999 6.33871 6.97265 6.27855 6.91522L0.462539 1.33163C0.344961 1.21679 0.347695 1.02538 0.468008 0.907803L1.30473 0.0902248C1.42504 -0.0273533 1.61918 -0.0300876 1.73676 0.0847562L6.50004 4.65663Z",fill:"white"})})})},L=function(){return Object(g.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M5.00002 3.32595L8.40236 0.0603222C8.48635 -0.0217091 8.62502 -0.019756 8.71095 0.0642283L9.30861 0.648213C9.39455 0.732197 9.3965 0.868916 9.31252 0.950947L5.15822 4.93923C5.11525 4.9822 5.05666 5.00173 5.00002 4.99782C4.94142 4.99978 4.88478 4.98024 4.84181 4.93923L0.687519 0.950947C0.603535 0.868916 0.605488 0.732197 0.691425 0.648213L1.28908 0.0642283C1.37502 -0.019756 1.51369 -0.0217091 1.59768 0.0603222L5.00002 3.32595Z",fill:"#2C2C30"})})},k=function(){return Object(g.jsx)("svg",{width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M15 1.30005V11.3H1V1.30005M15 1.30005H1M15 1.30005L8 7.30005L1 1.30005",stroke:"#0040A8",strokeOpacity:"0.5",strokeLinecap:"round",strokeLinejoin:"round"})})},E=function(){return Object(g.jsx)("div",{style:{display:"flex",marginLeft:"10px"},children:Object(g.jsx)("svg",{width:"11",height:"17",viewBox:"0 0 11 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M4.25 16.25C2.07725 16.25 0.5 14.5153 0.5 12.125V5.75C0.5 2.75675 2.5955 0.5 5.375 0.5C8.1545 0.5 10.25 2.75675 10.25 5.75V11H8.75V5.75C8.75 3.57725 7.33025 2 5.375 2C3.41975 2 2 3.57725 2 5.75V12.125C2 13.4323 2.696 14.75 4.25 14.75C5.804 14.75 6.5 13.4323 6.5 12.125V6.5C6.5 6.0485 6.3905 5 5.375 5C4.3595 5 4.25 6.0485 4.25 6.5V11.75H2.75V6.5C2.75 4.70525 3.80525 3.5 5.375 3.5C6.94475 3.5 8 4.70525 8 6.5V12.125C8 14.5153 6.42275 16.25 4.25 16.25Z",fill:"black",fillOpacity:"0.2"})})})},M=function(){return Object(g.jsx)("svg",{width:"16",height:"20",viewBox:"0 0 16 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M13.8192 8.33581V6.72164C13.8192 3.50831 11.2042 0.893311 7.99 0.893311C4.77667 0.893311 2.16167 3.50831 2.16167 6.72164V8.33581C1.23667 8.39081 0.5 9.05581 0.5 9.87414V13.4475C0.5 14.3008 1.3 14.9958 2.28333 14.9958H3.39333C3.62333 14.9958 3.81 14.8091 3.81 14.5791V8.74164C3.81 8.51164 3.62333 8.32498 3.39333 8.32498H2.99583V6.72164C2.99583 3.96748 5.23667 1.72664 7.99083 1.72664C10.745 1.72664 12.9867 3.96748 12.9867 6.72164V8.32498H12.585C12.355 8.32498 12.1683 8.51164 12.1683 8.74164V14.5791C12.1683 14.8091 12.355 14.9958 12.585 14.9958H13.695C13.7642 14.9958 13.83 14.985 13.8967 14.9783C13.6608 16.905 12.6258 17.6641 10.1242 17.8066C9.95917 17.5041 9.64917 17.29 9.28083 17.29H8.09417C7.5575 17.29 7.12167 17.7258 7.12167 18.2625C7.12167 18.7991 7.5575 19.235 8.09417 19.235H9.28083C9.68083 19.235 10.0242 18.9916 10.1733 18.6458C12.7875 18.5016 14.5558 17.7108 14.7692 14.6758C15.1967 14.3925 15.4783 13.95 15.4783 13.4483V9.87498C15.4775 9.05748 14.7433 8.39331 13.8192 8.33581ZM2.97667 14.1625H2.28333C1.76833 14.1625 1.33333 13.8341 1.33333 13.4475V9.87414C1.33333 9.48664 1.76833 9.15831 2.28333 9.15831H2.97667V14.1625ZM9.28 18.4016H8.09333C8.01667 18.4016 7.95417 18.3391 7.95417 18.2625C7.95417 18.1858 8.01667 18.1233 8.09333 18.1233H9.28C9.35667 18.1233 9.41917 18.1858 9.41917 18.2625C9.41917 18.3391 9.35667 18.4016 9.28 18.4016ZM13.0008 14.1625V9.15831H13.6942C14.2092 9.15831 14.6442 9.48664 14.6442 9.87414V13.4475C14.6442 13.835 14.21 14.1625 13.6942 14.1625H13.0008Z",fill:"white",fillOpacity:"0.5"})})},H=function(){return Object(g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"none",viewBox:"0 0 60 60",children:[Object(g.jsx)("circle",{cx:"30",cy:"30",r:"30",fill:"#005FFF"}),Object(g.jsx)("path",{fill:"#fff",d:"M16.825 39.736c.13.216.201.461.201.735L16.154 45l4.053-1.594a1.703 1.703 0 011.204-.022h.014c.03.015.058.022.087.037 1.284.526 2.697.822 4.175.822 3.34 0 6.318-1.479 8.28-3.794-1.017.26-2.085.412-3.18.412-6.917 0-12.527-5.41-12.527-12.08 0-.85.093-1.673.266-2.473-2.163 1.882-3.526 4.6-3.526 7.63 0 2.047.62 3.98 1.695 5.588.043.058.086.137.13.21z"}),Object(g.jsx)("path",{fill:"#fff",d:"M32.474 15c-6.036 0-11.077 4.125-12.26 9.606-.173.8-.267 1.622-.267 2.473 0 6.671 5.604 12.08 12.527 12.08 1.103 0 2.163-.152 3.18-.411a13.97 13.97 0 001.716-.548c.036-.015.065-.03.101-.044.007 0 .015 0 .015-.007a1.907 1.907 0 011.399.022l4.947 1.86-1.226-5.322c0-.317.086-.62.238-.88.043-.079.1-.151.151-.223a11.726 11.726 0 001.983-6.527C45 20.41 39.397 15 32.474 15z"})]})},A=function(){return Object(g.jsx)("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M14.6667 10.78V12.78C14.6675 12.9657 14.6294 13.1495 14.555 13.3196C14.4807 13.4897 14.3716 13.6424 14.2348 13.7679C14.0979 13.8934 13.9364 13.989 13.7605 14.0485C13.5847 14.108 13.3983 14.1301 13.2134 14.1133C11.1619 13.8904 9.19137 13.1894 7.46004 12.0667C5.84926 11.0431 4.48359 9.67746 3.46004 8.06668C2.33336 6.32748 1.6322 4.34734 1.41337 2.28668C1.39671 2.10233 1.41862 1.91652 1.4777 1.7411C1.53679 1.56567 1.63175 1.40447 1.75655 1.26776C1.88134 1.13105 2.03324 1.02182 2.20256 0.947028C2.37189 0.872237 2.55493 0.833521 2.74004 0.833347H4.74004C5.06357 0.830163 5.37723 0.944733 5.62254 1.1557C5.86786 1.36667 6.02809 1.65964 6.07337 1.98001C6.15779 2.62006 6.31434 3.2485 6.54004 3.85335C6.62973 4.09196 6.64915 4.35129 6.59597 4.6006C6.5428 4.84991 6.41928 5.07875 6.24004 5.26001L5.39337 6.10668C6.34241 7.77571 7.72434 9.15764 9.39337 10.1067L10.24 9.26001C10.4213 9.08077 10.6501 8.95725 10.8994 8.90408C11.1488 8.85091 11.4081 8.87032 11.6467 8.96001C12.2516 9.18571 12.88 9.34227 13.52 9.42668C13.8439 9.47237 14.1396 9.63548 14.3511 9.88501C14.5625 10.1345 14.6748 10.4531 14.6667 10.78Z",stroke:"#0040A8",strokeOpacity:"0.5",strokeLinecap:"round",strokeLinejoin:"round"})})},R=function(){return Object(g.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.69995 6.94995C2.69995 4.60274 4.60274 2.69995 6.94995 2.69995C9.29716 2.69995 11.2 4.60274 11.2 6.94995C11.2 8.09769 10.745 9.13917 10.0056 9.90388C9.98759 9.91948 9.97002 9.93583 9.95293 9.95293C9.93583 9.97002 9.91948 9.98759 9.90388 10.0056C9.13917 10.745 8.09769 11.2 6.94995 11.2C4.60274 11.2 2.69995 9.29716 2.69995 6.94995ZM10.6057 12.0199C9.5777 12.7624 8.31492 13.2 6.94995 13.2C3.49817 13.2 0.699951 10.4017 0.699951 6.94995C0.699951 3.49817 3.49817 0.699951 6.94995 0.699951C10.4017 0.699951 13.2 3.49817 13.2 6.94995C13.2 8.31492 12.7624 9.5777 12.0199 10.6057L15.0071 13.5929C15.3977 13.9835 15.3977 14.6166 15.0071 15.0071C14.6166 15.3977 13.9835 15.3977 13.5929 15.0071L10.6057 12.0199Z",fill:"white",fillOpacity:"0.5"})})},Z=function(e){var t=e.openEmojiPicker;return Object(g.jsx)("div",{onClick:t,style:{display:"flex"},children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{fill:"#000",fillOpacity:"0.2",fillRule:"evenodd",d:"M1.6 8a6.4 6.4 0 1112.8 0A6.4 6.4 0 011.6 8zM8 0a8 8 0 100 16A8 8 0 008 0zM6 7.2a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM11.2 6a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM5.455 9.141a.8.8 0 10-1.31.918c.542.774 1.578 1.737 2.962 2.024 1.46.303 3.1-.184 4.688-1.948a.8.8 0 00-1.19-1.07C9.313 10.5 8.22 10.68 7.433 10.517c-.863-.18-1.586-.817-1.978-1.376z",clipRule:"evenodd"})})})},S=function(){return Object(g.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(g.jsx)("path",{d:"M7.52157 2.51709H7.1049C6.87459 2.51709 6.68823 2.70345 6.68823 2.93376C6.68823 3.16406 6.87459 3.35042 7.1049 3.35042H7.52157C7.75187 3.35042 7.93823 3.16406 7.93823 2.93376C7.93823 2.70345 7.75187 2.51709 7.52157 2.51709Z",fill:"white",fillOpacity:"0.5"}),Object(g.jsx)("path",{d:"M5.02157 2.51709H4.6049C4.37459 2.51709 4.18823 2.70345 4.18823 2.93376C4.18823 3.16406 4.37459 3.35042 4.6049 3.35042H5.02157C5.25187 3.35042 5.43823 3.16406 5.43823 2.93376C5.43823 2.70345 5.25187 2.51709 5.02157 2.51709Z",fill:"white",fillOpacity:"0.5"}),Object(g.jsx)("path",{d:"M12.5212 2.51709H12.1045C11.8742 2.51709 11.6879 2.70345 11.6879 2.93376C11.6879 3.16406 11.8742 3.35042 12.1045 3.35042H12.5212C12.7515 3.35042 12.9379 3.16406 12.9379 2.93376C12.9379 2.70345 12.7515 2.51709 12.5212 2.51709Z",fill:"white",fillOpacity:"0.5"}),Object(g.jsx)("path",{d:"M15.0212 2.51709H14.6045C14.3742 2.51709 14.1879 2.70345 14.1879 2.93376C14.1879 3.16406 14.3742 3.35042 14.6045 3.35042H15.0212C15.2515 3.35042 15.4379 3.16406 15.4379 2.93376C15.4379 2.70345 15.2515 2.51709 15.0212 2.51709Z",fill:"white",fillOpacity:"0.5"}),Object(g.jsx)("path",{d:"M10.0216 2.51709H9.6049C9.37459 2.51709 9.18823 2.70345 9.18823 2.93376C9.18823 3.16406 9.37459 3.35042 9.6049 3.35042H10.0216C10.2519 3.35042 10.4382 3.16406 10.4382 2.93376C10.4382 2.70345 10.2519 2.51709 10.0216 2.51709Z",fill:"white",fillOpacity:"0.5"}),Object(g.jsx)("path",{d:"M17.9289 0.0170898H2.09595C1.40666 0.0170898 0.845947 0.577798 0.845947 1.26709V4.59961C0.845947 5.2889 1.40666 5.84961 2.09595 5.84961H10.8455V7.86214C10.8455 8.02124 10.9359 8.1661 11.0783 8.23608C11.1369 8.26497 11.1995 8.27881 11.2622 8.27881C11.3525 8.27881 11.4429 8.24911 11.5169 8.19173L14.5443 5.84961H17.9289C18.6182 5.84961 19.1789 5.2889 19.1789 4.59961V1.26709C19.1789 0.577798 18.6182 0.0170898 17.9289 0.0170898ZM18.3455 4.59961C18.3455 4.82951 18.1584 5.01627 17.9289 5.01627H14.4019C14.3099 5.01627 14.2196 5.04679 14.1471 5.10335L11.6789 7.01293V5.43293C11.6789 5.20262 11.4925 5.01626 11.2622 5.01626H2.09595C1.86605 5.01626 1.67928 4.8295 1.67928 4.5996V1.26709C1.67928 1.03719 1.86605 0.850423 2.09595 0.850423H17.9289C18.1584 0.850423 18.3455 1.03719 18.3455 1.26709V4.59961Z",fill:"white",fillOpacity:"0.5"}),Object(g.jsx)("path",{d:"M12.7719 16.8693C12.7702 16.8685 12.7686 16.8685 12.767 16.8676C9.60534 15.6185 9.02348 15.0814 8.9189 14.9389V14.589C9.29813 14.1357 9.58053 13.6043 9.74328 13.0371C9.97603 12.8214 10.1274 12.5366 10.1754 12.2184C10.2238 11.8945 10.1595 11.5714 9.9744 11.2687V10.0549C9.9744 8.30931 8.92052 7.30792 7.08256 7.30792C5.27144 7.30792 4.1899 8.33494 4.1899 10.0549V11.263C4.02022 11.5307 3.94698 11.8449 3.98238 12.1647C4.0186 12.4886 4.16264 12.784 4.41939 13.0298C4.58174 13.6002 4.86495 14.1341 5.24622 14.589V14.9365C5.12415 15.1082 4.50362 15.6388 1.39327 16.8693C1.07262 17.0003 0.867141 17.3096 0.870399 17.653V19.1422C0.861449 19.602 1.22888 19.9837 1.69763 19.9935H12.4764C12.9354 19.9837 13.3025 19.602 13.2943 19.1504V17.657C13.2976 17.3095 13.0925 17.0003 12.7719 16.8693ZM12.461 17.653L12.4675 19.1601L1.70373 19.1504L1.70455 17.6424C5.30033 16.2199 5.92371 15.6054 6.06165 15.1521C6.07345 15.1131 6.07955 15.0724 6.07955 15.0309V14.4327C6.07955 14.3294 6.04089 14.2293 5.97132 14.1528C5.59778 13.741 5.32882 13.2381 5.19332 12.6993C5.17135 12.6115 5.09119 12.5097 5.02039 12.4528C4.90198 12.3584 4.82752 12.2233 4.81084 12.0727C4.79417 11.9222 4.83729 11.7741 4.93169 11.6561C4.9911 11.582 5.02324 11.49 5.02324 11.3956V10.0549C5.02324 8.80286 5.73532 8.14124 7.08257 8.14124C8.44853 8.14124 9.14108 8.78496 9.14108 10.0549V11.3948C9.14108 11.4835 9.19357 11.6015 9.24646 11.6731C9.33638 11.7952 9.37382 11.9449 9.35103 12.0947C9.32865 12.2444 9.24931 12.3763 9.12764 12.4658C9.04993 12.5227 8.99458 12.6058 8.97098 12.6993C8.83548 13.2381 8.56693 13.741 8.19339 14.1528C8.12422 14.2293 8.08557 14.3294 8.08557 14.4327V15.0309C8.08557 15.0716 8.09167 15.1131 8.10347 15.1521C8.24182 15.6062 8.86518 16.2223 12.461 17.6424L12.614 17.255L12.461 17.653Z",fill:"white",fillOpacity:"0.5"}),Object(g.jsx)("path",{d:"M17.8499 17.3218C17.0963 17.0402 16.311 16.8946 15.6803 16.7774C15.2636 16.7001 14.7526 16.6048 14.6272 16.5707V16.4315C15.3312 16.4152 16.0164 16.2224 16.6316 15.8651C16.7602 15.7902 16.8343 15.6511 16.8343 15.503C16.8343 15.354 16.7513 15.2141 16.6235 15.1392C16.3802 14.9968 16.0677 13.7736 15.9692 12.6131C15.9928 10.9766 14.6801 9.62486 13.0428 9.60126C12.4072 9.5972 11.8025 9.7807 11.2841 10.1469C11.097 10.2796 11.0522 10.54 11.1848 10.7276C11.3183 10.9164 11.5795 10.9587 11.7659 10.8273C12.1386 10.5636 12.5789 10.4309 13.0314 10.4346C14.2089 10.4517 15.1529 11.4234 15.1375 12.6416C15.1896 13.2797 15.3458 14.5948 15.7665 15.3614C15.2864 15.5534 14.7696 15.6291 14.2447 15.5884C14.1316 15.5803 14.0136 15.6185 13.9282 15.6966C13.8427 15.7756 13.7939 15.8871 13.7939 16.0034V16.6927C13.7939 16.7359 13.8004 16.7798 13.8142 16.8205C13.9713 17.3072 14.5906 17.4219 15.5281 17.5969C16.1124 17.7051 16.8367 17.8402 17.5122 18.086V19.1602H14.7273C14.497 19.1602 14.3107 19.3465 14.3107 19.5768C14.3107 19.8072 14.497 19.9935 14.7273 19.9935H17.5764C17.5781 19.9935 17.5805 19.9935 17.583 19.9935C17.784 19.9935 17.9736 19.9162 18.1168 19.7754C18.2625 19.633 18.3439 19.4418 18.3455 19.2342V18.0298C18.3439 17.7132 18.1429 17.4284 17.8499 17.3218Z",fill:"white",fillOpacity:"0.5"})]})},J=function(){return Object(g.jsx)("div",{className:"channel-search__container",children:Object(g.jsxs)("div",{className:"channel-search__input__wrapper",children:[Object(g.jsx)("div",{className:"channel-search__input__icon",children:Object(g.jsx)(R,{})}),Object(g.jsx)("input",{className:"channel-search__input__text",onChange:function(e){return console.log(e.target.value)},placeholder:"Search",type:"text"})]})})},P={member:!0,watch:!0,limit:3},T={last_message_at:-1},U=function(e){var t=e.agentChannelId,n=e.customerChannelId,a={type:"commerce",id:{$in:[t,n]}};return Object(g.jsxs)("div",{className:"agent-channel-list__container",children:[Object(g.jsx)(J,{}),Object(g.jsx)("p",{className:"agent-channel-list__conversation-header",children:"Active Conversations"}),Object(g.jsx)(O.a,{filters:a,sort:T,options:P,List:_,Preview:function(e){return Object(g.jsx)(v,Object(C.a)(Object(C.a)({},e),{},{agentChannelId:t,customerChannelId:n}))}})]})},B=(n(404),n(405),function(e){var t=e.eventChannel,n=e.previewText,a=e.setPopupVisible,c=Object(f.b)().setActiveChannel;return Object(g.jsxs)("div",{className:"notification-popup__container",onClick:function(){t&&c(t)},children:[Object(g.jsxs)("div",{className:"notification-popup__top-wrapper",children:[Object(g.jsx)("p",{className:"notification-popup__top-text",children:"AGENT DASHBOARD"}),Object(g.jsx)("div",{className:"notification-popup__dismiss",onClick:function(){return a(!1)},children:Object(g.jsx)(y,{})})]}),Object(g.jsx)("p",{className:"notification-popup__waiting-text",children:"You have 1 new customer waiting"}),Object(g.jsx)("p",{className:"notification-popup__message-preview",children:n.length>40?'"'.concat(n.slice(0,40),'..."'):'"'.concat(n,'"')})]})}),F=function(){var e=Object(f.b)(),t=e.channel,n=e.client,c=Object(a.useState)(null),s=Object(o.a)(c,2),i=s[0],h=s[1],d=Object(a.useState)(!1),j=Object(o.a)(d,2),u=j[0],p=j[1],b=Object(a.useState)(""),m=Object(o.a)(b,2),x=m[0],C=m[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(r.a.mark((function e(a){var c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.channel_id===t.id||a.message.automated){e.next=15;break}return e.prev=1,e.next=4,n.queryChannels({cid:a.cid});case 4:c=e.sent,s=Object(o.a)(c,1),i=s[0],h(i),C(a.message.text),p(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Message notification error:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return n.on("message.new",e),function(){return n.off("message.new",e)}}),[]),Object(a.useEffect)((function(){u&&setTimeout((function(){return p(!1)}),3e3)}),[u]),Object(g.jsxs)("div",{className:"agent-channel-header__container",children:[Object(g.jsxs)("div",{className:"agent-channel-header__top",children:[Object(g.jsx)("img",{alt:t.data.name,src:t.data.image,height:"42px",width:"42px"}),Object(g.jsx)("p",{className:"agent-channel-header__top__name",children:t.data.name}),Object(g.jsxs)("div",{className:"agent-channel-header__top__circle",children:[Object(g.jsx)("div",{className:"agent-channel-header__top__dot"}),Object(g.jsx)("div",{className:"agent-channel-header__top__dot"}),Object(g.jsx)("div",{className:"agent-channel-header__top__dot"})]})]}),Object(g.jsxs)("div",{className:"agent-channel-header__middle",children:[Object(g.jsxs)("div",{className:"agent-channel-header__middle__wrapper",children:[Object(g.jsx)(A,{}),Object(g.jsx)("p",{className:"agent-channel-header__middle__text",children:t.data.created_by.phone})]}),Object(g.jsxs)("div",{className:"agent-channel-header__middle__wrapper",children:[Object(g.jsx)(k,{}),Object(g.jsx)("p",{className:"agent-channel-header__middle__text email",children:t.data.created_by.email})]})]}),Object(g.jsx)("div",{className:"agent-channel-header__bottom__border"}),Object(g.jsxs)("div",{className:"agent-channel-header__bottom",children:[Object(g.jsx)("p",{className:"agent-channel-header__bottom__type",children:"Issue"}),Object(g.jsx)("p",{className:"agent-channel-header__bottom__selection",children:t.data.issue}),Object(g.jsx)(L,{}),Object(g.jsx)("p",{className:"agent-channel-header__bottom__type",children:"Status"}),Object(g.jsx)("p",{className:"agent-channel-header__bottom__selection",children:"Unresolved"}),Object(g.jsx)(L,{})]}),Object(g.jsx)("div",{className:"agent-channel-header__bottom__border"}),u&&x&&Object(g.jsx)(B,{eventChannel:i,previewText:x,setPopupVisible:p})]})},z=n(15),W=n(21),G=n(9),X=n(87),q=n(95),D=n(89),K=(n(406),["Great! We have many resources on our website detailing various pricing plans, including which features are available. And, if you\u2019re interested, follow the links at the bottom of each section to speak with our sales team: https://getstream.io/pricing/chat/","Got it. Our Enterprise program is one of the most popular among customers. You can find everything you need by following this link to our website: https://getstream.io/enterprise/","Good choice. We are always looking to add talented people to our team. You can find all of our current job listings on our website: https://getstream.io/enterprise/","Great. Can you describe what you're looking for?"]),Y=function(){var e=Object(W.b)(),t=Object(G.b)(),n=t.acceptedFiles,c=t.maxNumberOfFiles,s=t.multipleUploads,i=Object(f.b)().client;return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(r.a.mark((function e(t){var n,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("number"!==typeof(n=t.message.index)){e.next=14;break}return e.prev=2,e.next=5,i.queryChannels({cid:t.cid});case 5:a=e.sent,c=Object(o.a)(a,1),s=c[0],setTimeout((function(){return s.sendMessage({text:K[n],automated:!0})}),1e3),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("Auto response error:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return i.on("message.new",e),function(){return i.off("message.new",e)}}),[]),Object(g.jsxs)("div",{className:"agent-message-input__wrapper",children:[Object(g.jsx)(z.d,{accept:n,handleFiles:e.uploadNewFiles,multiple:s,disabled:void 0!==c&&e.numberOfUploads>=c,children:Object(g.jsxs)("div",{className:"agent-message-input__input",children:[Object(g.jsx)(X.a,{}),Object(g.jsxs)("div",{className:"agent-message-input__input-wrapper",children:[Object(g.jsx)(q.a,{rows:1,placeholder:"Send a message"}),Object(g.jsx)(Z,{openEmojiPicker:e.openEmojiPicker}),Object(g.jsx)(z.c,{handleFiles:e.uploadNewFiles,children:Object(g.jsx)(E,{})})]})]})}),Object(g.jsx)(D.a,{})]})},Q=function(e){var t=e.agentChannelId,n=e.customerChannelId;return Object(g.jsxs)("div",{style:{display:"flex",height:"calc(100vh - 60px)"},children:[Object(g.jsx)(U,{agentChannelId:t,customerChannelId:n}),Object(g.jsx)("div",{className:"agent-channel-wrapper",children:Object(g.jsx)(u.a,{Input:Y,Message:p.a,children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(F,{}),Object(g.jsx)(m.a,{}),Object(g.jsx)(x.a,{focus:!0})]})})})]})},$=n.p+"static/media/jen-avatar.dcb956a8.png",ee=n.p+"static/media/kevin-avatar.aa678195.png",te=n.p+"static/media/user1.27b501e6.png",ne=(n(505),function(){return Object(g.jsxs)("div",{className:"agent-header__container",children:[Object(g.jsxs)("div",{className:"agent-header__left",children:[Object(g.jsx)(M,{}),Object(g.jsx)("p",{className:"agent-header__left__text",children:"37 Agents Online"}),Object(g.jsx)(S,{}),Object(g.jsx)("p",{className:"agent-header__left__text",children:"Serving 85 Customers"})]}),Object(g.jsxs)("div",{className:"agent-header__right",children:[Object(g.jsx)("div",{className:"active-slider__background",children:Object(g.jsx)("div",{className:"active-slider__ball"})}),Object(g.jsx)("p",{className:"agent-header__left__text",children:"Active"}),Object(g.jsx)(w,{}),Object(g.jsx)("img",{src:te,alt:"user-1",height:"35",width:"35"}),Object(g.jsx)(V,{})]})]})}),ae=(n(506),function(){return Object(g.jsxs)("div",{className:"agent-loading__container",children:[Object(g.jsx)("div",{className:"agent-loading__list"}),Object(g.jsx)("div",{className:"agent-loading__channel",children:"Loading test environment..."})]})}),ce=function(e,t){Object(a.useEffect)((function(){var n,a=(n=t,function(e){window.parent.postMessage(e,n)}),c=function(e){switch(e.type){case"message.new":a("customer-send-message")}};return e&&e.on(c),function(){return null===e||void 0===e?void 0:e.off(c)}}),[e,t])},se=(n(507),["I have a pricing question","I have a question about Enterprise","I would like to learn more about the company","Other"]),ie=function(e){var t=e.channel;return Object(g.jsxs)("div",{className:"empty-state__container",children:[Object(g.jsx)("p",{className:"empty-state__heading",children:"How may we assist you?"}),Object(g.jsx)("div",{className:"empty-state__responses",children:se.map((function(e,n){return Object(g.jsx)("div",{className:"empty-state__response__wrapper",onClick:function(){return function(e,n){t.sendMessage({text:e,index:n})}(e,n)},children:Object(g.jsx)("p",{className:"empty-state__response__text",children:e})},n)}))})]})},re=(n(508),n.p+"static/media/user3.9b46a243.png"),le=n.p+"static/media/user2.b6146e99.png",oe=function(){return Object(g.jsxs)("div",{className:"channel-header__container",children:[Object(g.jsxs)("div",{className:"channel-header__heading",children:[Object(g.jsxs)("div",{style:{width:"115px"},children:[Object(g.jsx)("img",{className:"channel-header__image-3",src:re,alt:"user-3",height:"64",width:"64"}),Object(g.jsx)("img",{className:"channel-header__image-2",src:le,alt:"user-2",height:"64",width:"64"}),Object(g.jsx)("img",{className:"channel-header__image-1",src:te,alt:"user-1",height:"64",width:"64"}),Object(g.jsx)("div",{className:"channel-header__active"})]}),Object(g.jsxs)("div",{className:"channel-header__text",children:[Object(g.jsxs)("p",{className:"channel-header__name",children:["Hello",Object(g.jsx)("span",{role:"img","aria-label":"waving-hand",children:"\ud83d\udc4b"})]}),Object(g.jsx)("p",{className:"channel-header__subtitle",children:"We are here to help."})]})]}),Object(g.jsxs)("div",{className:"channel-header__wait__wrapper",children:[Object(g.jsx)(N,{}),Object(g.jsxs)("p",{className:"channel-header__wait__text",children:["Average wait time: ",Object(g.jsx)("b",{children:"2 minutes"})]})]})]})},he=(n(509),function(e){var t=e.open,n=e.setOpen,c=Object(G.b)(),s=c.acceptedFiles,i=c.maxNumberOfFiles,r=c.multipleUploads,l=Object(W.b)();Object(a.useEffect)((function(){t?l.textareaRef.current.focus():l.textareaRef.current.blur()}),[l.textareaRef,t]),Object(a.useEffect)((function(){l.text&&n(!0)}),[l.text,n]);return Object(g.jsxs)("div",{className:"support-message-input__wrapper",children:[Object(g.jsx)(z.d,{accept:s,handleFiles:l.uploadNewFiles,multiple:r,disabled:void 0!==i&&l.numberOfUploads>=i,children:Object(g.jsxs)("div",{className:"support-message-input__input",children:[Object(g.jsx)(X.a,{}),Object(g.jsxs)("div",{className:"support-message-input__input-wrapper",children:[Object(g.jsx)(q.a,{handleSubmit:function(e){return l.text.startsWith("/")?(e.target.value="",l.handleChange(e)):l.handleSubmit(e)},rows:1,placeholder:"Ask us a question"}),Object(g.jsx)(Z,{openEmojiPicker:l.openEmojiPicker}),Object(g.jsx)(z.c,{handleFiles:l.uploadNewFiles,children:Object(g.jsx)(E,{})})]})]})}),Object(g.jsx)(D.a,{})]})}),de=function(e){var t=e.customerChannelId,n=Object(f.b)().client,c=Object(a.useState)(),s=Object(o.a)(c,2),i=s[0],h=s[1],d=Object(a.useState)(!0),j=Object(o.a)(d,2),O=j[0],_=j[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.channel("commerce",t,{name:"Kevin Rosen",image:ee,issue:"Company Inquiry",subtitle:"#853 Company Inquiry"});case 2:return(a=e.sent).state.messages.length&&a.state.clearMessages(),e.next=6,a.watch();case 6:h(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(g.jsxs)("div",{className:"customer-wrapper ".concat(O?"wrapper--open":""),children:[i&&O&&Object(g.jsx)(u.a,{channel:i,EmptyStateIndicator:function(e){return Object(g.jsx)(ie,Object(C.a)(Object(C.a)({},e),{},{channel:i}))},Input:function(e){return Object(g.jsx)(he,Object(C.a)(Object(C.a)({},e),{},{open:O,setOpen:_}))},Message:p.a,children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(oe,{}),O&&Object(g.jsx)("div",{style:{background:"#005fff"},children:Object(g.jsx)(m.a,{})}),Object(g.jsx)(x.a,{focus:!0})]})}),Object(g.jsx)("div",{className:"toggle-button ".concat(O&&"close-button"),onClick:function(){return _(!O)},children:O?Object(g.jsx)(I,{}):Object(g.jsx)(H,{})})]})},je=new URLSearchParams(window.location.search),ue=je.get("apikey")||"dz5f4d5kzrue",pe="agent-demo-".concat(Object(j.a)()),be="customer-demo-".concat(Object(j.a)()),me=je.get("target_origin")||Object({NODE_ENV:"production",PUBLIC_URL:"/website-react-examples/customer-support",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_STREAM_KEY:"dz5f4d5kzrue",REACT_APP_AGENT_ID:"daniel-smith",REACT_APP_AGENT_TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGFuaWVsLXNtaXRoIn0.9VI42oDknO8gm6C_aU_D1Y3-wAYPcKgvL_oGpxdSZ5k",REACT_APP_CUSTOMER_ID:"kevin-rosen",REACT_APP_CUSTOMER_TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoia2V2aW4tcm9zZW4ifQ.yUHfY0_YZOtPp4Eonf7hAKocjqEJ2be9u2leO6h-Lwc",REACT_APP_PREVIOUS_ID:"jen-alexander",REACT_APP_PREVIOUS_TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiamVuLWFsZXhhbmRlciJ9.KgxdgeoBWg7o3qCRsJhAQkD1BpHl_r9AaNzUeglLmxY"}).REACT_APP_TARGET_ORIGIN,xe=je.get("user1")||"jen-alexander",Ce=je.get("user1_token")||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiamVuLWFsZXhhbmRlciJ9.KgxdgeoBWg7o3qCRsJhAQkD1BpHl_r9AaNzUeglLmxY",Oe=je.get("user2")||"daniel-smith",ge=je.get("user2_token")||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGFuaWVsLXNtaXRoIn0.9VI42oDknO8gm6C_aU_D1Y3-wAYPcKgvL_oGpxdSZ5k",_e=je.get("user3")||"kevin-rosen",fe=je.get("user3_token")||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoia2V2aW4tcm9zZW4ifQ.yUHfY0_YZOtPp4Eonf7hAKocjqEJ2be9u2leO6h-Lwc",ve=d.a.getInstance(ue);ve.connectUser({id:_e,name:"Kevin Rosen",image:ee,phone:"+1 (303) 555-1212",email:"kevin@example.com"},fe);var we=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(),i=Object(o.a)(s,2),j=i[0],u=i[1],p=Object(a.useState)(),b=Object(o.a)(p,2),m=b[0],x=b[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.a(ue),e.next=3,t.connectUser({id:xe,name:"Jen Alexander",image:$,phone:"+1 (720) 555-1525",email:"jen@example.com",role:"moderator"},Ce);case 3:return u(t),e.next=6,t.channel("commerce",pe,{image:$,name:"Jen Alexander",issue:"Enterprise Inquiry",subtitle:"#572 Enterprise Inquiry"});case 6:return(n=e.sent).state.messages.length&&n.state.clearMessages(),e.next=10,n.watch();case 10:x(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(r.a.mark((function e(){var t,n,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.sendMessage({text:"I have a question about Enterprise"});case 2:return e.next=4,m.sendMessage({text:"My company is looking to upgrade our account to Enterprise. Can you provide me with some additional pricing information?"});case 4:return e.next=6,m.stopWatching();case 6:return e.next=8,j.disconnect();case 8:return t=new d.a(ue),e.next=11,t.connectUser({id:Oe,name:"Daniel Smith",image:te},ge);case 11:return e.next=13,t.queryChannels({id:pe});case 13:return n=e.sent,a=Object(o.a)(n,1),s=a[0],e.next=18,s.watch();case 18:c(t);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();m&&!m.state.messages.length&&e()}),[m]),ce(ve,me),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"agent-wrapper",children:[Object(g.jsx)(ne,{}),n?Object(g.jsx)(h.a,{client:n,children:Object(g.jsx)(Q,{agentChannelId:pe,customerChannelId:be})}):Object(g.jsx)(ae,{})]}),ve&&Object(g.jsx)(h.a,{client:ve,theme:"commerce ".concat("light"),children:Object(g.jsx)(de,{customerChannelId:be})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(g.jsx)(we,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[520,1,2]]]);
//# sourceMappingURL=main.ff080097.chunk.js.map