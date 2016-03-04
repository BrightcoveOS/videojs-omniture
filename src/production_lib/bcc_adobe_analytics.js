/*! BCCAdobeAnalytics - v0.1.1 - 2016-03-04
* Copyright (c) 2016 Brightcove Consulting; Licensed  */
function Visitor(m,s){if(!m)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.5.1";var l=window,j=l.Visitor;l.s_c_in||(l.s_c_il=[],l.s_c_in=0);a._c="Visitor";a._il=l.s_c_il;a._in=l.s_c_in;a._il[a._in]=a;l.s_c_in++;var n=l.document,h=j.Na;h||(h=null);var x=j.Oa;x||(x=void 0);var i=j.la;i||(i=!0);var k=j.Ma;k||(k=!1);a.T=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.q=function(a){var c="0123456789",b="",e="",f,g=8,i=10,
h=10;if(1==a){c+="ABCDEF";for(a=0;16>a;a++)f=Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*i),b+=c.substring(f,f+1),0==a&&9==f?i=3:(1==a||2==a)&&10!=i&&2>f?i=10:2<a&&(i=10),f=Math.floor(Math.random()*h),e+=c.substring(f,f+1),0==a&&9==f?h=3:(1==a||2==a)&&10!=h&&2>f?h=10:2<a&&(h=10);return b+e};a.oa=function(){var a;!a&&l.location&&(a=l.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a=
"";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+n.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(n.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.g=h;a.P=function(a,c){try{"function"==typeof a?a.apply(l,c):a[1].apply(a[0],c)}catch(b){}};a.sa=function(d,c){c&&(a.g==h&&(a.g={}),a.g[d]==x&&(a.g[d]=[]),a.g[d].push(c))};a.o=function(d,c){if(a.g!=h){var b=a.g[d];if(b)for(;0<b.length;)a.P(b.shift(),
c)}};a.j=h;a.qa=function(d,c,b){var e=0,f=0,g;if(c&&n){for(g=0;!e&&2>g;){try{e=(e=n.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(i){e=0}g++}if(!e)try{n.body&&(e=n.body)}catch(j){e=0}if(e)for(g=0;!f&&2>g;){try{f=n.createElement(0<g?"SCRIPT":"script")}catch(k){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.setAttribute("async","async"),f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),b&&(a.j==h&&(a.j={}),a.j[d]=setTimeout(b,a.loadTimeout)))};a.ma=function(d){a.j!=
h&&a.j[d]&&(clearTimeout(a.j[d]),a.j[d]=0)};a.U=k;a.V=k;a.isAllowed=function(){if(!a.U&&(a.U=i,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.V=i;return a.V};a.a=h;a.e=h;var z=j.ab;z||(z="MC");var q=j.fb;q||(q="MCMID");var A=j.bb;A||(A="MCCIDH");var B=j.eb;B||(B="MCSYNCS");var D=j.cb;D||(D="MCIDTS");var y=j.Za;y||(y="A");var o=j.Wa;o||(o="MCAID");var w=j.$a;w||(w="AAM");var v=j.Ya;v||(v="MCAAMLH");var p=j.Xa;p||(p="MCAAMB");var r=j.gb;r||(r="NONE");a.B=0;a.S=function(){if(!a.B){var d=
a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.B=a.T(d)}return a.B};a.W=k;a.f=function(){if(!a.W){a.W=i;var d=a.S(),c=k,b=a.cookieRead(a.cookieName),e,f,g,j=new Date;a.a==h&&(a.a={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=i),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)e=b[d].split("-"),f=e[0],g=b[d+1],e=1<e.length?parseInt(e[1],10):0,c&&(f==A&&(g=""),
0<e&&(e=j.getTime()/1E3-60)),f&&g&&(a.c(f,g,1),0<e&&(a.a["expire"+f]=e,j.getTime()>=1E3*e&&(a.e||(a.e={}),a.e[f]=i)))}if(!a.b(o)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(/^[0-9a-fA-F\-]+$/)&&a.c(o,g))}};a.ua=function(){var d=a.S(),c,b;for(c in a.a)!Object.prototype[c]&&a.a[c]&&"expire"!=c.substring(0,6)&&(b=a.a[c],d+=(d?"|":"")+c+(a.a["expire"+c]?"-"+a.a["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,
d,1)};a.b=function(d,c){return a.a!=h&&(c||!a.e||!a.e[d])?a.a[d]:h};a.c=function(d,c,b){a.a==h&&(a.a={});a.a[d]=c;b||a.ua()};a.pa=function(d,c){var b=a.b(d,c);return b?b.split("*"):h};a.ta=function(d,c,b){a.c(d,c?c.join("*"):"",b)};a.Ta=function(d,c){var b=a.pa(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return h};a.Va=function(d,c,b){var e=h,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.ta(d,e,b)};a.l=function(d,c){var b=new Date;b.setTime(b.getTime()+
1E3*c);a.a==h&&(a.a={});a.a["expire"+d]=Math.floor(b.getTime()/1E3);0>c?(a.e||(a.e={}),a.e[d]=i):a.e&&(a.e[d]=k)};a.R=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=r)),!a||a!=r&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.i=function(d,c){a.ma(d);a.h!=h&&(a.h[d]=k);if(d==z){var b=a.b(q);if(!b){b="object"==typeof c&&c.mid?c.mid:a.R(c);if(!b){if(a.u){a.getAnalyticsVisitorID(h,k,i);return}b=a.q()}a.c(q,
b)}if(!b||b==r)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.i(w,c),a.u&&c.mid&&a.i(y,{id:c.id}));a.o(q,[b])}if(d==w&&"object"==typeof c){b=604800;c.id_sync_ttl!=x&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.b(v);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.l(v,b),a.c(v,e)));e||(e="");a.o(v,[e]);e=a.b(p);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.l(p,b),a.c(p,e);e||(e="");a.o(p,[e]);!c.error_msg&&a.s&&a.c(A,a.s);a.idSyncDisableSyncs?t.ca=i:(t.ca=k,t.Ka({H:c.ibs,
d:c.subdomain}))}if(d==y){b=a.b(o);b||((b=a.R(c))?a.l(p,-1):b=r,a.c(o,b));if(!b||b==r)b="";a.o(o,[b])}};a.h=h;a.r=function(d,c,b,e){var f="",g;if(a.isAllowed()&&(a.f(),f=a.b(d),!f&&(d==q?g=z:d==v||d==p?g=w:d==o&&(g=y),g))){if(c&&(a.h==h||!a.h[g]))a.h==h&&(a.h={}),a.h[g]=i,a.qa(g,c,function(){if(!a.b(d)){var b="";d==q?b=a.q():g==w&&(b={error_msg:"timeout"});a.i(g,b)}});a.sa(d,b);c||a.i(g,{id:r});return""}if((d==q||d==o)&&f==r)f="",e=i;b&&e&&a.P(b,[f]);return f};a._setMarketingCloudFields=function(d){a.f();
a.i(z,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.u=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.u=i);var b=a.A("_setMarketingCloudFields");return a.r(q,b,d,c)}return""};a.ra=function(){a.getAudienceManagerBlob()};j.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.p={};a.Q=k;a.s="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&
(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=x&&(e.authState=b.authState);a.p[c]=e}else a.p[c]={id:b};var d=a.getCustomerIDs(),e=a.b(A),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.s=a.T(f);a.s!=e&&(a.Q=i,a.ra())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.p)Object.prototype[c]||(b=a.p[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=x?b.authState:j.AuthState.UNKNOWN);
return d};a._setAnalyticsFields=function(d){a.f();a.i(y,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,i)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));f&&(g="http"+(a.loadSSL?"s":"")+"://"+f+"/id?callback=s_c_il%5B"+
a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+e:""));return a.r(b?q:o,g,d,c)}}return""};a._setAudienceManagerFields=function(d){a.f();a.i(w,d)};a.A=function(d){var c=a.audienceManagerServer,b="",e=a.b(q),f=a.b(p,i),g=a.b(o),g=g&&g!=r?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,j;if(b)for(h in b)Object.prototype[h]||
(j=b[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(j.id?j.id:"")+(j.authState?"%01"+j.authState:""));d||(d="_setAudienceManagerFields");b="http"+(a.loadSSL?"s":"")+"://"+c+"/id?d_rtbd=json&d_ver=2"+(!e&&a.u?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+e:"")+(f?"&d_blob="+encodeURIComponent(f):"")+g+"&d_cb=s_c_il%5B"+a._in+"%5D."+d}return b};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&
a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,i)})){var b=a.b(o);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,i)}));if(b)return b=a.A(),a.r(v,b,d,c)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,i)})){var b=a.b(o);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,i)}));if(b)return b=a.A(),a.Q&&a.l(p,-1),a.r(p,b,d,c)}return""};a.m="";
a.t={};a.C="";a.D={};a.getSupplementalDataID=function(d,c){!a.m&&!c&&(a.m=a.q(1));var b=a.m;a.C&&!a.D[d]?(b=a.C,a.D[d]=i):b&&(a.t[d]&&(a.C=a.m,a.D=a.t,a.m=b=!c?a.q(1):"",a.t={}),b&&(a.t[d]=i));return b};var u={k:!!l.postMessage,ja:1,O:864E5};a.Pa=u;a.Y={postMessage:function(a,c,b){var e=1;c&&(u.k?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},K:function(a,c){var b;try{if(u.k)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==
c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",b)}catch(e){}}};var E={Z:function(){if(n.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},k)};if(n.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,
c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===h)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},Aa:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)}};a.Ua=E;var t={ka:3E4,N:649,ga:k,id:h,I:h,ba:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},d:h,url:h,Ca:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+
"#"+encodeURIComponent(n.location.href);this.d||(this.d="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.d+".demdex.net/dest5.html"+c;this.I=this.ba(d);this.id="destination_publishing_iframe_"+this.d+"_"+a.idSyncContainerID;return d},wa:function(){var d="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(n.location.href);"string"===typeof a.z&&a.z.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.I=this.ba(a.z),
this.url=a.z+d)},ca:h,G:k,M:k,v:h,hb:h,Ia:h,ib:h,L:k,w:[],Ga:[],Ha:[],da:u.k?15:100,J:[],Ea:[],aa:i,ea:k,$:function(){function a(){e=document.createElement("iframe");e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.Ia=i;c();document.body.appendChild(e)}function c(){E.Z(e,"load",function(){e.className="aamIframeLoaded";b.v=i;b.n()})}this.M=i;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.v=
i,this.n()):a();this.Da=e},n:function(d){var c=this;d===Object(d)&&this.J.push(d);if((this.ea||!u.k||this.v)&&this.J.length)this.Ja(this.J.shift()),this.n();!a.idSyncDisableSyncs&&this.v&&this.w.length&&!this.L&&(this.ga||(this.ga=i,setTimeout(function(){c.da=u.k?15:150},this.ka)),this.L=i,this.fa())},Ja:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.H)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),E.Aa(g.url||[],","),c(g.ha||""),"","",g.Ba?
"true":"false"],this.aa?this.F(h.join("|")):g.Ba&&this.xa(g,h.join("|"));this.Ea.push(a)},xa:function(d,c){a.f();var b=a.b(B),e=k,f=k,g=Math.ceil((new Date).getTime()/u.O);if(b){if(b=b.split("*"),f=this.La(b,d.id,g),e=f.ya,f=f.za,!e||!f)this.F(c),b.push(d.id+"-"+(g+Math.ceil(d.ha/60/24))),this.Fa(b),a.c(B,b.join("*"))}else this.F(c),a.c(B,d.id+"-"+(g+Math.ceil(d.ha/60/24)))},La:function(a,c,b){var e=k,f=k,g,h,j;for(h=0;h<a.length;h++)g=a[h],j=parseInt(g.split("-")[1],10),g.match("^"+c+"-")?(e=i,b<
j?f=i:(a.splice(h,1),h--)):b>=j&&(a.splice(h,1),h--);return{ya:e,za:f}},Fa:function(a){if(a.join("*").length>this.N)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.N;)a.shift()},F:function(d){var c=encodeURIComponent;this.w.push((a.Ra?c("---destpub-debug---"):c("---destpub---"))+d)},fa:function(){var d=this,c;this.w.length?(c=this.w.shift(),a.Y.postMessage(c,this.url,this.Da.contentWindow),this.Ga.push(c),setTimeout(function(){d.fa()},
this.da)):this.L=k},K:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.aa="true"===c[1]?i:k,this.ea=i,this.n()),this.Ha.push(a))},Ka:function(d){this.url===h&&(this.d="string"===typeof a.X&&a.X.length?a.X:d.d||"",this.url=this.Ca());d.H instanceof Array&&d.H.length&&(this.G=i);if((this.G||a.na)&&this.d&&"nosubdomainreturned"!==this.d&&!this.M)(j.ia||"complete"===n.readyState||"loaded"===n.readyState)&&
this.$();"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.n(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},va:function(d,c){return a.Sa||!d||c-d>u.ja}};a.Qa=t;0>m.indexOf("@")&&(m+="@AdobeOrg");a.marketingCloudOrgID=m;a.cookieName="AMCV_"+m;a.cookieDomain=a.oa();a.cookieDomain==l.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=l.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=500;a.marketingCloudServer=a.audienceManagerServer=
"dpm.demdex.net";if(s&&"object"==typeof s){for(var C in s)!Object.prototype[C]&&(a[C]=s[C]);a.idSyncContainerID=a.idSyncContainerID||0;a.f();C=a.b(D);var F=Math.ceil((new Date).getTime()/u.O);!a.idSyncDisableSyncs&&t.va(C,F)&&(a.l(p,-1),a.c(D,F));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob()}if(!a.idSyncDisableSyncs){t.wa();E.Z(window,"load",function(){var d=t;j.ia=i;(d.G||a.na)&&d.d&&"nosubdomainreturned"!==d.d&&d.url&&!d.M&&d.$()});try{a.Y.K(function(a){t.K(a.data)},
t.I)}catch(G){}}}Visitor.getInstance=function(m,s){var a,l=window.s_c_il,j;0>m.indexOf("@")&&(m+="@AdobeOrg");if(l)for(j=0;j<l.length;j++)if((a=l[j])&&"Visitor"==a._c&&a.marketingCloudOrgID==m)return a;return new Visitor(m,s)};(function(){function m(){s.ia=a}var s=window.Visitor,a=s.la;a||(a=!0);window.addEventListener?window.addEventListener("load",m):window.attachEvent&&window.attachEvent("onload",m)})();

function AppMeasurement(){var a=this;a.version="1.5.1";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.zb;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.ob=function(a){try{console.log(a)}catch(b){}};a.za=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.fb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.fb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=c+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.G=[];a.ba=function(c,b,d){if(a.ta)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange","visibilitychange"];
g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ca)for(a.ca=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ca=0,a.delayReady())});f=1;e=0}else d||a.l("_d")&&(f=1);f&&(a.G.push({m:c,a:b,t:e}),a.ca||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.l("_d")?b=1:a.na();0<a.G.length;){d=a.G.shift();if(b&&!d.t&&d.t>c){a.G.unshift(d);setTimeout(a.delayReady,
parseInt(a.maxDelay/2));break}a.ta=1;a[d.m].apply(a,d.a);a.ta=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ba("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.K,(m=a.lightTrackVars)&&(m=","+m+","+a.ga.join(",")+",");else{d=a.c;if(a.pe||a.linkType)m=a.linkTrackVars,
f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].yb,f=a[e].xb));m&&(m=","+m+","+a.A.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.B=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+".":"")+m+","))){k=!1;if(n)for(p=
0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.B(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m="v0";break;default:a.za(w)&&("prop"==
k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.hb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.K,(n=a.lightTrackVars)&&(n=","+n+","+a.ga.join(",")+",");else{b=a.c;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].yb,r=a[e].xb));n&&(n=","+n+","+a.A.join(",")+",");r&&(r=","+r+",",
n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.B("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.B("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&
"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,
255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
"cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&(g+=(""!=g?",":"")+s);if(r)for(m=
g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.B("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
"mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.B("mts",a[e],n,e));g="";break;default:a.za(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.u=function(a){var b=a.tagName;if("undefined"!=""+a.Cb||"undefined"!=""+a.sb&&"HTML"!=(""+a.sb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.va=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.H=function(c){var b=a.u(c),d,f,e="",g=0;return b&&
(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):c.src&&"IMAGE"==b&&(e=c.src):e=a.va(c),e)?{id:e.substring(0,100),type:g}:0};a.Ab=function(c){for(var b=a.u(c),d=a.H(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.u(c),d=a.H(c);
d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.rb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.ha=1;d||(a.ha=0,d=a.clickObject);if(d){c=a.u(d);for(b=a.H(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.u(d),b=a.H(d);b&&"BODY"!=c||(d=0);if(d){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.ha=1;!e&&d&&(e=a.va(d));e&&!a.linkLeaveQueryString&&
(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.ya(p)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?
(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,
100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.ib=function(){var c=a.ha,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),p=a.unescape(p[1]),b[p]=f;f=a.account.split(",");if(c||a.e){c&&
!a.e&&(e=1);for(p in b)if(!Object.prototype[p])for(m=0;m<f.length;m++)for(e&&(k=b[p].join(","),k==a.account&&(a.e+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),g=0;g<b[p].length;g++)k=b[p][g],k==f[m]&&(e&&(a.e+="&u="+a.escape(k)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(g,1),d=1);c||(d=1);if(d){e="";m=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};
a.jb=function(){if(!a.wb){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",c.reduce&&(k="1.8",k.trim&&(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?
a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Bb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.wb=1}};a.L={};a.loadModule=function(c,b){var d=a.L[c];if(!d){d=k["AppMeasurement_Module_"+
c]?new k["AppMeasurement_Module_"+c](a):{};a.L[c]=a[c]=d;d.Na=function(){return d.Ra};d.Sa=function(b){if(d.Ra=b)a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Na,set:d.Sa}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ba(c+"_onLoad",[a,d],1)||b(a,d))};a.l=function(c){var b,d;for(b in a.L)if(!Object.prototype[b]&&(d=a.L[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.mb=function(){var c=
Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.M=function(c,b){var d,f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.oa:a.c,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.Ga=function(c,b){var d,
f,e,g;for(d=0;2>d;d++)for(f=0<d?a.oa:a.c,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.cb=function(a){var b,d,f,e,g,m=0,k,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(k=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?m=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(m=",p,ei,"),
m&&k)))){if((a=k.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=m.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?k=n+"&"+q:q=""}d=253-(k.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+k}return a};a.Ma=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;
b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.Y=!1;a.D=!1;a.Ta=function(){a.D=!0;a.i()};a.W=!1;a.Q=!1;a.Qa=function(c){a.marketingCloudVisitorID=c;a.Q=!0;a.i()};a.T=!1;a.N=!1;a.Ia=function(c){a.analyticsVisitorID=c;a.N=!0;a.i()};a.V=!1;a.P=!1;a.Ka=function(c){a.audienceManagerLocationHint=c;a.P=!0;a.i()};a.U=!1;a.O=!1;a.Ja=function(c){a.audienceManagerBlob=c;a.O=!0;a.i()};a.La=function(c){a.maxDelay||(a.maxDelay=250);return a.l("_d")?(c&&setTimeout(function(){c()},a.maxDelay),
!1):!0};a.X=!1;a.C=!1;a.na=function(){a.C=!0;a.i()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.Y||a.D||(a.Ma(a.Ta)?a.D=!0:a.Y=!0);if(a.Y&&!a.D)return!1;b&&b.isAllowed()&&(a.W||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.W=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.Qa]),a.marketingCloudVisitorID&&(a.Q=!0)),a.T||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.T=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Ia]),a.analyticsVisitorID&&(a.N=!0)),a.V||
a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.V=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Ka]),a.audienceManagerLocationHint&&(a.P=!0)),a.U||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.U=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ja]),a.audienceManagerBlob&&(a.O=!0)),a.W&&!a.Q&&!a.marketingCloudVisitorID||a.T&&!a.N&&!a.analyticsVisitorID||a.V&&!a.P&&!a.audienceManagerLocationHint||a.U&&!a.O&&!a.audienceManagerBlob)&&(c=!1);a.X||
a.C||(a.La(a.na)?a.C=!0:a.X=!0);a.X&&!a.C&&(c=!1);return c};a.k=q;a.o=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.Xa=c;f.Wa=b;f.Ua=d;a.k==q&&(a.k=[]);a.k.push(f);0==a.o&&(a.o=setInterval(a.i,100))};a.i=function(){var c;if(a.isReadyToTrack()&&(a.o&&(clearInterval(a.o),a.o=0),a.k!=q))for(;0<a.k.length;)c=a.k.shift(),c.Wa.apply(c.Xa,c.Ua)};a.Oa=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Ga(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,
a.track,b);return!0}return!1};a.gb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+
"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.eb&&(a.authState=a.visitor.eb()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.l("_s");a.Oa(c)||(b&&a.M(b),c&&(d={},a.Ga(d,0),a.M(c)),a.mb()&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.gb()),a.rb(),a.usePlugins&&a.doPlugins&&
a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ha||(a.referrer=r.document.referrer),a.Ha=1,a.referrer=a.cb(a.referrer),a.l("_g")),a.ib()&&!a.abort&&(a.jb(),g+=a.hb(),a.qb(e,g),a.l("_t"),a.referrer=""))),c&&a.M(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=
a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.j=c,a.q=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.c.length;c++)if(b=a.c[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==
b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.qb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&
a.AudienceManagement.isReady();d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.vb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].AudienceManagement.passData&":"")+b+"&AQE=1";a.ab(d);a.da()};a.ab=function(c){a.g||a.kb();a.g.push(c);a.fa=a.r();a.Fa()};a.kb=function(){a.g=a.nb();a.g||(a.g=[])};a.nb=function(){var c,b;if(a.ka()){try{(b=k.localStorage.getItem(a.ia()))&&(c=k.JSON.parse(b))}catch(d){}return c}};
a.ka=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.wa=function(){var c=0;a.g&&(c=a.g.length);a.v&&c++;return c};a.da=function(){if(!a.v)if(a.xa=q,a.ja)a.fa>a.J&&a.Da(a.g),a.ma(500);else{var c=a.Va();if(0<c)a.ma(c);else if(c=a.ua())a.v=1,a.pb(c),a.tb(c)}};a.ma=function(c){a.xa||(c||(c=0),a.xa=setTimeout(a.da,c))};a.Va=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.r()-a.Ca;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-
c};a.ua=function(){if(0<a.g.length)return a.g.shift()};a.pb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.ob(b)}};a.Pa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.S=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.S=!0,a.R=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.R=function(a){return k.$.parseJSON(a)},a.S=!0):a.R=function(){return null};a.tb=function(c){var b,
d,f;a.Pa()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(a.S?b.pa=!0:b=0));!b&&a.lb&&(c=c.substring(0,2047));!b&&a.d.createElement&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",
b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="");b.ra=function(){try{a.la&&(clearTimeout(a.la),a.la=0),b.timeout&&(clearTimeout(b.timeout),b.timeout=0)}catch(c){}};b.onload=b.ub=function(){b.ra();a.$a();a.Z();a.v=0;a.da();if(b.pa){b.pa=!1;try{var c=a.R(b.responseText);AudienceManagement.passData(c)}catch(d){}}};b.onabort=b.onerror=b.bb=function(){b.ra();(a.trackOffline||a.ja)&&a.v&&a.g.unshift(a.Za);a.v=0;a.fa>a.J&&a.Da(a.g);a.Z();a.ma(500)};b.onreadystatechange=function(){4==b.readyState&&
(200==b.status?b.ub():b.bb())};a.Ca=a.r();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Aa)try{f.removeChild(a.Aa)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Aa=a.Ya}b.abort&&(a.la=setTimeout(b.abort,5E3));a.Za=c;a.Ya=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.F||a.q)a.forcedLinkTrackingTimeout||
(a.forcedLinkTrackingTimeout=250),a.aa=setTimeout(a.Z,a.forcedLinkTrackingTimeout)};a.$a=function(){if(a.ka()&&!(a.Ba>a.J))try{k.localStorage.removeItem(a.ia()),a.Ba=a.r()}catch(c){}};a.Da=function(c){if(a.ka()){a.Fa();try{k.localStorage.setItem(a.ia(),k.JSON.stringify(c)),a.J=a.r()}catch(b){}}};a.Fa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.g.length>a.offlineLimit;)a.ua()}};a.forceOffline=function(){a.ja=!0};a.forceOnline=function(){a.ja=!1};a.ia=
function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.r=function(){return(new Date).getTime()};a.ya=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.vb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.M(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],
f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&
b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.A="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData pe pev1 pev2 pev3 pageURLRest".split(" ");
a.c=a.A.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ga="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.K=a.ga.slice(0);a.oa="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.c.push("prop"+n),a.K.push("prop"+n)),a.c.push("eVar"+n),a.K.push("eVar"+n),6>n&&a.c.push("hier"+n),4>n&&a.c.push("list"+n);n="latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage".split(" ");a.c=a.c.concat(n);a.A=a.A.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename="AppMeasurement.offline";
a.Ca=0;a.fa=0;a.J=0;a.Ba=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{a.lb="Microsoft Internet Explorer"==navigator.appName}catch(y){}a.Z=function(){a.aa&&(k.clearTimeout(a.aa),a.aa=q);a.j&&a.F&&a.j.dispatchEvent(a.F);a.q&&("function"==typeof a.q?a.q():a.j&&a.j.href&&(a.d.location=a.j.href));a.j=a.F=a.q=0};a.Ea=function(){a.b=a.d.body;a.b?(a.p=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.qa)if(a.useForcedLinkTracking)a.b.removeEventListener("click",
a.p,!1);else{a.b.removeEventListener("click",a.p,!0);a.qa=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.I&&a.I==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=0;else{var m=a.I=a.clickObject;a.ea&&(clearTimeout(a.ea),a.ea=0);a.ea=setTimeout(function(){a.I==m&&(a.I=0)},1E4);f=a.wa();a.track();if(f<a.wa()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&
e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.ya(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=
1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.j=c.target,a.F=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.p):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.qa=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.p,!0)),a.b.addEventListener("click",a.p,!1))):setTimeout(a.Ea,30)};a.Ea()}
function s_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();

