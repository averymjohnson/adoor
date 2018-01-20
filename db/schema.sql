CREATE DATABASE adoor_db;

USE adoor_db;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	firstName VARCHAR(255) NOT NULL,
	lastName VARCHAR(255) NOT NULL,
	email VARCHAR(320) NOT NULL,
	password VARCHAR(32) NOT NULL,
	caresAboutSchools BOOLEAN default false,
	caresAboutGroceryStores BOOLEAN default false,
	caresAboutParks BOOLEAN default false,
	caresAboutCrime BOOLEAN default false,
	caresAboutHospitals BOOLEAN default false,
	zipcode VARCHAR(10) NOT NULL,
	budget DECIMAL(10,2) NOT NULL,
	sqft INT NOT NULL,
	bedrooms INT NOT NULL,
	bathrooms INT NOT NULL,
	PRIMARY KEY(id)

);

CREATE TABLE sellers(
	id INT NOT NULL AUTO_INCREMENT,
	firstName VARCHAR(255) NOT NULL,
	lastName VARCHAR(255) NOT NULL,
	email VARCHAR(320) NOT NULL,
	password VARCHAR(32) NOT NULL,
	phoneNumber VARCHAR(20) NOT NULL,
	PRIMARY KEY(id)

);


CREATE TABLE listings(
 	id INT NOT NULL AUTO_INCREMENT,
 	address VARCHAR(255) NOT NULL,
 	city VARCHAR(255) NOT NULL,
 	zipcode VARCHAR(10) NOT NULL,
 	latitude DECIMAL(10,8) NOT NULL,
 	longitude DECIMAL (11,8) NOT NULL,
 	bedrooms INT NOT NULL,
 	bathrooms INT NOT NULL,
 	price DECIMAL(10,2) NOT NULL,
 	picturePath VARCHAR(255) NOT NULL,
 	sellerId INT,
 	FOREIGN KEY(sellerId) REFERENCES sellers(id),
 	PRIMARY KEY(id)
);

CREATE TABLE community(
	id INT NOT NULL AUTO_INCREMENT,
	listingId INT NOT NULL,
	hospitalsCount INT NOT NULL,
	crimesCount INT NOT NULL,
	parksCount INT NOT NULL,
	groceryStoresCount INT NOT NULL,
	bestSchoolRating INT NOT NULL,
	FOREIGN KEY(listingId) REFERENCES listings(id),
	PRIMARY KEY(id)
<<<<<<< HEAD
<<<<<<< HEAD
)ENGINE=INNODB;
=======
);
>>>>>>> 2cef765aac802a297bcac1d7433cac88751c49da

CREATE TABLE matches(
	id INT NOT NULL AUTO_INCREMENT,
	userId INT,
	listingId INT,
	FOREIGN KEY(userId) REFERENCES users(id),
	FOREIGN KEY(listingId) REFERENCES listings(id),
	PRIMARY KEY(id)
<<<<<<< HEAD
)ENGINE=INNODB;
=======
);
>>>>>>> fc1a6dd27697276e58243a54f7fc271810ef9667
=======
);


>>>>>>> 2cef765aac802a297bcac1d7433cac88751c49da
