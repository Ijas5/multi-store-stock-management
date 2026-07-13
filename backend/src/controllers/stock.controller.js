const mongoose = require("mongoose");
const Stock = require("../models/Stock");
const Product = require("../models/Product");
const Store = require("../models/Store");

// Adjust Stock
exports.adjustStock = async (req, res) => {
  try {
    const { product, store, quantityChange } = req.body;

    if (quantityChange === 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity cannot be zero",
      });
    }

    let stock = await Stock.findOne({ product, store });

    // First time adding stock
    if (!stock) {
      if (quantityChange < 0) {
        return res.status(400).json({
          success: false,
          message: "Stock record not found",
        });
      }

      stock = await Stock.create({
        product,
        store,
        quantity: quantityChange,
      });

      return res.status(201).json({
        success: true,
        message: "Stock created successfully",
        data: stock,
      });
    }

    // Prevent negative stock
    if (stock.quantity + quantityChange < 0) {
      return res.status(400).json({
        success: false,
        message: "Insufficient stock",
      });
    }

    stock.quantity += quantityChange;

    await stock.save();

    res.json({
      success: true,
      message: "Stock adjusted successfully",
      data: stock,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Transfer Stock
exports.transferStock = async (req, res) => {
  try {
    const { product, fromStore, toStore, quantity } = req.body;

    if (quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be greater than zero",
      });
    }

    if (fromStore === toStore) {
      return res.status(400).json({
        success: false,
        message: "Source and destination stores cannot be the same",
      });
    }

    // Find source stock
    const source = await Stock.findOne({
      product,
      store: fromStore,
    });

    if (!source) {
      return res.status(404).json({
        success: false,
        message: "Source stock not found",
      });
    }

    if (source.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient stock",
      });
    }

    // Reduce source stock
    source.quantity -= quantity;
    await source.save();

    // Find destination stock
    let destination = await Stock.findOne({
      product,
      store: toStore,
    });

    if (!destination) {
      destination = await Stock.create({
        product,
        store: toStore,
        quantity: quantity,
      });
    } else {
      destination.quantity += quantity;
      await destination.save();
    }

    res.status(200).json({
      success: true,
      message: "Stock transferred successfully",
      data: {
        fromStore: source,
        toStore: destination,
      },
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Stock
exports.getStock = async (req, res) => {
  try {
    const filter = {};

    if (req.query.threshold) {
      filter.quantity = {
        $lte: Number(req.query.threshold),
      };
    }

    const stock = await Stock.find(filter)
      .populate("product")
      .populate("store");

    res.json({
      success: true,
      count: stock.length,
      data: stock,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};