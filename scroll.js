document.lastScrollPosition=0;
document.lastCentered=0;
document.onWayTo=null;

document.addEventListener('scroll',()=>{
  
  const direction=(window.scrollY-document.lastScrollPosition)>0 ?'down':'up';
  const sections=[... document.querySelectorAll('section')];
  // const dest= direction == 'down' ? document.lastCentered++:document.lastCentered--;
  // if(dest >=0 && dest <sections.length){
  //   console.log(dest);
  // }
  if(document.onWayTo === null){
    const destIndex=direction === 'up' ? document.lastCentered-1:document.lastCentered+1;
    // console.log(destIndex);
    if(destIndex >=0 && destIndex<sections.length){
      document.onWayTo=destIndex;
      window.scroll(0,sections[destIndex].offsetTop);
      console.log();
    }
  }

  sections.forEach((section,index)=>{
      console.log(Math.floor(window.pageYOffset)===section.offsetTop);
      console.log(Math.floor(window.pageYOffset));
      console.log(section.offsetTop);
      if(Math.floor(window.scrollY)-1 ===section.offsetTop){
        document.lastCentered=index;
        if(document.onWayTo===index){
          document.onWayTo=null;
        }
      }
  })

  document.lastScrollPosition=window.scrollY;


})

  
