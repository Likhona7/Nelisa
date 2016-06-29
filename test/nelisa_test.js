var assert = require("assert");
var nelisa = require("../nelisa");
var spazaString = nelisa.readData('./files/week1.csv');
var spazaString2 = nelisa.readData('./files/week2.csv');
var spazaString3 = nelisa.readData('./files/week3.csv');
var spazaString4 = nelisa.readData('./files/week4.csv');
var spazaStringPurchase = nelisa.readData('./files/purchases.csv');

var week1 = {
  'Milk 1l': 39,
  'Imasi': 30,
  'Bread': 45,
  'Chakalaka Can': 23,
  'Gold Dish Vegetable Curry Can': 17,
  'Fanta 500ml': 33,
  'Coke 500ml': 54,
  'Cream Soda 500ml': 22,
  'Iwisa Pap 5kg': 17,
  'Top Class Soy Mince': 22,
  'Shampoo 1 litre': 3,
  'Soap Bar': 12,
  'Bananas - loose': 47,
  'Apples - loose': 36,
  'Mixed Sweets 5s': 49
};

var week2 = {
  'Imasi': 36,
  'Bread': 28,
  'Chakalaka Can': 21,
  'Gold Dish Vegetable Curry Can': 27,
  'Fanta 500ml': 23,
  'Coke 500ml': 42,
  'Cream Soda 500ml': 22,
  'Iwisa Pap 5kg': 10,
  'Top Class Soy Mince': 21,
  'Shampoo 1 litre': 6,
  'Soap Bar': 5,
  'Bananas - loose': 28,
  'Apples - loose': 21,
  'Mixed Sweets 5s': 54,
  'Milk 1l': 28,
  'Heart Chocolates': 20,
  'Rose (plastic)': 14,
  'Valentine Cards': 14
};

var week3 = {
  'Imasi': 25,
  'Bread': 24,
  'Chakalaka Can': 17,
  'Gold Dish Vegetable Curry Can': 8,
  'Fanta 500ml': 14,
  'Coke 500ml': 18,
  'Cream Soda 500ml': 12,
  'Iwisa Pap 5kg': 4,
  'Top Class Soy Mince': 12,
  'Shampoo 1 litre': 4,
  'Soap Bar': 8,
  'Bananas - loose': 17,
  'Apples - loose': 25,
  'Mixed Sweets 5s': 29,
  'Milk 1l': 28
};
var week4 = {
  'Imasi': 34,
  'Bread': 33,
  'Chakalaka Can': 33,
  'Gold Dish Vegetable Curry Can': 34,
  'Fanta 500ml': 24,
  'Coke 500ml': 45,
  'Cream Soda 500ml': 19,
  'Iwisa Pap 5kg': 16,
  'Top Class Soy Mince': 43,
  'Shampoo 1 litre': 13,
  'Soap Bar': 25,
  'Bananas - loose': 22,
  'Apples - loose': 32,
  'Mixed Sweets 5s': 40,
  'Milk 1l': 43
};

var week1total = {
  'Milk 1l': 390,
  'Imasi': 750,
  'Bread': 540,
  'Chakalaka Can': 230,
  'Gold Dish Vegetable Curry Can': 153,
  'Fanta 500ml': 214.5,
  'Coke 500ml': 351,
  'Cream Soda 500ml': 165,
  'Iwisa Pap 5kg': 510,
  'Top Class Soy Mince': 264,
  'Shampoo 1 litre': 90,
  'Soap Bar': 72,
  'Bananas - loose': 94,
  'Apples - loose': 72,
  'Mixed Sweets 5s': 120
};

var week2total = {
  Imasi: 900,
  'Bread': 336,
  'Chakalaka Can': 210,
  'Gold Dish Vegetable Curry Can': 243,
  'Fanta 500ml': 149.5,
  'Coke 500ml': 273,
  'Cream Soda 500ml': 165,
  'Iwisa Pap 5kg': 300,
  'Top Class Soy Mince': 252,
  'Shampoo 1 litre': 180,
  'Soap Bar': 30,
  'Bananas - loose': 56,
  'Apples - loose': 42,
  'Mixed Sweets 5s': 147,
  'Milk 1l': 280,
  'Heart Chocolates': 700,
  'Rose (plastic)': 210,
  'Valentine Cards': 56
};

var week3total = {
  Imasi: 625,
  'Bread': 288,
  'Chakalaka Can': 170,
  'Gold Dish Vegetable Curry Can': 72,
  'Fanta 500ml': 91,
  'Coke 500ml': 117,
  'Cream Soda 500ml': 90,
  'Iwisa Pap 5kg': 120,
  'Top Class Soy Mince': 144,
  'Shampoo 1 litre': 120,
  'Soap Bar': 48,
  'Bananas - loose': 34,
  'Apples - loose': 50,
  'Mixed Sweets 5s': 80,
  'Milk 1l': 280
};

var week4total = {
  Imasi: 850,
  Bread: 396,
  'Chakalaka Can': 330,
  'Gold Dish Vegetable Curry Can': 306,
  'Fanta 500ml': 156,
  'Coke 500ml': 292.5,
  'Cream Soda 500ml': 142.5,
  'Iwisa Pap 5kg': 480,
  'Top Class Soy Mince': 516,
  'Shampoo 1 litre': 390,
  'Soap Bar': 150,
  'Bananas - loose': 44,
  'Apples - loose': 64,
  'Mixed Sweets 5s': 108,
  'Milk 1l': 430
};

