const cards=[...document.querySelectorAll('.rule-card')];
cards.forEach(card=>card.addEventListener('click',e=>{
  if(e.target.tagName==='BUTTON'||e.currentTarget===card) card.classList.toggle('open');
}));
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{
 document.querySelector('.tab.active').classList.remove('active');tab.classList.add('active');
 const f=tab.dataset.filter;
 cards.forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.cat.split(' ').indexOf(f)<0));
}));
document.querySelector('#search').addEventListener('input',e=>{
 const q=e.target.value.toLowerCase().trim();
 cards.forEach(c=>c.classList.toggle('hidden',q&&!((c.innerText+' '+c.dataset.text).toLowerCase().includes(q))));
});
