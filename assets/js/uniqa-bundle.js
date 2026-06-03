/* =========================================================================== */
/* /templates/uniqaweb/uniqa/assets/js/plugins/jquery.cookie.js */
/* =========================================================================== */
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));


/* =========================================================================== */
/* /templates/uniqaweb/uniqa/assets/js/plugins/moment.min.js */
/* =========================================================================== */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var H;function f(){return H.apply(null,arguments)}function a(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function F(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function c(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function L(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(var t in e)if(c(e,t))return;return 1}function o(e){return void 0===e}function u(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function V(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function G(e,t){for(var n=[],s=e.length,i=0;i<s;++i)n.push(t(e[i],i));return n}function E(e,t){for(var n in t)c(t,n)&&(e[n]=t[n]);return c(t,"toString")&&(e.toString=t.toString),c(t,"valueOf")&&(e.valueOf=t.valueOf),e}function l(e,t,n,s){return Wt(e,t,n,s,!0).utc()}function m(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function A(e){var t,n,s=e._d&&!isNaN(e._d.getTime());return s&&(t=m(e),n=j.call(t.parsedDateParts,function(e){return null!=e}),s=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n),e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour)),null!=Object.isFrozen&&Object.isFrozen(e)?s:(e._isValid=s,e._isValid)}function I(e){var t=l(NaN);return null!=e?E(m(t),e):m(t).userInvalidated=!0,t}var j=Array.prototype.some||function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1},Z=f.momentProperties=[],z=!1;function q(e,t){var n,s,i,r=Z.length;if(o(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),o(t._i)||(e._i=t._i),o(t._f)||(e._f=t._f),o(t._l)||(e._l=t._l),o(t._strict)||(e._strict=t._strict),o(t._tzm)||(e._tzm=t._tzm),o(t._isUTC)||(e._isUTC=t._isUTC),o(t._offset)||(e._offset=t._offset),o(t._pf)||(e._pf=m(t)),o(t._locale)||(e._locale=t._locale),0<r)for(n=0;n<r;n++)o(i=t[s=Z[n]])||(e[s]=i);return e}function $(e){q(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===z&&(z=!0,f.updateOffset(this),z=!1)}function d(e){return e instanceof $||null!=e&&null!=e._isAMomentObject}function B(e){!1===f.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function e(r,a){var o=!0;return E(function(){if(null!=f.deprecationHandler&&f.deprecationHandler(null,r),o){for(var e,t,n=[],s=arguments.length,i=0;i<s;i++){if(e="","object"==typeof arguments[i]){for(t in e+="\n["+i+"] ",arguments[0])c(arguments[0],t)&&(e+=t+": "+arguments[0][t]+", ");e=e.slice(0,-2)}else e=arguments[i];n.push(e)}B(r+"\nArguments: "+Array.prototype.slice.call(n).join("")+"\n"+(new Error).stack),o=!1}return a.apply(this,arguments)},a)}var J={};function Q(e,t){null!=f.deprecationHandler&&f.deprecationHandler(e,t),J[e]||(B(t),J[e]=!0)}function h(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function X(e,t){var n,s=E({},e);for(n in t)c(t,n)&&(F(e[n])&&F(t[n])?(s[n]={},E(s[n],e[n]),E(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)c(e,n)&&!c(t,n)&&F(e[n])&&(s[n]=E({},s[n]));return s}function K(e){null!=e&&this.set(e)}f.suppressDeprecationWarnings=!1,f.deprecationHandler=null;var ee=Object.keys||function(e){var t,n=[];for(t in e)c(e,t)&&n.push(t);return n};function r(e,t,n){var s=""+Math.abs(e);return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,t-s.length)).toString().substr(1)+s}var te=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ne=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,se={},ie={};function s(e,t,n,s){var i="string"==typeof s?function(){return this[s]()}:s;e&&(ie[e]=i),t&&(ie[t[0]]=function(){return r(i.apply(this,arguments),t[1],t[2])}),n&&(ie[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function re(e,t){return e.isValid()?(t=ae(t,e.localeData()),se[t]=se[t]||function(s){for(var e,i=s.match(te),t=0,r=i.length;t<r;t++)ie[i[t]]?i[t]=ie[i[t]]:i[t]=(e=i[t]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(e){for(var t="",n=0;n<r;n++)t+=h(i[n])?i[n].call(e,s):i[n];return t}}(t),se[t](e)):e.localeData().invalidDate()}function ae(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(ne.lastIndex=0;0<=n&&ne.test(e);)e=e.replace(ne,s),ne.lastIndex=0,--n;return e}var oe={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function _(e){return"string"==typeof e?oe[e]||oe[e.toLowerCase()]:void 0}function ue(e){var t,n,s={};for(n in e)c(e,n)&&(t=_(n))&&(s[t]=e[n]);return s}var le={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};var de=/\d/,t=/\d\d/,he=/\d{3}/,ce=/\d{4}/,fe=/[+-]?\d{6}/,n=/\d\d?/,me=/\d\d\d\d?/,_e=/\d\d\d\d\d\d?/,ye=/\d{1,3}/,ge=/\d{1,4}/,we=/[+-]?\d{1,6}/,pe=/\d+/,ke=/[+-]?\d+/,Me=/Z|[+-]\d\d:?\d\d/gi,ve=/Z|[+-]\d\d(?::?\d\d)?/gi,i=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,y=/^[1-9]\d?/,g=/^([1-9]\d|\d)/;function w(e,n,s){Ye[e]=h(n)?n:function(e,t){return e&&s?s:n}}function De(e,t){return c(Ye,e)?Ye[e](t._strict,t._locale):new RegExp(p(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function p(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function k(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function M(e){var e=+e,t=0;return t=0!=e&&isFinite(e)?k(e):t}var Ye={},Se={};function v(e,n){var t,s,i=n;for("string"==typeof e&&(e=[e]),u(n)&&(i=function(e,t){t[n]=M(e)}),s=e.length,t=0;t<s;t++)Se[e[t]]=i}function Oe(e,i){v(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}function be(e){return e%4==0&&e%100!=0||e%400==0}var D=0,Y=1,S=2,O=3,b=4,T=5,Te=6,xe=7,Ne=8;function We(e){return be(e)?366:365}s("Y",0,0,function(){var e=this.year();return e<=9999?r(e,4):"+"+e}),s(0,["YY",2],0,function(){return this.year()%100}),s(0,["YYYY",4],0,"year"),s(0,["YYYYY",5],0,"year"),s(0,["YYYYYY",6,!0],0,"year"),w("Y",ke),w("YY",n,t),w("YYYY",ge,ce),w("YYYYY",we,fe),w("YYYYYY",we,fe),v(["YYYYY","YYYYYY"],D),v("YYYY",function(e,t){t[D]=2===e.length?f.parseTwoDigitYear(e):M(e)}),v("YY",function(e,t){t[D]=f.parseTwoDigitYear(e)}),v("Y",function(e,t){t[D]=parseInt(e,10)}),f.parseTwoDigitYear=function(e){return M(e)+(68<M(e)?1900:2e3)};var x,Pe=Re("FullYear",!0);function Re(t,n){return function(e){return null!=e?(Ue(this,t,e),f.updateOffset(this,n),this):Ce(this,t)}}function Ce(e,t){if(!e.isValid())return NaN;var n=e._d,s=e._isUTC;switch(t){case"Milliseconds":return s?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return s?n.getUTCSeconds():n.getSeconds();case"Minutes":return s?n.getUTCMinutes():n.getMinutes();case"Hours":return s?n.getUTCHours():n.getHours();case"Date":return s?n.getUTCDate():n.getDate();case"Day":return s?n.getUTCDay():n.getDay();case"Month":return s?n.getUTCMonth():n.getMonth();case"FullYear":return s?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Ue(e,t,n){var s,i,r;if(e.isValid()&&!isNaN(n)){switch(s=e._d,i=e._isUTC,t){case"Milliseconds":return i?s.setUTCMilliseconds(n):s.setMilliseconds(n);case"Seconds":return i?s.setUTCSeconds(n):s.setSeconds(n);case"Minutes":return i?s.setUTCMinutes(n):s.setMinutes(n);case"Hours":return i?s.setUTCHours(n):s.setHours(n);case"Date":return i?s.setUTCDate(n):s.setDate(n);case"FullYear":break;default:return}t=n,r=e.month(),e=29!==(e=e.date())||1!==r||be(t)?e:28,i?s.setUTCFullYear(t,r,e):s.setFullYear(t,r,e)}}function He(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=(t%(n=12)+n)%n;return e+=(t-n)/12,1==n?be(e)?29:28:31-n%7%2}x=Array.prototype.indexOf||function(e){for(var t=0;t<this.length;++t)if(this[t]===e)return t;return-1},s("M",["MM",2],"Mo",function(){return this.month()+1}),s("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),s("MMMM",0,0,function(e){return this.localeData().months(this,e)}),w("M",n,y),w("MM",n,t),w("MMM",function(e,t){return t.monthsShortRegex(e)}),w("MMMM",function(e,t){return t.monthsRegex(e)}),v(["M","MM"],function(e,t){t[Y]=M(e)-1}),v(["MMM","MMMM"],function(e,t,n,s){s=n._locale.monthsParse(e,s,n._strict);null!=s?t[Y]=s:m(n).invalidMonth=e});var Fe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Le="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ve=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ge=i,Ee=i;function Ae(e,t){if(e.isValid()){if("string"==typeof t)if(/^\d+$/.test(t))t=M(t);else if(!u(t=e.localeData().monthsParse(t)))return;var n=(n=e.date())<29?n:Math.min(n,He(e.year(),t));e._isUTC?e._d.setUTCMonth(t,n):e._d.setMonth(t,n)}}function Ie(e){return null!=e?(Ae(this,e),f.updateOffset(this,!0),this):Ce(this,"Month")}function je(){function e(e,t){return t.length-e.length}for(var t,n,s=[],i=[],r=[],a=0;a<12;a++)n=l([2e3,a]),t=p(this.monthsShort(n,"")),n=p(this.months(n,"")),s.push(t),i.push(n),r.push(n),r.push(t);s.sort(e),i.sort(e),r.sort(e),this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ze(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}function ze(e){var t;return e<100&&0<=e?((t=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,t)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function qe(e,t,n){n=7+t-n;return n-(7+ze(e,0,n).getUTCDay()-t)%7-1}function $e(e,t,n,s,i){var r,t=1+7*(t-1)+(7+n-s)%7+qe(e,s,i),n=t<=0?We(r=e-1)+t:t>We(e)?(r=e+1,t-We(e)):(r=e,t);return{year:r,dayOfYear:n}}function Be(e,t,n){var s,i,r=qe(e.year(),t,n),r=Math.floor((e.dayOfYear()-r-1)/7)+1;return r<1?s=r+N(i=e.year()-1,t,n):r>N(e.year(),t,n)?(s=r-N(e.year(),t,n),i=e.year()+1):(i=e.year(),s=r),{week:s,year:i}}function N(e,t,n){var s=qe(e,t,n),t=qe(e+1,t,n);return(We(e)-s+t)/7}s("w",["ww",2],"wo","week"),s("W",["WW",2],"Wo","isoWeek"),w("w",n,y),w("ww",n,t),w("W",n,y),w("WW",n,t),Oe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=M(e)});function Je(e,t){return e.slice(t,7).concat(e.slice(0,t))}s("d",0,"do","day"),s("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),s("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),s("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),s("e",0,0,"weekday"),s("E",0,0,"isoWeekday"),w("d",n),w("e",n),w("E",n),w("dd",function(e,t){return t.weekdaysMinRegex(e)}),w("ddd",function(e,t){return t.weekdaysShortRegex(e)}),w("dddd",function(e,t){return t.weekdaysRegex(e)}),Oe(["dd","ddd","dddd"],function(e,t,n,s){s=n._locale.weekdaysParse(e,s,n._strict);null!=s?t.d=s:m(n).invalidWeekday=e}),Oe(["d","e","E"],function(e,t,n,s){t[s]=M(e)});var Qe="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Xe="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ke="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),et=i,tt=i,nt=i;function st(){function e(e,t){return t.length-e.length}for(var t,n,s,i=[],r=[],a=[],o=[],u=0;u<7;u++)s=l([2e3,1]).day(u),t=p(this.weekdaysMin(s,"")),n=p(this.weekdaysShort(s,"")),s=p(this.weekdays(s,"")),i.push(t),r.push(n),a.push(s),o.push(t),o.push(n),o.push(s);i.sort(e),r.sort(e),a.sort(e),o.sort(e),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+i.join("|")+")","i")}function it(){return this.hours()%12||12}function rt(e,t){s(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function at(e,t){return t._meridiemParse}s("H",["HH",2],0,"hour"),s("h",["hh",2],0,it),s("k",["kk",2],0,function(){return this.hours()||24}),s("hmm",0,0,function(){return""+it.apply(this)+r(this.minutes(),2)}),s("hmmss",0,0,function(){return""+it.apply(this)+r(this.minutes(),2)+r(this.seconds(),2)}),s("Hmm",0,0,function(){return""+this.hours()+r(this.minutes(),2)}),s("Hmmss",0,0,function(){return""+this.hours()+r(this.minutes(),2)+r(this.seconds(),2)}),rt("a",!0),rt("A",!1),w("a",at),w("A",at),w("H",n,g),w("h",n,y),w("k",n,y),w("HH",n,t),w("hh",n,t),w("kk",n,t),w("hmm",me),w("hmmss",_e),w("Hmm",me),w("Hmmss",_e),v(["H","HH"],O),v(["k","kk"],function(e,t,n){e=M(e);t[O]=24===e?0:e}),v(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),v(["h","hh"],function(e,t,n){t[O]=M(e),m(n).bigHour=!0}),v("hmm",function(e,t,n){var s=e.length-2;t[O]=M(e.substr(0,s)),t[b]=M(e.substr(s)),m(n).bigHour=!0}),v("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[O]=M(e.substr(0,s)),t[b]=M(e.substr(s,2)),t[T]=M(e.substr(i)),m(n).bigHour=!0}),v("Hmm",function(e,t,n){var s=e.length-2;t[O]=M(e.substr(0,s)),t[b]=M(e.substr(s))}),v("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[O]=M(e.substr(0,s)),t[b]=M(e.substr(s,2)),t[T]=M(e.substr(i))});i=Re("Hours",!0);var ot,ut={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Fe,monthsShort:Le,week:{dow:0,doy:6},weekdays:Qe,weekdaysMin:Ke,weekdaysShort:Xe,meridiemParse:/[ap]\.?m?\.?/i},W={},lt={};function dt(e){return e&&e.toLowerCase().replace("_","-")}function ht(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=dt(e[r]).split("-")).length,n=(n=dt(e[r+1]))?n.split("-"):null;0<t;){if(s=ct(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&function(e,t){for(var n=Math.min(e.length,t.length),s=0;s<n;s+=1)if(e[s]!==t[s])return s;return n}(i,n)>=t-1)break;t--}r++}return ot}function ct(t){var e,n;if(void 0===W[t]&&"undefined"!=typeof module&&module&&module.exports&&((n=t)&&n.match("^[^/\\\\]*$")))try{e=ot._abbr,require("./locale/"+t),ft(e)}catch(e){W[t]=null}return W[t]}function ft(e,t){return e&&((t=o(t)?P(e):mt(e,t))?ot=t:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ot._abbr}function mt(e,t){if(null===t)return delete W[e],null;var n,s=ut;if(t.abbr=e,null!=W[e])Q("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=W[e]._config;else if(null!=t.parentLocale)if(null!=W[t.parentLocale])s=W[t.parentLocale]._config;else{if(null==(n=ct(t.parentLocale)))return lt[t.parentLocale]||(lt[t.parentLocale]=[]),lt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return W[e]=new K(X(s,t)),lt[e]&&lt[e].forEach(function(e){mt(e.name,e.config)}),ft(e),W[e]}function P(e){var t;if(!(e=e&&e._locale&&e._locale._abbr?e._locale._abbr:e))return ot;if(!a(e)){if(t=ct(e))return t;e=[e]}return ht(e)}function _t(e){var t=e._a;return t&&-2===m(e).overflow&&(t=t[Y]<0||11<t[Y]?Y:t[S]<1||t[S]>He(t[D],t[Y])?S:t[O]<0||24<t[O]||24===t[O]&&(0!==t[b]||0!==t[T]||0!==t[Te])?O:t[b]<0||59<t[b]?b:t[T]<0||59<t[T]?T:t[Te]<0||999<t[Te]?Te:-1,m(e)._overflowDayOfYear&&(t<D||S<t)&&(t=S),m(e)._overflowWeeks&&-1===t&&(t=xe),m(e)._overflowWeekday&&-1===t&&(t=Ne),m(e).overflow=t),e}var yt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,wt=/Z|[+-]\d\d(?::?\d\d)?/,pt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],kt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Mt=/^\/?Date\((-?\d+)/i,vt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Dt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Yt(e){var t,n,s,i,r,a,o=e._i,u=yt.exec(o)||gt.exec(o),o=pt.length,l=kt.length;if(u){for(m(e).iso=!0,t=0,n=o;t<n;t++)if(pt[t][1].exec(u[1])){i=pt[t][0],s=!1!==pt[t][2];break}if(null==i)e._isValid=!1;else{if(u[3]){for(t=0,n=l;t<n;t++)if(kt[t][1].exec(u[3])){r=(u[2]||" ")+kt[t][0];break}if(null==r)return void(e._isValid=!1)}if(s||null==r){if(u[4]){if(!wt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),xt(e)}else e._isValid=!1}}else e._isValid=!1}function St(e,t,n,s,i,r){e=[function(e){e=parseInt(e,10);{if(e<=49)return 2e3+e;if(e<=999)return 1900+e}return e}(e),Le.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&e.push(parseInt(r,10)),e}function Ot(e){var t,n,s,i,r=vt.exec(e._i.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));r?(t=St(r[4],r[3],r[2],r[5],r[6],r[7]),n=r[1],s=t,i=e,n&&Xe.indexOf(n)!==new Date(s[0],s[1],s[2]).getDay()?(m(i).weekdayMismatch=!0,i._isValid=!1):(e._a=t,e._tzm=(n=r[8],s=r[9],i=r[10],n?Dt[n]:s?0:60*(((n=parseInt(i,10))-(s=n%100))/100)+s),e._d=ze.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),m(e).rfc2822=!0)):e._isValid=!1}function bt(e,t,n){return null!=e?e:null!=t?t:n}function Tt(e){var t,n,s,i,r,a,o,u,l,d,h,c=[];if(!e._d){for(s=e,i=new Date(f.now()),n=s._useUTC?[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]:[i.getFullYear(),i.getMonth(),i.getDate()],e._w&&null==e._a[S]&&null==e._a[Y]&&(null!=(i=(s=e)._w).GG||null!=i.W||null!=i.E?(u=1,l=4,r=bt(i.GG,s._a[D],Be(R(),1,4).year),a=bt(i.W,1),((o=bt(i.E,1))<1||7<o)&&(d=!0)):(u=s._locale._week.dow,l=s._locale._week.doy,h=Be(R(),u,l),r=bt(i.gg,s._a[D],h.year),a=bt(i.w,h.week),null!=i.d?((o=i.d)<0||6<o)&&(d=!0):null!=i.e?(o=i.e+u,(i.e<0||6<i.e)&&(d=!0)):o=u),a<1||a>N(r,u,l)?m(s)._overflowWeeks=!0:null!=d?m(s)._overflowWeekday=!0:(h=$e(r,a,o,u,l),s._a[D]=h.year,s._dayOfYear=h.dayOfYear)),null!=e._dayOfYear&&(i=bt(e._a[D],n[D]),(e._dayOfYear>We(i)||0===e._dayOfYear)&&(m(e)._overflowDayOfYear=!0),d=ze(i,0,e._dayOfYear),e._a[Y]=d.getUTCMonth(),e._a[S]=d.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=c[t]=n[t];for(;t<7;t++)e._a[t]=c[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[O]&&0===e._a[b]&&0===e._a[T]&&0===e._a[Te]&&(e._nextDay=!0,e._a[O]=0),e._d=(e._useUTC?ze:Ze).apply(null,c),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[O]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(m(e).weekdayMismatch=!0)}}function xt(e){if(e._f===f.ISO_8601)Yt(e);else if(e._f===f.RFC_2822)Ot(e);else{e._a=[],m(e).empty=!0;for(var t,n,s,i,r,a=""+e._i,o=a.length,u=0,l=ae(e._f,e._locale).match(te)||[],d=l.length,h=0;h<d;h++)n=l[h],(t=(a.match(De(n,e))||[])[0])&&(0<(s=a.substr(0,a.indexOf(t))).length&&m(e).unusedInput.push(s),a=a.slice(a.indexOf(t)+t.length),u+=t.length),ie[n]?(t?m(e).empty=!1:m(e).unusedTokens.push(n),s=n,r=e,null!=(i=t)&&c(Se,s)&&Se[s](i,r._a,r,s)):e._strict&&!t&&m(e).unusedTokens.push(n);m(e).charsLeftOver=o-u,0<a.length&&m(e).unusedInput.push(a),e._a[O]<=12&&!0===m(e).bigHour&&0<e._a[O]&&(m(e).bigHour=void 0),m(e).parsedDateParts=e._a.slice(0),m(e).meridiem=e._meridiem,e._a[O]=function(e,t,n){if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((e=e.isPM(n))&&t<12&&(t+=12),t=e||12!==t?t:0):t}(e._locale,e._a[O],e._meridiem),null!==(o=m(e).era)&&(e._a[D]=e._locale.erasConvertYear(o,e._a[D])),Tt(e),_t(e)}}function Nt(e){var t,n,s,i=e._i,r=e._f;if(e._locale=e._locale||P(e._l),null===i||void 0===r&&""===i)return I({nullInput:!0});if("string"==typeof i&&(e._i=i=e._locale.preparse(i)),d(i))return new $(_t(i));if(V(i))e._d=i;else if(a(r))!function(e){var t,n,s,i,r,a,o=!1,u=e._f.length;if(0===u)return m(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<u;i++)r=0,a=!1,t=q({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],xt(t),A(t)&&(a=!0),r=(r+=m(t).charsLeftOver)+10*m(t).unusedTokens.length,m(t).score=r,o?r<s&&(s=r,n=t):(null==s||r<s||a)&&(s=r,n=t,a&&(o=!0));E(e,n||t)}(e);else if(r)xt(e);else if(o(r=(i=e)._i))i._d=new Date(f.now());else V(r)?i._d=new Date(r.valueOf()):"string"==typeof r?(n=i,null!==(t=Mt.exec(n._i))?n._d=new Date(+t[1]):(Yt(n),!1===n._isValid&&(delete n._isValid,Ot(n),!1===n._isValid&&(delete n._isValid,n._strict?n._isValid=!1:f.createFromInputFallback(n))))):a(r)?(i._a=G(r.slice(0),function(e){return parseInt(e,10)}),Tt(i)):F(r)?(t=i)._d||(s=void 0===(n=ue(t._i)).day?n.date:n.day,t._a=G([n.year,n.month,s,n.hour,n.minute,n.second,n.millisecond],function(e){return e&&parseInt(e,10)}),Tt(t)):u(r)?i._d=new Date(r):f.createFromInputFallback(i);return A(e)||(e._d=null),e}function Wt(e,t,n,s,i){var r={};return!0!==t&&!1!==t||(s=t,t=void 0),!0!==n&&!1!==n||(s=n,n=void 0),(F(e)&&L(e)||a(e)&&0===e.length)&&(e=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=i,r._l=n,r._i=e,r._f=t,r._strict=s,(i=new $(_t(Nt(i=r))))._nextDay&&(i.add(1,"d"),i._nextDay=void 0),i}function R(e,t,n,s){return Wt(e,t,n,s,!1)}f.createFromInputFallback=e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),f.ISO_8601=function(){},f.RFC_2822=function(){};me=e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=R.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:I()}),_e=e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=R.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:I()});function Pt(e,t){var n,s;if(!(t=1===t.length&&a(t[0])?t[0]:t).length)return R();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Rt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ct(e){var e=ue(e),t=e.year||0,n=e.quarter||0,s=e.month||0,i=e.week||e.isoWeek||0,r=e.day||0,a=e.hour||0,o=e.minute||0,u=e.second||0,l=e.millisecond||0;this._isValid=function(e){var t,n,s=!1,i=Rt.length;for(t in e)if(c(e,t)&&(-1===x.call(Rt,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<i;++n)if(e[Rt[n]]){if(s)return!1;parseFloat(e[Rt[n]])!==M(e[Rt[n]])&&(s=!0)}return!0}(e),this._milliseconds=+l+1e3*u+6e4*o+1e3*a*60*60,this._days=+r+7*i,this._months=+s+3*n+12*t,this._data={},this._locale=P(),this._bubble()}function Ut(e){return e instanceof Ct}function Ht(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){s(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+r(~~(e/60),2)+n+r(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),w("Z",ve),w("ZZ",ve),v(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Vt(ve,e)});var Lt=/([\+\-]|\d\d)/gi;function Vt(e,t){var t=(t||"").match(e);return null===t?null:0===(t=60*(e=((t[t.length-1]||[])+"").match(Lt)||["-",0,0])[1]+M(e[2]))?0:"+"===e[0]?t:-t}function Gt(e,t){var n;return t._isUTC?(t=t.clone(),n=(d(e)||V(e)?e:R(e)).valueOf()-t.valueOf(),t._d.setTime(t._d.valueOf()+n),f.updateOffset(t,!1),t):R(e).local()}function Et(e){return-Math.round(e._d.getTimezoneOffset())}function At(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}f.updateOffset=function(){};var It=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,jt=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function C(e,t){var n,s=e,i=null;return Ut(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:u(e)||!isNaN(+e)?(s={},t?s[t]=+e:s.milliseconds=+e):(i=It.exec(e))?(n="-"===i[1]?-1:1,s={y:0,d:M(i[S])*n,h:M(i[O])*n,m:M(i[b])*n,s:M(i[T])*n,ms:M(Ht(1e3*i[Te]))*n}):(i=jt.exec(e))?(n="-"===i[1]?-1:1,s={y:Zt(i[2],n),M:Zt(i[3],n),w:Zt(i[4],n),d:Zt(i[5],n),h:Zt(i[6],n),m:Zt(i[7],n),s:Zt(i[8],n)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(t=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(R(s.from),R(s.to)),(s={}).ms=t.milliseconds,s.M=t.months),i=new Ct(s),Ut(e)&&c(e,"_locale")&&(i._locale=e._locale),Ut(e)&&c(e,"_isValid")&&(i._isValid=e._isValid),i}function Zt(e,t){e=e&&parseFloat(e.replace(",","."));return(isNaN(e)?0:e)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function qt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(Q(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),$t(this,C(e,t),s),this}}function $t(e,t,n,s){var i=t._milliseconds,r=Ht(t._days),t=Ht(t._months);e.isValid()&&(s=null==s||s,t&&Ae(e,Ce(e,"Month")+t*n),r&&Ue(e,"Date",Ce(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&f.updateOffset(e,r||t))}C.fn=Ct.prototype,C.invalid=function(){return C(NaN)};Fe=qt(1,"add"),Qe=qt(-1,"subtract");function Bt(e){return"string"==typeof e||e instanceof String}function Jt(e){return d(e)||V(e)||Bt(e)||u(e)||function(t){var e=a(t),n=!1;e&&(n=0===t.filter(function(e){return!u(e)&&Bt(t)}).length);return e&&n}(e)||function(e){var t,n,s=F(e)&&!L(e),i=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a=r.length;for(t=0;t<a;t+=1)n=r[t],i=i||c(e,n);return s&&i}(e)||null==e}function Qt(e,t){if(e.date()<t.date())return-Qt(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months"),t=t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(1+n,"months")-s);return-(n+t)||0}function Xt(e){return void 0===e?this._locale._abbr:(null!=(e=P(e))&&(this._locale=e),this)}f.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",f.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";Ke=e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}var en=126227808e5;function tn(e,t){return(e%t+t)%t}function nn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-en:new Date(e,t,n).valueOf()}function sn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-en:Date.UTC(e,t,n)}function rn(e,t){return t.erasAbbrRegex(e)}function an(){for(var e,t,n,s=[],i=[],r=[],a=[],o=this.eras(),u=0,l=o.length;u<l;++u)e=p(o[u].name),t=p(o[u].abbr),n=p(o[u].narrow),i.push(e),s.push(t),r.push(n),a.push(e),a.push(t),a.push(n);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+i.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}function on(e,t){s(0,[e,e.length],0,t)}function un(e,t,n,s,i){var r;return null==e?Be(this,s,i).year:(r=N(e,s,i),function(e,t,n,s,i){e=$e(e,t,n,s,i),t=ze(e.year,0,e.dayOfYear);return this.year(t.getUTCFullYear()),this.month(t.getUTCMonth()),this.date(t.getUTCDate()),this}.call(this,e,t=r<t?r:t,n,s,i))}s("N",0,0,"eraAbbr"),s("NN",0,0,"eraAbbr"),s("NNN",0,0,"eraAbbr"),s("NNNN",0,0,"eraName"),s("NNNNN",0,0,"eraNarrow"),s("y",["y",1],"yo","eraYear"),s("y",["yy",2],0,"eraYear"),s("y",["yyy",3],0,"eraYear"),s("y",["yyyy",4],0,"eraYear"),w("N",rn),w("NN",rn),w("NNN",rn),w("NNNN",function(e,t){return t.erasNameRegex(e)}),w("NNNNN",function(e,t){return t.erasNarrowRegex(e)}),v(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,s){s=n._locale.erasParse(e,s,n._strict);s?m(n).era=s:m(n).invalidEra=e}),w("y",pe),w("yy",pe),w("yyy",pe),w("yyyy",pe),w("yo",function(e,t){return t._eraYearOrdinalRegex||pe}),v(["y","yy","yyy","yyyy"],D),v(["yo"],function(e,t,n,s){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[D]=n._locale.eraYearOrdinalParse(e,i):t[D]=parseInt(e,10)}),s(0,["gg",2],0,function(){return this.weekYear()%100}),s(0,["GG",2],0,function(){return this.isoWeekYear()%100}),on("gggg","weekYear"),on("ggggg","weekYear"),on("GGGG","isoWeekYear"),on("GGGGG","isoWeekYear"),w("G",ke),w("g",ke),w("GG",n,t),w("gg",n,t),w("GGGG",ge,ce),w("gggg",ge,ce),w("GGGGG",we,fe),w("ggggg",we,fe),Oe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=M(e)}),Oe(["gg","GG"],function(e,t,n,s){t[s]=f.parseTwoDigitYear(e)}),s("Q",0,"Qo","quarter"),w("Q",de),v("Q",function(e,t){t[Y]=3*(M(e)-1)}),s("D",["DD",2],"Do","date"),w("D",n,y),w("DD",n,t),w("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),v(["D","DD"],S),v("Do",function(e,t){t[S]=M(e.match(n)[0])});ge=Re("Date",!0);s("DDD",["DDDD",3],"DDDo","dayOfYear"),w("DDD",ye),w("DDDD",he),v(["DDD","DDDD"],function(e,t,n){n._dayOfYear=M(e)}),s("m",["mm",2],0,"minute"),w("m",n,g),w("mm",n,t),v(["m","mm"],b);var ln,ce=Re("Minutes",!1),we=(s("s",["ss",2],0,"second"),w("s",n,g),w("ss",n,t),v(["s","ss"],T),Re("Seconds",!1));for(s("S",0,0,function(){return~~(this.millisecond()/100)}),s(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),s(0,["SSS",3],0,"millisecond"),s(0,["SSSS",4],0,function(){return 10*this.millisecond()}),s(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),s(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),s(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),s(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),s(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),w("S",ye,de),w("SS",ye,t),w("SSS",ye,he),ln="SSSS";ln.length<=9;ln+="S")w(ln,pe);function dn(e,t){t[Te]=M(1e3*("0."+e))}for(ln="S";ln.length<=9;ln+="S")v(ln,dn);fe=Re("Milliseconds",!1),s("z",0,0,"zoneAbbr"),s("zz",0,0,"zoneName");y=$.prototype;function hn(e){return e}y.add=Fe,y.calendar=function(e,t){1===arguments.length&&(arguments[0]?Jt(arguments[0])?(e=arguments[0],t=void 0):function(e){for(var t=F(e)&&!L(e),n=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i=0;i<s.length;i+=1)n=n||c(e,s[i]);return t&&n}(arguments[0])&&(t=arguments[0],e=void 0):t=e=void 0);var e=e||R(),n=Gt(e,this).startOf("day"),n=f.calendarFormat(this,n)||"sameElse",t=t&&(h(t[n])?t[n].call(this,e):t[n]);return this.format(t||this.localeData().calendar(n,this,R(e)))},y.clone=function(){return new $(this)},y.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=_(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:k(r)},y.endOf=function(e){var t,n;if(void 0===(e=_(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?sn:nn,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-tn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-tn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-tn(t,1e3)-1}return this._d.setTime(t),f.updateOffset(this,!0),this},y.format=function(e){return e=e||(this.isUtc()?f.defaultFormatUtc:f.defaultFormat),e=re(this,e),this.localeData().postformat(e)},y.from=function(e,t){return this.isValid()&&(d(e)&&e.isValid()||R(e).isValid())?C({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},y.fromNow=function(e){return this.from(R(),e)},y.to=function(e,t){return this.isValid()&&(d(e)&&e.isValid()||R(e).isValid())?C({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},y.toNow=function(e){return this.to(R(),e)},y.get=function(e){return h(this[e=_(e)])?this[e]():this},y.invalidAt=function(){return m(this).overflow},y.isAfter=function(e,t){return e=d(e)?e:R(e),!(!this.isValid()||!e.isValid())&&("millisecond"===(t=_(t)||"millisecond")?this.valueOf()>e.valueOf():e.valueOf()<this.clone().startOf(t).valueOf())},y.isBefore=function(e,t){return e=d(e)?e:R(e),!(!this.isValid()||!e.isValid())&&("millisecond"===(t=_(t)||"millisecond")?this.valueOf()<e.valueOf():this.clone().endOf(t).valueOf()<e.valueOf())},y.isBetween=function(e,t,n,s){return e=d(e)?e:R(e),t=d(t)?t:R(t),!!(this.isValid()&&e.isValid()&&t.isValid())&&(("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n)))},y.isSame=function(e,t){var e=d(e)?e:R(e);return!(!this.isValid()||!e.isValid())&&("millisecond"===(t=_(t)||"millisecond")?this.valueOf()===e.valueOf():(e=e.valueOf(),this.clone().startOf(t).valueOf()<=e&&e<=this.clone().endOf(t).valueOf()))},y.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},y.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},y.isValid=function(){return A(this)},y.lang=Ke,y.locale=Xt,y.localeData=Kt,y.max=_e,y.min=me,y.parsingFlags=function(){return E({},m(this))},y.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t,n=[];for(t in e)c(e,t)&&n.push({unit:t,priority:le[t]});return n.sort(function(e,t){return e.priority-t.priority}),n}(e=ue(e)),s=n.length,i=0;i<s;i++)this[n[i].unit](e[n[i].unit]);else if(h(this[e=_(e)]))return this[e](t);return this},y.startOf=function(e){var t,n;if(void 0===(e=_(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?sn:nn,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=tn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=tn(t,6e4);break;case"second":t=this._d.valueOf(),t-=tn(t,1e3)}return this._d.setTime(t),f.updateOffset(this,!0),this},y.subtract=Qe,y.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},y.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},y.toDate=function(){return new Date(this.valueOf())},y.toISOString=function(e){if(!this.isValid())return null;var t=(e=!0!==e)?this.clone().utc():this;return t.year()<0||9999<t.year()?re(t,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):h(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",re(t,"Z")):re(t,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},y.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t="moment",n="";return this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",n="Z"),t="["+t+'("]',e=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",this.format(t+e+"-MM-DD[T]HH:mm:ss.SSS"+(n+'[")]'))},"undefined"!=typeof Symbol&&null!=Symbol.for&&(y[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},y.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},y.eraName=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].name;if(t[n].until<=e&&e<=t[n].since)return t[n].name}return""},y.eraNarrow=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].narrow;if(t[n].until<=e&&e<=t[n].since)return t[n].narrow}return""},y.eraAbbr=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].abbr;if(t[n].until<=e&&e<=t[n].since)return t[n].abbr}return""},y.eraYear=function(){for(var e,t,n=this.localeData().eras(),s=0,i=n.length;s<i;++s)if(e=n[s].since<=n[s].until?1:-1,t=this.clone().startOf("day").valueOf(),n[s].since<=t&&t<=n[s].until||n[s].until<=t&&t<=n[s].since)return(this.year()-f(n[s].since).year())*e+n[s].offset;return this.year()},y.year=Pe,y.isLeapYear=function(){return be(this.year())},y.weekYear=function(e){return un.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)},y.isoWeekYear=function(e){return un.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},y.quarter=y.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},y.month=Ie,y.daysInMonth=function(){return He(this.year(),this.month())},y.week=y.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},y.isoWeek=y.isoWeeks=function(e){var t=Be(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},y.weeksInYear=function(){var e=this.localeData()._week;return N(this.year(),e.dow,e.doy)},y.weeksInWeekYear=function(){var e=this.localeData()._week;return N(this.weekYear(),e.dow,e.doy)},y.isoWeeksInYear=function(){return N(this.year(),1,4)},y.isoWeeksInISOWeekYear=function(){return N(this.isoWeekYear(),1,4)},y.date=ge,y.day=y.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=Ce(this,"Day");return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},y.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},y.isoWeekday=function(e){return this.isValid()?null!=e?(t=e,n=this.localeData(),n="string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t,this.day(this.day()%7?n:n-7)):this.day()||7:null!=e?this:NaN;var t,n},y.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},y.hour=y.hours=i,y.minute=y.minutes=ce,y.second=y.seconds=we,y.millisecond=y.milliseconds=fe,y.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Et(this);if("string"==typeof e){if(null===(e=Vt(ve,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Et(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?$t(this,C(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,f.updateOffset(this,!0),this._changeInProgress=null)),this},y.utc=function(e){return this.utcOffset(0,e)},y.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Et(this),"m")),this},y.parseZone=function(){var e;return null!=this._tzm?this.utcOffset(this._tzm,!1,!0):"string"==typeof this._i&&(null!=(e=Vt(Me,this._i))?this.utcOffset(e):this.utcOffset(0,!0)),this},y.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?R(e).utcOffset():0,(this.utcOffset()-e)%60==0)},y.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},y.isLocal=function(){return!!this.isValid()&&!this._isUTC},y.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},y.isUtc=At,y.isUTC=At,y.zoneAbbr=function(){return this._isUTC?"UTC":""},y.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},y.dates=e("dates accessor is deprecated. Use date instead.",ge),y.months=e("months accessor is deprecated. Use month instead",Ie),y.years=e("years accessor is deprecated. Use year instead",Pe),y.zone=e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?(this.utcOffset(e="string"!=typeof e?-e:e,t),this):-this.utcOffset()}),y.isDSTShifted=e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!o(this._isDSTShifted))return this._isDSTShifted;var e,t={};return q(t,this),(t=Nt(t))._a?(e=(t._isUTC?l:R)(t._a),this._isDSTShifted=this.isValid()&&0<function(e,t,n){for(var s=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0,a=0;a<s;a++)(n&&e[a]!==t[a]||!n&&M(e[a])!==M(t[a]))&&r++;return r+i}(t._a,e.toArray())):this._isDSTShifted=!1,this._isDSTShifted});g=K.prototype;function cn(e,t,n,s){var i=P(),s=l().set(s,t);return i[n](s,e)}function fn(e,t,n){if(u(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");for(var s=[],i=0;i<12;i++)s[i]=cn(e,i,n,"month");return s}function mn(e,t,n,s){t=("boolean"==typeof e?u(t)&&(n=t,t=void 0):(t=e,e=!1,u(n=t)&&(n=t,t=void 0)),t||"");var i,r=P(),a=e?r._week.dow:0,o=[];if(null!=n)return cn(t,(n+a)%7,s,"day");for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}g.calendar=function(e,t,n){return h(e=this._calendar[e]||this._calendar.sameElse)?e.call(t,n):e},g.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(te).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},g.invalidDate=function(){return this._invalidDate},g.ordinal=function(e){return this._ordinal.replace("%d",e)},g.preparse=hn,g.postformat=hn,g.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return h(i)?i(e,t,n,s):i.replace(/%d/i,e)},g.pastFuture=function(e,t){return h(e=this._relativeTime[0<e?"future":"past"])?e(t):e.replace(/%s/i,t)},g.set=function(e){var t,n;for(n in e)c(e,n)&&(h(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},g.eras=function(e,t){for(var n,s=this._eras||P("en")._eras,i=0,r=s.length;i<r;++i)switch("string"==typeof s[i].since&&(n=f(s[i].since).startOf("day"),s[i].since=n.valueOf()),typeof s[i].until){case"undefined":s[i].until=1/0;break;case"string":n=f(s[i].until).startOf("day").valueOf(),s[i].until=n.valueOf()}return s},g.erasParse=function(e,t,n){var s,i,r,a,o,u=this.eras();for(e=e.toUpperCase(),s=0,i=u.length;s<i;++s)if(r=u[s].name.toUpperCase(),a=u[s].abbr.toUpperCase(),o=u[s].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return u[s];break;case"NNNN":if(r===e)return u[s];break;case"NNNNN":if(o===e)return u[s]}else if(0<=[r,a,o].indexOf(e))return u[s]},g.erasConvertYear=function(e,t){var n=e.since<=e.until?1:-1;return void 0===t?f(e.since).year():f(e.since).year()+(t-e.offset)*n},g.erasAbbrRegex=function(e){return c(this,"_erasAbbrRegex")||an.call(this),e?this._erasAbbrRegex:this._erasRegex},g.erasNameRegex=function(e){return c(this,"_erasNameRegex")||an.call(this),e?this._erasNameRegex:this._erasRegex},g.erasNarrowRegex=function(e){return c(this,"_erasNarrowRegex")||an.call(this),e?this._erasNarrowRegex:this._erasRegex},g.months=function(e,t){return e?(a(this._months)?this._months:this._months[(this._months.isFormat||Ve).test(t)?"format":"standalone"])[e.month()]:a(this._months)?this._months:this._months.standalone},g.monthsShort=function(e,t){return e?(a(this._monthsShort)?this._monthsShort:this._monthsShort[Ve.test(t)?"format":"standalone"])[e.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},g.monthsParse=function(e,t,n){var s,i;if(this._monthsParseExact)return function(e,t,n){var s,i,r,e=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=l([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=x.call(this._shortMonthsParse,e))?i:null:-1!==(i=x.call(this._longMonthsParse,e))?i:null:"MMM"===t?-1!==(i=x.call(this._shortMonthsParse,e))||-1!==(i=x.call(this._longMonthsParse,e))?i:null:-1!==(i=x.call(this._longMonthsParse,e))||-1!==(i=x.call(this._shortMonthsParse,e))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=l([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(i="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},g.monthsRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||je.call(this),e?this._monthsStrictRegex:this._monthsRegex):(c(this,"_monthsRegex")||(this._monthsRegex=Ee),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},g.monthsShortRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||je.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(c(this,"_monthsShortRegex")||(this._monthsShortRegex=Ge),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},g.week=function(e){return Be(e,this._week.dow,this._week.doy).week},g.firstDayOfYear=function(){return this._week.doy},g.firstDayOfWeek=function(){return this._week.dow},g.weekdays=function(e,t){return t=a(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"],!0===e?Je(t,this._week.dow):e?t[e.day()]:t},g.weekdaysMin=function(e){return!0===e?Je(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},g.weekdaysShort=function(e){return!0===e?Je(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},g.weekdaysParse=function(e,t,n){var s,i;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,e=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=l([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=x.call(this._weekdaysParse,e))?i:null:"ddd"===t?-1!==(i=x.call(this._shortWeekdaysParse,e))?i:null:-1!==(i=x.call(this._minWeekdaysParse,e))?i:null:"dddd"===t?-1!==(i=x.call(this._weekdaysParse,e))||-1!==(i=x.call(this._shortWeekdaysParse,e))||-1!==(i=x.call(this._minWeekdaysParse,e))?i:null:"ddd"===t?-1!==(i=x.call(this._shortWeekdaysParse,e))||-1!==(i=x.call(this._weekdaysParse,e))||-1!==(i=x.call(this._minWeekdaysParse,e))?i:null:-1!==(i=x.call(this._minWeekdaysParse,e))||-1!==(i=x.call(this._weekdaysParse,e))||-1!==(i=x.call(this._shortWeekdaysParse,e))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=l([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(i="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(i.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},g.weekdaysRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||st.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(c(this,"_weekdaysRegex")||(this._weekdaysRegex=et),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},g.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||st.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(c(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=tt),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},g.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||st.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(c(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=nt),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},g.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},g.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ft("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===M(e%100/10)?"th":1==t?"st":2==t?"nd":3==t?"rd":"th")}}),f.lang=e("moment.lang is deprecated. Use moment.locale instead.",ft),f.langData=e("moment.langData is deprecated. Use moment.localeData instead.",P);var _n=Math.abs;function yn(e,t,n,s){t=C(t,n);return e._milliseconds+=s*t._milliseconds,e._days+=s*t._days,e._months+=s*t._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function wn(e){return 4800*e/146097}function pn(e){return 146097*e/4800}function kn(e){return function(){return this.as(e)}}de=kn("ms"),t=kn("s"),ye=kn("m"),he=kn("h"),Fe=kn("d"),_e=kn("w"),me=kn("M"),Qe=kn("Q"),i=kn("y"),ce=de;function Mn(e){return function(){return this.isValid()?this._data[e]:NaN}}var we=Mn("milliseconds"),fe=Mn("seconds"),ge=Mn("minutes"),Pe=Mn("hours"),g=Mn("days"),vn=Mn("months"),Dn=Mn("years");var Yn=Math.round,Sn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function On(e,t,n,s){var i=C(e).abs(),r=Yn(i.as("s")),a=Yn(i.as("m")),o=Yn(i.as("h")),u=Yn(i.as("d")),l=Yn(i.as("M")),d=Yn(i.as("w")),i=Yn(i.as("y")),r=(r<=n.ss?["s",r]:r<n.s&&["ss",r])||a<=1&&["m"]||a<n.m&&["mm",a]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return(r=(r=null!=n.w?r||d<=1&&["w"]||d<n.w&&["ww",d]:r)||l<=1&&["M"]||l<n.M&&["MM",l]||i<=1&&["y"]||["yy",i])[2]=t,r[3]=0<+e,r[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,r)}var bn=Math.abs;function Tn(e){return(0<e)-(e<0)||+e}function xn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s,i,r,a,o=bn(this._milliseconds)/1e3,u=bn(this._days),l=bn(this._months),d=this.asSeconds();return d?(e=k(o/60),t=k(e/60),o%=60,e%=60,n=k(l/12),l%=12,s=o?o.toFixed(3).replace(/\.?0+$/,""):"",i=Tn(this._months)!==Tn(d)?"-":"",r=Tn(this._days)!==Tn(d)?"-":"",a=Tn(this._milliseconds)!==Tn(d)?"-":"",(d<0?"-":"")+"P"+(n?i+n+"Y":"")+(l?i+l+"M":"")+(u?r+u+"D":"")+(t||e||o?"T":"")+(t?a+t+"H":"")+(e?a+e+"M":"")+(o?a+s+"S":"")):"P0D"}var U=Ct.prototype;return U.isValid=function(){return this._isValid},U.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},U.add=function(e,t){return yn(this,e,t,1)},U.subtract=function(e,t){return yn(this,e,t,-1)},U.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=_(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+wn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(pn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},U.asMilliseconds=de,U.asSeconds=t,U.asMinutes=ye,U.asHours=he,U.asDays=Fe,U.asWeeks=_e,U.asMonths=me,U.asQuarters=Qe,U.asYears=i,U.valueOf=ce,U._bubble=function(){var e=this._milliseconds,t=this._days,n=this._months,s=this._data;return 0<=e&&0<=t&&0<=n||e<=0&&t<=0&&n<=0||(e+=864e5*gn(pn(n)+t),n=t=0),s.milliseconds=e%1e3,e=k(e/1e3),s.seconds=e%60,e=k(e/60),s.minutes=e%60,e=k(e/60),s.hours=e%24,t+=k(e/24),n+=e=k(wn(t)),t-=gn(pn(e)),e=k(n/12),n%=12,s.days=t,s.months=n,s.years=e,this},U.clone=function(){return C(this)},U.get=function(e){return e=_(e),this.isValid()?this[e+"s"]():NaN},U.milliseconds=we,U.seconds=fe,U.minutes=ge,U.hours=Pe,U.days=g,U.weeks=function(){return k(this.days()/7)},U.months=vn,U.years=Dn,U.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,s=Sn;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(n=e),"object"==typeof t&&(s=Object.assign({},Sn,t),null!=t.s&&null==t.ss&&(s.ss=t.s-1)),e=this.localeData(),t=On(this,!n,s,e),n&&(t=e.pastFuture(+this,t)),e.postformat(t)},U.toISOString=xn,U.toString=xn,U.toJSON=xn,U.locale=Xt,U.localeData=Kt,U.toIsoString=e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",xn),U.lang=Ke,s("X",0,0,"unix"),s("x",0,0,"valueOf"),w("x",ke),w("X",/[+-]?\d+(\.\d{1,3})?/),v("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e))}),v("x",function(e,t,n){n._d=new Date(M(e))}),f.version="2.30.1",H=R,f.fn=y,f.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},f.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},f.now=function(){return Date.now?Date.now():+new Date},f.utc=l,f.unix=function(e){return R(1e3*e)},f.months=function(e,t){return fn(e,t,"months")},f.isDate=V,f.locale=ft,f.invalid=I,f.duration=C,f.isMoment=d,f.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},f.parseZone=function(){return R.apply(null,arguments).parseZone()},f.localeData=P,f.isDuration=Ut,f.monthsShort=function(e,t){return fn(e,t,"monthsShort")},f.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},f.defineLocale=mt,f.updateLocale=function(e,t){var n,s;return null!=t?(s=ut,null!=W[e]&&null!=W[e].parentLocale?W[e].set(X(W[e]._config,t)):(t=X(s=null!=(n=ct(e))?n._config:s,t),null==n&&(t.abbr=e),(s=new K(t)).parentLocale=W[e],W[e]=s),ft(e)):null!=W[e]&&(null!=W[e].parentLocale?(W[e]=W[e].parentLocale,e===ft()&&ft(e)):null!=W[e]&&delete W[e]),W[e]},f.locales=function(){return ee(W)},f.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},f.normalizeUnits=_,f.relativeTimeRounding=function(e){return void 0===e?Yn:"function"==typeof e&&(Yn=e,!0)},f.relativeTimeThreshold=function(e,t){return void 0!==Sn[e]&&(void 0===t?Sn[e]:(Sn[e]=t,"s"===e&&(Sn.ss=t-1),!0))},f.calendarFormat=function(e,t){return(e=e.diff(t,"days",!0))<-6?"sameElse":e<-1?"lastWeek":e<0?"lastDay":e<1?"sameDay":e<2?"nextDay":e<7?"nextWeek":"sameElse"},f.prototype=y,f.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},f});

/* =========================================================================== */
/* /templates/uniqaweb/uniqa/assets/js/plugins/jquery.maskedinput.min.js */
/* =========================================================================== */
/**
 * jquery.mask.js
 * @version: v1.14.16
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object' && typeof Meteor === 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery || Zepto);
    }

}(function ($) {
    'use strict';

    var Mask = function (el, mask, options) {

        var p = {
            invalid: [],
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    // IE Support
                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    // Firefox support
                    else if (cSelStart || cSelStart === '0') {
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) {}
            },
            setCaret: function(pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        // Firefox, WebKit, etc..
                        if (ctrl.setSelectionRange) {
                            ctrl.setSelectionRange(pos, pos);
                        } else { // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) {}
            },
            events: function() {
                el
                    .on('keydown.mask', function(e) {
                        el.data('mask-keycode', e.keyCode || e.which);
                        el.data('mask-previus-value', el.val());
                        el.data('mask-previus-caret-pos', p.getCaret());
                        p.maskDigitPosMapOld = p.maskDigitPosMap;
                    })
                    .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
                    .on('paste.mask drop.mask', function() {
                        setTimeout(function() {
                            el.keydown().keyup();
                        }, 100);
                    })
                    .on('change.mask', function(){
                        el.data('changed', true);
                    })
                    .on('blur.mask', function(){
                        if (oldValue !== p.val() && !el.data('changed')) {
                            el.trigger('change');
                        }
                        el.data('changed', false);
                    })
                    // it's very important that this callback remains in this position
                    // otherwhise oldValue it's going to work buggy
                    .on('blur.mask', function() {
                        oldValue = p.val();
                    })
                    // select all text on focus
                    .on('focus.mask', function (e) {
                        if (options.selectOnFocus === true) {
                            $(e.target).select();
                        }
                    })
                    // clear the value if it not complete the mask
                    .on('focusout.mask', function() {
                        if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                            p.val('');
                        }
                    });
            },
            getRegexMask: function() {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = {digit: mask.charAt(i), pattern: pattern};
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                        .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function() {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function(v) {
                var isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            calculateCaretPosition: function(oldVal) {
                var newVal = p.getMasked(),
                    caretPosNew = p.getCaret();
                if (oldVal !== newVal) {
                    var caretPosOld = el.data('mask-previus-caret-pos') || 0,
                        newValL = newVal.length,
                        oldValL = oldVal.length,
                        maskDigitsBeforeCaret = 0,
                        maskDigitsAfterCaret = 0,
                        maskDigitsBeforeCaretAll = 0,
                        maskDigitsBeforeCaretAllOld = 0,
                        i = 0;

                    for (i = caretPosNew; i < newValL; i++) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsAfterCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (!p.maskDigitPosMap[i]) {
                            break;
                        }
                        maskDigitsBeforeCaret++;
                    }

                    for (i = caretPosNew - 1; i >= 0; i--) {
                        if (p.maskDigitPosMap[i]) {
                            maskDigitsBeforeCaretAll++;
                        }
                    }

                    for (i = caretPosOld - 1; i >= 0; i--) {
                        if (p.maskDigitPosMapOld[i]) {
                            maskDigitsBeforeCaretAllOld++;
                        }
                    }

                    // if the cursor is at the end keep it there
                    if (caretPosNew > oldValL) {
                        caretPosNew = newValL * 10;
                    } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValL) {
                        if (!p.maskDigitPosMapOld[caretPosNew])  {
                            var caretPos = caretPosNew;
                            caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
                            caretPosNew -= maskDigitsBeforeCaret;
                            if (p.maskDigitPosMap[caretPosNew])  {
                                caretPosNew = caretPos;
                            }
                        }
                    }
                    else if (caretPosNew > caretPosOld) {
                        caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
                        caretPosNew += maskDigitsAfterCaret;
                    }
                }
                return caretPosNew;
            },
            behaviour: function(e) {
                e = e || window.event;
                p.invalid = [];

                var keyCode = el.data('mask-keycode');

                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
                    var newVal = p.getMasked(),
                        caretPos = p.getCaret(),
                        oldVal = el.data('mask-previus-value') || '';

                    // this is a compensation to devices/browsers that don't compensate
                    // caret positioning the right way
                    setTimeout(function() {
                        p.setCaret(p.calculateCaretPosition(oldVal));
                    }, $.jMaskGlobals.keyStrokeCompensation);

                    p.val(newVal);
                    p.setCaret(caretPos);
                    return p.callbacks(e);
                }
            },
            getMasked: function(skipMaskChars, val) {
                var buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    maskDigitCount = 0,
                    maskDigitPosArr = [],
                    lastMaskChar,
                    check;

                if (options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                var lastUntranslatedMaskChar;
                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = jMask.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                            if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar && m !== resetPos) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (valDigit === lastUntranslatedMaskChar) {
                            // matched the last untranslated (raw) mask character that we encountered
                            // likely an insert offset the mask character from the last entry; fall
                            // through and only increment v
                            maskDigitCount--;
                            lastUntranslatedMaskChar = undefined;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                            p.invalid.push({p: v, v: valDigit, e: translation.pattern});
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            maskDigitPosArr.push(v);
                            v += offset;
                        } else {
                            lastUntranslatedMaskChar = maskDigit;
                            maskDigitPosArr.push(v + maskDigitCount);
                            maskDigitCount++;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                var newVal = buf.join('');
                p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
                return newVal;
            },
            mapMaskdigitPositions: function(newVal, maskDigitPosArr, valLen) {
                var maskDiff = options.reverse ? newVal.length - valLen : 0;
                p.maskDigitPosMap = {};
                for (var i = 0; i < maskDigitPosArr.length; i++) {
                    p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
                }
            },
            callbacks: function (e) {
                var val = p.val(),
                    changed = val !== oldValue,
                    defaultArgs = [val, e, el, options],
                    callback = function(name, criteria, args) {
                        if (typeof options[name] === 'function' && criteria) {
                            options[name].apply(this, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === mask.length, defaultArgs);
                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
            }
        };

        el = $(el);
        var jMask = this, oldValue = p.val(), regexMask;

        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;

        // public methods
        jMask.mask = mask;
        jMask.options = options;
        jMask.remove = function() {
            var caret = p.getCaret();
            if (jMask.options.placeholder) {
                el.removeAttr('placeholder');
            }
            if (el.data('mask-maxlength')) {
                el.removeAttr('maxlength');
            }
            p.destroyEvents();
            p.val(jMask.getCleanVal());
            p.setCaret(caret);
            return el;
        };

        // get value without mask
        jMask.getCleanVal = function() {
            return p.getMasked(true);
        };

        // get masked value without the value being in the input or element
        jMask.getMaskedVal = function(val) {
            return p.getMasked(false, val);
        };

        jMask.init = function(onlyMask) {
            onlyMask = onlyMask || false;
            options = options || {};

            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

            jMask = $.extend(true, {}, jMask, options);

            regexMask = p.getRegexMask();

            if (onlyMask) {
                p.events();
                p.val(p.getMasked());
            } else {
                if (options.placeholder) {
                    el.attr('placeholder' , options.placeholder);
                }

                // this is necessary, otherwise if the user submit the form
                // and then press the "back" button, the autocomplete will erase
                // the data. Works fine on IE9+, FF, Opera, Safari.
                if (el.data('mask')) {
                    el.attr('autocomplete', 'off');
                }

                // detect if is necessary let the user type freely.
                // for is a lot faster than forEach.
                for (var i = 0, maxlength = true; i < mask.length; i++) {
                    var translation = jMask.translation[mask.charAt(i)];
                    if (translation && translation.recursive) {
                        maxlength = false;
                        break;
                    }
                }

                if (maxlength) {
                    el.attr('maxlength', mask.length).data('mask-maxlength', true);
                }

                p.destroyEvents();
                p.events();

                var caret = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(caret);
            }
        };

        jMask.init(!el.is('input'));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
            var input = $(this),
                options = {},
                prefix = 'data-mask-',
                mask = input.attr('data-mask');

            if (input.attr(prefix + 'reverse')) {
                options.reverse = true;
            }

            if (input.attr(prefix + 'clearifnotmatch')) {
                options.clearIfNotMatch = true;
            }

            if (input.attr(prefix + 'selectonfocus') === 'true') {
                options.selectOnFocus = true;
            }

            if (notSameMaskObject(input, mask, options)) {
                return input.data('mask', new Mask(this, mask, options));
            }
        },
        notSameMaskObject = function(field, mask, options) {
            options = options || {};
            var maskObject = $(field).data('mask'),
                stringify = JSON.stringify,
                value = $(field).val() || $(field).text();
            try {
                if (typeof mask === 'function') {
                    mask = mask(value);
                }
                return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
            } catch (e) {}
        },
        eventSupported = function(eventName) {
            var el = document.createElement('div'), isSupported;

            eventName = 'on' + eventName;
            isSupported = (eventName in el);

            if ( !isSupported ) {
                el.setAttribute(eventName, 'return;');
                isSupported = typeof el[eventName] === 'function';
            }
            el = null;

            return isSupported;
        };

    $.fn.mask = function(mask, options) {
        options = options || {};
        var selector = this.selector,
            globals = $.jMaskGlobals,
            interval = globals.watchInterval,
            watchInputs = options.watchInputs || globals.watchInputs,
            maskFunction = function() {
                if (notSameMaskObject(this, mask, options)) {
                    return $(this).data('mask', new Mask(this, mask, options));
                }
            };

        $(this).each(maskFunction);

        if (selector && selector !== '' && watchInputs) {
            clearInterval($.maskWatchers[selector]);
            $.maskWatchers[selector] = setInterval(function(){
                $(document).find(selector).each(maskFunction);
            }, interval);
        }
        return this;
    };

    $.fn.masked = function(val) {
        return this.data('mask').getMaskedVal(val);
    };

    $.fn.unmask = function() {
        clearInterval($.maskWatchers[this.selector]);
        delete $.maskWatchers[this.selector];
        return this.each(function() {
            var dataMask = $(this).data('mask');
            if (dataMask) {
                dataMask.remove().removeData('mask');
            }
        });
    };

    $.fn.cleanVal = function() {
        return this.data('mask').getCleanVal();
    };

    $.applyDataMask = function(selector) {
        selector = selector || $.jMaskGlobals.maskElements;
        var $selector = (selector instanceof $) ? selector : $(selector);
        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
        maskElements: 'input,td,span,div',
        dataMaskAttr: '[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        keyStrokeCompensation: 10,
        // old versions of chrome dont work great with input event
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': {pattern: /\d/},
            '9': {pattern: /\d/, optional: true},
            '#': {pattern: /\d/, recursive: true},
            'A': {pattern: /[a-zA-Z0-9]/},
            'S': {pattern: /[a-zA-Z]/}
        }
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
        $.applyDataMask();
    }

    setInterval(function() {
        if ($.jMaskGlobals.watchDataMask) {
            $.applyDataMask();
        }
    }, globals.watchInterval);
}, window.jQuery, window.Zepto));

/* =========================================================================== */
/* /templates/uniqaweb/uniqa/assets/js/plugins/bootstrap.bundle.min.js */
/* =========================================================================== */
/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery)}(this,(function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=n(e);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a.apply(this,arguments)}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}var l="transitionend";var u={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i.default(t).css("transition-duration"),n=i.default(t).css("transition-delay"),o=parseFloat(e),r=parseFloat(n);return o||r?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i.default(t).trigger(l)},supportsTransitionEnd:function(){return Boolean(l)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],a=r&&u.isElement(r)?"element":null===(s=r)||"undefined"==typeof s?""+s:{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}var s},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof i.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=i.default.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};u.jQueryDetection(),i.default.fn.emulateTransitionEnd=function(t){var e=this,n=!1;return i.default(this).one(u.TRANSITION_END,(function(){n=!0})),setTimeout((function(){n||u.triggerTransitionEnd(e)}),t),this},i.default.event.special[u.TRANSITION_END]={bindType:l,delegateType:l,handle:function(t){if(i.default(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var f="bs.alert",d=i.default.fn.alert,c=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){i.default.removeData(this._element,f),this._element=null},e._getRootElement=function(t){var e=u.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=i.default(t).closest(".alert")[0]),n},e._triggerCloseEvent=function(t){var e=i.default.Event("close.bs.alert");return i.default(t).trigger(e),e},e._removeElement=function(t){var e=this;if(i.default(t).removeClass("show"),i.default(t).hasClass("fade")){var n=u.getTransitionDurationFromElement(t);i.default(t).one(u.TRANSITION_END,(function(n){return e._destroyElement(t,n)})).emulateTransitionEnd(n)}else this._destroyElement(t)},e._destroyElement=function(t){i.default(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(f);o||(o=new t(this),n.data(f,o)),"close"===e&&o[e](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),t}();i.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',c._handleDismiss(new c)),i.default.fn.alert=c._jQueryInterface,i.default.fn.alert.Constructor=c,i.default.fn.alert.noConflict=function(){return i.default.fn.alert=d,c._jQueryInterface};var h="bs.button",p=i.default.fn.button,m="active",g='[data-toggle^="button"]',_='input:not([type="hidden"])',v=".btn",b=function(){function t(t){this._element=t,this.shouldAvoidTriggerChange=!1}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=i.default(this._element).closest('[data-toggle="buttons"]')[0];if(n){var o=this._element.querySelector(_);if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(m))t=!1;else{var r=n.querySelector(".active");r&&i.default(r).removeClass(m)}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains(m)),this.shouldAvoidTriggerChange||i.default(o).trigger("change")),o.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(m)),t&&i.default(this._element).toggleClass(m))},e.dispose=function(){i.default.removeData(this._element,h),this._element=null},t._jQueryInterface=function(e,n){return this.each((function(){var o=i.default(this),r=o.data(h);r||(r=new t(this),o.data(h,r)),r.shouldAvoidTriggerChange=n,"toggle"===e&&r[e]()}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),t}();i.default(document).on("click.bs.button.data-api",g,(function(t){var e=t.target,n=e;if(i.default(e).hasClass("btn")||(e=i.default(e).closest(v)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var o=e.querySelector(_);if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"INPUT"!==n.tagName&&"LABEL"===e.tagName||b._jQueryInterface.call(i.default(e),"toggle","INPUT"===n.tagName)}})).on("focus.bs.button.data-api blur.bs.button.data-api",g,(function(t){var e=i.default(t.target).closest(v)[0];i.default(e).toggleClass("focus",/^focus(in)?$/.test(t.type))})),i.default(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(_);o.checked||o.hasAttribute("checked")?i.classList.add(m):i.classList.remove(m)}for(var r=0,a=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;r<a;r++){var s=t[r];"true"===s.getAttribute("aria-pressed")?s.classList.add(m):s.classList.remove(m)}})),i.default.fn.button=b._jQueryInterface,i.default.fn.button.Constructor=b,i.default.fn.button.noConflict=function(){return i.default.fn.button=p,b._jQueryInterface};var y="carousel",E="bs.carousel",w=i.default.fn[y],T="active",C="next",S="prev",N="slid.bs.carousel",D=".active.carousel-item",A={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},k={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},I={TOUCH:"touch",PEN:"pen"},O=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide(C)},e.nextWhenVisible=function(){var t=i.default(this._element);!document.hidden&&t.is(":visible")&&"hidden"!==t.css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(S)},e.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(u.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=this._element.querySelector(D);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)i.default(this._element).one(N,(function(){return e.to(t)}));else{if(n===t)return this.pause(),void this.cycle();var o=t>n?C:S;this._slide(o,this._items[t])}},e.dispose=function(){i.default(this._element).off(".bs.carousel"),i.default.removeData(this._element,E),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=a({},A,t),u.typeCheckConfig(y,t,k),t},e._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&i.default(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&i.default(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var e=function(e){t._pointerEvent&&I[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},n=function(e){t._pointerEvent&&I[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(i.default(this._element).on("pointerdown.bs.carousel",(function(t){return e(t)})),i.default(this._element).on("pointerup.bs.carousel",(function(t){return n(t)})),this._element.classList.add("pointer-event")):(i.default(this._element).on("touchstart.bs.carousel",(function(t){return e(t)})),i.default(this._element).on("touchmove.bs.carousel",(function(e){return function(e){t.touchDeltaX=e.originalEvent.touches&&e.originalEvent.touches.length>1?0:e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),i.default(this._element).on("touchend.bs.carousel",(function(t){return n(t)})))}},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n=t===C,i=t===S,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var a=(o+(t===S?-1:1))%this._items.length;return-1===a?this._items[this._items.length-1]:this._items[a]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(D)),r=i.default.Event("slide.bs.carousel",{relatedTarget:t,direction:e,from:o,to:n});return i.default(this._element).trigger(r),r},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));i.default(e).removeClass(T);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&i.default(n).addClass(T)}},e._updateInterval=function(){var t=this._activeElement||this._element.querySelector(D);if(t){var e=parseInt(t.getAttribute("data-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}},e._slide=function(t,e){var n,o,r,a=this,s=this._element.querySelector(D),l=this._getItemIndex(s),f=e||s&&this._getItemByDirection(t,s),d=this._getItemIndex(f),c=Boolean(this._interval);if(t===C?(n="carousel-item-left",o="carousel-item-next",r="left"):(n="carousel-item-right",o="carousel-item-prev",r="right"),f&&i.default(f).hasClass(T))this._isSliding=!1;else if(!this._triggerSlideEvent(f,r).isDefaultPrevented()&&s&&f){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(f),this._activeElement=f;var h=i.default.Event(N,{relatedTarget:f,direction:r,from:l,to:d});if(i.default(this._element).hasClass("slide")){i.default(f).addClass(o),u.reflow(f),i.default(s).addClass(n),i.default(f).addClass(n);var p=u.getTransitionDurationFromElement(s);i.default(s).one(u.TRANSITION_END,(function(){i.default(f).removeClass(n+" "+o).addClass(T),i.default(s).removeClass("active "+o+" "+n),a._isSliding=!1,setTimeout((function(){return i.default(a._element).trigger(h)}),0)})).emulateTransitionEnd(p)}else i.default(s).removeClass(T),i.default(f).addClass(T),this._isSliding=!1,i.default(this._element).trigger(h);c&&this.cycle()}},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data(E),o=a({},A,i.default(this).data());"object"==typeof e&&(o=a({},o,e));var r="string"==typeof e?e:o.slide;if(n||(n=new t(this,o),i.default(this).data(E,n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if("undefined"==typeof n[r])throw new TypeError('No method named "'+r+'"');n[r]()}else o.interval&&o.ride&&(n.pause(),n.cycle())}))},t._dataApiClickHandler=function(e){var n=u.getSelectorFromElement(this);if(n){var o=i.default(n)[0];if(o&&i.default(o).hasClass("carousel")){var r=a({},i.default(o).data(),i.default(this).data()),s=this.getAttribute("data-slide-to");s&&(r.interval=!1),t._jQueryInterface.call(i.default(o),r),s&&i.default(o).data(E).to(s),e.preventDefault()}}},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return A}}]),t}();i.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",O._dataApiClickHandler),i.default(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),e=0,n=t.length;e<n;e++){var o=i.default(t[e]);O._jQueryInterface.call(o,o.data())}})),i.default.fn[y]=O._jQueryInterface,i.default.fn[y].Constructor=O,i.default.fn[y].noConflict=function(){return i.default.fn[y]=w,O._jQueryInterface};var x="collapse",j="bs.collapse",L=i.default.fn[x],P="show",F="collapse",R="collapsing",B="collapsed",H="width",M='[data-toggle="collapse"]',q={toggle:!0,parent:""},Q={toggle:"boolean",parent:"(string|element)"},W=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(M)),i=0,o=n.length;i<o;i++){var r=n[i],a=u.getSelectorFromElement(r),s=[].slice.call(document.querySelectorAll(a)).filter((function(e){return e===t}));null!==a&&s.length>0&&(this._selector=a,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){i.default(this._element).hasClass(P)?this.hide():this.show()},e.show=function(){var e,n,o=this;if(!(this._isTransitioning||i.default(this._element).hasClass(P)||(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains(F)}))).length&&(e=null),e&&(n=i.default(e).not(this._selector).data(j))&&n._isTransitioning))){var r=i.default.Event("show.bs.collapse");if(i.default(this._element).trigger(r),!r.isDefaultPrevented()){e&&(t._jQueryInterface.call(i.default(e).not(this._selector),"hide"),n||i.default(e).data(j,null));var a=this._getDimension();i.default(this._element).removeClass(F).addClass(R),this._element.style[a]=0,this._triggerArray.length&&i.default(this._triggerArray).removeClass(B).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(a[0].toUpperCase()+a.slice(1)),l=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,(function(){i.default(o._element).removeClass(R).addClass("collapse show"),o._element.style[a]="",o.setTransitioning(!1),i.default(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[a]=this._element[s]+"px"}}},e.hide=function(){var t=this;if(!this._isTransitioning&&i.default(this._element).hasClass(P)){var e=i.default.Event("hide.bs.collapse");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",u.reflow(this._element),i.default(this._element).addClass(R).removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var r=0;r<o;r++){var a=this._triggerArray[r],s=u.getSelectorFromElement(a);null!==s&&(i.default([].slice.call(document.querySelectorAll(s))).hasClass(P)||i.default(a).addClass(B).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[n]="";var l=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,(function(){t.setTransitioning(!1),i.default(t._element).removeClass(R).addClass(F).trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){i.default.removeData(this._element,j),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=a({},q,t)).toggle=Boolean(t.toggle),u.typeCheckConfig(x,t,Q),t},e._getDimension=function(){return i.default(this._element).hasClass(H)?H:"height"},e._getParent=function(){var e,n=this;u.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(e.querySelectorAll(o));return i.default(r).each((function(e,i){n._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])})),e},e._addAriaAndCollapsedClass=function(t,e){var n=i.default(t).hasClass(P);e.length&&i.default(e).toggleClass(B,!n).attr("aria-expanded",n)},t._getTargetFromElement=function(t){var e=u.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(j),r=a({},q,n.data(),"object"==typeof e&&e?e:{});if(!o&&r.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new t(this,r),n.data(j,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return q}}]),t}();i.default(document).on("click.bs.collapse.data-api",M,(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=i.default(this),n=u.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(n));i.default(o).each((function(){var t=i.default(this),n=t.data(j)?"toggle":e.data();W._jQueryInterface.call(t,n)}))})),i.default.fn[x]=W._jQueryInterface,i.default.fn[x].Constructor=W,i.default.fn[x].noConflict=function(){return i.default.fn[x]=L,W._jQueryInterface};var U="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,V=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(U&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}(),Y=U&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),V))}};function z(t){return t&&"[object Function]"==={}.toString.call(t)}function K(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function X(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function G(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=K(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:G(X(t))}function $(t){return t&&t.referenceNode?t.referenceNode:t}var J=U&&!(!window.MSInputMethodContext||!document.documentMode),Z=U&&/MSIE 10/.test(navigator.userAgent);function tt(t){return 11===t?J:10===t?Z:J||Z}function et(t){if(!t)return document.documentElement;for(var e=tt(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===K(n,"position")?et(n):n:t?t.ownerDocument.documentElement:document.documentElement}function nt(t){return null!==t.parentNode?nt(t.parentNode):t}function it(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var a,s,l=r.commonAncestorContainer;if(t!==l&&e!==l||i.contains(o))return"BODY"===(s=(a=l).nodeName)||"HTML"!==s&&et(a.firstElementChild)!==a?et(l):l;var u=nt(t);return u.host?it(u.host,e):it(t,nt(e).host)}function ot(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",i=t.nodeName;if("BODY"===i||"HTML"===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[n]}return t[n]}function rt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=ot(e,"top"),o=ot(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function at(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+i+"Width"])}function st(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],tt(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function lt(t){var e=t.body,n=t.documentElement,i=tt(10)&&getComputedStyle(n);return{height:st("Height",e,n,i),width:st("Width",e,n,i)}}var ut=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},ft=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),dt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function ht(t){return ct({},t,{right:t.left+t.width,bottom:t.top+t.height})}function pt(t){var e={};try{if(tt(10)){e=t.getBoundingClientRect();var n=ot(t,"top"),i=ot(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?lt(t.ownerDocument):{},a=r.width||t.clientWidth||o.width,s=r.height||t.clientHeight||o.height,l=t.offsetWidth-a,u=t.offsetHeight-s;if(l||u){var f=K(t);l-=at(f,"x"),u-=at(f,"y"),o.width-=l,o.height-=u}return ht(o)}function mt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=tt(10),o="HTML"===e.nodeName,r=pt(t),a=pt(e),s=G(t),l=K(e),u=parseFloat(l.borderTopWidth),f=parseFloat(l.borderLeftWidth);n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=ht({top:r.top-a.top-u,left:r.left-a.left-f,width:r.width,height:r.height});if(d.marginTop=0,d.marginLeft=0,!i&&o){var c=parseFloat(l.marginTop),h=parseFloat(l.marginLeft);d.top-=u-c,d.bottom-=u-c,d.left-=f-h,d.right-=f-h,d.marginTop=c,d.marginLeft=h}return(i&&!n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(d=rt(d,e)),d}function gt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=mt(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),a=e?0:ot(n),s=e?0:ot(n,"left"),l={top:a-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:o,height:r};return ht(l)}function _t(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===K(t,"position"))return!0;var n=X(t);return!!n&&_t(n)}function vt(t){if(!t||!t.parentElement||tt())return document.documentElement;for(var e=t.parentElement;e&&"none"===K(e,"transform");)e=e.parentElement;return e||document.documentElement}function bt(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},a=o?vt(t):it(t,$(e));if("viewport"===i)r=gt(a,o);else{var s=void 0;"scrollParent"===i?"BODY"===(s=G(X(e))).nodeName&&(s=t.ownerDocument.documentElement):s="window"===i?t.ownerDocument.documentElement:i;var l=mt(s,a,o);if("HTML"!==s.nodeName||_t(a))r=l;else{var u=lt(t.ownerDocument),f=u.height,d=u.width;r.top+=l.top-l.marginTop,r.bottom=f+l.top,r.left+=l.left-l.marginLeft,r.right=d+l.left}}var c="number"==typeof(n=n||0);return r.left+=c?n:n.left||0,r.top+=c?n:n.top||0,r.right-=c?n:n.right||0,r.bottom-=c?n:n.bottom||0,r}function yt(t){return t.width*t.height}function Et(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var a=bt(n,i,r,o),s={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},l=Object.keys(s).map((function(t){return ct({key:t},s[t],{area:yt(s[t])})})).sort((function(t,e){return e.area-t.area})),u=l.filter((function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight})),f=u.length>0?u[0].key:l[0].key,d=t.split("-")[1];return f+(d?"-"+d:"")}function wt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=i?vt(e):it(e,$(n));return mt(n,o,i)}function Tt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function Ct(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function St(t,e,n){n=n.split("-")[0];var i=Tt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),a=r?"top":"left",s=r?"left":"top",l=r?"height":"width",u=r?"width":"height";return o[a]=e[a]+e[l]/2-i[l]/2,o[s]=n===s?e[s]-i[u]:e[Ct(s)],o}function Nt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function Dt(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t.name===n}));var i=Nt(t,(function(t){return t.name===n}));return t.indexOf(i)}(t,0,n))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&z(n)&&(e.offsets.popper=ht(e.offsets.popper),e.offsets.reference=ht(e.offsets.reference),e=n(e,t))})),e}function At(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=wt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=Et(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=St(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=Dt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function kt(t,e){return t.some((function(t){var n=t.name;return t.enabled&&n===e}))}function It(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!=typeof document.body.style[r])return r}return null}function Ot(){return this.state.isDestroyed=!0,kt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[It("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function xt(t){var e=t.ownerDocument;return e?e.defaultView:window}function jt(t,e,n,i){var o="BODY"===t.nodeName,r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,n,{passive:!0}),o||jt(G(r.parentNode),e,n,i),i.push(r)}function Lt(t,e,n,i){n.updateBound=i,xt(t).addEventListener("resize",n.updateBound,{passive:!0});var o=G(t);return jt(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function Pt(){this.state.eventsEnabled||(this.state=Lt(this.reference,this.options,this.state,this.scheduleUpdate))}function Ft(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,xt(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function Rt(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function Bt(t,e){Object.keys(e).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&Rt(e[n])&&(i="px"),t.style[n]=e[n]+i}))}var Ht=U&&/Firefox/i.test(navigator.userAgent);function Mt(t,e,n){var i=Nt(t,(function(t){return t.name===e})),o=!!i&&t.some((function(t){return t.name===n&&t.enabled&&t.order<i.order}));if(!o){var r="`"+e+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var qt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Qt=qt.slice(3);function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Qt.indexOf(t),i=Qt.slice(n+1).concat(Qt.slice(0,n));return e?i.reverse():i}var Ut={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",u=s?"width":"height",f={start:dt({},l,r[l]),end:dt({},l,r[l]+r[u]-a[u])};t.offsets.popper=ct({},a,f[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n,i=e.offset,o=t.placement,r=t.offsets,a=r.popper,s=r.reference,l=o.split("-")[0];return n=Rt(+i)?[+i,0]:function(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),a=t.split(/(\+|\-)/).map((function(t){return t.trim()})),s=a.indexOf(Nt(a,(function(t){return-1!==t.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,u=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a];return u=u.map((function(t,i){var o=(1===i?!r:r)?"height":"width",a=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,a=!0,t):a?(t[t.length-1]+=e,a=!1,t):t.concat(e)}),[]).map((function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],a=o[2];return r?0===a.indexOf("%")?ht("%p"===a?n:i)[e]/100*r:"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r:r:t}(t,o,e,n)}))})),u.forEach((function(t,e){t.forEach((function(n,i){Rt(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))}))})),o}(i,a,s,l),"left"===l?(a.top+=n[0],a.left-=n[1]):"right"===l?(a.top+=n[0],a.left+=n[1]):"top"===l?(a.left+=n[0],a.top-=n[1]):"bottom"===l&&(a.left+=n[0],a.top+=n[1]),t.popper=a,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||et(t.instance.popper);t.instance.reference===n&&(n=et(n));var i=It("transform"),o=t.instance.popper.style,r=o.top,a=o.left,s=o[i];o.top="",o.left="",o[i]="";var l=bt(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);o.top=r,o.left=a,o[i]=s,e.boundaries=l;var u=e.priority,f=t.offsets.popper,d={primary:function(t){var n=f[t];return f[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(f[t],l[t])),dt({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=f[n];return f[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(f[n],l[t]-("right"===t?f.width:f.height))),dt({},n,i)}};return u.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";f=ct({},f,d[e](t))})),t.offsets.popper=f,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",l=a?"left":"top",u=a?"width":"height";return n[s]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[u]),n[l]>r(i[s])&&(t.offsets.popper[l]=r(i[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!Mt(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,a=r.popper,s=r.reference,l=-1!==["left","right"].indexOf(o),u=l?"height":"width",f=l?"Top":"Left",d=f.toLowerCase(),c=l?"left":"top",h=l?"bottom":"right",p=Tt(i)[u];s[h]-p<a[d]&&(t.offsets.popper[d]-=a[d]-(s[h]-p)),s[d]+p>a[h]&&(t.offsets.popper[d]+=s[d]+p-a[h]),t.offsets.popper=ht(t.offsets.popper);var m=s[d]+s[u]/2-p/2,g=K(t.instance.popper),_=parseFloat(g["margin"+f]),v=parseFloat(g["border"+f+"Width"]),b=m-t.offsets.popper[d]-_-v;return b=Math.max(Math.min(a[u]-p,b),0),t.arrowElement=i,t.offsets.arrow=(dt(n={},d,Math.round(b)),dt(n,c,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(kt(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=bt(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=Ct(i),r=t.placement.split("-")[1]||"",a=[];switch(e.behavior){case"flip":a=[i,o];break;case"clockwise":a=Wt(i);break;case"counterclockwise":a=Wt(i,!0);break;default:a=e.behavior}return a.forEach((function(s,l){if(i!==s||a.length===l+1)return t;i=t.placement.split("-")[0],o=Ct(i);var u=t.offsets.popper,f=t.offsets.reference,d=Math.floor,c="left"===i&&d(u.right)>d(f.left)||"right"===i&&d(u.left)<d(f.right)||"top"===i&&d(u.bottom)>d(f.top)||"bottom"===i&&d(u.top)<d(f.bottom),h=d(u.left)<d(n.left),p=d(u.right)>d(n.right),m=d(u.top)<d(n.top),g=d(u.bottom)>d(n.bottom),_="left"===i&&h||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,v=-1!==["top","bottom"].indexOf(i),b=!!e.flipVariations&&(v&&"start"===r&&h||v&&"end"===r&&p||!v&&"start"===r&&m||!v&&"end"===r&&g),y=!!e.flipVariationsByContent&&(v&&"start"===r&&p||v&&"end"===r&&h||!v&&"start"===r&&g||!v&&"end"===r&&m),E=b||y;(c||_||E)&&(t.flipped=!0,(c||_)&&(i=a[l+1]),E&&(r=function(t){return"end"===t?"start":"start"===t?"end":t}(r)),t.placement=i+(r?"-"+r:""),t.offsets.popper=ct({},t.offsets.popper,St(t.instance.popper,t.offsets.reference,t.placement)),t=Dt(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=r[n]-(s?o[a?"width":"height"]:0),t.placement=Ct(e),t.offsets.popper=ht(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!Mt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=Nt(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=Nt(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,s,l=void 0!==r?r:e.gpuAcceleration,u=et(t.instance.popper),f=pt(u),d={position:o.position},c=function(t,e){var n=t.offsets,i=n.popper,o=n.reference,r=Math.round,a=Math.floor,s=function(t){return t},l=r(o.width),u=r(i.width),f=-1!==["left","right"].indexOf(t.placement),d=-1!==t.placement.indexOf("-"),c=e?f||d||l%2==u%2?r:a:s,h=e?r:s;return{left:c(l%2==1&&u%2==1&&!d&&e?i.left-1:i.left),top:h(i.top),bottom:h(i.bottom),right:c(i.right)}}(t,window.devicePixelRatio<2||!Ht),h="bottom"===n?"top":"bottom",p="right"===i?"left":"right",m=It("transform");if(s="bottom"===h?"HTML"===u.nodeName?-u.clientHeight+c.bottom:-f.height+c.bottom:c.top,a="right"===p?"HTML"===u.nodeName?-u.clientWidth+c.right:-f.width+c.right:c.left,l&&m)d[m]="translate3d("+a+"px, "+s+"px, 0)",d[h]=0,d[p]=0,d.willChange="transform";else{var g="bottom"===h?-1:1,_="right"===p?-1:1;d[h]=s*g,d[p]=a*_,d.willChange=h+", "+p}var v={"x-placement":t.placement};return t.attributes=ct({},v,t.attributes),t.styles=ct({},d,t.styles),t.arrowStyles=ct({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return Bt(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach((function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)})),t.arrowElement&&Object.keys(t.arrowStyles).length&&Bt(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=wt(o,e,t,n.positionFixed),a=Et(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",a),Bt(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Vt=function(){function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};ut(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=Y(this.update.bind(this)),this.options=ct({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(ct({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){i.options.modifiers[e]=ct({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return ct({name:t},i.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&z(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)})),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return ft(t,[{key:"update",value:function(){return At.call(this)}},{key:"destroy",value:function(){return Ot.call(this)}},{key:"enableEventListeners",value:function(){return Pt.call(this)}},{key:"disableEventListeners",value:function(){return Ft.call(this)}}]),t}();Vt.Utils=("undefined"!=typeof window?window:global).PopperUtils,Vt.placements=qt,Vt.Defaults=Ut;var Yt=Vt,zt="dropdown",Kt="bs.dropdown",Xt=i.default.fn[zt],Gt=new RegExp("38|40|27"),$t="disabled",Jt="show",Zt="dropdown-menu-right",te="hide.bs.dropdown",ee="hidden.bs.dropdown",ne="click.bs.dropdown.data-api",ie="keydown.bs.dropdown.data-api",oe='[data-toggle="dropdown"]',re=".dropdown-menu",ae={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},se={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},le=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!i.default(this._element).hasClass($t)){var e=i.default(this._menu).hasClass(Jt);t._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||i.default(this._element).hasClass($t)||i.default(this._menu).hasClass(Jt))){var n={relatedTarget:this._element},o=i.default.Event("show.bs.dropdown",n),r=t._getParentFromElement(this._element);if(i.default(r).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar&&e){if("undefined"==typeof Yt)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var a=this._element;"parent"===this._config.reference?a=r:u.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&i.default(r).addClass("position-static"),this._popper=new Yt(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===i.default(r).closest(".navbar-nav").length&&i.default(document.body).children().on("mouseover",null,i.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),i.default(this._menu).toggleClass(Jt),i.default(r).toggleClass(Jt).trigger(i.default.Event("shown.bs.dropdown",n))}}},e.hide=function(){if(!this._element.disabled&&!i.default(this._element).hasClass($t)&&i.default(this._menu).hasClass(Jt)){var e={relatedTarget:this._element},n=i.default.Event(te,e),o=t._getParentFromElement(this._element);i.default(o).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),i.default(this._menu).toggleClass(Jt),i.default(o).toggleClass(Jt).trigger(i.default.Event(ee,e)))}},e.dispose=function(){i.default.removeData(this._element,Kt),i.default(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;i.default(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},e._getConfig=function(t){return t=a({},this.constructor.Default,i.default(this._element).data(),t),u.typeCheckConfig(zt,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(re))}return this._menu},e._getPlacement=function(){var t=i.default(this._element.parentNode),e="bottom-start";return t.hasClass("dropup")?e=i.default(this._menu).hasClass(Zt)?"top-end":"top-start":t.hasClass("dropright")?e="right-start":t.hasClass("dropleft")?e="left-start":i.default(this._menu).hasClass(Zt)&&(e="bottom-end"),e},e._detectNavbar=function(){return i.default(this._element).closest(".navbar").length>0},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t._config.offset(e.offsets,t._element)),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a({},t,this._config.popperConfig)},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data(Kt);if(n||(n=new t(this,"object"==typeof e?e:null),i.default(this).data(Kt,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=[].slice.call(document.querySelectorAll(oe)),o=0,r=n.length;o<r;o++){var a=t._getParentFromElement(n[o]),s=i.default(n[o]).data(Kt),l={relatedTarget:n[o]};if(e&&"click"===e.type&&(l.clickEvent=e),s){var u=s._menu;if(i.default(a).hasClass(Jt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&i.default.contains(a,e.target))){var f=i.default.Event(te,l);i.default(a).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),n[o].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),i.default(u).removeClass(Jt),i.default(a).removeClass(Jt).trigger(i.default.Event(ee,l)))}}}},t._getParentFromElement=function(t){var e,n=u.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(e){if(!(/input|textarea/i.test(e.target.tagName)?32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||i.default(e.target).closest(re).length):!Gt.test(e.which))&&!this.disabled&&!i.default(this).hasClass($t)){var n=t._getParentFromElement(this),o=i.default(n).hasClass(Jt);if(o||27!==e.which){if(e.preventDefault(),e.stopPropagation(),!o||27===e.which||32===e.which)return 27===e.which&&i.default(n.querySelector(oe)).trigger("focus"),void i.default(this).trigger("click");var r=[].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return i.default(t).is(":visible")}));if(0!==r.length){var a=r.indexOf(e.target);38===e.which&&a>0&&a--,40===e.which&&a<r.length-1&&a++,a<0&&(a=0),r[a].focus()}}}},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return ae}},{key:"DefaultType",get:function(){return se}}]),t}();i.default(document).on(ie,oe,le._dataApiKeydownHandler).on(ie,re,le._dataApiKeydownHandler).on(ne+" keyup.bs.dropdown.data-api",le._clearMenus).on(ne,oe,(function(t){t.preventDefault(),t.stopPropagation(),le._jQueryInterface.call(i.default(this),"toggle")})).on(ne,".dropdown form",(function(t){t.stopPropagation()})),i.default.fn[zt]=le._jQueryInterface,i.default.fn[zt].Constructor=le,i.default.fn[zt].noConflict=function(){return i.default.fn[zt]=Xt,le._jQueryInterface};var ue="bs.modal",fe=i.default.fn.modal,de="modal-open",ce="fade",he="show",pe="modal-static",me="hidden.bs.modal",ge="show.bs.modal",_e="focusin.bs.modal",ve="resize.bs.modal",be="click.dismiss.bs.modal",ye="keydown.dismiss.bs.modal",Ee="mousedown.dismiss.bs.modal",we=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Te={backdrop:!0,keyboard:!0,focus:!0,show:!0},Ce={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Se=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){var n=i.default.Event(ge,{relatedTarget:t});i.default(this._element).trigger(n),n.isDefaultPrevented()||(this._isShown=!0,i.default(this._element).hasClass(ce)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),i.default(this._element).on(be,'[data-dismiss="modal"]',(function(t){return e.hide(t)})),i.default(this._dialog).on(Ee,(function(){i.default(e._element).one("mouseup.dismiss.bs.modal",(function(t){i.default(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return e._showElement(t)})))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=i.default.Event("hide.bs.modal");if(i.default(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var o=i.default(this._element).hasClass(ce);if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),i.default(document).off(_e),i.default(this._element).removeClass(he),i.default(this._element).off(be),i.default(this._dialog).off(Ee),o){var r=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,(function(t){return e._hideModal(t)})).emulateTransitionEnd(r)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return i.default(t).off(".bs.modal")})),i.default(document).off(_e),i.default.removeData(this._element,ue),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=a({},Te,t),u.typeCheckConfig("modal",t,Ce),t},e._triggerBackdropTransition=function(){var t=this,e=i.default.Event("hidePrevented.bs.modal");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add(pe);var o=u.getTransitionDurationFromElement(this._dialog);i.default(this._element).off(u.TRANSITION_END),i.default(this._element).one(u.TRANSITION_END,(function(){t._element.classList.remove(pe),n||i.default(t._element).one(u.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,o)})).emulateTransitionEnd(o),this._element.focus()}},e._showElement=function(t){var e=this,n=i.default(this._element).hasClass(ce),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),i.default(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,n&&u.reflow(this._element),i.default(this._element).addClass(he),this._config.focus&&this._enforceFocus();var r=i.default.Event("shown.bs.modal",{relatedTarget:t}),a=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,i.default(e._element).trigger(r)};if(n){var s=u.getTransitionDurationFromElement(this._dialog);i.default(this._dialog).one(u.TRANSITION_END,a).emulateTransitionEnd(s)}else a()},e._enforceFocus=function(){var t=this;i.default(document).off(_e).on(_e,(function(e){document!==e.target&&t._element!==e.target&&0===i.default(t._element).has(e.target).length&&t._element.focus()}))},e._setEscapeEvent=function(){var t=this;this._isShown?i.default(this._element).on(ye,(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||i.default(this._element).off(ye)},e._setResizeEvent=function(){var t=this;this._isShown?i.default(window).on(ve,(function(e){return t.handleUpdate(e)})):i.default(window).off(ve)},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){i.default(document.body).removeClass(de),t._resetAdjustments(),t._resetScrollbar(),i.default(t._element).trigger(me)}))},e._removeBackdrop=function(){this._backdrop&&(i.default(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=i.default(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),i.default(this._backdrop).appendTo(document.body),i.default(this._element).on(be,(function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._triggerBackdropTransition():e.hide())})),n&&u.reflow(this._backdrop),i.default(this._backdrop).addClass(he),!t)return;if(!n)return void t();var o=u.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(u.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){i.default(this._backdrop).removeClass(he);var r=function(){e._removeBackdrop(),t&&t()};if(i.default(this._element).hasClass(ce)){var a=u.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(u.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(we)),n=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each((function(e,n){var o=n.style.paddingRight,r=i.default(n).css("padding-right");i.default(n).data("padding-right",o).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")})),i.default(n).each((function(e,n){var o=n.style.marginRight,r=i.default(n).css("margin-right");i.default(n).data("margin-right",o).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,r=i.default(document.body).css("padding-right");i.default(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}i.default(document.body).addClass(de)},e._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(we));i.default(t).each((function(t,e){var n=i.default(e).data("padding-right");i.default(e).removeData("padding-right"),e.style.paddingRight=n||""}));var e=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each((function(t,e){var n=i.default(e).data("margin-right");"undefined"!=typeof n&&i.default(e).css("margin-right",n).removeData("margin-right")}));var n=i.default(document.body).data("padding-right");i.default(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each((function(){var o=i.default(this).data(ue),r=a({},Te,i.default(this).data(),"object"==typeof e&&e?e:{});if(o||(o=new t(this,r),i.default(this).data(ue,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Te}}]),t}();i.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var e,n=this,o=u.getSelectorFromElement(this);o&&(e=document.querySelector(o));var r=i.default(e).data(ue)?"toggle":a({},i.default(e).data(),i.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=i.default(e).one(ge,(function(t){t.isDefaultPrevented()||s.one(me,(function(){i.default(n).is(":visible")&&n.focus()}))}));Se._jQueryInterface.call(i.default(e),r,this)})),i.default.fn.modal=Se._jQueryInterface,i.default.fn.modal.Constructor=Se,i.default.fn.modal.noConflict=function(){return i.default.fn.modal=fe,Se._jQueryInterface};var Ne=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],De=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ae=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function ke(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),a=function(t,n){var i=r[t],a=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var s=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[a]||[]);s.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===Ne.indexOf(n)||Boolean(De.test(t.nodeValue)||Ae.test(t.nodeValue));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,r=i.length;o<r;o++)if(i[o].test(n))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},s=0,l=r.length;s<l;s++)a(s);return i.body.innerHTML}var Ie="tooltip",Oe="bs.tooltip",xe=i.default.fn.tooltip,je=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Le=["sanitize","whiteList","sanitizeFn"],Pe="fade",Fe="show",Re="show",Be="out",He="hover",Me="focus",qe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Qe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},We={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Ue={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Ve=function(){function t(t,e){if("undefined"==typeof Yt)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=i.default(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(i.default(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),i.default.removeData(this.element,this.constructor.DATA_KEY),i.default(this.element).off(this.constructor.EVENT_KEY),i.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&i.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===i.default(this.element).css("display"))throw new Error("Please use show on visible elements");var e=i.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){i.default(this.element).trigger(e);var n=u.findShadowRoot(this.element),o=i.default.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!o)return;var r=this.getTipElement(),a=u.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&i.default(r).addClass(Pe);var s="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,l=this._getAttachment(s);this.addAttachmentClass(l);var f=this._getContainer();i.default(r).data(this.constructor.DATA_KEY,this),i.default.contains(this.element.ownerDocument.documentElement,this.tip)||i.default(r).appendTo(f),i.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Yt(this.element,r,this._getPopperConfig(l)),i.default(r).addClass(Fe),i.default(r).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&i.default(document.body).children().on("mouseover",null,i.default.noop);var d=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,i.default(t.element).trigger(t.constructor.Event.SHOWN),e===Be&&t._leave(null,t)};if(i.default(this.tip).hasClass(Pe)){var c=u.getTransitionDurationFromElement(this.tip);i.default(this.tip).one(u.TRANSITION_END,d).emulateTransitionEnd(c)}else d()}},e.hide=function(t){var e=this,n=this.getTipElement(),o=i.default.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==Re&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),i.default(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(i.default(this.element).trigger(o),!o.isDefaultPrevented()){if(i.default(n).removeClass(Fe),"ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,i.default(this.tip).hasClass(Pe)){var a=u.getTransitionDurationFromElement(n);i.default(n).one(u.TRANSITION_END,r).emulateTransitionEnd(a)}else r();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){i.default(this.getTipElement()).addClass("bs-tooltip-"+t)},e.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},e.setContent=function(){var t=this.getTipElement();this.setElementContent(i.default(t.querySelectorAll(".tooltip-inner")),this.getTitle()),i.default(t).removeClass("fade show")},e.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=ke(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?i.default(e).parent().is(t)||t.empty().append(e):t.text(i.default(e).text())},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getPopperConfig=function(t){var e=this;return a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t.config.offset(e.offsets,t.element)),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:u.isElement(this.config.container)?i.default(this.config.container):i.default(document).find(this.config.container)},e._getAttachment=function(t){return qe[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(e){if("click"===e)i.default(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==e){var n=e===He?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o=e===He?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;i.default(t.element).on(n,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},i.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||i.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:He]=!0),i.default(e.getTipElement()).hasClass(Fe)||e._hoverState===Re?e._hoverState=Re:(clearTimeout(e._timeout),e._hoverState=Re,e.config.delay&&e.config.delay.show?e._timeout=setTimeout((function(){e._hoverState===Re&&e.show()}),e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||i.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:He]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Be,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout((function(){e._hoverState===Be&&e.hide()}),e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){var e=i.default(this.element).data();return Object.keys(e).forEach((function(t){-1!==Le.indexOf(t)&&delete e[t]})),"number"==typeof(t=a({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),u.typeCheckConfig(Ie,t,this.constructor.DefaultType),t.sanitize&&(t.template=ke(t.template,t.whiteList,t.sanitizeFn)),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=i.default(this.getTipElement()),e=t.attr("class").match(je);null!==e&&e.length&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(i.default(t).removeClass(Pe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(Oe),r="object"==typeof e&&e;if((o||!/dispose|hide/.test(e))&&(o||(o=new t(this,r),n.data(Oe,o)),"string"==typeof e)){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Qe}},{key:"NAME",get:function(){return Ie}},{key:"DATA_KEY",get:function(){return Oe}},{key:"Event",get:function(){return Ue}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return We}}]),t}();i.default.fn.tooltip=Ve._jQueryInterface,i.default.fn.tooltip.Constructor=Ve,i.default.fn.tooltip.noConflict=function(){return i.default.fn.tooltip=xe,Ve._jQueryInterface};var Ye="bs.popover",ze=i.default.fn.popover,Ke=new RegExp("(^|\\s)bs-popover\\S+","g"),Xe=a({},Ve.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ge=a({},Ve.DefaultType,{content:"(string|element|function)"}),$e={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Je=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,s(e,n);var a=o.prototype;return a.isWithContent=function(){return this.getTitle()||this._getContent()},a.addAttachmentClass=function(t){i.default(this.getTipElement()).addClass("bs-popover-"+t)},a.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},a.setContent=function(){var t=i.default(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(".popover-body"),e),t.removeClass("fade show")},a._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},a._cleanTipClass=function(){var t=i.default(this.getTipElement()),e=t.attr("class").match(Ke);null!==e&&e.length>0&&t.removeClass(e.join(""))},o._jQueryInterface=function(t){return this.each((function(){var e=i.default(this).data(Ye),n="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new o(this,n),i.default(this).data(Ye,e)),"string"==typeof t)){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},r(o,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return Xe}},{key:"NAME",get:function(){return"popover"}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return Ge}}]),o}(Ve);i.default.fn.popover=Je._jQueryInterface,i.default.fn.popover.Constructor=Je,i.default.fn.popover.noConflict=function(){return i.default.fn.popover=ze,Je._jQueryInterface};var Ze="scrollspy",tn="bs.scrollspy",en=i.default.fn[Ze],nn="active",on="position",rn=".nav, .list-group",an={offset:10,method:"auto",target:""},sn={offset:"number",method:"string",target:"(string|element)"},ln=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,i.default(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return n._process(t)})),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":on,n="auto"===this._config.method?e:this._config.method,o=n===on?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var e,r=u.getSelectorFromElement(t);if(r&&(e=document.querySelector(r)),e){var a=e.getBoundingClientRect();if(a.width||a.height)return[i.default(e)[n]().top+o,r]}return null})).filter(Boolean).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},e.dispose=function(){i.default.removeData(this._element,tn),i.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=a({},an,"object"==typeof t&&t?t:{})).target&&u.isElement(t.target)){var e=i.default(t.target).attr("id");e||(e=u.getUID(Ze),i.default(t.target).attr("id",e)),t.target="#"+e}return u.typeCheckConfig(Ze,t,sn),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),n=i.default([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass("dropdown-item")?(n.closest(".dropdown").find(".dropdown-toggle").addClass(nn),n.addClass(nn)):(n.addClass(nn),n.parents(rn).prev(".nav-link, .list-group-item").addClass(nn),n.parents(rn).prev(".nav-item").children(".nav-link").addClass(nn)),i.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains(nn)})).forEach((function(t){return t.classList.remove(nn)}))},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data(tn);if(n||(n=new t(this,"object"==typeof e&&e),i.default(this).data(tn,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"Default",get:function(){return an}}]),t}();i.default(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),e=t.length;e--;){var n=i.default(t[e]);ln._jQueryInterface.call(n,n.data())}})),i.default.fn[Ze]=ln._jQueryInterface,i.default.fn[Ze].Constructor=ln,i.default.fn[Ze].noConflict=function(){return i.default.fn[Ze]=en,ln._jQueryInterface};var un="bs.tab",fn=i.default.fn.tab,dn="active",cn="fade",hn="show",pn=".active",mn="> li > .active",gn=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&i.default(this._element).hasClass(dn)||i.default(this._element).hasClass("disabled")||this._element.hasAttribute("disabled"))){var e,n,o=i.default(this._element).closest(".nav, .list-group")[0],r=u.getSelectorFromElement(this._element);if(o){var a="UL"===o.nodeName||"OL"===o.nodeName?mn:pn;n=(n=i.default.makeArray(i.default(o).find(a)))[n.length-1]}var s=i.default.Event("hide.bs.tab",{relatedTarget:this._element}),l=i.default.Event("show.bs.tab",{relatedTarget:n});if(n&&i.default(n).trigger(s),i.default(this._element).trigger(l),!l.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=document.querySelector(r)),this._activate(this._element,o);var f=function(){var e=i.default.Event("hidden.bs.tab",{relatedTarget:t._element}),o=i.default.Event("shown.bs.tab",{relatedTarget:n});i.default(n).trigger(e),i.default(t._element).trigger(o)};e?this._activate(e,e.parentNode,f):f()}}},e.dispose=function(){i.default.removeData(this._element,un),this._element=null},e._activate=function(t,e,n){var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?i.default(e).children(pn):i.default(e).find(mn))[0],a=n&&r&&i.default(r).hasClass(cn),s=function(){return o._transitionComplete(t,r,n)};if(r&&a){var l=u.getTransitionDurationFromElement(r);i.default(r).removeClass(hn).one(u.TRANSITION_END,s).emulateTransitionEnd(l)}else s()},e._transitionComplete=function(t,e,n){if(e){i.default(e).removeClass(dn);var o=i.default(e.parentNode).find("> .dropdown-menu .active")[0];o&&i.default(o).removeClass(dn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}i.default(t).addClass(dn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),u.reflow(t),t.classList.contains(cn)&&t.classList.add(hn);var r=t.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&i.default(r).hasClass("dropdown-menu")){var a=i.default(t).closest(".dropdown")[0];if(a){var s=[].slice.call(a.querySelectorAll(".dropdown-toggle"));i.default(s).addClass(dn)}t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(un);if(o||(o=new t(this),n.data(un,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}}]),t}();i.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),gn._jQueryInterface.call(i.default(this),"show")})),i.default.fn.tab=gn._jQueryInterface,i.default.fn.tab.Constructor=gn,i.default.fn.tab.noConflict=function(){return i.default.fn.tab=fn,gn._jQueryInterface};var _n="bs.toast",vn=i.default.fn.toast,bn="hide",yn="show",En="showing",wn="click.dismiss.bs.toast",Tn={animation:!0,autohide:!0,delay:500},Cn={animation:"boolean",autohide:"boolean",delay:"number"},Sn=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var e=t.prototype;return e.show=function(){var t=this,e=i.default.Event("show.bs.toast");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var n=function(){t._element.classList.remove(En),t._element.classList.add(yn),i.default(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove(bn),u.reflow(this._element),this._element.classList.add(En),this._config.animation){var o=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,n).emulateTransitionEnd(o)}else n()}},e.hide=function(){if(this._element.classList.contains(yn)){var t=i.default.Event("hide.bs.toast");i.default(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},e.dispose=function(){this._clearTimeout(),this._element.classList.contains(yn)&&this._element.classList.remove(yn),i.default(this._element).off(wn),i.default.removeData(this._element,_n),this._element=null,this._config=null},e._getConfig=function(t){return t=a({},Tn,i.default(this._element).data(),"object"==typeof t&&t?t:{}),u.typeCheckConfig("toast",t,this.constructor.DefaultType),t},e._setListeners=function(){var t=this;i.default(this._element).on(wn,'[data-dismiss="toast"]',(function(){return t.hide()}))},e._close=function(){var t=this,e=function(){t._element.classList.add(bn),i.default(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove(yn),this._config.animation){var n=u.getTransitionDurationFromElement(this._element);i.default(this._element).one(u.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},e._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data(_n);if(o||(o=new t(this,"object"==typeof e&&e),n.data(_n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e](this)}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.2"}},{key:"DefaultType",get:function(){return Cn}},{key:"Default",get:function(){return Tn}}]),t}();i.default.fn.toast=Sn._jQueryInterface,i.default.fn.toast.Constructor=Sn,i.default.fn.toast.noConflict=function(){return i.default.fn.toast=vn,Sn._jQueryInterface},t.Alert=c,t.Button=b,t.Carousel=O,t.Collapse=W,t.Dropdown=le,t.Modal=Se,t.Popover=Je,t.Scrollspy=ln,t.Tab=gn,t.Toast=Sn,t.Tooltip=Ve,t.Util=u,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURLIgnored=bootstrap.bundle.min.js.map

/* =========================================================================== */
/* /templates/uniqaweb/uniqa/assets/js/plugins/bootstrap-datepicker.min.js */
/* =========================================================================== */
/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(c,d){return function(){return d!==b&&a.fn.datepicker.deprecated(d),this[c].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;c<d;c++)if(0<=this[c].valueOf()-b&&this[c].valueOf()-b<864e5)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a.data(b,"datepicker",this),this._events=[],this._secondaryEvents=[],this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return Number(b)+1}),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(b){return a.each(r.viewModes,function(c,d){if(b===c||-1!==a.inArray(b,d.names))return b=c,!1}),b},_resolveDaysOfWeek:function(b){return a.isArray(b)||(b=b.split(/[,\s]*/)),a.map(b,Number)},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;return a(c).length>0}catch(a){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView),e.minViewMode=this._resolveViewName(e.minViewMode),e.maxViewMode=this._resolveViewName(e.maxViewMode),e.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,e.startView)),!0!==e.multidate&&(e.multidate=Number(e.multidate)||!1,!1!==e.multidate&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-1/0&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-1/0),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=this._resolveDaysOfWeek(e.daysOfWeekDisabled||[]),e.daysOfWeekHighlighted=this._resolveDaysOfWeek(e.daysOfWeekHighlighted||[]),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=e.datesDisabled.split(",")),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate instanceof Date||"string"==typeof e.defaultViewDate)e.defaultViewDate=r.parseDate(e.defaultViewDate,g,e.language,e.assumeNearbyYear);else if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};!0===this.o.showOnFocus&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.inputField.length?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[this.picker,".prev, .next",{click:a.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:a.proxy(this.dayCellClick,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,viewMode:this.viewMode,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){if(!(this.inputField.is(":disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){if(!a)return a;var b=new Date(a.getTime()+6e4*a.getTimezoneOffset());return b.getTimezoneOffset()!==a.getTimezoneOffset()&&(b=new Date(a.getTime()+6e4*b.getTimezoneOffset())),b},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&c(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return a!==b?new Date(a):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,a.map(b,this._utc_to_local)),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){return this._process_options({datesDisabled:a}),this.update(),this},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=a(this.o.container),e=d.width(),f="body"===this.o.container?a(document).scrollTop():d.scrollTop(),g=d.offset(),h=[0];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==Number(b)&&h.push(Number(b))});var i=Math.max.apply(Math,h)+this.o.zIndexOffset,j=this.component?this.component.parent().offset():this.element.offset(),k=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),l=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),m=j.left-g.left,n=j.top-g.top;"body"!==this.o.container&&(n+=f),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(m-=b-l)):j.left<0?(this.picker.addClass("datepicker-orient-left"),m-=j.left-10):m+b>e?(this.picker.addClass("datepicker-orient-right"),m+=l-b):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");var o,p=this.o.orientation.y;if("auto"===p&&(o=-f+n-c,p=o<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+p),"top"===p?n-=c+parseInt(this.picker.css("padding-top")):n+=k,this.o.rtl){var q=e-(m+l);this.picker.css({top:n,right:q,zIndex:i})}else this.picker.css({top:n,left:m,zIndex:i});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),d?(this.setValue(),this.element.change()):this.dates.length&&String(b)!==String(this.dates)&&d&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&b.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',-1!==a.inArray(b,this.o.daysOfWeekDisabled)&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)}},fillMonths:function(){for(var a,b=this._utc_to_local(this.viewDate),c="",d=0;d<12;d++)a=b&&b.getMonth()===d?" focused":"",c+='<span class="month'+a+'">'+q[this.o.language].monthsShort[d]+"</span>";this.picker.find(".datepicker-months td").html(c)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],f=this.viewDate.getUTCFullYear(),g=this.viewDate.getUTCMonth(),h=d();return b.getUTCFullYear()<f||b.getUTCFullYear()===f&&b.getUTCMonth()<g?c.push("old"):(b.getUTCFullYear()>f||b.getUTCFullYear()===f&&b.getUTCMonth()>g)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&e(b,h)&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i){for(var j,k,l,m="",n=e/10,o=this.picker.find(c),p=Math.floor(f/e)*e,q=p+9*n,r=Math.floor(this.viewDate.getFullYear()/n)*n,s=a.map(this.dates,function(a){return Math.floor(a.getUTCFullYear()/n)*n}),t=p-n;t<=q+n;t+=n)j=[d],k=null,t===p-n?j.push("old"):t===q+n&&j.push("new"),-1!==a.inArray(t,s)&&j.push("active"),(t<g||t>h)&&j.push("disabled"),t===r&&j.push("focused"),i!==a.noop&&(l=i(new Date(t,0,1)),l===b?l={}:"boolean"==typeof l?l={enabled:l}:"string"==typeof l&&(l={classes:l}),!1===l.enabled&&j.push("disabled"),l.classes&&(j=j.concat(l.classes.split(/\s+/))),l.tooltip&&(k=l.tooltip)),m+='<span class="'+j.join(" ")+'"'+(k?' title="'+k+'"':"")+">"+t+"</span>";o.find(".datepicker-switch").text(p+"-"+q),o.find("td").html(m)},fill:function(){var e,f,g=new Date(this.viewDate),h=g.getUTCFullYear(),i=g.getUTCMonth(),j=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,k=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,m=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,n=q[this.o.language].today||q.en.today||"",o=q[this.o.language].clear||q.en.clear||"",p=q[this.o.language].titleFormat||q.en.titleFormat,s=d(),t=(!0===this.o.todayBtn||"linked"===this.o.todayBtn)&&s>=this.o.startDate&&s<=this.o.endDate&&!this.weekOfDateIsDisabled(s);if(!isNaN(h)&&!isNaN(i)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(g,p,this.o.language)),this.picker.find("tfoot .today").text(n).css("display",t?"table-cell":"none"),this.picker.find("tfoot .clear").text(o).css("display",!0===this.o.clearBtn?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var u=c(h,i,0),v=u.getUTCDate();u.setUTCDate(v-(u.getUTCDay()-this.o.weekStart+7)%7);var w=new Date(u);u.getUTCFullYear()<100&&w.setUTCFullYear(u.getUTCFullYear()),w.setUTCDate(w.getUTCDate()+42),w=w.valueOf();for(var x,y,z=[];u.valueOf()<w;){if((x=u.getUTCDay())===this.o.weekStart&&(z.push("<tr>"),this.o.calendarWeeks)){var A=new Date(+u+(this.o.weekStart-x-7)%7*864e5),B=new Date(Number(A)+(11-A.getUTCDay())%7*864e5),C=new Date(Number(C=c(B.getUTCFullYear(),0,1))+(11-C.getUTCDay())%7*864e5),D=(B-C)/864e5/7+1;z.push('<td class="cw">'+D+"</td>")}y=this.getClassNames(u),y.push("day");var E=u.getUTCDate();this.o.beforeShowDay!==a.noop&&(f=this.o.beforeShowDay(this._utc_to_local(u)),f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1===f.enabled&&y.push("disabled"),f.classes&&(y=y.concat(f.classes.split(/\s+/))),f.tooltip&&(e=f.tooltip),f.content&&(E=f.content)),y=a.isFunction(a.uniqueSort)?a.uniqueSort(y):a.unique(y),z.push('<td class="'+y.join(" ")+'"'+(e?' title="'+e+'"':"")+' data-date="'+u.getTime().toString()+'">'+E+"</td>"),e=null,x===this.o.weekEnd&&z.push("</tr>"),u.setUTCDate(u.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(z.join(""));var F=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",G=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?F:h).end().find("tbody span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===h&&G.eq(b.getUTCMonth()).addClass("active")}),(h<j||h>l)&&G.addClass("disabled"),h===j&&G.slice(0,k).addClass("disabled"),h===l&&G.slice(m+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var H=this;a.each(G,function(c,d){var e=new Date(h,c,1),f=H.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),!1!==f.enabled||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,h,j,l,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,h,j,l,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,h,j,l,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a,b,c=new Date(this.viewDate),d=c.getUTCFullYear(),e=c.getUTCMonth(),f=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,g=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,h=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,i=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,j=1;switch(this.viewMode){case 4:j*=10;case 3:j*=10;case 2:j*=10;case 1:a=Math.floor(d/j)*j<=f,b=Math.floor(d/j)*j+j>h;break;case 0:a=d<=f&&e<=g,b=d>=h&&e>=i}this.picker.find(".prev").toggleClass("disabled",a),this.picker.find(".next").toggleClass("disabled",b)}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h;e=a(b.target),e.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),e.hasClass("today")&&!e.hasClass("day")&&(this.setViewMode(0),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("month")||e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),f=1,1===this.viewMode?(h=e.parent().find("span").index(e),g=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(h)):(h=0,g=Number(e.text()),this.viewDate.setUTCFullYear(g)),this._trigger(r.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(c(g,h,f)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(b){var c=a(b.currentTarget),d=c.data("date"),e=new Date(d);this.o.updateViewDate&&(e.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),e.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(e)},navArrowsClick:function(b){var c=a(b.currentTarget),d=c.hasClass("prev")?-1:1;0!==this.viewMode&&(d*=12*r.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,d),this._trigger(r.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(!0===this.o.multidate||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):!1===this.o.multidate?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),(!b&&this.o.updateViewDate||"view"===b)&&(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),c=(c+12)%12;else{for(var j=0;j<i;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(40!==a.keyCode&&27!==a.keyCode||(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"))&&this._trigger("changeYear",this.viewDate):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&(38!==a.keyCode&&40!==a.keyCode||(b*=4),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(a){this.viewMode=a,this.picker.children("div").hide().filter(".datepicker-"+r.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var l=function(b,c){a.data(b,"datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,this.keepEmptyValues=c.keepEmptyValues,delete c.keepEmptyValues,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a.data(b,"datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},clearDates:function(){a.each(this.pickers,function(a,b){b.clearDates()})},dateUpdated:function(c){if(!this.updating){this.updating=!0;var d=a.data(c.target,"datepicker");if(d!==b){var e=d.getUTCDate(),f=this.keepEmptyValues,g=a.inArray(c.target,this.inputs),h=g-1,i=g+1,j=this.inputs.length;if(-1!==g){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b!==d&&f||b.setUTCDate(e)}),e<this.dates[h])for(;h>=0&&e<this.dates[h];)this.pickers[h--].setUTCDate(e);else if(e>this.dates[i])for(;i<j&&e>this.dates[i];)this.pickers[i++].setUTCDate(e);this.updateDates(),delete this.updating}}}},destroy:function(){a.map(this.pickers,function(a){a.destroy()}),a(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:f("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,e,f,g){function h(a,b){return!0===b&&(b=10),a<100&&(a+=2e3)>(new Date).getFullYear()+b&&(a-=100),a}function i(){var a=this.slice(0,j[n].length),b=j[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!c)return b;if(c instanceof Date)return c;if("string"==typeof e&&(e=r.parseFormat(e)),e.toValue)return e.toValue(c,e,f);var j,l,m,n,o,p={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},s={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(c in s&&(c=s[c]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)){for(j=c.match(/([\-+]\d+)([dmwy])/gi),c=new Date,n=0;n<j.length;n++)l=j[n].match(/([\-+]\d+)([dmwy])/i),m=Number(l[1]),o=p[l[2].toLowerCase()],c=k.prototype[o](c,m);return k.prototype._zero_utc_time(c)}j=c&&c.match(this.nonpunctuation)||[];var t,u,v={},w=["yyyy","yy","M","MM","m","mm","d","dd"],x={yyyy:function(a,b){return a.setUTCFullYear(g?h(b,g):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;b<0;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};x.yy=x.yyyy,x.M=x.MM=x.mm=x.m,x.dd=x.d,c=d();var y=e.parts.slice();if(j.length!==y.length&&(y=a(y).filter(function(b,c){return-1!==a.inArray(c,w)}).toArray()),j.length===y.length){var z;for(n=0,z=y.length;n<z;n++){if(t=parseInt(j[n],10),l=y[n],isNaN(t))switch(l){case"MM":u=a(q[f].months).filter(i),t=a.inArray(u[0],q[f].months)+1;break;case"M":u=a(q[f].monthsShort).filter(i),t=a.inArray(u[0],q[f].monthsShort)+1}v[l]=t}var A,B;for(n=0;n<w.length;n++)(B=w[n])in v&&!isNaN(v[B])&&(A=new Date(c),x[B](A,v[B]),isNaN(A)||(c=A))}return c},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;g<=h;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},
headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+o.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+o.templates.rightArrow+"</th></tr></thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.9.0",a.fn.datepicker.deprecated=function(a){var b=window.console;b&&b.warn&&b.warn("DEPRECATED: "+a)},a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});

/* =========================================================================== */
/* /templates/uniqaweb/uniqa/assets/js/plugins/slick.min.js */
/* =========================================================================== */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype. buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


/* =========================================================================== */
/* /templates/uniqaweb/uniqa/assets/js/plugins/fancybox.min.js */
/* =========================================================================== */
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"")?s=(s=t.data?t.data.items:[]).length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]'):s=[o],(r=n(s).index(o))<0&&(r=0),(a=n.fancybox.open(s,e,r)).$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)},u=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)},f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,(function(t,e){n.isArray(e)&&(o[t]=e)})),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s,r=a.group[a.currIndex].opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,(function(t,e){i+=r.btnTpl[e]||""})),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach((function(t){a.$refs[t]=o.find(".fancybox-"+t)})),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,(function(t,e){return void 0===n[e]?t:n[e]}))},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,(function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(d=(i=n(e)).data()||{},(d=n.extend(!0,{},d,d.options)).$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&((c=r.split(/\s+/,2)).length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)})),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",(function(t){t.stopPropagation(),t.preventDefault(),e.close(t)})).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",(function(t){t.stopPropagation(),t.preventDefault(),e.previous()})).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",(function(t){t.stopPropagation(),t.preventDefault(),e.next()})).on("click.fb","[data-fancybox-zoom]",(function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()})),s.on("orientationchange.fb resize.fb",(function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d((function(){e.update(t)}))):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout((function(){e.$refs.stage.show(),e.update(t)}),n.fancybox.isMobile?600:250))})),r.on("keydown.fb",(function(t){var o,i=(n.fancybox?n.fancybox.getInstance():null).current,a=t.keyCode||t.which;if(9!=a)return!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")?void 0:8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a);i.opts.trapFocus&&e.focus(t)})),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",(function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1})),e.idleInterval=t.setInterval((function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())}),1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,(function(t,e){n.fancybox.stop(e.$slide,!0)})),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,(function(t,o){o.$slide.removeClass("fancybox-animated").removeClass((function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}));var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,(function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()}))}))):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,(function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")}),!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=(o=t%i.group.length)<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,(i=n.fancybox.getTranslate(u)).top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&((a=i.left*r-(t*r-t))>0&&(a=0),a<f-h&&(a=f-h)),g>p&&((s=i.top*c-(e*c-e))>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,(function(){l.isAnimating=!1})),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,(function(){o.isAnimating=!1})))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),(l*=i=Math.min(1,e/l,o/d))>e-.5&&(l=e),(d*=i)>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(d>l/(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9)?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,(function(n,o){e.updateSlide(o,t)}))},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,(function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()}),!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),i=!!(o=a.canPan(t,e))||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o,i=!1,a=this.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=(i=n.fancybox.getTranslate(s)).width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,(o=t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",(function(){i.abort()}));break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout((function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)}),50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,(o=e.createElement("img")).onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,(o=s.split(",").map((function(t){var e={};return t.trim().split(/\s+/).forEach((function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])})),e}))).sort((function(t,e){return t.value-e.value}));for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",(function(){o.setError(t)})).one("load",(function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&((e=t.opts.sizes)&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout((function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()}),Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))})).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",(function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)})),a.on("refresh.fb",(function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{o=(n=e.contents()).find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}}))):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",(function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1}))},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",(function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)})),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e;(t=t||this.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",(function(t){return 2==t.button&&t.preventDefault(),!0})),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?((e=s.clone().appendTo(s.parent())).children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a,s=t||this.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,"auto"==(a=t.opts.zoomOpacity)&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,(function(){s.isAnimating=!1,s.complete()}))):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,(function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()}),!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,(function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())})),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",(function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()})),o.opts.autoFocus&&"html"===o.contentType&&((t=o.$content.find("input[autofocus]:enabled:visible:first")).length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],(e=o.slides[o.currPos-1])&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||((i=(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible")).filter(r).filter((function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}))).length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each((function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)})),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!(u.isClosing||(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d((function(){u.update()})),1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),0))))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,(o=n.fancybox.getInstance())?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e,n=["infobar","toolbar","nav"];!t&&this.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map((function(t){return"fancybox-show-"+t})).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&{top:(e=t[0].getBoundingClientRect()).top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))}},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,(function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))})),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout((function(){t.trigger(f)}),o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return(e=(t=t||{}).selector||!1)?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",(function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})})),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",(function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}}))}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,(function(t,n){e=e.replace("$"+t,n||"")})),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",(function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,(function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){"?"==(d=c[o.paramPlace])[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,(function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))})):"vimeo"===e&&(p=p.replace("&%23","#")),!1}})),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)}));var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;this[t].loaded?setTimeout((function(){n.done(t)})):this[t].loading||(this[t].loading=!0,(e=document.createElement("script")).type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o)).on("ended",(function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)},i=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)},a=function(e){var n=[];for(var o in e=(e=e.originalEvent||e||t.e).touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e])e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;!(e=c(t.get(0)))&&((t=t.parent()).length&&!t.hasClass("fancybox-stage")&&!t.is("body")););return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o((function(){s.sliderLastPos&&(n.each(s.instance.slides,(function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})})),s.$container.addClass("fancybox-is-sliding"))}));else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,(function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass((function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")})),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})})),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?t.startPoints=t.newPoints:(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o((function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?t=(t=t>0?0:t)<a-n?a-n:t:t=Math.max(0,a/2-n/2),o>s?e=(e=e>0?0:e)<s-o?s-o:e:e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u,f=s(e.newPoints[0],e.newPoints[1])/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x,w,$,S={top:d+(b+(v-e.centerPointStartY)),left:l+(g+y),scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o((function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)}))},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),(o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height)).width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,i={top:e=a.contentLastPos.top,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout((function(){i.tapped=null,r.isAnimating||f("click"+o)}),500):f("click"+o);return this}},n(e).on("onActivate.fb",(function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))})).on("beforeClose.fb",(function(t,e){e&&e.Guestures&&e.Guestures.destroy()}))}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",(function(){t.toggle()})),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout((function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)}),i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",(function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())}))}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){(e=e||t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,(function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))}))}e(t).on({"onInit.fb":function(t,e){var i;n?e&&e.group[e.currIndex].opts.fullScreen?((i=e.$refs.container).on("click.fb-fullscreen","[data-fancybox-fullscreen]",(function(t){t.stopPropagation(),t.preventDefault(),o.toggle()})),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide():e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",(function(){e.toggle()})),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",(function(){i.jumpTo(e(this).attr("data-index"))}))),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,(function(e,n){(t=n.thumb)||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")})),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(n=(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active")).position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&((n=new o(e)).isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,(function(t){return e[t]}))}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",(function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",(function(){t.close(null,0)})),e.$content.find(".fancybox-share__button").click((function(){return window.open(this.href,"Share","width=550, height=450"),!1}))},mobile:{autoFocus:!1}}}))}))}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])&&parseInt(n.pop(-1),10)||1,i;return{hash:e,index:o<1?1:o,gallery:n.join("-")}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(""!==(n=(e=t.current?t.current.opts:t.opts).hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,(function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}))}),n((function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout((function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null}),300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",(function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),(function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1})),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)})),setTimeout((function(){n.fancybox.getInstance()||i(o())}),50))}))}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",(function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))}))}})}(document,jQuery);

