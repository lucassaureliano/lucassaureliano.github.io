class MyHeader extends HTMLElement{
    connectedCallback() {
        //createElement = cria uma elemento HTML baseado numa TAG especificada
        const header = document.createElement("header");
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");

        const myLinks = [
            ["Google", "https://www.google.com.br/"],
            ["Bing", "https://www.bing.com/?cc=br"],
            ["DuckDuckGo", "https://duckduckgo.com/"],
            ["Ecosia", "https://www.ecosia.org/"]

        ]

        for(let i = 0; i < myLinks.length; i++){
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.setAttribute("href", "https://www.google.com.br/");
            a.textContent = `myLinks[i][1]`;
            li.appendChild(a);
            ul.appendChild(li);
        }

        nav.appendChild(ul);
        header.appendChild(nav);
        this.appendChild(header);

    }

}

customElements.define("my-header", MyHeader);