/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 10.4.24-MariaDB : Database - database_demo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`database_demo` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `database_demo`;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lang` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `currency` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `remember_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`email`,`password`,`name`,`phone`,`avatar`,`lang`,`currency`,`remember_token`) values 
(1,'nguyenkimdien02@gmail.com','123456','Nguyễn Kim Điền','988162753','nguyen-kim-dien.png','vi','VND','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg3OTQ3NDA2LCJleHAiOjE2ODc5ODM0MDZ9.y3jBQZHmpvgau8saIUZu0MZvyORfEZ0qg_vIaAZt0Rs'),
(16,'tranthithusuong@dienkim.vn','123456','Trần Thị Thu Sương','902367851','paper-1.jpg','vi','VND',NULL),
(17,'nguyenthihuong@dienkim.vn','123456','Nguyễn Thị Hương','901234567','paper-2.jpg','vi','VND',NULL),
(18,'dothitrinh@dienkim.vn','123456','Đỗ Thị Trinh','956702341','paper-3.jpg','vi','VND',NULL),
(19,'tranthingocmai@dienkim.vn','123456','Trần Thị Ngọc Mai','967082341','paper-4.jpg','vi','VND',NULL),
(20,'lythuongkiet123@dienkim.vn','123456','Lý Thường Kiệt','902345671','paper-6.jpg','vi','VND',NULL),
(21,'lythaito@dienkim.vn','123456','Lý Thái Tổ','956702381','paper-7.jpg','vi','VND',NULL),
(22,'dienbienphu@dienkim.vn','123456','Điện Biên Phủ','912356708','paper-8.jpg','vi','VND',NULL),
(23,'nguyenthaihoc@dienkim.vn','123456','Nguyễn Thái Học','905678231','paper-10.jpg','vi','VND',NULL),
(24,'buidinhcuong@dienkim.vn','123456','Bùi Đình Cường','904567841','paper-11.jpg','vi','VND',NULL),
(25,'buixuanthuan@dienkim.vn','123456','Bùi Xuân Thuận','924567081','paper-12.jpg','vi','VND',NULL),
(26,'phamhonganh@dienkim.vn','123456','Phạm Hồng Anh','945078231','paper-13.jpg','vi','VND',NULL),
(27,'dangvanthanh@dienkim.vn','123456','Đặng Văn Thành','987023641','paper-14.jpg','vi','VND',NULL),
(28,'danghonganh@dienkim.vn','123456','Đặng Hồng Anh','923456789','paper-15.jpg','vi','VND',NULL),
(29,'tranthixanh@dienkim.vn','123456','Trần Thị Xanh','914567023','paper-16.jpg','vi','VND',NULL),
(30,'lethidua@dienkim.vn','123456','Lê Thị Dừa','914567045',NULL,'vi','VND',NULL),
(31,'vudinhthai@dienkim.vn','123456','Vũ Đình Thái','902345671',NULL,'vi','VND',NULL),
(32,'levandai@dienkim.vn','123456','Lê Văn Đại','956027130',NULL,'vi','VND',NULL),
(33,'phamdinhcuong@dienkim.vn','123456','Phạm Đình Cường','925670281',NULL,'vi','VND',NULL),
(34,'vinhthienkim@dienkim.vn','123456','Vĩnh Thiên Kim','907234561','paper-1.jpg','vi','VND',NULL),
(35,'dinhbolinh@dienkim.vn','123456','Đinh Bộ Lĩnh','902356781',NULL,'vi','VND',NULL),
(36,'tranthichan@dienkim.vn','123456','Trần Thị Chân','914567802',NULL,'vi','VND',NULL),
(37,'trieuthida@dienkim.vn','123456','Triệu Thị Đà','902367891','paper-1.jpg','vi','VND',NULL),
(38,'vothikimngan@dienkim.vn','123456','Võ Thị Kim Ngân','912345671',NULL,'vi','VND',NULL),
(39,'tranthiloi@dienkim.vn','123456','Trần Thị Lợi','946708251',NULL,'vi','VND',NULL),
(40,'daothimo@dienkim.vn','123456','Đào Thị Mỏ','903456781','paper-8.jpg','vi','VND',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
