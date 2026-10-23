/* Odonto Lumen - tienda de demostración (HTML + CSS + JS puro) */
const ENTREGA = {key:'Entrega',values:[{v:'Estándar (3 a 5 días)',extra:0},{v:'Express (24 a 48 horas)',extra:175}]};
const PRODUCTS = [
 {id:'cepillo-suave',nombre:'Cepillo dental manual Suave Pro',cat:'Cepillos',precio:285,img:'images/cepillo.png',tag:'Más vendido',
  resumen:'Cerdas ultrasuaves con puntas redondeadas que limpian sin lastimar las encías.',
  descripcion:['El Suave Pro está diseñado para quienes buscan una limpieza diaria eficaz y delicada. Sus más de 10,000 filamentos de puntas redondeadas llegan entre los dientes y a lo largo de la línea de las encías, retirando la placa bacteriana sin irritar.','El mango ergonómico con zona antideslizante permite un agarre firme incluso con las manos mojadas, y el cabezal compacto alcanza las muelas del fondo. Recomendado por odontólogos para uso diario y para personas con encías sensibles o después de procedimientos dentales.'],
  caracteristicas:['Cerdas ultrasuaves de puntas redondeadas','Mango ergonómico antideslizante','Cabezal compacto para llegar a las muelas','Indicador de desgaste: cámbialo cada 3 meses'],
  opciones:[{key:'Color',type:'color',values:[{v:'Aqua',hue:0,hex:'#2BB3A3'},{v:'Coral',hue:191,hex:'#F0645A'},{v:'Violeta',hue:91,hex:'#7B61D9'}]},
   {key:'Tamaño',values:[{v:'Adulto',extra:0},{v:'Infantil',extra:-40}]},
   {key:'Empaque',values:[{v:'Unidad',extra:0},{v:'Paquete de 3',extra:520},{v:'Paquete familiar x6',extra:1000}]},ENTREGA]},
 {id:'cepillo-electrico',nombre:'Cepillo eléctrico sónico Lumen Sonic',cat:'Cepillos',precio:3450,img:'images/electrico.png',tag:'Nuevo',
  resumen:'Tecnología sónica con 3 modos de limpieza y batería de hasta 30 días.',
  descripcion:['Lumen Sonic ofrece hasta 31,000 vibraciones por minuto para eliminar hasta 10 veces más placa que un cepillo manual. Cuenta con tres modos: limpieza diaria, encías sensibles y pulido para un aspecto más blanco.','Incluye temporizador inteligente que vibra cada 30 segundos para que cepilles cada cuadrante durante el tiempo recomendado. Su batería de litio dura hasta 30 días con una sola carga y se recarga en la base incluida. Resistente al agua (IPX7).'],
  caracteristicas:['31,000 vibraciones por minuto','3 modos: diario, sensible y pulido','Temporizador de 2 minutos con pausa cada 30 s','Batería de hasta 30 días, base de carga incluida','Resistente al agua IPX7'],
  opciones:[{key:'Color',type:'color',values:[{v:'Aqua',hue:0,hex:'#2BB3A3'},{v:'Coral',hue:191,hex:'#F0645A'},{v:'Azul',hue:36,hex:'#3E8FE0'}]},
   {key:'Empaque',values:[{v:'Cepillo + 2 cabezales',extra:0},{v:'Cepillo + 4 cabezales + estuche de viaje',extra:650}]},ENTREGA]},
 {id:'pasta-blanqueadora',nombre:'Pasta dental blanqueadora Lumen Blanc',cat:'Higiene bucal',precio:340,img:'images/pasta.png',tag:'',
  resumen:'Con flúor y micropartículas suaves que remueven manchas de café y té.',
  descripcion:['Lumen Blanc combina 1,450 ppm de flúor para fortalecer el esmalte con micropartículas pulidoras de baja abrasión que eliminan manchas superficiales causadas por café, té, vino y tabaco.','Su fórmula con xilitol ayuda a reducir las bacterias que provocan caries y deja un aliento fresco por horas. Apta para uso diario, dos o tres veces al día, después de cada comida.'],
  caracteristicas:['1,450 ppm de flúor','Micropartículas de baja abrasión','Con xilitol y menta natural','Libre de parabenos y colorantes artificiales'],
  opciones:[{key:'Sabor',values:[{v:'Menta fresca',extra:0},{v:'Menta y carbón activado',extra:40},{v:'Menta suave (sin picante)',extra:0}]},
   {key:'Tamaño',values:[{v:'75 ml',extra:0},{v:'120 ml',extra:120}]},
   {key:'Empaque',values:[{v:'Unidad',extra:0},{v:'Pack de 2',extra:310}]},ENTREGA]},
 {id:'hilo-dental',nombre:'Hilo dental encerado Lumen Floss',cat:'Higiene bucal',precio:195,img:'images/hilo.png',tag:'',
  resumen:'Se desliza entre los dientes sin deshilacharse. 50 metros por dispensador.',
  descripcion:['Más de la mitad de la superficie de tus dientes está entre ellos, donde el cepillo no llega. Lumen Floss es un hilo encerado de filamentos finos y resistentes que se desliza con suavidad y retira restos de comida y placa sin romperse.','El dispensador compacto incluye cortador integrado y 50 metros de hilo, suficiente para unos tres meses de uso diario. Úsalo una vez al día, preferiblemente por la noche.'],
  caracteristicas:['50 metros de hilo por dispensador','Encerado, no se deshilacha','Cortador integrado','Sabor menta suave'],
  opciones:[{key:'Tipo',values:[{v:'Encerado',extra:0},{v:'Sin cera (para espacios amplios)',extra:0},{v:'Cinta ancha para encías',extra:25}]},
   {key:'Empaque',values:[{v:'Unidad',extra:0},{v:'Pack de 3',extra:340}]},ENTREGA]},
 {id:'enjuague-fresh',nombre:'Enjuague bucal sin alcohol Lumen Fresh',cat:'Higiene bucal',precio:420,img:'images/enjuague.png',tag:'Sin alcohol',
  resumen:'Protección antibacteriana de 12 horas sin ardor y con flúor.',
  descripcion:['Lumen Fresh es un enjuague sin alcohol formulado con cloruro de cetilpiridinio y flúor, que reduce hasta un 99% de las bacterias que causan mal aliento y placa, sin la sensación de ardor.','Úsalo después del cepillado: enjuaga 20 ml durante 30 segundos y escupe, sin enjuagar con agua. Es ideal para personas con boca seca, encías sensibles o que usan ortodoncia.'],
  caracteristicas:['Sin alcohol, sin ardor','Con flúor y cloruro de cetilpiridinio','Protección de hasta 12 horas','Tapa dosificadora de 20 ml'],
  opciones:[{key:'Sabor',values:[{v:'Menta',extra:0},{v:'Hierbabuena',extra:0},{v:'Cítrico',extra:0}]},
   {key:'Tamaño',values:[{v:'250 ml',extra:0},{v:'500 ml',extra:180},{v:'1 litro',extra:380}]},ENTREGA]},
 {id:'kit-blanqueamiento',nombre:'Kit de blanqueamiento dental LED Lumen Glow',cat:'Blanqueamiento',precio:2890,img:'images/kit.png',tag:'Premium',
  resumen:'Gel con peróxido de carbamida y luz LED para una sonrisa más clara en 10 días.',
  descripcion:['Lumen Glow lleva el blanqueamiento profesional a tu casa. El kit incluye gel de peróxido de carbamida al 16%, una férula con luz LED azul que activa el gel y un estuche de viaje. Con 20 minutos al día, notarás una sonrisa hasta 6 tonos más clara en 10 días.','Su fórmula incluye nitrato de potasio para reducir la sensibilidad dental durante el tratamiento. Recomendamos una evaluación previa con tu odontólogo, sobre todo si tienes caries, encías inflamadas o restauraciones visibles.'],
  caracteristicas:['Gel de peróxido de carbamida al 16%','Férula con luz LED azul y recarga USB','Con nitrato de potasio contra la sensibilidad','Tratamiento de 10 días, 20 minutos por sesión'],
  opciones:[{key:'Intensidad',values:[{v:'Suave (dientes sensibles)',extra:0},{v:'Estándar',extra:0},{v:'Intensivo',extra:400}]},
   {key:'Empaque',values:[{v:'Kit individual',extra:0},{v:'Kit doble (2 personas)',extra:2200}]},ENTREGA]}
];
const ENVIO_GRATIS = 2500, ENVIO_COSTO = 250;

