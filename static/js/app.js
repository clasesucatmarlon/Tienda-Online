$(document).ready(() => {
    $.post("/store", null, (data) => {
        let parsed = JSON.parse(data)
        let section = $("#produ")
        parsed.forEach(element => {
            console.log(`Producto: ${element.Precio}`)
        });
    })
})