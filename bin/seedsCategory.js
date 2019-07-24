const mongoose = require('mongoose');
const Category = require('../models/category');


require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI);

const category = [
  { title: 'Bench Grinder Wheels',
    image: '../images/bench/Bench-1.jpg' 
  },
  { title: 'Surface Grinder Wheels',
    image: '../images/surface/surface-1.jpg'
  },
  { title: 'Diamond Dresser',
    image: '../images/diamond-dresser/dresser-1.jpg'
  },
  { title: 'Metal Bond',
    image: '../images/metal-bond/metal-1.jpg'
  },
  { title: 'Mounted Points',
    image: '../images/mounted-points/point-1.jpg'
  },
  { title: 'Traditional Grinder Wheels',
    image: '../images/traditional/t-1.png'
  },
]

Category.deleteMany()
  .then(()=>{
    Category.create(category, (err) => {
      if (err) { throw(err) }
      console.log(`Created ${category.length} category`)
      mongoose.connection.close();
    });
  })