/* ---------- utilidades ---------- */
const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const money = n => 'RD$ ' + Math.round(n).toLocaleString('es-DO');
const byId = id => PRODUCTS.find(p=>p.id===id);
let memCart = [];
const Cart = {
  get(){ try{ return JSON.parse(localStorage.getItem('ol_cart')) || []; }catch(e){ return memCart; } },
  set(c){ memCart=c; try{ localStorage.setItem('ol_cart',JSON.stringify(c)); }catch(e){} badge(); },
  add(item){ const c=this.get(); const k=item.id+'|'+JSON.stringify(item.opts); const f=c.find(i=>i.key===k);
    if(f) f.qty+=item.qty; else c.push({...item,key:k}); this.set(c); },
  count(){ return this.get().reduce((a,i)=>a+i.qty,0); },
  subtotal(){ return this.get().reduce((a,i)=>a+i.precio*i.qty,0); },
  clear(){ this.set([]); }
};
function badge(){ $$('.cart-count').forEach(b=>b.textContent=Cart.count()); }
function toast(msg){ let t=$('.toast'); if(!t){ t=document.createElement('div'); t.className='toast'; t.setAttribute('role','status'); document.body.appendChild(t); }
  t.textContent=msg; requestAnimationFrame(()=>t.classList.add('show')); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove('show'),2400); }
