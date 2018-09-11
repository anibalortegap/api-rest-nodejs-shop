'use strict'

const statusCodeOK = 200;
const statusCodeErr = 500;
const statusNoFound = 404;
const productModel = require('../models/product');

function getProducts(req, res){
    productModel.find({}, (err, products) => {
		if(err){
			return res.status(statusCodeErr).send({message: `error al realizar la peticion: ${err}`});
		}
		else if(!products) {
			return res.status(statusNoFound).send({message: `no existen productos`});
		}
		res.status(statusCodeOK).send({ products });	
	});
}

function getProduct(req, res){
    let productId = req.params.productId;
	productModel.findById(productId, (err, product) => {
		if(err){
			return res.status(statusCodeErr).send({message: `error al realizar la peticion: ${err}`});
		}
		else if(!product) {
			return res.status(statusNoFound).send({message: `el producto no existe`})
		}
		res.status(statusCodeOK).send({ product })
		console.log(product);
	})
}

function saveProduct(req, res){
    console.log('POST /api/product');
	console.log(req.body);
	let product = new productModel();
	product.name = req.body.name,
	product.price = req.body.price,
	product.currency = req.body.currency,
	product.category = req.body.category,
	product.vendor = req.body.vendor,
	product.payment = req.body.payment,
	product.location = req.body.location,
	product.description = req.body.description	

	product.save((err, productStored) => {
		if(err) {
			res.status(statusCodeErr).send({
				message: `error grabando en la base de datos: ${err}`
			});
		}

		res.status(statusCodeOK).send({
			product: productStored
		});
		
	});

}

function deleteProduct(req, res){
    let productId = req.params.productId;
	productModel.findByIdAndRemove(productId, (err, product) => {
		if(err) {
			return res.status(statusCodeErr).send({message: `error al realizar la peticion: ${err}`});
		}
		else if(!product){
			return res.status(statusNoFound).send({message: `el producto no existe` });
		}
		res.status(statusCodeOK).send({message: `el producto fue eliminado correctamente` });
	});
}

function updateProduct(req, res){
    let productId = req.params.productId;
	let updateDocument = req.body;
	productModel.findByIdAndUpdate(productId, updateDocument, (err, productUpdated) => {
		if(err) {
			return res.status(statusCodeErr).send({message: `error al actualizar el producto: ${err}`});
		}
		else if(!productUpdated) {
			return res.status(statusNoFound).send({message: `el producto no existe`});
		}
		 res.status(statusCodeOK).send( {message: `el producto fue actualizado de forma`, product: productUpdated });
	});

}

module.exports = {
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}