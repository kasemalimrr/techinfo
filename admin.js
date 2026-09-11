const DEFAULT={news:[{title:'Tech Info-এ স্বাগতম',text:'এখানে News, Photo এবং Official Website Link প্রকাশ করা যাবে।'}],photos:[],links:[]};
function get(){try{return JSON.parse(localStorage.getItem('techInfoData'))||JSON.parse(JSON.stringify(DEFAULT))}catch(e){return JSON.parse(JSON.stringify(DEFAULT))}}
function save(d){localStorage.setItem('techInfoData',JSON.stringify(d));render()}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function del(type,i){const d=get();d[type].splice(i,1);save(d)}
function render(){const d=get();newsList.innerHTML=d.news.map((x,i)=>`<div class="item"><span><b>${esc(x.title)}</b><br>${esc(x.text)}</span><button class="del" onclick="del('news',${i})">Delete</button></div>`).join('');photoList.innerHTML=d.photos.map((x,i)=>`<div class="item"><b>${esc(x.title)}</b><button class="del" onclick="del('photos',${i})">Delete</button></div>`).join('');linkList.innerHTML=d.links.map((x,i)=>`<div class="item"><span><b>${esc(x.name)}</b><br>${esc(x.url)}</span><button class="del" onclick="del('links',${i})">Delete</button></div>`).join('')}
newsForm.onsubmit=e=>{e.preventDefault();let d=get();d.news.unshift({title:newsTitle.value,text:newsText.value});save(d);e.target.reset()};
photoForm.onsubmit=e=>{e.preventDefault();let d=get();d.photos.unshift({title:photoTitle.value,url:photoUrl.value});save(d);e.target.reset()};
linkForm.onsubmit=e=>{e.preventDefault();let d=get();d.links.unshift({name:linkName.value,url:linkUrl.value});save(d);e.target.reset()};render();