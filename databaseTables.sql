-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 19, 2016 at 08:45 AM
-- Server version: 5.5.49-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nelisa`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` char(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `description`) VALUES
(1, 'Bakery'),
(2, 'Sweets'),
(3, 'Hygiene'),
(4, 'Other'),
(5, 'Canned Food'),
(6, 'Meat'),
(7, 'Dairy'),
(8, 'Soft Drink'),
(9, 'Fruit'),
(10, 'Starch'),
(11, 'masira'),
(12, 'mufin'),
(15, 'lee'),
(16, 'veg');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` char(100) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `description`, `category_id`) VALUES
(1, 'Heart Chocolates', 2),
(2, 'Mixed Sweets 5s', 2),
(3, 'Shampoo 1 litre', 3),
(4, 'Soap Bar', 3),
(5, 'Valentine Cards', 4),
(6, 'Rose (plastic)', 4),
(7, 'Top Class Soy Mince', 6),
(8, 'Imasi', 7),
(9, 'Milk 1l', 7),
(10, 'Coke 500ml', 8),
(11, 'Cream Soda 500ml', 8),
(12, 'Fanta 500ml', 8),
(13, 'Bananas - loose', 9),
(14, 'Apples - loose', 9),
(15, 'Iwisa Pap 6kg', 10),
(16, 'muffin', 1);

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE IF NOT EXISTS `purchases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `supplier` char(100) NOT NULL,
  `purchase_date` char(100) NOT NULL,
  `prod_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `cost` char(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `prod_id` (`prod_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=123 ;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `supplier`, `purchase_date`, `prod_id`, `quantity`, `cost`) VALUES
