const Foods = [
  {
    food_id: 1,
    name: "Adobo",
    price: 120,
    ingredients: [
      "chicken",
      "soy sauce",
      "vinegar",
      "garlic",
      "bay leaves",
      "pepper",
    ],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/adobo.jpg",
  },
  {
    food_id: 2,
    name: "Sinigang na Baboy",
    price: 150,
    ingredients: [
      "pork",
      "tamarind",
      "tomato",
      "kangkong",
      "radish",
      "string beans",
    ],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/sinigang-na-baboy.jpg",
  },
  {
    food_id: 3,
    name: "Kare-Kare",
    price: 180,
    ingredients: [
      "oxtail",
      "peanut sauce",
      "banana heart",
      "eggplant",
      "string beans",
    ],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/kare-kare.jpg",
  },
  {
    food_id: 4,
    name: "Lechon Kawali",
    price: 140,
    ingredients: ["pork belly", "salt", "pepper", "oil"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/lechon-kawali.jpg",
  },
  {
    food_id: 5,
    name: "Laing",
    price: 110,
    ingredients: ["taro leaves", "coconut milk", "chili", "shrimp paste"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/laing.jpg",
  },
  {
    food_id: 6,
    name: "Bicol Express",
    price: 130,
    ingredients: ["pork", "coconut milk", "chili", "shrimp paste"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/bicol-express.jpg",
  },
  {
    food_id: 7,
    name: "Pinakbet",
    price: 120,
    ingredients: [
      "eggplant",
      "ampalaya",
      "okra",
      "string beans",
      "shrimp paste",
    ],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/pinakbet.jpg",
  },
  {
    food_id: 8,
    name: "Bulalo",
    price: 200,
    ingredients: ["beef shank", "bone marrow", "corn", "pechay", "potato"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/bulalo.jpg",
  },
  {
    food_id: 9,
    name: "Pancit Canton",
    price: 100,
    ingredients: ["egg noodles", "pork", "shrimp", "vegetables", "soy sauce"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/pancit-canton.jpg",
  },
  {
    food_id: 10,
    name: "Pancit Palabok",
    price: 110,
    ingredients: ["rice noodles", "shrimp sauce", "boiled egg", "chicharron"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/pancit-palabok.jpg",
  },
  {
    food_id: 11,
    name: "Tapsilog",
    price: 95,
    ingredients: ["beef tapa", "fried egg", "garlic rice"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/tapsilog.jpg",
  },
  {
    food_id: 12,
    name: "Tocilog",
    price: 90,
    ingredients: ["tocino", "fried egg", "garlic rice"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/tocilog.jpg",
  },
  {
    food_id: 13,
    name: "Longsilog",
    price: 90,
    ingredients: ["longganisa", "fried egg", "garlic rice"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/longsilog.jpg",
  },
  {
    food_id: 14,
    name: "Sisig",
    price: 130,
    ingredients: ["pork face", "onion", "chili", "mayonnaise"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/sisig.webp",
  },
  {
    food_id: 15,
    name: "Dinuguan",
    price: 110,
    ingredients: ["pork", "pork blood", "vinegar", "garlic", "chili"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/dinuguan.webp",
  },
  {
    food_id: 16,
    name: "Menudo",
    price: 120,
    ingredients: ["pork", "liver", "potato", "carrot", "tomato sauce"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/menudo.jpg",
  },
  {
    food_id: 17,
    name: "Caldereta",
    price: 150,
    ingredients: ["beef", "potato", "carrot", "tomato sauce", "bell pepper"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/caldereta.webp",
  },
  {
    food_id: 18,
    name: "Ginataang Kalabasa at Sitaw",
    price: 100,
    ingredients: ["squash", "string beans", "coconut milk", "shrimp paste"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/ginataang-kalabasa.webp",
  },
  {
    food_id: 19,
    name: "Inihaw na Liempo",
    price: 140,
    ingredients: ["pork belly", "soy sauce", "calamansi", "garlic"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/inihaw-liempo.jpg",
  },
  {
    food_id: 20,
    name: "Lumpiang Shanghai",
    price: 90,
    ingredients: ["ground pork", "carrot", "onion", "spring roll wrapper"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/lumpiang-shanghai.webp",
  },
  {
    food_id: 21,
    name: "Ukoy",
    price: 85,
    ingredients: ["shrimp", "sweet potato", "bean sprouts", "flour"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/ukoy.png",
  },
  {
    food_id: 22,
    name: "Ginataang Bilo-Bilo",
    price: 95,
    ingredients: [
      "glutinous rice balls",
      "coconut milk",
      "banana",
      "sweet potato",
      "sago",
    ],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/ginataang-bilo-bilo.jpg",
  },
  {
    food_id: 23,
    name: "Halo-Halo",
    price: 120,
    ingredients: [
      "shaved ice",
      "milk",
      "leche flan",
      "ube halaya",
      "sweet beans",
    ],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/halo-halo.webp",
  },
  {
    food_id: 24,
    name: "Leche Flan",
    price: 80,
    ingredients: ["egg yolks", "condensed milk", "evaporated milk", "sugar"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/leche-flan.png",
  },
  {
    food_id: 25,
    name: "Bibingka",
    price: 70,
    ingredients: ["rice flour", "coconut milk", "egg", "sugar"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/bibingka.jpg",
  },
  {
    food_id: 26,
    name: "Puto",
    price: 50,
    ingredients: ["rice flour", "sugar", "baking powder"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/puto.jpg",
  },
  {
    food_id: 27,
    name: "Kutsinta",
    price: 50,
    ingredients: ["rice flour", "brown sugar", "lye water"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/kutsinta.jpg",
  },
  {
    food_id: 28,
    name: "Turon",
    price: 40,
    ingredients: ["banana", "jackfruit", "sugar", "spring roll wrapper"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/turon.jpg",
  },
  {
    food_id: 29,
    name: "Banana Cue",
    price: 25,
    ingredients: ["banana", "brown sugar", "oil"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/banana-cue.jpg",
  },
  {
    food_id: 30,
    name: "Camote Cue",
    price: 25,
    ingredients: ["sweet potato", "brown sugar", "oil"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/camote-cue.jpg",
  },
  {
    food_id: 31,
    name: "Champorado",
    price: 60,
    ingredients: ["glutinous rice", "cocoa powder", "sugar", "milk"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/champorado.jpg",
  },
  {
    food_id: 32,
    name: "Arroz Caldo",
    price: 70,
    ingredients: ["rice", "chicken", "ginger", "garlic"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/arroz-caldo.jpg",
  },
  {
    food_id: 33,
    name: "Batchoy",
    price: 90,
    ingredients: ["noodles", "pork", "liver", "pork cracklings"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/batchoy.jpg",
  },
  {
    food_id: 34,
    name: "Mami",
    price: 85,
    ingredients: ["noodles", "chicken", "garlic", "onion"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/mami.jpg",
  },
  {
    food_id: 35,
    name: "Balut",
    price: 30,
    ingredients: ["duck egg", "salt"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/balut.jpg",
  },
  {
    food_id: 36,
    name: "Chicharon",
    price: 50,
    ingredients: ["pork skin", "salt"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/chicharon.jpg",
  },
  {
    food_id: 37,
    name: "Empanada",
    price: 60,
    ingredients: ["flour", "pork", "potato", "carrot"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/empanada.jpg",
  },
  {
    food_id: 38,
    name: "Taho",
    price: 20,
    ingredients: ["silken tofu", "arnibal", "sago pearls"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/taho.jpg",
  },
  {
    food_id: 39,
    name: "Pichi-Pichi",
    price: 40,
    ingredients: ["cassava", "sugar", "grated coconut"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/pichi-pichi.jpg",
  },
  {
    food_id: 40,
    name: "Buko Pie",
    price: 90,
    ingredients: ["young coconut", "milk", "sugar", "flour"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/buko-pie.jpg",
  },
  {
    food_id: 41,
    name: "Pancit Malabon",
    price: 110,
    ingredients: ["thick rice noodles", "seafood", "shrimp sauce"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/pancit-malabon.jpg",
  },
  {
    food_id: 42,
    name: "Palitaw",
    price: 35,
    ingredients: ["glutinous rice", "sugar", "grated coconut", "sesame seeds"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/palitaw.jpg",
  },
  {
    food_id: 43,
    name: "Nilagang Baka",
    price: 150,
    ingredients: ["beef", "potato", "corn", "cabbage"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/nilagang-baka.jpg",
  },
  {
    food_id: 44,
    name: "Lomi",
    price: 90,
    ingredients: ["thick noodles", "pork", "egg", "vegetables"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/lomi.jpg",
  },
  {
    food_id: 45,
    name: "Pork BBQ",
    price: 35,
    ingredients: ["pork", "soy sauce", "sugar", "vinegar"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/pork-bbq.jpg",
  },
  {
    food_id: 46,
    name: "Ginataang Hipon",
    price: 140,
    ingredients: ["shrimp", "coconut milk", "garlic", "ginger"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/ginataang-hipon.jpg",
  },
  {
    food_id: 47,
    name: "Pork Binagoongan",
    price: 130,
    ingredients: ["pork", "shrimp paste", "tomato", "garlic"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/pork-binagoongan.jpg",
  },
  {
    food_id: 48,
    name: "Tokwa’t Baboy",
    price: 85,
    ingredients: ["tofu", "pork", "vinegar", "soy sauce"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/tokwat-baboy.jpg",
  },
  {
    food_id: 49,
    name: "Paksiw na Lechon",
    price: 140,
    ingredients: ["lechon", "vinegar", "soy sauce", "garlic"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/paksiw-na-lechon.jpg",
  },
  {
    food_id: 50,
    name: "Pangat na Isda",
    price: 100,
    ingredients: ["fish", "tomato", "ginger", "kangkong"],
    picture:
      "https://raw.githubusercontent.com/jinshin19/react-food-images/main/images/pangat-na-isda.jpg",
  },
];
