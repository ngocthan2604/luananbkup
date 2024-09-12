-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: petrolimex
-- ------------------------------------------------------
-- Server version	8.0.3-rc-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `time` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `userSee` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,1,'Lương Tháng 11','Thông Báo Nhận Lương Tháng 11\n',NULL,NULL,NULL,'2023-11-05 23:14:00','2023-11-05 23:14:00'),(2,1,'Thông Báo','Mọi Người Ra Vào Nhớ Chấm Công Nhé\n',NULL,NULL,NULL,'2023-11-08 19:18:27','2023-11-08 19:18:27'),(8,37,'The firtst Title','Welcom everyone,Ngoc Than is the new management.',NULL,NULL,NULL,'2024-07-20 19:54:27','2024-07-20 19:54:27'),(9,39,'Test thông báo ','this is my information',NULL,NULL,NULL,'2024-08-07 10:10:09','2024-08-07 10:10:09'),(10,39,'Test thông báo 1 ','this is my information',NULL,NULL,NULL,'2024-08-07 10:25:47','2024-08-07 10:25:47'),(11,39,'312442@','34141244@34',NULL,NULL,NULL,'2024-08-16 00:42:01','2024-08-16 00:42:01');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `time` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `file` blob,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `file` (`file`(255)),
  CONSTRAINT `reports_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reports`
--

