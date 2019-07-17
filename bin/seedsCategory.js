const mongoose = require('mongoose');
const Category = require('../models/category');


require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI);

const Category = [
  { title: 'Bench Grinder Wheels',
    image: 'Bench-1.jpg' 
  },
  { title: 'Surface Grinder Wheels',
    image: 'surface-1.jpg'
  },
  { title: 'Diamond Dresser',
    image: 'dresser-1.jpg'
  },
  { title: 'Metal Bond',
    image: 'metal-1.jpg'
  },
  { title: 'Mounted Points',
    image: 'point-1.jpg'
  },
  { title: 'Traditional Grinder Wheels',
    image: 'tool-books.jpg'
  },
]

Category.create(cetegory, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${cetegory.length} cetegory`)
  mongoose.connection.close();
});