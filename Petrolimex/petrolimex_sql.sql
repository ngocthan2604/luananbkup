-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2023 at 11:18 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petrolimex`
--

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `userSee` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `userId`, `title`, `content`, `time`, `status`, `userSee`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Lương Tháng 11', 'Thông Báo Nhận Lương Tháng 11\n', NULL, NULL, NULL, '2023-11-05 23:14:00', '2023-11-05 23:14:00'),
(2, 1, 'Thông Báo', 'Mọi Người Ra Vào Nhớ Chấm Công Nhé\n', NULL, NULL, NULL, '2023-11-08 19:18:27', '2023-11-08 19:18:27'),
(3, 1, 'Thông bao', 'Test Thông Báo', NULL, NULL, NULL, '2023-11-13 21:05:43', '2023-11-13 21:05:43'),
(4, 1, 'Thông Báo', 'Thông Báo Ngày 14.11\n', NULL, NULL, NULL, '2023-11-14 16:47:00', '2023-11-14 16:47:00'),
(5, 1, 'Test Thông Báo', 'test', NULL, NULL, NULL, '2023-11-14 16:59:15', '2023-11-14 16:59:15'),
(6, 3, 'Tiêu Đề', 'Tiêu Đề', NULL, NULL, NULL, '2023-11-14 17:21:03', '2023-11-14 17:21:03'),
(7, 3, 'Thông Báo', 'Mô Tả thông Báo', NULL, NULL, NULL, '2023-11-14 17:38:46', '2023-11-14 17:38:46');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `file` blob DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `userId`, `time`, `file`, `createdAt`, `updatedAt`) VALUES
(1, 1, NULL, 0x5b6f626a656374204f626a6563745d, '2023-11-05 23:11:42', '2023-11-05 23:11:42'),
(2, 1, NULL, 0x5b6f626a656374204f626a6563745d, '2023-11-05 23:12:12', '2023-11-05 23:12:12'),
(3, 1, NULL, 0x5b6f626a656374204f626a6563745d, '2023-11-08 18:22:20', '2023-11-08 18:22:20'),
(4, 1, NULL, 0x5b6f626a656374204f626a6563745d, '2023-11-08 19:05:21', '2023-11-08 19:05:21'),
(5, 1, NULL, 0x5b6f626a656374204f626a6563745d, '2023-11-13 21:10:32', '2023-11-13 21:10:32'),
(6, 1, NULL, 0x5b6f626a656374204f626a6563745d, '2023-11-14 16:54:47', '2023-11-14 16:54:47'),
(7, 1, NULL, 0x5b6f626a656374204f626a6563745d, '2023-11-14 17:28:01', '2023-11-14 17:28:01'),
(8, 1, NULL, 0x5b6f626a656374204f626a6563745d, '2023-11-14 17:43:45', '2023-11-14 17:43:45');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `roleId`, `role_name`, `createdAt`, `updatedAt`) VALUES
(1, 'R0', 'Nhân Viên', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'R1', 'Cửa Hàng Trưởng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'R2', 'Quản Lý', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `salaries`
--

CREATE TABLE `salaries` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `basic_salary` varchar(255) DEFAULT NULL,
  `allowance` varchar(255) DEFAULT NULL,
  `subsidize` varchar(255) DEFAULT NULL,
  `responsibility` varchar(255) DEFAULT NULL,
  `payroll` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `salaries`
--

INSERT INTO `salaries` (`id`, `userId`, `roleId`, `time`, `basic_salary`, `allowance`, `subsidize`, `responsibility`, `payroll`, `createdAt`, `updatedAt`) VALUES
(1, 1, NULL, '11', '3000000', '100000', '500000', NULL, NULL, '2023-11-05 20:16:39', '2023-11-05 20:16:39'),
(2, 1, NULL, '11', '5000000', '2000000', NULL, '1000000', NULL, '2023-11-05 20:23:57', '2023-11-05 20:23:57'),
(3, 1, NULL, '12', '4000000', '200000', '400000', NULL, NULL, '2023-11-13 21:07:10', '2023-11-13 21:07:10'),
(4, 1, NULL, '12', '500000', '200000', NULL, '10000', NULL, '2023-11-13 21:08:04', '2023-11-13 21:08:04'),
(5, 1, NULL, '01', '3000000', '100000', '50000', NULL, NULL, '2023-11-14 16:50:49', '2023-11-14 16:50:49'),
(6, 1, NULL, '01', '5000000', '2000000', NULL, '1000000', NULL, '2023-11-14 16:51:43', '2023-11-14 16:51:43'),
(7, 1, NULL, '02', '20000000', '500000', '400000', NULL, NULL, '2023-11-14 17:24:32', '2023-11-14 17:24:32');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `day_for_sale` varchar(255) DEFAULT NULL,
  `sales_figures_day` varchar(255) DEFAULT NULL,
  `sales_figures_month` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `problem` varchar(255) DEFAULT NULL,
  `file` blob DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `userId`, `day_for_sale`, `sales_figures_day`, `sales_figures_month`, `price`, `time`, `problem`, `file`, `createdAt`, `updatedAt`) VALUES
(1, '6', '20/10/2023', '10000', NULL, '25000', NULL, NULL, NULL, '2023-11-23 12:01:21', '2023-11-23 12:01:21');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('notification.js'),
('report.js'),
('role.js'),
('salary.js'),
('sales.js'),
('shift.js'),
('timekeeping.js'),
('uses.js');

-- --------------------------------------------------------

--
-- Table structure for table `shifts`
--

CREATE TABLE `shifts` (
  `id` int(11) NOT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `size_user` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shifts`
