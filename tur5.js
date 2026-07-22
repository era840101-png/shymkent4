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
s1_title:"ДІНИ ТУРИЗМ",
s1_text:"№5 Тур",
s2_title:"«ИБРАГИМ АТА» КЕСЕНЕСІ",
s2_text:"«Ибрагим ата» кесенесі — Қожа Ахмет Ясауидің әкесі жерленген қасиетті тарихи орын. XI ғасырда Сайрам өңірі ислам мәдениетінің маңызды орталықтарының бірі болған. Кесене сәулеті қарапайым болғанымен, оның рухани мәні өте терең. Бұл жерге келген адамдар тарихи атмосфераны сезініп, рухани тыныштық табады.",
s3_title:"«ҚОЖА САЛЫҚ» КЕСЕНЕСІ",
s3_text:"«Қожа Салық» кесенесі — XIX ғасырда салынған тарихи сәулет ескерткіші. Кесене архитектуралық құрылысымен және дәстүрлі өрнектерімен ерекшеленеді. Бұл нысан өңірдің мәдени және діни мұрасының маңызды бөлігі болып саналады.",
s4_title:"«ҚЫЗЫР» МҰНАРАСЫ",
s4_text:"«Қызыр» мұнарасы — Сайрамдағы көне сәулет ескерткіштерінің бірі. Ол күйдірілген кірпіштен салынған және бұрын шамамен 10 метрден жоғары болған.",
s5_title:"«НҰР САЙРАМ» БАЗАРЫ",
s5_text:"«Нұр Сайрам» базары — аудан тұрғындарына қызмет көрсететін ірі сауда орны. Мұнда азық-түлік, киім-кешек және тұрмыстық тауарлардың кең таңдауы ұсынылады",
s6_title:"«ҚАРАШАШ АНА» КЕСЕНЕСІ",
s6_text:"«Қарашаш ана» кесенесі — Қожа Ахмет Ясауидің анасына арналған қасиетті орын. Ол даналығы мен мейірімділігі арқылы халық құрметіне ие болған тұлға.",
s7_title:"«МІРӘЛІ БАБА» КЕСЕНЕСІ",
s7_text:"«Мірәлі баба» кесенесі — XIX ғасырда салынған тарихи діни нысан. Үлкен күмбезімен ерекшеленеді және Сайрамдағы көне қорым аумағында орналасқан.",
s8_title:"«ӘБДІЛ ӘЗІЗ БАБА» КЕСЕНЕСІ",
s8_text:"«Әбділ Әзіз баба» кесенесі — VIII ғасырдан бастау алатын көне қасиетті орын. Ол ислам дінін таратуға үлес қосқан әулие ретінде белгілі.",
s9_title:"«ӨЗБЕК ДРАМА» ТЕАТРЫ",
s9_text:"«Өзбек драма» театры — 2003 жылы ашылған мәдениет орталығы. Театр сахнасында классикалық және заманауи қойылымдар қойылады.",
s10_title:"«САЙРАМ» МҰРАЖАЙЫ",
s10_text:"«Сайрам» тарихи-өлкетану мұражайы — өңірдің бай тарихы мен мәдениетін таныстыратын мекеме. Мұнда археологиялық және этнографиялық жәдігерлер қойылған.",
s11_title:"«НАУРЫЗ» САЯБАҒЫ",
s11_text:"«Наурыз» саябағы — 1991 жылы ашылған демалыс аймағы. Кейіннен жаңартылып, заманауи келбетке ие болған. Мұнда серуендеуге, демалуға және табиғатты тамашалауға қолайлы жағдай жасалған."
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
s1_title:"РЕЛИГИОЗНЫЙ ТУРИЗМ",
s1_text:"№5 Тур ",
s2_title:"МАВЗОЛЕЙ «ИБРАГИМ АТА»",
s2_text:"Мавзолей «Ибрагим ата» — священное историческое место, где покоится отец Ходжи Ахмеда Ясави. В XI веке Сайрам был одним из важных центров исламской культуры. Несмотря на простоту архитектуры, мавзолей обладает глубоким духовным значением. Посетители могут здесь ощутить историческую атмосферу и обрести душевное спокойствие. ",
s3_title:"МАВЗОЛЕЙ «ХОДЖИ САЛИХА»",
s3_text:"Мавзолей «Ходжи Салиха» — исторический архитектурный памятник, построенный в XIX веке. Он отличается своей архитектурной композицией и традиционными орнаментами. Объект является важной частью культурного и религиозного наследия региона. ",
s4_title:"БАШНЯ «ХЫЗЫРА»",
s4_text:"Башня «Хызыра» — один из древних архитектурных памятников Сайрама. Она построена из обожжённого кирпича и в прошлом имела высоту более 10 метров. ",
s5_title:"РЫНОК «НУР САЙРАМ»",
s5_text:"Рынок «Нур Сайрам» — крупный торговый объект, обслуживающий жителей района. Здесь представлен широкий ассортимент продуктов питания, одежды и товаров повседневного спроса. ",
s6_title:"МАВЗОЛЕЙ «КАРАШАШ АНА»",
s6_text:" Мавзолей «Карашаш ана» — священное место, посвящённое матери Ходжи Ахмеда Ясави. Она пользовалась большим уважением среди народа благодаря своей мудрости и доброте. ",
s7_title:"МАВЗОЛЕЙ «МИРАЛИ БАБА»",
s7_text:"Мавзолей «Мирали баба» — исторический религиозный объект, построенный в XIX веке. Он выделяется своим большим куполом и расположен на территории старинного кладбища в Сайраме. ",
s8_title:"МАВЗОЛЕЙ «АБДЕЛЬ АЗИЗ БАБА»",
s8_text:"Мавзолей «Абдель Азиз баба» — древнее священное место, история которого восходит к VIII веку. Он известен как святой, внесший значительный вклад в распространение ислама. ",
s9_title:"«УЗБЕКСКИЙ ДРАМАТИЧЕСКИЙ» ТЕАТР",
s9_text:"Узбекский драматический театр — культурный центр, открытый в 2003 году. На его сцене ставятся классические и современные театральные постановки.",
s10_title:"ИСТОРИКО-КРАЕВЕДЧЕСКИЙ МУЗЕЙ «САЙРАМ»",
s10_text:"Историко-краеведческий музей «Сайрам» знакомит посетителей с богатой историей и культурой региона. В экспозиции представлены археологические и этнографические артефакты.",
s11_title:"ПАРК «НАУРЫЗ»",
s11_text:"Парк «Наурыз» — зона отдыха, открытая в 1991 году. Впоследствии парк был благоустроен и приобрёл современный облик. Здесь созданы комфортные условия для прогулок, отдыха и наслаждения природой."
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
s1_title:"RELIGOUS TOURISM",
s1_text:"№5 Tour",
s2_title:"«IBRAGIM ATA» MAUSOLEUM",
s2_text:"The Ibragim Ata Mausoleum is a sacred historical site where the father of Khoja Ahmed Yasawi is buried. In the 11th century, Sairam was one of the major centers of Islamic culture. Despite its simple architecture, the mausoleum holds profound spiritual significance. Visitors can experience the historical atmosphere and find a sense of peace and tranquility here.",
s3_title:" «KHOJA SALIKH» MAUSOLEUM",
s3_text:"The Khoja Salikh Mausoleum is a historical architectural monument built in the 19th century. It is distinguished by its unique architectural composition and traditional decorative ornaments. The mausoleum is an important part of the region’s cultural and religious heritage. ",
s4_title:"«KHYZYR» TOWER",
s4_text:"The Khyzyr Tower is one of the ancient architectural landmarks of Sairam. Constructed from fired brick, the tower once stood over 10 meters high and remains an important historical and spiritual site.",
s5_title:"«NUR SAIRAM» MARKET",
s5_text:"Nur Sairam Market is a major commercial center serving local residents and visitors. The market offers a wide selection of food products, clothing, household goods, and everyday necessities",
s6_title:"«KARASHASH ANA» MAUSOLEUM",
s6_text:"The Karashash Ana Mausoleum is a sacred site dedicated to the mother of Khoja Ahmed Yasawi. She was highly respected among the people for her wisdom, kindness, and spiritual influence, and remains an important historical figure in the region.",
s7_title:"«MIRALI BABA» MAUSOLEUM",
s7_text:"The Mirali Baba Mausoleum is a historical religious monument built in the 19th century. It is notable for its large dome and is located within the grounds of an ancient cemetery in Sairam.",
s8_title:"«ABDIL AZIZ BABA» MAUSOLEUM",
s8_text:"The Abdil Aziz Baba Mausoleum is an ancient sacred site whose history dates back to the 8th century. Abdil Aziz Baba is revered as a holy figure who played an important role in the spread of Islam throughout the region.",
s9_title:"«UZBEK DRAMA» THEATRE",
s9_text:"The Uzbek Drama Theatre is a cultural institution established in 2003. Its stage hosts both classical and contemporary theatrical productions, contributing to the preservation and development of Uzbek cultural heritage.",
s10_title:"«SAIRAM HISTORY AND LOCAL LORE» MUSEUM",
s10_text:"The Sairam History and Local Lore Museum introduces visitors to the rich history and culture of the region. Its exhibitions feature archaeological discoveries, ethnographic artifacts, and historical materials that reflect the area's unique heritage.",
s11_title:"«NAURYZ» PARK",
s11_text:"Nauryz Park is a recreational area that was opened in 1991. The park was later renovated and modernized, providing visitors with comfortable conditions for walking, relaxation, and enjoying nature in a pleasant environment.",
}
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/IBRAGIMATA.mp3",ru:"audio/IBRAHIMATA.mp3",en:"audio/IBRAHIMEN.mp3"},
  2:{kz:"audio/QOZHA.mp3",ru:"audio/HODJASALIHA.mp3",en:"audio/HOJASALIH.mp3"},
  3:{kz:"audio/QYZYRMUNARASY.mp3",ru:"audio/HIZIR.mp3",en:"audio/HIZIREN.mp3"},
  4:{kz:"audio/NURSAIRAM.mp3",ru:"audio/NYRSAIRAMru.mp3",en:"audio/NYRSAIRAMEN.mp3"},
  5:{kz:"audio/QARASHASH.mp3",ru:"audio/KARASHASHRU.mp3",en:"audio/KARASHASHEN.mp3"},
  6:{kz:"audio/MIRALI.mp3",ru:"audio/MERALIBABA.mp3",en:"audio/MERALIBABAEN.mp3"},
  7:{kz:"audio/ABDILAZIZ.mp3",ru:"audio/AZIZBABA.mp3",en:"audio/AZIZBABAEN.mp3"},
  8:{kz:"audio/OZBEK.mp3",ru:"audio/UZBTEATR.mp3",en:"audio/UZBEKEN.mp3"},
  9:{kz:"audio/SAIRAM.mp3",ru:"audio/SAIRAMMECHET.mp3",en:"audio/SAIRAMMUZEN.mp3"},
  10:{kz:"audio/NAURYZ.mp3",ru:"audio/PARKNAURIZ.mp3",en:"audio/NAURIZPARK.mp3"},
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
            map = DG.map('map', { center: [42.318917,69.781914], zoom: 15 });

            // БАСТАПҚЫ НҮКТЕЛЕР (Фотолары мен аттары өзгеріссіз)
            const points = [
    {lat: 42.318917, lng: 69.781914, img: "images/tur5.1.jpg", text: "«IBRAGIM ATA» KESENESI"},
    {lat: 42.301646, lng: 69.768252, img: "images/tur5.2.png", text: "«QOZHA SALYQ» KESENESI"},
    {lat: 42.298766, lng: 69.761646, img: "images/tur5.3.jpg", text: "«QYZYR» MUNARASY"},
    {lat: 42.298489, lng: 69.75886, img: "images/tur5.4.jpg", text:"«NUR SAIRAM» BAZARY"},
    {lat: 42.299343, lng: 69.757266, img: "images/tur5.5.JPG", text:"«QARASHASH ANA» KESENESI"},
    {lat: 42.299678, lng: 69.754497, img: "images/tur5.6.jpg", text: "«MIRALI BABA» KESENESI"},
    {lat: 42.305969, lng: 69.758066, img: "images/tur5.7.png", text: "«ABDIL AZIZ BABA» KESENESI"},
    {lat: 42.309218, lng: 69.759529, img: "images/tur5.8.jpg", text: "«OZBEK DRAMA» TEATRY"},
    {lat: 42.309537, lng: 69.75871, img: "images/tur5.9.jpg", text: "«SAIRAM» MURAJAIY"},
    {lat: 42.30929,  lng: 69.758153, img: "images/tur5.10.png", text: "«NAURYZ» SAYABAGY"},
            ];
            // 1. ЖОЛ СЫЗЫҒЫ (pathPoints - бұл жолдың иілісі, оны қалағаныңызша толықтырыңыз)
            // Мұнда бастапқы нүктелерді қолданамыз, бірақ арасына иілістерді қосамыз
            const pathPoints = [
                [42.318917,  69.781914],
                [42.319016, 69.781502],// 1,2
                [42.317075, 69.780925],
                [42.316752, 69.780477],
                [42.316406, 69.779941],
                [42.313188, 69.774032],
                [42.307731, 69.767537],// 1,2
                [42.308766, 69.760352],
                [42.309432, 69.758531],
                [42.308766, 69.760352],
                [42.305781, 69.758649],// 1,2
                [42.304235, 69.757946],
                [42.299383, 69.758828],
                [42.299185, 69.757532],
                [42.299309, 69.756612],
                [42.299431, 69.755764],
                [42.299435, 69.755242],
                [42.299368, 69.754534],[42.299435, 69.755242],[42.299431, 69.755764],[42.299309, 69.756612],[42.299185, 69.757532],[42.299383, 69.758828],
                [42.299423, 69.759007],
                [42.30041, 69.761748],
                [42.300636, 69.762374],
                [42.301064, 69.765315],
                [42.301604, 69.768334],
                [42.301064, 69.765315],
                [42.300636, 69.762374],
                [42.300408, 69.761768],
                [42.298792, 69.761861],
                [42.300408, 69.761768],
                [42.30041, 69.761748],
                [42.299423, 69.759007],
                [42.299383, 69.758828],
                [42.298243, 69.759133],
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
