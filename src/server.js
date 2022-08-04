//Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi.

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port : 5000,
        host : 'localhost', 
        routes : {
            cors : {
                origin : ['*'],
            },
        },
    });
//url untuk disable peraturan privacy di browser chrome agar aplikasi berjalan. chrome://flags/#block-insecure-private-network-requests

    server.route(routes);

    await server.start();
    console.log(`Server work at ${server.info.uri}`);
} 

init();


