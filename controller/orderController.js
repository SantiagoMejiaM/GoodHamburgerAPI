import {
    getAllSandwichesService,
    getAllOrdersService,
    getAllExtrasService,
    createOrderService,
    updateOrderService,
    deleteOrderService
  } from "../model/orderModel.js";
  
  // Standardized response function
  const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
      status,
      message,
      data,
    });
  };
  
  export const createOrder = async (req, res, next) => {
    const { sandwich, soft_drink, fries } = req.body;
    let total = 0;
    try {
      switch(sandwich){
        case "Burger":
          total = 5.00;
        
        case "Egg":
          total = 4.50;

        case "Bacon":
          total = 7.00;
      }

      if(soft_drink != null && fries == 1){

        total += 4.50;

        total = total - (total * 0.2);

      }
      else if (soft_drink != null && fries == 0){

        total += 2.50;

        total = total - (total * 0.15);

      }
      else if (soft_drink == null && fries == 1){

        total += 2.00;

        total = total - (total * 0.10);

      }
      const newOrder = await createOrderService(sandwich, soft_drink, fries, total);
      handleResponse(res, 201, "Order created successfully", newOrder);
    } catch (err) {
      next(err);
    }
  };
  
  export const getAllSandwiches = async (req, res, next) => {
    try {
      const sandwiches = await getAllSandwichesService();
      handleResponse(res, 200, "Sandwiches fetched successfully", sandwiches);
    } catch (err) {
      next(err);
    }
  };

  export const getAllExtras = async (req, res, next) => {
    try {
      const extras = await getAllExtrasService();
      handleResponse(res, 200, "Extras fetched successfully", extras);
    } catch (err) {
      next(err);
    }
  };

  export const getAllOrders = async (req, res, next) => {
    try {
      const orders = await getAllOrdersService();
      handleResponse(res, 200, "Orders fetched successfully", orders);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateOrder = async (req, res, next) => {
    const { sandwich, soft_drink, fries, total } = req.body;
    try {
      const updatedOrder = await updateOrderService(req.params.id, sandwich, soft_drink, fries, total);
      if (!updatedOrder) return handleResponse(res, 404, "Order not found");
      handleResponse(res, 200, "Order updated successfully", updatedOrder);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteOrder = async (req, res, next) => {
    try {
      const deletedOrder = await deleteOrderService(req.params.id);
      if (!deletedOrder) return handleResponse(res, 404, "Order not found");
      handleResponse(res, 200, "Order deleted successfully", deletedOrder);
    } catch (err) {
      next(err);
    }
  };