(3, 'Epping Market', '03-Feb', 2, 240, 'R3,00'),
(4, 'Epping Market', '06-Feb', 2, 150, 'R3,00'),
(5, 'Epping Market', '10-Feb', 2, 150, 'R3,00'),
(6, 'Epping Market', '13-Feb', 2, 50, 'R3,00'),
(7, 'Epping Market', '17-Feb', 2, 12, 'R3,00'),
(8, 'Epping Market', '20-Feb', 2, 20, 'R3,00'),
(9, 'Epping Market', '24-Feb', 2, 8, 'R3,00'),
(10, 'HomeMade', '28-Jan', 3, 1, 'R20,00'),
(11, 'HomeMade', '02-Feb', 3, 1, 'R20,00'),
(12, 'HomeMade', '04-Feb', 3, 2, 'R20,00'),
(13, 'HomeMade', '11-Feb', 3, 2, 'R20,00'),
(14, 'HomeMade', '13-Feb', 3, 3, 'R20,00'),
(15, 'HomeMade', '14-Feb', 3, 1, 'R20,00'),
(16, 'HomeMade', '18-Feb', 3, 1, 'R20,00'),
(17, 'HomeMade', '19-Feb', 3, 2, 'R20,00'),
(18, 'HomeMade', '20-Feb', 3, 2, 'R20,00'),
(19, 'HomeMade', '26-Feb', 3, 2, 'R20,00'),
(20, 'HomeMade', '27-Feb', 3, 5, 'R20,00'),
(21, 'HomeMade', '28-Feb', 3, 2, 'R20,00'),
(22, 'HomeMade', '01-Mar', 3, 2, 'R20,00'),
(23, 'HomeMade', '28-Jan', 4, 3, 'R3,00'),
(24, 'HomeMade', '02-Feb', 4, 3, 'R3,00'),
(25, 'HomeMade', '04-Feb', 4, 5, 'R3,00'),
(26, 'HomeMade', '06-Feb', 4, 5, 'R3,00'),
(27, 'HomeMade', '13-Feb', 4, 5, 'R3,00'),
(28, 'HomeMade', '18-Feb', 4, 5, 'R3,00'),
(29, 'HomeMade', '20-Feb', 4, 3, 'R3,00'),
(30, 'HomeMade', '25-Feb', 4, 5, 'R3,00'),
(31, 'HomeMade', '26-Feb', 4, 5, 'R3,00'),
(32, 'HomeMade', '27-Feb', 4, 5, 'R3,00'),
(33, 'HomeMade', '28-Feb', 4, 3, 'R3,00'),
(34, 'HomeMade', '01-Mar', 4, 5, 'R3,00'),
(35, 'HomeMade', '11-Feb', 5, 20, 'R2,00'),
(36, 'ChinaTown', '09-Feb', 6, 20, 'R10,00'),
(37, 'Makro', '23-Jan', 7, 5, 'R8,00'),
(38, 'Makro', '28-Jan', 7, 10, 'R8,00'),
(39, 'Makro', '6-Feb', 7, 10, 'R8,00'),
(40, 'Makro', '10-Feb', 7, 15, 'R8,00'),
(41, 'Makro', '13-Feb', 7, 5, 'R8,00'),
(42, 'Makro', '17-Feb', 7, 5, 'R8,00'),
(43, 'Makro', '20-Feb', 7, 10, 'R8,00'),
(44, 'Makro', '24-Feb', 7, 15, 'R8,00'),
(45, 'Makro', '27-Feb', 7, 15, 'R8,00'),
(46, 'Joe Spaza Shop', '28-Feb', 7, 5, 'R11,00'),
(47, 'Joe Spaza Shop', '01-Mar', 7, 3, 'R11,00'),
(48, 'Makro', '23-Jan', 8, 1, 'R17,00'),
(49, 'Makro', '28-Jan', 8, 15, 'R17,00'),
(50, 'Joe Spaza Shop', '04-Feb', 8, 4, 'R24,00'),
(51, 'Makro', '6-Feb', 8, 25, 'R17,00'),
(52, 'Makro', '10-Feb', 8, 10, 'R17,00'),
(53, 'Makro', '13-Feb', 8, 20, 'R17,00'),
(54, 'Makro', '17-Feb', 8, 15, 'R17,00'),
(55, 'Makro', '20-Feb', 8, 10, 'R17,00'),
(56, 'Makro', '24-Feb', 8, 15, 'R17,00'),
(57, 'Makro', '27-Feb', 8, 15, 'R17,00'),
(58, 'Makro', '23-Jan', 9, 4, 'R7,00'),
(59, 'Makro', '28-Jan', 9, 25, 'R7,00'),
(60, 'Makro', '6-Feb', 9, 10, 'R7,00'),
(61, 'Joe Spaza Shop', '09-Feb', 9, 3, 'R9,50'),
(62, 'Makro', '10-Feb', 9, 10, 'R7,00'),
(63, 'Joe Spaza Shop', '12-Feb', 9, 3, 'R9,50'),
(64, 'Makro', '13-Feb', 9, 15, 'R7,00'),
(65, 'Joe Spaza Shop', '16-Feb', 9, 6, 'R9,50'),
(66, 'Makro', '17-Feb', 9, 15, 'R7,00'),
(67, 'Joe Spaza Shop', '19-Feb', 9, 1, 'R9,50'),
(68, 'Makro', '20-Feb', 9, 15, 'R7,00'),
(69, 'Makro', '24-Feb', 9, 20, 'R7,00'),
(70, 'Makro', '27-Feb', 9, 20, 'R7,00'),
(71, 'Makro', '23-Jan', 10, 3, 'R3,50'),
(72, 'Makro', '28-Jan', 10, 36, 'R3,50'),
(73, 'Makro', '6-Feb', 10, 36, 'R3,50'),
(74, 'Makro', '10-Feb', 10, 18, 'R3,50'),
(75, 'Makro', '13-Feb', 10, 12, 'R3,50'),
(76, 'Makro', '17-Feb', 10, 24, 'R3,50'),
(77, 'Makro', '24-Feb', 10, 18, 'R3,50'),
(78, 'Makro', '27-Feb', 10, 24, 'R3,50'),
(79, 'Makro', '23-Jan', 11, 4, 'R4,50'),
(80, 'Makro', '28-Jan', 11, 24, 'R4,50'),
(81, 'Makro', '6-Feb', 11, 18, 'R4,50'),
(82, 'Joe Spaza Shop', '16-Feb', 11, 2, 'R7,50'),
(83, 'Makro', '17-Feb', 11, 12, 'R4,50'),
(84, 'Makro', '24-Feb', 11, 6, 'R4,50'),
(85, 'Makro', '27-Feb', 11, 12, 'R4,50'),
(86, 'Makro', '23-Jan', 12, 2, 'R4,50'),
(87, 'Makro', '28-Jan', 12, 24, 'R4,50'),
(88, 'Makro', '6-Feb', 12, 24, 'R4,50'),
(89, 'Makro', '13-Feb', 12, 12, 'R4,50'),
(90, 'Joe Spaza Shop', '16-Feb', 12, 1, 'R6,50'),
(91, 'Makro', '17-Feb', 12, 12, 'R4,50'),
(92, 'Makro', '24-Feb', 12, 6, 'R4,50'),
(93, 'Joe Spaza Shop', '26-Feb', 12, 2, 'R6,50'),
(94, 'Makro', '27-Feb', 12, 12, 'R4,50'),
(95, 'Epping Market', '28-Jan', 13, 4, 'R1,00'),
(96, 'Epping Market', '03-Feb', 13, 12, 'R1,00'),
(97, 'Epping Market', '06-Feb', 13, 8, 'R1,00'),
(98, 'Epping Market', '10-Feb', 13, 4, 'R1,00'),
(99, 'Epping Market', '13-Feb', 13, 4, 'R1,00'),
(100, 'Epping Market', '20-Feb', 13, 20, 'R1,00'),
(101, 'Epping Market', '24-Feb', 13, 10, 'R1,00'),
(102, 'Epping Market', '27-Feb', 13, 10, 'R1,00'),
(103, 'Epping Market', '28-Jan', 14, 10, 'R1,50'),
(104, 'Epping Market', '03-Feb', 14, 100, 'R1,50'),
(105, 'Epping Market', '06-Feb', 14, 100, 'R1,50'),
(106, 'Epping Market', '10-Feb', 14, 20, 'R1,50'),
(107, 'Epping Market', '17-Feb', 14, 60, 'R1,50'),
(108, 'Epping Market', '20-Feb', 14, 90, 'R1,50'),
(109, 'Epping Market', '24-Feb', 14, 90, 'R1,50'),
(110, 'Epping Market', '27-Feb', 14, 60, 'R1,50'),
(111, 'Makro', '23-Jan', 15, 3, 'R20,00'),
(112, 'Makro', '28-Jan', 15, 15, 'R20,00'),
(113, 'Makro', '6-Feb', 15, 5, 'R20,00'),
(114, 'Makro', '10-Feb', 15, 5, 'R20,00'),
(115, 'Joe Spaza Shop', '16-Feb', 15, 1, 'R30,00'),
(116, 'Makro', '17-Feb', 15, 5, 'R20,00'),
(117, 'Makro', '20-Feb', 15, 5, 'R20,00'),
(118, 'Joe Spaza Shop', '26-Feb', 15, 1, 'R30,00'),
(119, 'Makro', '27-Feb', 15, 10, 'R20,00'),
(122, 'game', '2016-09-29', 4, 1, '1');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sale_date` char(100) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` char(100) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=97 ;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `sale_date`, `quantity`, `price`, `product_id`) VALUES
(2, '11-Feb', 5, 'R35.00', 1),
(3, '12-Feb', 2, 'R35.00', 1),
(4, '13-Feb', 10, 'R35.00', 1),
(5, '14-Feb', 0, 'R35.00', 1),
(6, '8-Feb', 9, 'R3.00', 2),
(7, '9-Feb', 3, 'R3.00', 2),
(8, '10-Feb', 7, 'R2.00', 2),
(9, '11-Feb', 8, 'R2.00', 2),
(10, '12-Feb', 3, 'R3.00', 2),
(11, '13-Feb', 6, 'R3.00', 2),
(12, '14-Feb', 18, 'R3.00', 2),
(13, '8-Feb', 0, 'R30.00', 3),
(14, '9-Feb', 0, 'R30.00', 3),
(15, '10-Feb', 1, 'R30.00', 3),
(16, '11-Feb', 1, 'R30.00', 3),
(17, '12-Feb', 0, 'R30.00', 3),
(18, '13-Feb', 4, 'R30.00', 3),
(19, '14-Feb', 0, 'R30.00', 3),
(20, '8-Feb', 1, 'R6.00', 4),
(21, '9-Feb', 0, 'R6.00', 4),
(22, '10-Feb', 0, 'R6.00', 4),
(23, '11-Feb', 0, 'R6.00', 4),
(24, '12-Feb', 2, 'R6.00', 4),
(25, '13-Feb', 2, 'R6.00', 4),
(26, '14-Feb', 0, 'R6.00', 4),
(27, '12-Feb', 6, 'R4.00', 5),
(28, '13-Feb', 5, 'R4.00', 5),
(29, '14-Feb', 3, 'R4.00', 5),
(30, '10-Feb', 1, 'R15.00', 6),
(31, '11-Feb', 3, 'R15.00', 6),
(32, '12-Feb', 2, 'R15.00', 6),
(33, '13-Feb', 7, 'R15.00', 6),
(34, '14-Feb', 1, 'R15.00', 6),
(35, '8-Feb', 2, 'R12.00', 7),
(36, '9-Feb', 1, 'R12.00', 7),
(37, '10-Feb', 3, 'R12.00', 7),
(38, '11-Feb', 2, 'R12.00', 7),
(39, '12-Feb', 2, 'R12.00', 7),
(40, '13-Feb', 4, 'R12.00', 7),
(41, '14-Feb', 7, 'R12.00', 7),
(42, '8-Feb', 2, 'R25.00', 8),
(43, '9-Feb', 6, 'R25.00', 8),
(44, '10-Feb', 4, 'R25.00', 8),
(45, '11-Feb', 4, 'R25.00', 8),
(46, '12-Feb', 9, 'R25.00', 8),
(47, '13-Feb', 6, 'R25.00', 8),
(48, '14-Feb', 5, 'R25.00', 8),
(49, '9-Feb', 3, 'R10.00', 9),
(50, '10-Feb', 5, 'R10.00', 9),
(51, '11-Feb', 5, 'R10.00', 9),
(52, '12-Feb', 3, 'R10.00', 9),
(53, '13-Feb', 6, 'R10.00', 9),
(54, '14-Feb', 6, 'R10.00', 9),
(55, '8-Feb', 4, 'R6.50', 10),
(56, '9-Feb', 8, 'R6.50', 10),
(57, '10-Feb', 3, 'R6.50', 10),
(58, '11-Feb', 3, 'R6.50', 10),
(59, '12-Feb', 2, 'R6.50', 10),
(60, '13-Feb', 8, 'R6.50', 10),
(61, '14-Feb', 14, 'R6.50', 10),
(62, '8-Feb', 1, 'R7.50', 11),
(63, '9-Feb', 5, 'R7.50', 11),
(64, '10-Feb', 2, 'R7.50', 11),
(65, '11-Feb', 1, 'R7.50', 11),
(66, '12-Feb', 1, 'R7.50', 11),
(67, '13-Feb', 4, 'R7.50', 11),
(68, '14-Feb', 8, 'R7.50', 11),
(69, '8-Feb', 4, 'R6.50', 12),
(70, '9-Feb', 3, 'R6.50', 12),
(71, '10-Feb', 1, 'R6.50', 12),
(72, '11-Feb', 2, 'R6.50', 12),
(73, '12-Feb', 0, 'R6.50', 12),
(74, '13-Feb', 6, 'R6.50', 12),
(75, '14-Feb', 7, 'R6.50', 12),
(76, '8-Feb', 5, 'R2.00', 13),
(77, '9-Feb', 5, 'R2.00', 13),
(78, '10-Feb', 3, 'R2.00', 13),
(79, '11-Feb', 4, 'R2.00', 13),
(80, '12-Feb', 2, 'R2.00', 13),
(81, '13-Feb', 4, 'R2.00', 13),
(82, '14-Feb', 5, 'R2.00', 13),
(83, '8-Feb', 2, 'R2.00', 14),
(84, '9-Feb', 0, 'R2.00', 14),
(85, '10-Feb', 2, 'R2.00', 14),
(86, '11-Feb', 3, 'R2.00', 14),
(87, '12-Feb', 3, 'R2.00', 14),
(88, '13-Feb', 2, 'R2.00', 14),
(89, '14-Feb', 9, 'R2.00', 14),
(90, '8-Feb', 1, 'R30.00', 15),
(91, '9-Feb', 2, 'R30.00', 15),
(92, '10-Feb', 1, 'R30.00', 15),
(93, '11-Feb', 0, 'R30.00', 15),
(94, '12-Feb', 0, 'R30.00', 15),
(95, '13-Feb', 3, 'R30.00', 15),
(96, '2016-09-29', 3, 'R30.00', 15);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
