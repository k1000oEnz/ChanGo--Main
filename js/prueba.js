const express = require('express');
const sql = require('mssql');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

app.post('/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;
    const pool = await sql.connect(config);
    
    const result = await pool.request()
        .input('usernameOrEmail', sql.NVarChar, usernameOrEmail)
        .query('SELECT PasswordHash FROM Users WHERE Username = @usernameOrEmail OR Email = @usernameOrEmail');
    
    if (result.recordset.length > 0) {
        const user = result.recordset[0];
        const match = await bcrypt.compare(password, user.PasswordHash);
        
        if (match) {
            res.send('Login exitoso');
        } else {
            res.status(401).send('Credenciales inválidas');
        }
    } else {
        res.status(401).send('Credenciales inválidas');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