/*
 * video heartbeats - 1.5.2 - 2015-09-09
 * Copyright (c) 2015 Adobe Systems, Inc. All Rights Reserved.
 */

// Heartbeat core
!function(a){if("undefined"==typeof b)var b={};if("undefined"==typeof c)var c={};if("undefined"==typeof d)var d={};if(d.radio||(d.radio={}),d.plugin||(d.plugin={}),"undefined"==typeof e)var e={};e.clock||(e.clock={}),function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(b),function(a){"use strict";var b={};b.startsWith=function(a,b){return 0==a.indexOf(b)},a.StringUtils=b}(b),function(a){"use strict";var b={};b.clone=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},b.merge=function(a,c){var d=b.clone(a);for(var e in c)c.hasOwnProperty(e)&&(d[e]=c[e]);return d},a.ObjectUtils=b}(b),function(a){"use strict";function b(a,b,c){this.fn=a,this.ctx=b,this.params=c}b.prototype.run=function(){this.params?this.fn.apply(this.ctx,this.params):this.fn.apply(this.ctx)},a.radio.Command=b}(d),function(a){"use strict";function b(a,b){this._queue=[],this._lastTs=0,this._isSuspended="undefined"!=typeof a?a:!1,this._delay="undefined"!=typeof b?b:0}b.prototype.addCommand=function(a){this._queue.push(a),this._drain()},b.prototype.cancelAllCommands=function(){this._queue=[]},b.prototype.isEmpty=function(){return 0===this._queue.length},b.prototype.suspend=function(){this._isSuspended=!0},b.prototype.resume=function(){this._isSuspended=!1,this._drain()},b.prototype.flush=function(){this._isSuspended=!1;for(var a=0;a<this._queue.length;a++){var b=this._queue[a];b.run()}this._queue=[]},b.prototype._drain=function(){if(!this._isSuspended&&!this._drainInProgress){this._drainInProgress=!0;var a=this;!function b(){var c=a._queue.shift();c?a._runCommand(c,function(){a._isSuspended||b()}):a._drainInProgress=!1}()}},b.prototype._runCommand=function(a,b){function c(){a.run(),null!=b&&b.call(d)}var d=this;if(0==this._lastTs)c();else{var e=(new Date).getTime(),f=e-this._lastTs;this._lastTs=e,f<this._delay?setTimeout(c,this._delay-f):c()}},a.radio.CommandQueue=b}(d),function(a){"use strict";function b(a,b){if(this._name=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._listeners={},this._requests={},this._commands={},this._isShutDown=!1}function c(a,c){if(a===c)return!0;for(var d=(a||"").split(b.SEPARATOR),e=(c||"").split(b.SEPARATOR),f=!0,g=0;g<d.length;g++)f=f&&(d[g]===b.WILDCARD||d[g]===e[g]);return f}b.WILDCARD="*",b.SEPARATOR=":",b.prototype.toString=function(){return"<channel: "+this._name+">"},b.prototype.shutdown=function(){this._isShutDown||(this._logger.debug(d,"#shutdown > Shutting down"),this.off(),this._requests={},this._commands={},this._isShutDown=!0)},b.prototype.on=function(a,b,c){this._isShutDown||(this._listeners[a]||(this._listeners[a]=[]),this._listeners[a].push({fn:b,ctx:c}))},b.prototype.off=function(a,b,c){if(!this._isShutDown){if(b="function"==typeof b?b:null,!a&&null==b&&!c)return void(this._listeners={});if(a)this._removeListener(a,b,c);else for(a in this._listeners)this._listeners.hasOwnProperty(a)&&this._removeListener(a,b,c)}},b.prototype.trigger=function(a){if(!this._isShutDown)for(var b in this._listeners)if(this._listeners.hasOwnProperty(b)&&c(b,a.name))for(var d=this._listeners[b].slice(0),e=0;e<d.length;e++){var f=d[e];f.fn.call(f.ctx,a)}},b.prototype.comply=function(a,b,c){this._isShutDown||(this._commands[a]={cmd:b,ctx:c})},b.prototype.command=function(a,b){if(!this._isShutDown){var c=this._commands[a];return c?void c.cmd.call(c.ctx,b):void this._logger.warn(d,"#command > No command handler for: "+a)}},b.prototype.reply=function(a,b,c){this._isShutDown||(this._requests[a]={fn:b,ctx:c})},b.prototype.request=function(a){if(!this._isShutDown){var b=this._requests[a];return b?b.fn.call(b.ctx):(this._logger.warn(d,"#request > No request handler for: "+a),null)}},b.prototype._removeListener=function(a,b,c){b="function"==typeof b?b:null;var d=this._listeners[a];if(d){if(!d.length||null==b&&!c)return void delete this._listeners[a];for(var e=0;e<d.length;e++){var f=d[e];null!==b&&b!==f.fn||c&&c!==f.ctx||this._listeners[a].splice(e,1)}}};var d="radio::Channel";a.radio.Channel=b}(d),function(a){"use strict";function b(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._channels={}}var c=a.radio.Channel;b.prototype.channel=function(a){return this._channels[a]||(this._channels[a]=new c(a,this._logger)),this._channels[a]},b.prototype.shutdown=function(){for(var a in this._channels)this._channels.hasOwnProperty(a)&&this._channels[a].shutdown()},a.radio.Radio=b}(d),function(a){"use strict";function b(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a}a.extend=b}(d),function(a){"use strict";function b(){}b.prototype.write=function(a){throw new Error("Implementation error: Method must be overridden.")},a.ILogWriter=b}(d),function(a){"use strict";function b(){}b.prototype.write=function(a){window.console&&window.console.log&&window.console.log(a)},a.LogWriter=b}(d,c),function(a){"use strict";function b(){}b.prototype.setLogWriter=function(a){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getLogWriter=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getEnabled=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.enable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.disable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.debug=function(a,b){throw new Error("Implementation error: Method must be overridden.")},b.prototype.info=function(a,b){throw new Error("Implementation error: Method must be overridden.")},b.prototype.warn=function(a,b){throw new Error("Implementation error: Method must be overridden.")},b.prototype.error=function(a,b){throw new Error("Implementation error: Method must be overridden.")},a.ILogger=b}(d),function(a){"use strict";function b(){this._logWriter=new d}function c(a){return 10>a?"00"+a:100>a?"0"+a:""+a}var d=a.LogWriter;b.prototype.setLogWriter=function(a){if(!a)throw new Error("Reference to the ILogWriter object cannot be NULL");this._logWriter=a,this._enabled=!1},b.prototype.getLogWriter=function(){return this._logWriter},b.prototype.getEnabled=function(){return this._enabled},b.prototype.enable=function(){this._enabled=!0},b.prototype.disable=function(){this._enabled=!1},b.prototype.debug=function(a,b){this._log(a,f,b)},b.prototype.info=function(a,b){this._log(a,e,b)},b.prototype.warn=function(a,b){this._log(a,g,b)},b.prototype.error=function(a,b){this._log(a,h,b)},b.prototype._log=function(a,b,d){if(b==h||this._enabled){var e="",f=new Date;e+="["+f.toTimeString()+"."+c(f.getMilliseconds())+"] ["+b+"] ",e+="["+a+"] "+d,this._logWriter.write(e)}};var e="INFO",f="DEBUG",g="WARN",h="ERROR";a.Logger=b}(d),function(a){"use strict";function b(a,b){this._pluginName=a,this._eventName=b}var c=a.radio.Channel;b.prototype.getPluginName=function(){return this._pluginName},b.prototype.getEventName=function(){return this._eventName},b.prototype.getName=function(){return this._pluginName+c.SEPARATOR+this._eventName},a.Trigger=b}(d),function(a){"use strict";function b(a,b){this.name=a,this.data=b}b.SUCCESS="success",b.ERROR="error",b.createFromTrigger=function(a){return new b(a.getName())},a.Event=b}(d),function(a){"use strict";function b(){this._events={}}b.prototype.addEventListener=function(a,b,c){a&&b&&(c=c||window,this._events[a]=this._events[a]||[],this._events[a].push({cb:b,ctx:c}))},b.prototype.removeEventListener=function(a,b,c){if(a&&b){c=c||window;var d,e,f=!1;for(e in this._events)if(a===e){f=!0;break}if(f){for(d=this._events[e].length-1;d>=0;d--){var g=this._events[e][d];b===g.cb&&c===g.ctx&&this._events[e].splice(d,1)}this._events[e].length||delete this._events[e]}}},b.prototype.dispatchEvent=function(a){if(a.name){var b,c;for(b in this._events)if(this._events.hasOwnProperty(b)&&a.name===b){var d=this._events[b],e=d.slice(0),f=e.length;for(c=0;f>c;c++)e[c].cb.call(e[c].ctx,a);break}}},b.prototype.removeAllListeners=function(a){if(a){var b,c;for(c in this._events)if(this._events.hasOwnProperty(c)){for(b=this._events[c].length-1;b>=0;b--){var d=this._events[c][b];d.ctx===a&&this._events[c].splice(b,1)}this._events[c].length||delete this._events[c]}}else this._events={}},a.EventDispatcher=b}(d),function(a){"use strict";function b(){}function c(a,b){this.url=a||null,this.method=b,this._xmlhttp=null}function d(){d.__super__.constructor.call(this),this._connection=null}var e=a.Event,f=a.EventDispatcher;b.GET="GET",d.RESPONSE="response",d.INSTANCE="instance",a.extend(d,f),d.prototype.close=function(){this.removeAllListeners(null)},d.prototype.load=function(a){a&&a.method&&a.url&&(a._xmlhttp=this._createCORSRequest(a),a._xmlhttp?a._xmlhttp.send():this._loadImage(a))},d.prototype._createCORSRequest=function(a){var b=null;if("undefined"!=typeof window.XMLHttpRequest){var c=new window.XMLHttpRequest;"withCredentials"in c&&(b=c,b.open(a.method,a.url,!0))}if(null==b&&"undefined"!=typeof window.XDomainRequest&&(b=new window.XDomainRequest,b.open(a.method,a.url)),b){var f={};f[d.INSTANCE]=this;var g=this;b.onload=function(){return b.status&&parseInt(b.status,10)>=400?this.onerror():(f[d.RESPONSE]=b.responseText,void g.dispatchEvent(new e(e.SUCCESS,f)))},b.onerror=function(){g.dispatchEvent(new e(e.ERROR,f))}}return b},d.prototype._loadImage=function(a){this._connection||(this._connection=new Image,this._connection.alt=""),this._connection.src=a.url;var b={};b[d.RESPONSE]="",b[d.INSTANCE]=this,this.dispatchEvent(new e(e.SUCCESS,b))},a.URLRequestMethod=b,a.URLRequest=c,a.URLLoader=d}(d),function(a){"use strict";var b="js",c="1.5.2.9",d="989da6",e=3,f={};f.getVersion=function(){return b+"-"+c+"-"+d},f.getMajor=function(){return f.getNumberAtPosition(0)},f.getMinor=function(){return f.getNumberAtPosition(1)},f.getMicro=function(){return f.getNumberAtPosition(2)},f.getPatch=function(){return f.getNumberAtPosition(3)},f.getBuild=function(){return d},f.getApiLevel=function(){return e},f.getNumberAtPosition=function(a){return c.split(".")[a]},a.Version=f}(c),function(a){"use strict";function b(a,b){this._message=a,this._details=b}b.prototype.getMessage=function(){return this._message},b.prototype.getDetails=function(){return this._details},a.ErrorInfo=b}(c),function(a){"use strict";function b(){this.debugLogging=!1}a.HeartbeatConfig=b}(c),function(a){"use strict";function b(){}b.prototype.onError=function(a){},a.HeartbeatDelegate=b}(c),function(a){"use strict";function b(){}b.prototype.configure=function(a){throw new Error("Implementation error: Method must be overridden.")},b.prototype.bootstrap=function(a){throw new Error("Implementation error: Method must be overridden.")},b.prototype.setup=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.destroy=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.enable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.disable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getName=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.isInitialized=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.resolveData=function(a){throw new Error("Implementation error: Method must be overridden.")},a.plugin.IPlugin=b}(d),function(a){"use strict";function b(a,b,c,d){this.trigger=a,this.action=c,this.plugin=b,this._paramMappings={},this.mergeParams(d)}var c=a.plugin.ParamMapping;b.prototype.mergeParams=function(a){if(a)for(var b=0;b<a.length;b++){var c=a[b];this._paramMappings[c.getKeyName()]=c}},b.prototype.getParams=function(){var a=[];for(var b in this._paramMappings)this._paramMappings.hasOwnProperty(b)&&a.push(this._paramMappings[b]);return a},b.prototype.addParam=function(a){this._paramMappings[a.getKeyName()]=a},b.prototype.removeParam=function(a,b){var d=new c(a,b);this._paramMappings.hasOwnProperty(d.getKeyName())&&delete this._paramMappings[d.getKeyName()]},a.plugin.Behaviour=b}(d),function(a){"use strict";function b(a,b,d){this._pluginName=a,this._key=b,this._paramName=d||a+c.SEPARATOR+b}var c=a.radio.Channel;b.prototype.getPluginName=function(){return this._pluginName},b.prototype.getKey=function(){return this._key},b.prototype.getKeyName=function(){return this._pluginName+c.SEPARATOR+this._key},b.prototype.getParamName=function(){return this._paramName},a.plugin.ParamMapping=b}(d),function(a){"use strict";function b(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._plugins={},this._behaviours={},this._radio=new d(this._logger),this._dataChannel=this._radio.channel(g),this._ctrlChannel=this._radio.channel(h)}var c=a.Event,d=a.radio.Radio,e=a.radio.Channel,f=a.plugin.Behaviour;b.ERROR="error",b.prototype.addPlugin=function(a){var b=a.getName();this._plugins[b]&&this._logger.warn(i,"#addPlugin > Replacing plugin: "+b),this._plugins[b]=a,a.bootstrap(this)},b.prototype.setupPlugins=function(){for(var a in this._plugins)this._plugins.hasOwnProperty(a)&&this._plugins[a].setup()},b.prototype.pluginExists=function(a){return!!this._plugins[a]},b.prototype.isPluginInitialized=function(a){return this._plugins[a]&&this._plugins[a].isInitialized()},b.prototype.on=function(a,b,c,d){this._dataChannel.on(a+e.SEPARATOR+b,c,d)},b.prototype.off=function(a,b,c,d){var f=a&&b?a+e.SEPARATOR+b:null;this._dataChannel.off(f,c,d)},b.prototype.trigger=function(a){var b=a.name,c=this._behaviours[b];if(c){var d,e,f,g,h,i={},j={};for(d=0;d<c.length;d++)if(f=c[d],g=f.getParams())for(e=0;e<g.length;e++)h=g[e],i[h.getPluginName()]=i[h.getPluginName()]||[],h.key in i[h.getPluginName()]||i[h.getPluginName()].push(h.getKey());for(var k in i)i.hasOwnProperty(k)&&(j[k]=this.request(k,i[k]));for(d=0;d<c.length;d++){f=c[d];var l={_behaviour:f,_eventData:a.data||{}};if(g=f.getParams()){for(e=0;e<g.length;e++)h=g[e],l[h.getParamName()]=j[h.getPluginName()]?j[h.getPluginName()][h.getKey()]:null;this.command(f.plugin.getName(),f.action,l)}}}this._dataChannel.trigger(a)},b.prototype.request=function(a,b){var c=this._plugins[a];return c&&b&&0!=b.length?c.resolveData(b):null},b.prototype.raise=function(a){this._errorInfo=a;var d=new c(b.ERROR,a);this._ctrlChannel.trigger(d)},b.prototype.getErrorInfo=function(){return this._errorInfo},b.prototype.destroy=function(){this._radio.shutdown();for(var a in this._plugins)this._plugins.hasOwnProperty(a)&&this._plugins[a].destroy()},b.prototype.comply=function(a,b,c){this._dataChannel.comply(a.getName()+e.SEPARATOR+b,c,a)},b.prototype.command=function(a,b,c){this._dataChannel.command(a+e.SEPARATOR+b,c)},b.prototype.registerBehaviour=function(a,b,c,d){var e=a.getName(),g=new f(a,b,c,d);this._behaviours[e]=this._behaviours[e]||[],this._behaviours[e].push(g)};var g="data_channel",h="ctrl_channel",i="plugin::PluginManager";a.plugin.PluginManager=b}(d),function(a,b){"use strict";function c(a){this._name=a,this._isInitialized=!1,this._isDestroyed=!1,this._isEnabled=!0,this._dataResolver={},this._logTag="plugin::"+this.getName(),this._logger=new d}var d=a.Logger,e=a.Trigger,f=a.Event,g=b.ErrorInfo;c.INITIALIZED="initialized",c.prototype.configure=function(a){},c.prototype.bootstrap=function(a){this._pluginManager=a,this._isDestroyed&&this._pluginManager.raise(new g("Invalid state.","Plugin already destroyed."))},c.prototype.setup=function(){this._trigger(c.INITIALIZED),this._isInitialized=!0},c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._teardown())},c.prototype.enable=function(){this._isEnabled=!0,this._enabled()},c.prototype.disable=function(){this._isEnabled=!1,this._disabled()},c.prototype.getName=function(){return this._name},c.prototype.getLogger=function(){return this._logger},c.prototype.isInitialized=function(){return this._isInitialized},c.prototype.resolveData=function(a){if(!this._isEnabled||!this._isInitialized)return this._logger.warn(this._logTag,"Unable to retrieve plugin data. Plugin: "+this._name+". Enabled: "+this._isEnabled+". Initialized: "+this._isInitialized+"."),null;if("function"==typeof this._dataResolver)return this._dataResolver.call(this,a);var b=null;if(a)for(var c=0;c<a.length;c++){var d=a[c];this._dataResolver.hasOwnProperty(d)&&(b=b||{},"function"==typeof this._dataResolver[d]?b[d]=this._dataResolver[d].call(this):b[d]=this._dataResolver[d])}return b},c.prototype.toString=function(){return"<plugin: "+this._name+">"},c.prototype._enabled=function(){},c.prototype._disabled=function(){},c.prototype._teardown=function(){},c.prototype._canProcess=function(){return this._isEnabled?this._isDestroyed?(this._logger.error(this._logTag,"Plugin destroyed."),!1):!0:(this._logger.error(this._logTag,"Plugin disabled."),!1)},c.prototype._trigger=function(a,b){var c=f.createFromTrigger(new e(this.getName(),a));c.data=b,this._pluginManager.trigger(c)},a.plugin.BasePlugin=c}(d,c),function(a){"use strict";function b(a,b,c){this.name=a,this.interval=b,this.isActive=!1,this.repeatCount="undefined"!=typeof c?c:e,this._nextTickTimestamp=0,this.reset()}function c(a,b){if(!a)throw new Error("Reference to the ClockService object cannot be NULL");if(this._service=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._isDestroyed=!1,this._timers={};var c=this;this._clock=window.setInterval(function(){c._onTick()},1e3*f)}b.prototype.reset=function(){this.tick=0,this._createdTimestamp=(new Date).getTime(),this._updateNextTickTimestamp()},b.prototype.shouldTick=function(){var a=(new Date).getTime();return a>this._nextTickTimestamp-f/2?(this.tick++,this._updateNextTickTimestamp(),!0):!1},b.prototype._updateNextTickTimestamp=function(){this._nextTickTimestamp=this._createdTimestamp+1e3*this.interval*(this.tick+1)},c.prototype.createTimer=function(a,c,d){this._timers[a]=new b(a,c,d)},c.prototype.destroyTimer=function(a){delete this._timers[a]},c.prototype.resumeTimer=function(a,b){b="undefined"!=typeof b?b:!1,this._logger.debug(d,"#resumeTimer(name="+a+", reset="+b+")");var c=this._timers[a];c&&(c.isActive=!0,b&&c.reset())},c.prototype.pauseTimer=function(a,b){b="undefined"!=typeof b?b:!1,this._logger.debug(d,"#pauseTimer(name="+a+", reset="+b+")");var c=this._timers[a];c&&(c.isActive=!1,b&&c.reset())},c.prototype.isTimerPaused=function(a){var b=this._timers[a];return b?!b.isActive:!1},c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._timers={},window.clearInterval(this._clock))},c.prototype._onTick=function(){for(var a in this._timers)if(this._timers.hasOwnProperty(a)){var b=this._timers[a];b.isActive&&b.shouldTick()&&(b.interval>1&&this._logger.debug(d,"#_onTick() > "+b.name+"("+b.tick+" | "+b.repeatCount+")"),0!=b.repeatCount?(this._service.onTick(b.name,b.interval,b.tick),b.repeatCount!=e&&b.repeatCount--):this.destroyTimer(b.name))}};var d="service.clock::TimerManager",e=-1,f=.25;a.clock.TimerDescriptor=b,a.clock.TimerManager=c}(e),function(a,b,c){"use strict";function d(a){if(d.__super__.constructor.call(this,h),!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._timerManager=new e(this,this._logger),this._setupDataResolver()}var e=c.clock.TimerManager,f=b.StringUtils,g=a.plugin.BasePlugin;a.extend(d,g),d.prototype.bootstrap=function(a){d.__super__.bootstrap.call(this,a),this._pluginManager.comply(this,i,this._cmdCreate),this._pluginManager.comply(this,k,this._cmdResume),this._pluginManager.comply(this,j,this._cmdPause),this._pluginManager.comply(this,l,this._cmdDestroy)},d.prototype._teardown=function(){this._timerManager.destroy()},d.prototype._cmdCreate=function(a){var b=a[o]||s;this._timerManager.createTimer(a[m],a[n],b)},d.prototype._cmdPause=function(a){this._timerManager.pauseTimer(a[m],!!a[q])},d.prototype._cmdResume=function(a){this._timerManager.resumeTimer(a[m],!!a[q])},d.prototype._cmdDestroy=function(a){this._timerManager.destroyTimer(a[m])},d.prototype.onTick=function(a,b,c){a+=".tick";var d={};d[m]=a,d[n]=b,d[p]=c,this._trigger(a,d)},d.prototype._setupDataResolver=function(){var a={},b=this._timerManager;a[r]=function(a){return b.isTimerPaused(a)},this._dataResolver=function(b){if(!b||0==b.length)return null;for(var c=null,d=0;d<b.length;d++){var e=b[d];if(c=c||{},f.startsWith(e,r)){var g=e.split(r+".");g.length>0&&(c[e]=a[r].call(this,g[1]))}}return c}};var h="service.clock",i="create",j="pause",k="resume",l="destroy",m="name",n="interval",o="repeat_count",p="tick",q="reset",r="is_paused",s=-1;c.clock.ClockService=d}(d,b,e),function(a,b,c){"use strict";function d(a,b){if(this._logger=new e,this._pluginManager=new f(this._logger),this._pluginManager.addPlugin(new g(this._logger)),b)for(var c=0;c<b.length;c++)this._pluginManager.addPlugin(b[c]);this._pluginManager.setupPlugins(),this._isDestroyed=!1}var e=a.Logger,f=a.plugin.PluginManager,g=b.clock.ClockService;d.prototype.configure=function(a){if(!a)throw new Error("Configuration object cannot be NULL.");a.debugLogging?this._logger.enable():this._logger.disable(),this._isDestroyed&&this._logger.error(h,"Instance is destroyed.")},d.prototype.destroy=function(){this._isDestroyed||(this._pluginManager.destroy(),this._isDestroyed=!0)};var h="Heartbeat";c.Heartbeat=d}(d,e,c),a.ADB||(a.ADB={}),a.ADB.core||(a.ADB.core=d),a.ADB.va||(a.ADB.va=c),a.ADB.va.utils||(a.ADB.va.utils=b),a.ADB.va.plugins||(a.ADB.va.plugins={})}(this);

