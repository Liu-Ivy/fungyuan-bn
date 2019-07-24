const mongoose = require('mongoose');
const Product = require('../models/product');

require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI);

const product = [
  {
    name: 'Bench Grinding Wheel X-Fine 6X1X1 150G',
    img: '../images/bench/Bench-1.jpg',
    description: `Norton grinding wheels are made from sharp, hard aluminum oxide abrasive grain. These industrial quality wheels grind cool and run true.
    Maximum operating speed 3600 rpm
    Bushings 1/2, 5/8, 3/4, and 7/8"
    150 grit`,
    category_id: '5d384b74fbf2fa0d640da181'
  },
  {
    name: 'Bench Grinding Wheel X-Fine 8X1X1 150G',
    img: '../images/bench/Bench-2.jpg',
    description: `Norton grinding wheels are made from sharp, hard aluminum oxide abrasive grain. These industrial quality wheels grind cool and run true.
    Maximum operating speed 3600 rpm
    Bushings 7/8, 3/4, and 5/8
    150 grit`,
    category_id: '5d384b74fbf2fa0d640da181'
  },
  {
    name: 'Tormek Japanese Waterstone (SJ-250)',
    img: '../images/surface/surface-2.jpg',
    description: 'The Tormek Japanese Waterstone is 4000 grit and delivers a mirror finish with hardly any visible marks. Since it is made to create the finest surface, it has a limited steel removal capacity and cannot be used for shaping* a tool.',
    category_id: '5d384b74fbf2fa0d640da182'
  },
  {
    name: 'Tormek Blackstone Silicon Carbide Dressing Wheel (SB-250)',
    img: '../images/surface/surface-1.jpg',
    description: 'Tormek Blackstone Silicon has been developed for shaping and sharpening* HSS and exotic alloyed steels.It can even touch up tungsten carbide, where the tool already has an established shape.',
    category_id: '5d384b74fbf2fa0d640da182'
  },
  {
    name: 'Norton Gemini A2 1X1 1/4 Medium Grit Vitrified Mounted Point 1/4 Shank',
    img: '../images/mounted-points/point-3.jpg',
    description: 'Mounted Points With Vitrified Bond Are Ideal For Both Small Job Shop Applications And High Volume Foundry Operations.',
    category_id: '5d384b74fbf2fa0d640da185'
  },
  {
    name: 'Norton Resin Mounted Point, 7/8 x 2in, 30G',
    img: '../images/mounted-points/point-4.JPG',
    description: `Abrasive Material: Zirconia Alumina
    Abrasive Shank Type: 1/4"
    Series: N4`,
    category_id: '5d384b74fbf2fa0d640da185'
  },
  {
    name: 'Norton A11 Mounted Point (Each)',
    img: '../images/mounted-points/point-2.jpeg',
    description: '"A"shaped Mounted Points are designed for fast stock removal, cleaning metal castings and grinding of work pieces with detailed shapes or limited access to work surfaces.',
    category_id:'5d384b74fbf2fa0d640da185'
  },
  {
    name: 'Round Shank Grinding Wheel',
    img: '../images/diamond-dresser/dresser-4.jpg',
    description: 'A 3/8" x 2" Round Shank Grinding Wheel Single Point Diamond Dresser Tool',
    category_id:'5d384b74fbf2fa0d640da183'
  },
  {
    name: 'Round Shank Grinding Wheel',
    img: '../images/diamond-dresser/dresser-2.jpg',
    description: 'A 1/8" x 2" Round Shank Grinding Wheel Single Point Diamond Dresser Tool',
    category_id:'5d384b74fbf2fa0d640da183'
  },
  {
    name: 'Single Point Diamond Dresser Pen',
    img: '../images/diamond-dresser/dresser-3.jpg',
    description: 'A 3/8" Dia 2" Length Grinding Wheel Single Point Diamond Dresser Pen',
    category_id:'5d384b74fbf2fa0d640da183'
  },
  {
    name: ' ZTSUPERHARD Metal Bond Grinding Wheels',
    img: '../images/metal-bond/metal-1.jpg',
    description: 'Metal bond high precision dicing blades with steel core is compound of steel plate and superabrasive work layer. The steel plate has high strength and high rigidity. They are generally used for deep cutting and grooving',
    category_id:'5d384b74fbf2fa0d640da184'
  },
  {
    name: 'Metal Bond Diamond Pencil Grinding Wheel For Glass Edging M001',
    img: '../images/metal-bond/metal-2.jpg',
    description: `Metal bond diamond pencil grinding wheels are with round edge, special for glass edge processing grinding, can be used on shape edging machine, CNC machine.
    This type of diamond grinding wheels can be customized according to the client’s needs.`,
    category_id:'5d384b74fbf2fa0d640da184'
  },
  {
    name: 'Heavy Duty Diamond Grinding Wheel',
    img: '../images/traditional/t-2.jpg',
    description: 'Diamond Ground Products is dedicated to the improvement of weld quality & welder productivity, and maintains a reputation as the industry leader in tungsten and tungsten preparation. Our ongoing management philosophy is to provide quality product and receptive service that exceeds even the most stringent expectations. Contact DGP today to see how we can help with your current or future welding applications.',
    category_id:'5d384b74fbf2fa0d640da186'
  },
  {
    name: 'Sharpshooter 300 Grit Grinding Wheel – 6″ Diameter',
    img: '../images/traditional/t-3.jpg',
    description: 'Sharpshooter is a registered trademarks of Pro-Fusion Technologies. Diamond Ground Products is in no way affiliated with Pro-Fusion® Technologies or their brand names. We supply high quality replacement parts manufactured by or for Diamond Ground Products to demanding specifications. The parts are engineered to be interchangeable with Pro-Fusion® parts, are not OEM parts and are not endorsed by Pro-Fusion®. References to the named machines, model numbers or part numbers are for your convenience only.',
    category_id:'5d384b74fbf2fa0d640da186'
  }
]

Product.deleteMany()
  .then(() => {
    Product.create(product,(err) => {
      if(err){ throw(err) }
      console.log(`Created ${product.length} product`)
      mongoose.connection.close();
    });
  })