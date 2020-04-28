create database bamazon_db;

use bamazon_db;

create table products(
  item_id int not null,
  product_name varchar(30) not null,
  department_name varchar(30) not null,
  price decimal (4,2) not null,
  stock_quantity int not null,
  primary key (item_id)
  
  );
  
  
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4912, "toilet paper", "household items", 99.99, 0 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6667, "clorox wipes", "cleaning products", 47.99, 3 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1112, "sweat pants", "clothes", 20.55, 5 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1198, "razors", "self-care", 7.35, 101 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6565, "hiking boots", "shoes", 69.99, 240 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7345, "top ramen", "food", 1.99, 40 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9999, "rubbing alcohol", "pharmacy", 12.78, 0 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9809, "Dr. Pepper", "drinks", 11.99, 55 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6664, "hair dye", "self-care", 29.99, 37 );

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4343, "whiskey", "alcohol", 54.99, 20 );