/* =========================================================================== */
/* /templates/uniqaweb/uniqa/assets/js/global-functions.min.js */
/* =========================================================================== */
var Ninja = (function(){

    var  debugInfo = {
        allow: false
    };

    function createDebugInfo() {

        if($(".md-debug-info").length) {

            var setDebugInfo = {
                allow: $(".md-debug-info").length > 0,
                blockDeviceSize: $(".md-debug-info").find(".device-size"),
                blockClasses: $(".html-class-list"),
                blockNewSize: $(".device-resize-new-size"),
                blockWidthInfo: $(".device-resize-w-info"),
                blockHeightInfo: $(".device-resize-h-info"),
                blockDeviceType: $(".device-type-from-css"),
                classesList: $('html').attr('class').split(/\s+/),
                windowInfo: $(window).width() + " x " + $(window).height()
            }

            debugInfo = $.extend({}, debugInfo, setDebugInfo);

            setTimeout(function () {
                var classes = "";
                $.each(debugInfo.classesList, function (index, item) {
                    classes += item + "<br>";
                });
                debugInfo.blockClasses.html("").append(classes);
                debugInfo.blockDeviceSize.html(debugInfo.windowInfo);
            }, 1000);
        }
    }

    var defaults = {
        fireTime:200,
        debug:false,

        onDinosaur: function() {},
        onDinosaurBlink: function() {},
        onDinosaurUp: function() {},
        onDinosaurUpBlink: function() {},

        onMobile: function() {},
        onMobileBlink: function() {},
        onMobileUp: function() {},
        onMobileUpBlink: function() {},
        onMobileDown: function() {},
        onMobileDownBlink: function() {},

        onTablet: function() {},
        onTabletBlink: function() {},
        onTabletUp: function() {},
        onTabletUpBlink: function() {},
        onTabletDown: function() {},
        onTabletDownBlink: function() {},

        onLaptop: function() {},
        onLaptopBlink: function() {},
        onLaptopUp: function() {},
        onLaptopUpBlink: function() {},
        onLaptopDown: function() {},
        onLaptopDownBlink: function() {},

        onDesktop: function() {},
        onDesktopBlink: function() {},
        onDesktopDown: function() {},
        onDesktopDownBlink: function() {},

        onResize: function() {},
        onResizeWidth: function() {},
        onResizeHeight: function() {}
    }

    function bindEvents() {

        var isNew,
        lastWidth = $(window).width(),
        lastHeight = $(window).height();

        $(window).on("orientationchange resize", function() {

            function isNewWidth(){
                isNew = false;
                if($(window).width()!=lastWidth){
                    lastWidth = $(window).width();
                    isNew = true;
                }
                return isNew;
            }

            function isNewHeight(){
                isNew = false;
                if($(window).height()!=lastHeight){
                    lastHeight = $(window).height();
                    isNew = true;
                }
                return isNew;
            }

            waitForFinalEvent(function(){
                defaults.onResize();
                if(debugInfo.allow){
                    debugInfo.blockNewSize.html(" / " + $(window).width() + " x " + $(window).height());
                }
                if(isNewWidth()) {
                    defaults.onResizeWidth();
                    bp.storeLastValue();
                    callFuncByScreenSize();
                    if(debugInfo.allow){
                        debugInfo.blockWidthInfo.html("true");
                    }
                }
                if(isNewHeight()) {
                    defaults.onResizeHeight();
                    if(debugInfo.allow){
                        debugInfo.blockHeightInfo.html("true");
                    }
                }
            }, defaults.fireTime);

        });
    }
    
    var bp = {
        deviceType: [
            "onChange_dinosaur",
            "onChange_mobile",
            "onChange_tablet",
            "onChange_laptop",
            "onChange_desktop",
            "onChangeUp_dinosaur",
            "onChangeUp_mobile",
            "onChangeUp_tablet",
            "onChangeUp_laptop",
            "onChangeDown_mobile",
            "onChangeDown_tablet",
            "onChangeDown_laptop",
            "onChangeDown_desktop"
        ],
        deviceValue: [],
        deviceLastValue: [],
        deviceState: [],
        deviceFunctions: {
            "onChange_dinosaur": function() { defaults.onDinosaur(); if(debugInfo.allow){ debugInfo.blockDeviceType.html("onDinosaur"); } },
            "onChange_mobile": function() { defaults.onMobile(); if(debugInfo.allow){ debugInfo.blockDeviceType.html("onMobile"); } },
            "onChange_tablet": function() { defaults.onTablet(); if(debugInfo.allow){ debugInfo.blockDeviceType.html("onTablet"); } },
            "onChange_laptop": function() { defaults.onLaptop(); if(debugInfo.allow){ debugInfo.blockDeviceType.html("onLaptop"); } },
            "onChange_desktop": function() { defaults.onDesktop(); if(debugInfo.allow){ debugInfo.blockDeviceType.html("onDesktop"); } },
            "onChangeUp_dinosaur": function() { defaults.onDinosaurUp(); },
            "onChangeUp_mobile": function() { defaults.onMobileUp(); },
            "onChangeUp_tablet": function() { defaults.onTabletUp(); },
            "onChangeUp_laptop": function() { defaults.onLaptopUp(); },
            "onChangeDown_mobile": function() { defaults.onMobileDown(); },
            "onChangeDown_tablet": function() { defaults.onTabletDown(); },
            "onChangeDown_laptop": function() { defaults.onLaptopDown(); },
            "onChangeDown_desktop": function() { defaults.onDesktopDown(); }
        },
        deviceFunctionsBlink: {
            "onChange_dinosaur": function() { defaults.onDinosaurBlink(); },
            "onChange_mobile": function() { defaults.onMobileBlink(); },
            "onChange_tablet": function() { defaults.onTabletBlink(); },
            "onChange_laptop": function() { defaults.onLaptopBlink(); },
            "onChange_desktop": function() { defaults.onDesktopBlink(); },
            "onChangeUp_dinosaur": function() { defaults.onDinosaurUpBlink(); },
            "onChangeUp_mobile": function() { defaults.onMobileUpBlink(); },
            "onChangeUp_tablet": function() { defaults.onTabletUpBlink(); },
            "onChangeUp_laptop": function() { defaults.onLaptopUpBlink(); },
            "onChangeDown_mobile": function() { defaults.onMobileDownBlink(); },
            "onChangeDown_tablet": function() { defaults.onTabletDownBlink(); },
            "onChangeDown_laptop": function() { defaults.onLaptopDownBlink(); },
            "onChangeDown_desktop": function() { defaults.onDesktopDownBlink(); }
        },
        refreshValue: function() {
            var self = this;
            $.each(self.deviceType, function (index, item) {
                self.deviceValue[item] = self.getElementValue('.'+item+'');
            });
            this.setBreakpointState();
        },
        storeLastValue: function() {
            var self = this;
            $.each(self.deviceType, function (index, item) {
                self.deviceLastValue[item] = self.deviceValue[item];
            });
        },
        setBreakpointState: function() {
            var self = this;
            $.each(self.deviceType, function (index, item) {
                self.deviceState[item] = self.isStateTrue(item);
            });
        },
        isStateTrue: function(item) {
            if(this.deviceValue[item] == "true") {
                return true;
            } else {
                return false;
            }
        },
        getElementValue: function(selector) {
            var value = window.getComputedStyle(
                document.querySelector(selector), ':before'
            ).getPropertyValue('content').replace(/\"/g, '');
            return value;
        }
    };

    function createQueryHolders() {
        var device = "";
        $.each(bp.deviceType, function (index, item) {
            device += '<span class="'+item+'"></span>';
        });
        $('body').append('<div class="queryHolders">'+device+'</div>');
    }

    function callFuncByScreenSize() {
        bp.refreshValue();
        $.each(bp.deviceType, function (index, item) {
            if(bp.deviceLastValue[item] != bp.deviceValue[item]) {
                if (bp.deviceState[item]) { bp.deviceFunctions[item](); }
            } else {
                if (bp.deviceState[item]) { bp.deviceFunctionsBlink[item]();  }
            }
        });
        bp.storeLastValue();
    }

    var waitForFinalEvent = (function() {
        var timers = {};
        return function(callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    function NinjaLog(param) {
        if(defaults.debug || debugInfo.allow) {
            console.warn(param);
        }
    }

    function NinjaTouchDevice() {
        var isTouchDevice = false,
            supportsTouch = false;
        if ( ('ontouchstart' in window) || (window.navigator.msPointerEnabled) || ('ontouchstart' in document.documentElement) ) {
            supportsTouch = true;
        }
        isTouchDevice = Modernizr.touchevents || supportsTouch;
        return isTouchDevice;
    }

    return {
        init: function(config) {
            if ($('html').hasClass('ninja-initialized')) {
                return;
            }
            $('html').addClass('ninja-initialized');
            defaults = $.extend({}, defaults, config);
            createDebugInfo();
            createQueryHolders();
            bindEvents();
            callFuncByScreenSize();
        },
        log: function(param) {
            NinjaLog(param);
        },
        isTouchDevice: function () {
            return NinjaTouchDevice();
        }
    }
}());

//# sourceMappingURLIgnored=global-functions.min.js.map

/* =========================================================================== */
/* /templates/uniqaweb/uniqa/datalayer/data-layer.js */
/* =========================================================================== */
window.searchDataLayer = function (term) {
    if (term != undefined) {
        dataLayer.push({
            event: 'search',
            search_term: term
        })
    }
}

;(function ($) {
    if (!$ || typeof $.fn.modal !== 'function') {
        return
    }

    window.uniqaResolveModalType = function (modalEl) {
        var $m = $(modalEl)
        var attr = ($m.attr('data-modal-type') || '').trim()
        if (attr !== '') {
            return attr
        }
        var id = $m.attr('id')
        var map = window.UNIQA_MODAL_TYPE_BY_ID
        if (id && map && Object.prototype.hasOwnProperty.call(map, id)) {
            return map[id]
        }
        return 'undefined'
    }

    window.uniqaPushViewModal = function (type) {
        window.dataLayer = window.dataLayer || []
        var t =
            type != null && String(type).trim() !== '' ? String(type).trim() : 'undefined'
        dataLayer.push({
            event: 'view_modal',
            type: t
        })
    }

    $(document).on('shown.bs.modal', '.modal', function () {
        window.uniqaPushViewModal(window.uniqaResolveModalType(this))
    })
})(window.jQuery)


/* =========================================================================== */
/* /templates/uniqaweb/uniqa/assets/js/ninja.js */
/* =========================================================================== */
$(document).ready(function () {
    Ninja.init({
        debug: true
    })

    // Dynamicky nastav padding-top pre .ly-page-wrapper na základe výšky .ly-header
    function updatePageWrapperPadding() {
        var $header = $('.ly-header');
        var $pageWrapper = $('.ly-page-wrapper');
        
        if ($header.length && $pageWrapper.length) {
            var headerHeight = $header.outerHeight(true); // outerHeight(true) zahŕňa aj margin
            $pageWrapper.css('padding-top', headerHeight + 'px');
        }
    }
    
    // Nastav padding pri načítaní
    updatePageWrapperPadding();
    
    // Aktualizuj pri zmene veľkosti okna (resize event)
    var resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            updatePageWrapperPadding();
        }, 100); // Debounce - počká 100ms pred aktualizáciou
    });
    
    // Monitoruj zmeny v headeri (napr. pri otvorení menu, zmene banneru, atď.)
    var headerObserver = new MutationObserver(function() {
        updatePageWrapperPadding();
    });
    
    var $header = $('.ly-header');
    if ($header.length) {
        headerObserver.observe($header[0], {
            attributes: true,
            attributeFilter: ['class', 'style'],
            childList: true,
            subtree: true,
            characterData: false
        });
    }
    
    // Monitoruj aj zmeny v banneri (ak sa banner zobrazí/skryje)
    var $alertWrapper = $('.header-alert-wrapper');
    if ($alertWrapper.length) {
        var alertObserver = new MutationObserver(function() {
            updatePageWrapperPadding();
        });
        alertObserver.observe($alertWrapper[0], {
            attributes: true,
            attributeFilter: ['style', 'class'],
            childList: true,
            subtree: true
        });
    }

    var reviewsVal = Number($('#reviews-val').find('div').text())
    var reviewsWidth = parseFloat((reviewsVal / 5) * 100).toFixed(0)
    $('.reviews-stars .stars-on').css('width', reviewsWidth + '%')
    if ($('#reviews-val').length > 0) {
        var reviewsString = $('#reviews-val').html()
        $('#reviews-val').html(reviewsString.replace('.', ','))
    }

    initOnlineServicesSwitcher()

    var activeClass = 'slick-active',
        ariaAttribute = 'aria-hidden',
        MainBannerSpeed = $('.md-promo').attr('data-slider-speed') * 1000

    /*$('.md-promo')
        .on('init', function () {
            $('.slick-dots li:first-of-type').addClass(activeClass).attr(ariaAttribute, false);
        })
        .on('afterChange', function (event, slick, currentSlide) {
            var $dots = $('.slick-dots');
            $('li', $dots).removeClass(activeClass).attr(ariaAttribute, true);
            $dots.each(function () {
                $('li', $(this)).eq(currentSlide).addClass(activeClass).attr(ariaAttribute, false);
            });
        });*/

    $('.md-promo').slick({
        dots: true,
        arrows: false,
        appendDots: $('.md-promo'),
        autoplay: true,
        autoplaySpeed: MainBannerSpeed,
        adaptiveHeight: true
    })

    var $grid = $('.grid-cover').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true,
        columnWidth: '.grid-sizer'
    })

    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout')
    })

    if ($('.md-package-container').length > 0) {
        const $container = $('.md-package-container');
        const isMobile = $(window).width() < 768;
        $container.each(function () {
            const $packages = $(this).find('.md-package');
            const packageCount = $packages.length;
            const sliderOnMobile = $(this).closest('.md-package__wrapper').hasClass('md-package--slider-mobile');
            const mobileSettings = {
                slidesToShow: 1,
                variableWidth: false
            }

            if (packageCount >= 5) {
                let $slider = $(this).slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    //centerMode: true,
                    variableWidth: true,
                    responsive:[
                        {
                            breakpoint: 1201,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: sliderOnMobile ? mobileSettings : 'unslick'
                        }
                    ]
                })
                if (isMobile && sliderOnMobile) {
                    $(this).closest('.container').addClass('container-slider').removeClass('container');
                }
            }
            $(this).addClass('init');
        });
    }

    if ($('.product-slider').length > 0) {
        $('.product-slider').slick({
            dots: false,
            infinite: false,
            variableWidth: true,
            slidesToScroll: 1,
            slidesToShow: 5,
            outerEdgeLimit: true,
            prevArrow:
                '<button class="slick-prev slick-arrow" aria-label="Predošlý slide" type="button" aria-disabled="false" style="">Predošlý slide</button>',
            nextArrow:
                '<button class="slick-next slick-arrow" aria-label="Ďalší slide" type="button" aria-disabled="false" style="">Ďalší slide</button>',
            responsive: [
                {
                    breakpoint: 1210,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 890,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: 'unslick'
                }
            ]
        })

        topNewsOffset()

        $('.product-slider .slick-active').last().addClass('last')

        $('.product-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            slideNav()
        })

        $('.product-slider').on('swipe', function (event, slick, currentSlide, nextSlide) {
            slideNav()
        })

        function slideNav() {
            $('.product-slider .slick-active').removeClass('last')
            $('.product-slider .slick-active').last().addClass('last')
        }
    }

    if ($('.md-gallery-slider').length > 0) {
        $('.md-gallery-small ul').slick({
            dots: false,
            infinite: false,
            variableWidth: true,
            adaptiveHeight: true,
            slidesToScroll: 1,
            slidesToShow: 5,
            outerEdgeLimit: true,
            prevArrow:
                '<button class="slick-prev slick-arrow" aria-label="Predošlý slide" type="button" aria-disabled="false" style="">Predošlý slide</button>',
            nextArrow:
                '<button class="slick-next slick-arrow" aria-label="Ďalší slide" type="button" aria-disabled="false" style="">Ďalší slide</button>',
            responsive: [
                {
                    breakpoint: 1210,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 940,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })

        $('.md-gallery-large ul').slick({
            dots: false,
            infinite: false,
            variableWidth: true,
            adaptiveHeight: true,
            slidesToScroll: 1,
            slidesToShow: 4,
            outerEdgeLimit: true,
            prevArrow:
                '<button class="slick-prev slick-arrow" aria-label="Predošlý slide" type="button" aria-disabled="false" style="">Predošlý slide</button>',
            nextArrow:
                '<button class="slick-next slick-arrow" aria-label="Ďalší slide" type="button" aria-disabled="false" style="">Ďalší slide</button>',
            responsive: [
                {
                    breakpoint: 1260,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 940,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false
                    }
                }
            ]
        })

        $('.md-gallery-slider ul').each(function (i) {
            $(this).slick('slickAdd', '<li></li>')

            $(this).find('.slick-active').last().addClass('last')

            $(this).on('afterChange', function (event, slick, currentSlide, nextSlide) {
                $(this).find('.slick-active').removeClass('last')
                $(this).find('.slick-active').last().addClass('last')
            })

            $(this).on('swipe', function (event, slick, currentSlide, nextSlide) {
                $(this).find('.slick-active').removeClass('last')
                $(this).find('.slick-active').last().addClass('last')
            })

            function slideNav() {
                $(this).find('.slick-active').removeClass('last')
                $(this).find('.slick-active').last().addClass('last')
            }
        })
    }
    $slick_slider = $('.md-packages .row')
    settings_slider = {
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                    /* variableWidth: true,
                    centerMode: true, */
                }
            }
        ]
    }
    slick_on_mobile($slick_slider, settings_slider)

    // slick on mobile
    function slick_on_mobile(slider, settings) {
        $(window).on('load resize', function () {
            if ($(window).width() > 991) {
                if (slider.hasClass('slick-initialized')) {
                    slider.slick('unslick')
                }
                return
            }
            if (!slider.hasClass('slick-initialized')) {
                return slider.slick(settings)
            }
        })
    }

    function topNewsOffset() {
        var offsetContainer = $('.md-product-slider .container').offset(),
            offsetContainerFluid = $('.container-fluid').offset(),
            containerFluidWidth = $('.container-fluid').outerWidth()
        paddingSlick = offsetContainer.left - offsetContainerFluid.left
        if (containerFluidWidth > 770) {
            $('.md-product-slider .slick-list').css({
                'padding-left': paddingSlick - 30
            })
        } else {
            $('.md-product-slider .slick-list').css({ 'padding-left': paddingSlick })
        }
    }

    $('div#sidebar').append('<a class="hide-sidebar2" href="#">close</a>')
    var buttonText = $('a.hide-sidebar').text()
    $('a.hide-sidebar2').text(buttonText)
    $('a.icon-contact').on('click', function (e) {
        $('div#sidebar').toggleClass('open')
        $('section.md-floating-links').toggleClass('open')
        e.preventDefault()
    })

    $('a.hide-sidebar, a.hide-sidebar2').on('click', function (e) {
        $('div#sidebar').toggleClass('open')
        $('section.md-floating-links').toggleClass('open')
        e.preventDefault()
    })

    $('.toggle-older-documents').on('click', function (e) {
        e.preventDefault()
        $(this).next().slideToggle()
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.timeline .press-cover').each(function (i) {
            var visible = 4;
            var $cover = $(this);
            var $articles = $cover.find('.press-release');
            var $button = $cover.next('.show-more-articles');

            // Skry všetky a zobraz prvých 4
            $articles.hide().slice(0, visible).css('display', 'flex');

            // Tlačidlo len ak sú ďalšie články
            if (visible >= $articles.length) {
                $button.hide();
            } else {
                $button.show();
            }

            $button.off('click').on('click', function () {
                visible += 20;
                $articles.slice(0, visible).css('display', 'flex');

                if (visible >= $articles.length) {
                    $button.hide();
                }
            });
        });
    });

    $('.timeline .press-cover').each(function (i) {
        var visible = 4;
        var $cover = $(this);
        var $articles = $cover.find('.press-release');
        var $button = $cover.next('.show-more-articles');

        // Skry všetky a zobraz prvých 4
        $articles.hide().slice(0, visible).css('display', 'flex');

        // Tlačidlo len ak sú ďalšie články
        if (visible >= $articles.length) {
            $button.hide();
        } else {
            $button.show();
        }

        $button.off('click').on('click', function () {
            visible += 20;
            $articles.slice(0, visible).css('display', 'flex');

            if (visible >= $articles.length) {
                $button.hide();
            }
        });
    });

    $('.toggle-faq').on('click', function (e) {
        e.preventDefault()

        var $this = $(this)
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show')
            $this.removeClass('active')
            $this.next().slideUp(350)
        } else {
            $this.parent().parent().find('.faq-item .faq-answer').removeClass('show')
            $this.parent().parent().find('.faq-item .toggle-faq').removeClass('active')
            $this.parent().parent().find('.faq-item .faq-answer').slideUp(350)
            $this.next().toggleClass('show')
            $this.toggleClass('active')
            $this.next().slideToggle(350)
        }

        setTimeout(function () {
            calculateFaqHeight()
        }, 400)
    })

    showFirstFaq();
    calculateFaqHeight();

    function calculateFaqHeight() {
        var totalHeight = 0
        $('.faq-cover > .faq-item').each(function () {
            totalHeight += $(this).height()
        })
        if (totalHeight > $('.faq-cover').innerHeight()) {
            $('.md-faq').addClass('content-larger')
        } else {
            $('.md-faq').removeClass('content-larger')
        }
    }

    function showFirstFaq() {
        $('.md-faq').each(function(){
            let firstFaqItem = $(this).find('.faq-item').first();
            let toggleFaq = firstFaqItem.find('.toggle-faq');
            let faqAnswer = firstFaqItem.find('.faq-answer');
            toggleFaq.addClass('active');
            faqAnswer.addClass('show').show();
        });
        calculateFaqHeight();
    }

    $('.md-branch-bio .show-more-text').on('click', function (e) {
        e.preventDefault()
        $(this).parent().next('.hidden-content').slideDown()
        $(this).hide()
    })

    $('.md-faq .show-more').on('click', function () {
        $('.md-faq .faq-cover').toggleClass('all-showed')
        $(this).toggleClass('showed')
    })

    $('*').on('focus', function () {
        $('ul#main-navbar > li').removeClass('focused')
        $('div#sidebar').removeClass('open')
        $('section.md-floating-links').removeClass('open')
    })

    $('#main-navbar a').on('focus', function () {
        $(this).parents('ul#main-navbar > li').addClass('focused')
    })

    $('#sidebar a').on('focus', function () {
        $(this).parents('div#sidebar').addClass('open')
        $(this).parents('section.md-floating-links').addClass('open')
    })

    var $scrollNav = $('section.md-scroll-nav')

    if ($scrollNav.length) {
        $('header').addClass('has-scroll-nav')
    }

    $('.pg-actuality .ly-content img').each(function (i) {
        $(this).parent('p').addClass('mb-0')
    })

    $('.toggle-search').on('click', function (e) {
        e.preventDefault()
        setTimeout(function () {
            $('.md-search-box').find('#searchWords').focus()
        }, 300)
        var $headerAlert = $('.header-alert-wrapper');
        var headerAlertWrapper = $headerAlert.is(':visible') ? $headerAlert.outerHeight(true) : 0;

        $('.md-search-box')
            .css('top', headerAlertWrapper + 'px')
            .toggleClass('open')
            .find('#searchWords')
            .focus();
        $(this).toggleClass('search-open')
    })

    $('.custom-accordion-item .card-header').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $(this).siblings('.custom-collapse').slideUp(200)
        } else {
            $('.card .card-header').removeClass('active')
            $(this).addClass('active')
            $('.custom-collapse').slideUp(200)
            $(this).siblings('.custom-collapse').slideDown(200)
        }
    })

    function autoHeightInMenu() {
        $('.md-menu-section').each(function () {
            var highestBox = 0
            var highestFastLinksBox = 0

            $('.submenu-col .links', this).each(function () {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).height()
                }
            })

            $('.submenu-col .links-box-left', this).height(highestBox)

            $('.submenu-col .links-box-left', this).each(function () {
                if ($(this).height() > highestFastLinksBox) {
                    highestFastLinksBox = $(this).height()
                }
            })

            $('.submenu-col .links', this).height(highestFastLinksBox)
        })
    }

    autoHeightInMenu()

    function mobileMenu() {
        var menu = $('#main-navbar')
        var navbar = $('.ly-header .navbar')
        var menuItem = $('#main-navbar li')
        var submenu = $('.md-navigation #main-navbar > li > ul')
        var header = $('.ly-header')
        var headerAlertWrapper = $('.header-alert-wrapper')

        if ($(window).width() < 1201) {
            menuItem.each(function () {
                if ($(this).children('ul').length && !$(this).find('i').length) {
                    $(this).append('<i class="far fa-chevron-right"></i>')
                }
                if ($(this).children('ul').length) {
                    $(this).addClass('has-submenu')
                }
                $('.has-submenu > a').on('click', function (e) {
                    e.preventDefault()

                    var headerHeightMobile = headerAlertWrapper.outerHeight() + navbar.outerHeight();

                    if (headerAlertWrapper.is(':visible')) {
                        $(this).next('ul').css({
                            'transform': 'translateX(0px)',
                            'top': headerHeightMobile + 'px'
                        })[0].style.setProperty(
                            'height',
                            'calc(100vh - ' + headerHeightMobile + 'px)',
                            'important'
                        );

                    } else {
                        $(this).next('ul').css('transform', 'translateX(0px)')
                    }
                })
                $('.submenu-col h2')
                    .unbind('click')
                    .on('click', function () {
                        $(this).next('.submenu-content').slideToggle()
                        $(this).toggleClass('opened')
                    })
                $('.links-box-simple h3')
                    .unbind('click')
                    .on('click', function () {
                        $(this).next('ul').slideToggle()
                        $(this).toggleClass('opened')
                    })
            })
            $('.submenu-back')
                .unbind('click')
                .on('click', function () {
                    $(this)
                        .closest('ul')
                        .css('transform', 'translateX(' + submenu.outerWidth() + 'px)')
                })
            submenu.css('transform', 'translateX(' + $(window).width() + 'px)')
            if (!header.hasClass('menu-open')) {
                $('.menu-cover').hide()
                $('.md-floating-links').removeClass('zIndex')
                $('#toggle-navigation .menu-icon').removeClass('active')
            }
            $('#toggle-navigation')
                .unbind('click')
                .on('click', function () {
                    var headerHeight = header.outerHeight()
                    $('.menu-cover').css('top', headerHeight + 'px').fadeToggle()
                    $('.md-floating-links').addClass('zIndex')
                    $(this).children().toggleClass('active')
                    header.toggleClass('menu-open')
                })
        } else if ($(window).width() > 1200) {
            submenu.css('transform', 'translateX(0px)')
            if ($('.menu-cover').is(':hidden')) {
                $('.menu-cover').show()
                $('.md-floating-links').addClass('zIndex')
            }
            $('.submenu-col h2').removeClass('opened')
            if ($('.submenu-content').is(':hidden')) {
                $('.submenu-content').show()
            }
        }
    }
    var TO = false
    $(window).resize(function () {
        if (TO !== false) clearTimeout(TO)
        TO = setTimeout(mobileMenu(), 100) //200 is time in miliseconds
    })

    $(window).on('load', function () {
        mobileMenu()
    })

    $(window).on('load resize', function () {
        if ($(window).width() < 768) {
            $('.footer-links h3')
                .unbind('click')
                .on('click', function () {
                    $(this).next('ul').slideToggle()
                    $(this).parent().toggleClass('links-open')
                })
            if (!$('.footer-links .footer-links-item').hasClass('menu-open')) {
                $('.footer-links ul').hide()
            }
        }
        if ($(window).width() > 768) {
            if ($('.footer-links ul').is(':hidden')) {
                $('.footer-links ul').show()
            }
        }
    })

    function handleClickShowMore() {
        var x = window.matchMedia('(max-width: 991px)').matches ? 2 : 6
        var showMore = true
        const totalItems = $('.grid-item').length

        $('.grid-item').slice(0, x).css('display', 'inline-block')

        if (totalItems <= x) {
            $('.grid-item .learn-more').hide()
        }

        $('.learn-more a').click(function () {
            if (showMore) {
                $('.grid-item')
                    .slice(x, x + 99)
                    .css('display', 'inline-block')
            } else {
                $('.grid-item')
                    .slice(x, x + 99)
                    .css('display', 'none')
            }

            showMore = !showMore
        })
    }

    handleClickShowMore()

    $('#to-call').click(function () {
        $('html, body').animate(
            {
                scrollTop: $('#zavolame-vam').offset().top
            },
            1000
        )
    })

    $('.documents-list .documents-item .document-name').each(function (i) {
        var text = $(this).text()
        text = text.replace(/____/g, '&')
        text = text.replace(/___/g, '/')
        text = text.replace(/---/g, ',')
        $(this).text(text)
    })
    $('.filter-box .filter label').each(function (i) {
        var text = $(this).text()
        text = text.replace(/____/g, '&')
        text = text.replace(/___/g, '/')
        text = text.replace(/---/g, ',')
        $(this).text(text)
    })
    if ($.isFunction($.fn.mask)) {
        //setMaskedInput($(".skPhone"), "+421 000 000 000", "+421");
        // WJ reg sk (^[+]42[0-1]{1}\s?[ 0-9]{4}\s?[ 0-9]{4}\s?[ 0-9]{4}$)
        //setMaskedInput($(".czPhone"), "+420 000 000 000", "+420");
        // WJ reg sk (^[+]420\s?[ 0-9]{4}\s?[ 0-9]{4}\s?[ 0-9]{4}$)
        setMaskedInput($('.skPhone'), '+BBB000000000', '+421')
        setMaskedInput($('.czPhone'), '+BBB000000000', '+420')
        setMaskedInput($('.skczPhone'), '+42X000000000', '+421')
        setMaskedInput($('.czskPhone'), '+42X000000000', '+420')
        setMaskedInput($('#telefon-sk-cz'), '+42X 000 000 000', '+421')
        //setMaskedInput($("#telefonx, .telefon-cz"), "+42C 000 000 000", "+420");
        //setMaskedInput($(".czPhone"), "+42C000000000", "+420");
        setMaskedInput($('.uniPhonesk'), '+BBB000000000', '+421')
        setMaskedInput($('.uniPhonecz'), '+BBB000000000', '+420')
    }

    function setMaskedInput($el, pattern, v) {
        if (!$.isFunction($.fn.mask)) {
            console.trace()
            console.error('mask is not a function')
            return
        }
        var options = {
            translation: {
                C: { pattern: /[0]/ },
                // S: {pattern: /[1]/},
                X: { pattern: /[0-1]/ },
                B: { pattern: /[0-9]/ }
            }
        }
        $el.mask(pattern, options)
        if (typeof v === 'undefined') v = ''
        $el.focus(function () {
            if ($el.val() == '') $el.val(v)
        })
    }

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // Pridda skrytému inputu value podla selecnutej option z oblasti

    var subjectPreffix = 'Napište nám'
    $('#subject').val(subjectPreffix + ' - ' + $('.write-us input[type=radio]:checked').val())
    var hiddenArea = $('.write-us .nn-oblast4-hidden');
    var visibleArea = $('.write-us .nn-oblast4-visible');
    var form = $('.write-us');
    var iTag = form.parent().next('i');
    $('.write-us input[type=radio]').change(function () {
        var selectedVal = $(this).prop(':checked', true).val()
        $('#subject').val(subjectPreffix + ' - ' + selectedVal)
        if ($(this).attr('id') === 'nn-oblast4') {
            hiddenArea.hide();
            visibleArea.show();
            iTag.removeClass('d-block').hide();
            hiddenArea.find('input').removeClass('required');
        } else {
            hiddenArea.show();
            visibleArea.hide();
            iTag.addClass('d-block');
            hiddenArea.find('input').not('[name="cislo-zmluvy"]').addClass('required');
        }
    })

    $('.form-group-one input').removeClass('required')
    $('.form-group-one label').removeClass('label-required')

    $('.clicked3').on('click', function () {
        $('.form-group-one').addClass('d-block')
        $('.form-group-one input').removeClass('required')
        $('.form-group-one label').removeClass('label-required')
        $('.form-group-one input').removeClass('fixedNumber').attr('maxlength', '255')
    })

    $('.clicked2').on('click', function () {
        $('.form-group-one').addClass('d-block')
        $('.form-group-one input').addClass('required')
        $('.form-group-one label').addClass('label-required')
        $('.form-group-one input').addClass('fixedNumber')
        $('.form-group-one input').addClass('fixedNumber').attr('maxlength', '10')
    })

    $('.clicked1').on('click', function () {
        $('.form-group-one').removeClass('d-block')
        $('.form-group-one input').removeClass('required')
        $('.form-group-one label').removeClass('label-required')
        $('.form-group-one input').removeClass('fixedNumber')
    })

    $('.custom-modal-call').on('click', function () {
        $('html').css({ overflowY: 'hidden' })
    })
    $('.custom-modal .close').on('click', function () {
        $('html').css({ overflowY: 'auto' })
    })

    $(document).mouseup(function (e) {
        var container = $('.md-company-authorities-management-modal .modal-dialog')
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('html').css({ overflowY: 'auto' })
        }
        if ($('html').hasClass('pg-branch')) {
            $('html').css({ overflowY: 'unset' })
        }
    })

    $('.timerange-menu li').click(function () {
        $(this).addClass('active')
        $(this).parent().children('li').not(this).removeClass('active')
    })

    $('.date-wrapper input').click(function () {
        $('.timerange-menu li').removeClass('active')
    })
    var onlineServicesLi = $('a.online-services, ul#main-navbar > li > a').parent()
    onlineServicesLi
        .on('mouseover', function () {
            $('section.md-floating-links').addClass('zIndex')
        })
        .on('mouseout', function () {
            $('section.md-floating-links').removeClass('zIndex')
        })

    $(function () {
        $('.btn-copy').click(function () {
            $('.copy-text input').focus()
            $('.copy-text input').select()
            document.execCommand('copy')
        })
    })

    $(function () {
        $(
            '.md-contacts-bank-connection .accordion-object:not(:first-of-type) .accordion-content'
        ).css('display', 'none')
        $(
            '.md-contacts-bank-connection .accordion-object:first-of-type .js-accordion-title'
        ).addClass('open')

        $('.md-contacts-bank-connection .js-accordion-title').click(function () {
            $('.open').not(this).removeClass('open').next().slideUp(300)
            $(this).toggleClass('open').next().slideToggle(300)
        })
    })

    $('.js-acc_toggle').on('click', function () {
        $(this).toggleClass('active')
        $(this).next('.panel').toggleClass('active')
    })

    function handleClickLearnMore() {
        var x = window.matchMedia('(max-width: 991px)').matches ? 2 : 6
        var showMore = true
        const totalItems = $('.awards-item').length

        $('.awards-item').slice(0, x).css('display', 'inline-block')

        if (totalItems <= 6) {
            $('.awards-wrapper .learn-more').hide()
        }

        $('.learn-more a').click(function () {
            if (showMore) {
                $('.awards-item')
                    .slice(x, x + 99)
                    .css('display', 'inline-block')
                $(this).addClass('active')
            } else {
                $('.awards-item')
                    .slice(x, x + 99)
                    .css('display', 'none')
                $(this).removeClass('active')
            }

            showMore = !showMore
        })
    }

    handleClickLearnMore()

    var collapsibleWrapper = $('.content-collapse')
    var contentH = $('.content-placeholder')
    var showBtn = $('.show-more-content-btn')

    collapsibleWrapper.click(function () {
        var h = collapsibleWrapper.height()
        var h2 = contentH.height()
    })

    if (collapsibleWrapper.outerHeight() < contentH.outerHeight() || contentH.outerHeight() > 750) {
        showBtn.addClass('visible')
        collapsibleWrapper.addClass('larger-content')
    } else {
    }
    showBtn.click(function () {
        collapsibleWrapper.toggleClass('show-whole-content')
    })

    //Scroll to element if href contains slideTo
    $("a[href^='#']").click(function () {
        var href = $(this).attr('href')
        if ($(this).attr('href').indexOf('slideTo_') >= 0) {
            href = href.replace('slideTo_', '')
            if ($(href).length > 0) {
                $('html, body').animate(
                    {
                        scrollTop: $(href).offset().top - $('.ly-header').height()
                    },
                    400
                )
            }
            return false
        }
    })
    //Scroll to element if href contains slideTo

    //Ad hash if open tab
    $('.nav-tabs a').on('click', function (e) {
        var hash = e.target.hash
        if (typeof hash === 'undefined') {
            return
        }

        if (hash.indexOf('#') !== -1) {
            hash = hash.replace('#', '')
        }

        if ($(this).hasClass('active')) {
            window.location.hash = '!' + hash
        }
    })
    $('.nav-tabs a').on('shown.bs.tab', function (e) {
        var hash = e.target.hash.replace('#', '')
        window.location.hash = '!' + hash
    })
    if (window.location.hash.indexOf('#!') >= 0) {
        var hash = location.hash.replace('#!', '')
        $('.nav-tabs a[href="#' + hash + '"]').tab('show')
        setTimeout(function () {
            $([document.documentElement, document.body]).animate(
                {
                    scrollTop: $('#' + hash + '').offset().top - $('.ly-header').height() - 46
                },
                500
            )
        }, 300)
    }
    //Ad hash if open tab

    $('ul.navbar-info-mobile a.online-services').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('opened').next().slideToggle()
    })

    $('.pg-branch .slick-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>'
        })
    })

    $('.md-branch__navbar__list li').each(function () {
        if ($(this).hasClass('active')) {
            $(this)
                .parent()
                .animate(
                    {
                        scrollLeft: $(this).offset().left
                    },
                    400
                )
        }
    })

    //scroll floating buttons on mopbile

    let prevScrollpos = window.pageYOffset
    const buffer = 150
    window.onscroll = function () {
        if (window.matchMedia('(max-width: 767px)').matches) {
            let currentScrollPos = window.pageYOffset

            if (prevScrollpos > currentScrollPos + buffer) {
                // Scrolling up
                document.querySelector('#floating-links').classList.remove('hide')
                prevScrollpos = currentScrollPos
            }
            if (prevScrollpos + buffer < currentScrollPos) {
                // Scrolling down
                document.querySelector('#floating-links').classList.add('hide')
                prevScrollpos = currentScrollPos
            }
        }
    }

    $('.FA-icon').each(function () {
        var iconClass = $(this).text();
        $(this).replaceWith('<i class="' + iconClass + '"></i>');
    });

    $(".md-list-directories .container .row > div.col-md-12.offset-lg-2.col-lg-8")
        .removeClass("offset-lg-2 col-lg-8")
        .addClass("col-lg-10");

    $(".md-how-to-invest .container .row .accordion-how-to-invest")
        .wrap('<div class="col-lg-12"></div>');

    if ($('.md-list-directories').find('.md-documents-search').length > 0) {
        $('.md-list-directories').css('background', 'transparent');
    }

    //alert - START
    $(document).on('click', '.header-alert .header-alert-close', function () {
        $(this).closest('.header-alert-wrapper').slideUp(200);
        localStorage.setItem('headerAlertClosedAt', Date.now().toString());
        document.documentElement.removeAttribute('data-show-header-alert');
        var headerHeightMobile = $('.header-panel-brand').outerHeight();
        $('.menu-cover, .md-navigation #main-navbar>li>ul').css('top', headerHeightMobile + 'px');
        $('.md-search-box').css('top', '0px');
    });
    //alert - END

    //leave-contacts redesign 2025 - START
    $("a.call-now").on('click', function (e){
        e.preventDefault();
        $('.text-phone-number').show();
        $(this).hide();
        $('.call-now-mobile').css('display','block');
        dataLayer.push({
            event: 'generate_lead',
            type: 'display_phone'
        });
    });

    const langAttr = $('html').attr('lang')?.toLowerCase() || 'sk';
    const langCode = langAttr.slice(0, 2);

    const configDiv = $('div[opening-hours-sk]');
    if (!configDiv.length) {
        console.warn('Chýba konfiguračný <div> s atribútmi otváracích hodín.');
        return;
    }

    let openingHoursAttr, holidaysAttr;

    if (langCode === 'sk') {
        openingHoursAttr = configDiv.attr('opening-hours-sk');
        holidaysAttr = configDiv.attr('holidays-sk');
    } else if (langCode === 'cs' || langCode === 'cz') {
        openingHoursAttr = configDiv.attr('opening-hours-cz');
        holidaysAttr = configDiv.attr('holidays-cz');
    } else {
        console.warn('Nepodporovaný jazyk – predvolená SK verzia');
        openingHoursAttr = configDiv.attr('opening-hours-sk');
        holidaysAttr = configDiv.attr('holidays-sk');
    }

    const holidays = holidaysAttr
        .replace(/'/g, '')
        .split(',')
        .map(h => h.trim());

    $('.opening-hours').text(openingHoursAttr);

    const [open, close] = openingHoursAttr.split('-').map(t => {
        const [h, m] = t.trim().split(':').map(Number);
        return { h, m };
    });

    // local time(SK/CZ)
    const now = new Date();
    const localTime = new Date(
        now.toLocaleString('en-US', { timeZone: 'Europe/Bratislava' })
    );

    const day = localTime.getDay();
    const today = localTime.toISOString().slice(5, 10);

    let unavailable = false;

    // weekends
    if (day === 0 || day === 6) unavailable = true;

    // holidays
    if (holidays.includes(today)) unavailable = true;

    // working hours
    const currentMinutes = localTime.getHours() * 60 + localTime.getMinutes();
    const openMinutes = open.h * 60 + open.m;
    const closeMinutes = close.h * 60 + close.m;

    const $modal = $('#contactModalOSV');
    const $row = $modal.find('.md-leave-contact .row');
    const $description = $modal.find('.md-leave-contact .description');
    const $leaveContactBlock = $('.leave-contact-modal.new-2025');

    if (currentMinutes < openMinutes || currentMinutes > closeMinutes) {
        unavailable = true;
    }

    if (unavailable) {
        $('.phone-contact').addClass('unavailable');
        $leaveContactBlock.addClass('branch-is-closed');
        $description.addClass('d-none');
        $row.addClass('phone-column-hidden');
    } else {
        $('.phone-contact').removeClass('unavailable');
        $leaveContactBlock.removeClass('branch-is-closed');
        $description.removeClass('d-none');
        $row.removeClass('phone-column-hidden');
    }
    //leave-contacts redesign 2025 - END
})

