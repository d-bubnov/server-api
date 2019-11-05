const express = require('express');
const app = express();
const productRoutes = express.Router();

// Require Product model in our routes module
let Product = require('../models/Product');

// Defined store route
productRoutes.route('/add').post(function (request, response) {
  let product = new Product(request.body);
  product.save()
    .then(product => {
      response
        .status(200)
        .json({
          'Message': 'Product has been added successfully',
          'Success': true,
          'Data': product._id,
        });
    })
    .catch(error => {
      response
        .status(400)
        .json({
          'Message': 'Unable to save product to the database',
          'Success': false,
          'Data': error,
        });
    });
});

// Defined get data(index or listing) route
productRoutes.route('/').get(function (request, response) {
  Product.find(function (error, products) {
    if (error) {
      response
        .status(404)
        .json({
          'Message': 'Products not found',
          'Success': false,
          'Data': error,
        });
    } else {
      response
        .status(200)
        .json({
          'Message': 'Products was found',
          'Success': true,
          'Data': products,
        });
    }
  });
});

// Defined edit route
productRoutes.route('/edit/:id').get(function (request, response) {
  let id = request.params.id;
  Product.findById(id, function (error, product) {
    if (error) {
      response
        .status(404)
        .json({
          'Message': 'Product not found',
          'Success': false,
          'Data': error,
        });
    } else {
      response
        .status(200)
        .json({
          'Message': 'Product was found',
          'Success': true,
          'Data': product,
        });
    }
  });
});

//  Defined update route
productRoutes.route('/update/:id').post(function (request, response) {
  Product.findById(request.params.id, function(error, product) {
    if (!product)
      response
        .status(404)
        .json({
          'Message': 'Product not found',
          'Success': false,
          'Data': null,
        });
    else {
      product.ProductName = request.body.ProductName;
      product.ProductDescription = request.body.ProductDescription;
      product.ProductPrice = request.body.ProductPrice;

      product
        .save()
        .then(product => {
          response
            .status(200)
            .json({
              'Message': 'Update completed',
              'Success': true,
              'Data': null,
            });
        })
        .catch(error => {
          response
            .status(400)
            .json({
              'Message': 'Unable to update product in the database',
              'Success': false,
              'Data': error,
            });
        });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (request, response) {
    Product.findByIdAndRemove({ _id: request.params.id }, function(error, product) {
      if (error) {
        response
          .status(400)
          .json({
            'Message': 'Unable to delete product in the database',
            'Success': false,
            'Data': error,
          });
      } else {
        response
          .status(200)
          .json({
            'Message': 'Successfully removed',
            'Success': true,
            'Data': null,
          });
      }
    });
});

module.exports = productRoutes;
