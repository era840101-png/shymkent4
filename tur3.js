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
    s1_title:"ТАНЫМДЫҚ ТУР",
    s1_text:"№3 Тур",
    s2_title:"«АРБАТ» ЖАЯУ ЖҮРГІНШІЛЕР КӨШЕСІ №1",
    s2_text:"Арбат жаяу жүргіншілер көшесі — қаланың орталығындағы заманауи серуен аймағы. Мұнда субұрқақтар, гүлзарлар, көше өнері, мәдени іс-шаралар және дәстүрлі әрі заманауи тағамдарды ұсынатын гастрономиялық аллея орналасқан.",
    s3_title:"«АРБАТ» ЖАЯУ ЖҮРГІНШІЛЕР КӨШЕСІ №2",
    s3_text:"Арбат жаяу жүргіншілер көшесі — Шымкенттің мәдени және туристік өмірінің ажырамас бөлігі. Мұнда көше өнерінің элементтері, шығармашылық көрмелер мен түрлі мәдени бастамалар ұсынылады.",
    s4_title:"«CITY» САЯБАҚ",
    s4_text:"«CITY» саябақ аумағы заманауи демалыс және ойын-сауық кеңістігіне айналған. Саябақта субұрқақтар, су айдындары, жағалау аймағы, спорт алаңдары, жүгіру жолақтары және отбасылық серуенге арналған орындар орналасқан.",
    s5_title:"ОРЫС ДРАМА ТЕАТРЫ",
    s5_text:"Орыс драма театры — 1929 жылы ашылған мәдениет ошағы. Театр репертуарында балалар мен ересектерге арналған әртүрлі жанрдағы қойылымдар бар.",
    s6_title:"«SHYMKENT PLAZA» САУДА-ОЙЫН-САУЫҚ ОРТАЛЫҒЫ",
    s6_text:"«Shymkent Plaza» — қаладағы ірі сауда-ойын-сауық орталықтарының бірі. Заманауи кешенде кинотеатр, фастфуд орындары, танымал бренд дүкендері және балаларға арналған ойын алаңдары орналасқан.",
    s7_title:"«СПУТНИК» АЛЛЕЯСЫ",
    s7_text:"«Спутник» аллеясы — жаңадан абаттандырылған заманауи қоғамдық демалыс орны. Аллеяда тұрғындар мен қонақтарға арналған жайлы демалыс аймақтары, әсем жарықтандыру жүйелері және заманауи субұрқақ орналасқан.",
    s8_title:"ОРТАЛЫҚ АМБЕБАП ДҮКЕНІ (ЦУМ)",
    s8_text:"ОӘД — киім-кешек, аяқ киім және аксессуарлардың кең таңдауы ұсынылатын сауда орталығы.",
    s9_title:"«MEGA PLANET» САУДА-ОЙЫН-САУЫҚ ОРТАЛЫҒЫ",
    s9_text:"«Mega Planet» — 2007 жылдан бері жұмыс істеп келе жатқан ірі сауда-ойын-сауық орталығы. Орталықта кинотеатр, ойын-сауық аймақтары, түрлі дүкендер және фуд-корт орналасқан.",
    s10_title:"«ОРТАЛЫҚ» САЯБАҚ №1",
    s10_text:"«Орталық» саябақ — Шымкент қаласындағы ең көне демалыс орындарының бірі. Саябақтың негізі 1925 жылы қаланған және ол ұзақ жылдар бойы қала тұрғындарының сүйікті демалыс орны ретінде қалыптасқан.",
    s11_title:"«ОРТАЛЫҚ» САЯБАҚ №2",
    s11_text:"Орталық саябақ — Шымкент қаласының мәдени және қоғамдық өміріндегі маңызды орындардың бірі. Мұнда тұрғындар мен қонақтар үшін қолайлы демалыс жағдайлары жасалған.", 
    s12_title:"«ӘЗІЛ-СЫҚАҚ ЖӘНЕ САТИРА» ТЕАТРЫ",
    s12_text:"Шымкент қаласындағы Әзіл-сықақ және сатира театры — көркемсөз өнері мен сахналық комедия жанрын дамытуға бағытталған мәдени мекеме болып табылады.", 
    s13_title:"«ЖАПОН» САЯБАҒЫ",
    s13_text:"«Жапон» саябағы — отбасылық демалысқа арналған ерекше көрікті орындардың бірі. Саябақ аумағы жапон бағы стилінде табиғи үйлесімділікке басымдық бере отырып абаттандырылады. Мұнда су элементтері, тынығу аймақтары мен медитацияға арналған арнайы кеңістіктер қарастырылған.",   
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
    s1_title:"ПОЗНАВАТЕЛЬНЫЙ ТУР",
