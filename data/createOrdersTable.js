import pool from "../config/db_config.js";

const createOrderTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    sandwich VARCHAR(100) NOT NULL,
    soft_drink VARCHAR(100) DEFAULT NULL,
    fries BOOLEAN NOT NULL,
    total DOUBLE PRECISION NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;

  try {
    pool.query(queryText);
    console.log("Order table created if not exists");
  } catch (error) {
    console.log("Error creating orders table : ", error);
  }
};

export default createOrderTable;