var productCategories = {
  "Bananas - loose": "Fruit",
  "Apples - loose": "Fruit",
  "Heart Chocolates ": "Sweets",
  "Imasi": "Dairy",
  "Bread": "Baked_Goods",
  "Chakalaka Can": "Canned_Goods",
  "Coke 500ml": "Soft_Drink",
  "Cream Soda 500ml": "Soft_Drink",
  "Fanta 500ml": "Soft_Drink",
  "Gold Dish Vegetable Curry Can": "Canned_Goods",
  "Iwisa Pap 5kg": "Starch",
  "Milk 1l": "Dairy",
  "Mixed Sweets 5s": "Sweets",
  "Shampoo 1 litre": "Hygiene",
  "Soap Bar": "Hygiene",
  "Top Class Soy Mince": "Meat",
  "Heart Chocolates": "Sweets",
  "Valentine Cards": "Other",
  "Rose (plastic)": "Other"
};

var categoryWeek1 = {
  "Baked_Goods": 45,
  "Canned_Goods": 40,
  "Dairy": 69,
  "Fruit": 83,
  "Hygiene": 15,
  "Starch": 17,
  "Meat": 22,
  "Soft_Drink": 109,
  "Sweets": 49
};

var categoryWeek2 = {
  "Baked_Goods": 28,
  "Canned_Goods": 48,
  "Dairy": 64,
  "Fruit": 49,
  "Hygiene": 11,
  "Starch": 10,
  "Meat": 21,
  "Other": 28,
  "Soft_Drink": 87,
  "Sweets": 74
}

var categoryWeek3 = {
  "Baked_Goods": 24,
  "Canned_Goods": 25,
  "Dairy": 53,
  "Fruit": 42,
  "Hygiene": 12,
  "Starch": 4,
  "Meat": 12,
  "Soft_Drink": 44,
  "Sweets": 29
}

var categoryWeek4 = {
  "Dairy": 77,
  "Baked_Goods": 33,
  "Canned_Goods": 67,
  "Soft_Drink": 88,
  "Starch": 16,
  "Meat": 43,
  "Hygiene": 38,
  "Fruit": 54,
  "Sweets": 40
};

var purchasesBulk = {
  "Apples - loose": 12,
  "Bananas - loose": 8,
  "Bread": 94,
  "Chakalaka Can": 83.5,
  "Coke 500ml": 28,
  "Cream Soda 500ml": 34.5,
  "Fanta 500ml": 44.5,
  "Gold Dish Vegetable Curry Can": 86,
  "Heart Chocolates": 25,
  "Imasi": 177,
  "Iwisa Pap 5kg": 200,
  "Milk 1l": 101,
  "Mixed Sweets 5s": 24,
  "Rose (plastic)": 10,
  "Shampoo 1 litre": 260,
  "Soap Bar": 36,
  "Top Class Soy Mince": 94,
  "Valentine Cards": 2
}

var groupPurchasesPerWeek0 = [
  ['Makro', '23-Jan', 'Chakalaka Can', '3', 'R7,00', 'R21,00'],
  ['Makro', '23-Jan', 'Coke 500ml', '3', 'R3,50', 'R10,50'],
  ['Makro', '23-Jan', 'Cream Soda 500ml', '4', 'R4,50', 'R18,00'],
  ['Makro', '23-Jan', 'Fanta 500ml', '2', 'R4,50', 'R9,00'],
  ['Makro',
    '23-Jan',
    'Gold Dish Vegetable Curry Can',
    '2',
    'R5,00',
    'R10,00'
  ],
  ['Makro', '23-Jan', 'Imasi', '1', 'R17,00', 'R17,00'],
  ['Makro', '23-Jan', 'Iwisa Pap 5kg', '3', 'R20,00', 'R60,00'],
  ['Makro', '23-Jan', 'Milk 1l', '4', 'R7,00', 'R28,00'],
  ['Makro', '23-Jan', 'Top Class Soy Mince', '5', 'R8,00', 'R40,00'],
  ['Epping Market',
    '28-Jan',
    'Bananas - loose',
    '4',
    'R1,00',
    'R4,00'
  ],
  ['Epping Market',
    '28-Jan',
    'Apples - loose',
    '10',
    'R1,50',
    'R15,00'
  ],
  ['Epping Market',
    '28-Jan',
    'Mixed Sweets 5s',
    '60',
    'R3,00',
    'R180,00'
  ],
  ['HomeMade', '28-Jan', 'Shampoo 1 litre', '1', 'R20,00', 'R20,00'],
  ['HomeMade', '28-Jan', 'Soap Bar', '3', 'R3,00', 'R9,00'],
  ['Makro', '28-Jan', 'Bread', '30', 'R9,00', 'R270,00'],
  ['Makro', '28-Jan', 'Chakalaka Can', '15', 'R7,00', 'R105,00'],
  ['Makro', '28-Jan', 'Coke 500ml', '36', 'R3,50', 'R126,00'],
  ['Makro', '28-Jan', 'Cream Soda 500ml', '24', 'R4,50', 'R108,00'],
  ['Makro', '28-Jan', 'Fanta 500ml', '24', 'R4,50', 'R108,00'],
  ['Makro',
    '28-Jan',
    'Gold Dish Vegetable Curry Can',
    '15',
    'R5,00',
    'R75,00'
  ],
  ['Makro', '28-Jan', 'Imasi', '15', 'R17,00', 'R255,00'],
  ['Makro', '28-Jan', 'Iwisa Pap 5kg', '15', 'R20,00', 'R300,00'],
  ['Makro', '28-Jan', 'Milk 1l', '25', 'R7,00', 'R175,00'],
  ['Makro',
    '28-Jan',
    'Top Class Soy Mince',
    '10',
    'R8,00',
    'R80,00'
  ]
];

