import { Router } from 'express';
import { HttpStatus } from '../utils';
import { Product } from '../models';

const productRoutes = Router();

// Defined add route
productRoutes
  .route('/add')
  .post((request: any, response: any) => {
    // Create instance of Product entity
    const product = new Product(request.body);

    product
      .save()
      .then((product: any) => {
        response
          .status(HttpStatus.OK.code)
          .json({
            'Message': 'Product has been added successfully',
            'Success': true,
            'Data': product._id,
          });
      })
      .catch((error: any) => {
        response
          .status(HttpStatus.BadRequest.code)
          .json({
            'Message': 'Unable to save product to the database',
            'Success': false,
            'Data': error,
          });
      });
  });

// Defined get data(index or listing) route
productRoutes
  .route('/')
  .get((request: any, response: any) => {
    Product.find((error: any, products: any) => {
      if (error) {
        response
          .status(HttpStatus.NotFound.code)
          .json({
            'Message': 'Products not found',
            'Success': false,
            'Data': error,
          });
      } else {
        response
          .status(HttpStatus.OK.code)
          .json({
            'Message': 'Products was found',
            'Success': true,
            'Data': products,
          });
      }
    });
  });

// Defined get route
productRoutes
  .route('/get/:id')
  .get((request: any, response: any) => {
    // Get `id` parameter value from request
    const id = request.params.id;

    Product.findById(
      id,
      (error: any, product: any) => {
        if (error) {
          response
            .status(HttpStatus.NotFound.code)
            .json({
              'Message': 'Product not found',
              'Success': false,
              'Data': error,
            });
        } else {
          response
            .status(HttpStatus.OK.code)
            .json({
              'Message': 'Product was found',
              'Success': true,
              'Data': product,
            });
        }
      });
  });

//  Defined update route
productRoutes
  .route('/update/:id')
  .post((request: any, response: any) => {
    Product.findById(
      request.params.id,
      (error: any, product: any) => { // TODO: set type for product entity! (Create an interface for this case)
        if (!product) {
          response
            .status(HttpStatus.NotFound.code)
            .json({
              'Message': 'Product not found',
              'Success': false,
              'Data': null,
            });
        } else {
          const { ProductName, ProductDescription, ProductPrice } = request.body;
          // Set values
          product.ProductName = ProductName;
          product.ProductDescription = ProductDescription;
          product.ProductPrice = ProductPrice;

          product
            .save()
            .then(() => {
              response
                .status(HttpStatus.OK.code)
                .json({
                  'Message': 'Update completed',
                  'Success': true,
                  'Data': null,
                });
            })
            .catch((error: any) => {
              response
                .status(HttpStatus.BadRequest.code)
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
productRoutes
  .route('/delete/:id')
  .get((request: any, response: any) => {
    Product.findByIdAndRemove(
      { _id: request.params.id },
      (error: any) => {
        if (error) {
          response
            .status(HttpStatus.BadRequest.code)
            .json({
              'Message': 'Unable to delete product in the database',
              'Success': false,
              'Data': error,
            });
        } else {
          response
            .status(HttpStatus.OK.code)
            .json({
              'Message': 'Successfully removed',
              'Success': true,
              'Data': null,
            });
        }
      });
  });

export default productRoutes;
