let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.titulo != undefined &&
        body.autor != undefined &&
        body.ano != undefined &&
        body.genero != undefined &&
        body.titulo.trim() !== "" &&
        body.autor.trim() !== "" &&
        body.genero.trim() !== "" &&
        typeof body.ano === "number" &&
        body.ano > 0
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero 
        };
    }
};

module.exports = model;