function initOnlineServicesSwitcher() {
    let $onlineSluzby = $("input[name='online-sluzby']");
    let $serviceListLoader = $(".js__loading-services");
    $onlineSluzby.on('input', function(){
        let wrapper = $(this).closest(".u-switch-list");
        let magicLine = wrapper.find(".u-switch-list-magic-line");
        let serviceList = $(".js__services-list");
        const checkedDataType = $onlineSluzby.filter(":checked").val();

        if ($(this).is(":checked")) {
            var el = $(this).parent();
            magicLine.css({
                "left": el.position().left,
                "width": el.outerWidth()
            });
        }

        serviceList.find(".md-service-card").each(function(){
            let $wrapper = $(this).parent()
            if ($wrapper.attr('data-type') === checkedDataType) {
                $wrapper.removeClass('d-none')
            } else {
                $wrapper.addClass('d-none')
            }
        });
    });

    $onlineSluzby.trigger('input');
    $('.skeleton-loader').addClass('hidden');
}

$.fn.datepicker.dates['sk'] = {
    days: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
    daysShort: ['Ned', 'Pon', 'Uto', 'Str', 'Štv', 'Pia', 'Sob'],
    daysMin: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
    months: [
        'Január',
        'Február',
        'Marec',
        'Apríl',
        'Máj',
        'Jún',
        'Júl',
        'August',
        'September',
        'Október',
        'November',
        'December'
    ],
    monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Máj',
        'Jún',
        'Júl',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dec'
    ],
    today: 'Dnes',
    clear: 'Vymazať',
    format: 'dd.mm.yyyy',
    titleFormat: 'MM yyyy' /* Využíva rovnakú syntax ako 'format' */,
    weekStart: 0
}

