const sql = require('mssql');

// Configuration object for connecting to the database
const config = {
    user: 'LAPTOP-E1T3RGUU/Ana',
    password: '',
    server: 'LAPTOP-E1T3RGUU/SQLEXPRESS',
    database: 'oktika',
    options: {
        encrypt: true, // For Azure SQL, you need to enable encryption
        trustServerCertificate: true // For Azure SQL, you need to trust the server certificate
    }
};

// Connect to the database
async function connectToDB() {
    try {
        await sql.connect(config);
        console.log('Connected to the database');
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
}

// Call the connectToDB function to establish the connection
connectToDB();


