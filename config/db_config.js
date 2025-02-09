import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'user',
    password: 'api',
    database: 'GoodHamburger'
})

export default pool;