// Helper function to find label for a field
// Works both inside forms and in form-group elements outside forms
function findLabelForField($field) {
    var fieldId = $field.attr('id');
    var fieldType = $field.attr('type');
    var fieldName = $field.attr('name');
    var $label = null;
    var $context = $field.closest('form, .form-group, .leave-contact, body');

    // For radio buttons, find the group label
    if (fieldType === 'radio' && fieldName) {
        // Find the first radio in the group within the context
        var $firstRadio = $context.find('input[type="radio"][name="' + fieldName + '"]').first();
        if ($firstRadio[0] === $field[0]) {
            // Only process the first radio in the group
            var $radioContainer = $field.closest('.form-group, .custom-control, .form-check');
            $label = $radioContainer.prev('label, .form-group > label').first();
            
            // If no label before, try to find label in parent form-group
            if (!$label || $label.length === 0) {
                $label = $radioContainer.closest('.form-group').find('> label').first();
            }
            
            // If still no label, use the label associated with the first radio
            if (!$label || $label.length === 0) {
                if (fieldId) {
                    $label = $context.find('label[for="' + fieldId + '"]');
                }
                if (!$label || $label.length === 0) {
                    $label = $radioContainer.find('label').first();
                }
            }
        }
    } else {
        // For other field types, find label normally
        // Find label by 'for' attribute
        if (fieldId) {
            $label = $context.find('label[for="' + fieldId + '"]');
        }

        // If no label found by 'for', try to find label in form-group
        if (!$label || $label.length === 0) {
            $label = $field.closest('.form-group, .custom-control, .form-check').find('label').first();
        }

        // If still no label, try to find previous sibling label
        if (!$label || $label.length === 0) {
            $label = $field.prev('label');
        }

        // For checkboxes, find label in the same container
        if (fieldType === 'checkbox' && (!$label || $label.length === 0)) {
            $label = $field.closest('.custom-control, .form-check').find('label').first();
        }
    }

    return $label;
}

