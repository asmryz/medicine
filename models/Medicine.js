const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const medicineSchema = new Schema({
	RowId: Number,
	SKUId: Number,
	SKUName: String,
	SKUCatId: Number,
	Category: String,
	SKUSubCatId: Number,
	Sub_Category: String,
	SKURemarks: String,
	SKUActive: String,
	SalePrice: Number,
	RetailPrice: Number,
	SKUDiscPerc: Number,
	SKUImageURL1: String,
	SKUStock: String,
	SKUBarcode: String,
	SKUGenericName: String,
	SKUManufacturer: String,
	SKUBrandId: Number,
	SKUBrandName: String,
	SKUDeptId: Number,
	SKUDeptName: String,
	SKULongDescription: String,
	SKUCId: Number,
	Class: String,
	SKUSUBCId: Number,
	SubClass: String,
	SKUPromotionId: Number,
	PromotionName: String,
	SKURemarks2: String,
	SKURemarks3: String,
	SKURemarksLong: String,
	SKUDiscPerc2: Number,
	SalePrice2: Number,
	SalePrice3: Number
})

exports.Medicine = model('Medicine', medicineSchema);
