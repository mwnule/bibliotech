let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.matricula != undefined &&
        body.nome != "" &&
        body.matricula != "" &&
        body.nome.trim() !== "" &&
        body.matricula.trim() !== "" &&
        body.curso.trim() !== "" &&
        typeof body.ano === "number" &&
        body.ano > 0
    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}

module.exports = model