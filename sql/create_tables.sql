create database nelisa;

use nelisa;

drop table if exists categories;
drop table if exists products;
drop table if exists purchases;
drop table if exists sales;

create table categories(
    id int primary key auto_increment,
    description char(100) not null
);

create table products (
    id int primary key auto_increment,
        description char(100) not null,
    price decimal(10,2),
    category_id int,
    foreign key (category_id) references categories(id)
);


    create table purchases(
    	id int not null auto_increment,
    	prod_id int not null,
    	purchase_date date,
    	cost int(11),
    	quantity int(11),
    	primary key(id),
    	foreign key(prod_id) references products(id)
    );

    create table sales (
    id int not null auto_increment,
    product_id int,
    sale_date date,
    quantity int(11),
    price decimal(10.2),
    primary key (id),
    foreign key (product_id) references products(id)
  );