s1_text:"№3 тур",
s2_title:"ПЕШЕХОДНАЯ УЛИЦА «АРБАТ» №1",
s2_text:"Пешеходная улица «Арбат» — современная прогулочная зона в центре города. Здесь расположены фонтаны, цветочные аллеи, объекты уличного искусства, проходят культурные мероприятия, а также действует гастрономическая аллея с традиционной и современной кухней. ",
s3_title:"ПЕШЕХОДНАЯ УЛИЦА «АРБАТ» №2",
s3_text:"Пешеходная улица «Арбат» является неотъемлемой частью культурной и туристической жизни Шымкента. Здесь представлены элементы уличного искусства, творческие выставки и различные культурные инициативы. ",
s4_title:"«CITY» PARK",
s4_text:"Территория «CITY» парк представляет собой современное пространство для отдыха и развлечений. Здесь расположены фонтаны, водные зоны, набережная, спортивные площадки, беговые дорожки и места для семейных прогулок.  ",
s5_title:"«РУССКИЙ ДРАМАТИЧЕСКИЙ» ТЕАТР",
s5_text:"Русский драматический театр — культурный центр, открытый в 1929 году. В репертуаре театра представлены постановки различных жанров для детей и взрослых.  ",
s6_title:"ТОРГОВО-РАЗВЛЕКАТЕЛЬНЫЙ ЦЕНТР «SHYMKENT PLAZA» ",
s6_text:"«Shymkent Plaza» — один из крупнейших торгово-развлекательных центров города. В современном комплексе расположены кинотеатр, заведения быстрого питания, магазины популярных брендов и детские игровые площадки.  ",
s7_title:"АЛЛЕЯ «СПУТНИК»",
s7_text:"Аллея «Спутник» — современное общественное пространство для отдыха, благоустроенное в новом формате. На аллее расположены комфортные зоны отдыха для жителей и гостей города, декоративное освещение и современный фонтан.",
s8_title:"ЦЕНТРАЛЬНЫЙ УНИВЕРМАГ (ЦУМ)",
s8_text:"ЦЕНТРАЛЬНЫЙ УНИВЕРМАГ (ЦУМ) — торговый центр, предлагающий широкий выбор одежды, обуви и аксессуаров.",
s9_title:"ТОРГОВО-РАЗВЛЕКАТЕЛЬНЫЙ ЦЕНТР «MEGA PLANET» ",
s9_text:"«Mega Planet» — крупный торгово-развлекательный центр, работающий с 2007 года. В центре расположены кинотеатр, развлекательные зоны, различные магазины и фуд-корт.",
s10_title:"«ЦЕНТРАЛЬНЫЙ» ПАРК №1",
s10_text:"Центральный парк — историческое место отдыха, основанное в 1925 году. Парк создаёт комфортные условия для прогулок, отдыха, занятий спортом и семейного досуга.  ",
s11_title:"«ЦЕНТРАЛЬНЫЙ» ПАРК №2",
s11_text:"Центральный парк является одним из важных объектов культурной и общественной жизни Шымкента. Здесь созданы комфортные условия для отдыха жителей и гостей города. ",
s12_title:"ТЕАТР «ЮМОРА И САТИРЫ»",
s12_text:"Театр юмора и сатиры города Шымкент является культурным учреждением, направленным на развитие искусства художественного слова и сценической комедии. ",
s13_title:"«ЯПОНСКИЙ САД»",
s13_text:"Парк «Японский сад» — одно из живописных мест, предназначенных для семейного отдыха. Территория парка благоустроена в стиле японского сада с акцентом на природную гармонию. Здесь расположены водные элементы, зоны отдыха и специальные пространства для медитации.",
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
    s1_title:"EDUCATIONAL TOUR",
