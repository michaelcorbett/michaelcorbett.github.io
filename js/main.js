function svgasimg(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}!function(){window.setTimeout=window.setTimeout}();var scrollToSec={iterr:55,tm:null,stopShow:function(){clearTimeout(this.tm),this.iterr=55},getRealTop:function(a){var b=a,c=0;do c+=b.offsetTop,b=b.offsetParent;while(b);return c},getPageScroll:function(){var a=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;return a},anim:function(a){this.stopShow();var b,c,d,e,f,g,h;return b=document.getElementById(a).offsetTop,d=this.getRealTop(document.getElementById(a).parentNode),c=this.getPageScroll(),(null===c||isNaN(c)||"undefined"===c)&&(c=0),e=b-c,e>d&&(f=b-d-c,g=1),e<d&&(f=c+d-b,g=-1),e!==d&&(h=~~(f/4+1)*g,this.iterr>1?this.iterr-=1:this.itter=0,window.scrollBy(0,h),this.tm=window.setTimeout(function(){scrollToSec.anim(a)},this.iterr)),e===d?void this.stopShow():void 0}};if(!svgasimg()){var e=document.getElementsByTagName("img");e.length||(e=document.getElementsByTagName("IMG"));for(var i=0,n=e.length;i<n;i++){var img=e[i],src=img.getAttribute("src");src.match(/svgz?$/)&&img.setAttribute("src",img.getAttribute("data-fallback"))}}