--

INSERT INTO `shifts` (`id`, `userId`, `time`, `size_user`, `createdAt`, `updatedAt`) VALUES
(1, '3', '10 và 11 tháng 11 năm 2023', NULL, '2023-11-08 19:19:07', '2023-11-08 19:19:07'),
(2, '4', '14 và 15 tháng 11 năm 2023', NULL, '2023-11-13 21:12:52', '2023-11-13 21:12:52'),
(3, '3', '15 và 16 tháng 11 năm 2023', NULL, '2023-11-14 17:30:07', '2023-11-14 17:30:07'),
(4, '5', '15 và 16 tháng 11 năm 2023', NULL, '2023-11-14 17:31:07', '2023-11-14 17:31:07'),
(5, '5', '14 và 15 tháng 11 năm 2023', NULL, '2023-11-14 17:45:43', '2023-11-14 17:45:43'),
(6, '13', '15 và 16 tháng 11 năm 2023', NULL, '2023-11-14 17:46:00', '2023-11-14 17:46:00');

-- --------------------------------------------------------

--
-- Table structure for table `timekeepings`
--

CREATE TABLE `timekeepings` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `hour_come` varchar(255) DEFAULT NULL,
  `return_time` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `timekeepings`
--

INSERT INTO `timekeepings` (`id`, `userId`, `hour_come`, `return_time`, `time`, `type`, `createdAt`, `updatedAt`) VALUES
-- User 1
(1, 1, NULL, NULL, 'Giờ Vào 08h00p Ngày 01 Tháng 08 Năm 2024', 'start', '2024-08-01 08:00:00', '2024-08-01 08:00:00'),
(2, 1, NULL, NULL, 'Giờ Ra 18h00p Ngày 01 Tháng 08 Năm 2024', 'end', '2024-08-01 18:00:00', '2024-08-01 18:00:00'),
(3, 1, NULL, NULL, 'Giờ Vào 07h45p Ngày 03 Tháng 08 Năm 2024', 'start', '2024-08-03 07:45:00', '2024-08-03 07:45:00'),
(4, 1, NULL, NULL, 'Giờ Ra 17h50p Ngày 03 Tháng 08 Năm 2024', 'end', '2024-08-03 17:50:00', '2024-08-03 17:50:00'),

-- User 2
(5, 2, NULL, NULL, 'Giờ Vào 07h30p Ngày 02 Tháng 08 Năm 2024', 'start', '2024-08-02 07:30:00', '2024-08-02 07:30:00'),
(6, 2, NULL, NULL, 'Giờ Ra 17h35p Ngày 02 Tháng 08 Năm 2024', 'end', '2024-08-02 17:35:00', '2024-08-02 17:35:00'),
(7, 2, NULL, NULL, 'Giờ Vào 08h15p Ngày 04 Tháng 08 Năm 2024', 'start', '2024-08-04 08:15:00', '2024-08-04 08:15:00'),
(8, 2, NULL, NULL, 'Giờ Ra 17h45p Ngày 04 Tháng 08 Năm 2024', 'end', '2024-08-04 17:45:00', '2024-08-04 17:45:00'),

