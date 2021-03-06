'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('listings', [{
          address: '1334 Acme Road',
          city: "Kansas City",
          zipcode: "66401",
          latitude: "32",
          longitude: "32",
          bedrooms: 6,
          bathrooms: 2,
          price: 150000,
          picturePath: "assets/img/test6.jpg",
          sellerEmail: "hello3@gmail.com"
      },
      {
          address: '2456 West Road',
          city: "Kansas City",
          zipcode: "66402",
          latitude: "35",
          longitude: "31",
          bedrooms: 5,
          bathrooms: 3,
          price: 100000,
          picturePath: "assets/img/test2.jpg",
          sellerEmail: "hello4@gmail.com"
      },
      {
          address: '2354 Main Street',
          city: "Kansas City",
          zipcode: "66302",
          latitude: "32",
          longitude: "34",
          bedrooms: 2,
          bathrooms: 1,
          price: 100000,
          picturePath: "assets/img/test3.jpg",
          sellerEmail: "hello5@gmail.com"
      },
      {
          address: '1335 Broadway',
          city: "Kansas City",
          zipcode: "66401",
          latitude: "33",
          longitude: "33",
          bedrooms: 4,
          bathrooms: 2,
          price: 150000,
          picturePath: "assets/img/test4.jpg",
          sellerEmail: "hello6@gmail.com"
      },
      {
          address: '223 Washington Ave',
          city: "Kansas City",
          zipcode: "66433",
          latitude: "273",
          longitude: "4",
          bedrooms: 2,
          bathrooms: 1,
          price: 33000,
          picturePath: "assets/img/test5.jpg",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '9730 E 41st St.',
          city: "Kansas City",
          zipcode: "64133",
          latitude: "-94.583076",
          longitude: "39.102951",
          bedrooms: 2,
          bathrooms: 1,
          price: 100000,
          picturePath: "assets/img/house1.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '9725 Spring Valley Rd',
          city: "Kansas City",
          zipcode: "64134",
          latitude: "38.94775",
          longitude: "-94.487129",
          bedrooms: 2,
          bathrooms: 2,
          price: 120000,
          picturePath: "assets/img/house2.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '9715 Eastern Ave',
          city: "Kansas City",
          zipcode: "64134",
          latitude: "38.948509",
          longitude: "-94.50293",
          bedrooms: 2,
          bathrooms: 2,
          price: 130000,
          picturePath: "assets/img/house3.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '9650 Elm Ave',
          city: "Kansas City",
          zipcode: "64134",
          latitude: "38.947079",
          longitude: "-94.47757",
          bedrooms: 2,
          bathrooms: 2,
          price: 140000,
          picturePath: "assets/img/house4.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '9621 Olmstead Rd',
          city: "Kansas City",
          zipcode: "64134",
          latitude: "38.946861",
          longitude: "-94.461121",
          bedrooms: 2,
          bathrooms: 1,
          price: 180000,
          picturePath: "assets/img/house5.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '9611 Holmes Rd',
          city: "Kansas City",
          zipcode: "64131",
          latitude: "38.953079",
          longitude: "-94.581642",
          bedrooms: 2,
          bathrooms: 2,
          price: 180000,
          picturePath: "assets/img/house6.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '9603 E 47th',
          city: "Kansas City",
          zipcode: "64133",
          latitude: "39.102951",
          longitude: "-94.583076",
          bedrooms: 2,
          bathrooms: 1,
          price: 220000,
          picturePath: "assets/img/house7.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '9527 MANNING AVE',
          city: "Kansas City",
          zipcode: "64134",
          latitude: "38.95006539",
          longitude: "-94.47802667",
          bedrooms: 2,
          bathrooms: 2,
          price: 240000,
          picturePath: "assets/img/house8.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '9521 OAKWOOD DR',
          city: "Kansas City",
          zipcode: "64137",
          latitude: "38.95244524",
          longitude: "-94.55404883",
          bedrooms: 2,
          bathrooms: 1,
          price: 225000,
          picturePath: "assets/img/house9.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1005 Olive St',
          city: "Kansas City",
          zipcode: "64137",
          latitude: "38.95343739",
          longitude: "-94.55310258",
          bedrooms: 3,
          bathrooms: 3,
          price: 2450000,
          picturePath: "assets/img/house10.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1006 Spruce Ave',
          city: "Kansas City",
          zipcode: "64114",
          latitude: "38.956009",
          longitude: "-94.589302",
          bedrooms: 3,
          bathrooms: 2,
          price: 265000,
          picturePath: "assets/img/house11.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1008 Spruce Ave',
          city: "Kansas City",
          zipcode: "64114",
          latitude: "38.95623",
          longitude: "-94.589287",
          bedrooms: 3,
          bathrooms: 2,
          price: 285000,
          picturePath: "assets/img/house12.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1009 Jackson Ave',
          city: "Kansas City",
          zipcode: "64114",
          latitude: "38.956181",
          longitude: "-94.590446",
          bedrooms: 2,
          bathrooms: 1,
          price: 150000,
          picturePath: "assets/img/house13.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1009 OAKLEY AVE',
          city: "Kansas City",
          zipcode: "64114",
          latitude: "38.95615",
          longitude: "-94.589783",
          bedrooms: 2,
          bathrooms: 1,
          price: 185000,
          picturePath: "assets/img/house14.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '101 N GLADSTONE BLVD',
          city: "Kansas City",
          zipcode: "64114",
          latitude: "38.956291",
          longitude: "-94.589783",
          bedrooms: 3,
          bathrooms: 3,
          price: 33000,
          picturePath: "assets/img/house15.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1010 Fuller Ave',
          city: "Kansas City",
          zipcode: "64114",
          latitude: "38.95642",
          longitude: "-94.58912",
          bedrooms: 3,
          bathrooms: 3,
          price: 200000,
          picturePath: "assets/img/house16.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1011 Brooklyn Ave',
          city: "Kansas City",
          zipcode: "64155",
          latitude: "38.957206",
          longitude: "-94.5869139",
          bedrooms: 3,
          bathrooms: 2,
          price: 385000,
          picturePath: "assets/img/house17.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1011 Oakley Ave',
          city: "Kansas City",
          zipcode: "64127",
          latitude: "39.1008",
          longitude: "-94.53289",
          bedrooms: 3,
          bathrooms: 2,
          price: 110000,
          picturePath: "assets/img/house18.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1012 Topping Ave',
          city: "Kansas City",
          zipcode: "64127",
          latitude: "39.100819",
          longitude: "-94.5326",
          bedrooms: 3,
          bathrooms: 3,
          price: 245000,
          picturePath: "assets/img/house19.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '21015 E 100th Ter',
          city: "Kansas City",
          zipcode: "64131",
          latitude: "38.986431",
          longitude: "-94.576561",
          bedrooms: 3,
          bathrooms: 2,
          price: 145000,
          picturePath: "assets/img/house20.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1016 Fuller Ave',
          city: "Kansas City",
          zipcode: "64114",
          latitude: "38.95853",
          longitude: "-94.58705",
          bedrooms: 2,
          bathrooms: 2,
          price: 33000,
          picturePath: "assets/img/house21.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1020 Fuller Ave',
          city: "Kansas City",
          zipcode: "64138",
          latitude: "38.9537187",
          longitude: "-94.48583255",
          bedrooms: 2,
          bathrooms: 1,
          price: 150000,
          picturePath: "assets/img/house22.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '10201 Newton Ave',
          city: "Kansas City",
          zipcode: "64127",
          latitude: "39.10099",
          longitude: "-94.532761",
          bedrooms: 4,
          bathrooms: 3,
          price: 500000,
          picturePath: "assets/img/house23.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '10206 Oakland Ave',
          city: "Kansas City",
          zipcode: "64125",
          latitude: "39.099911",
          longitude: "-94.502342",
          bedrooms: 2,
          bathrooms: 1,
          price: 210000,
          picturePath: "assets/img/house24.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '10208 Blue Ridge Blvd',
          city: "Kansas City",
          zipcode: "64138",
          latitude: "38.95351",
          longitude: "-94.454689",
          bedrooms: 3,
          bathrooms: 2,
          price: 170000,
          picturePath: "assets/img/house25.png",
          sellerEmail: "hello3@gmail.com"        
      },
      {
          address: '1021 E LINWOOD BLVD',
          city: "Kansas City",
          zipcode: "64126",
          latitude: "39.09988617",
          longitude: "-94.50331179",
          bedrooms: 4,
          bathrooms: 1,
          price: 33000,
          picturePath: "assets/img/house26.png",
          sellerEmail: "hello3@gmail.com"        
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('listings', null, {});
  }
};
