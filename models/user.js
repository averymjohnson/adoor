'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    caresAboutSchools: DataTypes.BOOLEAN,
    caresAboutGroceryStores: DataTypes.BOOLEAN,
    caresAboutParks: DataTypes.BOOLEAN,
    caresAboutCrime: DataTypes.BOOLEAN,
    caresAboutHospitals: DataTypes.BOOLEAN,
    zipcode: DataTypes.STRING,
    budget: DataTypes.DECIMAL,
    sqft: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Match, {
          onDelete: "cascade"
        })
      },
      validPassword: function(password, passwd, done, user){
        bcrypt.compare(password, passwd, function(err, isMatch){
          if(err) console.log(err);
          if(isMatch){
            return done(null, user);
          } else{
            return done(null, false);
          }
        });
      }
    }

  },{
    User.hook('beforeCreate', function(user, fn){
      var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
          return salt;
      });
      bcrypt.hash(user.password, salt, null, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        return fn(null, user);
      });
    });
  });
  return User;
};