-- User 3
(9, 3, NULL, NULL, 'Giờ Vào 07h50p Ngày 05 Tháng 08 Năm 2024', 'start', '2024-08-05 07:50:00', '2024-08-05 07:50:00'),
(10, 3, NULL, NULL, 'Giờ Ra 18h00p Ngày 05 Tháng 08 Năm 2024', 'end', '2024-08-05 18:00:00', '2024-08-05 18:00:00'),
(11, 3, NULL, NULL, 'Giờ Vào 08h00p Ngày 07 Tháng 08 Năm 2024', 'start', '2024-08-07 08:00:00', '2024-08-07 08:00:00'),
(12, 3, NULL, NULL, 'Giờ Ra 17h31p Ngày 07 Tháng 08 Năm 2024', 'end', '2024-08-07 17:31:00', '2024-08-07 17:31:00'),

-- User 4
(13, 4, NULL, NULL, 'Giờ Vào 08h30p Ngày 06 Tháng 08 Năm 2024', 'start', '2024-08-06 08:30:00', '2024-08-06 08:30:00'),
(14, 4, NULL, NULL, 'Giờ Ra 17h40p Ngày 06 Tháng 08 Năm 2024', 'end', '2024-08-06 17:40:00', '2024-08-06 17:40:00'),
(15, 4, NULL, NULL, 'Giờ Vào 07h35p Ngày 08 Tháng 08 Năm 2024', 'start', '2024-08-08 07:35:00', '2024-08-08 07:35:00'),
(16, 4, NULL, NULL, 'Giờ Ra 17h50p Ngày 08 Tháng 08 Năm 2024', 'end', '2024-08-08 17:50:00', '2024-08-08 17:50:00'),

-- User 5
(17, 5, NULL, NULL, 'Giờ Vào 08h10p Ngày 29 Tháng 07 Năm 2024', 'start', '2024-07-29 08:10:00', '2024-07-29 08:10:00'),
(18, 5, NULL, NULL, 'Giờ Ra 17h36p Ngày 29 Tháng 07 Năm 2024', 'end', '2024-07-29 17:36:00', '2024-07-29 17:36:00'),
(19, 5, NULL, NULL, 'Giờ Vào 08h25p Ngày 01 Tháng 08 Năm 2024', 'start', '2024-08-01 08:25:00', '2024-08-01 08:25:00'),
(20, 5, NULL, NULL, 'Giờ Ra 17h50p Ngày 01 Tháng 08 Năm 2024', 'end', '2024-08-01 17:50:00', '2024-08-01 17:50:00'),

-- User 6
(21, 6, NULL, NULL, 'Giờ Vào 07h40p Ngày 30 Tháng 07 Năm 2024', 'start', '2024-07-30 07:40:00', '2024-07-30 07:40:00'),
(22, 6, NULL, NULL, 'Giờ Ra 17h38p Ngày 30 Tháng 07 Năm 2024', 'end', '2024-07-30 17:38:00', '2024-07-30 17:38:00'),
(23, 6, NULL, NULL, 'Giờ Vào 08h20p Ngày 02 Tháng 08 Năm 2024', 'start', '2024-08-02 08:20:00', '2024-08-02 08:20:00'),
(24, 6, NULL, NULL, 'Giờ Ra 17h45p Ngày 02 Tháng 08 Năm 2024', 'end', '2024-08-02 17:45:00', '2024-08-02 17:45:00'),

-- User 7
(25, 7, NULL, NULL, 'Giờ Vào 07h50p Ngày 31 Tháng 07 Năm 2024', 'start', '2024-07-31 07:50:00', '2024-07-31 07:50:00'),
(26, 7, NULL, NULL, 'Giờ Ra 17h32p Ngày 31 Tháng 07 Năm 2024', 'end', '2024-07-31 17:32:00', '2024-07-31 17:32:00'),
(27, 7, NULL, NULL, 'Giờ Vào 08h05p Ngày 03 Tháng 08 Năm 2024', 'start', '2024-08-03 08:05:00', '2024-08-03 08:05:00'),
(28, 7, NULL, NULL, 'Giờ Ra 17h50p Ngày 03 Tháng 08 Năm 2024', 'end', '2024-08-03 17:50:00', '2024-08-03 17:50:00'),

-- User 8
(29, 8, NULL, NULL, 'Giờ Vào 07h30p Ngày 04 Tháng 08 Năm 2024', 'start', '2024-08-04 07:30:00', '2024-08-04 07:30:00'),
(30, 8, NULL, NULL, 'Giờ Ra 17h37p Ngày 04 Tháng 08 Năm 2024', 'end', '2024-08-04 17:37:00', '2024-08-04 17:37:00'),
(31, 8, NULL, NULL, 'Giờ Vào 08h10p Ngày 05 Tháng 08 Năm 2024', 'start', '2024-08-05 08:10:00', '2024-08-05 08:10:00'),
(32, 8, NULL, NULL, 'Giờ Ra 17h45p Ngày 05 Tháng 08 Năm 2024', 'end', '2024-08-05 17:45:00', '2024-08-05 17:45:00'),

