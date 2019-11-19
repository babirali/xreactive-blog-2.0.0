let server = '';
if (process.env.PORT === '3022') {
    server = 'http://localhost:3022/';
} else if (process.env.PORT === '8080') {
    server = "http://localhost:8080/";
} else {
    server = process.env.API_ENDPOINT;
}

export default server;