// VideoPlayerPlugin
!function(a){if("undefined"==typeof b)var b={};!function(a){"use strict";var b={};b.ASSET_TYPE_VOD="vod",b.ASSET_TYPE_LIVE="live",b.ASSET_TYPE_LINEAR="linear",a.AssetType=b}(b),function(a){"use strict";function b(){this.playerName=null,this.name=null,this.position=null,this.startTime=null}b.prototype.toString=function(){return"playerName="+this.playerName+", name="+this.name+", position="+this.position+", startTime="+this.startTime},a.AdBreakInfo=b}(b),function(a){"use strict";function b(){this.id=null,this.name=null,this.length=null,this.position=null}b.prototype.toString=function(){return"id="+this.id+", name="+this.name+", length="+this.length+", position="+this.position},a.AdInfo=b}(b),function(a){"use strict";function b(){this.name=null,this.length=null,this.position=null,this.startTime=null}b.prototype.toString=function(){return"name="+this.name+", length="+this.length+", position="+this.position+", startTime="+this.startTime},a.ChapterInfo=b}(b),function(a){"use strict";function b(){this.bitrate=null,this.fps=null,this.droppedFrames=null,this.startupTime=null}b.prototype.toString=function(){return"bitrate="+this.bitrate+", fps="+this.fps+", droppedFrames="+this.droppedFrames+", startupTime="+this.startupTime},a.QoSInfo=b}(b),function(a){"use strict";function b(){this.playerName=null,this.id=null,this.name=null,this.length=null,this.playhead=null,this.streamType=null}b.prototype.toString=function(){return"playerName="+this.playerName+", id="+this.id+", name="+this.name+", length="+this.length+", playhead="+this.playhead+", streamType="+this.streamType},a.VideoInfo=b}(b),function(a){"use strict";function b(){this.debugLogging=!1}a.VideoPlayerPluginConfig=b}(b),function(a){"use strict";function b(){}b.prototype.getVideoInfo=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getAdBreakInfo=function(){return null},b.prototype.getAdInfo=function(){return null},b.prototype.getChapterInfo=function(){return null},b.prototype.getQoSInfo=function(){return null},a.VideoPlayerPluginDelegate=b}(b),function(a,b){"use strict";function c(a){if(c.__super__.constructor.call(this,f),!a)throw new Error("PlayerPlugin delegate cannot be NULL.");this._delegate=a,this._isTrackingSessionActive=!1,this._isTrackingSessionStarted=!1,this._setupDataResolver()}var d=a.plugin.BasePlugin,e=b.VideoPlayerPluginConfig;a.extend(c,d),c.prototype.configure=function(a){if(!a)throw new Error("Reference to the configuration data cannot be NULL.");if(!(a instanceof e))throw new Error("Expected config data to be instance of VideoPlayerPluginConfig.");a.debugLogging?this._logger.enable():this._logger.disable(),this._logger.debug(this._logTag,"#configure(debugLogging="+a.debugLogging+")")},c.prototype.trackSessionStart=function(){if(this._logger.info(this._logTag,"#trackSessionStart()"),this._canProcess()){if(!this._isTrackingSessionActive)return void this._logger.warn(this._logTag,"#trackSessionStart() > No active tracking session.");if(this._isTrackingSessionStarted)return void this._logger.info(this._logTag,"#trackSessionStart() > Tracking session already started.");this._trigger(k),this._isTrackingSessionStarted=!0}},c.prototype.trackVideoLoad=function(){this._logger.info(this._logTag,"#trackVideoLoad()"),this._canProcess()&&(this._trigger(i),this._isTrackingSessionActive=!0,this._isTrackingSessionStarted=!1)},c.prototype.trackVideoUnload=function(){if(this._logger.info(this._logTag,"#trackVideoUnload()"),this._canProcess()){if(!this._isTrackingSessionActive)return void this._logger.warn(this._logTag,"#trackVideoUnload() > No active tracking session.");this._trigger(j),this._isTrackingSessionActive=!1,this._isTrackingSessionStarted=!1}},c.prototype.trackPlay=function(){this._logger.info(this._logTag,"#trackPlay()"),this._canProcess()&&this._startSessionIfNeeded("trackPlay")&&this._trigger(m)},c.prototype.trackPause=function(){this._logger.info(this._logTag,"#trackPause()"),this._canProcess()&&this._startSessionIfNeeded("trackPause")&&this._trigger(n)},c.prototype.trackBufferStart=function(){this._logger.info(this._logTag,"#trackBufferStart()"),this._canProcess()&&this._startSessionIfNeeded("trackBufferStart")&&this._trigger(q)},c.prototype.trackBufferComplete=function(){this._logger.info(this._logTag,"#trackBufferComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackBufferComplete")&&this._trigger(r)},c.prototype.trackSeekStart=function(){this._logger.info(this._logTag,"#trackSeekStart()"),this._canProcess()&&this._startSessionIfNeeded("trackSeekStart")&&this._trigger(s)},c.prototype.trackSeekComplete=function(){this._logger.info(this._logTag,"#trackSeekComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackSeekComplete")&&this._trigger(t)},c.prototype.trackComplete=function(a){if(this._logger.info(this._logTag,"#trackComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackComplete")){var b={};b[y]=a,this._trigger(l,b)}},c.prototype.trackChapterStart=function(){this._logger.info(this._logTag,"#trackChapterStart()"),this._canProcess()&&this._startSessionIfNeeded("#trackChapterStart")&&this._trigger(u)},c.prototype.trackChapterComplete=function(){this._logger.info(this._logTag,"trackChapterComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackChapterComplete")&&this._trigger(v)},c.prototype.trackAdStart=function(){this._logger.info(this._logTag,"#trackAdStart()"),this._canProcess()&&this._startSessionIfNeeded("trackAdStart")&&this._trigger(o)},c.prototype.trackAdComplete=function(){this._logger.info(this._logTag,"#trackAdComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackAdComplete")&&this._trigger(p)},c.prototype.trackBitrateChange=function(){this._logger.info(this._logTag,"#trackBitrateChange()"),this._canProcess()&&this._startSessionIfNeeded("trackBitrateChange")&&this._trigger(w)},c.prototype.trackVideoPlayerError=function(a){if(this._logger.info(this._logTag,"#trackVideoPlayerError(errorId="+a+")"),this._startSessionIfNeeded("trackVideoPlayerError")){var b={};b[z]=h,b[A]=a,this._trigger(x,b)}},c.prototype.trackApplicationError=function(a){if(this._logger.info(this._logTag,"#trackApplicationError(errorId="+a+")"),this._startSessionIfNeeded("trackApplicationError")){var b={};b[z]=g,b[A]=a,this._trigger(x,b)}},c.prototype._setupDataResolver=function(){function a(){return g.video?g.video:(g.video=h._delegate.getVideoInfo(),h._logger.info(h._logTag,"Data from delegate > VideoInfo: "+g.video),g.video)}function b(){return g.ad?g.ad:(g.ad=h._delegate.getAdInfo(),h._logger.info(h._logTag,"Data from delegate > AdInfo: "+g.ad),g.ad)}function c(){return g.pod?g.pod:(g.pod=h._delegate.getAdBreakInfo(),h._logger.info(h._logTag,"Data from delegate > AdBreakInfo: "+g.pod),g.pod)}function d(){return g.chapter?g.chapter:(g.chapter=h._delegate.getChapterInfo(),h._logger.info(h._logTag,"Data from delegate > ChapterInfo: "+g.chapter),g.chapter)}function e(){return g.qos?g.qos:(g.qos=h._delegate.getQoSInfo(),h._logger.info(h._logTag,"Data from delegate > QoSInfo: "+g.qos),g.qos)}var f={},g={},h=this;f["video.id"]=function(){var b=a(),c=b?b.id:null;return h._logger.debug(h._logTag,"Resolving video.id: "+c),c},f["video.name"]=function(){var b=a(),c=b?b.name:null;return h._logger.debug(h._logTag,"Resolving video.name: "+c),c},f["video.length"]=function(){var b=a(),c=b?b.length:NaN;return h._logger.debug(h._logTag,"Resolving video.length: "+c),c},f["video.playerName"]=function(){var b=a(),c=b?b.playerName:null;return h._logger.debug(h._logTag,"Resolving video.playerName: "+c),c},f["video.streamType"]=function(){var b=a(),c=b?b.streamType:null;return h._logger.debug(h._logTag,"Resolving video.streamType: "+c),c},f["video.playhead"]=function(){var b=a(),c=b?b.playhead:NaN;return h._logger.debug(h._logTag,"Resolving video.playhead: "+c),c},f["pod.name"]=function(){var a=c(),b=a?a.name:null;return h._logger.debug(h._logTag,"Resolving pod.name: "+b),b},f["pod.playerName"]=function(){var a=c(),b=a?a.playerName:null;return h._logger.debug(h._logTag,"Resolving pod.playerName: "+b),b},f["pod.position"]=function(){var a=c(),b=a?a.position:NaN;return h._logger.debug(h._logTag,"Resolving pod.position: "+b),b},f["pod.startTime"]=function(){var a=c(),b=a?a.startTime:NaN;return h._logger.debug(h._logTag,"Resolving pod.startTime: "+b),b},f["ad.isInAd"]=function(){var a=b(),c=null!=a;return h._logger.debug(h._logTag,"Resolving ad.isInAd: "+c),c},f["ad.isInAdBreak"]=function(){var a=c(),b=null!=a;return h._logger.debug(h._logTag,"Resolving ad.isInAdBreak: "+b),b},f["ad.id"]=function(){var a=b(),c=a?a.id:null;return h._logger.debug(h._logTag,"Resolving ad.id: "+c),c},f["ad.name"]=function(){var a=b(),c=a?a.name:null;return h._logger.debug(h._logTag,"Resolving ad.name: "+c),c},f["ad.length"]=function(){var a=b(),c=a?a.length:NaN;return h._logger.debug(h._logTag,"Resolving ad.length: "+c),c},f["ad.position"]=function(){var a=b(),c=a?a.position:NaN;return h._logger.debug(h._logTag,"Resolving ad.position: "+c),c},f["chapter.isInChapter"]=function(){var a=d(),b=null!=a;return h._logger.debug(h._logTag,"Resolving chapter.isInChapter: "+b),b},f["chapter.name"]=function(){var a=d(),b=a?a.name:null;return h._logger.debug(h._logTag,"Resolving chapter.name: "+b),b},f["chapter.length"]=function(){var a=d(),b=a?a.length:NaN;return h._logger.debug(h._logTag,"Resolving chapter.length: "+b),b},f["chapter.position"]=function(){var a=d(),b=a?a.position:NaN;return h._logger.debug(h._logTag,"Resolving chapter.position: "+b),b},f["chapter.startTime"]=function(){var a=d(),b=a?a.startTime:NaN;return h._logger.debug(h._logTag,"Resolving chapter.startTime: "+b),b},f["qos.bitrate"]=function(){var a=e(),b=a?a.bitrate:NaN;return h._logger.debug(h._logTag,"Resolving qos.bitrate: "+b),b},f["qos.fps"]=function(){var a=e(),b=a?a.fps:NaN;return h._logger.debug(h._logTag,"Resolving qos.fps: "+b),b},f["qos.droppedFrames"]=function(){var a=e(),b=a?a.droppedFrames:NaN;return h._logger.debug(h._logTag,"Resolving qos.droppedFrames: "+b),b},f["qos.startupTime"]=function(){var a=e(),b=a?1e3*a.startupTime:NaN;return h._logger.debug(h._logTag,"Resolving qos.startupTime: "+b),b},this._dataResolver=function(a){if(!a||0==a.length)return null;g={};for(var b=null,c=0;c<a.length;c++){var d=a[c];b=b||{},b[d]=f.hasOwnProperty(d)?f[d].call(this):null}return b}},c.prototype._startSessionIfNeeded=function(a){return this._isTrackingSessionActive?(this._isTrackingSessionStarted||(this._logger.info(this._logTag,"#"+a+"() > Tracking session auto-start."),this.trackSessionStart()),!0):(this._logger.warn(this._logTag,"#"+a+"() > No active tracking session."),!1)};var f="player",g="sourceErrorExternal",h="sourceErrorSDK",i="video_load",j="video_unload",k="video_start",l="video_complete",m="play",n="pause",o="ad_start",p="ad_complete",q="buffer_start",r="buffer_complete",s="seek_start",t="seek_complete",u="chapter_start",v="chapter_complete",w="bitrate_change",x="track_error",y="callback",z="source",A="error_id";b.VideoPlayerPlugin=c}(a.ADB.core,b),a.ADB.va.plugins.videoplayer||(a.ADB.va.plugins.videoplayer=b)}(this);