// Add required star (*) to labels of required form fields
// Excludes calculator forms (/online/ or pages with pg-online class)
// Works with both form tags and form-group elements outside forms
function addRequiredStarsToLabels() {
    // Skip if we're in calculator section (URL contains /online/ or html/body has pg-online class)
    if (window.location.pathname.indexOf('/online/') !== -1 || 
        window.location.href.indexOf('/online/') !== -1 ||
        $('html').hasClass('pg-online') || 
        $('body').hasClass('pg-online')) {
        return;
    }

    // Method 1: Find inputs/selects/textareas with 'required' class
    // Search in both forms and form-groups outside forms
    $('input.required, textarea.required, select.required').each(function() {
        var $field = $(this);
        var $label = findLabelForField($field);

        if ($label && $label.length > 0 && !$label.hasClass('required-star')) {
            $label.addClass('required-star');
        }
    });

    // Method 2: Find fields with HTML5 'required' attribute
    $('input[required], textarea[required], select[required]').each(function() {
        var $field = $(this);
        
        // Skip if already processed (has required class)
        if ($field.hasClass('required')) {
            return;
        }

        var $label = findLabelForField($field);

        if ($label && $label.length > 0 && !$label.hasClass('required-star')) {
            $label.addClass('required-star');
        }
    });

    // Method 3: Find fields by help-block.cs-error with "Povinné pole" / "Povinný" / "Required" text
    $('.help-block.cs-error').each(function() {
        var $helpBlock = $(this);
        var helpText = $helpBlock.text().toLowerCase();
        
        // Check if help block contains required field text
        var isRequired = helpText.indexOf('povinné pole') !== -1 || 
                       helpText.indexOf('povinný') !== -1 || 
                       helpText.indexOf('required') !== -1 ||
                       helpText.indexOf('povinná') !== -1;

        if (isRequired) {
            // Find the associated input/textarea/select
            var $field = $helpBlock.prev('input, textarea, select');
            var $context = $helpBlock.closest('form, .form-group, .leave-contact, body');
            
            // If no previous sibling, try to find by error class name
            if (!$field || $field.length === 0) {
                var errorClass = $helpBlock.attr('class');
                if (errorClass) {
                    // Extract field name from error class (e.g., cs-error-meno -> meno, cs-error-priezvisko -> priezvisko)
                    var match = errorClass.match(/cs-error-([a-z0-9-]+)/i);
                    if (match && match[1]) {
                        var fieldName = match[1];
                        $field = $context.find('[name="' + fieldName + '"], [id="' + fieldName + '"]').first();
                    }
                }
            }

            if ($field && $field.length > 0) {
                var $label = findLabelForField($field);

                if ($label && $label.length > 0 && !$label.hasClass('required-star')) {
                    $label.addClass('required-star');
                }
            }
        }
    });

    // Method 4: Find labels with label-required class (already marked as required)
    $('label.label-required').each(function() {
        var $label = $(this);
        if (!$label.hasClass('required-star')) {
            $label.addClass('required-star');
        }
    });
}

