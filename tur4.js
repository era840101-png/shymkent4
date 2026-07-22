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
   s1_title:"ТАРИХИ ҚАЛА",
    s1_text:"№4 Тур",
    s2_title:"ТЕМІРЖОЛ ВОКЗАЛЫ",
    s2_text:"1916 жылы Шымкент теміржол вокзалы — қаланың маңызды көлік инфрақұрылымының бірі. Бүгінде заманауи талаптарға сай жаңартылған вокзал жолаушыларға жоғары деңгейдегі қызмет көрсетіп, қолайлы жағдайларымен және кеңейтілген өткізу мүмкіндігімен ерекшеленеді.",
    s3_title:"«ҚОШҚАР АТА» ӨЗЕНІ",
    s3_text:"«Қошқар ата» өзені — мөлдір бұлақ суымен танымал табиғи орындардың бірі. Өзен жағалауында серуендеуге арналған әсем аллеялар мен демалыс аймақтары орналасқан.",
    s4_title:"«ОРДАБАСЫ» МЕШІТІ",
    s4_text:"«Ордабасы» мешіті — қала орталығында орналасқан сәулетті әрі заманауи діни ғимарат. Мешіт өзінің әдемі архитектурасымен және рухани маңызымен ерекшеленеді.",
    s5_title:"«ЖЕР АНА» МОНУМЕНТІ",
    s5_text:"«Жер ана» монументі — тәуелсіздік пен бірлікті бейнелейтін сәулеттік ескерткіш. Оның биіктігі 34 метр. «Тәуелсіздік» саябағы мен «Алтын көпір» кешенімен байланысып, маңызды сәулеттік ансамбль құрайды.",
    s6_title:"«ТӘУЕЛСІЗДІК» САЯБАҒЫ №1",
    s6_text:"«Тәуелсіздік» саябағы — 2011 жылы ашылған тарихи-мәдени демалыс орны. Саябақта Тәуелсіздік аркасы мен ел тарихын бейнелейтін монументтер орналасқан.",
    s7_title:"«ТӘУЕЛСІЗДІК» САЯБАҒЫ №2",
    s7_text:"Тәуелсіздік саябағындағы Мемлекеттік Ту алаңы — Қазақстан Республикасының басты мемлекеттік рәміздерінің бірі саналатын Көк Туға арналған ерекше орын.",
    s8_title:"«АЛТЫН ШАҢЫРАҚ»",
    s8_text:"«Алтын шаңырақ» — халықтар достығы мен бірлігін бейнелейтін символдық ескерткіш. Бұл нысан татулық пен ынтымақтың белгісі болып саналады.",
    s9_title:"«SHYMQALA» ЭТНОАУЫЛЫ",
    s9_text:"«Shymqala» этноауылы — қазақ халқының көшпелі өмірі мен ұлттық дәстүрін таныстыратын мәдени кешен. Мұнда ұлттық қолөнер, салт-дәстүр және этнографиялық көріністер ұсынылады.",
    s10_title:"«SHYMQALA» ТАРИХИ-МӘДЕНИ КЕШЕНІ",
    s10_text:"«Shymqala» кешені — ежелгі қаланың тарихи келбетін көрсететін ашық аспан астындағы музей. Кешен келушілерді көне тарихпен және мәдени мұрамен таныстырады.",
    s11_title:"ФИЛАРМОНИЯ",
    s11_text:"Филармония — 1930 жылдан бері жұмыс істеп келе жатқан мәдениет және музыка орталығы. Мұнда концерттер, музыкалық кештер және түрлі шығармашылық шаралар өткізіледі.",
    s12_title:"«ПУШКИН» КІТАПХАНАСЫ",
    s12_text:"«Пушкин» кітапханасы – 1899 жылы ашылған көне мәдени-ағарту мекемелерінің бірі. Кітапхана заманауи оқырмандарға қызмет көрсетіп, бай кітап қорымен ерекшеленеді.",
    s13_title:"«ШӘМШІ ӘЛЕМІ» САЯБАҒЫ",
    s13_text:"«Шәмші әлемі» сквері — музыка мен мәдениетке арналған ерекше демалыс орны. Сквер қазақ музыкасының дамуына үлес қосқан сазгер Шәмші Қалдаяқовтың құрметіне аталған.",
    s14_title:"МУЗЫКАЛЫҚ СУБҰРҚАҚ",
    s14_text:"Музыкалық субұрқақ — жарық, су және лазерлік шоумен ерекшеленетін заманауи демалыс орны. Кешкі уақытта мұнда әсем көріністер ұйымдастырылады.",
    s15_title:"ҚЫРҒЫ БАЗАР",
    s15_text:"Қырғы базар — қаладағы ең көне әрі ірі сауда орындарының бірі.",
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
    s1_title:"ИСТОРИЧЕСКИЙ ГОРОД",
    s1_text:"Тур №4",
    s2_title:"ЖЕЛЕЗНОДОРОЖНЫЙ ВОКЗАЛ ",
    s2_text:"Железнодорожный вокзал Шымкента, построенный в 1916 году, является одним из важнейших объектов транспортной инфраструктуры города. Сегодня обновлённый в соответствии с современными требованиями вокзал обеспечивает высокий уровень обслуживания пассажиров, отличаясь комфортными условиями и увеличенной пропускной способностью. ",
    s3_title:"РЕКА «КОШКАР АТА»",
    s3_text:"Река «Кошкар ата» — одно из природных мест города, известное своей чистой родниковой водой. Вдоль реки расположены благоустроенные аллеи и зоны отдыха для прогулок",
    s4_title:"МЕЧЕТЬ «ОРДАБАСЫ»",
    s4_text:"Мечеть «Ордабасы» — современное архитектурное религиозное сооружение, расположенное в центре города. Мечеть отличается красивой архитектурой и имеет важное духовное значение. ",
    s5_title:"МОНУМЕНТ «ЖЕР АНА» ",
    s5_text:"Монумент «Жер Ана» — архитектурный памятник, символизирующий независимость и единство. Его высота составляет 34 метра. Вместе с парком Независимости и комплексом «Алтын көпір» он образует важный архитектурный ансамбль. ",
    s6_title:"ПАРК «НЕЗАВИСИМОСТИ» №1",
    s6_text:"Парк «Независимости» — историко-культурная зона отдыха, открытая в 2011 году. На территории парка расположены Арка Независимости и монументы, отражающие историю страны. ",
    s7_title:"ПАРК «НЕЗАВИСИМОСТИ» №2",
    s7_text:"Площадь Государственного Флага в парке Независимости — особое место, посвящённое Государственному флагу Республики Казахстан, одному из главных государственных символов страны.",
    s8_title:" «АЛТЫН ШАНЫРАК»",
    s8_text:"«Алтын шанырак» — символический памятник, олицетворяющий дружбу народов и единство. Этот объект считается символом согласия и взаимопонимания. ",
    s9_title:"ЭТНОАУЛ «SHYMQALA» ",
    s9_text:"Этноаул «Shymqala» — культурный комплекс, знакомящий посетителей с кочевым образом жизни и национальными традициями казахского народа. Здесь представлены народные ремёсла, обычаи и этнографические экспозиции. ",
    s10_title:"ИСТОРИКО-КУЛЬТУРНЫЙ КОМПЛЕКС «SHYMQALA» ",
    s10_text:"Комплекс «Shymqala» представляет собой музей под открытым небом, отражающий исторический облик древнего города. Комплекс знакомит посетителей с древней историей и культурным наследием региона.",
    s11_title:"ФИЛАРМОНИЯ",
    s11_text:"Филармония — центр культуры и музыкального искусства, работающий с 1930 года. Здесь проводятся концерты, музыкальные вечера и различные творческие мероприятия. ",
    s12_title:"БИБЛИОТЕКА ИМЕНИ ПУШКИНА",
    s12_text:"Библиотека имени Пушкина — одно из старейших культурно-просветительских учреждений города, открытое в 1899 году. Библиотека отличается богатым книжным фондом и современным обслуживанием читателей. ",
    s13_title:"ПАРК «МИР ШАМШИ»",
    s13_text:" Парк «Мир Шамши» — особое место отдыха, посвящённое музыке и культуре. Парк назван в честь выдающегося казахского композитора Шамши Калдаякова, внёсшего значительный вклад в развитие национальной музыки. ",
    s14_title:"МУЗЫКАЛЬНЫЙ ФОНТАН",
    s14_text:"Музыкальный фонтан — современный объект отдыха, сочетающий световые, водные и лазерные шоу. В вечернее время здесь проводятся красочные представления",
    s15_title:"РЫНОК «КЫРГЫ БАЗАР»",
    s15_text:"«Кыргы базар» — один из старейших и крупнейших рынков города, пользующийся популярностью среди жителей и гостей Шымкента. "
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
    s1_title:"HISTORICAL CITY",
    s1_text:"Tour №4",
    s2_title:"RAILWAY STATION",
    s2_text:"Shymkent Railway Station, built in 1916, is one of the city’s most important transportation infrastructure facilities. Today, the station has been modernized to meet contemporary standards and provides a high level of passenger service, offering comfortable facilities and increased capacity.",
    s3_title:"«KOSHKAR ATA» RIVER",
    s3_text:"The Koshkar Ata River is one of the city's natural landmarks, renowned for its crystal-clear spring water. Landscaped promenades and recreational areas along the river provide excellent opportunities for walking and relaxation.",
    s4_title:"«ORDABASY» MOSQUE",
    s4_text:"Ordabasy Mosque is a modern religious and architectural landmark located in the city center. The mosque is distinguished by its elegant design and serves as an important spiritual center for residents and visitors.",
    s5_title:"«ZHER ANA» MONUMENT",
    s5_text:"The Zher Ana Monument is an architectural landmark symbolizing independence and national unity. Standing 34 meters tall, it forms an important architectural ensemble together with Independence Park and the Altyn Kopir complex.",
    s6_title:"«INDEPENDENCE» PARK №1",
    s6_text:"Independence Park is a historical and cultural recreational area that was opened in 2011. The park features the Independence Arch and several monuments reflecting the history and achievements of the Republic of Kazakhstan. ",
    s7_title:"«INDEPENDENCE» PARK №2",
    s7_text:"The State Flag Square, located within Independence Park, is a special site dedicated to the National Flag of the Republic of Kazakhstan, one of the country’s most important state symbols. ",
    s8_title:"«ALTYN SHANYRAQ»",
    s8_text:"Altyn Shanyraq is a symbolic monument representing friendship, unity, and harmony among the people of Kazakhstan. It is widely regarded as a symbol of peace, mutual understanding, and national solidarity.",
    s9_title:"«SHYMQALA» ETHNO-VILLAGE",
    s9_text:"The Shymqala Ethno-Village is a cultural complex that introduces visitors to the nomadic lifestyle and traditional customs of the Kazakh people. The site features traditional crafts, customs, and ethnographic exhibitions that showcase the rich cultural heritage of Kazakhstan.",
    s10_title:"«SHYMQALA» HISTORICAL AND CULTURAL COMPLEX",
    s10_text:"The Shymqala Historical and Cultural Complex is an open-air museum that recreates the historical appearance of the ancient city. Visitors can explore the region’s rich history and cultural heritage through authentic reconstructions and educational exhibits.",
    s11_title:"PHILHARMONIC HALL",
    s11_text:"The Philharmonic Hall is a center of culture and musical arts that has been operating since 1930. It hosts concerts, musical evenings, and a variety of creative and cultural events throughout the year.",
    s12_title:"«PUSHKIN» LIBRARY ",
    s12_text:"The Pushkin Library is one of the oldest cultural and educational institutions in the city, having been established in 1899. The library is known for its extensive collection of books and its modern services for readers and researchers.",
    s13_title:"«SHAMSHI ALEMI» PARK ",
    s13_text:"Shamshi Alemi Park is a unique recreational space dedicated to music and culture. The park is named after the outstanding Kazakh composer Shamshi Kaldayakov, who made a significant contribution to the development of national music. ",
    s14_title:"MUSICAL FOUNTAIN",
    s14_text:"The Musical Fountain is a modern recreational attraction that combines water, light, and laser effects into spectacular performances. In the evening, visitors can enjoy colorful shows and vibrant visual displays.",
    s15_title:"«UPPER BAZAAR» CENTRAL MARKET",
    s15_text:"«UPPER BAZAAR» is one of the oldest and largest markets in Shymkent. Popular among both residents and visitors, the market offers a wide variety of goods and provides a lively atmosphere that reflects the city’s vibrant commercial life."
  }
};
/* AUDIO */
const audioData = {
  1:{kz:"audio/TEMIRZHOL.mp3",ru:"audio/VOKZALRU.mp3",en:"audio/JDVOKZAL.mp3"},
  2:{kz:"audio/QOSHQAR.mp3",ru:"audio/KOSHKARATA.mp3",en:"audio/KOSHKAREN.mp3"},
  3:{kz:"audio/ORDABASY.mp3",ru:"audio/NECHETORDABASY.mp3",en:"audio/MECHETEN.mp3"},
  4:{kz:"audio/ZHER.mp3",ru:"audio/jerana1.mp3",en:"audio/JERANA.mp3"},
  5:{kz:"audio/TAUELSIZDIK.mp3",ru:"audio/PARKNEZAVISIMOSTI.mp3",en:"audio/TAUELSIZDIKEN.mp3"},
  6:{kz:"audio/TAUELSIZDISAYABAGY.mp3",ru:"audio/NEZAVISIMOSTI2.mp3",en:"audio/TAUELSIZDIKEN2.mp3"},
  7:{kz:"audio/SHANYRAQ.mp3",ru:"audio/ALTYNSHANIRAK.mp3",en:"audio/SHANIRAK.mp3"},
  8:{kz:"audio/SHYMQALA.mp3",ru:"audio/ETNOAUIL.mp3",en:"audio/ETNOAUL.mp3"},
  9:{kz:"audio/SHYMQALKESHENI.mp3",ru:"audio/CITADEL.mp3",en:"audio/CITADELEN.mp3"},
  10:{kz:"audio/SHAMSHI.mp3",ru:"audio/FILARMONIA.mp3",en:"audio/FILARMONIAEN.mp3"},
  11:{kz:"audio/PUSHKIN.mp3",ru:"audio/PUSHKINBIBLIOTEKA.mp3",en:"audio/PUSHKINEN.mp3"},
  12:{kz:"audio/SHAMSHI2.mp3",ru:"audio/PARKSHAMSHI.mp3",en:"audio/PARKSHAMSHIEEN.mp3"},
  13:{kz:"audio/ZHANA.mp3",ru:"audio/Фонru.mp3",en:"audio/ountain.mp3"},
  14:{kz:"audio/QYRGY.mp3",ru:"audio/VERHNYYPINOK.mp3",en:"audio/VERHNYBAZAR.mp3"},
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
            map = DG.map('map', { center: [42.29897,69.609862], zoom: 15 });

            // БАСТАПҚЫ НҮКТЕЛЕР (Фотолары мен аттары өзгеріссіз)
            const points = [
{lat: 42.29897,  lng: 69.609862, img: "images/tur4.1.jpg", text: "TEMIRZHOL VOKZALY"},
    {lat: 42.309022, lng: 69.600477, img: "images/tur4.2.png", text: "«QOSHQAR ATA» OZENI"},
    {lat: 42.309142, lng: 69.601094, img: "images/tur4..3.jpg", text: "«ORDABASY» MESHITI"},
    {lat: 42.309524, lng: 69.600224, img: "images/JERANA.png", text:"«ZHER ANA» MONUMENTI"},
    {lat: 42.308656, lng: 69.599568, img: "images/tur4.4.jpg", text:"«TAUELSIZDIK» SAYABAGY №1"},
    {lat: 42.305683, lng: 69.600616, img: "images/tur4.4.jpg", text:"«TAUELSIZDIK» SAYABAGY №2"},
    {lat: 42.306743, lng: 69.599114, img: "images/tur4.5.jpg", text: "«ALTYN SHANYRAQ»"},
    {lat: 42.305367, lng: 69.595766, img: "images/tur4.6.jpg", text: "«SHYMQALA» ETNOAUYLY"},
    {lat: 42.306652, lng: 69.5937151, img: "images/tur4.6.jpg", text: "«SHYMQALA» TARIKHI-MADENI KESHENI"},
    {lat: 42.311048, lng: 69.557174, img: "images/tur4.8.png", text: "FILARMONIA"},
    {lat: 42.313377, lng: 69.601395, img: "images/tur4.11.png", text: "«PUSHKIN» KITAPHANASY"},
    {lat: 42.312082, lng: 69.604947, img: "images/tur4.12.png", text: "«SHAMSHI ALEMI» SAYABAGY"},
    {lat: 42.312698, lng: 69.607512, img: "images/tur4.13.png", text: "MUZYKALYQ SUBURQAQ"},
    {lat: 42.309826, lng: 69.603993, img: "images/tur4.14.jpg", text: "QYRGY BAZAR"},
            ];
            // 1. ЖОЛ СЫЗЫҒЫ (pathPoints - бұл жолдың иілісі, оны қалағаныңызша толықтырыңыз)
            // Мұнда бастапқы нүктелерді қолданамыз, бірақ арасына иілістерді қосамыз
            const pathPoints = [
                [42.29897,  69.609862],
                [42.304455, 69.602307],// 1,2
                [42.305705, 69.602329],
                [42.306395, 69.602218],
                [42.30709, 69.601713],
                [42.308281, 69.600045],
                [42.308594, 69.59984],
                [42.309071, 69.600045],
                [42.309524, 69.600224],
                [42.309071, 69.600045],
                [42.308968, 69.600511],
                [42.308994, 69.600729],
                [42.308897, 69.601063],
                [42.308994, 69.600729],
                [42.308968, 69.600511],
                [42.309071, 69.600045],
                [42.309784, 69.600352],
                [42.309513, 69.601849],
                [42.309401, 69.603403],
                [42.310534, 69.60348],
                [42.310941, 69.603787],
                [42.31159, 69.604538],
                [42.31305, 69.60657],
                [42.312789, 69.60766],
                [42.31305, 69.60657],
                [42.314008, 69.602146],
                [42.313282, 69.601833],
                [42.309902, 69.600447],
                [42.309071, 69.600045],
                [42.307872, 69.599566],
                [42.313282, 69.601833],
                [42.306877, 69.599178],
                [42.313282, 69.601833],
                [42.307872, 69.599566],
                [42.309071, 69.600045],
                [42.309902, 69.600447],
                [42.309473, 69.599348],
                [42.30905, 69.597503],
                [42.308884, 69.59693],
                [42.308123, 69.595773],
                [42.307996, 69.593123],
                [42.304911, 69.593386],
                [42.304913, 69.594154],
                [42.3057, 69.597757],
                [42.305609, 69.600647],
                [42.304455, 69.602307],
                [42.302894, 69.600151],
                [42.301605, 69.599498],
                [42.302902, 69.594123],
                [42.302897, 69.588799],
                [42.301626, 69.582411],
                [42.301858, 69.581215],
                [42.304182, 69.564468],
                [42.307761, 69.554737],
                [42.308706, 69.553599],
                [42.311228, 69.556506],
                [42.311007, 69.556931],
                
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
