class ContentElement extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }
    get value(){ 
        return this.querySelector("#searchElement").value;
    }
    render(){
        this.innerHTML = `
            <div class="search-container" id="search-container">
                <input placeholder="Search Movie..." id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
        `
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
customElements.define("content-element",ContentElement);