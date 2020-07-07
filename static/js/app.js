$(document).ready(() => {
    $.post("/store", null, (data) => {
        let parsed = JSON.parse(data)
        let section = document.getElementById("productos")
        parsed.forEach(element => {
            section.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.Tipo}</h5>
                    <p class="card-text">
                        ${element.Descripcion}\n
                    </p>
                    <p class="card-text">
                        Precio: ${element.Precio}\n
                    </p>
                    <p class="card-text">
                        Talla: ${element.Talla}\n
                    </p>
                    <p class="card-text">
                        Existencias: ${element.Existencias}
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            `
            console.log(element)
        });
    })
})