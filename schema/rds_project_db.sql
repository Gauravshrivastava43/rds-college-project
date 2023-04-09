/**
 * Schema for the database rds_project_db.
 */
----
-- Table: students
----
CREATE TABLE IF NOT EXISTS `students`(
    `id` INT UNSIGNED NOT NULL UNIQUE PRIMARY KEY,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(50) NOT NULL,
    `first_name` VARCHAR(50) NOT NULL,
    `gender` ENUM('Male', 'Female', 'Other') NOT NULL
);

----
-- Table: students
----
CREATE TABLE IF NOT EXISTS `students_details`(
    `id` INT UNSIGNED NOT NULL UNIQUE PRIMARY KEY,
    `middle_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `course` VARCHAR(50) NOT NULL,
    `country_code` VARCHAR(10) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL,
    `address` VARCHAR(300) NOT NULL,
    FOREIGN KEY (`id`) REFERENCES students(`id`)
);

----
-- Table: contact
----
CREATE TABLE IF NOT EXISTS `contact`(
    `sno` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `country` VARCHAR(30) NOT NULL,
    `contents` VARCHAR(300) NOT NULL
);