function shipping(sub){ return sub===0?0:(sub>=ENVIO_GRATIS?0:ENVIO_COSTO); }

function productCard(p){
  return `<article class="card"><a href="producto.html?id=${p.id}" class="thumb" aria-label="Ver ${p.nombre}">
    ${p.tag?`<span class="tag">${p.tag}</span>`:''}<img src="${p.img}" alt="${p.nombre}" loading="lazy"></a>
    <div class="card-body"><span class="cat-name">${p.cat}</span><h3><a href="producto.html?id=${p.id}">${p.nombre}</a></h3><p>${p.resumen}</p>
    <div class="card-foot"><span class="price">${money(p.precio)}</span><a class="btn btn-dark btn-sm" href="producto.html?id=${p.id}">Ver opciones</a></div></div></article>`;
}

/* ---------- cabecera y pie ---------- */
function layout(){
  const page = document.body.dataset.page;
  const nav = [['index.html','Inicio','home'],['tienda.html','Tienda','shop'],['nosotros.html','Nosotros','about'],['contacto.html','Contacto','contact']];
  $('#site-header').outerHTML = `<div class="topbar">Envío gratis en compras desde ${money(ENVIO_GRATIS)} · Tienda de demostración con fines académicos</div>
  <header class="site"><div class="container nav"><a class="brand" href="index.html"><img src="images/logo.svg" alt="">Odonto Lumen</a>
  <button class="menu-btn" aria-label="Abrir menú" aria-expanded="false">☰</button>
  <ul>${nav.map(n=>`<li><a href="${n[0]}" class="${page===n[2]||(page==='product'&&n[2]==='shop')?'active':''}">${n[1]}</a></li>`).join('')}
  <li><a href="carrito.html" class="cart-link ${page==='cart'?'active':''}">Carrito <span class="badge cart-count">0</span></a></li></ul></div></header>`;
  $('#site-footer').outerHTML = `<footer class="site"><div class="container"><div class="foot-grid">
   <div><a class="brand" href="index.html"><img src="images/logo.svg" alt="">Odonto Lumen</a><p>Productos de cuidado dental seleccionados con criterio odontológico para toda la familia.</p></div>
   <div><h4>Tienda</h4><ul><li><a href="tienda.html?cat=Cepillos">Cepillos</a></li><li><a href="tienda.html?cat=Higiene bucal">Higiene bucal</a></li><li><a href="tienda.html?cat=Blanqueamiento">Blanqueamiento</a></li></ul></div>
   <div><h4>Ayuda</h4><ul><li><a href="nosotros.html">Quiénes somos</a></li><li><a href="contacto.html">Contacto</a></li><li><a href="carrito.html">Mi carrito</a></li></ul></div>
   <div><h4>Contacto</h4><ul><li>Santo Domingo, Rep. Dominicana</li><li>809-555-0100</li><li>hola@odontolumen.example</li><li>Lun a sáb · 8:00 a. m. a 6:00 p. m.</li></ul></div></div>
   <p class="copy">© 2026 Odonto Lumen. Proyecto académico: tienda ficticia, los pedidos no se procesan realmente.</p></div></footer>`;
  const mb=$('.menu-btn'); mb.addEventListener('click',()=>{ const u=$('.nav ul'); const o=u.classList.toggle('open'); mb.setAttribute('aria-expanded',o); });
  badge();
}

