$(document).ready(function(){var static_page_text=$.trim($(".post-body").text());var text_month=[,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];if(static_page_text==="[sitemap]"){var postbody=$(".post-body");$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){var t=[];for(var n=0;n<e.feed.category.length;n++){t.push(e.feed.category[n].term)}var t=t.join("/");postbody.html('<div class="btnt-sitemap"></div>');$(".post-body .btnt-sitemap").text(t);var r=$(".btnt-sitemap").text().split("/");var i="";for(get=0;get<r.length;++get){i+="<span>"+r[get]+"</span>"}$(".btnt-sitemap").html(i);$(".btnt-sitemap span").each(function(){var e=$(this);var t=$(this).text();$.ajax({url:"/feeds/posts/default/-/"+t+"?alt=json-in-script",type:"get",dataType:"jsonp",success:function(n){var r="";var i='<ul class="btnt-toc">';for(var s=0;s<n.feed.entry.length;s++){for(var o=0;o<n.feed.entry[s].link.length;o++){if(n.feed.entry[s].link[o].rel=="alternate"){r=n.feed.entry[s].link[o].href;break}}var u=n.feed.entry[s].title.$t;var a=n.feed.entry[s].published.$t,f=a.substring(0,4),l=a.substring(5,7),c=a.substring(8,10),h='<span class="day">'+c.replace(/^0+/,"")+'</span><span class="month">'+text_month[parseInt(l,10)]+' </span><span class="year">'+f+"</span>";i+='<li><div class="toc-date">'+h+'</div><div class="btnt-icon"></div><span class="btnt-post"><a href="'+r+'">'+u+"</a></span></li>"}i+="</ul>";e.replaceWith('<div class="btnt-toc-wrap"><div class="btnt-cat">'+t+'</div>'+i+"</div>")}})})}})}});

// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);


// Simple Tab JQuery Plugin by Taufik Nurrohman - https://plus.google.com/108949996304093815163/about
(function(a){a.fn.simplyTab=function(b){b=jQuery.extend({active:1,fx:null,showSpeed:400,hideSpeed:400,showEasing:null,hideEasing:null,show:function(){},hide:function(){},change:function(){}},b);return this.each(function(){var e=a(this),c=e.children("[data-tab]"),d=b.active-1;e.addClass("simplyTab").prepend('<ul class="wrap-tab"></ul>');c.addClass("content-tab").each(function(){a(this).hide();e.find(".wrap-tab").append('<li><a href="#">'+a(this).data("tab")+"</a></li>")}).eq(d).show();e.find(".wrap-tab a").on("click",function(){var f=a(this).parent().index();a(this).closest(".wrap-tab").find(".activeTab").removeClass("activeTab");a(this).addClass("activeTab");if(b.fx=="slide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fade"){if(c.eq(f).is(":hidden")){c.hide().eq(f).fadeIn(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(b.fx=="fancyslide"){if(c.eq(f).is(":hidden")){c.slideUp(b.hideSpeed,b.hideEasing,function(){b.hide.call(e)}).eq(f).delay(b.hideSpeed).slideDown(b.showSpeed,b.showEasing,function(){b.show.call(e)})}}else{if(c.eq(f).is(":hidden")){c.hide().eq(f).show()}}}}b.change.call(e);return false}).eq(d).addClass("activeTab")})}})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);

