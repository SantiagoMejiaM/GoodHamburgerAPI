import pool from "../config/db_config.js";

export const getAllSandwichesService = async () => {
  const result = await pool.query("SELECT sandwich FROM orders");
  return result.rows;
};

export const getAllOrdersService = async () => {
    const result = await pool.query("SELECT * FROM orders");
    return result.rows;
};

export const getAllExtrasService = async () => {
    const result = await pool.query("SELECT soft_drink, fries FROM orders");
    return result.rows;
};

export const createOrderService = async (sandwich, soft_drink, fries, total) => {
  const result = await pool.query(
    "INSERT INTO orders (sandwich, soft_drink, fries, total) VALUES ($1, $2, $3, $4) RETURNING *",
    [sandwich, soft_drink, fries, total]
  );
  return result.rows[0];
};

export const updateOrderService = async (id, sandwich, soft_drink, fries, total) => {
  const result = await pool.query(
    "UPDATE orders SET sandwich=$1, soft_drink=$2, fries=$3, total=$4 WHERE id=$5 RETURNING *",
    [sandwich, soft_drink, fries, total, id]
  );
  return result.rows[0];
};

export const deleteOrderService = async (id) => {
  const result = await pool.query(
    "DELETE FROM orders WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};