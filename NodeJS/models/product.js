// const fs = require('fs');
// const path = require('path');
// const db = require('../util/database');
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;



// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

// //   save() {
// //       getProductsFromFile(products => {
// //         if (this.id) {
// //               const existingProductIndex = products.findIndex(prod => prod.id === this.id);
// //               const updateProducts = [...products];
// //               updateProducts[existingProductIndex] = this;
// //               fs.writeFile(p, JSON.stringify(updateProducts), err => {
// //                 console.log(err);
// //               });
// //         } else {
// //             this.id = Math.random().toString();
// //             products.push(this);
// //             fs.writeFile(p, JSON.stringify(products), err => {
// //               console.log(err);
// //             });
// //         }
// //     });
// //   }

//   save () {
//     return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
//     [this.title, this.price, this.imageUrl, this.description]
//     );
//   }
  
//   delete() {
//     return db.execute('DELETE FROM products WHERE products.id = ?', [this.id]);
//   }

//   static fetchAll() {
//     return db.execute('SELECT * FROM products');
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM products WHERE products.id = ?',[id]);
//   }
// };