// Timeago jQuery plugin ~ URL: http://timeago.yarp.com
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function r(){var n=i(this);var r=t.settings;if(!isNaN(n.datetime)){if(r.cutoff==0||Math.abs(o(n.datetime))<r.cutoff){e(this).text(s(n.datetime))}}return this}function i(n){n=e(n);if(!n.data("timeago")){n.data("timeago",{datetime:t.datetime(n)});var r=e.trim(n.text());if(t.settings.localeTitle){n.attr("title",n.data("timeago").datetime.toLocaleString())}else if(r.length>0&&!(t.isTime(n)&&n.attr("title"))){n.attr("title",r)}}return n.data("timeago")}function s(e){return t.inWords(o(e))}function o(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){if(t instanceof Date){return s(t)}else if(typeof t==="string"){return s(e.timeago.parse(t))}else if(typeof t==="number"){return s(new Date(t))}else{return s(e.timeago.datetime(t))}};var t=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"in a moment",seconds:"a few seconds",minute:"%d minute",minutes:"%d mins",hour:"%d hour",hours:"%d hrs",day:"%d day",days:"%d days",month:"month",months:"%d months",year:"%d year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function l(r,i){var s=e.isFunction(r)?r(i,t):r;var o=n.numbers&&n.numbers[i]||i;return s.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var n=this.settings.strings;var r=n.prefixAgo;var i=n.suffixAgo;if(this.settings.allowFuture){if(t<0){r=n.prefixFromNow;i=n.suffixFromNow}}if(!this.settings.allowPast&&t>=0){return this.settings.strings.inPast}var s=Math.abs(t)/1e3;var o=s/60;var u=o/60;var a=u/24;var f=a/365;var c=s<45&&l(n.seconds,Math.round(s))||s<90&&l(n.minute,1)||o<45&&l(n.minutes,Math.round(o))||o<90&&l(n.hour,1)||u<24&&l(n.hours,Math.round(u))||u<42&&l(n.day,1)||a<30&&l(n.days,Math.round(a))||a<45&&l(n.month,1)||a<365&&l(n.months,Math.round(a/30))||f<1.5&&l(n.year,1)||l(n.years,Math.round(f));var h=n.wordSeparator||"";if(n.wordSeparator===undefined){h=" "}return e.trim([r,c,i].join(h))},parse:function(t){var n=e.trim(t);n=n.replace(/\.\d+/,"");n=n.replace(/-/,"/").replace(/-/,"/");n=n.replace(/T/," ").replace(/Z/," UTC");n=n.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");n=n.replace(/([\+\-]\d\d)$/," $100");return new Date(n)},datetime:function(n){var r=t.isTime(n)?e(n).attr("datetime"):e(n).attr("title");return t.parse(r)},isTime:function(t){return e(t).get(0).tagName.toLowerCase()==="time"}});var n={init:function(){var n=e.proxy(r,this);n();var i=t.settings;if(i.refreshMillis>0){this._timeagoInterval=setInterval(n,i.refreshMillis)}},update:function(n){var i=t.parse(n);e(this).data("timeago",{datetime:i});if(t.settings.localeTitle)e(this).attr("title",i.toLocaleString());r.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:t.parse(t.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))});r.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null}}};e.fn.timeago=function(e,t){var r=e?n[e]:n.init;if(!r){throw new Error("Unknown function name '"+e+"' for timeago")}this.each(function(){r.call(this,t)});return this};document.createElement("abbr");document.createElement("time")});


//Page Navigation Starts
    var numPages=5;
    var firstText ='First';
    var lastText ='Last';
    var prevText ='ˠPrevious';
    var nextText ='Next ۧ;
    var urlactivepage=location.href;
    var home_page="/";

