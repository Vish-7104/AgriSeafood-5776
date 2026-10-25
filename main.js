const navItems = [
  ['Home','index.html'],['About us','about.html'],['Products','products.html'],['Services','services.html'],['Clients','clients.html'],['Contact us','contact.html']
];
const path = location.pathname.split('/').pop() || 'index.html';
const header = document.querySelector('#site-header');
if (header) {
  header.innerHTML = `<div class="announcement"><div class="container announcement-inner"><span>Seafood sourcing & export trading from India</span><a href="contact.html">Talk to our team <span>↗</span></a></div></div>
  <header class="site-header"><div class="container nav-wrap"><a class="brand" href="index.html" aria-label="Agriseafoods home"><img class="brand-logo" src="agriseafoods-logo.png" alt="Agriseafoods EXIM OPC Pvt. Ltd."></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button><nav class="main-nav" aria-label="Main navigation">${navItems.map(([label,url])=>`<a href="${url}" class="${path===url?'active':''}">${label}${label==='Contact us'?' <span>↗</span>':''}</a>`).join('')}</nav></div></header>`;
  const toggle=header.querySelector('.menu-toggle'), nav=header.querySelector('.main-nav');
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
}
const footer = document.querySelector('#site-footer');
if (footer) footer.innerHTML = `<footer class="site-footer"><div class="container footer-main"><div class="footer-brand"><a class="brand brand-footer" href="index.html"><img class="brand-logo" src="agriseafoods-logo.png" alt="Agriseafoods EXIM OPC Pvt. Ltd."></a><p>Seafood sourcing and trade connections from India to global markets.</p><p class="tag">With trust & confidence, we deliver.</p></div><div><h4>Explore</h4><a href="about.html">About us</a><a href="products.html">Products</a><a href="services.html">Services</a><a href="clients.html">Clients</a><a href="contact.html">Contact us</a></div><div><h4>Contact</h4><p><strong>Mr. Ajit Karunakaran Chamackala</strong><br>Director</p><p>508, 5th Floor, Srishti Square, L.B.S. Marg,<br>Bhandup (W), Mumbai – 400078, India</p><a href="tel:+912220819158">022 2081 9158</a><a href="tel:+919821029158">+91 98210 29158</a><a href="mailto:ajit@agriseafoods.com">ajit@agriseafoods.com</a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} Agriseafood EXIM OPC Pvt. Ltd.</span><span>Seafood, delivered with trust.</span></div></footer>`;

document.querySelectorAll('[data-art]').forEach(el=>{el.innerHTML=seafoodSvg(el.dataset.art||'fish');});
function renderProducts(target, mode='all'){
 if(!target)return;
 const chosen=productData.filter(p=>mode==='featured'?['Vannamei Shrimp','Black Tiger Prawns','Silver Pomfret','Indian Mackerel','Squid','Octopus'].includes(p.name):(mode==='all'||p.category===mode));
 target.innerHTML=chosen.map(p=>`<article class="pcard ${p.category}"><div class="tile">${seafoodSvg(p.art)}</div><h3>${p.name}</h3><p>${p.desc}</p></article>`).join('');
}
document.querySelectorAll('[data-products]').forEach(el=>renderProducts(el,el.dataset.products||'all'));
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));renderProducts(document.querySelector('[data-products="all"]'),btn.dataset.f)}));