var groupPurchasesPerWeek1 = [
  ['HomeMade', '02-Feb', 'Shampoo 1 litre', '1', 'R20,00', 'R20,00'],
  ['HomeMade', '02-Feb', 'Soap Bar', '3', 'R3,00', 'R9,00'],
  ['Epping Market', '03-Feb', 'Bananas - loose', '12', 'R1,00', 'R12,00'],
  ['Epping Market', '03-Feb', 'Apples - loose', '100', 'R1,50', 'R150,00'],
  ['Epping Market', '03-Feb', 'Mixed Sweets 5s', '240', 'R3,00', 'R720,00'],
  ['HomeMade', '04-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00'],
  ['HomeMade', '04-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00'],
  ['Joe Spaza Shop', '04-Feb', 'Bread', '4', 'R11,00', 'R44,00'],
  ['Joe Spaza Shop', '04-Feb', 'Imasi', '4', 'R24,00', 'R96,00'],
  ['Epping Market', '06-Feb', 'Bananas - loose', '8', 'R1,00', 'R8,00'],
  ['Epping Market', '06-Feb', 'Apples - loose', '100', 'R1,50', 'R150,00'],
  ['Epping Market', '06-Feb', 'Mixed Sweets 5s', '150', 'R3,00', 'R450,00'],
  ['HomeMade', '06-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00'],
  ['Makro', '6-Feb', 'Bread', '30', 'R9,00', 'R270,00'],
  ['Makro', '6-Feb', 'Chakalaka Can', '15', 'R7,00', 'R105,00'],
  ['Makro', '6-Feb', 'Coke 500ml', '36', 'R3,50', 'R126,00'],
  ['Makro', '6-Feb', 'Cream Soda 500ml', '18', 'R4,50', 'R81,00'],
  ['Makro', '6-Feb', 'Fanta 500ml', '24', 'R4,50', 'R108,00'],
  ['Makro', '6-Feb', 'Gold Dish Vegetable Curry Can', '15', 'R5,00', 'R75,00'],
  ['Makro', '6-Feb', 'Imasi', '25', 'R17,00', 'R425,00'],
  ['Makro', '6-Feb', 'Iwisa Pap 5kg', '5', 'R20,00', 'R100,00'],
  ['Makro', '6-Feb', 'Milk 1l', '10', 'R7,00', 'R70,00'],
  ['Makro', '6-Feb', 'Top Class Soy Mince', '10', 'R8,00', 'R80,00']
];




var groupPurchasesPerWeek2 = [
  ['ChinaTown',
    '09-Feb',
    'Rose (plastic)',
    '20',
    'R10,00',
    'R200,00'
  ],
  ['Joe Spaza Shop', '09-Feb', 'Milk 1l', '3', 'R9,50', 'R28,50'],
  ['Epping Market',
    '10-Feb',
    'Bananas - loose',
    '4',
    'R1,00',
    'R4,00'
  ],
  ['Epping Market',
    '10-Feb',
    'Apples - loose',
    '20',
    'R1,50',
    'R30,00'
  ],
  ['Epping Market',
    '10-Feb',
    'Mixed Sweets 5s',
    '150',
    'R3,00',
    'R450,00'
  ],
  ['Makro', '10-Feb', 'Bread', '10', 'R9,00', 'R90,00'],
  ['Makro', '10-Feb', 'Chakalaka Can', '15', 'R7,00', 'R105,00'],
  ['Makro', '10-Feb', 'Coke 500ml', '18', 'R3,50', 'R63,00'],
  ['Makro',
    '10-Feb',
    'Gold Dish Vegetable Curry Can',
    '5',
    'R5,00',
    'R25,00'
  ],
  ['Makro', '10-Feb', 'Heart Chocolates', '20', 'R25,00', 'R500,00'],
  ['Makro', '10-Feb', 'Imasi', '10', 'R17,00', 'R170,00'],
  ['Makro', '10-Feb', 'Iwisa Pap 5kg', '5', 'R20,00', 'R100,00'],
  ['Makro', '10-Feb', 'Milk 1l', '10', 'R7,00', 'R70,00'],
  ['Makro',
    '10-Feb',
    'Top Class Soy Mince',
    '15',
    'R8,00',
    'R120,00'
  ],
  ['HomeMade', '11-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00'],
  ['HomeMade', '11-Feb', 'Valentine Cards', '20', 'R2,00', 'R40,00'],
  ['Joe Spaza Shop', '12-Feb', 'Milk 1l', '3', 'R9,50', 'R28,50'],
  ['Epping Market',
    '13-Feb',
    'Bananas - loose',
    '4',
    'R1,00',
    'R4,00'
  ],
  ['Epping Market',
    '13-Feb',
    'Mixed Sweets 5s',
    '50',
    'R3,00',
    'R150,00'
  ],
  ['HomeMade', '13-Feb', 'Shampoo 1 litre', '3', 'R20,00', 'R60,00'],
  ['HomeMade', '13-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00'],
  ['Joe Spaza Shop',
    '13-Feb',
    'Gold Dish Vegetable Curry Can',
    '5',
    'R8,50',
    'R42,50'
  ],
  ['Makro', '13-Feb', 'Bread', '5', 'R9,00', 'R45,00'],
  ['Makro', '13-Feb', 'Coke 500ml', '12', 'R3,50', 'R42,00'],
  ['Makro', '13-Feb', 'Fanta 500ml', '12', 'R4,50', 'R54,00'],
  ['Makro', '13-Feb', 'Imasi', '20', 'R17,00', 'R340,00'],
  ['Makro', '13-Feb', 'Milk 1l', '15', 'R7,00', 'R105,00'],
  ['Makro', '13-Feb', 'Top Class Soy Mince', '5', 'R8,00', 'R40,00'],
  ['HomeMade', '14-Feb', 'Shampoo 1 litre', '1', 'R20,00', 'R20,00'],
  ['Joe Spaza Shop',
    '14-Feb',
    'Gold Dish Vegetable Curry Can',
    '2',
    'R8,50',
    'R17,00'
  ]
];
var groupPurchasesPerWeek3 = [
  ['Joe Spaza Shop',
    '16-Feb',
    'Chakalaka Can',
    '2',
    'R8,50',
    'R17,00'
  ],
  ['Joe Spaza Shop',
    '16-Feb',
    'Cream Soda 500ml',
    '2',
    'R7,50',
    'R15,00'
  ],
  ['Joe Spaza Shop', '16-Feb', 'Fanta 500ml', '1', 'R6,50', 'R6,50'],
  ['Joe Spaza Shop',
    '16-Feb',
    'Gold Dish Vegetable Curry Can',
    '2',
    'R8,50',
    'R17,00'
  ],
  ['Joe Spaza Shop',
    '16-Feb',
    'Iwisa Pap 5kg',
    '1',
    'R30,00',
    'R30,00'
  ],
  ['Joe Spaza Shop', '16-Feb', 'Milk 1l', '6', 'R9,50', 'R57,00'],
  ['Epping Market',
    '17-Feb',
    'Apples - loose',
    '60',
    'R1,50',
    'R90,00'
  ],
  ['Epping Market',
    '17-Feb',
    'Mixed Sweets 5s',
    '12',
    'R3,00',
    'R36,00'
  ],
  ['Makro', '17-Feb', 'Bread', '15', 'R9,00', 'R135,00'],
  ['Makro', '17-Feb', 'Chakalaka Can', '10', 'R7,00', 'R70,00'],
  ['Makro', '17-Feb', 'Coke 500ml', '24', 'R3,50', 'R84,00'],
  ['Makro', '17-Feb', 'Cream Soda 500ml', '12', 'R4,50', 'R54,00'],
  ['Makro', '17-Feb', 'Fanta 500ml', '12', 'R4,50', 'R54,00'],
  ['Makro',
    '17-Feb',
    'Gold Dish Vegetable Curry Can',
    '10',
    'R5,00',
    'R50,00'
  ],
  ['Makro', '17-Feb', 'Imasi', '15', 'R17,00', 'R255,00'],
  ['Makro', '17-Feb', 'Iwisa Pap 5kg', '5', 'R20,00', 'R100,00'],
  ['Makro', '17-Feb', 'Milk 1l', '15', 'R7,00', 'R105,00'],
  ['Makro', '17-Feb', 'Top Class Soy Mince', '5', 'R8,00', 'R40,00'],
  ['HomeMade', '18-Feb', 'Shampoo 1 litre', '1', 'R20,00', 'R20,00'],
  ['HomeMade', '18-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00'],
  ['HomeMade', '19-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00'],
  ['Joe Spaza Shop', '19-Feb', 'Milk 1l', '1', 'R9,50', 'R9,50'],
  ['Epping Market',
    '20-Feb',
    'Bananas - loose',
    '20',
    'R1,00',
    'R20,00'
  ],
  ['Epping Market',
    '20-Feb',
    'Apples - loose',
    '90',
    'R1,50',
    'R135,00'
  ],
  ['Epping Market',
    '20-Feb',
    'Mixed Sweets 5s',
    '20',
    'R3,00',
    'R60,00'
  ],
  ['HomeMade', '20-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00'],
  ['HomeMade', '20-Feb', 'Soap Bar', '3', 'R3,00', 'R9,00'],
  ['Makro', '20-Feb', 'Bread', '10', 'R9,00', 'R90,00'],
  ['Makro', '20-Feb', 'Imasi', '10', 'R17,00', 'R170,00'],
  ['Makro', '20-Feb', 'Iwisa Pap 5kg', '5', 'R20,00', 'R100,00'],
  ['Makro', '20-Feb', 'Milk 1l', '15', 'R7,00', 'R105,00'],
  ['Makro',
    '20-Feb',
    'Top Class Soy Mince',
    '10',
    'R8,00',
    'R80,00'
  ]
];