s1_text:"Tour №3",
s2_title:"ARBAT PEDESTRIAN STREET №1",
s2_text:"Arbat Pedestrian Street is a modern promenade located in the heart of the city. The area features fountains, flower-lined walkways, street art installations, cultural events, and a gastronomic zone offering both traditional and contemporary cuisine.",
s3_title:"ARBAT PEDESTRIAN STREET №2",
s3_text:"Arbat Pedestrian Street is an integral part of Shymkent’s cultural and tourist life. It showcases street art, creative exhibitions, and various cultural initiatives, making it a vibrant public space for residents and visitors alike.",
s4_title:"«CITY» PARK",
s4_text:"The «CITY» PARK is a modern recreational and entertainment area. The park features fountains, water attractions, a waterfront promenade, sports facilities, jogging paths, and designated areas for family walks and leisure activities.",
s5_title:"«RUSSIAN DRAMA» THEATRE ",
s5_text:"The Russian Drama Theatre is a cultural institution established in 1929. Its repertoire includes performances of various genres for both children and adults, contributing significantly to the city's cultural life.",
s6_title:"«SHYMKENT PLAZA» SHOPPING AND ENTERTAINMENT CENTER ",
s6_text:"Shymkent Plaza is one of the largest shopping and entertainment centers in the city. The modern complex features a cinema, fast-food restaurants, stores of popular international and local brands, and children's play areas.",
s7_title:"«SPUTNIK» ALLEY",
s7_text:"Sputnik Alley is a modern public recreation space developed in a contemporary urban style. The alley offers comfortable leisure areas for residents and visitors, decorative lighting, and a modern fountain, creating a pleasant atmosphere for relaxation. ",
s8_title:"CENTRAL DEPARTMENT STORE (TSUM)",
s8_text:"The Central Department Store (TSUM) is a shopping center offering a wide selection of clothing, footwear, accessories, and various consumer goods, making it a popular shopping destination in the city.",
s9_title:"«MEGA PLANET» SHOPPING AND ENTERTAINMENT CENTER",
s9_text:"Mega Planet is a large shopping and entertainment complex that has been operating since 2007. The center includes a cinema, entertainment zones, a variety of retail stores, and a food court, providing a comprehensive leisure experience for visitors.",
s10_title:"«CENTRAL» PARK №1 ",
s10_text:"Central Park is a historic recreational area established in 1925. The park provides comfortable conditions for walking, relaxation, sports activities, and family leisure, making it one of the city's favorite destinations. ",
s11_title:"«CENTRAL» PARK №2 ",
s11_text:"Central Park is one of the key cultural and public landmarks of Shymkent. The park offers comfortable facilities for recreation and relaxation for both residents and visitors, serving as an important community gathering place. ",
s12_title:"«HUMOR AND SATIRE» THEATRE ",
s12_text:"The Shymkent Humor and Satire Theatre is a cultural institution dedicated to the development of literary performance art and stage comedy. Its productions combine entertainment with social commentary and artistic expression.",
s13_title:"«JAPANESE» GARDEN",
s13_text:"The Japanese Garden is one of the city's most picturesque destinations for family recreation. Designed in the traditional Japanese garden style, it emphasizes harmony with nature and features water elements, relaxation areas, and specially designated spaces for meditation and quiet reflection.",
  }
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/ARBAT1.mp3",ru:"audio/ARBATR1.mp3",en:"audio/ARBAT12.mp3"},
  2:{kz:"audio/ARBAT2.mp3",ru:"audio/arbatru.mp3",en:"audio/ARBAT22.mp3"},
  3:{kz:"audio/CITYSAYABAQ.mp3",ru:"audio/cityy.mp3",en:"audio/Citypa.mp3"},
  4:{kz:"audio/ORYSDRAMA.mp3",ru:"audio/RUSSKIITEATR.mp3",en:"audio/RUSSTEATR.mp3"},
  5:{kz:"audio/PLAZA.mp3",ru:"audio/SHYMPLAZA.mp3",en:"audio/SHYMPLAZAEN.mp3"},
  6:{kz:"audio/SPUTNIK.mp3",ru:"audio/ALEASPUTNIK.mp3",en:"audio/SPUTNIKALEA.mp3"},
  7:{kz:"audio/ORTALYQ.mp3",ru:"audio/CUM.mp3",en:"audio/CUMEN.mp3"},
  8:{kz:"audio/MEGA.mp3",ru:"audio/PLANET.mp3",en:"audio/MEGAEN.mp3"},
  9:{kz:"audio/ORTALYQ1.mp3",ru:"audio/CENTRALPARK.mp3",en:"audio/CENTRPARK1.mp3"},
  10:{kz:"audio/ORTALYQ2.mp3",ru:"audio/CENTRALPAR2.mp3",en:"audio/CENTRPARK2.mp3"},
  11:{kz:"audio/AZIL.mp3",ru:"audio/SATIRATEATR.mp3",en:"audio/SATIRAEN.mp3"},
  12:{kz:"audio/ZHAPON.mp3",ru:"audio/yapon.mp3",en:"audio/JAPANPARK.mp3"},
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
            map = DG.map('map', { center: [42.319236,69.584081], zoom: 15 });

            // БАСТАПҚЫ НҮКТЕЛЕР (Фотолары мен аттары өзгеріссіз)
            const points = [
{lat: 42.319236, lng: 69.584081, img: "images/tur3.0.jpg", text: "«ARBAT» ZHAYAU ZHURGINSHILER KOSHESI №1"},
    {lat: 42.315808, lng: 69.587509, img: "images/tur3.1.jpeg", text: "«ARBAT» ZHAYAU ZHURGINSHILER KOSHESI №2"},
    {lat: 42.318185, lng: 69.582647, img: "images/CITY.jpg", text: "«CITY» PARK"},
    {lat: 42.315659, lng: 69.586688, img: "images/tur3.2.jpg", text: "«ORYS DRAMA» TEATR"},
    {lat: 42.315052, lng: 69.587536, img: "images/tur3.3.jpg", text: "«SHYMKENT PLAZA» SAUDA OIYN-SAUYQ ORTALYGY"},
    {lat: 42.316977, lng: 69.592108, img: "images/tur3.4.webp", text: "«SPUTNIK» ALLEIASY"},
    {lat: 42.318197, lng: 69.595949, img: "images/tur3.5.jpg", text: "ORTALYQ AMBEBAP DUKENI (TSUM)"},
    {lat: 42.319042, lng: 69.596593, img: "images/tur3.6.png", text: "«MEGA PLANET» SAUDA OIYN-SAUYQ ORTALYGY"},
    {lat: 42.317333, lng: 69.600733, img: "images/tur3.7.jpg", text: "«ORTALYQ» SAYABAQ №1"},
    {lat: 42.315475, lng: 69.598199, img: "images/tur3.7.jpg", text: "«ORTALYQ» SAYABAQ №2"},
    {lat: 42.314832, lng: 69.60221,  img: "images/AZIL.jpg", text: "«AZIL-SYQAQ JANE SATIRA» TEATRY"},
    {lat: 42.317753, lng: 69.606207, img: "images/JAPON.jpg", text: "«ZHAPON» SAYABAGY"},
            ];
            // 1. ЖОЛ СЫЗЫҒЫ (pathPoints - бұл жолдың иілісі, оны қалағаныңызша толықтырыңыз)
            // Мұнда бастапқы нүктелерді қолданамыз, бірақ арасына иілістерді қосамыз
            const pathPoints = [
                [42.319236,69.584081],
                [42.318256, 69.582525],
                [42.318152, 69.582669],
                [42.318256, 69.582525],
                [42.317582, 69.581623],
                [42.316558, 69.584504],
                [42.314736, 69.587028],// 1,2
                [42.315103, 69.587461],
                [42.314736, 69.587028],
                [42.315056, 69.586675],
                [42.315384, 69.587123],
                [42.315674, 69.58672],
                [42.315384, 69.587123],
                [42.315695, 69.587506],
                [42.316968, 69.589356],
                [42.317034, 69.589784],
                [42.316721, 69.591984],
                [42.316644, 69.592296],
                [42.316861, 69.592315],
                [42.316644, 69.592296],
                [42.316015, 69.595769],
                [42.318388, 69.596669],
                [42.318155, 69.59587],
                [42.318388, 69.596669],
                [42.318623, 69.596766],
                [42.318958, 69.596592],
                [42.318623, 69.596766],
                [42.318414, 69.596677],
                [42.317395, 69.601026],
                [42.317333, 69.600733],
                [42.317395, 69.601026],
                [42.316308, 69.605679],
                [42.317688, 69.60627],
                [42.316308, 69.605679],
                [42.318429, 69.596653],
                [42.316007, 69.595781],
                [42.315291, 69.598042],
                [42.315405, 69.598098],
                [42.315291, 69.598042],
                [42.314071, 69.602137],
                [42.31476, 69.602411],
                [42.314823, 69.602161],
                [42.31476, 69.602411],
                [42.316863, 69.603326],
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
