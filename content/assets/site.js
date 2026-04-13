
(function(){
  const slider=document.getElementById('heroSlider');
  if(slider){
    const track=slider.querySelector('.slider-track');
    const dots=Array.from(slider.querySelectorAll('.slider-dot'));
    let current=0;
    const total=dots.length;
    function goTo(index){
      current=index;
      track.style.transform=`translateX(-${index*100}%)`;
      dots.forEach((dot,i)=>dot.classList.toggle('active',i===index));
    }
    dots.forEach((dot,i)=>dot.addEventListener('click',()=>goTo(i)));
    setInterval(()=>goTo((current+1)%total),4500);
  }

  const tabs=Array.from(document.querySelectorAll('.sector-tab'));
  const panes=Array.from(document.querySelectorAll('.sector-pane'));
  if(tabs.length && panes.length){
    function activate(index){
      tabs.forEach((tab,i)=>tab.classList.toggle('active', i===index));
      panes.forEach((pane,i)=>pane.classList.toggle('active', i===index));
    }
    tabs.forEach((tab,i)=>tab.addEventListener('mouseenter',()=>activate(i)));
    tabs.forEach((tab,i)=>tab.addEventListener('focus',()=>activate(i)));
    tabs.forEach((tab,i)=>tab.addEventListener('click',(e)=>{e.preventDefault();activate(i);}));
    let autoIndex = 0;
    setInterval(()=>{
      autoIndex=(autoIndex+1)%tabs.length;
      activate(autoIndex);
    }, 3500);
  }
})();