var groupPurchasesPerWeek4 = [
  ['Joe Spaza Shop',
    '23-Feb',
    'Chakalaka Can',
    '3',
    'R9,00',
    'R27,00'
  ],
  ['Epping Market',
    '24-Feb',
    'Bananas - loose',
    '10',
    'R1,00',
    'R10,00'
  ],
  ['Epping Market',
    '24-Feb',
    'Apples - loose',
    '90',
    'R1,50',
    'R135,00'
  ],
  ['Epping Market',
    '24-Feb',
    'Mixed Sweets 5s',
    '8',
    'R3,00',
    'R24,00'
  ],
  ['Makro', '24-Feb', 'Bread', '15', 'R9,00', 'R135,00'],
  ['Makro', '24-Feb', 'Chakalaka Can', '10', 'R7,00', 'R70,00'],
  ['Makro', '24-Feb', 'Coke 500ml', '18', 'R3,50', 'R63,00'],
  ['Makro', '24-Feb', 'Cream Soda 500ml', '6', 'R4,50', 'R27,00'],
  ['Makro', '24-Feb', 'Fanta 500ml', '6', 'R4,50', 'R27,00'],
  ['Makro',
    '24-Feb',
    'Gold Dish Vegetable Curry Can',
    '10',
    'R5,00',
    'R50,00'
  ],
  ['Makro', '24-Feb', 'Imasi', '15', 'R17,00', 'R255,00'],
  ['Makro', '24-Feb', 'Milk 1l', '20', 'R7,00', 'R140,00'],
  ['Makro',
    '24-Feb',
    'Top Class Soy Mince',
    '15',
    'R8,00',
    'R120,00'
  ],
  ['HomeMade', '25-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00'],
  ['HomeMade', '26-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00'],
  ['HomeMade', '26-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00'],
  ['Joe Spaza Shop', '26-Feb', 'Bread', '1', 'R11,00', 'R11,00'],
  ['Joe Spaza Shop',
    '26-Feb',
    'Fanta 500ml',
    '2',
    'R6,50',
    'R13,00'
  ],
  ['Joe Spaza Shop',
    '26-Feb',
    'Gold Dish Vegetable Curry Can',
    '1',
    'R8,50',
    'R8,50'
  ],
  ['Joe Spaza Shop',
    '26-Feb',
    'Iwisa Pap 5kg',
    '1',
    'R30,00',
    'R30,00'
  ],
  ['Epping Market',
    '27-Feb',
    'Bananas - loose',
    '10',
    'R1,00',
    'R10,00'
  ],
  ['Epping Market',
    '27-Feb',
    'Apples - loose',
    '60',
    'R1,50',
    'R90,00'
  ],
  ['HomeMade',
    '27-Feb',
    'Shampoo 1 litre',
    '5',
    'R20,00',
    'R100,00'
  ],
  ['HomeMade', '27-Feb', 'Soap Bar', '5', 'R3,00', 'R15,00'],
  ['Makro', '27-Feb', 'Bread', '20', 'R9,00', 'R180,00'],
  ['Makro', '27-Feb', 'Chakalaka Can', '15', 'R7,00', 'R105,00'],
  ['Makro', '27-Feb', 'Coke 500ml', '24', 'R3,50', 'R84,00'],
  ['Makro', '27-Feb', 'Cream Soda 500ml', '12', 'R4,50', 'R54,00'],
  ['Makro', '27-Feb', 'Fanta 500ml', '12', 'R4,50', 'R54,00'],
  ['Makro', '27-Feb', 'Gold Dish Vegetable Curry Can', '15', 'R5,00', 'R75,00'],
  ['Makro', '27-Feb', 'Imasi', '15', 'R17,00', 'R255,00'],
  ['Makro', '27-Feb', 'Iwisa Pap 5kg', '10', 'R20,00', 'R200,00'],
  ['Makro', '27-Feb', 'Milk 1l', '20', 'R7,00', 'R140,00'],
  ['Makro', '27-Feb', 'Top Class Soy Mince', '15', 'R8,00', 'R120,00'],
  ['HomeMade', '28-Feb', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00'],
  ['HomeMade', '28-Feb', 'Soap Bar', '3', 'R3,00', 'R9,00'],
  ['Joe Spaza Shop', '28-Feb', 'Chakalaka Can', '3', 'R8,50', 'R25,50'],
  ['Joe Spaza Shop', '28-Feb', 'Gold Dish Vegetable Curry Can', '2', 'R8,50', 'R17,00'],
  ['Joe Spaza Shop', '28-Feb', 'Top Class Soy Mince', '5', 'R11,00', 'R55,00'],
  ['HomeMade', '01-Mar', 'Shampoo 1 litre', '2', 'R20,00', 'R40,00'],
  ['HomeMade', '01-Mar', 'Soap Bar', '5', 'R3,00', 'R15,00'],
  ['Joe Spaza Shop', '01-Mar', 'Chakalaka Can', '3', 'R8,50', 'R25,50'],
  ['Joe Spaza Shop', '01-Mar', 'Gold Dish Vegetable Curry Can', '2', 'R8,50', 'R17,00'],
  ['Joe Spaza Shop', '01-Mar', 'Top Class Soy Mince', '3', 'R11,00', 'R33,00']
];


var purchasesAddedPerWeek1 = {
  'Shampoo 1 litre': 60,
  'Soap Bar': 39,
  'Bananas - loose': 20,
  'Apples - loose': 300,
  'Mixed Sweets 5s': 1170,
  'Bread': 314,
  'Imasi': 521,
  'Chakalaka Can': 105,
  'Coke 500ml': 126,
  'Cream Soda 500ml': 81,
  'Fanta 500ml': 108,
  'Gold Dish Vegetable Curry Can': 75,
  'Iwisa Pap 5kg': 100,
  'Milk 1l': 70,
  'Top Class Soy Mince': 80
};

var purchasesAddedPerWeek2 = {
  'Rose (plastic)': 200,
  'Milk 1l': 232,
  'Bananas - loose': 8,
  'Apples - loose': 30,
  'Mixed Sweets 5s': 600,
  'Bread': 135,
  'Chakalaka Can': 105,
  'Coke 500ml': 105,
  'Gold Dish Vegetable Curry Can': 84.5,
  'Heart Chocolates': 500,
  'Imasi': 510,
  'Iwisa Pap 5kg': 100,
  'Top Class Soy Mince': 160,
  'Shampoo 1 litre': 120,
  'Valentine Cards': 40,
  'Soap Bar': 15,
  'Fanta 500ml': 54
};

var ProfitableWeek1 = {
  'Milk 1l': 320,
  'Imasi': 229,
  'Bread': 226,
  'Chakalaka Can': 125,
  'Gold Dish Vegetable Curry Can': 78,
  'Fanta 500ml': 106.5,
  'Coke 500ml': 225,
  'Cream Soda 500ml': 84,
  'Iwisa Pap 5kg': 410,
  'Top Class Soy Mince': 184,
  'Shampoo 1 litre': 30,
  'Soap Bar': 33,
  'Bananas - loose': 74,
  'Apples - loose': -228,
  'Mixed Sweets 5s': -1050
};



var ProfitableWeek2 = {
  'Imasi': 390,
  'Bread': 201,
  'Chakalaka Can': 105,
  'Gold Dish Vegetable Curry Can': 158.5,
  'Fanta 500ml': 95.5,
  'Coke 500ml': 168,
  'Iwisa Pap 5kg': 200,
  'Top Class Soy Mince': 92,
  'Shampoo 1 litre': 60,
  'Soap Bar': 15,
  'Bananas - loose': 48,
  'Apples - loose': 12,
  'Mixed Sweets 5s': -453,
  'Milk 1l': 48,
  'Heart Chocolates': 200,
  'Rose (plastic)': 10,
  'Valentine Cards': 16
};
var getMostProfitCategoryWeek1 = {
  Hygiene: -63,
  Fruit: 154,
  Sweets: 1050,
  Baked_Goods: -226,
  Dairy: -549,
  Canned_Goods: -203,
  Soft_Drink: -415.5,
  Starch: -410,
  Meat: -184
};

var getMostProfitCategoryWeek2 = {
  "Baked_Goods": 201,
  "Canned_Goods": 263.5,
  "Dairy": 438,
  "Fruit": 60,
  "Hygiene": 75,
  "Meat": 92,
  "Other": 26,
  "Soft_Drink": 263.5,
  "Starch": 200,
  "Sweets": -253,
}




describe("Spaza Shop Data", function() {
  ////////////////////////////////////////////////////////////////////////////////
  describe("Reading data from the Files", function() {

      it("Read out the data for the week1", function() {
        var results = nelisa.readData('./files/week1.csv');
        assert.equal(results.length, 105);
      })
      it("Read out the data for the week2", function() {
        var results = nelisa.readData('./files/week2.csv');
        assert.equal(results.length, 117);
      })
      it("Read out the data for the week3", function() {
        var results = nelisa.readData('./files/week3.csv');
        assert.equal(results.length, 104);
      })
      it("Read out the data for the week4", function() {
        var results = nelisa.readData('./files/week4.csv');
        assert.equal(results.length, 119);
      })
      it("Reading the category data", function() {
        var result = nelisa.readData('./files/category.csv');
        assert.equal(result.length, 20);
      })
      it("Reading the purchases data", function() {

        var result = nelisa.readData('./files/purchases.csv');
        assert.equal(result.length, 153);
      })
    })
    ////////////////////////////////////////////////////////////////////////////////
  describe("Grouping data from the Files", function() {

      it("Grouping data for each week1", function() {
        var results = nelisa.GroupingData(spazaString);
        assert.deepEqual(results, week1);
      });
      it("Grouping data for each week2", function() {
        var results = nelisa.GroupingData(spazaString2);
        assert.deepEqual(results, week2);
      });
      it("Grouping data for each week3", function() {
        var results = nelisa.GroupingData(spazaString3);
        assert.deepEqual(results, week3);
      })
      it("Grouping data for each week4", function() {
        var results = nelisa.GroupingData(spazaString4);
        assert.deepEqual(results, week4);
      })
    })
    ////////////////////////////////////////////////////////////////////////////////
  describe("Should Get All Selling Total For Each week", function() {


      it("total of selling price week1", function() {
        var results = nelisa.totalSellingGroupData(spazaString);

        var week1total = {
          'Milk 1l': 390,
          Imasi: 750,
          Bread: 540,
          'Chakalaka Can': 230,
          'Gold Dish Vegetable Curry Can': 153,
          'Fanta 500ml': 214.5,
          'Coke 500ml': 351,
          'Cream Soda 500ml': 165,
          'Iwisa Pap 5kg': 510,
          'Top Class Soy Mince': 264,
          'Shampoo 1 litre': 90,
          'Soap Bar': 72,
          'Bananas - loose': 94,
          'Apples - loose': 72,
          'Mixed Sweets 5s': 120
        };
        assert.deepEqual(results, week1total);
      })

      it("total of selling price week2", function() {
        var results = nelisa.totalSellingGroupData(spazaString2);
        var week2total = {
          Imasi: 900,
          Bread: 336,
          'Chakalaka Can': 210,
          'Gold Dish Vegetable Curry Can': 243,
          'Fanta 500ml': 149.5,
          'Coke 500ml': 273,
          'Cream Soda 500ml': 165,
          'Iwisa Pap 5kg': 300,
          'Top Class Soy Mince': 252,
          'Shampoo 1 litre': 180,
          'Soap Bar': 30,
          'Bananas - loose': 56,
          'Apples - loose': 42,
          'Mixed Sweets 5s': 147,
          'Milk 1l': 280,
          'Heart Chocolates': 700,
          'Rose (plastic)': 210,
          'Valentine Cards': 56
        };
        assert.deepEqual(results, week2total);
      })
      it("total of selling price week3", function() {
        var results = nelisa.totalSellingGroupData(spazaString3);
        var week3total = {
          Imasi: 625,
          Bread: 288,
          'Chakalaka Can': 170,
          'Gold Dish Vegetable Curry Can': 72,
          'Fanta 500ml': 91,
          'Coke 500ml': 117,
          'Cream Soda 500ml': 90,
          'Iwisa Pap 5kg': 120,
          'Top Class Soy Mince': 144,
          'Shampoo 1 litre': 120,
          'Soap Bar': 48,
          'Bananas - loose': 34,
          'Apples - loose': 50,
          'Mixed Sweets 5s': 80,
          'Milk 1l': 280
        };
        assert.deepEqual(results, week3total);
      })
      it("total of selling price week4", function() {
        var results = nelisa.totalSellingGroupData(spazaString4);
        var week4total = {
          Imasi: 850,
          Bread: 396,
          'Chakalaka Can': 330,
          'Gold Dish Vegetable Curry Can': 306,
          'Fanta 500ml': 156,
          'Coke 500ml': 292.5,
          'Cream Soda 500ml': 142.5,
          'Iwisa Pap 5kg': 480,
          'Top Class Soy Mince': 516,
          'Shampoo 1 litre': 390,
          'Soap Bar': 150,
          'Bananas - loose': 44,
          'Apples - loose': 64,
          'Mixed Sweets 5s': 108,
          'Milk 1l': 430
        };
        assert.deepEqual(results, week4total);
      })
    })
    ////////////////////////////////////////////////////////////////////////////////
  describe("Most popular", function() {

      it("should find the most popular product sold each week1", function() {
        var results = nelisa.mostPopular(week1);
        var popular = {
          "description": "Most popular product",
          "product": "Coke 500ml",
          "quantity": 54
        };
        assert.deepEqual(results, popular);
      })
      it("should find the most popular product sold each week2", function() {
        var results = nelisa.mostPopular(week2);
        var popular = {
          "description": "Most popular product",
          "product": "Mixed Sweets 5s",
          "quantity": 54
        };
        assert.deepEqual(results, popular);
      })
      it("should find the most popular product sold each week3", function() {
        var results = nelisa.mostPopular(week3);
        var popular = {
          "description": "Most popular product",
          "product": "Mixed Sweets 5s",
          "quantity": 29
        };
        assert.deepEqual(results, popular);
      })
      it("should find the most popular product sold each week4", function() {
        var results = nelisa.mostPopular(week4);
        var popular = {
          "description": "Most popular product",
          "product": "Coke 500ml",
          "quantity": 45
        };
        assert.deepEqual(results, popular);
      })
    })
    ///////////////////////////////////////////////////////////////////////////////////
  describe("Least Popular", function() {

      it("should find the least popular product sold each week1", function() {
        var results = nelisa.leastPopular(week1);
        var notpopular = {
          "description": "Least popular product",
          "quantity": 3,
          "product": "Shampoo 1 litre"
        };
        assert.deepEqual(results, notpopular);
      })
      it("should find the least popular product sold each week2", function() {
        var results = nelisa.leastPopular(week2);
        var notpopular = {
                "description": "Least popular product",
          "quantity": 5,
          "product": "Soap Bar"
        };
        assert.deepEqual(results, notpopular);
      })
      it("should find the least popular product sold each week3", function() {
        var results = nelisa.leastPopular(week3);
        var notpopular = {
                "description": "Least popular product",
          "quantity": 4,
          "product": "Iwisa Pap 5kg"
        };
        assert.deepEqual(results, notpopular);
      })
      it("should find the least popular product sold each week4", function() {
        var results = nelisa.leastPopular(week4);
        var notpopular = {
                "description": "Least popular product",
          "quantity": 13,
          "product": "Shampoo 1 litre"
        };
        assert.deepEqual(results, notpopular);
      })
    })
    ////////////////////////////////////////////////////////////////////////////////
  describe("Category Map", function() {

      it("should grouped category week1", function() {
        var result = nelisa.getMapCategory(productCategories, week1);
        assert.deepEqual(result, categoryWeek1);
      });
      it("should grouped category week2", function() {
        var result = nelisa.getMapCategory(productCategories, week2);

        assert.deepEqual(result, categoryWeek2);
      })
      it("should grouped category week3", function() {
        var result = nelisa.getMapCategory(productCategories, week3);
        assert.deepEqual(result, categoryWeek3);
      })
      it("should grouped category week4", function() {
        var result = nelisa.getMapCategory(productCategories, week4);
        assert.deepEqual(result, categoryWeek4);
      })
    })
    ////////////////////////////////////////////////////////////////////////////////
  describe("Most Popular Category", function() {

      it("should find the most popular category week1", function() {
        var result = nelisa.mostPopular(categoryWeek1);
        assert.deepEqual(result, {
          "description": "Most popular product",
          "product": "Soft_Drink",
          "quantity": 109
        });
      });
      it("should find the most popular category week2", function() {
        var result = nelisa.mostPopular(categoryWeek2);
        assert.deepEqual(result, {
          "description": "Most popular product",
          "product": "Soft_Drink",
          "quantity": 87
        });
      });
      it("should find the most popular category week3", function() {
        var result = nelisa.mostPopular(categoryWeek3);
        assert.deepEqual(result, {
          "description": "Most popular product",
          "product": "Dairy",
          "quantity": 53
        });
      });
      it("should find the most popular category week4", function() {
        var result = nelisa.mostPopular(categoryWeek4);
        assert.deepEqual(result, {
          "description": "Most popular product",
          "product": "Soft_Drink",
          "quantity": 88
        });
      });
    })
    ///////////////////////////////////////////////////////////////////////////////
  describe("Least Popular Category", function() {

      it("should find the least popular category week1", function() {
        var result = nelisa.leastPopular(categoryWeek1);
        assert.deepEqual(result, {
                "description": "Least popular product",
          "quantity": 15,
          "product": "Hygiene"
        });
      });
      it("should find the least popular category week2", function() {
        var result = nelisa.leastPopular(categoryWeek2);
        assert.deepEqual(result, {
                "description": "Least popular product",
          "quantity": 10,
          "product": "Starch"
        });
      });
      it("should find the least popular category week3", function() {
        var result = nelisa.leastPopular(categoryWeek3);
        assert.deepEqual(result, {
                "description": "Least popular product",
          "quantity": 4,
          "product": "Starch"
        });
      });
      it("should find the least popular category week4", function() {
        var result = nelisa.leastPopular(categoryWeek4);
        assert.deepEqual(result, {
                 "description": "Least popular product",
          "quantity": 16,
          "product": "Starch"
        });
      });
    })
    ///////////////////////////////////////////////////////////////////////////////
  describe("Grouping Data for the Purchases File ", function() {

      it("Should group data for purchases week1", function() {
        var result = nelisa.GroupPurchaseData(spazaStringPurchase);
        assert.deepEqual(result, groupPurchasesPerWeek1);
      });

    })
    ////////////////////////////////////////////////////////////////////////////////
  describe("Purchase Map", function() {

      it("should group data for week1 for profit", function() {
        var lee = {
          'Shampoo 1 litre': 60,
          'Soap Bar': 39,
          'Bananas - loose': 20,
          'Apples - loose': 300,
          'Mixed Sweets 5s': 1170,
          'Bread': 314,
          'Imasi': 521,
          'Chakalaka Can': 105,
          'Coke 500ml': 126,
          'Cream Soda 500ml': 81,
          'Fanta 500ml': 108,
          'Gold Dish Vegetable Curry Can': 75,
          'Iwisa Pap 5kg': 100,
          'Milk 1l': 70,
          'Top Class Soy Mince': 80
        };
        var result = nelisa.weekPurchases(groupPurchasesPerWeek1);
        assert.deepEqual(result, lee);
      });

      it("should group data for week2 for profit", function() {
        var lee = {
          'Rose (plastic)': 200,
          'Milk 1l': 232,
          'Bananas - loose': 8,
          'Apples - loose': 30,
          'Mixed Sweets 5s': 600,
          'Bread': 135,
          'Chakalaka Can': 105,
          'Coke 500ml': 105,
          'Gold Dish Vegetable Curry Can': 84.5,
          'Heart Chocolates': 500,
          'Imasi': 510,
          'Iwisa Pap 5kg': 100,
          'Top Class Soy Mince': 160,
          'Shampoo 1 litre': 120,
          'Valentine Cards': 40,
          'Soap Bar': 15,
          'Fanta 500ml': 54
        };

        var result = nelisa.weekPurchases(groupPurchasesPerWeek2);
        assert.deepEqual(result, lee);
      })

      it("should group data for week3 for profit", function() {
        var lee = {
          'Chakalaka Can': 87,
          'Cream Soda 500ml': 69,
          'Fanta 500ml': 60.5,
          'Gold Dish Vegetable Curry Can': 67,
          'Iwisa Pap 5kg': 230,
          'Milk 1l': 276.5,
          'Apples - loose': 225,
          'Mixed Sweets 5s': 96,
          'Bread': 225,
          'Coke 500ml': 84,
          'Imasi': 425,
          'Top Class Soy Mince': 120,
          'Shampoo 1 litre': 100,
          'Soap Bar': 24,
          'Bananas - loose': 20
        };

        var result = nelisa.weekPurchases(groupPurchasesPerWeek3);
        assert.deepEqual(result, lee);
      })

      it("should group data for week4 for profit", function() {
        var lee = {
          'Chakalaka Can': 253,
          'Bananas - loose': 20,
          'Apples - loose': 225,
          'Mixed Sweets 5s': 24,
          'Bread': 326,
          'Coke 500ml': 147,
          'Cream Soda 500ml': 81,
          'Fanta 500ml': 94,
          'Gold Dish Vegetable Curry Can': 167.5,
          'Imasi': 510,
          'Milk 1l': 280,
          'Top Class Soy Mince': 328,
          'Soap Bar': 69,
          'Shampoo 1 litre': 220,
          'Iwisa Pap 5kg': 230
        };
        var result = nelisa.weekPurchases(groupPurchasesPerWeek4);
        assert.deepEqual(result, lee);
      })
    })
    ////////////////////////////////////////////////////////////////////////////////
  describe("Getting Profit for each week ", function() {

      it("should get profit for week1", function() {
        var lee = {
          'Milk 1l': 320,
          'Imasi': 229,
          'Bread': 226,
          'Chakalaka Can': 125,
          'Gold Dish Vegetable Curry Can': 78,
          'Fanta 500ml': 106.5,
          'Coke 500ml': 225,
          'Cream Soda 500ml': 84,
          'Iwisa Pap 5kg': 410,
          'Top Class Soy Mince': 184,
          'Shampoo 1 litre': 30,
          'Soap Bar': 33,
          'Bananas - loose': 74,
          'Apples - loose': -228,
          'Mixed Sweets 5s': -1050
        };
        var result = nelisa.getProfit(purchasesAddedPerWeek1, week1total);
        //console.log(purchasesAddedPerWeek1);
        assert.deepEqual(result, lee)

      })
      it("should get profit for week2", function() {
        var lee = {
          "Apples - loose": 12,
          "Bananas - loose": 48,
          "Bread": 201,
          "Chakalaka Can": 105,
          "Coke 500ml": 168,
          "Fanta 500ml": 95.5,
          "Gold Dish Vegetable Curry Can": 158.5,
          "Heart Chocolates": 200,
          "Imasi": 390,
          "Iwisa Pap 5kg": 200,
          "Milk 1l": 48,
          "Mixed Sweets 5s": -453,
          "Rose (plastic)": 10,
          "Shampoo 1 litre": 60,
          "Soap Bar": 15,
          "Top Class Soy Mince": 92,
          "Valentine Cards": 16
        };
        var result = nelisa.getProfit(purchasesAddedPerWeek2, week2total);
        assert.deepEqual(result, lee)
      })

    })
    ////////////////////////////////////////////////////////////////////////////////
  describe("Most Profitable product each week", function() {

      it("should get most Profitable for week1 ", function() {
        var result = nelisa.mostPopular(ProfitableWeek1);
        assert.deepEqual(result, {
          "description": "Most popular product",
          "product": "Iwisa Pap 5kg",
          "quantity": 410
        });

      })
      it("should get most Profitable for week2 ", function() {
        var result = nelisa.mostPopular(ProfitableWeek2);
        assert.deepEqual(result, {
          "description": "Most popular product",
          "product": "Imasi",
          "quantity": 390
        });

      })

    })
    ////////////////////////////////////////////////////////////////////////////////
  describe("the map category for profit each week", function() {

    it("Map category for profit week1", function() {
      var expected = {
        "Baked_Goods": 226,
        "Canned_Goods": 203,
        "Dairy": 549,
        "Fruit": -154,
        "Hygiene": 63,
        "Meat": 184,
        "Soft_Drink": 415.5,
        "Starch": 410,
        "Sweets": -1050
      };

      var result = nelisa.getMapCategory(productCategories, ProfitableWeek1);
      assert.deepEqual(result, expected);
    })

    it("Map category for profit week2", function() {
      var expected = {
        "Baked_Goods": 201,
        "Canned_Goods": 263.5,
        "Dairy": 438,
        "Fruit": 60,
        "Hygiene": 75,
        "Meat": 92,
        "Other": 26,
        "Soft_Drink": 263.5,
        "Starch": 200,
        "Sweets": -253
      };
      var result = nelisa.getMapCategory(productCategories, ProfitableWeek2);
      assert.deepEqual(result, expected);
    })

    it("Get Most profitable category for  week1", function() {
      var result = nelisa.mostPopular(getMostProfitCategoryWeek1);
      assert.deepEqual(result, {
        "description": "Most popular product",
        "product": "Sweets",
        "quantity": 1050
      });
    })
    it("Get Most profitable category for week2", function() {

      var result = nelisa.mostPopular(getMostProfitCategoryWeek2);
      assert.deepEqual(result, {
        "description": "Most popular product",
        "product": "Dairy",
        "quantity": 438
      });
    })

  })



})