-- User 9
(33, 9, NULL, NULL, 'Giờ Vào 07h35p Ngày 06 Tháng 08 Năm 2024', 'start', '2024-08-06 07:35:00', '2024-08-06 07:35:00'),
(34, 9, NULL, NULL, 'Giờ Ra 17h42p Ngày 06 Tháng 08 Năm 2024', 'end', '2024-08-06 17:42:00', '2024-08-06 17:42:00'),
(35, 9, NULL, NULL, 'Giờ Vào 08h20p Ngày 07 Tháng 08 Năm 2024', 'start', '2024-08-07 08:20:00', '2024-08-07 08:20:00'),
(36, 9, NULL, NULL, 'Giờ Ra 17h50p Ngày 07 Tháng 08 Năm 2024', 'end', '2024-08-07 17:50:00', '2024-08-07 17:50:00'),

-- User 10
(37, 10, NULL, NULL, 'Giờ Vào 08h00p Ngày 29 Tháng 07 Năm 2024', 'start', '2024-07-29 08:00:00', '2024-07-29 08:00:00'),
(38, 10, NULL, NULL, 'Giờ Ra 17h33p Ngày 29 Tháng 07 Năm 2024', 'end', '2024-07-29 17:33:00', '2024-07-29 17:33:00'),
(39, 10, NULL, NULL, 'Giờ Vào 08h25p Ngày 01 Tháng 08 Năm 2024', 'start', '2024-08-01 08:25:00', '2024-08-01 08:25:00'),
(40, 10, NULL, NULL, 'Giờ Ra 17h46p Ngày 01 Tháng 08 Năm 2024', 'end', '2024-08-01 17:46:00', '2024-08-01 17:46:00'),

-- User 11
(41, 11, NULL, NULL, 'Giờ Vào 07h45p Ngày 30 Tháng 07 Năm 2024', 'start', '2024-07-30 07:45:00', '2024-07-30 07:45:00'),
(42, 11, NULL, NULL, 'Giờ Ra 17h39p Ngày 30 Tháng 07 Năm 2024', 'end', '2024-07-30 17:39:00', '2024-07-30 17:39:00'),
(43, 11, NULL, NULL, 'Giờ Vào 08h15p Ngày 02 Tháng 08 Năm 2024', 'start', '2024-08-02 08:15:00', '2024-08-02 08:15:00'),
(44, 11, NULL, NULL, 'Giờ Ra 17h48p Ngày 02 Tháng 08 Năm 2024', 'end', '2024-08-02 17:48:00', '2024-08-02 17:48:00'),

-- User 12
(45, 12, NULL, NULL, 'Giờ Vào 08h05p Ngày 31 Tháng 07 Năm 2024', 'start', '2024-07-31 08:05:00', '2024-07-31 08:05:00'),
(46, 12, NULL, NULL, 'Giờ Ra 17h41p Ngày 31 Tháng 07 Năm 2024', 'end', '2024-07-31 17:41:00', '2024-07-31 17:41:00'),
(47, 12, NULL, NULL, 'Giờ Vào 08h30p Ngày 03 Tháng 08 Năm 2024', 'start', '2024-08-03 08:30:00', '2024-08-03 08:30:00'),
(48, 12, NULL, NULL, 'Giờ Ra 17h35p Ngày 03 Tháng 08 Năm 2024', 'end', '2024-08-03 17:35:00', '2024-08-03 17:35:00'),

-- User 13
(49, 13, NULL, NULL, 'Giờ Vào 07h30p Ngày 01 Tháng 08 Năm 2024', 'start', '2024-08-01 07:30:00', '2024-08-01 07:30:00'),
(50, 13, NULL, NULL, 'Giờ Ra 17h37p Ngày 01 Tháng 08 Năm 2024', 'end', '2024-08-01 17:37:00', '2024-08-01 17:37:00'),
(51, 13, NULL, NULL, 'Giờ Vào 08h10p Ngày 05 Tháng 08 Năm 2024', 'start', '2024-08-05 08:10:00', '2024-08-05 08:10:00'),
(52, 13, NULL, NULL, 'Giờ Ra 17h50p Ngày 05 Tháng 08 Năm 2024', 'end', '2024-08-05 17:50:00', '2024-08-05 17:50:00'),

