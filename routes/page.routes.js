const express = require("express");
const UsersService = require('../services/users.service');
const AuthenticationService = require('../services/authentication.service');
const OrdersService = require('../services/orders.service');
const ProductsService = require('../services/products.service');

const pageRoutes = express.Router();

// Login route
pageRoutes.get("/", (req, res) => {
  res.render("login");
});

pageRoutes.post("/", (req, res) => {
  const { username, password } = req.body;
  const authenticationResult = AuthenticationService.authenticate(username, password);
  
  if (authenticationResult.isAuthenticated) {
    res.redirect(`/list?page=1`); 
  } else {
    res.redirect("/list?page=1");
  }
});

// List route
pageRoutes.get("/list", async (req, res) => {
  try {
    const users = await UsersService.find();
    const currentPage = parseInt(req.query.page) || 1;

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    const usersToShow = users.slice(startIndex, endIndex);

    res.render("list", {
      title: "List",
      users: usersToShow,
      currentPage: currentPage,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Detail route for user
pageRoutes.get("/detail/:id", async (req, res) => {
  try {
    const user = await UsersService.findById(req.params.id);
    res.render("detail", { user });
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Order route
pageRoutes.get("/order", async (req, res) => {
  try {
    const orders = await OrdersService.findAll();
    res.render("order", { orders, title: "Order" });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Product route
pageRoutes.get("/product", async (req, res) => {
  try {
    const products = await ProductsService.findAll();
    res.render("product", { products, title: "Product" });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = pageRoutes;