// Run on document ready
$(document).ready(function() {
    addRequiredStarsToLabels();
});

// Run after AJAX form loads (for dynamically loaded forms)
$(document).on('ajaxComplete', function() {
    setTimeout(addRequiredStarsToLabels, 100);
});










function decodeEmailImpl(encodeEmail)
{
	var email = encodeEmail;
	if (email.indexOf("~") > -1)
		email = email.replace(/~/gi, '@');
	if(email.indexOf("!") > -1)
		email = email.replace(/!/gi, '.');

	
	var newEmail = new Array(email.length);
	for (i = 0; i < email.length; i++)
	{
		newEmail[i] = email.charAt(email.length - i - 1);
	}
	email = newEmail.join("");
	return email;
}
function decodeEmail(encodeEmail)
{
	window.location.href="mailto:"+decodeEmailImpl(encodeEmail);
}
function writeEmailToPage(encodeEmail)
{
	document.write(decodeEmailImpl(encodeEmail));
}
function openTargetBlank(link, event)
{
    var href = link.href;

    if (href.indexOf("javascript:")==0) return true;

    window.open(href,'_blank');
    event.returnValue = false;
    event.stopPropagation();
    return false;
}
function wjPopup(url, width, height)
{
	  var options = "toolbar=no,scrollbars=yes,resizable=yes,width="+width+",height="+height+";"
	  popupWindow=window.open(url,"_blank",options);
}