/* ---------- inicio ---------- */
function initHome(){
  $('#featured').innerHTML = PRODUCTS.slice(0,4).map(productCard).join('');
}

/* ---------- tienda ---------- */
function initShop(){
  const cats=['Todos',...new Set(PRODUCTS.map(p=>p.cat))];
  const params=new URLSearchParams(location.search);
  let cat=cats.includes(params.get('cat'))?params.get('cat'):'Todos';
  const chips=$('#chips'), grid=$('#grid'), q=$('#q'), sort=$('#sort');
  function draw(){
    chips.innerHTML=cats.map(c=>`<button class="chip ${c===cat?'on':''}" data-c="${c}">${c}</button>`).join('');
    let list=PRODUCTS.filter(p=>(cat==='Todos'||p.cat===cat)&&(p.nombre+p.resumen).toLowerCase().includes(q.value.trim().toLowerCase()));
    if(sort.value==='asc') list.sort((a,b)=>a.precio-b.precio); if(sort.value==='desc') list.sort((a,b)=>b.precio-a.precio);
    grid.innerHTML=list.length?list.map(productCard).join(''):'<div class="empty" style="grid-column:1/-1"><h3>No encontramos productos</h3><p style="margin:8px auto 0">Prueba con otra palabra o elige otra categoría.</p></div>';
    $('#count').textContent=list.length+(list.length===1?' producto':' productos');
  }
  chips.addEventListener('click',e=>{ const b=e.target.closest('.chip'); if(b){cat=b.dataset.c;draw();} });
  q.addEventListener('input',draw); sort.addEventListener('change',draw); draw();
}