-- User 14
(53, 14, NULL, NULL, 'Giờ Vào 08h20p Ngày 02 Tháng 08 Năm 2024', 'start', '2024-08-02 08:20:00', '2024-08-02 08:20:00'),
(54, 14, NULL, NULL, 'Giờ Ra 17h33p Ngày 02 Tháng 08 Năm 2024', 'end', '2024-08-02 17:33:00', '2024-08-02 17:33:00'),
(55, 14, NULL, NULL, 'Giờ Vào 08h00p Ngày 06 Tháng 08 Năm 2024', 'start', '2024-08-06 08:00:00', '2024-08-06 08:00:00'),
(56, 14, NULL, NULL, 'Giờ Ra 17h50p Ngày 06 Tháng 08 Năm 2024', 'end', '2024-08-06 17:50:00', '2024-08-06 17:50:00'),

-- User 15
(57, 15, NULL, NULL, 'Giờ Vào 07h50p Ngày 04 Tháng 08 Năm 2024', 'start', '2024-08-04 07:50:00', '2024-08-04 07:50:00'),
(58, 15, NULL, NULL, 'Giờ Ra 17h40p Ngày 04 Tháng 08 Năm 2024', 'end', '2024-08-04 17:40:00', '2024-08-04 17:40:00'),
(59, 15, NULL, NULL, 'Giờ Vào 08h15p Ngày 07 Tháng 08 Năm 2024', 'start', '2024-08-07 08:15:00', '2024-08-07 08:15:00'),
(60, 15, NULL, NULL, 'Giờ Ra 17h45p Ngày 07 Tháng 08 Năm 2024', 'end', '2024-08-07 17:45:00', '2024-08-07 17:45:00');


