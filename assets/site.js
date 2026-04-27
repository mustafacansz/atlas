
function initSlider(trackSel, slideSel, prevSel, nextSel, dotSel){
  const track=document.querySelector(trackSel); if(!track) return;
  const slides=[...track.querySelectorAll(slideSel)]; const dots=[...document.querySelectorAll(dotSel)]; let i=0;
  const go=n=>{i=(n+slides.length)%slides.length; track.style.transform=`translateX(-${i*100}%)`; dots.forEach((d,k)=>d.classList.toggle('active',k===i));};
  document.querySelector(prevSel)?.addEventListener('click',()=>go(i-1));
  document.querySelector(nextSel)?.addEventListener('click',()=>go(i+1));
  dots.forEach((d,k)=>d.addEventListener('click',()=>go(k))); go(0);
}
initSlider('.hero-track','.hero-slide','.hero-prev','.hero-next','.hero-dot');
initSlider('.sector-track','.sector','.sector-prev','.sector-next','.sector-dot');
document.querySelector('.hamb')?.addEventListener('click',()=>document.querySelector('.menu')?.classList.toggle('open'));
