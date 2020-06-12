class Aside extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
                <div class="aside-header">
                    <h3>Profile Creator</h3>
                </div>
                <div class="card">
                    <img src="src/img/bayu.jpg" class="aside-img">
                    <hr>
                    <table>
                        <tr>
                            <th>Name</td>
                            <td> : </td>
                            <td>Bayu alif farisqi</td>
                        </tr>
                        <tr>
                            <th>Major</td>
                            <td> : </td>
                            <td>Informatics Engineering</td>
                        </tr>
                        <tr>
                            <th>Faculty</td>
                            <td> : </td>
                            <td>Industrial of Technology</td>
                        </tr>
                        <tr>
                            <th>Addres</td>
                            <td> : </td>
                            <td>jl.Kh ali maksum, Yogyakarta</td>
                        </tr>
                    </table>
                </div>
        `;
    }
}
customElements.define("aside-element",Aside);