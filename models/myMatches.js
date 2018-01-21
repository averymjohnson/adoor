const Sequelize = require ("sequelize");

const connect = new Sequelize ('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',

    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const myMatches = connect.define("match", {
	id: Sequelize.INTEGER,
	address: Sequelize.STRING,
	city: Sequelize.STRING,
	zip: Sequelize.STRING,
	latitude: Sequelize.DECIMAL,
	longitude: Sequelize.DECIMAL,
	bedrooms: Sequelize.INTEGER,
	bathrooms: Sequelize.INTEGER,
	price: Sequelize.DECIMAL,
	picturePath: Sequelize.STRING,
	sellerId: Sequelize.INTEGER
});

connection.sync().then(function(){
	myMatches.create({
	id: 123,
	address: "553 W 5th St",
	city: "Kansas City",
	zip: "64030",
	latitude: 39.0997,
	longitude: 94.5786,
	bedrooms: 3,
	bathrooms: 2,
	price: 150000.00,
	picturePath: "image.png",
	sellerId: 230
	});
});
	


connection.sync().then(function(){
	listings.findAll().then(function(myMatches){
		console.log(myMatches);
	})
})


