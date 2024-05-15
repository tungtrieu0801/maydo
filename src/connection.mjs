import mysql from "mysql2";

const connection = mysql.createConnection({
    host: 'mysql-2bc6dade-trieutungvp-3060.f.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_HFNhW3c-btYYTEdHX-A',
    database: 'maydo',
    port:25790
});


// Kiểm tra kết nối
connection.connect(function(err) {
    if (err) {
        console.error('Lỗi kết nối:', err);
        return;
    }
    console.log('Đã kết nối thành công đến MySQL server');
});

export default connection;