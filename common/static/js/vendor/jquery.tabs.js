/**
 * @name jQuery Tabs
 * @author Trevor Davis
 * @copyright (cc) Trevor Davis (http://www.trevordavis.net)
 *
 * Licensed under the CC-GNU GPL (http://creativecommons.org/licenses/GPL/2.0/)
 */(function(e,t,n,r){var i=function(t,n){this.elem=t;this.$elem=e(t);this.options=n;this.metadata=this.$elem.data("tabs-options");this.$navTabs=this.$elem.find(".nav-tabs");this.$tabs=this.$elem.find(".tabs")};i.prototype={defaults:{},init:function(){var t=this;t.$navTabs.on("click","a",e.proxy(t.handleClick,t));t.setInitial();t.$tabs.find(".current").show();return this},changeTabs:function(e,t){var n=this,r=n.$tabs.find(".current");n.$navTabs.find(".current").removeClass("current");e.addClass("current");r.fadeOut(500,function(){t.fadeIn(500,function(){r.add(t).toggleClass("current")})})},handleClick:function(t){var n=this,r=e(t.currentTarget),i=r.parent(),s=r.attr("href").split("#")[1],o=e("#"+s);o&&!i.hasClass("current")&&n.changeTabs(i,o);t.preventDefault()},setInitial:function(){var e=this,n=t.location.href.split("#")[1],r,i,s;if(n){r=n.replace("tab-","");i=e.$tabs.find("#"+r);if(i.length){s=e.$navTabs.find('a[href$="#'+r+'"]').parent();s.length&&e.changeTabs(s,i)}}}};i.defaults=i.prototype.defaults;e.fn.tabs=function(e){return this.each(function(){(new i(this,e)).init()})}})(jQuery,window,document);