/* ---------- producto ---------- */
function initProduct(){
  const p=byId(new URLSearchParams(location.search).get('id'));
  const root=$('#product');
  if(!p){ root.innerHTML='<div class="empty"><h2>Producto no encontrado</h2><p style="margin:10px auto 20px">Es posible que el enlace sea incorrecto.</p><a class="btn btn-primary" href="tienda.html">Volver a la tienda</a></div>'; return; }
  document.title=p.nombre+' · Odonto Lumen';
  let qty=1;
  const optsHTML=p.opciones.map((o,oi)=>`<fieldset class="opt"><legend>${o.key}</legend><div class="opt-row">
    ${o.values.map((v,vi)=>`<label class="opt-pill"><input type="radio" name="o${oi}" value="${vi}" ${vi===0?'checked':''}><span>${o.type==='color'?`<i class="dot" style="background:${v.hex}"></i>`:''}${v.v}${v.extra>0?` <small>(+${money(v.extra)})</small>`:v.extra<0?` <small>(${money(v.extra)})</small>`:''}</span></label>`).join('')}</div></fieldset>`).join('');
  root.innerHTML=`<div class="pd"><div class="thumb"><span class="tag">${p.tag||p.cat}</span><img id="pimg" src="${p.img}" alt="${p.nombre}"></div>
   <div class="pd-info"><span style="color:var(--aqua-d);font-weight:700">${p.cat}</span><h1>${p.nombre}</h1><div class="price" id="pprice"></div><p class="short">${p.resumen}</p>
   ${optsHTML}
   <div class="buy-row"><div class="qty"><button type="button" id="minus" aria-label="Disminuir">−</button><span id="qty">1</span><button type="button" id="plus" aria-label="Aumentar">+</button></div>
   <button class="btn btn-primary" id="add">Agregar al carrito</button><a class="btn btn-ghost" href="carrito.html">Ver carrito</a></div>
   <div class="tabs"><details open><summary>Descripción</summary>${p.descripcion.map(d=>`<p>${d}</p>`).join('')}</details>
   <details><summary>Características</summary><ul>${p.caracteristicas.map(c=>`<li>${c}</li>`).join('')}</ul></details>
   <details><summary>Envíos y devoluciones</summary><p>Entrega estándar en 3 a 5 días hábiles; express en 24 a 48 horas. Envío gratis en compras desde ${money(ENVIO_GRATIS)}. Puedes devolver productos sin abrir dentro de los 15 días posteriores a la compra.</p></details></div></div></div>`;
  const chosen=()=>p.opciones.map((o,oi)=>o.values[+($(`input[name=o${oi}]:checked`).value)]);
  function recalc(){
    const ch=chosen(); const unit=p.precio+ch.reduce((a,v)=>a+(v.extra||0),0);
    $('#pprice').textContent=money(unit); const col=ch.find(v=>v.hue!==undefined); $('#pimg').style.filter=col?`hue-rotate(${col.hue}deg)`:'none'; return unit;
  }
  root.addEventListener('change',recalc); recalc();
  $('#minus').onclick=()=>{ qty=Math.max(1,qty-1); $('#qty').textContent=qty; };
  $('#plus').onclick=()=>{ qty=Math.min(20,qty+1); $('#qty').textContent=qty; };
  $('#add').onclick=()=>{ const ch=chosen(); const opts={}; p.opciones.forEach((o,i)=>opts[o.key]=ch[i].v);
    Cart.add({id:p.id,nombre:p.nombre,img:p.img,hue:(ch.find(v=>v.hue!==undefined)||{}).hue||0,opts,precio:recalc(),qty}); toast('Agregado al carrito: '+p.nombre); };
  const rel=PRODUCTS.filter(x=>x.id!==p.id).slice(0,4); $('#related').innerHTML=rel.map(productCard).join('');
}

/* ---------- carrito ---------- */
function initCart(){
  const list=$('#lines'), sum=$('#summary');
  function draw(){
    const c=Cart.get();
    if(!c.length){ list.innerHTML='<div class="empty"><h3>Tu carrito está vacío</h3><p style="margin:8px auto 22px">Explora la tienda y agrega los productos que necesites.</p><a class="btn btn-primary" href="tienda.html">Ir a la tienda</a></div>'; sum.style.display='none'; return; }
    sum.style.display='';
    list.innerHTML=c.map((i,ix)=>`<div class="line"><div class="thumb"><img src="${i.img}" alt="" style="filter:hue-rotate(${i.hue||0}deg)"></div>
     <div><h3><a href="producto.html?id=${i.id}">${i.nombre}</a></h3><small>${Object.entries(i.opts).map(([k,v])=>`${k}: ${v}`).join(' · ')}</small>
     <div class="qty"><button data-a="m" data-i="${ix}" aria-label="Disminuir">−</button><span>${i.qty}</span><button data-a="p" data-i="${ix}" aria-label="Aumentar">+</button></div></div>
     <div class="right"><span class="price">${money(i.precio*i.qty)}</span><button class="rm" data-a="r" data-i="${ix}">Quitar</button></div></div>`).join('');
    const s=Cart.subtotal(), e=shipping(s), pct=Math.min(100,s/ENVIO_GRATIS*100);
    sum.innerHTML=`<h3>Resumen del pedido</h3><div class="sum-row"><span>Subtotal</span><span>${money(s)}</span></div>
     <div class="sum-row"><span>Envío</span><span>${e===0?'Gratis':money(e)}</span></div>
     <div class="free-bar"><i style="width:${pct}%"></i></div><p class="note" style="margin:0 0 8px">${s>=ENVIO_GRATIS?'Tu pedido tiene envío gratis.':'Te faltan '+money(ENVIO_GRATIS-s)+' para el envío gratis.'}</p>
     <div class="sum-row total"><span>Total</span><span>${money(s+e)}</span></div><p class="note">Precios con ITBIS incluido.</p>
     <a class="btn btn-primary btn-block" style="margin-top:18px" href="checkout.html">Finalizar compra</a>
     <button class="btn btn-ghost btn-block" id="clear" style="margin-top:10px">Vaciar carrito</button>`;
    $('#clear').onclick=()=>{ Cart.clear(); draw(); };
  }
  list.addEventListener('click',e=>{ const b=e.target.closest('button[data-a]'); if(!b) return; const c=Cart.get(), i=+b.dataset.i;
    if(b.dataset.a==='p') c[i].qty=Math.min(20,c[i].qty+1); if(b.dataset.a==='m') c[i].qty=Math.max(1,c[i].qty-1); if(b.dataset.a==='r') c.splice(i,1);
    Cart.set(c); draw(); });
  draw();
}

