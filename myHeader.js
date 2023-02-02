const myLinks = [
    ["Início", "/"],
    ["Teste", "/teste.html"],
    ["Projeto 1", "/projects/projeto1.html"],
    ["Currículo", "/curriculo.pdf"],
    ["GitHub", "https://github.com/lucassaureliano"],
    ["LinkedIn", "https://linkedin.com/in/lucassaureliano"],
 
];
class MyHeader extends HTMLElement{
    connectedCallback() {
        //createElement = cria uma elemento HTML baseado numa TAG especificada
        const header = document.createElement("header");
        const titleDiv = document.createElement("div");
        const pageTitle = document.createElement("h1");

        

        
        pageTitle.textContent = "Meu Site";
        titleDiv.appendChild(pageTitle);   
        header.appendChild(titleDiv);
        header.appendChild(navBar(myLinks));
        this.appendChild(header);

    }
    
}

function navBar(webPageList){
    // Essa função pega uma lista de sites e cria a barra de navegação
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    for(let i = 0; i < webPageList.length; i++){
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", webPageList[i][1]);
        a.textContent = webPageList[i][0];
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);

    return nav;
}

customElements.define("my-header", MyHeader);