//nav
if (typeof firstText == "undefined") firstText = "First";
  if (typeof lastText == "undefined") lastText = "Last";
  var noPage;
  var currentPage;
  var currentPageNo;
  var postLabel;
  pagecurrentg();

  function looppagecurrentg(pageInfo) {
      var html = '';
      pageNumber = parseInt(numPages / 2);
      if (pageNumber == numPages - pageNumber) {
          numPages = pageNumber * 2 + 1
      }
      pageStart = currentPageNo - pageNumber;
      if (pageStart < 1) pageStart = 1;
      lastPageNo = parseInt(pageInfo / perPage) + 1;
      if (lastPageNo - 1 == pageInfo / perPage) lastPageNo = lastPageNo - 1;
      pageEnd = pageStart + numPages - 1;
      if (pageEnd > lastPageNo) pageEnd = lastPageNo;
      html += "<span class='showpageOf'>Page " + currentPageNo + ' of ' + lastPageNo + "</span>";
      var prevNumber = parseInt(currentPageNo) - 1;

      //Iccsi was here, doing magic      
      if (currentPageNo > 1) {
          if (currentPage == "page") {
              html += '<span class="showpage firstpage"><a href="' + home_page + '">' + firstText + '</a></span>'
          } else {
              html += '<span class="displaypageNum firstpage"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + firstText + '</a></span>'
          }
      }

      if (currentPageNo > 2) {
          if (currentPageNo == 3) {
              if (currentPage == "page") {
                  html += '<span class="showpage"><a href="' + home_page + '">' + prevText + '</a></span>'
              } else {
                  html += '<span class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">' + prevText + '</a></span>'
              }
          } else {
              if (currentPage == "page") {
                  html += '<span class="displaypageNum"><a href="#" onclick="redirectpage(' + prevNumber + ');return false">' + prevText + '</a></span>'
              } else {
                  html += '<span class="displaypageNum"><a href="#" onclick="redirectlabel(' + prevNumber + ');return false">' + prevText + '</a></span>'
              }
          }
      }
      if (pageStart > 1) {
          if (currentPage == "page") {
              html += '<span class="displaypageNum"><a href="' + home_page + '">1</a></span>'
          } else {
              html += '<span class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></span>'
          }
      }
      if (pageStart > 2) {
          html += ' ... '
      }
      for (var jj = pageStart; jj <= pageEnd; jj++) {
          if (currentPageNo == jj) {
              html += '<span class="pagecurrent">' + jj + '</span>'
          } else if (jj == 1) {
              if (currentPage == "page") {
                  html += '<span class="displaypageNum"><a href="' + home_page + '">1</a></span>'
              } else {
                  html += '<span class="displaypageNum"><a href="/search/label/' + postLabel + '?&max-results=' + perPage + '">1</a></span>'
              }
          } else {
              if (currentPage == "page") {
                  html += '<span class="displaypageNum"><a href="#" onclick="redirectpage(' + jj + ');return false">' + jj + '</a></span>'
              } else {
                  html += '<span class="displaypageNum"><a href="#" onclick="redirectlabel(' + jj + ');return false">' + jj + '</a></span>'
              }
          }
      }
      if (pageEnd < lastPageNo - 1) {
          html += '...'
      }
      if (pageEnd < lastPageNo) {
          if (currentPage == "page") {
              html += '<span class="displaypageNum"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + '</a></span>'
          } else {
              html += '<span class="displaypageNum"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + '</a></span>'
          }
      }


      var nextnumber = parseInt(currentPageNo) + 1;
      if (currentPageNo < (lastPageNo - 1)) {
          if (currentPage == "page") {
              html += '<span class="displaypageNum"><a href="#" onclick="redirectpage(' + nextnumber + ');return false">' + nextText + '</a></span>'
          } else {
              html += '<span class="displaypageNum"><a href="#" onclick="redirectlabel(' + nextnumber + ');return false">' + nextText + '</a></span>'
          }
      }

      if (currentPageNo < lastPageNo) {
          //Iccsi was here, doing magic
          if (currentPage == "page") {
              html += '<span class="displaypageNum lastpage"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastText + '</a></span>'
          } else {
              html += '<span class="displaypageNum lastpage"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastText + '</a></span>'
          }
      }

      var pageArea = document.getElementsByName("pageArea");
      var blogPager = document.getElementById("blog-pager");
      for (var p = 0; p < pageArea.length; p++) {
          pageArea[p].innerHTML = html
      }
      if (pageArea && pageArea.length > 0) {
          html = ''
      }
      if (blogPager) {
          blogPager.innerHTML = html
      }
  }

  function totalcountdata(root) {
      var feed = root.feed;
      var totaldata = parseInt(feed.openSearch$totalResults.$t, 10);
      looppagecurrentg(totaldata)
  }

  function pagecurrentg() {
      var thisUrl = urlactivepage;
      if (thisUrl.indexOf("/search/label/") != -1) {
          if (thisUrl.indexOf("?updated-max") != -1) {
              postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?updated-max"))
          } else {
              postLabel = thisUrl.substring(thisUrl.indexOf("/search/label/") + 14, thisUrl.indexOf("?&max"))
          }
      }
      if (thisUrl.indexOf("?q=") == -1 && thisUrl.indexOf(".html") == -1) {
          if (thisUrl.indexOf("/search/label/") == -1) {
              currentPage = "page";
              if (urlactivepage.indexOf("#PageNo=") != -1) {
                  currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
              } else {
                  currentPageNo = 1
              }
              document.write("<script src=\"" + home_page + "feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata\"><\/script>")
          } else {
              currentPage = "label";
              if (thisUrl.indexOf("&max-results=") == -1) {
                  perPage = 20
              }
              if (urlactivepage.indexOf("#PageNo=") != -1) {
                  currentPageNo = urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length)
              } else {
                  currentPageNo = 1
              }
              document.write('<script src="' + home_page + 'feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&callback=totalcountdata&max-results=1" ><\/script>')
          }
      }
  }

  function redirectpage(numberpage) {
      jsonstart = (numberpage - 1) * perPage;
      noPage = numberpage;
      var nameBody = document.getElementsByTagName('head')[0];
      var newInclude = document.createElement('script');
      newInclude.type = 'text/javascript';
      newInclude.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
      nameBody.appendChild(newInclude)
  }

  function redirectlabel(numberpage) {
      jsonstart = (numberpage - 1) * perPage;
      noPage = numberpage;
      var nameBody = document.getElementsByTagName('head')[0];
      var newInclude = document.createElement('script');
      newInclude.type = 'text/javascript';
      newInclude.setAttribute("src", home_page + "feeds/posts/summary/-/" + postLabel + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost");
      nameBody.appendChild(newInclude)
  }

  function finddatepost(root) {
          post = root.feed.entry[0];
          var timestamp1 = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
          var timestamp = encodeURIComponent(timestamp1);
          if (currentPage == "page") {
              var pAddress = "/search?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
          } else {
              var pAddress = "/search/label/" + postLabel + "?updated-max=" + timestamp + "&max-results=" + perPage + "#PageNo=" + noPage
          }
          location.href = pAddress
      }

<!--Page Navigation Ends -->
jQuery(document).ready(function() {
var offset = 220;
var duration = 500;
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > offset) {
jQuery('.back-to-top').fadeIn(duration);
} else {
jQuery('.back-to-top').fadeOut(duration);
}
});
jQuery('.back-to-top').click(function(event) {
event.preventDefault();
jQuery('html, body').animate({scrollTop: 0}, duration);
return false;
})
});


//pagenav_prev
var no_image = "https://2.bp.blogspot.com/-R3nHRjNcL_I/XF2OpYKAiEI/AAAAAAAABwo/vY3frukzUg0Wbtxn6gHlIbQ0_m9R6vlKQCEwYBhgL/s1600/tips-make-money-no-image.jpg";
var month_format = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var more_text = "View More";
var comments_text = "<span>Post </span>Comment";
var pagenav_prev = "Previous";
var pagenav_next = "Next";
var POSTPAGER_OLDER = "Older Article <i class='fa fa-chevron-circle-right' aria-hidden='true'></i>"; // post nav text "previous post"
var POSTPAGER_NEWER = "<i class='fa fa-chevron-circle-left' aria-hidden='true'></i> Newer Article"; // post nav text "next post"

// Plugin: SelectNav.js ~ url: https://github.com/lukaszfiszer/selectnav.js
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"-",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();
