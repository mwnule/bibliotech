const express = require("express");
const book_controller = require("../controllers/book.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(book_controller.index());
});

router.get("/:id", (req, res) => {
    res.json(book_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = book_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = book_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    book_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;
