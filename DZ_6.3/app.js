const TextP = document.querySelector(".tab_content .text_p");
const TabsBtn = document.querySelectorAll("#tabs  input[type=radio]")
const Image = document.querySelector(".tab_content img")

TextP.textContent = "";


for ( const Tab of TabsBtn) {
    Tab.addEventListener("change",(event) =>{
        const id = event.target.id;
        
            TextP.style.animation = "none";
            TextP.offsetHeight; 
            TextP.style.animation = "fadeEffect 0.8s ease";

            
            Image.style.animation = "none";
            Image.offsetHeight; 
            Image.style.animation = "fadeEffect 0.4s ease";
        switch(id) {
            case "Chrom":
                Image.alt  = "Chrom"
                Image.src = "https://cdn1.iconfinder.com/data/icons/logotypes/32/chrome-512.png"
                TextP.textContent = "Google Chrome — веб-браузер, разработанный компанией Google на базе Chromium и движка Blink (ранее WebKit); первая бета-версия для Windows вышла 2 сентября 2008 года, стабильная — 11 декабря 2008 года; по данным StatCounter, на июль 2024 года его доля на рынке составляет 65,69 %.";
                break;
            case "FireFox":
                Image.alt = "FireFox"
                Image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Antu_firefox.svg/640px-Antu_firefox.svg.png"
                TextP.textContent = "Mozilla Firefox (МФА [moʊˈzɪlə faɪəfɒks]) — свободный браузер на движке Gecko, разработкой и распространением которого занимается Mozilla Corporation. Четвёртый по популярности браузер в мире (после Google Chrome, Safari и Microsoft Edge)[24] и первый среди свободного ПО — в марте 2021 года его рыночная доля составила ▼7,49 %[25]. В России Firefox занимает четвёртое место (после Google Chrome, Яндекс.Браузер и Opera) по популярности среди браузеров для ПК с долей 5,26 % пользователей на март 2021 года[26].";
                break;
            case "Yndex": 
            Image.alt = "Yndex" 
            Image.src = "https://images.icon-icons.com/3053/PNG/512/yandex_browser_macos_bigsur_icon_189533.png" 
            TextP.textContent = "«Яндекс» — российская транснациональная компания в отрасли информационных технологий. Владеет одноимённой системой поиска в интернете, интернет-порталом и веб-службами в нескольких странах. Наиболее важное положение занимает на рынках России, Беларуси и Казахстана."
            break;
        }
    });
}

const SelecTab = new  Event("change");
TabsBtn[0].dispatchEvent(SelecTab); 
TabsBtn[0].checked = true;