/* ---------- validación de formularios ---------- */
function validate(form){
  let ok=true;
  $$('[data-req]',form).forEach(inp=>{
    const f=inp.closest('.field'); let bad=!inp.value.trim();
    if(!bad&&inp.type==='email') bad=!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value);
    if(!bad&&inp.dataset.req==='tel') bad=inp.value.replace(/\D/g,'').length<10;
    f.classList.toggle('bad',bad); if(bad) ok=false;
  });
  return ok;
}
function modal(title,text,btn,href){
  const o=document.createElement('div'); o.className='overlay show'; o.innerHTML=`<div class="modal" role="dialog" aria-modal="true"><div class="check">✓</div><h2></h2><p></p><a class="btn btn-primary" href="${href}"></a></div>`;
  $('h2',o).textContent=title; $('p',o).textContent=text; $('a',o).textContent=btn; document.body.appendChild(o); $('a',o).focus();
}

/* ---------- checkout ---------- */
function initCheckout(){
  const c=Cart.get(); const form=$('#checkout-form');
  if(!c.length){ $('#checkout-wrap').innerHTML='<div class="empty"><h2>No hay productos para pagar</h2><p style="margin:10px auto 22px">Agrega productos a tu carrito primero.</p><a class="btn btn-primary" href="tienda.html">Ir a la tienda</a></div>'; return; }
  const s=Cart.subtotal(), e=shipping(s);
  $('#mini').innerHTML=c.map(i=>`<div class="mini"><div>${i.nombre} × ${i.qty}<small>${Object.values(i.opts).join(' · ')}</small></div><strong>${money(i.precio*i.qty)}</strong></div>`).join('')+
   `<div class="sum-row"><span>Subtotal</span><span>${money(s)}</span></div><div class="sum-row"><span>Envío</span><span>${e===0?'Gratis':money(e)}</span></div><div class="sum-row total"><span>Total</span><span>${money(s+e)}</span></div>`;
  form.addEventListener('submit',ev=>{ ev.preventDefault(); if(!validate(form)){ toast('Revisa los campos marcados en rojo'); return; }
    const n='OL-'+Date.now().toString().slice(-6); const name=$('#nombre').value.trim().split(' ')[0]; Cart.clear();
    modal('¡Gracias por tu compra, '+name+'!','Tu pedido '+n+' fue registrado. Te enviaremos la confirmación a '+$('#email').value.trim()+'.','Volver al inicio','index.html'); });
}

/* ---------- contacto ---------- */
function initContact(){
  const form=$('#contact-form');
  form.addEventListener('submit',ev=>{ ev.preventDefault(); if(!validate(form)){ toast('Revisa los campos marcados en rojo'); return; }
    form.reset(); modal('Mensaje enviado','Gracias por escribirnos. Responderemos en menos de 24 horas hábiles.','Entendido','contacto.html'); });
}

document.addEventListener('DOMContentLoaded',()=>{
  layout();
  const init={home:initHome,shop:initShop,product:initProduct,cart:initCart,checkout:initCheckout,contact:initContact}[document.body.dataset.page];
  if(init) init();
});
