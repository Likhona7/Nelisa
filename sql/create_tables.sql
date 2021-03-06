create database nelisa;

use nelisa;

drop table if exists categories;
drop table if exists products;
drop table if exists purchases;
drop table if exists sales;
drop table if exists users;



create table categories(
    id int primary key auto_increment,
    description char(100) not null
);

create table products (
    id int primary key auto_increment,
        description char(100) not null,
    category_id int,
    foreign key (category_id) references categories(id)
);

    create table purchases(
    	id int not null auto_increment,
      supplier char(100) not null,
      purchase_date char(100) not null,
    	prod_id int,
    	quantity int(11),
      cost char(11) not null,
    	primary key(id),
    	foreign key(prod_id) references products(id)
    );

    create table sales (
    id int not null auto_increment,
    sale_date char(100) not null,
    quantity int(11),
    price char(100) not null,
    primary key (id),
      product_id int,
    foreign key (product_id) references products(id)
  );

create table users (
id int primary key auto_increment,
username char(100) not null,
email char(100) not null,
password char(100) not null,
locked char(100) not null,
admin char(100) not null
);













  select categories.description, products.description from categories inner join products on categories.id = products.category_id;
