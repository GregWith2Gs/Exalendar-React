CREATE DATABASE exalendar;
USE exalendar;

CREATE TABLE `users` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `user_name` varchar(255) UNIQUE NOT NULL,
  `pwd_hash` varchar(255) NOT NULL
);

CREATE TABLE `user_settings` (
  `user_id` int,
  `setting_id` int,
  `value` varchar(255)
);

CREATE TABLE `user_classes` (
  `user_id` int,
  `class_id` int
);

CREATE TABLE `settings` (
  `setting_id` int PRIMARY KEY AUTO_INCREMENT,
  `setting_name` varchar(255) UNIQUE NOT NULL,
  `setting_type` varchar(255) NOT NULL
);

CREATE TABLE `classes` (
  `class_id` int PRIMARY KEY AUTO_INCREMENT,
  `class_name` varchar(255) UNIQUE NOT NULL
);

insert into classes (class_name) values ('CSCI-1100'), ('CSCI-1200'), ('CSCI-2200'), ('CSCI-2500');

CREATE TABLE `events` (
  `class_name` varchar(255) NOT NULL,
  `event_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `event_type` varchar(255) NOT NULL,
  `event_title` varchar(255) NOT NULL,
  `event_description` varchar(255),
  `event_location` varchar(255),
  `event_start` datetime NOT NULL,
  `event_end` datetime NOT NULL,
  `event_freq` varchar(255), -- DAILY, WEEKLY, MONTHLY, YEARLY
  `event_end_date` datetime, 
  `event_interval` int, -- happens every x days, weeks, months, years
  `event_byday` varchar(255) -- SU, MO, TU, WE, TH, FR, SA
);

CREATE TABLE `class_admins` (
  `user_id` int NOT NULL,
  `class_id` int NOT NULL
);

ALTER TABLE `user_settings` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `user_settings` ADD FOREIGN KEY (`setting_id`) REFERENCES `settings` (`setting_id`);

ALTER TABLE `user_classes` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `user_classes` ADD FOREIGN KEY (`class_id`) REFERENCES `classes` (`class_name`);

ALTER TABLE `events` ADD FOREIGN KEY (`class_name`) REFERENCES `classes` (`class_name`);

ALTER TABLE `class_admins` ADD FOREIGN KEY (`user_id`) REFERENCES `user_classes` (`user_id`);

ALTER TABLE `class_admins` ADD FOREIGN KEY (`class_id`) REFERENCES `classes` (`class_id`);

#DROP TABLE `events`;

#ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';