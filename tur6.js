let slides = document.querySelectorAll(".slide");
let current = 0;
let currentLang = "kz";
/* TEXT */
const t = {
  kz:{
    M1:"Басты бет",
    M2:"Турлар жайлы",
    M21:"ЗАМАНАУИ ШЫМКЕНТ",
    M22:"ҚАЛАНЫҢ ӘІО",
    M23:"ТАНЫМДЫҚ ТУР",
    M24:"ТАРИХИ ҚАЛА",
    M25:"ДІНИ ТУРИЗМ",
    M26:"ЕСКЕ АЛУ ЖӘНЕ МӘДЕНИЕТ БАҒЫТЫ",
    M3:"Біз туралы",
    M4:"Байланыс",
    Poroda:"🌦️ Ауа райы",
    marshut:"📍 Маршрут",
    C1:"📍КАРТАДАН ҚАРАУ",
s1_title:"ЕСКЕ АЛУ ЖӘНЕ МӘДЕНИЕТ БАҒЫТЫ",
s1_text:"№6 Тур",
s2_title:"«АБАЙ» САЯБАҒЫ №1",
s2_text:"«Абай» саябағы — қаланың мәдени әрі демалыс орталығы. Мұнда серуендеу жолдары, футбол алаңы, теннис корттары және заманауи демалыс аймақтары қарастырылған. Саябақ аумағында орналасқан «Даңқ» мемориалы Ұлы Отан соғысы батырларын еске алуға арналған маңызды тарихи ескерткіш болып табылады.",
s3_title:"«АБАЙ» САЯБАҒЫ №2",
s3_text:"«Абай» саябағы — Шымкент қаласындағы ең танымал және тарихи демалыс орындарының бірі. Саябақ қала тұрғындары мен қонақтарының серуендеуіне, тынығуына және бос уақытын тиімді өткізуіне арналған маңызды қоғамдық кеңістік болып табылады.",
s4_title:"ШЫМКЕНТ ЦИРКІ",
s4_text:"Шымкент циркі 2011 жылы ашылған мәдени-ойын-сауық орны. Мұнда акробаттар, клоундар және түрлі әртістер өнер көрсетеді",
s5_title:"ДОСТЫҚ ҮЙІ (ҚАЗАҚСТАН ХАЛҚЫ АССАМБЛЕЯСЫ)",
s5_text:"Достық үйі (Қазақстан халқы Ассамблеясы) — Қазақстан халқы Ассамблеясы жүйесіне кіретін, этносаралық келісім мен қоғамдық бірлікті нығайтуға бағытталған мәдени-қоғамдық орталық.",
s6_title:"«ДАҢҚ» МЕМОРИАЛЫ",
s6_text:"«Даңқ» мемориалы — Ұлы Отан соғысы батырларының ерлігіне арналған тарихи-мемориалдық кешен. Мемориал майдангерлерге құрмет көрсетіп, олардың ерлігі мен батылдығын мәңгі есте сақтауға арналған маңызды орын болып табылады.",
s7_title:"«САЯСИ ҚУҒЫН-СҮРГІН» МҰРАЖАЙЫ",
s7_text:"Саяси қуғын-сүргін мұражайы 2001 жылы ашылған. Бұл музей Қазақстандағы саяси қуғын-сүргін құрбандарын еске алуға арналған. Экспонаттар мен тарихи деректер арқылы сол кезеңнің ауыр тарихы көрсетіледі.",
s8_title:"«КӨРКЕМ СУРЕТ» ГАЛЕРЕЯСЫ",
s8_text:"«Көркем сурет» галереясы «Абай» саябағы аумағында орналасқан. Мұнда жергілікті суретшілердің туындылары көрмеге қойылады. Сондай-ақ түрлі көрмелер мен шеберлік сабақтары өткізіліп, өнер мен шығармашылықты дамытуға мүмкіндік береді.",
s9_title:"«ҚАЖЫМҰҚАН» АТЫНДАҒЫ ОРТАЛЫҚ СТАДИОН",
s9_text:"Қажымұқан атындағы Орталық стадион — Шымкент қаласындағы ірі спорт нысандарының бірі. Стадионда футбол матчтары, спорттық жарыстар және түрлі бұқаралық іс-шаралар өткізіледі.",
s10_title:"«АНАЛАР» АЛЛЕЯСЫ",
s10_text:"«Аналар» аллеясы — 2024 жылы ашылған заманауи демалыс орны. Мұнда анаға арналған мүсін, көгалдандырылған серуен аймақтары және тыныш демалыс кеңістігі бар.",
s11_title:"«ҚЫЗҒАЛДАҚ» ФОНТАНЫ",
s11_text:"«Қызғалдақ» фонтаны — қаланың символдық және көрікті нысандарының бірі. Ол қызыл қызғалдақ бейнесінде жасалған және биіктігі шамамен 10 метрге жетеді.",
  },
  ru:{
    M1:"Главная",
    M2:"О турах",
    M21:"СОВРЕМЕННЫЙ ШЫМКЕНТ",
    M22:"ГОРОДСКОЙ АДО",
    M23:"ПОЗНАВАТЕЛЬНЫЙ ТУР",
    M24:"ИСТОРИЧЕСКИЙ ГОРОД",
    M25:"РЕЛИГИОЗНЫЙ ТУРИЗМ",
    M26:"ПАМЯТЬ И КУЛЬТУРА",
    M3:"О нас",
    M4:"Контакты",
    Poroda:"🌦️Погода",
    marshut:"📍 Маршрут",
    C1:"📍СМОТРЕТЬ НА КАРТЕ",
s1_title:"МАРШРУТ ПАМЯТИ И КУЛЬТУРЫ",
s1_text:"№6 Тур .",
s2_title:"ПАРК «АБАЙ» №1",
s2_text:"Парк «Абай» — культурно-досуговый центр города. Здесь предусмотрены прогулочные аллеи, футбольное поле, теннисные корты и современные зоны отдыха. На территории парка расположен мемориал «Даңқ», являющийся важным историческим памятником, посвящённым героям Великой Отечественной войны. ",
s3_title:"ПАРК «АБАЙ» №2 ",
s3_text:"Парк «Абай» — одно из самых популярных и исторически значимых мест отдыха в городе Шымкент. Парк является важным общественным пространством, предназначенным для прогулок, отдыха и проведения досуга жителей и гостей города. ",
s4_title:"ШЫМКЕНТСКИЙ ЦИРК",
s4_text:"Шымкентский цирк — культурно-развлекательное учреждение, открытое в 2011 году. Здесь выступают акробаты, клоуны и артисты различных жанров.",
s5_title:"ДОМ ДРУЖБЫ (АССАМБЛЕЯ НАРОДА КАЗАХСТАНА)",
s5_text:"Дом дружбы — культурно-общественный центр, входящий в систему Ассамблеи народа Казахстана и направленный на укрепление межэтнического согласия и общественного единства.",
s6_title:"МЕМОРИАЛ «ДАҢҚ»",
s6_text:"Мемориал «Даңқ» — историко-мемориальный комплекс, посвящённый подвигу героев Великой Отечественной войны. Мемориал служит местом памяти и уважения к фронтовикам, увековечивая их мужество и героизм.",
s7_title:"МУЗЕЙ «ЖЕРТВ ПОЛИТИЧЕСКИХ РЕПРЕССИЙ» ",
s7_text:"Музей жертв политических репрессий был открыт в 2001 году. Он посвящён памяти жертв политических репрессий в Казахстане. Экспозиции и исторические материалы рассказывают о трагических страницах того периода. ",
s8_title:"«ХУДОЖЕСТВЕННАЯ» ГАЛЕРЕЯ ",
s8_text:"Художественная галерея расположена на территории парка «Абай». Здесь экспонируются работы местных художников, а также проводятся различные выставки и мастер-классы, способствующие развитию искусства и творчества",
s9_title:"ЦЕНТРАЛЬНЫЙ СТАДИОН ИМЕНИ КАЖЫМУКАНА МУНАЙТПАСОВА ",
s9_text:" Центральный стадион имени Кажымукана Мунайтпасова — один из крупнейших спортивных объектов города Шымкент. Здесь проводятся футбольные матчи, спортивные соревнования и различные массовые мероприятия. ",
s10_title:"АЛЛЕЯ «МАТЕРЕЙ» ",
s10_text:"Аллея матерей — современная зона отдыха, открытая в 2024 году. Здесь расположены скульптура, посвящённая матери, благоустроенные прогулочные зоны и пространство для спокойного отдыха.",
s11_title:"ФОНТАН «ТЮЛЬПАН»",
s11_text:"Фонтан «Қызғалдақ» — один из символичных и живописных объектов города. Он выполнен в форме красного тюльпана и достигает высоты около 10 метров.",
  },
  en:{
    M1:"Home",
    M2:"About tours",
    M21:"MODERN SHYMKENT",
    M22:"CITY ADMINISTRATIVE CENTER",
    M23:"EDUCATIONAL TOUR",
    M24:"HISTORICAL CITY",
    M25:"RELIGIOUS TOURISM",
    M26:"MEMORY & CULTURE",
    M3:"About us",
    M4:"Contact",
    Poroda:"🌦️ Weather",
    marshut:"📍 Route",
    C1:"📍VIEW ON MAP",
s1_title:"MEMORY AND CULTURE ROUTE",
s1_text:"№5 Tour",
s2_title:"«ABAI» PARK №1",
s2_text:"Abai Park is one of Shymkent’s major cultural and recreational centers. The park features walking alleys, a football field, tennis courts, and modern leisure areas. Located within the park is the Danq Memorial, an important historical monument dedicated to the heroes of the Great Patriotic War.",
s3_title:"«ABAI» PARK №2",
s3_text:"Abai Park is one of the most popular and historically significant recreational areas in Shymkent. It serves as an important public space where residents and visitors can enjoy walking, relaxation, and various leisure activities.",
s4_title:"SHYMKENT CIRCUS",
s4_text:"The Shymkent Circus is a cultural and entertainment venue that opened in 2011. Its performances feature acrobats, clowns, and artists representing a variety of circus genres, providing exciting entertainment for audiences of all ages.",
s5_title:"HOUSE OF FRIENDSHIP (ASSEMBLY OF THE PEOPLE OF KAZAKHSTAN)",
s5_text:"The House of Friendship is a cultural and public center operating within the framework of the Assembly of the People of Kazakhstan. Its mission is to promote interethnic harmony, social cohesion, and mutual understanding among the country's diverse communities.",
s6_title:"«DANQ» MEMORIAL",
s6_text:"The Danq Memorial is a historical and memorial complex dedicated to the heroism of the soldiers who fought in the Great Patriotic War. The memorial serves as a place of remembrance and respect, honoring their courage, sacrifice, and devotion.",
s7_title:"MUSEUM OF «VICTIMS OF POLITICAL REPRESSIONS»",
s7_text:"The Museum of Victims of Political Repressions was opened in 2001. It is dedicated to preserving the memory of those who suffered during the years of political repression in Kazakhstan. Its exhibitions and historical materials tell the stories of this tragic period in the nation's history. ",
s8_title:"«ART» GALLERY",
s8_text:"The Art Gallery is located within Abai Park. It showcases works by local artists and regularly hosts exhibitions, workshops, and cultural events that promote the development of art and creativity in the region.",
s9_title:"KAZHYMUKAN MUNAITPASOV «CENTRAL» STADIUM",
s9_text:"he Kazhymukan Munaitpasov Central Stadium is one of the largest sports venues in Shymkent. It hosts football matches, sporting competitions, and large public events, serving as an important center for sports and community activities.",
s10_title:"«MOTHERS'» ALLEY",
s10_text:"Mothers' Alley is a modern recreational area that opened in 2024. The site features a monument dedicated to motherhood, landscaped walking paths, and peaceful spaces designed for relaxation and family recreation.",
s11_title:"«TULIP» FOUNTAIN",
s11_text:"The Tulip Fountain (Qyzgaldaq Fountain) is one of the city's most recognizable and picturesque landmarks. Designed in the shape of a red tulip, the fountain rises to a height of approximately 10 meters and serves as a symbol of Shymkent's identity and beauty.",
}
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/ABAI1.mp3",ru:"audio/PARKABAI.mp3",en:"audio/ABAIPARK1.mp3"},
  2:{kz:"audio/ABAI2.mp3",ru:"audio/PARKABAI2.mp3",en:"audio/ABAIPARK2.mp3"},
  3:{kz:"audio/SHYMKENTCIRKI.mp3",ru:"audio/CIRK.mp3",en:"audio/CIRKEN.mp3"},
  4:{kz:"audio/DOSTYQUII.mp3",ru:"audio/ASSAMBLEA.mp3",en:"audio/ASSAMBLEAEN.mp3"},
  5:{kz:"audio/DANQMEMORIALY.mp3",ru:"audio/DANK.mp3",en:"audio/DANKEN.mp3"},
  6:{kz:"audio/SAIASI.mp3",ru:"audio/REPRESSIA.mp3",en:"audio/REPRESSIAEN.mp3"},
  7:{kz:"audio/KORKEMSURET.mp3",ru:"audio/GALEREA.mp3",en:"audio/GALEREAEN.mp3"},
  8:{kz:"audio/ҚАЖЫМҰҚА.mp3",ru:"audio/KAJIMUKANRU.mp3",en:"audio/KAJIMUKAN.mp3"},
  9:{kz:"audio/ANALAR.mp3",ru:"audio/ALEAMATEREI.mp3",en:"audio/ANALARAAA.mp3"},
  10:{kz:"audio/FONTANY.mp3",ru:"audio/FONTANTULPAN.mp3",en:"audio/FONTANTULPANEN.mp3"},
};
function showSlide(i){
  slides.forEach(s=>s.classList.remove("active"));
  slides[i].classList.add("active");
  current=i;
  location.hash=slides[i].id;
  updateAudio();
}
function next(){showSlide((current+1)%slides.length);}
function prev(){showSlide((current-1+slides.length)%slides.length);}
/* AUDIO FIX */
function updateAudio(){
  let audio = slides[current].querySelector(".slide-audio");
  // егер аудио жоқ болса → тоқтату
  if(!audio) return;
  let src = audioData[current]?.[currentLang];
  if(!src){
    audio.pause();
    return;
  }
  audio.src = src;
  audio.load();
}
/* LANG */
function setLang(lang){
  currentLang=lang;
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.innerText=t[lang][el.dataset.key];
  });
  updateAudio();
}
/* MAP */
function openMap(lat, lng){
  window.open(`https://2gis.kz/search/${lat},${lng}`);
}
/* HASH */
function openFromHash(){
  let h=location.hash.replace("#","");
  let i=[...slides].findIndex(s=>s.id===h);
  if(i>=0) showSlide(i); else showSlide(0);
}
/* START */
setLang("kz");
openFromHash();
window.addEventListener("hashchange",openFromHash);




