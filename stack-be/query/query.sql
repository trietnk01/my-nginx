DROP TABLE users;
CREATE TABLE users(
	`id` BIGINT PRIMARY KEY AUTO_INCREMENT,
	`email` VARCHAR(255) NULL,
	`password` VARCHAR(255) NULL ,	
	`name` VARCHAR(255) NULL,	
	`phone` VARCHAR(255) NULL,
	`avatar` VARCHAR(255) NULL,
	`lang` VARCHAR(100) NULL,
	`currency` VARCHAR(100) NULL,
	`remember_token` VARCHAR(255) NULL
);

INSERT INTO users (`email`,`password`,`name`,`phone`,`avatar`,`lang`,`currency`) VALUES ('nguyenkimdien02@gmail.com','123456','Nguyễn Kim Điền','988162753','nguyen-kim-dien.png','vi','VND');