LOCK TABLES `reports` WRITE;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
INSERT INTO `reports` VALUES (11,39,NULL,_binary '[object Object]','2024-08-02 04:35:45','2024-08-02 04:35:45'),(12,39,NULL,_binary '[object Object]','2024-08-07 10:13:06','2024-08-07 10:13:06'),(13,39,NULL,_binary '[object Object]','2024-08-22 22:40:10','2024-08-22 22:40:10'),(14,39,NULL,_binary '[object Object]','2024-08-22 22:40:13','2024-08-22 22:40:13'),(15,39,NULL,_binary '[object Object]','2024-08-22 22:53:06','2024-08-22 22:53:06'),(16,39,NULL,_binary '[object Object]','2024-08-22 22:56:41','2024-08-22 22:56:41'),(17,39,NULL,_binary '[object Object]','2024-08-23 17:26:07','2024-08-23 17:26:07'),(18,38,NULL,_binary '[object Object]','2024-08-28 16:59:20','2024-08-28 16:59:20');
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleId` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roleId` (`roleId`),
  UNIQUE KEY `roleId_2` (`roleId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'R0','Nhân Viên','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'R1','Cửa Hàng Trưởng','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'R2','Quản Lý','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salaries`
--

DROP TABLE IF EXISTS `salaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `salaries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `roleId` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `time` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `basic_salary` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `allowance` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `subsidize` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `responsibility` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `payroll` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `salaries_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `salaries_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `roles` (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salaries`
--

LOCK TABLES `salaries` WRITE;
/*!40000 ALTER TABLE `salaries` DISABLE KEYS */;
INSERT INTO `salaries` VALUES (9,39,NULL,'6','5000000','600000','500000',NULL,NULL,'2024-08-02 03:36:46','2024-08-02 03:36:46'),(10,39,NULL,'7','5500000','600000','350000',NULL,NULL,'2024-08-02 04:14:15','2024-08-02 04:14:15'),(11,39,NULL,'8','6000000','650000','400000',NULL,NULL,'2024-08-02 04:14:45','2024-08-02 04:14:45'),(12,39,NULL,'6','8000000','800000',NULL,'1500000',NULL,'2024-08-02 04:15:23','2024-08-02 04:15:23'),(13,39,NULL,'7','8400000','850000',NULL,'1800000',NULL,'2024-08-02 04:15:55','2024-08-02 04:15:55'),(14,39,NULL,'8','9000000','900000',NULL,'2200000',NULL,'2024-08-02 04:16:23','2024-08-02 04:16:23'),(15,39,NULL,'9','6200000','700000','550000',NULL,NULL,'2024-08-07 10:17:31','2024-08-07 10:17:31'),(16,39,NULL,'9','9300000','1000000',NULL,'3000000',NULL,'2024-08-07 10:19:31','2024-08-07 10:19:31'),(17,39,NULL,'10','6300000','800000','650000',NULL,NULL,'2024-08-07 10:47:44','2024-08-07 10:47:44'),(18,39,NULL,'10','6400000','900000',NULL,'750000',NULL,'2024-08-07 10:49:01','2024-08-07 10:49:01');
/*!40000 ALTER TABLE `salaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `day_for_sale` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `sales_figures_day` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `sales_figures_month` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `time` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `problem` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `file` blob,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `file` (`file`(255)),
  CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('notification.js'),('report.js'),('role.js'),('salary.js'),('sales.js'),('shift.js'),('timekeeping.js'),('uses.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shifts`
--

DROP TABLE IF EXISTS `shifts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `shifts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `time` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `size_user` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `shifts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shifts`
--

LOCK TABLES `shifts` WRITE;
/*!40000 ALTER TABLE `shifts` DISABLE KEYS */;
INSERT INTO `shifts` VALUES (10,1,'Ca 1 Ngày 02/08/2024',NULL,'2024-08-02 04:29:42','2024-08-02 04:29:42'),(11,3,'ca 2 ngày 7/8/2024',NULL,'2024-08-07 10:56:12','2024-08-07 10:56:12'),(14,5,'ca1 ngày 8/8/2024',NULL,'2024-08-07 11:00:42','2024-08-07 11:00:42'),(15,4,'ca 3 ngay 7/8/2024',NULL,'2024-08-07 11:01:39','2024-08-07 11:01:39'),(16,39,'28/8/24',NULL,'2024-08-28 16:19:20','2024-08-28 16:19:20');
/*!40000 ALTER TABLE `shifts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timekeepings`
--

DROP TABLE IF EXISTS `timekeepings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `timekeepings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `hour_come` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `return_time` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `time` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_idx` (`userId`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `timekeepings_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timekeepings`
--

LOCK TABLES `timekeepings` WRITE;
/*!40000 ALTER TABLE `timekeepings` DISABLE KEYS */;
INSERT INTO `timekeepings` VALUES (1,1,NULL,NULL,'Giờ Vào 08h00p Ngày 01 Tháng 08 Năm 2024','start','2024-08-01 08:00:00','2024-08-01 08:00:00'),(2,1,NULL,NULL,'Giờ Ra 18h00p Ngày 01 Tháng 08 Năm 2024','end','2024-08-01 18:00:00','2024-08-01 18:00:00'),(3,1,NULL,NULL,'Giờ Vào 07h45p Ngày 03 Tháng 08 Năm 2024','start','2024-08-03 07:45:00','2024-08-03 07:45:00'),(4,1,NULL,NULL,'Giờ Ra 17h50p Ngày 03 Tháng 08 Năm 2024','end','2024-08-03 17:50:00','2024-08-03 17:50:00'),(5,2,NULL,NULL,'Giờ Vào 07h30p Ngày 02 Tháng 08 Năm 2024','start','2024-08-02 07:30:00','2024-08-02 07:30:00'),(6,2,NULL,NULL,'Giờ Ra 17h35p Ngày 02 Tháng 08 Năm 2024','end','2024-08-02 17:35:00','2024-08-02 17:35:00'),(7,2,NULL,NULL,'Giờ Vào 08h15p Ngày 04 Tháng 08 Năm 2024','start','2024-08-04 08:15:00','2024-08-04 08:15:00'),(8,2,NULL,NULL,'Giờ Ra 17h45p Ngày 04 Tháng 08 Năm 2024','end','2024-08-04 17:45:00','2024-08-04 17:45:00'),(9,3,NULL,NULL,'Giờ Vào 07h50p Ngày 05 Tháng 08 Năm 2024','start','2024-08-05 07:50:00','2024-08-05 07:50:00'),(10,3,NULL,NULL,'Giờ Ra 18h00p Ngày 05 Tháng 08 Năm 2024','end','2024-08-05 18:00:00','2024-08-05 18:00:00'),(11,3,NULL,NULL,'Giờ Vào 08h00p Ngày 07 Tháng 08 Năm 2024','start','2024-08-07 08:00:00','2024-08-07 08:00:00'),(12,3,NULL,NULL,'Giờ Ra 17h31p Ngày 07 Tháng 08 Năm 2024','end','2024-08-07 17:31:00','2024-08-07 17:31:00'),(13,4,NULL,NULL,'Giờ Vào 08h30p Ngày 06 Tháng 08 Năm 2024','start','2024-08-06 08:30:00','2024-08-06 08:30:00'),(14,4,NULL,NULL,'Giờ Ra 17h40p Ngày 06 Tháng 08 Năm 2024','end','2024-08-06 17:40:00','2024-08-06 17:40:00'),(15,4,NULL,NULL,'Giờ Vào 07h35p Ngày 08 Tháng 08 Năm 2024','start','2024-08-08 07:35:00','2024-08-08 07:35:00'),(16,4,NULL,NULL,'Giờ Ra 17h50p Ngày 08 Tháng 08 Năm 2024','end','2024-08-08 17:50:00','2024-08-08 17:50:00'),(17,5,NULL,NULL,'Giờ Vào 08h10p Ngày 29 Tháng 07 Năm 2024','start','2024-07-29 08:10:00','2024-07-29 08:10:00'),(18,5,NULL,NULL,'Giờ Ra 17h36p Ngày 29 Tháng 07 Năm 2024','end','2024-07-29 17:36:00','2024-07-29 17:36:00'),(19,5,NULL,NULL,'Giờ Vào 08h25p Ngày 01 Tháng 08 Năm 2024','start','2024-08-01 08:25:00','2024-08-01 08:25:00'),(20,5,NULL,NULL,'Giờ Ra 17h50p Ngày 01 Tháng 08 Năm 2024','end','2024-08-01 17:50:00','2024-08-01 17:50:00'),(21,6,NULL,NULL,'Giờ Vào 07h40p Ngày 30 Tháng 07 Năm 2024','start','2024-07-30 07:40:00','2024-07-30 07:40:00'),(22,6,NULL,NULL,'Giờ Ra 17h38p Ngày 30 Tháng 07 Năm 2024','end','2024-07-30 17:38:00','2024-07-30 17:38:00'),(23,6,NULL,NULL,'Giờ Vào 08h20p Ngày 02 Tháng 08 Năm 2024','start','2024-08-02 08:20:00','2024-08-02 08:20:00'),(24,6,NULL,NULL,'Giờ Ra 17h45p Ngày 02 Tháng 08 Năm 2024','end','2024-08-02 17:45:00','2024-08-02 17:45:00'),(25,7,NULL,NULL,'Giờ Vào 07h50p Ngày 31 Tháng 07 Năm 2024','start','2024-07-31 07:50:00','2024-07-31 07:50:00'),(26,7,NULL,NULL,'Giờ Ra 17h32p Ngày 31 Tháng 07 Năm 2024','end','2024-07-31 17:32:00','2024-07-31 17:32:00'),(27,7,NULL,NULL,'Giờ Vào 08h05p Ngày 03 Tháng 08 Năm 2024','start','2024-08-03 08:05:00','2024-08-03 08:05:00'),(28,7,NULL,NULL,'Giờ Ra 17h50p Ngày 03 Tháng 08 Năm 2024','end','2024-08-03 17:50:00','2024-08-03 17:50:00'),(29,8,NULL,NULL,'Giờ Vào 07h30p Ngày 04 Tháng 08 Năm 2024','start','2024-08-04 07:30:00','2024-08-04 07:30:00'),(30,8,NULL,NULL,'Giờ Ra 17h37p Ngày 04 Tháng 08 Năm 2024','end','2024-08-04 17:37:00','2024-08-04 17:37:00'),(31,8,NULL,NULL,'Giờ Vào 08h10p Ngày 05 Tháng 08 Năm 2024','start','2024-08-05 08:10:00','2024-08-05 08:10:00'),(32,8,NULL,NULL,'Giờ Ra 17h45p Ngày 05 Tháng 08 Năm 2024','end','2024-08-05 17:45:00','2024-08-05 17:45:00'),(37,10,NULL,NULL,'Giờ Vào 08h00p Ngày 29 Tháng 07 Năm 2024','start','2024-07-29 08:00:00','2024-07-29 08:00:00'),(38,10,NULL,NULL,'Giờ Ra 17h33p Ngày 29 Tháng 07 Năm 2024','end','2024-07-29 17:33:00','2024-07-29 17:33:00'),(39,10,NULL,NULL,'Giờ Vào 08h25p Ngày 01 Tháng 08 Năm 2024','start','2024-08-01 08:25:00','2024-08-01 08:25:00'),(40,10,NULL,NULL,'Giờ Ra 17h46p Ngày 01 Tháng 08 Năm 2024','end','2024-08-01 17:46:00','2024-08-01 17:46:00'),(41,11,NULL,NULL,'Giờ Vào 07h45p Ngày 30 Tháng 07 Năm 2024','start','2024-07-30 07:45:00','2024-07-30 07:45:00'),(42,11,NULL,NULL,'Giờ Ra 17h39p Ngày 30 Tháng 07 Năm 2024','end','2024-07-30 17:39:00','2024-07-30 17:39:00'),(43,11,NULL,NULL,'Giờ Vào 08h15p Ngày 02 Tháng 08 Năm 2024','start','2024-08-02 08:15:00','2024-08-02 08:15:00'),(44,11,NULL,NULL,'Giờ Ra 17h48p Ngày 02 Tháng 08 Năm 2024','end','2024-08-02 17:48:00','2024-08-02 17:48:00'),(45,12,NULL,NULL,'Giờ Vào 08h05p Ngày 31 Tháng 07 Năm 2024','start','2024-07-31 08:05:00','2024-07-31 08:05:00'),(46,12,NULL,NULL,'Giờ Ra 17h41p Ngày 31 Tháng 07 Năm 2024','end','2024-07-31 17:41:00','2024-07-31 17:41:00'),(47,12,NULL,NULL,'Giờ Vào 08h30p Ngày 03 Tháng 08 Năm 2024','start','2024-08-03 08:30:00','2024-08-03 08:30:00'),(48,12,NULL,NULL,'Giờ Ra 17h35p Ngày 03 Tháng 08 Năm 2024','end','2024-08-03 17:35:00','2024-08-03 17:35:00'),(49,13,NULL,NULL,'Giờ Vào 07h30p Ngày 01 Tháng 08 Năm 2024','start','2024-08-01 07:30:00','2024-08-01 07:30:00'),(50,13,NULL,NULL,'Giờ Ra 17h37p Ngày 01 Tháng 08 Năm 2024','end','2024-08-01 17:37:00','2024-08-01 17:37:00'),(51,13,NULL,NULL,'Giờ Vào 08h10p Ngày 05 Tháng 08 Năm 2024','start','2024-08-05 08:10:00','2024-08-05 08:10:00'),(52,13,NULL,NULL,'Giờ Ra 17h50p Ngày 05 Tháng 08 Năm 2024','end','2024-08-05 17:50:00','2024-08-05 17:50:00'),(53,14,NULL,NULL,'Giờ Vào 08h20p Ngày 02 Tháng 08 Năm 2024','start','2024-08-02 08:20:00','2024-08-02 08:20:00'),(54,14,NULL,NULL,'Giờ Ra 17h33p Ngày 02 Tháng 08 Năm 2024','end','2024-08-02 17:33:00','2024-08-02 17:33:00'),(55,14,NULL,NULL,'Giờ Vào 08h00p Ngày 06 Tháng 08 Năm 2024','start','2024-08-06 08:00:00','2024-08-06 08:00:00'),(56,14,NULL,NULL,'Giờ Ra 17h50p Ngày 06 Tháng 08 Năm 2024','end','2024-08-06 17:50:00','2024-08-06 17:50:00'),(57,15,NULL,NULL,'Giờ Vào 07h50p Ngày 04 Tháng 08 Năm 2024','start','2024-08-04 07:50:00','2024-08-04 07:50:00'),(58,15,NULL,NULL,'Giờ Ra 17h40p Ngày 04 Tháng 08 Năm 2024','end','2024-08-04 17:40:00','2024-08-04 17:40:00'),(59,15,NULL,NULL,'Giờ Vào 08h15p Ngày 07 Tháng 08 Năm 2024','start','2024-08-07 08:15:00','2024-08-07 08:15:00'),(60,15,NULL,NULL,'Giờ Ra 17h45p Ngày 07 Tháng 08 Năm 2024','end','2024-08-07 17:45:00','2024-08-07 17:45:00'),(61,39,NULL,NULL,'Giờ Vào 3h27p Ngày 02 Tháng 08 Năm 2024','start','2024-08-02 03:28:00','2024-08-02 03:28:00'),(62,39,NULL,NULL,'Giờ Ra 6h8p Ngày 02 Tháng 08 Năm 2024','end','2024-08-02 06:08:38','2024-08-02 06:08:38'),(63,39,NULL,NULL,'Giờ Vào 10h20p Ngày 07 Tháng 08 Năm 2024','start','2024-08-07 10:20:48','2024-08-07 10:20:48'),(64,39,NULL,NULL,'Giờ Vào 10h20p Ngày 07 Tháng 08 Năm 2024','start','2024-08-07 10:21:01','2024-08-07 10:21:01'),(65,39,NULL,NULL,'Giờ Ra 10h20p Ngày 07 Tháng 08 Năm 2024','end','2024-08-07 10:22:02','2024-08-07 10:22:02'),(66,39,NULL,NULL,'Giò Ra 10h50p Ngày 07 Tháng 08 Näm 2024','start','2024-08-07 10:52:09','2024-08-07 10:52:09'),(67,39,NULL,NULL,'Giò Ra 12h50p Ngày 07 Tháng 08 Näm 2024','end','2024-08-07 10:52:44','2024-08-07 10:52:44'),(68,2,NULL,NULL,'Giờ Vào 16h39p Ngày 12 Tháng 08 Năm 2024','start','2024-08-12 16:39:17','2024-08-12 16:39:17'),(69,39,NULL,NULL,'Giờ Vào 16h1p Ngày 15 Tháng 08 Năm 2024','start','2024-08-15 16:01:22','2024-08-15 16:01:22'),(70,39,NULL,NULL,'Giờ Vào 16h1p Ngày 15 Tháng 08 Năm 2024','start','2024-08-15 16:06:34','2024-08-15 16:06:34'),(71,39,NULL,NULL,'Giờ Vào 16h1p Ngày 15 Tháng 08 Năm 2024','start','2024-08-15 16:06:54','2024-08-15 16:06:54'),(72,39,NULL,NULL,'Giờ Vào 16h1p Ngày 15 Tháng 08 Năm 2024','start','2024-08-15 16:06:55','2024-08-15 16:06:55'),(73,39,NULL,NULL,'Giờ Ra 16h7p Ngày 15 Tháng 08 Năm 2024','end','2024-08-15 16:15:02','2024-08-15 16:15:02'),(74,39,NULL,NULL,'Giờ Ra 16h15p Ngày 15 Tháng 08 Năm 2024','end','2024-08-15 16:17:10','2024-08-15 16:17:10'),(75,39,NULL,NULL,'Giờ Ra 16h17p Ngày 15 Tháng 08 Năm 2024','end','2024-08-15 16:17:24','2024-08-15 16:17:24'),(76,39,NULL,NULL,'Giờ Ra 16h17p Ngày 15 Tháng 08 Năm 2024','end','2024-08-15 16:17:30','2024-08-15 16:17:30'),(77,1,NULL,NULL,'Giờ Vào 15h15p Ngày 22 Tháng 08 Năm 2024','start','2024-08-22 15:15:52','2024-08-22 15:15:52'),(78,38,NULL,NULL,'Giờ Ra 16h21p Ngày 28 Tháng 08 Năm 2024','end','2024-08-28 16:21:41','2024-08-28 16:21:41'),(79,38,NULL,NULL,'Giờ Vào 16h21p Ngày 28 Tháng 08 Năm 2024','start','2024-08-28 16:21:46','2024-08-28 16:21:46');
/*!40000 ALTER TABLE `timekeepings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password_hash` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `dob` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `roleId` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'R0',
  `mobile` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'Nam',
  `home_town` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cccd` int(11) DEFAULT NULL,
  `nation` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `education` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `profile` text COLLATE utf8mb4_general_ci,
  `date_of_join` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `image` longblob,
  `refresh_token` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `mobile` (`mobile`),
  KEY `roleId` (`roleId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Hoàng','Nguyễn','hoang.nguyen@gmail.com','Số 1, Đường Ngô Thì Nhậm, Quận Hà Đông, Hà Nội','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1995-03-12','R1','0901234567','Nam','Hà Nội',123456789,'Việt Nam','Đại học Bách Khoa Hà Nội',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-22 16:16:52'),(2,'Nguyễn','Phúc Ánh','phucanh.nguyen@gmail.com','Số 2, Đường Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1991-07-25','R0','0901234568','Nữ','Hà Nội',123456780,'Việt Nam','Đại học Kinh tế Quốc dân',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-09-09 11:57:22'),(3,'Nguyễn','Phúc Vĩnh','phucvinh.nguyen@gmail.com','Số 3, Đường Nguyễn Trãi, Quận Thanh Xuân, Hà Nội','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1998-11-09','R2','0901234569','Nam','Hà Nội',123456781,'Việt Nam','Đại học Công đoàn',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-22 15:14:09'),(4,'Tôn','Thất Thuyết','thatthuyet.ton@gmail.com','Số 4, Đường Láng, Quận Đống Đa, Hà Nội','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1994-05-16','R1','0901234570','Nam','Hà Nội',123456782,'Việt Nam','Đại học Ngoại thương',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-29 15:27:23'),(5,'Tôn','Thất Tùng','that.tung.ton@gmail.com','Số 5, Đường Phạm Văn Đồng, Quận Bắc Từ Liêm, Hà Nội','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1992-09-30','R0','0901234571','Nam','Hà Nội',123456783,'Việt Nam','Đại học Giao thông Vận tải',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-01 10:00:00'),(6,'Tôn','Đức Thắng','duc.thang.ton@gmail.com','Số 6, Đường Nguyễn Xiển, Quận Thanh Xuân, Hà Nội','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1999-01-14','R0','0901234572','Nam','Hà Nội',123456784,'Việt Nam','Đại học Thủy lợi',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-01 10:00:00'),(7,'Phạm','Tuân','tuan.pham@gmail.com','Số 7, Đường Xuân Thủy, Quận Cầu Giấy, Hà Nội','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1996-12-20','R0','0901234573','Nam','Hà Nội',123456785,'Việt Nam','Đại học Sư phạm Hà Nội',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-01 10:00:00'),(8,'Hoàng','Phủ Ngọc','phungoc.hoang@gmail.com','Số 8, Đường Đinh Tiên Hoàng, Quận Hoàn Kiếm, Hà Nội','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1993-06-05','R0','0901234574','Nam','Hà Nội',123456786,'Việt Nam','Đại học Mỹ thuật Công nghiệp',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-01 10:00:00'),(10,'Nguyễn','Phong Hồng','phonghong.nguyen@gmail.com','Số 10, Đường Nguyễn Văn Trỗi, Quận Phú Nhuận, TP Hồ Chí Minh','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1997-04-17','R0','0901234576','Nam','TP Hồ Chí Minh',123456788,'Việt Nam','Đại học Tôn Đức Thắng',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-01 10:00:00'),(11,'Nguyễn','Văn Toàn','vantoan.nguyen@gmail.com','Số 11, Đường Hùng Vương, Quận 5, TP Hồ Chí Minh','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1992-10-11','R1','0901234577','Nam','TP Hồ Chí Minh',123456789,'Việt Nam','Đại học Bách khoa TP Hồ Chí Minh',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-07 10:06:08'),(12,'Nguyễn','Ngọc Trường','ngoctruong.nguyen@gmail.com','Số 12, Đường Võ Văn Tần, Quận 3, TP Hồ Chí Minh','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1996-02-14','R0','0901234578','Nam','TP Hồ Chí Minh',123456780,'Việt Nam','Đại học Hoa Sen',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-01 10:00:00'),(13,'Trần','Hữu Đông','huudong.tran@gmail.com','Số 13, Đường Bạch Đằng, Quận Tân Bình, TP Hồ Chí Minh','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1999-01-21','R0','0901234579','Nam','TP Hồ Chí Minh',123456781,'Việt Nam','Đại học Sài Gòn',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-01 10:00:00'),(14,'Trần','Lê Quốc','lequoc.tran@gmail.com','Số 14, Đường Nguyễn Thái Học, Quận 1, TP Hồ Chí Minh','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','1994-12-30','R0','0901234580','Nam','TP Hồ Chí Minh',123456782,'Việt Nam','Đại học Khoa học Xã hội và Nhân văn',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-01 10:00:00'),(15,'Trương','Văn Thái','vanthai.truong@gmail.com','Số 15, Đường Võ Thị Sáu, Quận 3, TP Hồ Chí Minh','$2a$10$f9uG3DkRPdvxBiZFuKedk.KBRU2JPN6mvjQimTOqQqEzoZCg/Dcpu','2000-03-07','R0','0901234581','Nam','TP Hồ Chí Minh',123456783,'Việt Nam','Đại học Sư phạm TP Hồ Chí Minh',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-01 10:00:00','2024-08-01 10:00:00'),(37,'Michael','Johnson','michaeljohnson@example.com','789 Some Street, Hometown City, Countryland','$2a$10$jR4SNhb9Lg7eUAk6IXXCPeBX4csuhp6qlmSaVhpUeTXA4nD4cGMhi','1982-07-20','R1','0111222333','Nam','Hometown City',1122334455,'Countryland','PhD',NULL,NULL,NULL,NULL,NULL,NULL,'2024-07-20 18:13:21','2024-08-02 04:17:47'),(38,'Như','Bùi','buinhuy@gmail.com','TP Hồ Chí Minh','$2a$10$SBz1o3B9jGui5/4XlejMaO.9mOjw8rVWB87p03mHyBUrJqyFwKZsu','2003-04-26','R1','0923134432','Nữ','An giang',1312313132,'VietNam','ChoMoi University',NULL,NULL,NULL,NULL,NULL,NULL,'2024-07-21 17:57:39','2024-08-28 17:15:26'),(39,'Ngoc','Than','ngocthan@gmail.com','321 Street, Example Town, VietNam','$2a$10$SBz1o3B9jGui5/4XlejMaO.9mOjw8rVWB87p03mHyBUrJqyFwKZsu','2001-03-10','R2','0525844353','Male','Example Town',324241434,'VietNam','Hanoi University',NULL,NULL,NULL,NULL,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM5LCJpYXQiOjE3MjYwNTA0MTYsImV4cCI6MTczMTIzNDQxNn0.JXJ3J8xJQHacWYoORtauBs8kWQO0y7GM1Q3YDnRb7G0','2024-07-21 18:03:41','2024-09-11 17:26:56'),(42,'Tran','Thanh','minhnguyen@example.com','789 Street, Old Town, VietNam','$2a$10$RI0bTAVPashZ79hM0460OeMdKPHz7Pp4QdkUTn8vjW7QDMZNaUfEO','1995-08-25','R0','0912345678','Nam','Old Town',987654321,'VietNam','Da Nang University',NULL,NULL,NULL,NULL,NULL,NULL,'2024-08-06 15:04:57','2024-08-06 15:16:43');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-12 21:21:11
