//Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan.

const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
    },
    {
        method : 'GET',
        path : '/notes',
        handler : getAllNotesHandler,
    },

    //routes untuk/agar bisa menampilkan detail catatan
    {
        method : 'GET',
        path : '/notes/{id}',
        handler : getNoteByIdHandler,
    },

    //routes untuk/agar bisa mengubah catatan. KRITERIA KE 3
    {
        method : 'PUT',
        path : '/notes/{id}',
        handler : editNoteByIdHandler,
    },

    //routes untuk/agar menghapus catatan. KRITERIA TERAKHIR
    {
        method : 'DELETE',
        path : '/notes/{id}',
        handler : deleteNoteByIdHandler ,
    },
];




module.exports = routes;