// AdobeHeartbeatPlugin
!function(a){if("undefined"==typeof b)var b={};b.clock||(b.clock={}),b.context||(b.context={}),b.filter||(b.filter={}),b.model||(b.model={}),b.network||(b.network={}),function(a,b){"use strict";function c(a,b,c,d,e){if(!b)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=b,!a)throw new Error("Reference to the pluginManager object cannot be NULL");if(this._pluginManager=a,!e)throw new Error("Reference to the logger object cannot be NULL");this._logTag="ah::Timer."+c,this._logger=e,this._isDestroyed=!1,this._createTimer(c,d),this._installHandlers()}var d=a.Event;c.KEY_NAME="name",c.KEY_INTERVAL="interval",c.KEY_RESET="reset",c.prototype.resume=function(a){this._logger.debug(this._logTag,"Starting timer: "+this._name);var b={};b[c.KEY_NAME]=e+"."+this._name,b[c.KEY_RESET]=a,this._pluginManager.command(f,i,b)},c.prototype.pause=function(a){this._logger.debug(this._logTag,"Stopping timer: "+this._name);var b={};b[c.KEY_NAME]=e+"."+this._name,b[c.KEY_RESET]=a,this._pluginManager.command(f,h,b)},c.prototype.destroy=function(){if(!this._isDestroyed){this._isDestroyed=!0,this._uninstallHandlers();var a={};a[c.KEY_NAME]=e+"."+this._name,this._pluginManager.command(f,j,a)}},c.prototype.setInterval=function(a){var b=k+"."+e+"."+this._name,c=this._pluginManager.request(f,[b])[b];this.pause(!0),this._createTimer(this._name,a),c||this.resume(!0)},c.prototype._cmdResume=function(a){var b=!1;null!=a&&a.hasOwnProperty(c.KEY_RESET)&&(b=a[c.KEY_RESET]),this.resume(b)},c.prototype._cmdPause=function(a){var b=!1;null!=a&&a.hasOwnProperty(c.KEY_RESET)&&(b=a[c.KEY_RESET]),this.pause(b)},c.prototype._onTick=function(a,b){this._channel.trigger(new d("clock:"+this._name+".tick",b))},c.prototype._installHandlers=function(){this._channel.comply("clock:"+this._name+".resume",this._cmdResume,this),this._channel.comply("clock:"+this._name+".pause",this._cmdPause,this),this._pluginManager.on(f,e+"."+this._name+".tick",this._onTick,this)},c.prototype._uninstallHandlers=function(){this._channel.off(null,null,this),this._pluginManager.off(null,null,null,this)},c.prototype._createTimer=function(a,b){this._name=a,this._interval=b;var d={};d[c.KEY_NAME]=e+"."+this._name,d[c.KEY_INTERVAL]=this._interval,this._pluginManager.command(f,g,d)};var e="heartbeat",f="service.clock",g="create",h="pause",i="resume",j="destroy",k="is_paused";b.clock.Timer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,f,h,d)}var d=a.Event,e=b.clock.Timer;a.extend(c,e),c.prototype._onCheckStatusComplete=function(a){var b=a.data[l];if(this._logger.debug(this._logTag,"#_onCheckStatusComplete(interval="+b+")"),b){if(b==this._interval)return void this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval value not changed.");b>g?(this._logger.warn(this._logTag,"#_onCheckStatusComplete() > Interval value too large: "+b),this.setInterval(g)):(this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval changed to: "+b),this.setInterval(b))}else this._logger.warn(this._logTag,"#_onCheckStatusComplete() > Invalid interval value."),this.setInterval(h)},c.prototype._getSettings=function(a){this._logger.debug(this._logTag,"#_getSettings()"),this._channel.trigger(new d(i))},c.prototype._installHandlers=function(){c.__super__._installHandlers.call(this),this._channel.on(j,this._getSettings,this),this._channel.on(k,this._onCheckStatusComplete,this),this._channel.reply(l,function(){return this._interval},this)};var f="check_status",g=600,h=60,i="clock:check_status.tick",j="clock:check_status.get_settings",k="net:check_status_complete",l="check_status_interval";b.clock.CheckStatusTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,e,f,d)}var d=b.clock.Timer;a.extend(c,d),c.prototype._onCheckStatusComplete=function(a){var b=a.data[g];if(this._logger.debug(this._logTag,"#_onCheckStatusComplete(interval="+b+")"),b){if(b==this._interval)return void this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval value not changed.");this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval changed to: "+b),this.setInterval(b)}else this._logger.warn(this._logTag,"#_onCheckStatusComplete() > Invalid interval value."),this.setInterval(f)},c.prototype._installHandlers=function(){c.__super__._installHandlers.call(this),this._channel.on(h,this._onCheckStatusComplete,this),this._channel.reply(g,function(){return this._interval},this)};var e="reporting",f=10,g="reporting_interval",h="net:check_status_complete";b.clock.ReportingTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,e,f,d)}var d=b.clock.Timer;a.extend(c,d);var e="flush_filter",f=.25;b.clock.FlushFilterTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,c){if(!a)throw new Error("Reference to the pluginManager object cannot be NULL");if(!b)throw new Error("Reference to the channel object cannot be NULL");if(!c)throw new Error("Reference to the logger object cannot be NULL");this._isDestroyed=!1,this._reportingTimer=new f(a,b,c),this._checkStatusTimer=new d(a,b,c),this._flushFilterTimer=new e(a,b,c)}var d=b.clock.CheckStatusTimer,e=b.clock.FlushFilterTimer,f=b.clock.ReportingTimer;c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._reportingTimer.destroy(),this._checkStatusTimer.destroy(),this._flushFilterTimer.destroy())},b.clock.Clock=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){this.value=a,this.hint=b}function d(a){this.realm=a,this.data={}}c.HINT_SHORT="short",d.prototype.setField=function(a,b,d){this.data[a]=new c(b,d)},d.prototype._createAccessor=function(a,b,c){var d=this;return function(){return arguments.length&&(d[a]=arguments[0],d.setField(b,arguments[0],c)),d[a]}},b.model.Dao=d,b.model.DaoField=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"asset"),this.adId=this._createAccessor("_adId","ad_id",null),this.sid=this._createAccessor("_sid","ad_sid",null),this.resolver=this._createAccessor("_resolver","resolver",null),this.podId=this._createAccessor("_podId","pod_id",null),this.podPosition=this._createAccessor("_podPosition","pod_position",null),this.podOffset=this._createAccessor("_podOffset","pod_offset",null),this.podName=this._createAccessor("_podName","pod_name",null),this.adLength=this._createAccessor("_adLength","ad_length",null),this.adName=this._createAccessor("_adName","ad_name",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.adId(a.adId()),this.sid(a.sid()),this.resolver(a.resolver()),this.podId(a.podId()),this.podPosition(a.podPosition()),this.podOffset(a.podOffset()),this.podName(a.podName()),this.adLength(a.adLength()),this.adName(a.adName())}else this.adId(""),this.sid(""),this.resolver(""),this.podId(""),this.podPosition(""),this.podOffset(0),this.podName(""),this.adLength(0),this.adName("")}var d=b.model.Dao;a.extend(c,d),b.model.AdDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"sc"),this.reportSuiteId=this._createAccessor("_reportSuiteId","rsid",null),this.trackingServer=this._createAccessor("_trackingServer","tracking_server",null),this.ssl=this._createAccessor("_ssl","ssl",e.HINT_SHORT),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.reportSuiteId(a.reportSuiteId()),this.trackingServer(a.trackingServer()),this.ssl(a.ssl())}else this.reportSuiteId(""),this.trackingServer(""),this.ssl(0)}var d=b.model.Dao,e=b.model.DaoField;a.extend(c,d),b.model.AdobeAnalyticsDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"stream"),this.id=this._createAccessor("_id","chapter_id",null),this.sid=this._createAccessor("_sid","chapter_sid",null),this.name=this._createAccessor("_name","chapter_name",null),this.position=this._createAccessor("_position","chapter_pos",null),this.length=this._createAccessor("_length","chapter_length",null),this.offset=this._createAccessor("_offset","chapter_offset",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.id(a.id()),this.sid(a.sid()),this.name(a.name()),this.position(a.position()),this.length(a.length()),this.offset(a.offset())}else this.id(""),this.sid(""),this.name(""),this.position(0),this.length(0),this.offset(0)}var d=b.model.Dao;a.extend(c,d),b.model.ChapterDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"asset"),this.type=this._createAccessor("_type","type",null),this.videoId=this._createAccessor("_videoId","video_id",null),this.publisher=this._createAccessor("_publisher","publisher",null),this.adData=this._createAccessor("_adData","ad_data",null),this.chapterData=this._createAccessor("_chapterData","chapter_data",null),this.length=this._createAccessor("_length","length",null),this.name=this._createAccessor("_name","name",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.type(a.type()),this.name(a.name()),this.videoId(a.videoId()),this.publisher(a.publisher()),this.length(a.length());var b=a.adData()?new e(a.adData()):null;this.adData(b);var d=a.chapterData()?new f(a.chapterData()):null;this.chapterData(d)}else this.type(""),this.name(""),this.videoId(""),this.publisher(""),this.length(0),this.adData(null),this.chapterData(null)}var d=b.model.Dao,e=b.model.AdDao,f=b.model.ChapterDao;a.extend(c,d),c.TYPE_AD="ad",c.TYPE_MAIN_CONTENT="main",b.model.AssetDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"event"),this.type=this._createAccessor("_type","type",null),this.duration=this._createAccessor("_duration","duration",null),this.playhead=this._createAccessor("_playhead","playhead",null),this.id=this._createAccessor("_id","id",null),this.source=this._createAccessor("_source","source",null),this.ts=this._createAccessor("_ts","ts",null),this.prevTs=this._createAccessor("_prevTs","prev_ts",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.type(a.type()),this.duration(a.duration()),this.playhead(a.playhead()),this.id(a.id()),this.source(a.source()),this.ts(a.ts()),this.prevTs(a.prevTs())}else this.type(""),this.duration(0),this.playhead(0),this.id(""),this.source(""),this.ts(0),this.prevTs(-1)}var d=b.model.Dao;a.extend(c,d),c.EVENT_TYPE_AA_START="aa_start",c.EVENT_TYPE_AA_AD_START="aa_ad_start",c.EVENT_TYPE_START="start",c.EVENT_TYPE_CHAPTER_START="chapter_start",c.EVENT_TYPE_CHAPTER_COMPLETE="chapter_complete",c.EVENT_TYPE_PLAY="play",c.EVENT_TYPE_PAUSE="pause",c.EVENT_TYPE_BUFFER="buffer",c.EVENT_TYPE_BITRATE_CHANGE="bitrate_change",c.EVENT_TYPE_ERROR="error",c.EVENT_TYPE_COMPLETE="complete",b.model.EventDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"stream"),this.bitrate=this._createAccessor("_bitrate","bitrate",null),this.fps=this._createAccessor("_fps","fps",null),this.droppedFrames=this._createAccessor("_droppedFrames","dropped_frames",null),this.startupTime=this._createAccessor("_startup_time","startup_time",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.bitrate(a.bitrate()),this.fps(a.fps()),this.droppedFrames(a.droppedFrames()),this.startupTime(a.startupTime()),this.isStartupTimeOverridden=a.isStartupTimeOverridden}else this.bitrate(0),this.fps(0),this.droppedFrames(0),this.startupTime(0),this.isStartupTimeOverridden=!1}var d=b.model.Dao;a.extend(c,d),b.model.QoSDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"sp"),this.ovp=this._createAccessor("_ovp","ovp",null),this.sdk=this._createAccessor("_sdk","sdk",null),this.channel=this._createAccessor("_channel","channel",null),this.playerName=this._createAccessor("_playerName","player_name",null),this.libVersion=this._createAccessor("_libVersion","hb_version",null),this.apiLevel=this._createAccessor("_apiLevel","hb_api_lvl",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.ovp(a.ovp()),this.sdk(a.sdk()),this.channel(a.channel()),this.playerName(a.playerName()),this.libVersion(a.libVersion()),this.apiLevel(a.apiLevel())}else this.ovp(e),this.sdk(e),this.channel(e),this.playerName(""),this.libVersion(""),this.apiLevel(0)}var d=b.model.Dao;a.extend(c,d);var e="unknown";b.model.ServiceProviderDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"event"),this.sessionId=this._createAccessor("_sessionId","sid",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.sessionId(a.sessionId())}else this.sessionId(null)}var d=b.model.Dao;a.extend(c,d),b.model.SessionDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"stream"),this.type=this._createAccessor("_type","type",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.type(a.type())}else this.type(null)}var d=b.model.Dao;a.extend(c,d),b.model.StreamDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"user"),this.analyticsVisitorId=this._createAccessor("_analyticsVisitorId","aid",null),this.marketingCloudVisitorId=this._createAccessor("_marketingCloudVisitorId","mid",null),this.visitorId=this._createAccessor("_visitorId","id",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.analyticsVisitorId(a.analyticsVisitorId()),this.marketingCloudVisitorId(a.marketingCloudVisitorId()),this.visitorId(a.visitorId())}else this.analyticsVisitorId(null),this.marketingCloudVisitorId(null),this.visitorId(null)}var d=b.model.Dao;a.extend(c,d),b.model.UserDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,c,i,j){this.eventData=new e,this.eventData.type(b),this.eventData.duration(0),this.eventData.ts((new Date).getTime()),this.eventData.playhead(c),this.assetData=new f(a._assetData),this.streamData=new g(a._streamData),this.qosData=new h(a._qosData),this.cuserData=d.clone(a._cuserData),this.meta=i,this.callback=j}var d=a.ObjectUtils,e=b.model.EventDao,f=b.model.AssetDao,g=b.model.StreamDao,h=b.model.QoSDao;b.model.TrackItem=c}(a.ADB.va.utils,b),function(a,b){"use strict";function c(a,b,c,i,j){this.adobeAnalyticsData=a,this.userData=b,this.serviceProviderData=c,this.sessionData=i,this.eventData=new e(j.eventData),this.assetData=new f(j.assetData),this.streamData=new g(j.streamData),this.qosData=new h(j.qosData),this.cuserData=d.clone(j.cuserData),this.meta=d.clone(j.meta),this.callback=j.callback}var d=a.ObjectUtils,e=b.model.EventDao,f=b.model.AssetDao,g=b.model.StreamDao,h=b.model.QoSDao;b.model.CUserDao;b.model.Report=c}(a.ADB.va.utils,b),function(a){"use strict";function b(){}b.prototype.serializeReport=function(a){},b.prototype.serializeDao=function(a){},b.prototype.serializeMap=function(a){},b.prototype.serializeNumber=function(a,b,c,d){},b.prototype.serializeString=function(a,b,c,d){},a.model.ISerializer=b}(b),function(a,b){"use strict";function c(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a}var d=b.model.Dao,e=b.model.DaoField,f=b.model.ISerializer;a.extend(c,f),c.prototype.serializeReport=function(a){var b=[];return b.push(this.serializeDao(a.adobeAnalyticsData)),b.push(this.serializeDao(a.userData)),b.push(this.serializeMap(a.cuserData,"cuser")),b.push(this.serializeDao(a.serviceProviderData)),b.push(this.serializeDao(a.sessionData)),b.push(this.serializeDao(a.eventData)),b.push(this.serializeDao(a.assetData)),b.push(this.serializeDao(a.streamData)),b.push(this.serializeDao(a.qosData)),b.push(this.serializeMap(a.meta,"meta")),{serializedOutput:b.filter(function(a){return!!a}).join("&"),callback:a.callback}},c.prototype.serializeDao=function(a){var b=this._processDao(a);return b.filter(function(a){return!!a}).join("&")},c.prototype.serializeMap=function(a,b){var c=[],d=b?b:"meta";for(var e in a)a.hasOwnProperty(e)&&a[e]&&c.push("s:"+d+":"+e+"="+window.encodeURIComponent(a[e]));return c.join("&")},c.prototype.serializeNumber=function(a,b,c,d){var f=h;return null==b||isNaN(b)?null:(d===e.HINT_SHORT&&(f=i),f+":"+c+":"+a+"="+Math.floor(b))},c.prototype.serializeString=function(a,b,c,d){return b?j+":"+c+":"+a+"="+window.encodeURIComponent(b):null},c.prototype._processDao=function(a){var b=[];for(var c in a.data)if(a.data.hasOwnProperty(c)){var e=a.data[c],f=e.value,h=e.hint,i=null,j=a.realm;if(null==f)continue;"number"==typeof f?i=this.serializeNumber(c,f,j,h):"string"==typeof f?i=this.serializeString(c,f,j,h):f instanceof d?i=this.serializeDao(f):this._logger.warn(g,"#_processDao() > Unable to serialize DAO. Field: "+c+". Value: "+f+"."),i&&b.push(i)}return b};var g="ah::QuerystringSerializer",h="l",i="h",j="s";b.model.QuerystringSerializer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){if(!a)throw new Error("Reference to the data object cannot be NULL");if(this._data=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b}c.prototype.parse=function(){var a,b,c,h;if(window.DOMParser){var i=new window.DOMParser;h=i.parseFromString(this._data,"text/xml")}else h=new window.ActiveXObject("Microsoft.XMLDOM"),h.async=!1,h.loadXML(this.data);var j;j=parseInt(h.getElementsByTagName("trackingInterval")[0].childNodes[0].nodeValue,10),j&&(a=j),j=parseInt(h.getElementsByTagName("setupCheckInterval")[0].childNodes[0].nodeValue,10),j&&(b=j),j=parseInt(h.getElementsByTagName("trackExternalErrors")[0].childNodes[0].nodeValue,10),j&&(c=1==j);var k={};return k[e]=a,k[f]=b,k[g]=c,this._logger.debug(d,"#parse() > Obtained configuration settings."),k};var d="ah::SettingsParser",e="reporting_interval",f="check_status_interval",g="track_external_errors";b.network.SettingsParser=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){if(this._trackingServer=null,this._checkStatusServer=null,this._publisher=null,this._quietMode=!1,this._isConfigured=!1,this._isDestroyed=!1,!a)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._serializer=new i(b),this._installEventListeners()}var d=a.Event,e=a.URLRequestMethod,f=a.URLRequest,g=a.URLLoader,h=b.network.SettingsParser,i=b.model.QuerystringSerializer;c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._logger.debug(j,"#destroy()"),this._uninstallEventListeners())},c.prototype._onApiConfig=function(a){var b=a.data;this._logger.debug(j,"#_onApiConfig(sb_server="+b[k]+", check_status_server="+b[l]+", publisher="+b[m]+", quiet_mode="+b[n]+", ssl="+b[o]+")"),this._trackingServer=this._updateRequestProtocol(b[k],b[o]),this._checkStatusServer=this._updateRequestProtocol(b[l],b[o]),this._publisher=b[m],this._quietMode=b[n],this._isConfigured=!0},c.prototype._onFilterReportAvailable=function(a){var b=a.data;if(!this._isConfigured)return void this._logger.warn(j,"#_onFilterReportAvailable() > Unable to send request: not configured.");var c=b[p],h=this._serializer.serializeReport(c),i=this._trackingServer+"/?"+h.serializedOutput,k=new f(i,e.GET);this._logger.debug(j,"_onFilterReportAvailable() > "+k.url);var l=this,m=function(a){o.close(),h.callback&&h.callback.call(null)},n=function(a){o.close(),l._logger.warn(j,"#_onFilterReportAvailable() > Failed to send heartbeat report."),h.callback&&h.callback.call(null)};if(!this._quietMode){var o=new g;o.addEventListener(d.SUCCESS,m,this),o.addEventListener(d.ERROR,n,this),o.load(k)}},c.prototype._onClockCheckStatusTick=function(a){function b(a){if(a.data){var b=new h(a.data.response,i._logger),c=b.parse();c?i._channel.trigger(new d(t,c)):i._logger.warn(j,"#_onClockCheckStatusTick() > Failed to parse the config. settings.")}n.close()}function c(a){i._logger.warn(j,"#_onClockCheckStatusTick() > Failed to obtain the config. settings."),n.close()}if(!this._isConfigured)return void this._logger.warn(j,"#_onClockCheckStatusTick() > Unable to send request: not configured.");if(!this._publisher)return void this._logger.warn(j,"#_onClockCheckStatusTick() > Publisher is NULL.");var i=this,k=this._publisher.replace(/[^a-zA-Z0-9]+/,"-").toLocaleLowerCase(),l=this._checkStatusServer+k+".xml?r="+(new Date).getTime(),m=new f(l,e.GET),n=new g;n.addEventListener(d.SUCCESS,b,this),n.addEventListener(d.ERROR,c,this),this._logger.debug(j,"#_onClockCheckStatusTick() > Get new settings from: "+l),n.load(m)},c.prototype._updateRequestProtocol=function(a,b){var c=a;return 0===c.indexOf("http://")?c=c.slice(7):0===c.indexOf("https://")&&(c=c.slice(8)),b?"https://"+c:"http://"+c},c.prototype._installEventListeners=function(){this._channel.on(q,this._onApiConfig,this),this._channel.on(r,this._onFilterReportAvailable,this),this._channel.on(s,this._onClockCheckStatusTick,this)},c.prototype._uninstallEventListeners=function(){this._channel.off(null,null,this)};var j="ah::Network",k="tracking_server",l="check_status_server",m="publisher",n="quiet_mode",o="ssl",p="report",q="api:config",r="filter:data_available",s="clock:check_status.tick",t="net:check_status_complete";b.network.Network=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){if(!a)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._isDestroyed=!1,this._isBufferingInProgress=!1,this._reportBuffer={},this._tsHistory={},this._workQueue=new i,this._installEventListeners()}function d(a){var b=[];if(a)for(var c=0;c<a.length;c++){var d=a[c];d.eventData.type()!=k.EVENT_TYPE_PAUSE&&b.push(d)}return b}function e(a){var b=-1,c=-1,d=[];return a.forEach(function(a){a.eventData.type()==k.EVENT_TYPE_START?a.assetData.type()==l.TYPE_MAIN_CONTENT?-1==b?b=d.push(a)-1:(a.eventData.prevTs(-1),d[b]=a):-1==c?c=d.push(a)-1:(a.eventData.prevTs(-1),d[c]=a):d.push(a)}),d}function f(a){var b=[];return a.forEach(function(c){if(c.eventData.type()==k.EVENT_TYPE_PLAY){if(c.eventData.duration()>t)b.push(c);else if(0==c.eventData.duration()&&c.assetData.type()==l.TYPE_MAIN_CONTENT){var d=g(a);d.indexOf(c)==d.length-1&&b.push(c)}}else b.push(c)}),b}function g(a){var b=[];return a.forEach(function(a){(a.eventData.type()==k.EVENT_TYPE_PLAY||a.eventData.type()==k.EVENT_TYPE_BUFFER||a.eventData.type()==k.EVENT_TYPE_START)&&b.push(a)}),b}var h=a.radio.Command,i=a.radio.CommandQueue,j=a.Event,k=b.model.EventDao,l=b.model.AssetDao;c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._logger.debug(v,"#destroy()"),this._uninstallEventListeners(),this._workQueue.cancelAllCommands(),this._reportBuffer={},this._tsHistory={},this._isBufferingInProgress=!1)},c.prototype._bufferReport=function(a){if(!this._isDestroyed){var b=a[q];if(b){var c=b.sessionData.sessionId();this._reportBuffer[c]=this._reportBuffer[c]||[],this._reportBuffer[c].push(b)}if(!this._isBufferingInProgress){this._isBufferingInProgress=!0;var d={};d[p]=!0,d[r]=1,this._channel.command(s,d)}}},c.prototype._flushBufferReport=function(){function a(a){if(a)for(var c=0;c<a.length;c++){var d=a[c],e=d.sessionData.sessionId();b._tsHistory[e]=b._tsHistory[e]||{};var f=d.eventData.type()+"."+(d.assetData.type()==l.TYPE_AD?d.assetData.adData().adId():d.assetData.videoId());b._tsHistory[e].hasOwnProperty(f)&&d.eventData.prevTs(b._tsHistory[e][f]),b._tsHistory[e][f]=d.eventData.ts()}}if(!this._isDestroyed){var b=this;for(var c in this._reportBuffer)if(this._reportBuffer.hasOwnProperty(c)){var g=f(e(d(this._reportBuffer[c])));a(g);for(var h=0;h<g.length;h++){var i=g[h],k={};k[q]=i,this._channel.trigger(new j(n,k))}}this._reportBuffer={};var m=this._channel.request(u),o=this._tsHistory[m]||{};this._tsHistory={},this._tsHistory[m]=o,this._isBufferingInProgress=!1}},c.prototype._onContextReportAvailable=function(a){var b=a.data;this._workQueue.addCommand(new h(this._bufferReport,this,[b]))},c.prototype._onClockFlushFilterTick=function(a){this._workQueue.addCommand(new h(this._flushBufferReport,this))},c.prototype._installEventListeners=function(){this._channel.on(m,this._onContextReportAvailable,this),this._channel.on(o,this._onClockFlushFilterTick,this)},c.prototype._uninstallEventListeners=function(){this._channel.off(null,null,this)};var m="context:report_available",n="filter:data_available",o="clock:flush_filter.tick",p="reset",q="report",r="repeat_count",s="clock:flush_filter.resume",t=250,u="session_id",v="ah::ReportFilter";b.filter.ReportFilter=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){this._onFail={fn:a,ctx:b}}var d=a.ErrorInfo;c.prototype.validateFields=function(a,b){if(!a)return this._fail("Data cannot be null");if(b)for(var c=0;c<b.length;c++){var d=b[c];switch(d){case"videoId":if(!a.hasOwnProperty("videoId"))return this._fail("The ID for the main video must be specified.");if("string"!=typeof a.videoId)return this._fail("The ID for the main video must be a String.");if(""===a.videoId)return this._fail("The ID for the main video cannot be an empty string.");break;case"streamType":if(!a.hasOwnProperty("streamType"))return this._fail("The stream type for the main video must be specified.");if("string"!=typeof a.streamType)return this._fail("The stream type for the main video must be a String.");if(""===a.streamType)return this._fail("The stream type for the main video cannot be an empty string.");break;case"videoLength":if(!a.hasOwnProperty("videoLength"))return this._fail("The length of the main video must be specified.");if("number"!=typeof a.videoLength)return this._fail("The length of the main video must be a Number.");if(isNaN(a.videoLength))return this._fail("The length of the main video cannot be NaN.");break;case"playhead":if(!a.hasOwnProperty("playhead"))return this._fail("The playhead for the main video must be specified.");if("number"!=typeof a.playhead)return this._fail("The playhead for the main video must be a Number.");if(isNaN(a.playhead))return this._fail("The playhead for the main video cannot be NaN.");break;case"playerName":if(!a.hasOwnProperty("playerName"))return this._fail("The player name for the main video must be specified.");if("string"!=typeof a.playerName)return this._fail("The player name for the main video must be a String.");if(""===a.playerName)return this._fail("The player name for the main video cannot be an empty string.");break;case"podPlayerName":if(!a.hasOwnProperty("podPlayerName"))return this._fail("The player name for the ad-break must be specified.");if("string"!=typeof a.podPlayerName)return this._fail("The player name for the ad-break must be a String.");if(""===a.podPlayerName)return this._fail("The player name for the ad-break cannot be an empty string.");break;case"podPosition":if(!a.hasOwnProperty("podPosition"))return this._fail("Position (index) of the ad-break must be specified.");if("number"!=typeof a.podPosition)return this._fail("Position (index) of the ad-break must be a Number.");if(isNaN(a.podPosition))return this._fail("Position (index) of the ad-break cannot be NaN.");break;case"adId":if(!a.hasOwnProperty("adId"))return this._fail("The ad ID must be specified.");if("string"!=typeof a.adId)return this._fail("The ad ID must be a String.");if(""===a.adId)return this._fail("The ad ID cannot be an empty string.");break;case"adPosition":if(!a.hasOwnProperty("adPosition"))return this._fail("Position (index) of the ad must be specified.");if("number"!=typeof a.adPosition)return this._fail("Position (index) of the ad must be a Number.");if(isNaN(a.adPosition))return this._fail("Position (index) of the ad cannot be NaN.");break;case"chapterPosition":if(!a.hasOwnProperty("chapterPosition"))return this._fail("Position (index) of the chapter must be specified.");if("number"!=typeof a.chapterPosition)return this._fail("Position (index) of the chapter must be a Number.");if(isNaN(a.chapterPosition))return this._fail("Position (index) of the chapter cannot be NaN.");break;case"chapterOffset":if(!a.hasOwnProperty("chapterOffset"))return this._fail("Chapter start-time (offset) must be specified.");if("number"!=typeof a.chapterOffset)return this._fail("Chapter start-time (offset) must be a Number.");if(isNaN(a.chapterOffset))return this._fail("Chapter start-time (offset) cannot be NaN.");break;case"chapterLength":if(!a.hasOwnProperty("chapterLength"))return this._fail("The length of the chapter must be specified.");if("number"!=typeof a.chapterLength)return this._fail("The length of the chapter must be a Number.");if(isNaN(a.chapterLength))return this._fail("The length of the chapter cannot be NaN.");break;default:return this._fail("Unable to validate unknown parameter: "+d)}}return!0},c.prototype._fail=function(a){var b=new d("Invalid input data",a);return this._onFail.fn&&this._onFail.fn.call(this._onFail.ctx,b),!1},b.context.InputDataValidator=c}(a.ADB.va,b),function(a,b){"use strict";function c(a,b){if(!b)throw new Error("Reference to the logger object cannot be NULL");if(this._logger=b,!a)throw new Error("Reference to the context object cannot be NULL");this._context=a}var d=b.model.Report;c.prototype.createReportForItem=function(a){return this._logger.debug(e,"Creating report for item: "+a.eventData.type()),new d(this._context._adobeAnalyticsData,this._context._userData,this._context._serviceProviderData,this._context._sessionData,a)};var e="ah::ReportFactory";b.context.ReportFactory=c}(a.ADB.core,b),function(a,b,c,d){"use strict";function e(a,b){if(!a)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._lastInBandItem=null,this._autoComputedStartupTime=0,this._assetData=null,this._streamData=null,this._qosData=null,this._sessionData=null,this._cuserData=null,this._adobeAnalyticsData=new k,this._serviceProviderData=new l,this._userData=new m,this._isTrackingSessionActive=!1,this._isVideoComplete=!1,this._activeAssetId=null,this._isDestroyed=!1,this._reportFactory=new u(this,this._logger),this._inputDataValidator=new v(function(a){this._logger.error(w,a.getMessage()+" | "+a.getDetails()),this._channel.trigger(new i(y,a))},this),this._stashedChapterData=null,this._stashedAdData=null,this._trackExternalErrors=!0,this._installEventListeners()}function f(){return""+(new Date).getTime()+Math.floor(1e9*Math.random())}var g=c.md5,h=c.ObjectUtils,i=a.Event,j=d.model.SessionDao,k=d.model.AdobeAnalyticsDao,l=d.model.ServiceProviderDao,m=d.model.UserDao,n=d.model.EventDao,o=d.model.AssetDao,p=d.model.StreamDao,q=d.model.QoSDao,r=d.model.AdDao,s=d.model.ChapterDao,t=d.model.TrackItem,u=d.context.ReportFactory,v=d.context.InputDataValidator;e.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._logger.debug(w,"#destroy()"),this._uninstallEventListeners())},e.prototype._onApiAnalyticsStart=function(a){this._logger.debug(w,"#_onApiAnalyticsStart()");var b=a.data;if(this._checkCall("_onApiAnalyticsStart")&&this._inputDataValidator.validateFields(b,["playhead"])){this._userData.visitorId(b.vid),this._userData.analyticsVisitorId(b.aid),this._userData.marketingCloudVisitorId(b.mid),b.customerIDs&&(this._cuserData=b.customerIDs),this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_AA_START,b.playhead,null,b._eventData[D]);c.assetData.adData(null),c.assetData.type(o.TYPE_MAIN_CONTENT),this._cuserData=null,this._sendHit(c)}},e.prototype._onApiAnalyticsAdStart=function(a){this._logger.debug(w,"#_onApiAnalyticsAdStart()");var b=a.data;if(this._checkCall("_onApiAnalyticsAdStart")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_AA_AD_START,b.playhead,null,b._eventData[D]);this._sendHit(c)}},e.prototype._onApiVideoLoad=function(a){this._logger.debug(w,"#_onApiVideoLoad()"),this._resetInternalState(),this._isTrackingSessionActive=!0},e.prototype._onApiVideoUnload=function(a){return this._logger.debug(w,"#_onApiVideoUnload()"),this._isTrackingSessionActive?void(this._isTrackingSessionActive=!1):void this._logger.debug(w,"#_onApiVideoUnload() > No active tracking session.");
},e.prototype._onApiVideoStart=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiVideoStart(id="+b.videoId+", name="+b.videoName+", length="+b.videoLength+", type="+b.streamType+", playerName="+b.playerName+")"),this._checkCall("_onApiVideoStart")&&this._inputDataValidator.validateFields(b,["videoId","streamType","videoLength","playhead","playerName"])){this._adobeAnalyticsData.reportSuiteId(b.rsid),this._adobeAnalyticsData.trackingServer(b.trackingServer),this._adobeAnalyticsData.ssl(Number(b.useSsl)),this._serviceProviderData.ovp(b.ovp),this._serviceProviderData.sdk(b.sdk),this._serviceProviderData.channel(b.channel),this._serviceProviderData.libVersion(b.version),this._serviceProviderData.apiLevel(b.apiLvl),this._activeAssetId=b.videoId,this._serviceProviderData.playerName(b.playerName),this._assetData.videoId(this._activeAssetId),this._assetData.length(b.videoLength),this._assetData.type(o.TYPE_MAIN_CONTENT),this._assetData.publisher(b.publisher),this._assetData.name(b.videoName),this._streamData.type(b.streamType),this._sessionData.sessionId(f()),this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_START,b.playhead,b.metaVideo,b._eventData[D]);this._sendHit(c)}},e.prototype._onApiVideoComplete=function(a){this._logger.debug(w,"#_onApiVideoComplete()");var b=a.data;if(this._checkCall("_onApiVideoComplete")){var c=new t(this,n.EVENT_TYPE_COMPLETE,this._assetData.length(),null,b._eventData[D]);this._sendHit(c),this._isVideoComplete=!0}},e.prototype._onApiPlay=function(a){this._logger.debug(w,"#_onApiPlay()");var b=a.data;if(this._checkCall("_onApiPlay")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_PLAY,b.playhead,null,b._eventData[D]);this._sendHit(c)}},e.prototype._onApiPause=function(a){this._logger.debug(w,"#_onApiPause()");var b=a.data;if(this._checkCall("_onApiPause")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_PAUSE,b.playhead,null,b._eventData[D]);this._sendHit(c)}},e.prototype._onApiBufferStart=function(a){this._logger.debug(w,"#_onApiBufferStart()");var b=a.data;if(this._checkCall("_onApiBufferStart")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_BUFFER,b.playhead,null,b._eventData[D]);this._sendHit(c)}},e.prototype._onApiSeekStart=function(a){this._logger.debug(w,"#_onApiSeekStart()"),this._checkCall("_onApiSeekStart")&&(this._stashedAdData=this._assetData.adData(),this._stashedChapterData=this._assetData.chapterData(),this._assetData.adData(null),this._assetData.type(o.TYPE_MAIN_CONTENT),this._activeAssetId=this._assetData.videoId(),this._assetData.chapterData(null))},e.prototype._onApiSeekComplete=function(a){this._logger.debug(w,"#_onApiSeekComplete()");var b=a.data;if(this._checkCall("_onApiSeekComplete")&&this._inputDataValidator.validateFields(b,["playhead"])){if(b.isInAd){if(!this._inputDataValidator.validateFields(b,["adId","adPosition","podPosition","podPlayerName"]))return;var c=g(this._assetData.videoId())+"_"+b.podPosition;if(this._stashedAdData&&this._stashedAdData.podId()==c&&parseInt(this._stashedAdData.podPosition(),10)==b.adPosition)this._assetData.adData(this._stashedAdData),this._activeAssetId=this._stashedAdData.adId();else if(!this._assetData.adData()){this._activeAssetId=b.adId;var d=new r;d.adId(this._activeAssetId),d.adName(b.adName),d.adLength(b.adLength),d.podId(c),d.resolver(b.podPlayerName),d.podPosition(b.podPosition+""),d.podName(b.podName),d.podOffset(b.podSecond),d.sid(f()),this._assetData.adData(d)}this._assetData.type(o.TYPE_AD)}else this._assetData.adData(null),this._assetData.type(o.TYPE_MAIN_CONTENT),this._activeAssetId=this._assetData.videoId();if(b.isInChapter){if(!this._inputDataValidator.validateFields(b,["chapterPosition","chapterLength","chapterOffset"]))return;if(this._stashedChapterData&&b.chapterPosition==this._stashedChapterData.position())this._assetData.chapterData(this._stashedChapterData);else if(!this._assetData.chapterData()){var e=new s;e.id(g(this._assetData.videoId())+"_"+b.chapterPosition),e.name(b.chapterName),e.length(b.chapterLength),e.position(b.chapterPosition),e.offset(b.chapterOffset),e.sid(f()),this._assetData.chapterData(e)}}else this._assetData.chapterData(null);this._stashedAdData=null,this._stashedChapterData=null}},e.prototype._onApiAdStart=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiAdStart(id="+b.adId+", player_name="+b.podPlayerName+", parent_name="+this._assetData.videoId()+", pod_pos="+b.adPosition+")"),this._checkCall("_onApiAdStart")&&this._inputDataValidator.validateFields(b,["playhead","podPosition","podPlayerName","adId","adPosition"])){this._activeAssetId=b.adId;var c=new r;c.adId(this._activeAssetId),c.adName(b.adName),c.adLength(b.adLength),c.resolver(b.podPlayerName),c.podId(g(this._assetData.videoId())+"_"+b.podPosition),c.podPosition(b.adPosition+""),c.podName(b.podName),c.podOffset(b.podSecond),c.sid(f()),this._assetData.adData(c),this._assetData.type(o.TYPE_AD),this._updateQoSInfo(b);var d=new t(this,n.EVENT_TYPE_START,b.playhead,h.merge(b.metaVideo,b.metaAd),b._eventData[D]);this._sendHit(d)}},e.prototype._onApiAdComplete=function(a){this._logger.debug(w,"#_onApiAdComplete()");var b=a.data;if(this._checkCall("_onApiAdComplete")&&this._inputDataValidator.validateFields(b,["playhead"])){if(this._assetData.type()!=o.TYPE_AD)return void this._logger.warn(w,"#_onApiAdComplete() > Ignoring the ad complete event, because we are no longer in an ad.");this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_COMPLETE,b.playhead,null,b._eventData[D]);this._sendHit(c),this._assetData.adData(null),this._assetData.type(o.TYPE_MAIN_CONTENT),this._activeAssetId=this._assetData.videoId()}},e.prototype._onApiChapterStart=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiChapterStart(name="+b.chapterName+", length="+b.chapterLength+", position="+b.chapterPosition+", chapter_offset="+b.chapterOffset+")"),this._checkCall("_onApiChapterStart")&&this._inputDataValidator.validateFields(b,["playhead","chapterPosition","chapterOffset","chapterLength"])){var c=new s;c.id(g(this._assetData.videoId())+"_"+b.chapterPosition),c.name(b.chapterName),c.length(b.chapterLength),c.position(b.chapterPosition),c.offset(b.chapterOffset),c.sid(f()),this._assetData.chapterData(c),this._updateQoSInfo(b);var d=new t(this,n.EVENT_TYPE_CHAPTER_START,b.playhead,h.merge(b.metaVideo,b.metaChapter),b._eventData[D]);d.assetData.adData(null),d.assetData.type(o.TYPE_MAIN_CONTENT),this._sendHit(d)}},e.prototype._onApiChapterComplete=function(a){this._logger.debug(w,"#_onApiChapterComplete()");var b=a.data;if(this._checkCall("_onApiChapterComplete")&&this._inputDataValidator.validateFields(b,["playhead"])){if(!this._assetData.chapterData())return void this._logger.warn(w,"#_onApiChapterComplete() > Ignoring the chapter complete event, because we are no longer in a chapter.");this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_CHAPTER_COMPLETE,b.playhead,null,b._eventData[D]);c.assetData.adData(null),c.assetData.type(o.TYPE_MAIN_CONTENT),this._sendHit(c),this._assetData.chapterData(null)}},e.prototype._onApiBitrateChange=function(a){this._logger.debug(w,"#_onApiBitrateChange()");var b=a.data;if(this._checkCall("_onApiBitrateChange")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_BITRATE_CHANGE,b.playhead,null,b._eventData[D]);this._sendHit(c)}},e.prototype._onApiTrackError=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiTrackError(source="+b._eventData.source+", err_id="+b._eventData.error_id+")"),!this._isTrackingSessionActive)return void this._logger.warn(w,"#_onApiTrackError() > No active tracking session.");if(this._trackExternalErrors||b._eventData.source===x){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_ERROR,0,null,b._eventData[D]);c.eventData.id(b._eventData.error_id),c.eventData.source(b._eventData.source),this._sendHit(c)}},e.prototype._onApiTrackInternalError=function(a){this._logger.debug(w,"#_onApiTrackInternalError(source="+b.source+", err_id="+b.error_id+")");var b=a.data;this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_ERROR,0);c.eventData.id(b.error_id),c.eventData.source(b.source),this._sendHit(c)},e.prototype._onApiQuantumEnd=function(a){this._logger.debug(w,"#_onApiQuantumEnd(interval="+this._channel.request(B)+")");var b=a.data;this._checkCall("_onApiQuantumEnd")&&this._inputDataValidator.validateFields(b,["playhead"])&&(this._lastInBandItem.eventData.playhead(b.playhead),this._updateQoSInfo(b),this._lastInBandItem.qosData.bitrate(this._qosData.bitrate()),this._lastInBandItem.qosData.fps(this._qosData.fps()),this._lastInBandItem.qosData.droppedFrames(this._qosData.droppedFrames()),this._lastInBandItem.qosData.startupTime(this._qosData.startupTime()),this._sendHit(this._lastInBandItem))},e.prototype._onNetworkCheckStatusComplete=function(a){var b=a.data;this._trackExternalErrors=b[G],this._logger.debug(w,"#_onNetworkCheckStatusComplete(track_ext_err="+this._trackExternalErrors+")")},e.prototype._installEventListeners=function(){this._channel.on(H,this._onApiAnalyticsStart,this),this._channel.on(I,this._onApiAnalyticsAdStart,this),this._channel.on(J,this._onApiVideoLoad,this),this._channel.on(K,this._onApiVideoUnload,this),this._channel.on(L,this._onApiVideoStart,this),this._channel.on(M,this._onApiVideoComplete,this),this._channel.on(N,this._onApiAdStart,this),this._channel.on(O,this._onApiAdComplete,this),this._channel.on(P,this._onApiPlay,this),this._channel.on(Q,this._onApiPause,this),this._channel.on(R,this._onApiBufferStart,this),this._channel.on(S,this._onApiSeekStart,this),this._channel.on(T,this._onApiSeekComplete,this),this._channel.on(U,this._onApiChapterStart,this),this._channel.on(V,this._onApiChapterComplete,this),this._channel.on(Y,this._onApiBitrateChange,this),this._channel.on(W,this._onApiTrackError,this),this._channel.on(X,this._onApiTrackInternalError,this),this._channel.on(Z,this._onApiQuantumEnd,this),this._channel.on(_,this._onNetworkCheckStatusComplete,this),this._channel.reply(C,function(){return this._sessionData&&this._sessionData.sessionId()?this._sessionData.sessionId():null},this)},e.prototype._uninstallEventListeners=function(){this._channel.off(null,null,this)},e.prototype._resetInternalState=function(){this._logger.debug(w,"#_resetInternalState()"),this._isTrackingSessionActive=!1,this._isVideoComplete=!1,this._autoComputedStartupTime=0,this._streamData=new p,this._qosData=new q,this._sessionData=new j,this._assetData=new o,this._cuserData=null,this._stashedAdData=null,this._stashedChapterData=null},e.prototype._updateQoSInfo=function(a){this._qosData.bitrate(a.bitrate||0),this._qosData.fps(a.fps||0),this._qosData.droppedFrames(a.droppedFrames||0),null==a.startupTime||isNaN(a.startupTime)?(this._qosData.startupTime(this._autoComputedStartupTime),this._qosData.isStartupTimeOverridden=!1):(this._qosData.startupTime(a.startupTime),this._qosData.isStartupTimeOverridden=!0)},e.prototype._checkCall=function(a){return this._isTrackingSessionActive?this._isVideoComplete?(this._logger.warn(w,"#"+a+"() > The video content already completed."),!1):!0:(this._logger.warn(w,"#"+a+"() > No active tracking session."),!1)},e.prototype._sendHit=function(a){function b(a){var b=c._reportFactory.createReportForItem(a);b.qosData.isStartupTimeOverridden||b.qosData.startupTime(c._autoComputedStartupTime);var e={};e[E]=b,c._channel.trigger(new i($,e)),(b.eventData.type()==n.EVENT_TYPE_PLAY||b.eventData.type()==n.EVENT_TYPE_BUFFER||b.eventData.type()==n.EVENT_TYPE_START)&&(d={},d[F]=!0,c._channel.command(z,d))}var c=this,d={},e=(new Date).getTime();switch(a.eventData.type()){case n.EVENT_TYPE_START:case n.EVENT_TYPE_PLAY:case n.EVENT_TYPE_PAUSE:case n.EVENT_TYPE_BUFFER:this._lastInBandItem&&(this._lastInBandItem.eventData.duration(e-this._lastInBandItem.eventData.ts()),this._lastInBandItem.eventData.ts(e),this._lastInBandItem.eventData.playhead(a.eventData.playhead()),this._lastInBandItem.qosData.startupTime(a.qosData.startupTime()),this._lastInBandItem.qosData.isStartupTimeOverridden=a.qosData.isStartupTimeOverridden,this._lastInBandItem.eventData.type()==n.EVENT_TYPE_START&&this._lastInBandItem.assetData.type()==o.TYPE_MAIN_CONTENT&&(this._autoComputedStartupTime+=this._lastInBandItem.eventData.duration()),a!=this._lastInBandItem&&b(this._lastInBandItem)),b(a),this._lastInBandItem=a,d={},d[F]=!0,this._channel.command(z,d);break;case n.EVENT_TYPE_COMPLETE:this._lastInBandItem&&(this._lastInBandItem.eventData.duration(e-this._lastInBandItem.eventData.ts()),this._lastInBandItem.eventData.ts(e),this._lastInBandItem.eventData.playhead(a.eventData.playhead()),this._lastInBandItem.qosData.startupTime(a.qosData.startupTime()),this._lastInBandItem.qosData.isStartupTimeOverridden=a.qosData.isStartupTimeOverridden,b(this._lastInBandItem)),b(a),a.assetData.type()==o.TYPE_MAIN_CONTENT?(this._lastInBandItem=null,d={},d[F]=!0,this._channel.command(A,d)):a.assetData.type()==o.TYPE_AD&&(this._lastInBandItem.assetData.adData(null),this._lastInBandItem.assetData.type(o.TYPE_MAIN_CONTENT));break;case n.EVENT_TYPE_CHAPTER_START:case n.EVENT_TYPE_CHAPTER_COMPLETE:this._lastInBandItem&&(this._lastInBandItem.eventData.duration(e-this._lastInBandItem.eventData.ts()),this._lastInBandItem.eventData.ts(e),this._lastInBandItem.eventData.playhead(a.eventData.playhead()),this._lastInBandItem.qosData.startupTime(a.qosData.startupTime()),this._lastInBandItem.qosData.isStartupTimeOverridden=a.qosData.isStartupTimeOverridden,b(this._lastInBandItem)),b(a),this._lastInBandItem&&(this._lastInBandItem.assetData.chapterData(a.eventData.type()==n.EVENT_TYPE_CHAPTER_START?new s(a.assetData.chapterData()):null),this._lastInBandItem.eventData.duration(0),b(this._lastInBandItem));break;default:b(a)}};var w="ah::Context",x="sourceErrorSDK",y="error",z="clock:reporting.resume",A="clock:reporting.pause",B="reporting_interval",C="session_id",D="callback",E="report",F="reset",G="track_external_errors",H="api:aa_start",I="api:aa_ad_start",J="api:video_load",K="api:video_unload",L="api:video_start",M="api:video_complete",N="api:ad_start",O="api:ad_complete",P="api:play",Q="api:pause",R="api:buffer_start",S="api:seek_start",T="api:seek_complete",U="api:chapter_start",V="api:chapter_complete",W="api:track_error",X="api:track_internal_error",Y="api:bitrate_change",Z="api:quantum_end",$="context:report_available",_="net:check_status_complete";d.context.Context=e}(a.ADB.core,a.ADB.va,a.ADB.va.utils,b),function(a){"use strict";function b(a,b){this.trackingServer=a,this.publisher=b,this.ssl=!1,this.ovp=c,this.sdk=c,this.quietMode=!1,this.debugLogging=!1,this.__isPrimetime=!1,this.__psdkVersion=null}var c="unknown";a.AdobeHeartbeatPluginConfig=b}(b),function(a){"use strict";function b(){}b.prototype.onError=function(a){},a.AdobeHeartbeatPluginDelegate=b}(b),function(a,b,c){"use strict";function d(a){d.__super__.constructor.call(this,q),this._radio=new i(this._logger),this._channel=this._radio.channel(v),this._delegate=a,this._context=new l(this._channel,this._logger),this._filter=new m(this._channel,this._logger),this._network=new n(this._channel,this._logger),this._setupDataResolver()}var e=a.Event,f=a.Trigger,g=a.plugin.BasePlugin,h=a.plugin.ParamMapping,i=a.radio.Radio,j=b.ErrorInfo,k=b.Version,l=c.context.Context,m=c.filter.ReportFilter,n=c.network.Network,o=c.clock.Clock,p=c.AdobeHeartbeatPluginConfig;a.extend(d,g),d.prototype.configure=function(a){if(!a)throw new Error("Reference to the configuration data cannot be NULL.");if(!(a instanceof p))throw new Error("Expected config data to be instance of AdobeHeartbeatPluginConfig.");this._config=a,this._config.debugLogging?this._logger.enable():this._logger.disable(),this._logger.debug(this._logTag,"#configure({trackingServer="+this._config.trackingServer+", publisher="+this._config.publisher+", quietMode="+this._config.quietMode+", ssl="+this._config.ssl+"})");var b=this._config.trackingServer+"/settings/",c={};c[U]=this._config.trackingServer,c[V]=b,c[W]=this._config.publisher,c[X]=this._config.quietMode,c[Y]=this._config.ssl,this._channel.trigger(new e(_,c)),this._isConfigured=!0},d.prototype.bootstrap=function(a){d.__super__.bootstrap.call(this,a),this._channel.on(w,this._onError,this),this._clock=new o(this._pluginManager,this._channel,this._logger),this._channel.command(sa),this._channel.trigger(new e(ua)),this._registerCommands(),this._registerBehaviours()},d.prototype._teardown=function(){this._logger.debug(this._logTag,"#_teardown()"),this._radio.shutdown(),this._context.destroy(),this._clock.destroy(),this._filter.destroy(),this._network.destroy()},d.prototype._canProcess=function(){return this._isConfigured?this._errorInfo?(this._logger.error(this._logTag,"_canProcess() > Plugin in ERROR state."),!1):d.__super__._canProcess.call(this):(this._logger.error(this._logTag,"_canProcess() > Plugin not configured."),!1)},d.prototype._cmdAnalyticsError=function(a){this._errorInfo||(this._errorInfo=new j("Internal error","AdobeAnalyticsPlugin is in ERROR state."),this._trigger(w,this._errorInfo),this._delegate&&this._delegate.onError(this._errorInfo))},d.prototype._cmdAnalyticsStart=function(a){this._canProcess()&&this._channel.trigger(new e(Z,a))},d.prototype._cmdAnalyticsAdStart=function(a){this._canProcess()&&this._channel.trigger(new e($,a))},d.prototype._cmdVideoLoad=function(a){this._errorInfo=null,this._canProcess()&&(this._isTrackingSessionActive&&this._channel.trigger(new e(ba,a)),this._isTrackingSessionActive=!1,this._isPaused=!0,this._isSeeking=!1,this._isBuffering=!1,this._channel.trigger(new e(aa,a)),this._isTrackingSessionActive=!0)},d.prototype._cmdVideoUnload=function(a){this._errorInfo=null,this._canProcess()&&(this._channel.trigger(new e(ba,a)),this._isTrackingSessionActive=!1)},d.prototype._cmdVideoStart=function(a){this._canProcess()&&this._channel.trigger(new e(ca,a))},d.prototype._cmdVideoComplete=function(a){this._canProcess()&&this._channel.trigger(new e(da,a))},d.prototype._cmdPlay=function(a){this._canProcess()&&(this._isPaused=!1,this._resumePlaybackIfPossible(a))},d.prototype._cmdPause=function(a){this._canProcess()&&(this._channel.trigger(new e(ha,a)),this._isPaused=!0)},d.prototype._cmdAdStart=function(a){this._canProcess()&&(this._channel.trigger(new e(ea,a)),this._resumePlaybackIfPossible(a))},d.prototype._cmdAdComplete=function(a){this._canProcess()&&(this._channel.trigger(new e(fa,a)),a.isInAdBreak||this._resumePlaybackIfPossible(a))},d.prototype._cmdBufferStart=function(a){this._canProcess()&&(this._channel.trigger(new e(ia,a)),this._isBuffering=!0)},d.prototype._cmdBufferComplete=function(a){this._canProcess()&&(this._isBuffering=!1,this._resumePlaybackIfPossible(a))},d.prototype._cmdSeekStart=function(a){this._canProcess()&&(this._channel.trigger(new e(ja,a)),this._channel.trigger(new e(ha,a)),this._isSeeking=!0)},d.prototype._cmdSeekComplete=function(a){this._canProcess()&&(this._channel.trigger(new e(ka,a)),this._isSeeking=!1,this._resumePlaybackIfPossible(a))},d.prototype._cmdChapterStart=function(a){this._canProcess()&&this._channel.trigger(new e(la,a))},d.prototype._cmdChapterComplete=function(a){this._canProcess()&&this._channel.trigger(new e(ma,a))},d.prototype._cmdBitrateChange=function(a){this._canProcess()&&this._channel.trigger(new e(pa,a))},d.prototype._cmdTrackError=function(a){this._canProcess()&&this._channel.trigger(new e(na,a))},d.prototype._cmdClockReportingTick=function(a){this._canProcess()&&this._channel.trigger(new e(qa,a))},d.prototype._onError=function(a){this._errorInfo=a.data;var b={};b[S]=ra,b[T]=this._errorInfo.getMessage()+"|"+this._errorInfo.getDetails(),this._channel.trigger(new e(oa,b));var c={};c[R]=!0,this._channel.command(ta,c),this._trigger(w,this._errorInfo),this._delegate&&this._delegate.onError(this._errorInfo)},d.prototype._registerCommands=function(){this._pluginManager.comply(this,"handleAnalyticsError",this._cmdAnalyticsError),this._pluginManager.comply(this,"handleAnalyticsStart",this._cmdAnalyticsStart),this._pluginManager.comply(this,"handleAnalyticsAdStart",this._cmdAnalyticsAdStart),this._pluginManager.comply(this,"handleVideoLoad",this._cmdVideoLoad),this._pluginManager.comply(this,"handleVideoUnload",this._cmdVideoUnload),this._pluginManager.comply(this,"handleVideoStart",this._cmdVideoStart),this._pluginManager.comply(this,"handleVideoComplete",this._cmdVideoComplete),this._pluginManager.comply(this,"handlePlay",this._cmdPlay),this._pluginManager.comply(this,"handlePause",this._cmdPause),this._pluginManager.comply(this,"handleAdStart",this._cmdAdStart),this._pluginManager.comply(this,"handleAdComplete",this._cmdAdComplete),this._pluginManager.comply(this,"handleBufferStart",this._cmdBufferStart),this._pluginManager.comply(this,"handleBufferComplete",this._cmdBufferComplete),this._pluginManager.comply(this,"handleSeekStart",this._cmdSeekStart),this._pluginManager.comply(this,"handleSeekComplete",this._cmdSeekComplete),this._pluginManager.comply(this,"handleChapterStart",this._cmdChapterStart),this._pluginManager.comply(this,"handleChapterComplete",this._cmdChapterComplete),this._pluginManager.comply(this,"handleBitrateChange",this._cmdBitrateChange),this._pluginManager.comply(this,"handleTrackError",this._cmdTrackError),this._pluginManager.comply(this,"handleClockReportingTick",this._cmdClockReportingTick)},d.prototype._registerBehaviours=function(){this._pluginManager.registerBehaviour(new f(t,z),this,"handleVideoLoad"),this._pluginManager.registerBehaviour(new f(t,A),this,"handleVideoUnload"),this._pluginManager.registerBehaviour(new f(t,B),this,"handleVideoStart",[new h(t,"video.id","videoId"),new h(t,"video.name","videoName"),new h(t,"video.length","videoLength"),new h(t,"video.playhead","playhead"),new h(t,"video.playerName","playerName"),new h(t,"video.streamType","streamType"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime"),new h(s,"rsid","rsid"),new h(s,"tracking_server","trackingServer"),new h(s,"channel","channel"),new h(s,"meta.video.*","metaVideo"),new h(s,"ssl","useSsl"),new h(r,"publisher","publisher"),new h(r,"sdk","sdk"),new h(r,"ovp","ovp"),new h(r,"version","version"),new h(r,"api_level","apiLvl")]),this._pluginManager.registerBehaviour(new f(t,C),this,"handleVideoComplete",[new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,D),this,"handlePlay",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,E),this,"handlePause",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,F),this,"handleAdStart",[new h(t,"video.playhead","playhead"),new h(t,"ad.id","adId"),new h(t,"ad.name","adName"),new h(t,"ad.length","adLength"),new h(t,"ad.position","adPosition"),new h(t,"pod.name","podName"),new h(t,"pod.playerName","podPlayerName"),new h(t,"pod.position","podPosition"),new h(t,"pod.startTime","podSecond"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime"),new h(s,"meta.video.*","metaVideo"),new h(s,"meta.ad.*","metaAd")]),this._pluginManager.registerBehaviour(new f(t,G),this,"handleAdComplete",[new h(t,"video.playhead","playhead"),new h(t,"ad.isInAdBreak","isInAdBreak"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,H),this,"handleBufferStart",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,I),this,"handleBufferComplete",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,J),this,"handleSeekStart",[new h(t,"video.playhead","playhead")]),this._pluginManager.registerBehaviour(new f(t,K),this,"handleSeekComplete",[new h(t,"video.playhead","playhead"),new h(t,"ad.isInAd","isInAd"),new h(t,"ad.id","adId"),new h(t,"ad.position","adPosition"),new h(t,"pod.playerName","podPlayerName"),new h(t,"pod.position","podPosition"),new h(t,"chapter.isInChapter","isInChapter"),new h(t,"chapter.position","chapterPosition"),new h(t,"chapter.name","chapterName"),new h(t,"chapter.length","chapterLength"),new h(t,"chapter.startTime","chapterOffset"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,L),this,"handleChapterStart",[new h(t,"video.playhead","playhead"),new h(t,"chapter.position","chapterPosition"),new h(t,"chapter.name","chapterName"),new h(t,"chapter.length","chapterLength"),new h(t,"chapter.startTime","chapterOffset"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime"),new h(s,"meta.video.*","metaVideo"),new h(s,"meta.chapter.*","metaChapter")]),this._pluginManager.registerBehaviour(new f(t,M),this,"handleChapterComplete",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,N),this,"handleBitrateChange",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,O),this,"handleTrackError"),this._pluginManager.registerBehaviour(new f(u,Q),this,"handleClockReportingTick",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(s,w),this,"handleAnalyticsError"),this._pluginManager.registerBehaviour(new f(s,x),this,"handleAnalyticsStart",[new h(s,"vid","vid"),new h(s,"aid","aid"),new h(s,"mid","mid"),new h(s,"customerIDs","customerIDs"),new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(s,y),this,"handleAnalyticsAdStart",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")])},d.prototype._setupDataResolver=function(){var a={},b=this;a.version=function(){return k.getVersion()},a.api_level=function(){return k.getApiLevel()},a.tracking_server=function(){return b._config?b._config.trackingServer:null},a.publisher=function(){return b._config?b._config.publisher:null},a.quiet_mode=function(){return b._config?b._config.quietMode:!1},a.ovp=function(){return b._config?b._config.ovp:null},a.sdk=function(){return b._config?b._config.sdk:null},a.is_primetime=function(){return b._config?b._config.__isPrimetime:!1},a.psdk_version=function(){return b._config?b._config.__psdkVersion:null},this._dataResolver=function(b){if(!b||0==b.length)return null;for(var c=null,d=0;d<b.length;d++){var e=b[d];c=c||{},c[e]=a.hasOwnProperty(e)?a[e].call(this):null}return c}},d.prototype._resumePlaybackIfPossible=function(a){this._errorInfo||this._isPaused||this._isSeeking||this._isBuffering||this._channel.trigger(new e(ga,a))};var q="adobe-heartbeat",r=q,s="adobe-analytics",t="player",u="service.clock",v="heartbeat-channel",w="error",x="aa_start",y="sc_ad_start",z="video_load",A="video_unload",B="video_start",C="video_complete",D="play",E="pause",F="ad_start",G="ad_complete",H="buffer_start",I="buffer_complete",J="seek_start",K="seek_complete",L="chapter_start",M="chapter_complete",N="bitrate_change",O="track_error",P="heartbeat.reporting",Q=P+".tick",R="reset",S="source",T="error_id",U="tracking_server",V="check_status_server",W="publisher",X="quiet_mode",Y="ssl",Z="api:aa_start",$="api:aa_ad_start",_="api:config",aa="api:video_load",ba="api:video_unload",ca="api:video_start",da="api:video_complete",ea="api:ad_start",fa="api:ad_complete",ga="api:play",ha="api:pause",ia="api:buffer_start",ja="api:seek_start",ka="api:seek_complete",la="api:chapter_start",ma="api:chapter_complete",na="api:track_error",oa="api:track_internal_error",pa="api:bitrate_change",qa="api:quantum_end",ra="sourceErrorHeartbeat",sa="clock:check_status.resume",ta="clock:reporting.pause",ua="clock:check_status.get_settings";c.AdobeHeartbeatPlugin=d}(a.ADB.core,a.ADB.va,b),a.ADB.va.plugins.ah||(a.ADB.va.plugins.ah=b)}(this);

// AdobeAnalyticsPlugin
!function(a){if("undefined"==typeof b)var b={};!function(a,b){"use strict";function c(a,b){this._onFail={fn:a,ctx:b}}var d=a.ErrorInfo;c.prototype.validateFields=function(a,b){if(!a)return this._fail("Data cannot be null");if(b)for(var c=0;c<b.length;c++){var d=b[c];switch(d){case"videoId":if(!a.hasOwnProperty("videoId"))return this._fail("The ID for the main video must be specified.");if("string"!=typeof a.videoId)return this._fail("The ID for the main video must be a String.");if(""===a.videoId)return this._fail("The ID for the main video cannot be an empty string.");break;case"streamType":if(!a.hasOwnProperty("streamType"))return this._fail("The stream type for the main video must be specified.");if("string"!=typeof a.streamType)return this._fail("The stream type for the main video must be a String.");if(""===a.streamType)return this._fail("The stream type for the main video cannot be an empty string.");break;case"playerName":if(!a.hasOwnProperty("playerName"))return this._fail("The player name for the main video must be specified.");if("string"!=typeof a.playerName)return this._fail("The player name for the main video must be a String.");if(""===a.playerName)return this._fail("The player name for the main video cannot be an empty string.");break;case"videoLength":if(!a.hasOwnProperty("videoLength"))return this._fail("The length of the main video must be specified.");if("number"!=typeof a.videoLength)return this._fail("The length of the main video must be a Number.");if(isNaN(a.videoLength))return this._fail("The length of the main video cannot be NaN.");break;case"podPlayerName":if(!a.hasOwnProperty("podPlayerName"))return this._fail("The player name for the ad-break must be specified.");if("string"!=typeof a.podPlayerName)return this._fail("The player name for the ad-break must be a String.");if(""===a.podPlayerName)return this._fail("The player name for the ad-break cannot be an empty string.");break;case"podPosition":if(!a.hasOwnProperty("podPosition"))return this._fail("Position (index) of the ad-break must be specified.");if("number"!=typeof a.podPosition)return this._fail("Position (index) of the ad-break must be a Number.");if(isNaN(a.podPosition))return this._fail("Position (index) of the ad-break cannot be NaN.");break;case"adId":if(!a.hasOwnProperty("adId"))return this._fail("The ad ID must be specified.");if("string"!=typeof a.adId)return this._fail("The ad ID must be a String.");if(""===a.adId)return this._fail("The ad ID cannot be an empty string.");break;case"adPosition":if(!a.hasOwnProperty("adPosition"))return this._fail("Position (index) of the ad must be specified.");if("number"!=typeof a.adPosition)return this._fail("Position (index) of the ad must be a Number.");if(isNaN(a.adPosition))return this._fail("Position (index) of the ad cannot be NaN.");break;case"adLength":if(!a.hasOwnProperty("adLength"))return this._fail("The length of the ad must be specified.");if("number"!=typeof a.adLength)return this._fail("The length of the ad must be a Number.");if(isNaN(a.adLength))return this._fail("The length of the ad cannot be NaN.");break;default:return this._fail("Unable to validate unknown parameter: "+d)}}return!0},c.prototype._fail=function(a){var b=new d("Invalid input data",a);return this._onFail.fn&&this._onFail.fn.call(this._onFail.ctx,b),!1},b.InputDataValidator=c}(a.ADB.va,b),function(a){"use strict";function b(){this.channel=c,this.debugLogging=!1}var c="";a.AdobeAnalyticsPluginConfig=b}(b),function(a){"use strict";function b(){}b.prototype.onError=function(a){},a.AdobeAnalyticsPluginDelegate=b}(b),function(a,b,c,d){"use strict";function e(a,b){if(e.__super__.constructor.call(this,r),!a)throw new Error("The reference to the AppMeasurement object cannot be NULL.");this._appMeasurement=a,this._delegate=b,this._customMetaKeys=[],this._videoMetadata={},this._adMetadata={},this._chapterMetadata={},this._errorInfo=null,this._workQueue=new k(!0,v),this._inputDataValidator=new q(function(a){this._errorInfo=a,this._logger.error(this._logTag,a.getMessage()+" | "+a.getDetails()),this._trigger(w,a),this._delegate&&this._delegate.onError(this._errorInfo)},this),this._appMeasurement.isReadyToTrack(),this._setupDataResolver()}var f=a.Trigger,g=a.plugin.BasePlugin,h=a.plugin.ParamMapping,i=a.radio.Channel,j=a.radio.Command,k=a.radio.CommandQueue,l=b.ErrorInfo,m=c.md5,n=c.StringUtils,o=c.ObjectUtils,p=d.AdobeAnalyticsPluginConfig,q=d.InputDataValidator;a.extend(e,g),e.prototype.configure=function(a){if(!a)throw new Error("Reference to the configuration data cannot be NULL.");if(!(a instanceof p))throw new Error("Expected config data to be instance of AdobeAnalyticsPluginConfig.");this._config=a,this._config.debugLogging?this._logger.enable():this._logger.disable(),this._logger.debug(this._logTag,"#configure({trackingServer="+this._config.debugLogging+", channel="+this._config.channel+", ssl="+this._appMeasurement.ssl+"})")},e.prototype.bootstrap=function(a){e.__super__.bootstrap.call(this,a),this._registerCommands(),this._registerBehaviours()},e.prototype.setup=function(){this._appMeasurement.isReadyToTrack()?this._onAppMeasurementReady():this._appMeasurement.callbackWhenReadyToTrack(this,this._onAppMeasurementReady,[]),e.__super__.setup.call(this)},e.prototype.setVideoMetadata=function(a){this._videoMetadata=o.clone(a)},e.prototype.setAdMetadata=function(a){this._adMetadata=o.clone(a)},e.prototype.setChapterMetadata=function(a){this._chapterMetadata=o.clone(a)},e.prototype._canProcess=function(){return this._errorInfo?(this._logger.error(this._logTag,"#_canProcess() > In ERROR state."),!1):e.__super__._canProcess.call(this)},e.prototype._cmdVideoLoad=function(a){this._errorInfo=null},e.prototype._cmdVideoStart=function(a){this._logger.debug(this._logTag,"#_cmdVideoStart()"),this._canProcess()&&this._workQueue.addCommand(new j(this._executeOpen,this,[a]))},e.prototype._cmdAdStart=function(a){this._logger.debug(this._logTag,"#_cmdAdStart()"),this._canProcess()&&this._workQueue.addCommand(new j(this._executeOpenAd,this,[a]))},e.prototype._cmdHeartbeatPluginError=function(a){this._errorInfo||(this._errorInfo=new l("Internal error","HeartbeatPlugin is in ERROR state."),this._trigger(w,this._errorInfo),this._delegate&&this._delegate.onError(this._errorInfo))},e.prototype._resetAppMeasurementContextData=function(){delete this._appMeasurement.contextData["a.contentType"],delete this._appMeasurement.contextData["a.media.name"],delete this._appMeasurement.contextData["a.media.friendlyName"],delete this._appMeasurement.contextData["a.media.length"],delete this._appMeasurement.contextData["a.media.playerName"],delete this._appMeasurement.contextData["a.media.channel"],delete this._appMeasurement.contextData["a.media.view"],delete this._appMeasurement.contextData["a.media.ad.name"],delete this._appMeasurement.contextData["a.media.ad.friendlyName"],delete this._appMeasurement.contextData["a.media.ad.podFriendlyName"],delete this._appMeasurement.contextData["a.media.ad.length"],delete this._appMeasurement.contextData["a.media.ad.playerName"],delete this._appMeasurement.contextData["a.media.ad.pod"],delete this._appMeasurement.contextData["a.media.ad.podPosition"],delete this._appMeasurement.contextData["a.media.ad.podSecond"],delete this._appMeasurement.contextData["a.media.ad.view"];for(var a=0;a<this._customMetaKeys.length;a++){var b=this._customMetaKeys[a];delete this._appMeasurement.contextData[b]}this._customMetaKeys=[]},e.prototype._executeOpen=function(a){if(this._logger.debug(this._logTag,"#_executeOpen(id="+a.videoId+", videoName="+a.videoName+", streamType="+a.streamType+", length="+a.videoLength+", playerName="+a.playerName+", channel="+a.channel+", isPrimetime="+a.isPrimetime+")"),this._canProcess()&&this._inputDataValidator.validateFields(a,["videoId","streamType","videoLength","playerName"])){this._resetAppMeasurementContextData();for(var b in a.metaVideo)a.metaVideo.hasOwnProperty(b)&&(this._appMeasurement.contextData[b]=a.metaVideo[b],this._customMetaKeys.push(b));this._appMeasurement.contextData["a.contentType"]=a.streamType,this._appMeasurement.contextData["a.media.name"]=a.videoId,this._appMeasurement.contextData["a.media.friendlyName"]=a.videoName||"",this._appMeasurement.contextData["a.media.length"]=Math.floor(a.videoLength)||"0.0",this._appMeasurement.contextData["a.media.playerName"]=a.playerName,this._appMeasurement.contextData["a.media.channel"]=a.channel||"",this._appMeasurement.contextData["a.media.view"]=!0,this._appMeasurement.pev3=x,this._appMeasurement.pe=a.isPrimetime?A:z,this._appMeasurement.track();var c=this;setTimeout(function(){c._trigger(D,a)},0)}},e.prototype._executeOpenAd=function(a){var b=m(a.videoId)+"_"+a.podPosition;if(this._logger.debug(this._logTag,"#_executeOpenAd(id="+a.adId+", streamType="+a.streamType+", length="+a.adLength+", podPlayerName="+a.podPlayerName+", parentId="+a.videoId+", podId="+b+", parentPodPosition="+a.adPosition+", podSecond="+a.podSecond+")"),this._canProcess()&&this._inputDataValidator.validateFields(a,["videoId","streamType","playerName","adId","adLength","podPlayerName","adPosition"])){a.podSecond=null==a.podSecond||isNaN(a.podSecond)?a.playhead:a.podSecond,this._resetAppMeasurementContextData();var c;for(c in a.metaVideo)a.metaVideo.hasOwnProperty(c)&&(this._appMeasurement.contextData[c]=a.metaVideo[c],this._customMetaKeys.push(c));for(c in a.metaAd)a.metaAd.hasOwnProperty(c)&&(this._appMeasurement.contextData[c]=a.metaAd[c],this._customMetaKeys.push(c));this._appMeasurement.contextData["a.contentType"]=a.streamType,this._appMeasurement.contextData["a.media.name"]=a.videoId,this._appMeasurement.contextData["a.media.playerName"]=a.playerName,this._appMeasurement.contextData["a.media.channel"]=a.channel||"",this._appMeasurement.contextData["a.media.ad.name"]=a.adId,this._appMeasurement.contextData["a.media.ad.friendlyName"]=a.adName||"",this._appMeasurement.contextData["a.media.ad.podFriendlyName"]=a.podName||"",this._appMeasurement.contextData["a.media.ad.length"]=Math.floor(a.adLength)||"0.0",this._appMeasurement.contextData["a.media.ad.playerName"]=a.podPlayerName,this._appMeasurement.contextData["a.media.ad.pod"]=b,this._appMeasurement.contextData["a.media.ad.podPosition"]=Math.floor(a.adPosition)||"0.0",this._appMeasurement.contextData["a.media.ad.podSecond"]=Math.floor(a.podSecond)||"0.0",this._appMeasurement.contextData["a.media.ad.view"]=!0,this._appMeasurement.pev3=y,this._appMeasurement.pe=a.isPrimetime?C:B,this._appMeasurement.track();var d=this;setTimeout(function(){d._trigger(E,a)},0)}},e.prototype._setupDataResolver=function(){var a={},b=this;a.rsid=function(){return b._appMeasurement.account},a.tracking_server=function(){return b._appMeasurement.ssl&&b._appMeasurement.trackingServerSecure?b._appMeasurement.trackingServerSecure:b._appMeasurement.trackingServer},a.ssl=function(){return b._appMeasurement.ssl},a.vid=function(){return b._appMeasurement.visitorID},a.aid=function(){return b._appMeasurement.analyticsVisitorID},a.mid=function(){return b._appMeasurement.marketingCloudVisitorID},a.customerIDs=function(){var a=b._appMeasurement.visitor.getCustomerIDs(),c={};for(var d in a)if(a.hasOwnProperty(d)){var e=a[d];if("object"==typeof e){for(var f in e)e.hasOwnProperty(f)&&("authState"==f?c[d+".as"]=e[f]:c[d+"."+f]=e[f]);c[d+".as"]||(c[d+".as"]="0")}}return c},a.channel=function(){return b._config?b._config.channel:null},a.meta=function(a){var c=a.split(".");if(c.length<2)return null;var d=c.shift();switch(a=c.join("."),d){case"video":return a==i.WILDCARD?b._videoMetadata:b._videoMetadata[a];case"ad":return a==i.WILDCARD?b._adMetadata:b._adMetadata[a];case"chapter":return a==i.WILDCARD?b._chapterMetadata:b._chapterMetadata[a];default:return null}},this._dataResolver=function(b){if(!b||0==b.length)return null;for(var c=null,d=0;d<b.length;d++){var e=b[d];c=c||{},n.startsWith(e,"meta.")?c[e]=a.meta(e.split("meta.")[1]):c[e]=a.hasOwnProperty(e)?a[e].call(this):null}return c}},e.prototype._registerCommands=function(){this._pluginManager.comply(this,"handleVideoLoad",this._cmdVideoLoad),this._pluginManager.comply(this,"handleVideoStart",this._cmdVideoStart),this._pluginManager.comply(this,"handleAdStart",this._cmdAdStart),this._pluginManager.comply(this,"handleHeartbeatPluginError",this._cmdHeartbeatPluginError)},e.prototype._registerBehaviours=function(){this._pluginManager.registerBehaviour(new f(t,F),this,"handleVideoLoad"),this._pluginManager.registerBehaviour(new f(t,G),this,"handleVideoStart",[new h(t,"video.id","videoId"),new h(t,"video.streamType","streamType"),new h(t,"video.name","videoName"),new h(t,"video.length","videoLength"),new h(t,"video.playerName","playerName"),new h(t,"video.streamType","streamType"),new h(u,"is_primetime","isPrimetime"),new h(s,"channel","channel"),new h(s,"meta.video.*","metaVideo")]),this._pluginManager.registerBehaviour(new f(t,H),this,"handleAdStart",[new h(t,"video.id","videoId"),new h(t,"video.streamType","streamType"),new h(t,"video.playhead","playhead"),new h(t,"video.playerName","playerName"),new h(t,"ad.id","adId"),new h(t,"ad.length","adLength"),new h(t,"ad.position","adPosition"),new h(t,"ad.name","adName"),new h(t,"pod.name","podName"),new h(t,"pod.position","podPosition"),new h(t,"pod.playerName","podPlayerName"),new h(t,"pod.startTime","podSecond"),new h(u,"is_primetime","isPrimetime"),new h(s,"channel","channel"),new h(s,"meta.video.*","metaVideo"),new h(s,"meta.ad.*","metaAd")]),this._pluginManager.registerBehaviour(new f(u,w),this,"handleHeartbeatPluginError")},e.prototype._onAppMeasurementReady=function(){this._workQueue.resume()};var r="adobe-analytics",s=r,t="player",u="adobe-heartbeat",v=2e3,w="error",x="video",y="videoAd",z="ms_s",A="msp_s",B="msa_s",C="mspa_s",D="aa_start",E="sc_ad_start",F="video_load",G="video_start",H="ad_start";d.AdobeAnalyticsPlugin=e}(a.ADB.core,a.ADB.va,a.ADB.va.utils,b),a.ADB.va.plugins.aa||(a.ADB.va.plugins.aa=b)}(this);

/**
 * Copyright(c) 2015 Brightcove, Inc.
 * OmnitureHeartbeatPlugin
 * BCGS Adobe Analytics Plugin
 * @author mcarreiro
 * @version 1.0.0
 * v1.0.0: 11/18/15 
 */
(function (window, document) {

    "use strict";
    
    /**
     * Constructor function for plugin. Place all code within.
     */
    var constructor = function (config) {

        // reference to videojs wrapper
        var player = this,
            playerLoadTimer,
            o_player,
            bitrates = [],
            initialLoadComplete = false,
            playerChannel = "none", // grab domain, default to none
            timeToStart = 0,
            options = config.options,
			hasLoadStartFired = false,
			isAutoplay = false,
			
			/**
			 * outputs logging to the browser console if debug mode is enabled
			 */
			o_debug = function(msg) {
				var url = window.location.href;
				
				if (typeof (console) === 'undefined' || !config.debug) {
					return;
				}
				console.log(msg);
			},
            
            /**
             * grabs the top-level domain of the current site for tracking as 'channel' value
             */
            setChannel = function() {
                var pageHost,
                    splitHost,
                    domain;
                
                pageHost = window.location.host;
                splitHost = pageHost.split('.');
                
                // check that we have at least a top-level domain & extension (e.g., ["canada", "com"])
                if (splitHost.length > 2) {
                    domain = splitHost[splitHost.length-2];
                    
                    if (domain === null || typeof(domain) === undefined) { return; }
                    
                    playerChannel = domain.toLowerCase();
                }
            },
            
            /**
             * update only the video-specific properties of configuration object
             */
            updateVideoConfiguration = function() {
                options.QUALITY.TIME_TO_START = timeToStart;
                
                if (o_player) {
                    o_player.setConfigSettings(options);
                }
            },
            
            /**
             * load Adobe player delegates for tracking
             */
            loadPlayer = function() {
                if (initialLoadComplete) { return; }
                
                options.PLAYER = {
                    NAME: player.bcAnalytics.settings.playerName,
                    CHANNEL: playerChannel
                };
                
                if (options.HEARTBEAT) {
                    options.HEARTBEAT.CHANNEL = playerChannel;
                }
                
                o_player = player.omniturePlugin(options, isAutoplay, o_debug);
                
                initialLoadComplete = true;
            },
			
			/**
			 * dispatched when video metadata has loaded into the player
			 */
            onLoadStart = function() {
				hasLoadStartFired = true;
                bitrates = [];
                loadPlayer();
                
                updateVideoConfiguration();
            },
            
            /**
             * when first piece of media begins playback, clear
             * interval timer for 'timeToStart' variable
             */
            onMediaPlay = function() {
				if (!hasLoadStartFired) { isAutoplay = true; }
                clearInterval(playerLoadTimer);
                
                options.QUALITY.TIME_TO_START = timeToStart || 0;
            },
            
			/**
			 * dispatched when jquery is loaded and plugin is ready to be used
			 */
            onjQueryReady = function() {
                setChannel();
				player.on("loadstart", onLoadStart);
                player.one("play", onMediaPlay);
            };
            
            // load jQuery if needed
            if (config.jQuery && window.$ == undefined) {
                var script = document.createElement('script');
                script.onload = onjQueryReady;
                script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/" + config.jQuery + "/jquery.min.js");
                document.head.appendChild(script);
            } else {
                onjQueryReady();
            }
        
        // kick off timer to track 'timeToStart' QoS variable when plugin loads
        playerLoadTimer = setInterval(function() {
            timeToStart++;
        }, 1000);
        
    };

    videojs.plugin("BCGSAdobeAnalyticsPlugin", constructor);

}(window, document));

/**
 * VideoPlayerDelegate implementation for video.js.
 * 
 */
(function(ADB) {
	'use strict';
	
	var o_debug;
	var extend = ADB.core.extend;
	var PlayerDelegate = ADB.va.plugins.videoplayer.VideoPlayerPluginDelegate;
	
	var AD_BREAK_POSITION = 0;
	
	extend(VideoPlayerDelegate, PlayerDelegate);

	function VideoPlayerDelegate(player, provider, debugFunction) {
		VideoPlayerDelegate.__super__.constructor.call(this);

		this._player = player;
		this._currentAd = null;
		this._videoInfo = null;
		this._provider = provider;
		this._adposition = 0;
		this._adCounter = 0;
		o_debug = debugFunction;
	}
	
	VideoPlayerDelegate.prototype.getVideoInfo = function() {
		// use the ADB.va.VideoInfo object prototype
		var VideoInfoClass = ADB.va.plugins.videoplayer.VideoInfo;
		var videoInfo = new VideoInfoClass();
		
		if(!this._provider.isAdPlaying()){
			videoInfo.id = this._player.mediainfo.id;
			videoInfo.name = this._player.mediainfo.name;
			videoInfo.playerName = this._provider._settings.PLAYER.NAME;
			if (this._player.duration() > 0) {
				videoInfo.length = Math.ceil(this._player.duration());
			} else {
				videoInfo.length = this._player.mediainfo.duration;
			}
			videoInfo.streamType = ADB.va.plugins.videoplayer.AssetType.ASSET_TYPE_VOD;
			videoInfo.playhead = this._player.currentTime();
		} else {
			videoInfo.id = this._player.mediainfo.id;
			videoInfo.name = this._player.mediainfo.name;
			videoInfo.playerName = this._provider._settings.PLAYER.NAME;
			videoInfo.length = this._player.ima3.adPlayer.duration();
			videoInfo.streamType = ADB.va.plugins.videoplayer.AssetType.ASSET_TYPE_VOD;
			videoInfo.playhead = Math.round(this._player.ima3.adPlayer.currentTime());
		}
		
		this._videoInfo = videoInfo;
		
		return videoInfo;
	};

	VideoPlayerDelegate.prototype.getAdBreakInfo = function() {
		var AdBreakInfoClass = ADB.va.plugins.videoplayer.AdBreakInfo;
		var adBreakInfo = new AdBreakInfoClass();
		
		if(this._provider.isAdPlaying()){
			adBreakInfo.playerName = this._provider._settings.PLAYER.NAME;
			
			var adType = "";
			if (this._player.ima3.currentAd && this._player.ima3.currentAd.getAdPodInfo){
				this._adposition = this._player.ima3.currentAd.getAdPodInfo().getAdPosition();
				var timeOffset = this._player.ima3.currentAd.getAdPodInfo().getTimeOffset();
				if (timeOffset == 0) {
					adType = "preroll";
				} else if (timeOffset == this._player.duration()) {
					adType = "postroll";
				} else {
					adType = "midroll";
				}
			} else {
				if (Math.floor(this._player.currentTime()) <= 5) {
					adType = "preroll";
				} else if (this._player.currentTime() >= this._player.duration()) {
					adType = "postroll";
				} else {
					adType = "midroll";
				}
			}
			
			adBreakInfo.id = this._player.mediainfo.id;
			adBreakInfo.name = adType;
			adBreakInfo.position = this._adposition;
			adBreakInfo.startTime = this._player.currentTime();
		} else {
			adBreakInfo = null;
		}
		
		return adBreakInfo;
	};

	VideoPlayerDelegate.prototype.getAdInfo = function() {
		var AdInfoClass = ADB.va.plugins.videoplayer.AdInfo;
		var adInfo = new AdInfoClass();
		var currentAd;
		
		if(this._provider.isAdPlaying()){
			this._adCounter = this._adCounter+1;
			if (this._player.ima3) {
				if (this._player.ima3.currentAd) {
					currentAd = this._player.ima3.currentAd.b ? this._player.ima3.currentAd.b : this._player.ima3.currentAd;
					
					adInfo.id = currentAd.id || currentAd.adId;
					adInfo.name = currentAd.title;
					adInfo.length = currentAd.duration;
					adInfo.position = currentAd.adPodInfo.adPosition || this._adCounter;
				} else {
					// if we are unable to grab currentAd information
					adInfo.id = "0";
					adInfo.name = "Ad Break " + this._adCounter;
					adInfo.length = this._player.ima3.adPlayer.duration();
					adInfo.position = this._adCounter;
				}
			}
		} else {
			adInfo = null;
		}
		
		return adInfo;
	};

	VideoPlayerDelegate.prototype.getChapterInfo = function() {
		return null;
	};

	VideoPlayerDelegate.prototype.getQoSInfo = function() {
		var QoSInfoClass = ADB.va.plugins.videoplayer.QoSInfo;
		var qosInfo = new QoSInfoClass();
		var currentRendition,
			averageBitrate = 0;
		
		if (this._player.hls.playlists) {
			currentRendition = this._player.hls.playlists.media();
			
			if (this._provider._bitrates.indexOf(currentRendition.attributes.BANDWIDTH) == -1) {
				this._provider._bitrates.push(currentRendition.attributes.BANDWIDTH);
			}
			
			averageBitrate = this._provider._calculateBitrateAverage();
		}
		
		qosInfo.bitrate = averageBitrate;
		qosInfo.fps = 0;
		qosInfo.droppedFrames = 0;
		qosInfo.startupTime = this._provider._settings.QUALITY.TIME_TO_START;
		
		return qosInfo;
	};

	VideoPlayerDelegate.prototype.onError = function(errorInfo) {
		o_debug("VideoAnalytics error. Message: " + errorInfo.message
				+ ". Details: " + errorInfo.details + ".");
	};

	VideoPlayerDelegate.prototype.onVideoUnloaded = function() {
		// The VideoHeartbeat engine is done with tracking this video playback
		// session.
		// If we no longer need to track further playback from this player, we
		// can now
		// safely destroy the VideoAnalyticsProvider and with it, the
		// VideoHeartbeat instance.
		this._provider.destroy();
	};

	// Export symbols.
	window.VideoPlayerDelegate = VideoPlayerDelegate;
})(window.ADB);

/**
 * VideoPlayerPluginDelegate implementation for video.js.
 * 
 */
(function(ADB) {
    'use strict';

    var VideoPlayerPluginDelegate = ADB.va.plugins.videoplayer.VideoPlayerPluginDelegate;

    function SampleVideoPlayerPluginDelegate(player) {
        this._player = player;
    }

    SampleVideoPlayerPluginDelegate.prototype.getVideoInfo = function() {
        return this._player.getVideoInfo();
    };

    SampleVideoPlayerPluginDelegate.prototype.getAdBreakInfo = function() {
        return this._player.getAdBreakInfo();
    };

    SampleVideoPlayerPluginDelegate.prototype.getAdInfo = function() {
        return this._player.getAdInfo();
    };

    SampleVideoPlayerPluginDelegate.prototype.getChapterInfo = function() {
        return this._player.getChapterInfo();
    };

    SampleVideoPlayerPluginDelegate.prototype.getQoSInfo = function() {
        return this._player.getQoSInfo();
    };

    // Export symbols.
    window.SampleVideoPlayerPluginDelegate = SampleVideoPlayerPluginDelegate;
})(window.ADB);

/**
 * AdobeAnalyticsPluginDelegate implementation for video.js.
 * 
 */
(function(ADB) {
    'use strict';

    var AdobeAnalyticsPluginDelegate = ADB.va.plugins.aa.AdobeAnalyticsPluginDelegate;

    function SampleAdobeAnalyticsPluginDelegate() {
    }

    SampleAdobeAnalyticsPluginDelegate.prototype.onError = function(errorInfo) {
        console.log("AdobeAnalyticsPlugin error: " + errorInfo.getMessage() + " | " + errorInfo.getDetails());
    };

    // Export symbols.
    window.SampleAdobeAnalyticsPluginDelegate = SampleAdobeAnalyticsPluginDelegate;
})(window.ADB);

/**
 * AdobeHeartbeatPluginDelegate implementation for video.js.
 * 
 */
(function(ADB) {
    'use strict';

    var AdobeHeartbeatPluginDelegate = ADB.va.plugins.ah.AdobeHeartbeatPluginDelegate;

    function SampleAdobeHeartbeatPluginDelegate() {
    }

    SampleAdobeHeartbeatPluginDelegate.prototype.onError = function(errorInfo) {
        console.log("AdobeHeartbeatPlugin error: " + errorInfo.getMessage() + " | " + errorInfo.getDetails());
    };

    // Export symbols.
    window.SampleAdobeHeartbeatPluginDelegate = SampleAdobeHeartbeatPluginDelegate;
})(window.ADB);

/**
 * HeartbeatDelegate implementation for video.js.
 * 
 */
(function(ADB) {
    'use strict';

    var HeartbeatDelegate = ADB.va.HeartbeatDelegate;

    function SampleHeartbeatDelegate() {
    }

    SampleHeartbeatDelegate.prototype.onError = function(errorInfo) {
        console.log("Heartbeat error: " + errorInfo.getMessage() + " | " + errorInfo.getDetails());
    };

    // Export symbols.
    window.SampleHeartbeatDelegate = SampleHeartbeatDelegate;
})(window.ADB);

/**
 * VideoAnalyticsProvider
 * 
 */
(function(ADB, VideoPlayerDelegate) {
	'use strict';

	//var VideoHeartbeat = ADB.va.VideoHeartbeat;
	//var AdobeAnalyticsPlugin = ADB.va.plugins.AdobeAnalyticsPlugin;
	//var ConfigData = ADB.va.ConfigData;
	var VideoHeartbeat = ADB.va.Heartbeat;
	var ConfigData = ADB.va.HeartbeatConfig;
	
	var VideoPlayerPlugin = ADB.va.plugins.videoplayer.VideoPlayerPlugin;
    var VideoPlayerPluginConfig = ADB.va.plugins.videoplayer.VideoPlayerPluginConfig;
	
	var AdobeAnalyticsPlugin = ADB.va.plugins.aa.AdobeAnalyticsPlugin;
    var AdobeAnalyticsPluginConfig = ADB.va.plugins.aa.AdobeAnalyticsPluginConfig;
	
	var AdobeHeartbeatPlugin = ADB.va.plugins.ah.AdobeHeartbeatPlugin;
    var AdobeHeartbeatPluginConfig = ADB.va.plugins.ah.AdobeHeartbeatPluginConfig;
	
	var CATEGORY_SUBSTRING = "cat=";
	var o_debug;

	function VideoAnalyticsProvider(appMeasurement, player, settings, isAutoplaying, debugFunction) {
		if (!appMeasurement) {
			throw new Error(
			"Illegal argument. AppMeasurement reference cannot be null.");
		}

		if (!player) {
			throw new Error(
			"Illegal argument. Player reference cannot be null.");
		}
		this._player = player;
		this._settings = settings;
		this._dataMapping = this._settings.CUSTOM_EVENT;
		this._hasLoad = false;
		this._hasVolumeChange = false;
		this._hasInitCustom = false;
		this._hasInitSocialClose = false;
		this._hasSocialOpen = false;
		this._adPlaying = false;
		this._tracked0 = false;
		this._tracked25 = false;
		this._tracked50 = false;
		this._tracked75 = false;
		this._tracked100 = false;
		this._milestoneTime = 0;
		this._errorTrackCode = null;
		this._playheadTime = 0;
		this._eventTimer = null;
		this._videoThatCompleted;
		this._playerLoadTimer = null;
		this._timeToStart = 0;
		this._bitrates = [];
		this._autoplay = isAutoplaying;
		o_debug = debugFunction;

		this._playerDelegate = new VideoPlayerDelegate(this._player, this, o_debug);
		
		this._appMeasurement = appMeasurement;
		
		// Setup the video-player plugin
		this._playerPlugin = new VideoPlayerPlugin(new SampleVideoPlayerPluginDelegate(this._playerDelegate));
        var playerPluginConfig = new VideoPlayerPluginConfig();
        playerPluginConfig.debugLogging = false; // set this to false for production apps.
        this._playerPlugin.configure(playerPluginConfig);
		
        // Setup the AppMeasurement plugin.
        this._aaPlugin = new AdobeAnalyticsPlugin(appMeasurement, new SampleAdobeAnalyticsPluginDelegate());
        var aaPluginConfig = new AdobeAnalyticsPluginConfig();
        aaPluginConfig.channel = settings.HEARTBEAT.CHANNEL;
        aaPluginConfig.debugLogging = false; // set this to false for production apps.
        this._aaPlugin.configure(aaPluginConfig);
		
        // Setup the AdobeHeartbeat plugin.
        this._ahPlugin = new AdobeHeartbeatPlugin(new SampleAdobeHeartbeatPluginDelegate());
        var ahPluginConfig = new AdobeHeartbeatPluginConfig(
            settings.HEARTBEAT.TRACKING_SERVER,
            settings.HEARTBEAT.PUBLISHER);
        ahPluginConfig.ovp = settings.HEARTBEAT.OVP;
        ahPluginConfig.sdk = settings.HEARTBEAT.SDK;
        ahPluginConfig.debugLogging = false; // set this to false for production apps.
        this._ahPlugin.configure(ahPluginConfig);
		
		this._installEventListeners();
	}

	VideoAnalyticsProvider.prototype.destroy = function() {
		o_debug("Player debug: Destroy existing analytics set-up");
		if (this._player) {
			this._videoHeartbeat = null;
			this._uninstallEventListeners();
			this._uninstallAdEventListeners();
			
			this._hasLoad = false;
			this._hasVolumeChange = false;
			this._hasSocialOpen = false;
			this._adPlaying = false;
			this._tracked0 = false;
			this._tracked25 = false;
			this._tracked50 = false;
			this._tracked75 = false;
			this._tracked100 = false;
			this._milestoneTime = 0;
			this._errorTrackCode = null
			this._playheadTime = 0;
			this._bitrates = [];
			this._autoplay = false;
		}
	};
	
	/**
	 * calculates bitrate averages based on the encoding rates pushed to the array
	 * within the playback for each video
	 */
	VideoAnalyticsProvider.prototype._calculateBitrateAverage = function() {
		var bitrateSum = 0;
		var averageBitrate = 0;
		
		for (var bitrate in this._bitrates) {
			bitrateSum += this._bitrates[bitrate];
		}
		
		averageBitrate = Math.round(bitrateSum/this._bitrates.length);
		
		return averageBitrate;
	}
	
	/**
	 * use for setting custom metadata
	 */
	/**VideoAnalyticsProvider.prototype._setCustomMetadata = function() {
        this._aaPlugin.setVideoMetadata({
        });
    };**/

	// ///////
	// Notification handlers
	// ///////
	VideoAnalyticsProvider.prototype._onLoad = function() {
		if (this._videoHeartbeat) {
			o_debug('Player event: VIDEO_LOAD');
			// uncomment for setting custom metadata per video
			//this._setCustomMetadata();
			
			this._playerPlugin.trackVideoLoad();
			this._playerPlugin.trackPlay();
			
			// check error trigger
			if (this._errorTrackCode) {
				this._playerPlugin.trackVideoPlayerError(this._errorTrackCode);
				this._playerPlugin.trackVideoUnload();
				this._errorTrackCode = null;
			}
		}
	};

	VideoAnalyticsProvider.prototype._onUnload = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: VIDEO_UNLOAD');
			
			this._playerPlugin.trackVideoUnload();
		}
		this.destroy();
	};

	VideoAnalyticsProvider.prototype._onPlay = function() {
		if (this._videoHeartbeat) {
			o_debug('Player event: PLAY');
			
			this._playerPlugin.trackPlay();
		}
	};

	VideoAnalyticsProvider.prototype._onPause = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: PAUSE');
			this._playerPlugin.trackPause();
		}
	};

	VideoAnalyticsProvider.prototype._onSeekStart = function(e) {
		o_debug('Player event: SEEK_START');
		this._playerPlugin.trackSeekStart();
	};

	VideoAnalyticsProvider.prototype._onSeekComplete = function(e) {
		o_debug('Player event: SEEK_COMPLETE');
		this._playerPlugin.trackSeekComplete();
	};
	
	VideoAnalyticsProvider.prototype._onBufferStart = function(e) {
		o_debug('Player event: BUFFER_START');
		var that = this;
		
		if (this._hasLoad) {
			this._player.one('playing', function(e) {
				o_debug('Player event: BUFFER_COMPLETE');
				
				that._playerPlugin.trackBufferComplete();
			});
			
			this._playerPlugin.trackBufferStart();
		}
	};
	
	VideoAnalyticsProvider.prototype._onBitrateChange = function(e) {
		o_debug('Player event: BITRATE_CHANGE');
		this._playerPlugin.trackBitrateChange();
	};

	VideoAnalyticsProvider.prototype._onChapterStart = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: CHAPTER_START');
			this._playerPlugin.trackChapterStart();
		}
	};

	VideoAnalyticsProvider.prototype._onChapterComplete = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: CHAPTER_COMPLETE');
			this._playerPlugin.trackChapterComplete();
		}
	};

	VideoAnalyticsProvider.prototype._onComplete = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: COMPLETE');
			this._playerPlugin.trackComplete();
		}
	};
	
	/**
	 * track proper Brightcove Video or Player Error Code
	 */
	VideoAnalyticsProvider.prototype._onError = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: ERROR');
			var TEXT_TO_FIND = "Error Code: ",
				code,
				errCode,
				codeToTrack,
				that;
			
			that = this;
			
			this._playerPlugin.trackPause();
			
			setTimeout(function() {
				code = e.target.innerText.split("\n");
				
				for (var i in code) {
					if (code[i].indexOf(TEXT_TO_FIND) != -1) {
						errCode = code[i].substr(code.indexOf(TEXT_TO_FIND) + TEXT_TO_FIND.length + 1);
					}
				}
				
				switch (errCode) {
					case "PLAYER_ERR_NO_SRC":
						codeToTrack = -1;
						break;
					case "PLAYER_ERR_TIMEOUT":
						codeToTrack = -2;
						break;
					case "MEDIA_ERR_ABORTED":
						codeToTrack = 1;
						break;
					case "MEDIA_ERR_NETWORK":
						codeToTrack = 2;
						break;
					case "MEDIA_ERR_DECODE":
						codeToTrack = 3;
						break;
					case "MEDIA_ERR_SRC_NOT_SUPPORTED":
						codeToTrack = 4;
						break;
					case "MEDIA_ERR_ENCRYPTED":
						codeToTrack = 5;
						break;
					case "MEDIA_ERR_UNKNOWN":
						codeToTrack = "unknown";
						break;
					default:
						codeToTrack = "unknown";
						break;
				}
				
				if (that._hasLoad) {
					that._playerPlugin.trackVideoPlayerError(codeToTrack);
					that._playerPlugin.trackVideoUnload();
				} else {
					that._errorTrackCode = codeToTrack;
				}
			}, 1000);
		}
	};
	
	VideoAnalyticsProvider.prototype._onAdStart = function(e) {
		if (this === undefined) { return; }
		if (this._videoHeartbeat) {
			o_debug('Player event: AD_START');
			this._playerPlugin.trackAdStart();
		}
	};
	
	VideoAnalyticsProvider.prototype._onAdError = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: IMA3_AD_ERROR');
			this._playerPlugin.trackAdComplete();
		}
	};	

	VideoAnalyticsProvider.prototype._onAdComplete = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: AD_COMPLETE');
			this._playerPlugin.trackAdComplete();
		}
	};

	VideoAnalyticsProvider.prototype._onAdHbPlay = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: AD HEARTBEAT PLAY');
			this._playerPlugin.trackBufferComplete();
			this._playerPlugin.trackPlay();
		}
	};
	
	VideoAnalyticsProvider.prototype._onAdHbTimeUpdate = function(e) {
		if (this._adPlaying || this._player.ads.state != "ad-playback") { return; }
		o_debug('Player event: AD_START');
		this._adPlaying = true;
		this._playerPlugin.trackAdStart();
	};

	VideoAnalyticsProvider.prototype._onAdHbPause = function(e) {
		if (this._videoHeartbeat) {
			o_debug('Player event: AD HEARTBEAT PAUSE');
			this._playerPlugin.trackPause();
		}
	};


	// ///////
	// Tracking custom event
	// ///////

	VideoAnalyticsProvider.prototype._onTrackMilestone = function(milestone) {
		var timePlayed = Math.floor(this._player.currentTime() - this._milestoneTime);
		this._milestoneTime = Math.floor(this._player.currentTime());
		
		if (this._dataMapping.bc_data_mapping === undefined || this._dataMapping.disable) { return; };
		
		var my_eVar = this._dataMapping.bc_data_mapping.name.split(",");
		this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_data_mapping.contentType + "," + my_eVar[0] + "," + this._dataMapping.bc_data_mapping.segment + ",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
		this._appMeasurement[my_eVar[0]]  = this._player.src();
		this._appMeasurement[this._dataMapping.bc_data_mapping.contentType]  = 'video';
		switch(milestone) {
		case 0:
			o_debug('Player event: TrackMilestone 0');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.view;
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.view;
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '1:M:0-25';
			break;
		case 25:
			o_debug('Player event: TrackMilestone 25');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.timePlayed + '=' + timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['25'];
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['25'];
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '1:M:0-25';
			break;
		case 50:
			o_debug('Player event: TrackMilestone 50');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.timePlayed + '=' + timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['50'];
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['50'];
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '2:M:25-50';
			break;
		case 75:
			o_debug('Player event: TrackMilestone 75');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.timePlayed + '=' + timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['75'];
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.milestones['75'];
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '3:M:50-75';
			break;
		case 100:
			o_debug('Player event: TrackMilestone 100');
			this._appMeasurement.events = this._dataMapping.bc_data_mapping.timePlayed + '=' + timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.complete;
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_data_mapping.timePlayed + ',' + this._dataMapping.bc_data_mapping.segmentView + ',' + this._dataMapping.bc_data_mapping.complete;
			this._appMeasurement[this._dataMapping.bc_data_mapping.segment]  = '4:M:75-100';
			break;
		default:
			return;
		}
		this._appMeasurement.tl(true, "o", "bc_milestone");
	};

	VideoAnalyticsProvider.prototype._onVolumeChange = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: VOLUME_CHANGE');
			// Custom event
			var isVolumeMuted = this._player.muted();
			
			this._appMeasurement.events = this._dataMapping.bc_volumechange.event;
			if (isVolumeMuted){
				this._appMeasurement[this._dataMapping.bc_volumechange.evar] = '0.00';
			} else {
				this._appMeasurement[this._dataMapping.bc_volumechange.evar] = this._player.volume().toFixed(2);
			}			
			this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_volumechange.evar + ",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_volumechange.event;
			this._appMeasurement.tl(true, "bc", "bc_volumechange");
		}
	};	

	VideoAnalyticsProvider.prototype._onAdPause = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: AD_PAUSE');
			// Custom event
			this._appMeasurement.events = this._dataMapping.bc_ad_pause.event;		
			if (this._adplayer && this._adplayer.adPlayer.currentTime){
				this._appMeasurement[this._dataMapping.bc_ad_pause.evar]  = this._adplayer.adPlayer.currentTime();
			} else {
				this._appMeasurement[this._dataMapping.bc_ad_pause.evar]  = 0;
			}
			this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_ad_pause.evar +",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType,contextData.a.media.ad.friendlyName,contextData.a.media.ad.podFriendlyName,contextData.a.media.ad.length,contextData.a.media.ad.podPosition";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_ad_pause.event;
			this._appMeasurement.tl(true, "bc", "bc_ad_pause");
		}
	};

	VideoAnalyticsProvider.prototype._onAdResumed = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: AD_RESUMED');
			// Custom event
			this._appMeasurement.events = this._dataMapping.bc_ad_resumed.event;
			this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_ad_pause.evar + ",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType,contextData.a.media.ad.friendlyName,contextData.a.media.ad.podFriendlyName,contextData.a.media.ad.length,contextData.a.media.ad.podPosition";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_ad_resumed.event;
			this._appMeasurement.tl(true, "o", "bc_ad_resumed");
		}
	};

	VideoAnalyticsProvider.prototype._onAdClick = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: AD_CLICK');
			// Custom event
			var my_eVar = this._dataMapping.bc_ad_click.evar.split(",");
			this._appMeasurement.events = this._dataMapping.bc_ad_click.event;
			if (this._adplayer && this._adplayer.adPlayer.currentTime){
				this._appMeasurement[my_eVar[0]] = this._adplayer.adPlayer.currentTime();
			} else {
				this._appMeasurement[my_eVar[0]] = 0;
			}
			this._appMeasurement[my_eVar[1]] = this._adplayer.currentAd.getClickThroughUrl();
			this._appMeasurement.linkTrackVars = "events," + this._dataMapping.bc_ad_click.evar + ",contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType,contextData.a.media.ad.friendlyName,contextData.a.media.ad.podFriendlyName,contextData.a.media.ad.length,contextData.a.media.ad.podPosition";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_ad_click.event;
			this._appMeasurement.tl(true, "o", "bc_ad_click");
		}
	};

	VideoAnalyticsProvider.prototype._onFullscreenEnter = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: FULLSCREEN_ENTER');
			this._appMeasurement.events = this._dataMapping.bc_fullscreen_enter.event;
			this._appMeasurement.linkTrackVars = "events,contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_fullscreen_enter.event;
			this._appMeasurement.tl(true, "o", "bc_fullscreen_enter");
		}
	};

	VideoAnalyticsProvider.prototype._onFullscreenExit = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: FULLSCREEN_EXIT');
			this._appMeasurement.events = this._dataMapping.bc_fullscreen_exit.event;
			this._appMeasurement.linkTrackVars = "events,contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_fullscreen_exit.event;
			this._appMeasurement.tl(true, "o", "bc_fullscreen_exit");
		}
	};

	VideoAnalyticsProvider.prototype._onSocialOpened = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: SOCIAL_OPENED');
			this._appMeasurement.events = this._dataMapping.bc_social_opened.event;
			this._appMeasurement.linkTrackVars = "events,contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents =this._dataMapping.bc_social_opened.event;
			this._appMeasurement.tl(true, "o", "bc_social_opened");
		}
	};

	VideoAnalyticsProvider.prototype._onSocialClosed = function(e) {
		if (!this._dataMapping.disable) {
			o_debug('Player event: SOCIAL_CLOSED');
			this._appMeasurement.events = this._dataMapping.bc_social_closed.event;
			this._appMeasurement.linkTrackVars = "events,contextData.a.media.name,contextData.a.media.playerName,contextData.a.media.channel,contextData.a.contentType";
			this._appMeasurement.linkTrackEvents = this._dataMapping.bc_social_closed.event;
			this._appMeasurement.tl(true, "o", "bc_social_closed");
		}
	};

	// ///////
	// Private helper functions
	// ///////

	VideoAnalyticsProvider.prototype.isAdPlaying = function() {
		return this._adPlaying;
	};

	VideoAnalyticsProvider.prototype.playheadTime = function() {
		return this._playheadTime;
	};


	VideoAnalyticsProvider.prototype.resetTrackValue = function() {
		// reset event
		this._appMeasurement.events  = '';
		this._appMeasurement.linkTrackVars = '';
		this._appMeasurement.linkTrackEvents = '';
		this._appMeasurement.clearVars();
	};

	VideoAnalyticsProvider.prototype._setupAutoTracking = function() {
		this._appMeasurement.loadModule("Media");
		this._appMeasurement.Media.autoTrack = true;
		this._appMeasurement.Media.trackVars = "events," 
			+ this._dataMapping.bc_data_mapping.contentType + ','
			+ this._dataMapping.bc_data_mapping.name + ','
			+ this._dataMapping.bc_data_mapping.segment;
		this._appMeasurement.Media.trackEvents = this._dataMapping.bc_data_mapping.view + ','
		+ this._dataMapping.bc_data_mapping.segmentView + ','
		+ this._dataMapping.bc_data_mapping.timePlayed + ','
		+ this._dataMapping.bc_data_mapping.milestones['25'] + ','
		+ this._dataMapping.bc_data_mapping.milestones['50'] + ','
		+ this._dataMapping.bc_data_mapping.milestones['75'] + ','
		+ this._dataMapping.bc_data_mapping.complete;
		this._appMeasurement.Media.trackMilestones = "25,50,75";
		this._appMeasurement.Media.playerName = this._settings.PLAYER.NAME;
		this._appMeasurement.Media.segmentByMilestones = true;
		this._appMeasurement.Media.trackUsingContextData = true;
		this._appMeasurement.Media.contextDataMapping = {
				"a.media.name" : this._dataMapping.bc_data_mapping.name,
				"a.media.segment" : this._dataMapping.bc_data_mapping.segment,
				"a.contentType" : this._dataMapping.bc_data_mapping.contentType,
				"a.media.timePlayed" : this._dataMapping.bc_data_mapping.timePlayed,
				"a.media.view" : this._dataMapping.bc_data_mapping.view,
				"a.media.segmentView" : this._dataMapping.bc_data_mapping.segmentView,
				"a.media.complete" : this._dataMapping.bc_data_mapping.complete,
				"a.media.milestones" : this._dataMapping.bc_data_mapping.milestones,
		};
	};
	
	// sets up video heartbeat analytics
	// MUST wait until video metadata has loaded
	VideoAnalyticsProvider.prototype._setupVideoHeartbeat = function() {
		o_debug("Player debug: _setupVideoHeartbeat()");
		
		if (!this._settings.HEARTBEAT.DISABLE) {
			var configData = new ConfigData(this._settings.HEARTBEAT.TRACKING_SERVER,
				this._settings.HEARTBEAT.JOB_ID, this._settings.HEARTBEAT.PUBLISHER);
	  
			configData.ovp = this._settings.HEARTBEAT.OVP;
			configData.sdk = this._settings.HEARTBEAT.SDK;
			configData.channel = this._settings.HEARTBEAT.CHANNEL;
	  
			// Comment or explicitly set this to false for production sites.
			configData.debugLogging = this._settings.HEARTBEAT.DEBUG_LOGGING;
			
			this._videoHeartbeat = new VideoHeartbeat(new SampleHeartbeatDelegate(),
									[this._playerPlugin, this._aaPlugin, this._ahPlugin]);
			
			this._videoHeartbeat.configure(configData);
		}
	};

	VideoAnalyticsProvider.prototype._initFirstLoad = function() {
		o_debug("Player Debug: Ready to Set-up Analytics Sessions");
		//this._hasLoad = true;
		this._setupVideoHeartbeat();
		this._onLoad();
		/**if (!this._hasInitCustom) {
			this._initSocial();
			this._initVolumeEvent();
			this._hasInitCustom = true;
		}**/
	};
	
	VideoAnalyticsProvider.prototype._playHandler = function(evt) {
		var that = this;
		
		// set up the analytics when a video begins playback if it has not yet begun
		if (!this._hasLoad && this._player.currentTime() == 0) {
			o_debug("Player Debug: Replay existing video");
			this._hasLoad = true;
			
			// require a timeout for instances where new metadata needs to be fetched
			this._eventTimer = setTimeout(function() {
				o_debug("Player Debug: Set-up Analytics");
				
				// reset QoS startup_time variable for playlists
				if (that._playerLoadTimer && (that._videoThatCompleted != that._player.mediainfo.id)) {
					clearInterval(that._playerLoadTimer);
					that._settings.QUALITY.TIME_TO_START = that._timeToStart;
					that._playerLoadTimer = null;
				}
				
				that._initFirstLoad(); // kicking off set up and _onLoad
			}, 1000);
		}
		
		// resume analytics from pause
		if (!this._adPlaying && this._hasLoad){
			o_debug("Player Debug: Resuming Analytics from Pause Event");
			
			this._onPlay();
		}
	};
	
	VideoAnalyticsProvider.prototype._installEventListeners = function() {
		var that = this;
		
		o_debug("Player Debug: Install Event Listeners");
		
		// We register as observers to various VideoPlayer events.
		// HTML events
		this._player.on('play', this._playHandler.bind(this));
		
		if (this._autoplay) { this._playHandler(); }
		
		// pause analytics
		this._player.on('pause', function(evt) {
			if (!that._adPlaying){
				that._onPause(evt);
			}
		});
		
		// complete and unload analytics
		this._player.on('ended', function(evt) {
			that._timeToStart = 0;
			that._videoThatCompleted = that._player.mediainfo.id;
			
			that._playerLoadTimer = setInterval(function() {
                that._timeToStart++;
            }, 1000);
			
			if (!that._adPlaying){
			  if (!that._tracked100){
			    that._tracked100 = true;
			    that._onTrackMilestone(100);
			  }
				that._onComplete(evt);
				that._onUnload(evt);
			}
		});
		
		/**
		 * do not track these for new implementation
		 */
		this._player.on('seeking', function(evt) {
			if (that._hasLoad) {
				that._onSeekStart(evt);
			}
		});
		this._player.on('seeked', function(evt) {
			if (that._hasLoad) {
				that._onSeekComplete(evt);
			}
		});
		this._player.on('volumechange', function(evt) {
			that._hasVolumeChange = true;
		});
		this._player.on('error', function(evt) {
			that._onError(evt);
		});

		this._player.on('adsready', function(evt) {
			o_debug('Player event: adsready');
			
			that._initAdManager(evt);
		});
		
		/**this._player.on('adstart', function(evt) {
			o_debug('Player event: adstart');
			that._adPlaying = true;
			that.resetTrackValue();
			that._player.ima3.adPlayer.one('timeupdate', function(evt){
				that._onAdHbTimeUpdate();
			});
			that._onAdStart(evt);
		});**/
		
		if (this._player.ima3.adPlayer) {
			this._player.ima3.adPlayer.on('timeupdate', function(evt){
				that._onAdHbTimeUpdate();
			});
		}
		
		this._player.on('adend', function(evt) {
			o_debug('Player event: adend');
			that._adPlaying = false;
			that._onAdComplete(evt);			
			that._uninstallAdEventListeners();
		});
		
		this._player.on('fullscreenchange', function(evt) {
			if (that._player.isFullScreen()) {
				that._onFullscreenEnter(evt);
			} else {
				that._onFullscreenExit(evt);
			}
		});
		
		this._player.on('waiting', function(evt) {
			if (that._hasLoad) {
				that._onBufferStart(evt);
			}
		});
		
		/**
		 * will dispatch only for Flash tech/HLS video
		 */
		this._player.on('ratechange', function(evt) {
			that._onBitrateChange(evt);
		});
		
		// Tracking mistore
		this._player.on('timeupdate', function(evt) {
			if (that._adPlaying) {
				return;
			}
			that._playheadTime = that._player.currentTime();
			var _duration = that._player.duration();
			if (!_duration && that._player.mediainfo){
				_duration = that._player.mediainfo.duration;
			}
			if (!that._tracked0  && that._playheadTime > 0){
				that._tracked0 = true;
				that._onTrackMilestone(0);
			}
			if (!that._tracked25 && that._playheadTime > _duration*25/100){
				that._tracked25 = true;
				that._onTrackMilestone(25);
			}
			if (!that._tracked50 && that._playheadTime > _duration*50/100){
				that._tracked50 = true;
				that._onTrackMilestone(50);
			}
			if (!that._tracked75 && that._playheadTime > _duration*75/100){
				that._tracked75 = true;
				that._onTrackMilestone(75);
			}
		});
		
		if (!this._hasInitCustom && !this._dataMapping.disable) {
			this._initSocial();
			this._initVolumeEvent();
			this._hasInitCustom = true;
		}
	};
	
	VideoAnalyticsProvider.prototype._uninstallEventListeners = function() {
		var that = this;
		
		o_debug("Player Debug: Uninstall Event Listeners");
		
		// We register as observers to various VideoPlayer events.
		// HTML events
		this._player.off('play', this._playHandler.bind(this));
		//this._player.off('play', function(evt) {});
		this._player.off('pause', function(evt) {});
		this._player.off('ended', function(evt) {});
		this._player.off('seeking', function(evt) {});
		this._player.off('seeked', function(evt) {});
		this._player.off('volumechange', function(evt) {});
		this._player.off('error', function(evt) {});

		this._player.off('adsready', function(evt) {});
		this._player.off('adstart', function(evt) {});
		this._player.off('adend', function(evt) {});

		// Brightcove-specific event
		this._player.off('fullscreenchange', function(evt) {});
		
		this._player.off('waiting', function(evt) {});
		
		this._player.off('ratechange', function(evt) {});
		this._player.off('timeupdate', function(evt) {});
	};

	VideoAnalyticsProvider.prototype._initAdManager = function(e) {
		if (this._player && this._player.ima3) {
			this._adplayer = this._player.ima3;
			this._installAdEventListeners();
		}
	};

	VideoAnalyticsProvider.prototype._installAdEventListeners = function() {
		var that = this;
		if (!this._adplayer.adsManager)
			return;
		
		if (this._player.ima3.adPlayer) {
			this._player.ima3.adPlayer.on('play', function(evt){
				that._onAdHbPlay(evt);
			});
			
			this._player.ima3.adPlayer.on('pause', function(evt){
				that._onAdHbPause(evt);
				that._onAdPause(evt);
			});
			
			this._player.on('ima3error', function(evt) {
				o_debug('Player event: IMA3 Ad Error');
				that._adPlaying = false;
				that._onAdError(evt);
				that._uninstallAdEventListeners();
			});
			this._player.on('ima3-ad-error', function(evt) {
				o_debug('Player event: IMA3 Ad Error');
				that._adPlaying = false;
				that._onAdError(evt);
				that._uninstallAdEventListeners();
			});
			this._player.on('ima3-ad-error', function(evt) {
				that._adPlaying = false;
				that._uninstallAdEventListeners();
			});
		}
		
		/**
		 * google.ima.AdEvent do not currently exist in plugin
		 **/
		/**this._adplayer.adsManager.addEventListener(
				google.ima.AdEvent.Type.STARTED, function(evt) {
					that._onAdHbPlay(evt);
				}, false, this);		
		this._adplayer.adsManager.addEventListener(
				google.ima.AdEvent.Type.PAUSED, function(evt) {
					that._onAdHbPause(evt);
					that._onAdPause(evt);
				}, false, this);
		this._adplayer.adsManager.addEventListener(
				google.ima.AdEvent.Type.RESUMED, function(evt) {
					that._onAdHbPlay(evt);
					that._onAdResumed(evt);
				}, false, this);
		this._adplayer.adsManager.addEventListener(
				google.ima.AdEvent.Type.CLICK, function(evt) {
					that._onAdClick(evt);
				}, false, this);**/
	};

	VideoAnalyticsProvider.prototype._uninstallAdEventListeners = function() {
		if (this._player.ima3.adPlayer) {
			this._player.ima3.adPlayer.off('play', function(evt){});
			this._player.ima3.adPlayer.off('pause', function(evt){});
			this._player.off('ima3error', function(evt) {});
			this._player.off('ima3-ad-error', function(evt) {});
		}
		
		/**
		 * google.ima.AdEvent do not currently exist in plugin
		 **/
		/**if (this._adplayer && this._adplayer.adsManager){
			this._adplayer.adsManager.removeEventListener(
					google.ima.AdEvent.Type.STARTED, function(evt) {
					}, false, this);
			this._adplayer.adsManager.removeEventListener(
					google.ima.AdEvent.Type.PAUSED, function(evt) {
					}, false, this);
			this._adplayer.adsManager.removeEventListener(
					google.ima.AdEvent.Type.RESUMED, function(evt) {
					}, false, this);
			this._adplayer.adsManager.removeEventListener(
					google.ima.AdEvent.Type.CLICK, function(evt) {
					}, false, this);
		}**/
	};
	VideoAnalyticsProvider.prototype._initVolumeEvent = function() {
		var that = this;
		
		if (this._player.controlBar.volumeMenuButton) {
			this._volumeMenuButton = this._player.controlBar.volumeMenuButton;
			this._volumeMenuButton.on('click', function(evt) {
				that._checkVolumeChange();
			});
			this._volumeMenuButton.on('touchend', function(evt) {
				that._checkVolumeChange();
			});
		}

		if (document.addEventListener) {
			document.addEventListener('click', function(evt) {
				that._checkVolumeChange();
			});			
		} else if (document.on) {
			document.on('click', function(evt) {
				that._checkVolumeChange();
			});	
		} else if (document.attachEvent) {
			document.attachEvent('onclick', function(evt) {
				that._checkVolumeChange();
			});
		}

		if (document.addEventListener) {
			document.addEventListener('mouseup', function(evt) {
				that._checkVolumeChange();
			});			
		} else if (document.on) {
			document.on('mouseup', function(evt) {
				that._checkVolumeChange();
			});	
		} else if (document.attachEvent) {
			document.attachEvent('onmouseup', function(evt) {
				that._checkVolumeChange();
			});
		}
		if (document.addEventListener) {
			document.addEventListener('touchend', function(evt) {
				if (that._hasVolumeChange){
					that._hasVolumeChange = false;
					that._onVolumeChange(evt);
				}
			});			
		} else if (document.on) {
			document.on('touchend', function(evt) {
				if (that._hasVolumeChange){
					that._hasVolumeChange = false;
					that._onVolumeChange(evt);
				}
			});	
		} else if (document.attachEvent) {
			document.attachEvent('ontouchend', function(evt) {
				if (that._hasVolumeChange){
					that._hasVolumeChange = false;
					that._onVolumeChange(evt);
				}
			});
		}
	};
	VideoAnalyticsProvider.prototype._initSocial = function() {
		var that = this;
		
		if (this._player.controlBar.socialButton) {
			this._socialButton = this._player.controlBar.socialButton;
			this._socialButton.on('click', function(evt) {
				that._onSocialOpened(evt);
				that._hasSocialOpen = true;
				if (!that._hasInitSocialClose){
					that._initSocialClose();
					that._hasInitSocialClose = true;
				}
			});
			this._socialButton.on('touchend', function(evt) {
				that._onSocialOpened(evt);
				that._hasSocialOpen = true;
				if (!that._hasInitSocialClose){
					that._initSocialClose();
					that._hasInitSocialClose = true;
				}
			});
		}
	};
	VideoAnalyticsProvider.prototype._initSocialClose = function() {
		var that = this;
		
		if (this._player.socialOverlay
				&& this._player.socialOverlay.closeButton) {
			this._socialCloseButton = this._player.socialOverlay.closeButton;
			if (this._socialCloseButton.addEventListener) {
				this._socialCloseButton.addEventListener('click', function(evt) {
					that._checkSocialClose(evt);
				});			
			} else if (this._socialCloseButton.on) {
				this._socialCloseButton.on('click', function(evt) {
					that._checkSocialClose(evt);
				});	
			} else if (this._socialCloseButton.attachEvent) {
				this._socialCloseButton.attachEvent('onclick', function(evt) {
					that._checkSocialClose(evt);
				});
			}
		}
		// Check esc key down
		document.onkeydown = function (evt)
		{
			if (!evt) evt = event;
			if (evt.keyCode == 27){
				that._checkSocialClose(evt);			
			}
		}
	};
	VideoAnalyticsProvider.prototype._checkSocialClose = function(evt) {
		var that = this;
		if (this._hasSocialOpen){
			setTimeout(function(){
				if (that._player.socialOverlay.el_.offsetParent === null){
					that._onSocialClosed(evt);
					that._hasSocialOpen = false
				} 
			}, 500);
		}	
	}
	VideoAnalyticsProvider.prototype._checkVolumeChange = function(evt) {
		var that = this;
		setTimeout(function(){
			if (that._hasVolumeChange){
				that._hasVolumeChange = false;
				that._onVolumeChange(evt);
			}
		}, 500);
	}

	// Export symbols.
	window.VideoAnalyticsProvider = VideoAnalyticsProvider;
})(window.ADB, window.VideoPlayerDelegate);