-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT 'R0',
  `mobile` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT 'Nam',
  `home_town` varchar(255) DEFAULT NULL,
  `cccd` int(11) DEFAULT NULL,
  `nation` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `profile` text DEFAULT NULL,
  `date_of_join` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `image` longblob DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (
    `id`, `firstName`, `lastName`, `email`, `address`, `password_hash`, `dob`, `roleId`, `mobile`, `gender`, `home_town`, `cccd`, `nation`, `education`, `profile`, `date_of_join`, `status`, `last_login`, `image`, `refresh_token`, `createdAt`, `updatedAt`
) VALUES
    (1, 'Nguyễn', 'Hoàng', 'hoang.nguyen@gmail.com', 'Số 1, Đường Ngô Thì Nhậm, Quận Hà Đông, Hà Nội', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1995-03-12', 'R0', '0901234567', 'Nam', 'Hà Nội', '123456789', 'Việt Nam', 'Đại học Bách Khoa Hà Nội', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (2, 'Nguyễn', 'Phúc Ánh', 'phucanh.nguyen@gmail.com', 'Số 2, Đường Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1991-07-25', 'R0', '0901234568', 'Nữ', 'Hà Nội', '123456780', 'Việt Nam', 'Đại học Kinh tế Quốc dân', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (3, 'Nguyễn', 'Phúc Vĩnh', 'phucvinh.nguyen@gmail.com', 'Số 3, Đường Nguyễn Trãi, Quận Thanh Xuân, Hà Nội', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1998-11-09', 'R0', '0901234569', 'Nam', 'Hà Nội', '123456781', 'Việt Nam', 'Đại học Công đoàn', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (4, 'Tôn', 'Thất Thuyết', 'thatthuyet.ton@gmail.com', 'Số 4, Đường Láng, Quận Đống Đa, Hà Nội', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1994-05-16', 'R0', '0901234570', 'Nam', 'Hà Nội', '123456782', 'Việt Nam', 'Đại học Ngoại thương', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (5, 'Tôn', 'Thất Tùng', 'that.tung.ton@gmail.com', 'Số 5, Đường Phạm Văn Đồng, Quận Bắc Từ Liêm, Hà Nội', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1992-09-30', 'R0', '0901234571', 'Nam', 'Hà Nội', '123456783', 'Việt Nam', 'Đại học Giao thông Vận tải', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (6, 'Tôn', 'Đức Thắng', 'duc.thang.ton@gmail.com', 'Số 6, Đường Nguyễn Xiển, Quận Thanh Xuân, Hà Nội', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1999-01-14', 'R0', '0901234572', 'Nam', 'Hà Nội', '123456784', 'Việt Nam', 'Đại học Thủy lợi', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (7, 'Phạm', 'Tuân', 'tuan.pham@gmail.com', 'Số 7, Đường Xuân Thủy, Quận Cầu Giấy, Hà Nội', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1996-12-20', 'R0', '0901234573', 'Nam', 'Hà Nội', '123456785', 'Việt Nam', 'Đại học Sư phạm Hà Nội', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (8, 'Hoàng', 'Phủ Ngọc', 'phungoc.hoang@gmail.com', 'Số 8, Đường Đinh Tiên Hoàng, Quận Hoàn Kiếm, Hà Nội', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1993-06-05', 'R0', '0901234574', 'Nam', 'Hà Nội', '123456786', 'Việt Nam', 'Đại học Mỹ thuật Công nghiệp', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (9, 'Phan', 'Văn Tài', 'vantai.phan@gmail.com', 'Số 9, Đường Nguyễn Du, Quận 1, TP Hồ Chí Minh', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1990-08-22', 'R0', '0901234575', 'Nam', 'TP Hồ Chí Minh', '123456787', 'Việt Nam', 'Đại học Kinh tế TP Hồ Chí Minh', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (10, 'Nguyễn', 'Phong Hồng', 'phonghong.nguyen@gmail.com', 'Số 10, Đường Nguyễn Văn Trỗi, Quận Phú Nhuận, TP Hồ Chí Minh', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1997-04-17', 'R0', '0901234576', 'Nam', 'TP Hồ Chí Minh', '123456788', 'Việt Nam', 'Đại học Tôn Đức Thắng', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (11, 'Nguyễn', 'Văn Toàn', 'vantoan.nguyen@gmail.com', 'Số 11, Đường Hùng Vương, Quận 5, TP Hồ Chí Minh', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1992-10-11', 'R0', '0901234577', 'Nam', 'TP Hồ Chí Minh', '123456789', 'Việt Nam', 'Đại học Bách khoa TP Hồ Chí Minh', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (12, 'Nguyễn', 'Ngọc Trường', 'ngoctruong.nguyen@gmail.com', 'Số 12, Đường Võ Văn Tần, Quận 3, TP Hồ Chí Minh', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1996-02-14', 'R0', '0901234578', 'Nam', 'TP Hồ Chí Minh', '123456780', 'Việt Nam', 'Đại học Hoa Sen', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (13, 'Trần', 'Hữu Đông', 'huudong.tran@gmail.com', 'Số 13, Đường Bạch Đằng, Quận Tân Bình, TP Hồ Chí Minh', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1999-01-21', 'R0', '0901234579', 'Nam', 'TP Hồ Chí Minh', '123456781', 'Việt Nam', 'Đại học Sài Gòn', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (14, 'Trần', 'Lê Quốc', 'lequoc.tran@gmail.com', 'Số 14, Đường Nguyễn Thái Học, Quận 1, TP Hồ Chí Minh', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '1994-12-30', 'R0', '0901234580', 'Nam', 'TP Hồ Chí Minh', '123456782', 'Việt Nam', 'Đại học Khoa học Xã hội và Nhân văn', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
    (15, 'Trương', 'Văn Thái', 'vanthai.truong@gmail.com', 'Số 15, Đường Võ Thị Sáu, Quận 3, TP Hồ Chí Minh', '$2y$10$CjA0zRgEkFJGb4E9uvNU/eu1nKk7BsK1A7L/5kXzK2G7Sdc/DYqOO', '2000-03-07', 'R0', '0901234581', 'Nam', 'TP Hồ Chí Minh', '123456783', 'Việt Nam', 'Đại học Sư phạm TP Hồ Chí Minh', NULL, NULL, NULL, NULL, NULL,NULL, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
(37,'Michael','Johnson','michaeljohnson@example.com','789 Some Street, Hometown City, Countryland','$2a$10$jR4SNhb9Lg7eUAk6IXXCPeBX4csuhp6qlmSaVhpUeTXA4nD4cGMhi','1982-07-20','R2','0111222333','Male','Hometown City',1122334455,'Countryland','PhD',NULL,NULL,NULL,NULL,NULL,NULL,'2024-07-20 18:13:21','2024-07-20 18:13:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salaries`
--
ALTER TABLE `salaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `shifts`
--
ALTER TABLE `shifts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timekeepings`
--
ALTER TABLE `timekeepings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `salaries`
--
ALTER TABLE `salaries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shifts`
--
ALTER TABLE `shifts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `timekeepings`
--
ALTER TABLE `timekeepings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
