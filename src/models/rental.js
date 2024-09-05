const book_controller = require("../controllers/book.js");
const student_controller = require("../controllers/student.js");

let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        typeof body.livro_id === "number" &&
        book_controller.show(body.livro_id) &&
        typeof body.estudante_id === "number" &&
        student_controller.show(body.estudante_id) &&
        typeof body.data_aluguel === "string" &&
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(body.data_aluguel) &&
        (body.data_devolucao === undefined ||
        (typeof body.data_devolucao === "string" &&
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(body.data_devolucao)))
    ) {
        return {
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: body.data_aluguel,
            data_devolucao: body.data_devolucao || null
        };
    }
};

module.exports = model;