/** ************************ PLUGINS SECTION ************************ */
/**
 * Omniture analytic plugin for video.js.
 * 
 */
(function(window, document, vjs, undefined) {
	"use strict";
	var
	/**
	 * Copies properties from one or more objects onto an original.
	 */
	extend = function(obj /* , arg1, arg2, ... */) {
		var arg, i, k;
		for (i = 1; i < arguments.length; i++) {
			arg = arguments[i];
			for (k in arg) {
				if (arg.hasOwnProperty(k)) {
					obj[k] = arg[k];
				}
			}
		}
		return obj;
	},

	/** ************************ CONFIG SECTION ************************* */
	// default custom Event Mapping
	customMapping = {
			disable : false,
			bc_data_mapping : {
				name : "eVar202,prop2",
				segment : "eVar203",
				contentType : "eVar201",
				timePlayed : "event203",
				view : "event201",
				segmentView : "event202",
				complete : "event207",
				milestones : {
					25 : "event204",
					50 : "event205",
					75 : "event206"
				}
			},
			bc_volumechange : {
				event : 'event208',
				evar : 'eVar204'
			},
			bc_ad_pause : {
				event : 'event209',
				evar : 'eVar205' // currentTime
			},
			bc_ad_resumed : {
				event : 'event210',
				evar : 'eVar205' // currentTime
			},
			bc_ad_click : {
				event : 'event211',
				evar : 'eVar206,eVar207'// eVar206: currentTime and
										// eVar207:clickThroughUrl
			},
			bc_fullscreen_enter : {
				event : 'event212',
				evar : ''
			},
			bc_fullscreen_exit : {
				event : 'event213',
				evar : ''
			},
			bc_social_opened : {
				event : 'event214',
				evar : ''
			},
			bc_social_closed : {
				event : 'event215',
				evar : ''
			}
	},
	// default plugin settings
	defaults = {
			PLAYER : {
				NAME : 'Brightcove Player'
			},
			VISITOR_API : {
				MARKETING_CLOUD_ORG_ID : '2B8D246452DD9FBF0A490D45',
				NAMESPACE : 'democorp',
				TRACKING_SERVER : 'democorp.dc1.sc.omtrdc.net'
			},
			APP_MEASUREMENT : {
				RSID : 'democorpscdocdev',
				TRACKING_SERVER : 'democorp.dc1.sc.omtrdc.net'
			},
			HEARTBEAT : {
			  DISABLE : false,
				TRACKING_SERVER : 'http://heartbeats.omtrdc.net', // same for all Analytics customers
				JOB_ID : 'sc_va', // Same for all Analytics customers
				PUBLISHER : '', // Set to your Adobe assigned publisher ID, set '' if not use
				CHANNEL : 'Brightcove-channel',
				OVP : 'Brightcove-ovp',
				SDK : 'Brightcove-sdk',
				DEBUG_LOGGING : false // remove or set to false for production!
			},
			CUSTOM_EVENT : customMapping
	},
	// ---------------------------------------------------------------------------
	// Omniture Plugin
	// ---------------------------------------------------------------------------

	omniturePlugin = function(options, autoplay, o_debug) {
		var player = this;
		// merge options and defaults
		var settings = extend({}, defaults, options || {});
		// Set-up the VisitorAPI component.
		var visitor = new Visitor(settings.VISITOR_API.MARKETING_CLOUD_ORG_ID,
				settings.VISITOR_API.NAMESPACE);
		visitor.trackingServer = settings.VISITOR_API.TRACKING_SERVER;

		// Set-up the AppMeasurement component.
		var appMeasurement = new AppMeasurement();
		appMeasurement.visitor = visitor;
		appMeasurement.visitorNamespace = settings.VISITOR_API.NAMESPACE;
		appMeasurement.trackingServer = settings.APP_MEASUREMENT.TRACKING_SERVER;
		appMeasurement.account = settings.APP_MEASUREMENT.RSID;
		
		// Create the Analytics provider
		var analyticsProvider = new VideoAnalyticsProvider(appMeasurement,
				player, settings, autoplay, o_debug);
		
		// updates config object for client-specific values when necessary, e.g. QoS value changes
		var setConfigSettings = function(newOptions) {
			analyticsProvider._settings = newOptions;
		};
		
		return {
			setConfigSettings: setConfigSettings
		};
	};

	// register the omniture plugin framework
	vjs.plugin('omniturePlugin', omniturePlugin);

})(window, document, videojs);