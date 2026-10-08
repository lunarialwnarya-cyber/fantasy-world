(function(){
var hd=document.getElementById('hd'),bar=document.getElementById('bar'),toc=document.getElementById('toc'),m=document.getElementById('menu'),lb=document.getElementById('lb');
function sc(){var h=document.documentElement,y=window.scrollY||h.scrollTop,t=h.scrollHeight-h.clientHeight;bar.style.width=(t>0?y/t*100:0)+'%';hd.classList.toggle('solid',y>60)}
addEventListener('scroll',sc,{passive:true});sc();
function tg(o){toc.classList.toggle('on',o);m.setAttribute('aria-expanded',o)}
m.onclick=function(){tg(!toc.classList.contains('on'))};
document.getElementById('x').onclick=function(){tg(false)};
toc.addEventListener('click',function(e){if(e.target.tagName==='A')tg(false)});
document.getElementById('mb').onclick=function(){lb.classList.add('on')};
lb.onclick=function(){lb.classList.remove('on')};
addEventListener('keydown',function(e){if(e.key==='Escape'){lb.classList.remove('on');tg(false)}});
})();