$(document).ready(function()
{
	try
	{
		  if ($("a[rel='wjimageviewer']").length > 0)
		  {
			var head = document.getElementsByTagName('HEAD')[0];

			if ($("#photoswipe1").length <= 0) {
				var link = document.createElement("script");
				link.src = "/components/gallery/photoswipe/js/photoswipe.js";
				link.id = "photoswipe1";
				head.appendChild(link);
			}
			if ($("#photoswipe2").length <= 0) {
				var link = document.createElement("script");
				link.src = "/components/gallery/photoswipe/js/photoswipe-ui-default.js";
				link.id = "photoswipe2";
				head.appendChild(link);
			}
			if ($("#photoswipe3").length <= 0) {
				var link = document.createElement("script");
				link.src = "/components/gallery/photoswipe/photoswipe.jsp";
				link.id = "photoswipe3";
				head.appendChild(link);
			}
		  }

	} catch (e) {}
});


    $(document).ready(function()
    {
        try {
            if ("Odkaz se otevře v novém okně"!="")
            {
                //console.log("Doplnam target blank");
                $('a[onclick*="return openTargetBlank"]').each(function()
                {
                    var href = $(this).attr("href");

                    //console.log(href);

                    if (href != null) 
                    {
                        var actualTitle = $(this).attr("title");
                        if (actualTitle!=null && actualTitle!="") $(this).attr("title", actualTitle+" (Odkaz se otevře v novém okně)");
                        else  $(this).attr("title", "Odkaz se otevře v novém okně");
                    }
                });
            }
        }
        catch (e) {}
    });

var checkFormLoaded = true;

    
    
    

//event_attacher.js
    function addEventCheckForm(obj, evType, fn)
    {
        if (navigator.userAgent.indexOf("Opera")!=-1)
        {
            //opera je tupa, cez addEventListener to nefunguje
            eval("obj.on"+evType+"=fn");
            return;
        }

        if (obj.addEventListener)
        {
            obj.addEventListener(evType, fn, true);
            return true;
        }
        else if (obj.attachEvent)
        {
            var r = obj.attachEvent("on"+evType, fn);
            return r;
        }
        else
        {
            return false;
        }
    }

//fix for Internet Explorer event model
    function fixECheckForm(e) {
        if (!e && window.event) e = window.event;
        if (!e.target) e.target = e.srcElement;
        return e;
    }

//class magic
    var classMagic = {};

//prida objektu novy class
    classMagic.add = function (elm, newCl) {
        if (elm && newCl) {
            elm = this.fixElm(elm);
            for (var i = 0; i < elm.length; i++) {
                // ak uz dany objekt ma dany class, nepridame ho
                if (!classMagic.has(elm[i], newCl))
                {
                    elm[i].className += (this.get(elm[i])) ? " " + newCl : newCl;
                }
                try
                {
                    if (("required"==newCl || "invalid"==newCl) && (elm[i].type=="radio" || elm[i].type=="checkbox"))
                    {
                        var newcl2 = newCl+elm[i].type;
                        if (!classMagic.has(elm[i], newcl2))
                        {
                            elm[i].className += (this.get(elm[i])) ? " " + newcl2 : newcl2;
                        }
                    }
                }
                catch (e) { }
            }
            return true;
        }
        return false;
    };