//menu select
window.addEventListener("scroll", function(){
  let header = document.getElementById("header");
  if(!header) return; // 🔥 осыны қос
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// MENU OPEN
function openMenu(){
  document.getElementById("menu").classList.add("active");
}
// MENU CLOSE
function closeMenu(){
  document.getElementById("menu").classList.remove("active");
}
// SUBMENU TOGGLE
function toggle(el){
  el.classList.toggle("open");
}
let interval;
function openW(){
  document.getElementById("sheet").classList.add("active");
  document.getElementById("bg").classList.add("active");
  loadWeather();
  clearInterval(interval);
  interval = setInterval(loadWeather,600000);
}
function closeW(){
  document.getElementById("sheet").classList.remove("active");
  document.getElementById("bg").classList.remove("active");
}
function getHour(){
  return new Date().getHours();
}
async function loadWeather(){
  const url="https://api.open-meteo.com/v1/forecast?latitude=42.32&longitude=69.59&hourly=temperature_2m&current_weather=true&forecast_days=1";
  const res=await fetch(url);
  const data=await res.json();
  const temps=data.hourly.temperature_2m.slice(0,24);
  const current=data.current_weather.temperature;
  const code=data.current_weather.weathercode;
  let icon="🌤️",text="Ауа райы";
  if(code===0){icon="☀️";text="Ашық";}
  else if(code<=3){icon="☁️";text="Бұлтты";}
  else if(code<=67){icon="🌧️";text="Жаңбыр";}
  document.getElementById("now").innerText=
  icon+" Қазір: "+current+"°C • "+text;
  const box=document.getElementById("hours");
  box.innerHTML="";
  let now=getHour();
  temps.forEach((t,i)=>{
    box.innerHTML+=`
      <div class="hour ${i===now?'active':''}">
        <div>${i}:00</div>
        <div>🌡️</div>
        <div>${Math.round(t)}°</div>
      </div>
    `;
  });
}
//sagat obnova
function updateClock() {
    const now = new Date();

    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if (clock) clock.innerText = `${h}:${m}:${s}`;

    if (date) {
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  date.innerText = `${day}.${month}.${year}`;
}
}

  setInterval(updateClock, 1000);
  updateClock();


let map;
let isLoaded = false;
function openRoute() {
    document.getElementById("mapModal").style.display = "flex";
    DG.then(function() {
        if (!map) {
            map = DG.map('map', { center: [42.332621,69.591369], zoom: 15 });

            // БАСТАПҚЫ НҮКТЕЛЕР (Фотолары мен аттары өзгеріссіз)
            const points = [
 {lat: 42.332621, lng: 69.591369, img: "images/tur6.1.jpg", text: "«ABAI» SAYABAGY №1"},
    {lat: 42.32599,  lng: 69.585185, img: "images/tur6.1.jpg", text: "«ABAI» SAYABAGY №2"},
    {lat: 42.328544, lng: 69.584422, img: "images/tur6.4.jpg", text: "SHYMKENT CIRKI"},
    {lat: 42.32614,  lng: 69.590448, img: "images/DOSTYK.jpg", text:"DOSTYQ UII (QAZAQSTAN HALYQ ASSAMBLEIASY"},
    {lat: 42.329242, lng: 69.591579, img: "images/DANQ.png", text: "«DANQ» MEMORIALY"},
    {lat: 42.329077, lng: 69.592316, img: "images/SAIASI.jpg", text: "«SAIASI QUGYN-SURGIN» MURAJAIY"},
    {lat: 42.332376, lng: 69.59233,  img: "images/tur6.2.png", text:"KORKEM SURET» GALEREIASY"},
    {lat: 42.334299, lng: 69.593678, img: "images/STADION.png", text: "«QAZHYMUQAN MUNAITPASOV» ATYNDAGY ORTALYQ STADIONY"},
    {lat: 42.324113, lng: 69.584005, img: "images/tur6.5.png", text: " «ANALAR» ALLEIASY"},
    {lat: 42.320727, lng: 69.588621, img: "images/tur6.6.jpg", text: "«QYZGALDAQ» FONTANY"},
            ];
            // 1. ЖОЛ СЫЗЫҒЫ (pathPoints - бұл жолдың иілісі, оны қалағаныңызша толықтырыңыз)
            // Мұнда бастапқы нүктелерді қолданамыз, бірақ арасына иілістерді қосамыз
            const pathPoints = [
                [42.332621, 69.591369],
                [42.332441, 69.591963],
                [42.332621, 69.591369],
                [42.333025, 69.591775],
                [42.332599, 69.593724],
                [42.334122, 69.59364],
                [42.332599, 69.593724],
                [42.329097, 69.592231],
                [42.329257, 69.591667],
                [42.329097, 69.592231],
                [42.329002, 69.592418],
                [42.329097, 69.592231],
                [42.325782, 69.590772],
                [42.325967, 69.589188],
                [42.324808, 69.585466],
                [42.326672, 69.584654],
                [42.327336, 69.584292],
                [42.328056, 69.584658],
                [42.327336, 69.584292],
                [42.326672, 69.584654],
                [42.324808, 69.585466],// 1,2
                [42.324256, 69.584016],
                [42.324808, 69.585466],// 1,2
                [42.320547, 69.587823],
                [42.320532, 69.588525],
              ];

            // 2. Жолды салу
            DG.polyline(pathPoints, { color: '#2563eb', weight: 5 }).addTo(map);

            // 3. Бастапқы маркерлерді (фотомен) қою
            points.forEach(p => {
                const icon = DG.divIcon({
                    html: `<div class="circle-marker"><img src="${p.img}"></div>`,
                    iconSize: [0, 0]
                });
                DG.marker([p.lat, p.lng], { icon }).addTo(map).bindPopup(p.text);
            });
// 1. Қашықтықты есептейтін функция
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Жер радиусы (км)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Нәтиже: км
}

// Километрді есептеу және көрсету
// 1. Қашықтықты есептейтін функция (Метрмен)
function getDistanceInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Жер радиусы метрмен (6371 км = 6371000 м)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c); // Метрмен дөңгелектеп қайтару
}

// 2. Маркерге метрмен жазу
for (let i = 0; i < pathPoints.length - 1; i++) {
    let p1 = pathPoints[i];
    let p2 = pathPoints[i + 1];
    let distMeters = getDistanceInMeters(p1[0], p1[1], p2[0], p2[1]); // Метрмен есептеу
    let midLat = (p1[0] + p2[0]) / 2;
    let midLng = (p1[1] + p2[1]) / 2;

    const distIcon = DG.divIcon({
        html: `<div style="
            background:white; 
            padding:2px 5px; 
            border-radius:5px; 
            border:1px solid #2563eb; 
            font-size:10px; 
            color:#2563eb; 
            font-weight:bold;
            white-space: nowrap;
            margin-left: -45px;
        ">
        ${distMeters} м</div>`, // "км" орнына "м" жазу
        className: '',
        iconSize: [0, 0]
    });
    DG.marker([midLat, midLng], { icon: distIcon }).addTo(map);
}
            // 4. Анимация
            let person = document.getElementById("person");
            person.style.display = "block";
            let i = 0, step = 0;
            function animate() {
                if (i >= pathPoints.length - 1) i = 0;
                let p1 = pathPoints[i], p2 = pathPoints[i + 1];
                step += 0.02; // Жылдамдық
                if (step >= 1) { step = 0; i++; }
                let lat = p1[0] + (p2[0] - p1[0]) * step;
                let lng = p1[1] + (p2[1] - p1[1]) * step;
                let pos = map.latLngToContainerPoint([lat, lng]);
                person.style.left = (pos.x - 10) + 'px';
                person.style.top = (pos.y - 10) + 'px';
                requestAnimationFrame(animate);
            }
            animate();
        } else {
            setTimeout(() => map.invalidateSize(), 100);
        }
    });
}
function closeMap(){
  document.getElementById("mapModal").style.display = "none";
}
