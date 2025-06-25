const TextP = document.querySelector(".tab_content .text_p");
const TabsBtn = document.querySelectorAll("#tabs  input[type=radio]")

TextP.textContent = "";


for ( const Tab of TabsBtn) {
    Tab.addEventListener("change",(event) =>{
        const id = event.target.id;
            TextP.style.animation = "none";
            TextP.offsetHeight; 
            TextP.style.animation = "fadeEffect 0.4s ease";
        switch(id) {
            case "tabs-CSS":
                TextP.textContent = "CSS (Cascading Style Sheets — «каскадные таблицы стилей») — язык стилей для оформления веб-страниц, созданных с помощью HTML. Он отвечает за визуальное представление: цвета, шрифты, отступы, расположение элементов и даже анимацию. "
                break;
            case "tabs-JS":
                TextP.textContent = "JavaScript (JS) — это интерпретируемый язык программирования высокого уровня. Это язык скриптов или сценариев, который выполняется при загрузке веб-страницы. "
                break;
            case "tabs-html":   
                TextP.textContent = "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки, который используется для создания и структурирования веб-страниц. Он помогает определять, как содержимое страницы должно отображаться в браузерах"
                break;
        }
    });
}

const SelecTab = new  Event("change");
TabsBtn[0].dispatchEvent(SelecTab);
TabsBtn[0].checked = true;