//zisti, ci dany objekt ma priradeny dany class
    classMagic.has = function (elm, cl) {
        if (elm && cl) {
            if (actCl = this.get(elm)) {
                for (var i = 0; i < actCl.length; i++) {
                    if (actCl[i] == cl) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

//nahradi class(-y) objektu novym classom
    classMagic.set = function (elm, newCl) {
        if (elm && newCl) {
            elm = this.fixElm(elm);
            for (var i = 0; i < elm.length; i++) {
                elm[i].className = newCl;
            }
            return true;
        }
        return false;
    };

//nahradi stary class objektu novym classom
    classMagic.replace = function (elm, newCl, oldCl) {
        if (elm && newCl && oldCl) {
            elm = this.fixElm(elm);
            for (var i = 0; i < elm.length; i++) {
                var cl;
                var replCl = "";
                if (cl = this.get(elm[i])) {
                    for (var j = 0; j < cl.length; j++) {
                        replCl += (j > 0) ? " " : "";
                        replCl += (cl[j] == oldCl) ? newCl : cl[j];
                    }
                    elm[i].className = replCl;
                }
            }
            return true;
        }
        return false;
    };

//odstrani stary class
    classMagic.remove = function (elm, oldCl) {
        if (elm && oldCl) {
            elm = this.fixElm(elm);
            for (var i = 0; i < elm.length; i++) {
                var cl;
                var replCl = "";
                if (cl = this.get(elm[i])) {
                    for (var j = 0; j < cl.length; j++) {
                        replCl += (j > 0) ? " " : "";
                        replCl += (cl[j] == oldCl) ? "" : cl[j];
                    }
                    elm[i].className = replCl;
                }

                try
                {
                    if (("required"==oldCl || "invalid"==oldCl) && (elm[i].type=="radio" || elm[i].type=="checkbox"))
                    {
                        var oldcl2 = oldCl+elm[i].type;
                        this.remove(elm[i], oldcl2);
                    }
                }
                catch (e) { }
            }
            return true;
        }
        return false;
    };

//vrati pole vsetkych classov, ktore objekt ma
//(toto je pomocna funkcia, ktoru vyuzivaju dalsie funkcie, ale moze sa pouzit aj samostatne)
    classMagic.get = function (elm) {
        if (elm) {
            return (elm.className == "") ? false : elm.className.split(" ");
        }
        return false;
    };

//pomocna funkcia, ktore prevedie samostatny element na pole
    classMagic.fixElm = function (elm) {
        if (elm) {
            if (!elm.sort) {
                elm = [elm];
            }
            return elm;
        }
        return false;
    }



    function checkNaN(value)
    {
        if (isNaN(value))
        {
            return(0);
        }

        value = (""+value.toFixed(2)).replace(".", ",");
        return(value);
    }

//Excel funkcie
    function rounddown(n, nd)
    {
        if(isFinite(n) && isFinite(nd))
        {
            var sign_n = (n<0)?-1:1;
            var abs_n=Math.abs(n);
            var factor=Math.pow(10,nd);
            return sign_n*Math.floor(abs_n*factor)/factor;
        }
        else
        {
            return NaN;
        }
    }

    function round2(fltValue)
    {
        return Math.round(fltValue * 100) / 100;
    }

    function getFloat(value)
    {
        value = value.replace(/,/gi, ".");
        return(parseFloat(value));
    }

    function onlyPositive(value)
    {
        if (value < 0) return 0;
        return value;
    }

    function smallerNumber(value1, value2)
    {
        if (value1 < value2) return value1;
        return value2;
    }

    function biggerNumber(value1, value2)
    {
        if (value1 > value2) return value1;
        return value2;
    }

    function ifCondition(condition, value1, value2)
    {
        if (condition) return value1;
        return value2;
    }

    var REQCOND1 = "no";
    var REQCOND2 = "no";
    var REQCOND3 = "no";
    var REQCOND4 = "no";
    var REQCOND5 = "no";
    var REQCOND6 = "no";

    /*
    checkForm by Riki "Fczbkk" Fridrich, 2002
    ver 2.0
    http://www.fczbkk.com/
    mailto:riki@fczbkk.com
    You should find latest version of this script and documentation at
    http://www.fczbkk.sk/com/check_form/
    */



    /*
    This is second version of my script for automatic checking of forms. It should
    work in in all standards-compliant browsers (Mozilla, Internet Explorer 5+), it
    downgrades OK in older browsers. No, it's not working in Opera (I said it works
    in standards-compliant browsers only).

    It requires additional functions and libraries:
    - event_attacher.js
        http://www.fczbkk.com/js/event_attacher/
    - fix_e.js
        http://www.fczbkk.com/js/fix_e/
    - class_magic.js
        http://www.fczbkk.com/js/class_magic/

    ATTENTION!!! Additional libraries and functions must be placed/linked before
    checkForm.

    All used scripts and libraries are writen by me, except "Event Attacher", which
    was writen by Scott Andrew (http://www.scottandrew.com/). Feel free to use
    and/or modify them (as far as I know, "Event Attacher" is free to use too), just
    please let me know where you used it if possible (I want to see it in action).
    Any suggestions, comments, bugreports, modifications or functionality
    enhancements are wellcome.
    */

    /*
    Formatting of the fields (e.g. highlighting of "required" or "invalid" fields)
    is defined in external CSS file "check_field.css". These definitions can be
    modified to fit your layout and they can be moved anywhere into your CSS
    definitions.
    */

// object holding all other functions and variables
    var checkForm = {};

    /*
    Regular expression builder, used for simplier adding or editing of character
    groups.
    */

    checkForm.buildRegExp = function(str) {
        if (str) {return new RegExp("^[" + str + "]{1,}$");}
        return false;
    }

    /* -------------- customizations start here -------------- */

    /*
    Message, which will be displayed in the alert, when user tries to submit
    incomplete or invalid form.
    */

    checkForm.invalidMsg = "Promiňte, ale formulář není vyplněný správně.\nNěkterá pole obsahují nesprávné údaje, nebo nejsou vyplněna. Prosím opravte všechna zvýrazněná pole.";
    checkForm.allreadySendingMsg = "Formulář je odesílán, čekejte prosím";

//toto sa pouziva v custom onSubmit funkciach, ak vracaju false, musia toto nastavit na false
    checkForm.isInvalidForm = false;

//ak chceme zobrazit klasicku error hlasku hore a nie vedla inputov daj true
    checkForm.showClassicErrorMessage = false;

    /*
    Acceptable characters or regular expressions defining valid content of checked
    classes.
    */

    checkForm.fieldType = new Array();
    checkForm.title = new Array();

    checkForm.trimRegexp = new RegExp("^[ \f\n\r\t\v]+|[ \f\n\r\t\v]+$", "i");

    
    checkForm.fieldType["czPhone"] =	new RegExp("(^[+][0-9]{9,12}$)", "i");
    checkForm.title["czPhone"] = "telefónne číslo vo formáte +421900000000";
    
    checkForm.fieldType["phone"] =	new RegExp("^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$", "i");
    checkForm.title["phone"] = "telefonní číslo ve formátu (+)1234567890";
    
    checkForm.fieldType["alphabet"] =	new RegExp("^[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZlešctržýáíéúuntódäôöüLEŠCTRŽÝÁÍÉÚUNTÓDÄÔÖÜ ]{1,}$", "i");
    checkForm.title["alphabet"] = "povoleny písmena";
    
    checkForm.fieldType["alphabetLowercase"] =	new RegExp("^[abcdefghijklmnopqrstuvwxyzlešctržýáíéúuntódäô ]{1,}$", "i");
    checkForm.title["alphabetLowercase"] = "povolena pouze malá písmena";
    
    checkForm.fieldType["alphabetUppercase"] =	new RegExp("^[ABCDEFGHIJKLMNOPQRSTUVWXYZLEŠCTRŽÝÁÍÉÚUNTÓDÄÔ ]{1,}$", "i");
    checkForm.title["alphabetUppercase"] = "povolena pouze velká písmena";
    
    checkForm.fieldType["alphanumeric"] =	new RegExp("^[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789lešctržýáíéúuntódäôLEŠCTRŽÝÁÍÉÚUNTÓDÄÔ ]{1,}$", "i");
    checkForm.title["alphanumeric"] = "povoleny číslice a písmena";
    
    checkForm.fieldType["czskPhone"] =	new RegExp("(^[+]42[0-1]{1}\s?[ 0-9]{3}\s?[ 0-9]{3}\s?[ 0-9]{3}$)", "i");
    checkForm.title["czskPhone"] = "telefónne číslo vo formáte +421900000000";
    
    checkForm.fieldType["date"] =	new RegExp("^(([0]?[123456789])|([12][0-9])|(3[01]))[.]((0?[123456789])|(1[012]))[.][0-9]{4}$", "i");
    checkForm.title["date"] = "datum ve formátu dd.mm.rrrr";
    
    checkForm.fieldType["dateIco"] =	new RegExp("^((([0]?[123456789])|([12][0-9])|(3[01]))[.]((0?[123456789])|(1[012]))[.][0-9]{4}|([0-9]{8}))$", "i");
    checkForm.title["dateIco"] = "checkform.title.dateIco";
    
    checkForm.fieldType["datetime"] =	new RegExp("^[0-9]{1,2}[.][0-9]{1,2}[.][0-9]{4}.[0-9]{1,2}[:][0-9]{1,2}[:][0-9]{1,2}$", "i");
    checkForm.title["datetime"] = "datum a čas ve formátu dd.mm.rrrr hh:mm:ss";
    
    checkForm.fieldType["email"] =	new RegExp("^[a-zA-Z0-9]+[a-zA-Z0-9\._+=#$%&-]*[a-zA-Z0-9]+@[a-zA-Z0-9]+[a-zA-Z0-9\._-]*[a-zA-Z0-9]+\.[a-zA-Z]{2,16}$", "i");
    checkForm.title["email"] = "e-mailová adresa ve formátu jmeno@domena.com";
    
    checkForm.fieldType["email2"] =	new RegExp("^[a-z0-9]+[a-z0-9\._-]*[a-z0-9]+@[a-z0-9]+[a-z0-9\._-]*[a-z0-9]+\.[a-z]{2,4}$", "i");
    checkForm.title["email2"] = "checkform.title.email2";
    
    checkForm.fieldType["fixedNumber"] =	new RegExp("^(([0-9]{8,10}))$", "i");
    checkForm.title["fixedNumber"] = "checkform.title.fixedNumber";
    
    checkForm.fieldType["fixedPhone"] =	new RegExp("(^[0-9]{2,3}[\/][0-9]{3,12}$)|(^[+][0-9]{1,3}[\/][0-9]{1,2}[\/][0-9]{3,12}$)", "i");
    checkForm.title["fixedPhone"] = "telefonní číslo pevné linky ve formátu xxx(x)/yyy(yyyyyyyyy)";
    
    checkForm.fieldType["integer"] =	new RegExp("^[-]?[0-9]+$", "i");
    checkForm.title["integer"] = "Celé číslo";
    
    checkForm.fieldType["loginChars"] =	new RegExp("^[0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_.]{1,}$", "i");
    checkForm.title["loginChars"] = "povoleny číslice a písmena (bez diakritiky)";
    
    checkForm.fieldType["minLen16"] =	new RegExp(".................*", "i");
    checkForm.title["minLen16"] = "minimálně 16 znaků";
    
    checkForm.fieldType["minLen2"] =	new RegExp("...*", "i");
    checkForm.title["minLen2"] = "minimálně 2 znaky";
    
    checkForm.fieldType["minLen3"] =	new RegExp("....*", "i");
    checkForm.title["minLen3"] = "minimálně 3 znaky";
    
    checkForm.fieldType["minLen4"] =	new RegExp(".....*", "i");
    checkForm.title["minLen4"] = "minimálně 4 znaky";
    
    checkForm.fieldType["minLen5"] =	new RegExp("......*", "i");
    checkForm.title["minLen5"] = "minimálně 5 znaků";
    
    checkForm.fieldType["minLen6"] =	new RegExp(".......*", "i");
    checkForm.title["minLen6"] = "minimálně 6 znaků";
    
    checkForm.fieldType["minLen8"] =	new RegExp(".........*", "i");
    checkForm.title["minLen8"] = "minimálně 8 znaků";
    
    checkForm.fieldType["mobilePhone"] =	new RegExp("(^[0-9]{4}[\/][0-9]{6}$)|(^[+][0-9]{1,3}[\/][0-9]{3}[\/][0-9]{6}$)", "i");
    checkForm.title["mobilePhone"] = "mobilní telefonní číslo ve formátu xxxx/yyyzzz";
    
    checkForm.fieldType["numbers"] =	new RegExp("^[-]?[0-9]+([,.][0-9]+)?$", "i");
    checkForm.title["numbers"] = "povoleny číslice";
    
    checkForm.fieldType["phoneN"] =	new RegExp("^([/+421]?([0-9]{12,16}))$", "i");
    checkForm.title["phoneN"] = "checkform.title.phoneN";
    
    checkForm.fieldType["phoneNumber"] =	new RegExp("(^[+][0-9]{9,12}$)", "i");
    checkForm.title["phoneNumber"] = "telefonní číslo ve formátu +42X XXX XXX XXX";
    
    checkForm.fieldType["postalCode"] =	new RegExp("^(([0-9]{5})|([0-9]{3} [0-9]{2})|([0-9]{2} [0-9]{3}))$", "i");
    checkForm.title["postalCode"] = "PSČ";
    
    checkForm.fieldType["safeChars"] =	new RegExp("^[0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ ]{1,}$", "i");
    checkForm.title["safeChars"] = "povoleny číslice a písmena (bez diakritiky)";
    
    checkForm.fieldType["safeChars2"] =	new RegExp("^[0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_\\-]{1,}$", "i");
    checkForm.title["safeChars2"] = "checkform.title.safeChars2";
    
    checkForm.fieldType["skczPhone"] =	new RegExp("(^[+]42[0-1]{1}\s?[ 0-9]{3}\s?[ 0-9]{3}\s?[ 0-9]{3}$)", "i");
    checkForm.title["skczPhone"] = "telefónne číslo vo formáte +421900000000";
    
    checkForm.fieldType["skPhone"] =	new RegExp("(^[+][0-9]{9,12}$)", "i");
    checkForm.title["skPhone"] = "telefónne číslo vo formáte +421900000000";
    
    checkForm.fieldType["skPhone1"] =	new RegExp("(^[+]421\s?[ 0-9]{4}\s?[ 0-9]{4}\s?[ 0-9]{4}\s?[ 0-9]{0,4}$)", "i");
    checkForm.title["skPhone1"] = "checkform.title.skPhone1";
    
    checkForm.fieldType["time"] =	new RegExp("^[0-9]{1,2}[:][0-9]{1,2}$", "i");
    checkForm.title["time"] = "čas ve formátu hh:mm";
    
    checkForm.fieldType["trim"] =	new RegExp("^[^ \f\n\r\t\v]+[.]*", "i");
    checkForm.title["trim"] = "Prázdný znak";
    
    checkForm.fieldType["uniPhonecz"] =	new RegExp("(^[+][0-9]{9,12}$)", "i");
    checkForm.title["uniPhonecz"] = "telefónne číslo vo formáte +421900000000";
    
    checkForm.fieldType["uniPhonesk"] =	new RegExp("(^[+][0-9]{9,12}$)", "i");
    checkForm.title["uniPhonesk"] = "telefónne číslo vo formáte +421900000000";
    
    checkForm.fieldType["uniPhone"] =	new RegExp("(^[+][0-9]{1,4}[0-9]{3,12}$)", "i");
    checkForm.title["uniPhone"] = "telefónne číslo vo formáte +421900000000";
    
    checkForm.fieldType["url"] =	new RegExp("^http[s]?:\/\/[a-zA-Z0-9]+([-_\.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}([:0-9]*)(\/{1}[%-_~&=\?\.:a-z0-9]*)*$", "i");
    checkForm.title["url"] = "adresa web stránky ve formátu http://www.example.com";
    
    checkForm.fieldType["psc"] =	new RegExp("^\\d{5}$", "i");
    checkForm.title["psc"] = "checkform.title.psc";
    
    /*
    Default values for classes. These will be displayed, if form field with given
    class is focused and empty.
    */

    checkForm.defaultValue = new Array();
    checkForm.defaultValue["url"] =						"http://www.";
    checkForm.defaultValue["email"] =					"@";

    checkForm.formula = new Array();

    /* -------------- customizations end here -------------- */

    /*
    Initialisation of checkForm when document is loaded. It finds all forms and
    fields, checks them and adds events to them.
    */

    checkForm.allreadyInitialized = false;

    checkForm.init = function() {

        if (checkForm.allreadyInitialized == true) return;
        checkForm.allreadyInitialized = true;

        var forms = document.getElementsByTagName("form");
        for (var i = 0; i < forms.length; i++)
        {
            if(classMagic.has(forms[i], 'noCheckForm')) {
                continue;
            }
            addEventCheckForm(forms[i], "submit", checkForm.check);
            addEventCheckForm(forms[i], "reset", checkForm.resetClick);
            if (classMagic.has(forms[i], "checkFormClassicMessage")) checkForm.showClassicErrorMessage = true;
        }

        var fields = checkForm.findInputs();
        for (var i = 0; i < fields.length; i++)
        {
            if (fields[i].value && fields[i].value.indexOf("=")==0 && fields[i].form.name!="")
            {
                //window.alert("value="+fields[i].value);
                fnc = fields[i].value.replace(/]/gi, ".value)");
                fnc = fnc.replace(/\[/gi, "getFloat(document."+fields[i].form.name+".");
                fnc = fnc.replace(/=/gi, "=checkNaN(");
                fnc = fnc + ")";
                fnc = "document."+fields[i].form.name+"." + fields[i].name + ".value"+ fnc + ";";
                //window.alert("fnc: " + fnc);
                checkForm.formula[checkForm.formula.length] = fnc;
                //window.alert("size: " + checkForm.formula.length);
            }

            if (fields[i].type.toLowerCase().indexOf("select")!=-1)
            {
                //pre select box nemozu byt ostatne eventy lebo to v IE blblo
                addEventCheckForm(fields[i], "change", checkForm.checkField);
            }
            else
            {
                checkForm.fillTitles(fields[i]);

                //ak je vypnuta validacia pri inicializacii tak nevaliduj
                if(false)
                {
                    checkForm.checkField(fields[i]);
                }
                else
                {
                    //vypnuta validacia pri inicializacii -> nevalidovat len ak je pole prazdne
                    if(!isEmpty(fields[i].value))
                        checkForm.checkField(fields[i]);
                }

                addEventCheckForm(fields[i], "blur", checkForm.checkImplBlur);
                addEventCheckForm(fields[i], "focus", checkForm.checkField);
                if (classMagic.has(fields[i], "noEnterSubmit"))
                {
                    addEventCheckForm(fields[i], "keydown", checkForm.checkFieldEnter);
                }
                addEventCheckForm(fields[i], "keyup", checkForm.checkField);

                addEventCheckForm(fields[i], "click", checkForm.checkField);

                if ($(fields[i]).is(":checkbox")) {
                    addEventCheckForm(fields[i], "change", checkForm.checkImplBlur);
                }
                else {
                    addEventCheckForm(fields[i], "change", checkForm.checkField);
                }

                //pridaj mu classu, aby sa to dalo rozumnejsie stylovat
                classMagic.add(fields[i], "input"+fields[i].type.toLowerCase());

                //pridaj requiredradio pre required radia
                if (fields[i].type=="radio" || fields[i].type=="checkbox")
                {
                    if (classMagic.has(fields[i], "required"))
                    {
                        var newcl = "required"+fields[i].type;
                        classMagic.add(fields[i], newcl);
                    }
                }
            }
        }
    }

    function isEmpty(obj) {
        if (typeof obj == 'undefined' || obj == null || obj == '' || obj == '@') return true;
        if (typeof obj == 'number' && isNaN(obj)) return true;
        if (obj instanceof Date && isNaN(Number(obj))) return true;
        return false;
    }

    checkForm.resetClickLastE = null;
    checkForm.resetClick = function(e)
    {
        var formResultDiv = document.getElementById("ajaxFormResultContainer");
        if (formResultDiv != null)
        {
            formResultDiv.style.display = "none";
            formResultDiv.innerHTML = "";
        }
        checkForm.resetClickLastE = e;
        window.setTimeout(checkForm.resetClickRecheck, 100);
    }
    checkForm.resetClickRecheck = function()
    {
        if (checkForm.resetClickLastE != null) checkForm.recheck(checkForm.resetClickLastE);
    }

    /*
    Helper functions, which finds all fields in given element and returns them in
    an array. If no element is specified, all fields in document are returned.
    */

    checkForm.findInputs = function(elm) {
        var fields = new Array();
        if (!elm) {elm = document;}

        var selects = elm.getElementsByTagName("select");
        var textareas = elm.getElementsByTagName("textarea");
        var inputs = elm.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            if ((inputs[i].type == "text") || (inputs[i].type == "email") || (inputs[i].type == "tel") || (inputs[i].type == "number") || (inputs[i].type == "password") || (inputs[i].type == "file") || (inputs[i].type == "radio") || (inputs[i].type == "checkbox")) {
                fields[fields.length] = inputs[i];
            }
        }

        for (var i = 0; i < textareas.length; i++) {
            fields[fields.length] = textareas[i];
        }

        for (var i = 0; i < selects.length; i++) {
            fields[fields.length] = selects[i];
        }

        return fields;
    }

    /*
    Checking the form before submitting. To be sure, we will check all fields of
    given form once more and cancel the submit action if some fields are invalid.
    */
    checkForm.allreadySending = false;

    checkForm.check = function(e)
    {
        if (checkForm.isInvalidForm==true)
        {
            return false;
        }

        e = fixECheckForm(e);
        var obj = e.target;
        while (obj.tagName != "FORM") {
            obj = obj.parentNode;
        }

        var isSubmit = (e.type == "submit");
        if (checkForm.checkImpl(obj, isSubmit, e)==false)
        {
            return false;
        }

        if (checkForm.allreadySending == true)
        {
            alert(checkForm.allreadySendingMsg);
            e.preventDefault();
            return false;
        }
        if (e.type == "submit")
        {
            checkForm.allreadySending = true;
        }
        checkForm.hideAutocompleteOff(obj);
        return true;
    }

    checkForm.checkImpl = function(obj, isSubmit, e)
    {
        var fields = checkForm.findInputs(obj);
        var isSubmitError = false;
        var errorMessage = checkForm.invalidMsg+"\n";
        var errorMessageHtml = '<div class="ajaxError">Prosím, opravte následující chyby:</div><ol>';
        for (var i = 0; i < fields.length; i++)
        {
            //sprav trim (ak treba)
            checkForm.trimField(fields[i]);
            //skontroluj
            var status = checkForm.checkField(fields[i]);
            var errorBlock = [];
            try
            {
                errorBlock = checkForm.getErrorBlock(fields[i]);

                if (errorBlock.length == 0) {
                    var id = fields[i].id != null ? fields[i].id : fields[i].name;
                    if (id != '') {
                        errorBlock = $("#" + id).parent().find(".cs-error");
                    }
                    else {
                        errorBlock = $();
                    }
                }
                var isExistErrorBlock = errorBlock.length > 0;
            } catch (e) { console.log(e); }

            if (status == "invalid")
            {
                if (isSubmit)
                {
                    isSubmitError = true;
                    var msg = checkForm.markAndGetLabelText(fields[i], true);
                    if (errorMessage.indexOf("- "+msg)==-1)
                    {
                        if(!isExistErrorBlock)
                        {
                            errorMessage = errorMessage + "\n- " + msg;
                            errorMessageHtml = errorMessageHtml + "\n<li>" + msg;
                            if (fields[i].title != null && fields[i].title != undefined && fields[i].title!="") {
                                errorMessageHtml += " - " + fields[i].title
                            }
                            errorMessageHtml += "</li>";

                            if(typeof $(fields[i]).attr("rel") != "undefined")
                            {
                                msg = $(fields[i]).attr("rel");
                            }
                            else {
                                msg += " " + fields[i].title;
                            }

                            if (checkForm.showClassicErrorMessage==false) {
                                var el;
                                var id = fields[i].id != null ? fields[i].id : fields[i].name;
                                if (id != '') {
                                    el = $("#" + id).next(".cs-error");
                                }
                                else {
                                    el = $();
                                }
                                el.parent().append('<div class="help-block cs-error cs-error-'+obj.id+'">'+msg+'</div>').show();
                            }
                        }
                        else {
                            if (errorBlock.html() == "") {
                                errorBlock.html(msg +' - ' + fields[i].title);
                            }
                            errorBlock.show();
                        }
                    }
                }
                else
                {
                    return false;
                }
            }
            else
            {
                //odznac label, ze je zle vyplneny
                checkForm.markAndGetLabelText(fields[i], false);
            }
        }

        if (isSubmitError)
        {
            checkForm.printAlertMessage(errorMessageHtml, errorMessage, e, obj);

            if (e!=null && e.preventDefault)
            {
                e.preventDefault();
            }

            return false;
        }
    }

    checkForm.checkImplBlur = function(e)
    {
        var errorMessage = checkForm.invalidMsg+"\n";
        var errorMessageHtml = '<div class="ajaxError">Prosím, opravte následující chyby:</div><ol>';
        var obj;
        if (e && e.tagName) {
            obj = e;
        } else {
            e = fixECheckForm(e);
            obj = e.target;
        }
        //window.alert(fields[i]);
        isSubmit = true;
        //sprav trim (ak treba)
        checkForm.trimField(obj);
        //skontroluj
        var status = checkForm.checkField(obj);
        var errorBlock = checkForm.getErrorBlock(obj);
        if (errorBlock.length == 0) {
            var id = obj.id != null ? obj.id : obj.name;
            if (id != '') {
                errorBlock = $("#" + id).next(".cs-error");
            }
            else {
                errorBlock = $();
            }
        }
        var isExistErrorBlock = errorBlock.length > 0;

        if (status == "invalid")
        {
            var msg = checkForm.markAndGetLabelText(obj, true);

            if (errorMessage.indexOf("- "+msg)==-1)
            {
                if(!isExistErrorBlock){
                    if($(obj).attr("rel") != undefined ){
                        msg = $(obj).attr("rel");

                    }else{
                        msg += " " + obj.title;
                    }
                    if (checkForm.showClassicErrorMessage==false) {
                        var el;
                        var id = obj.id != null ? obj.id : obj.name;
                        if (id != '') {
                            el = $("#"+obj.id);
                        }
                        else {
                            el = $();
                        }
                        el.parent().append('<div class="help-block cs-error cs-error-'+obj.id+'">'+msg+'</div>');
                    }
                }else{
                    if (errorBlock.html() == "") {
                        errorBlock.html(msg +' - ' + obj.title);
                    }
                    errorBlock.show();
                }
            }
        }
        else
        {
            if(isExistErrorBlock) {
                errorBlock.hide();
            }

            //odznac label, ze je zle vyplneny
            checkForm.markAndGetLabelText(obj, false);
        }
    }

    checkForm.getErrorBlock = function(obj) {
        var id = obj.id != null ? obj.id : obj.name;
        if (id != '') {
            return $(".cs-error-" + obj.id);
        }
        return $();
    }

    checkForm.printAlertMessage = function(errorMessageHtml, errorMessage, e, obj)
    {
        try
        {
            if (errorMessageHtml == null) errorMessageHtml="<div class='ajaxError'>"+errorMessage+"</div>";

            var errorDivElement = document.getElementById("checkFormAlertDiv");
            if (errorDivElement == null) errorDivElement = document.getElementById("ajaxFormResultContainer");
            if (errorDivElement == null && ($('.cs-error').length == 0 || checkForm.showClassicErrorMessage==true))
            {
                //vytvor ho
                var form = null;
                if (obj != null && obj != undefined) form = $(obj)
                else form = $("form[name=formMailForm]");
                form.prepend("<div id='formResult'><div id='ajaxFormResultContainer'></div></div>");
                errorDivElement = document.getElementById("ajaxFormResultContainer");
            }

            if ($('.cs-error').length > 0 && checkForm.showClassicErrorMessage==false) {
                var csError = $('.cs-error:visible').first();
                if (csError.length > 0) {
                    $("html,body").animate({ scrollTop: (csError.offset().top - 100) }, { duration: 'fast', easing: 'linear'});
                }
            }
            else if (errorDivElement != null)
            {
                try
                {
                    $(errorDivElement).html(errorMessageHtml+"</ol>").show("slow");
                    //div.tab-pane pridane pre tabovany content (usredit)
                    $("html,body,div.tab-pane").animate({ scrollTop: ($(errorDivElement).offset().top - 100) }, { duration: 'fast', easing: 'linear'});
                }
                catch (e) {
                    alert(errorMessage); }
            }
            else {
                alert(errorMessage);
            }

            if (e!=null && e.preventDefault)
            {
                e.preventDefault();
            }
        }
        catch (e)
        {
            alert(errorMessage);
        }
    }

    checkForm.markAndGetLabelText = function(field, isInvalid)
    {
        //najskor skus najst label pre dany field
        var id = field.id;
        if (id == "") id = field.name;

        var text = null;
        if (id != null)
        {
            //skus najst label pre dane pole
            var labelElm = checkForm.formGetLabel(id);
            if (labelElm != null)
            {
                if (isInvalid)
                {

                    if (field.type == "radio" || field.type == "checkbox")
                    {
                        var leftLabelElm = checkForm.formGetLabel(field.name);
                        if (leftLabelElm != null) text = checkForm.getInnerText(leftLabelElm);
                    }
                    if (text == null || text == "") text = checkForm.getInnerText(labelElm);

                    if (!classMagic.has(field, "noCheckForm")) {
                        classMagic.add(labelElm, "invalidLabel");
                    }
                }
                else
                {
                    if (!classMagic.has(field, "noCheckForm")) {
                        classMagic.remove(labelElm, "invalidLabel");
                    }
                }
            }
        }

        if (text==null && id.indexOf("wjcaptcha")!=-1) {
            text = "Text na obrázku";
        }

        if (text == null) {
            text = id;
        }

        if (text == null) {
            text = $(field).prop('name');
        }

        var dataName = $(field).data('name');
        if (typeof dataName != "undefined" && dataName != "") {
            text = dataName;
        }

        return text;
    }

    checkForm.getInnerText = function(elem)
    {
        var hasInnerText = (document.getElementsByTagName("body")[0].innerText != undefined) ? true : false;
        if(!hasInnerText)
        {
            return elem.textContent;
        }
        return elem.innerText;
    }

    checkForm.formGetLabel = function(forField)
    {
        if (forField == null || forField == "") return null

        var labels = document.getElementsByTagName("LABEL");
        for (i=0; i < labels.length; i++)
        {
            if (labels[i].htmlFor == forField) return labels[i];
        }
        return null;
    }


    checkForm.hideAutocompleteOff = function(obj)
    {
        var fields = obj.elements;
        for (var i = 0; i < fields.length; i++)
        {
            var classes = classMagic.get(fields[i]);
            //taketo pole nastavim na hidden aby si FF nepamatal heslo
            if (classMagic.has(fields[i], "autocompleteoff"))
            {
                fields[i].setAttribute("type", "hidden");
            }
        }
    }

    checkForm.showAutocompleteOff = function(obj)
    {

        var fields = obj.elements;
        for (var i = 0; i < fields.length; i++)
        {
            var classes = classMagic.get(fields[i]);
            //taketo pole nastavim na hidden aby si FF nepamatal heslo
            if (classMagic.has(fields[i], "autocompleteoff"))
            {
                fields[i].setAttribute("type", "password");
            }
        }
    }

    checkForm.btnSubmit = function(obj)
    {
        if (checkForm.isInvalidForm==true)
        {
            return false;
        }

        var fields = checkForm.findInputs(obj);
        for (var i = 0; i < fields.length; i++)
        {
            //window.alert(fields[i]);

            //sprav trim (ak treba)
            checkForm.trimField(fields[i]);
            //skontroluj
            var status = checkForm.checkField(fields[i]);
            if (status == "invalid")
            {
                alert(checkForm.invalidMsg);
                return false;
            }
        }
        if (checkForm.allreadySending == true)
        {
            alert(checkForm.allreadySendingMsg);
            return false;
        }
        checkForm.allreadySending = true;
        checkForm.hideAutocompleteOff(obj);
        obj.submit();
        return true;
    }

    /*
    Prekontroluje polia, ale nespravi ziadny alert, potrebne po zmene REQCOND
    */
    checkForm.recheck = function(e)
    {
        var valid = true
        var fields = checkForm.findInputs();
        for (var i = 0; i < fields.length; i++)
        {
            status = checkForm.checkField(fields[i]);
            if (valid && status == "invalid" || status == "required")
                valid = false
        }
        return valid
    }

    checkForm.recheckAjax = function(form)
    {
        return checkForm.checkImpl(form, true, null);
    }

    /*
    checks one field, prints message if not valid
    */
    checkForm.recheckFieldAjax = function(element)
    {
        var status = checkForm.checkField(element);
        var errorMessage = checkForm.invalidMsg+"\n";
        var errorMessageHtml = '<div class="ajaxError">Prosím, opravte následující chyby:</div><ol>';
        if (status == "invalid")
        {
            //TODO: mark the input

            var msg = checkForm.markAndGetLabelText(element, true);
            if (errorMessage.indexOf("- "+msg)==-1)
            {
                errorMessage = errorMessage + "\n- " + msg;
                errorMessageHtml = errorMessageHtml + "\n<li>" + msg;
                if (element.title != null && element.title != undefined && element.title!="") errorMessageHtml += " - " + element.title
                errorMessageHtml += "</li>";
            }
            checkForm.printAlertMessage(errorMessageHtml, errorMessage, null, element.form);
            return false;
        }
        return true;
    }

    /*
    checks more fields, prints messages if at least one not valid
    */
    checkForm.recheckFieldsAjax = function(fields)
    {
        var ret =true;
        var errorMessage = checkForm.invalidMsg+"\n";
        var errorMessageHtml = '<div class="ajaxError">Prosím, opravte následující chyby:</div><ol>';
        var form = fields[0].form;
        for (var i = 0; i < fields.length; i++)
        {
            checkForm.trimField(fields[i]);
            var status = checkForm.checkField(fields[i]);
            if (status == "invalid")
            {
                ret = false;
                var msg = checkForm.markAndGetLabelText(fields[i], true);
                if (errorMessage.indexOf("- "+msg)==-1)
                {
                    errorMessage = errorMessage + "\n- " + msg;
                    errorMessageHtml = errorMessageHtml + "\n<li>" + msg;
                    if (fields[i].title != null && fields[i].title != undefined && fields[i].title!="")errorMessageHtml += " - " + fields[i].title
                    errorMessageHtml += "</li>";
                }
            }
            else
            {
                //odznac label, ze je zle vyplneny
                checkForm.markAndGetLabelText(fields[i], false);
            }
        }
        if(!ret) checkForm.printAlertMessage(errorMessageHtml, errorMessage, null, form);
        return ret;
    }



    /*
    Checking the form field.
    */
    checkForm.checkFieldEnter = function(e)
    {
        if (e.keyCode && e.keyCode==13)
        {
            window.alert("Formulár nie je možné odoslať klávesou enter, kliknite prosím na príslušné tlačítko pre odoslanie formuláru.");
            if (e.preventDefault) {
                e.preventDefault();
            }
            return false;
        }
        return true;
    }

    checkForm.trimField = function(e)
    {
        var obj;
        if (e && e.tagName) {
            obj = e;
        } else {
            e = fixECheckForm(e);
            obj = e.target;
        }

        //tieto nebudeme kontrolovat
        if (classMagic.has(obj, "trim")==false) return;

        //2x je to tu lebo to netrimovalo spravne konce
        obj.value = obj.value.replace(checkForm.trimRegexp, "");
        obj.value = obj.value.replace(checkForm.trimRegexp, "");
    }


    var checkFormSetCursorObj = null;
    var checkFormSetCursorPos = 0;
    checkForm.setCursorAsync = function()
    {
        var node = checkFormSetCursorObj;
        var pos = checkFormSetCursorPos;
        try
        {
            var node = (typeof node == "string" || node instanceof String) ? document.getElementById(node) : node;

            if(!node)
            {
                return false;
            }
            else if(node.createTextRange)
            {
                var textRange = node.createTextRange();
                textRange.collapse(true);
                textRange.moveEnd(pos);
                textRange.moveStart(pos);
                textRange.select();
                return true;
            }
            else if(node.setSelectionRange)
            {
                node.setSelectionRange(pos,pos);
                return true;
            }
        }
        catch (e) { }

        return false;
    }
    checkForm.setCursor = function(node,pos)
    {
        checkFormSetCursorObj = node;
        checkFormSetCursorPos = pos;
        setTimeout(checkForm.setCursorAsync, 50);
    }

    checkForm.checkField = function(e)
    {
        var obj;
        if (e && e.tagName) {
            obj = e;
        } else {
            e = fixECheckForm(e);
            obj = e.target;
        }

        //recalculate values
        try
        {
            if (checkForm.formula.length>0)
            {
                for (i=0; i< checkForm.formula.length; i++)
                {
                    try
                    {
                        //window.alert("vypocitavam: "+checkForm.formula[i]);
                        eval(checkForm.formula[i]);
                    }
                    catch (e2)
                    {
                        window.status= "chyba vypoctu 2: "+e2+" fnc: "+checkForm.formula[i];
                    }
                }
            }
        }
        catch (e)
        {
            window.status= "chyba vypoctu: "+e;
        }

        var fieldOK = true;
        var classes = classMagic.get(obj);

        //tieto nebudeme kontrolovat
        if (classMagic.has(obj, "noCheckForm")) return;

        if (classMagic.has(obj, "captcha"))
        {
            var actualStatus = "invalid";
            if (classMagic.has(obj, "invalid")==false) actualStatus = "valid";

            checkForm.checkCaptcha(obj);

            return actualStatus;
        }

        classMagic.add(obj, "invalid");

        // conditional required field
        if (classMagic.has(obj, "reqcond1"))
        {
            if ("yes"==REQCOND1)
            {
                classMagic.remove(obj, "invalid");
                classMagic.remove(obj, "required");
                return("valid");
            }
            else
            {
                classMagic.add(obj, "invalid");
                classMagic.add(obj, "required");
            }
        }

        if (classMagic.has(obj, "reqcond2"))
        {
            if ("yes"==REQCOND2)
            {
                classMagic.remove(obj, "invalid");
                classMagic.remove(obj, "required");
                return("valid");
            }
            else
            {
                classMagic.add(obj, "invalid")
                classMagic.add(obj, "required")
            }
        }

        if (classMagic.has(obj, "reqcond3"))
        {
            if ("yes"==REQCOND3)
            {
                classMagic.remove(obj, "invalid");
                classMagic.remove(obj, "required");
                return("valid");
            }
            else
            {
                classMagic.add(obj, "invalid");
                classMagic.add(obj, "required");
            }
        }

        if (classMagic.has(obj, "reqcond4"))
        {
            if ("yes"==REQCOND4)
            {
                classMagic.remove(obj, "invalid");
                classMagic.remove(obj, "required");
                return("valid");
            }
            else
            {
                classMagic.add(obj, "invalid")
                classMagic.add(obj, "required")
            }
        }

        if (classMagic.has(obj, "reqcond5"))
        {
            if ("yes"==REQCOND5)
            {
                classMagic.remove(obj, "invalid");
                classMagic.remove(obj, "required");
                return("valid");
            }
            else
            {
                classMagic.add(obj, "invalid")
                classMagic.add(obj, "required")
            }
        }

        if (classMagic.has(obj, "reqcond6"))
        {
            if ("yes"==REQCOND6)
            {
                classMagic.remove(obj, "invalid");
                classMagic.remove(obj, "required");
                return("valid");
            }
            else
            {
                classMagic.add(obj, "invalid")
                classMagic.add(obj, "required")
            }
        }

        var i = 0;
        // required field can't be empty
        if (classMagic.has(obj, "required"))
        {
            if (obj.type == "radio" || obj.type == "checkbox")
            {
                fieldOK = checkForm.isRadioSelected(obj);
            }
            else
            {
                i = 0;
                while (i < classes.length)
                {
                    if ((e.type == "blur") && (obj.value == checkForm.defaultValue[classes[i]])) {
                        obj.value = "";
                    }
                    i++;
                }

                fieldOK = (checkForm.isBlank(obj.value)) ? false : true;
            }
        }

        // find classes of given field and check, if there are any rules for it
        i = 0;
        while (i < classes.length)
        {
            if (checkForm.defaultValue[classes[i]]) {
                if ((e.type == "focus") && checkForm.isBlank(obj.value))
                {
                    obj.value = checkForm.defaultValue[classes[i]];
                    checkForm.setCursor(obj, 0);
                }

                if ((e.type == "blur") && (obj.value == checkForm.defaultValue[classes[i]])) {
                    obj.value = "";
                }
            }

            if (fieldOK && obj.type!="checkbox" && obj.type!="radio")
            {
                if (checkForm.fieldType[classes[i]])
                {
                    fieldOK = (!checkForm.isBlank(obj.value) && checkForm.checkChars(obj.value, checkForm.fieldType[classes[i]])) ? false : true;
                    i = classes.length;
                }
            }
            i++;
        }

        fieldOK = fieldOK || obj.type == 'hidden';

        // if content of the field is not OK, highlight it as invalid
        (fieldOK) ? classMagic.remove(obj, "invalid") : classMagic.add(obj, "invalid");

        /*
        Function like this should return "true" or "false". But this would be
        blocking of keyboard input in case of incomplete content of the field
        (e.g. URL). That's why this function returns "valid" or "invalid".
        */
        return (fieldOK) ? "valid" : "invalid";
    }

    checkForm.fillTitles = function(obj)
    {
        try
        {
            if (obj.title!="") return;

            if (classMagic.has(obj, "required"))
            {
                obj.title = "povinná pole";
            }

            var classes = classMagic.get(obj);
            var i = 0;
            for (i=0; i < classes.length; i++)
            {
                var text = checkForm.title[classes[i]];
                if (text != null && text!=undefined && text != "")
                {
                    if (obj.title != "") obj.title = obj.title+", "+text;
                    else obj.title = obj.title+" "+text;
                }
            }
        } catch (e) {}
    }

    /*
    Checks if given string contains given pattern (regullar expression).
    */

    checkForm.checkChars = function(str, re) {
        if (str && re) {
            return (str.search(re) == -1) ? true : false;
        }
        return true;
    }

    /*
    Checks, if given string is blank or not.
    */

    checkForm.isBlank = function(str)
    {
        str = str.replace(checkForm.trimRegexp, "");
        str = str.replace(checkForm.trimRegexp, "");
        return (str == "" || str == " ") ? true : false;
    }

    /*
    WebJET: skontroluje, ci je zvolene aspon jedno radio/checkbox z danej skupiny
    */
    checkForm.isRadioSelected = function(obj)
    {
        try
        {
            var radioForm = obj.form;
            var radios = radioForm.elements[obj.name];

            if (radios.length==undefined)
            {
                //mame jedno radio
                if (obj.checked)
                {
                    classMagic.remove(obj, "invalid");
                    if (obj.type=="radio") classMagic.remove(obj, "required");
                }
                else
                {
                    classMagic.add(obj, "invalid");
                }
                return obj.checked;
            }

            var someChecked = false;
            var checkedCount = 0;
            for (i=0; i< radios.length; i++)
            {
                if (radios[i].checked)
                {
                    someChecked = true;
                    checkedCount++;
                }
            }

            //skontroluj hodnoty pre min a max len
            try
            {
                var classes = classMagic.get(obj);
                if (classes && classes.length)
                {
                    for (i=0; i< classes.length; i++)
                    {
                        if (classes[i].indexOf("countCond-")==0)
                        {
                            var data = classes[i].split("-");
                            if (data && data.length==3)
                            {
                                if (checkedCount < data[1]) someChecked = false;
                                if (checkedCount > data[2]) someChecked = false;
                            }
                        }
                    }
                }
            }
            catch (ex2) {}

            for (i=0; i< radios.length; i++)
            {
                if (someChecked == false)
                {
                    classMagic.add(radios[i], "invalid");

                    //najdi prislusny label a nastav aj tomu
                    var elmId = radios[i].id;
                    var label = $("label[for="+elmId+"]").addClass("invalidLabel");
                }
                else
                {
                    //cb sa uz neda odselectnut, mozeme removnut aj required aby sa to ako tak odstylovalo
                    classMagic.remove(radios[i], "invalid");

                    //najdi prislusny label a nastav aj tomu
                    var elmId = radios[i].id;
                    var label = $("label[for="+elmId+"]").removeClass("invalidLabel");

                }
            }

            return someChecked;
        }
        catch (ex)
        {
            //alert(ex);
        }
        return true;
    }

    /*
    WebJET - kontrola captcha kodu
    */
    checkForm.xmlhttp = null;
    checkForm.captchaObj = null;
    checkForm.checkCaptcha = function(obj)
    {
        var value = obj.value;
        checkForm.xmlhttp=null;
        if (window.XMLHttpRequest)
        {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            checkForm.xmlhttp=new XMLHttpRequest();
        }
        else
        {
            // code for IE6, IE5
            checkForm.xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

        classMagic.add(obj, "invalid");
        checkForm.captchaObj = obj;

        checkForm.xmlhttp.onreadystatechange=checkForm.checkCaptchaChange;
        checkForm.xmlhttp.open("GET", "/components/form/catpcha_ajax.jsp?v="+value, true);
        checkForm.xmlhttp.send(null);
    }

    checkForm.checkCaptchaChange = function()
    {
        try
        {
            if (checkForm.captchaObj != null)
            {
                if (checkForm.xmlhttp.readyState==4)
                {
                    // 4 = "loaded"
                    if (checkForm.xmlhttp.status==200)
                    {
                        // 200 = "OK"
                        classMagic.remove(checkForm.captchaObj, "invalid");
                    }
                    else
                    {
                        classMagic.add(checkForm.captchaObj, "invalid");
                    }
                }
            }
        } catch (e) {}
    }

    /*
    Initialize script when document is loaded.
    */
    addEventCheckForm(window, "load", checkForm.init);
//failsafe, ak uz sa nahodou okno loadlo a horny event nenastane
    window.setTimeout(checkForm.init, 2000);

    /* schova dany element ak checkbox nie je zaskrtnuty */
    function formShowHide(checkbox, elementNamesShow, elementNamesHide)
    {
        if (checkbox.checked == false) return;

        var elements = elementNamesShow.split(",");
        for (i=0; i< elements.length; i++)
        {
            var element = document.getElementById(elements[i]);
            if (element != null) element.style.display="block";
        }
        elements = elementNamesHide.split(",");
        for (i=0; i< elements.length; i++)
        {
            var element = document.getElementById(elements[i]);
            if (element != null) element.style.display="none";
        }
    }

//alert na odoslanie formuláru
    if (location.href.indexOf("formsend=true")!=-1)
    {
        checkForm.printAlertMessage(null, "Děkujeme, formulář byl úspěšně odeslán.", null);
    }

    if (location.href.indexOf("formfail=formIsAllreadySubmitted")!=-1)
    {
        checkForm.printAlertMessage(null, "Formulář už jste jednou odeslali, není možné ho odeslat znovu.", null);
    }
    else if (location.href.indexOf("formfail=javascript")!=-1)
    {
        checkForm.printAlertMessage(null, "<strong><span style='color: red;'>UPOZORNĚNÍ:</span> Pro odeslání formuláře musíte mít povolen JavaScript. Pokud váš prohlížeč JavaScript nepodporuje můžete <a href='/components/form/spamprotectiondisable.jsp?backurl=null'>deaktivovat ochranu formulářů</a>.</strong>", null);
    }
    else if (location.href.indexOf("formfail=probablySpamBot")!=-1)
    {
        checkForm.printAlertMessage(null, "Formulář byl detekován jako SPAM (nevyžádaná pošta). Pro správné odeslání formuláře musíte mít standardní nastavení prohlížeče, mezi jednotlivými odesláními počkat 30 sekund a neodesílat víc než 20 formulářů za hodinu. Při dlouhé nečinnosti bude vyhodnoceno obdobně.", null);
    }
    else if (location.href.indexOf("formfail=requiredFields")!=-1)
    {
        checkForm.printAlertMessage(null, "Ve formuláři jste nevyplnili všechna povinná pole, nebo pole nemají správné hodnoty. Zkontrolujte jednotlivá pole formuláře a zkúste ho znovu odeslat.", null);
    }
    else if (location.href.indexOf("formfail=bad_file")!=-1)
    {
        checkForm.printAlertMessage(null, "Vámi zaslaný soubor nevyhovuje požadavkům, formulář nebyl odeslán", null);
    }
    else if (location.href.indexOf("formfail=captcha")!=-1)
    {
        checkForm.printAlertMessage(null, "Zadaný text z obrázku není shodný", null);
    }
    else if (location.href.indexOf("formfail=emailNotSend")!=-1)
    {
        window.alert("Formulář se nepodařilo odeslat na email! Zkuste ho znovu odeslat později.");
    }
    else if (location.href.indexOf("formfail=")!=-1)
    {
        checkForm.printAlertMessage(null, "Formulář se nepodařilo odeslat. Zkontrolujte údaje a zkuste to prosím znovu.", null);
    }

    

var defaultStripesExenstion = ".x";
var ajaxStripesExenstion = ".ajax";

/*
* Function that uses jQuery to invoke an action of a form. Slurps the values
* from the form using prototype's 'form.serialize()' method, and then submits
* them to the server using prototype's 'jQuery.post' which transmits the request
* and then renders the resposne text into the named container.
*
* @param formDiv reference to the form object being submitted
* @param resultDivthe name of the HTML container to insert the result into
* @param event the name of the event to be triggered, or null
*/

function invokeWJAjax(formDiv, resultDiv, event, action, callMyFunction, bindDynamicData)
{
  try
  {
    var form = null;

    if (formDiv.indexOf("formMailForm") > -1)
    {

      form = $("form[name="+formDiv+"]");
      form.attr("id", formDiv);
    }
    var formByIds = null;
    if (form == null) formByIds = $("#" + formDiv + " form");
    if (form == null && formByIds != null && formByIds.length!=0)
    {
      if(formByIds.length > 1)
      {
        form = $(formByIds[1]);
      }
      else
      {
        form = $(formByIds[0]);
      }
    }

    try
    {
      if ("multipart/form-data" == form.attr("enctype"))
      {
        return true;
      }
    }
    catch (ex1) {alert("1:" + ex1)}

        $("#formResult").remove();
        $("input, textarea, select").removeClass("invalid");

    if ($("#" + resultDiv).length==0)
    {
      form.prepend("<div id=\"formResult\"><div id='"+resultDiv+"'></div></div>");
    }

    try
    {
      if (checkForm)
      {
        var check = checkForm.recheckAjax(document.getElementById(formDiv));
        if (check==false)
        {

            try
            {
               if (typeof callMyFunction != 'undefined') callMyFunction(check);
            }
            catch (e) { }

          return false;
        }
      }
    }
    catch (ex2) { window.alert("7" + ex2); console.log(ex2); }


    var extIndex = action.indexOf(defaultStripesExenstion);
    var url = action;

    if (formDiv.indexOf("formMailForm") > -1)
    {
      url = form.attr("action").replace(/\/formmail\.do/gi, "/FormMailAjax.action");
    }

    if (typeof formSubmit === 'function') {
      formSubmit(form, function(){
        formSend();
      });
    }
    else {
      formSend();
    }

    function formSend() {
      if (typeof bindDynamicData != 'undefined') bindDynamicData();
      var params = form.serialize();
      if(event != null) params = event + '&' + params;
      $("#" + resultDiv).hide();

      var callback = function(dataFromServer) {
        wjAjaxOnFormResult(formDiv, resultDiv, dataFromServer, callMyFunction);
      };
      $("").ajaxError(wjAjaxOnServerError);

      


      $.post(url, params, callback, "text");
    }
    return false;
  }
  catch(ex)
  {
    window.alert("Error 2: " + ex);
    return true;
  }
}

/*
* Method is executed when server returns exception.
*/
function wjAjaxOnServerError(event, request, settings, error){
  alert("Server returned an error, form was not probably processed by the server.");
}

/*
* Method is called when server returns non JSON data.
*/
function wjAjaxOnServerDataError(data){
  alert("Server has returned data in unknown format.");
}

/*
* Method is called when server returns reply to ajax call.
*
* @param data contains reply from the server
*/
function wjAjaxOnFormResult(formDiv, resultDiv, data, callMyFunction) {
  try
  {
    var result = eval(data);
  } catch (ex) {
    wjAjaxOnServerDataError(data);
    return;
  }

    try
    {
       if (typeof callMyFunction != 'undefined') callMyFunction(result);
    }
    catch (e) { }

  if (result.ok)
  {
    wjAjaxOnSuccess(formDiv, resultDiv, result, callMyFunction);
  } else {
    wjAjaxOnError(formDiv, resultDiv, result);
  }
}

/*
* Method is executed, when form was submited with success.
*/
function wjAjaxOnSuccess(formDiv, resultDiv, result)
{
  $("#" + formDiv).queue(function()
  {
    $("#" + resultDiv).parent().addClass("alert alert-ajax alert-success");
	formAfterSend();


    dataLayer.push({
      event: "generate_lead"
    });

    $("#" + resultDiv).html("<div class=\"overlay\"></div><div class=\"form-dialog\">"+result.okResult).fadeIn();
     $("html,body").animate({ scrollTop: ($("#" + resultDiv).offset().top - 100) }, { duration: 'fast', easing: 'linear'}); 
    $(this).dequeue();

     window.setTimeout(wjAjaxResetForm.bind(null, formDiv), 500); 
    window.setTimeout(function(){
          var div = $("#" + resultDiv),
              formResult = div.closest('#formResult');

          if (formResult.length > 0) {
              formResult.fadeOut("slow");
          }
          else {
              div.fadeOut("slow");
          }
    }, 60000);

    wjAjaxSetToken(formDiv, result.token);
  });
}

function formAfterSend() { 
}

function wjAjaxResetForm(formDiv)
{
  try
  {
    var form = $('form[name="' + formDiv + '"]')
    if (formDiv.length > 0)
    {

      form.find('input[type=text], input[type=tel], input[type=email], input[type=number], input[type=date], input[type=checkbox], input[type=radio], textarea').each(function(){
        var el = $(this);

        if (el.hasClass('not-deletable')) return;

        if (el.is(':checkbox') || el.is(':radio')) {
          var checked = el.attr("checked") === 'checked';
          el.prop('checked', checked).trigger('change');

          $("input[type=radio]").attr('checked',false);
          
          $(jQuery.unique(
              $('input:radio')
                  .map(function(i,e){
                      return $(e).attr('name') }
                  ).get()
          ))
          .each(function(i,e){
              setTimeout(function(){
                $('input:radio[name="'+e+'"]:visible:first').next().trigger('click');
              }, 200)
          });
          var subjectPreffix = "Napiďż˝te nďż˝m"
          $("#subject").val(subjectPreffix + " - " + $(".write-us input[type=radio]:checked").val())
        }
        else {
          el.val('').trigger('change');
        }

        if (el.hasClass('selectmenu')) {
            setTimeout(function(){
                el.val('').selectmenu('refresh');
            });
        }
      });

      form.find('select').each(function() {
        this.selectedIndex = 0;
      });
    }
  } catch (e) {
    console.log(e);
  }
}

function wjAjaxSetToken(formDiv, token)
{
  try
  {
    if (token != undefined && token != null && token!="")
    {
      $("form[name="+formDiv+"]").find("input[name=__token]").val(token);
    }
  } catch (e) {}
}

/*
* Method is executed, when form was submitted and server returned error.
*/
function wjAjaxOnError(formDiv, resultDiv, result) {
  $("#" + resultDiv).html(result.errorResult).show("slow");
  $("#" + formDiv).queue(function ()
  {
    var callback = function()
    {
      wjAjaxColorizeLabel(this, result);
    };
    $("#" + formDiv + " label").each(callback);
    $("#wjcaptchaImg1").click();
    $("#wjcaptcha1").addClass("invalid");
    $("#" + resultDiv).parent().addClass("alert alert-ajax alert-danger");
    $("html,body").animate({ scrollTop: ($("#" + resultDiv).offset().top - 100) }, { duration: 'fast', easing: 'linear'});
    $(this).dequeue();

    wjAjaxSetToken(formDiv, result.token);
  });
}

/*
* Method will add class "error" to each label, whose input was found in validationErrors object.
* In the oposite way, it removes any possible "error" class from any labes, that currently is not in error.
*/
function wjAjaxColorizeLabel(label, result) {
  var error = result.validationErrors[label.htmlFor];
  var errorIndex = -1;
  if (label.className != null) errorIndex = label.className.indexOf('error');
  if (error != null && errorIndex == -1) {
    label.className = label.className + " error";
  }
  if (error == null && errorIndex > -1) {
    label.className = label.className.substring(0, errorIndex)
        + label.className.substring(errorIndex + 5, label.className.length);
  }
}



(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



