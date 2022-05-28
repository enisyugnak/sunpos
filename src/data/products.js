const products = [
    {
      "id": 2,
      "category": "Meşrubat",
      "title": "Ayran",
      "price": 15
    },
    {
      "id": 3,
      "category": "Meşrubat",
      "title": "Cappy",
      "price": 17
    },
    {
      "id": 4,
      "category": "Meşrubat",
      "title": "Cappy %100 Port. 250 ml",
      "price": 20
    },
    {
      "id": 5,
      "category": "Meşrubat",
      "title": "Cola 200  ml",
      "price": 14
    },
    {
      "id": 6,
      "category": "Meşrubat",
      "title": "Cola 330 ml",
      "price": 17
    },
    {
      "id": 237,
      "category": "Meşrubat",
      "title": "Cola 330 ml",
      "price": 22
    },
    {
      "id": 7,
      "category": "Meşrubat",
      "title": "Ev yapımı naneli buzlu çay",
      "price": 12
    },
    {
      "id": 8,
      "category": "Meşrubat",
      "title": "Fanta 200  ml",
      "price": 14
    },
    {
      "id": 9,
      "category": "Meşrubat",
      "title": "Fanta 330 ml",
      "price": 17
    },
    {
      "id": 10,
      "category": "Meşrubat",
      "title": "FuseTea 330 ml",
      "price": 17
    },
    {
      "id": 11,
      "category": "Meşrubat",
      "title": "Karışık taze meyve suyu",
      "price": 22
    },
    {
      "id": 12,
      "category": "Meşrubat",
      "title": "Meyveli soda",
      "price": 12
    },
    {
      "id": 13,
      "category": "Meşrubat",
      "title": "Schweppes",
      "price": 17
    },
    {
      "id": 14,
      "category": "Meşrubat",
      "title": "Sıkma portakal suyu",
      "price": 20
    },
    {
      "id": 15,
      "category": "Meşrubat",
      "title": "Soda",
      "price": 10
    },
    {
      "id": 16,
      "category": "Meşrubat",
      "title": "Sprite 200  ml",
      "price": 14
    },
    {
      "id": 17,
      "category": "Meşrubat",
      "title": "Sprite 330 ml",
      "price": 17
    },
    {
      "id": 18,
      "category": "Meşrubat",
      "title": "Su - 0.5 lt / buz",
      "price": 7
    },
    {
      "id": 19,
      "category": "Meşrubat",
      "title": "Su - 1.5 lt",
      "price": 10
    },
    {
      "id": 20,
      "category": "Meşrubat",
      "title": "Süt",
      "price": 10
    },
    {
      "id": 33,
      "category": "Çay / Kahve",
      "title": "Americano",
      "price": 25
    },
    {
      "id": 32,
      "category": "Çay / Kahve",
      "title": "Espresso (Double)",
      "price": 30
    },
    {
      "id": 31,
      "category": "Çay / Kahve",
      "title": "Espresso (Single)",
      "price": 15
    },
    {
      "id": 28,
      "category": "Çay / Kahve",
      "title": "Filtre kahve",
      "price": 20
    },
    {
      "id": 29,
      "category": "Çay / Kahve",
      "title": "Filtre kahve (French Press)",
      "price": 25
    },
    {
      "id": 35,
      "category": "Çay / Kahve",
      "title": "Flat White",
      "price": 30
    },
    {
      "id": 30,
      "category": "Çay / Kahve",
      "title": "Frappe",
      "price": 20
    },
    {
      "id": 36,
      "category": "Çay / Kahve",
      "title": "Latte Macchiato",
      "price": 30
    },
    {
      "id": 26,
      "category": "Çay / Kahve",
      "title": "Nescafe",
      "price": 15
    },
    {
      "id": 25,
      "category": "Çay / Kahve",
      "title": "Sıcak Su",
      "price": 6
    },
    {
      "id": 27,
      "category": "Çay / Kahve",
      "title": "Türk Kahvesi",
      "price": 15
    },
    {
      "id": 44,
      "category": "Biralar",
      "title": "Red Ale 33cl",
      "price": 65
    },
    {
      "id": 42,
      "category": "Biralar",
      "title": "Bomonti Filtresiz 50cl",
      "price": 60
    },
    {
      "id": 45,
      "category": "Biralar",
      "title": "Bud 33cl",
      "price": 60
    },
    {
      "id": 46,
      "category": "Biralar",
      "title": "Bud 50cl",
      "price": 65
    },
    {
      "id": 48,
      "category": "Biralar",
      "title": "Corona 33cl",
      "price": 90
    },
    {
      "id": 39,
      "category": "Biralar",
      "title": "Efes 30cl (Serçe)",
      "price": 35
    },
    {
      "id": 40,
      "category": "Biralar",
      "title": "Efes Malt 50cl",
      "price": 50
    },
    {
      "id": 38,
      "category": "Biralar",
      "title": "Efes Mini Malt 25cl",
      "price": 30
    },
    {
      "id": 41,
      "category": "Biralar",
      "title": "Efes Summer Blue 50cl",
      "price": 65
    },
    {
      "id": 50,
      "category": "Biralar",
      "title": "Erdinger 33cl",
      "price": 90
    },
    {
      "id": 47,
      "category": "Biralar",
      "title": "Heineken 33cl",
      "price": 65
    },
    {
      "id": 49,
      "category": "Biralar",
      "title": "Hoegaarden 33cl",
      "price": 90
    },
    {
      "id": 51,
      "category": "Biralar",
      "title": "Leffe Blonde 33cl",
      "price": 95
    },
    {
      "id": 52,
      "category": "Biralar",
      "title": "Leffe Browne 33cl",
      "price": 95
    },
    {
      "id": 43,
      "category": "Biralar",
      "title": "Tuborg 50cl",
      "price": 65
    },
    {
      "id": 64,
      "category": "Rakı / Şarap",
      "title": "Rakı Duble",
      "price": 85
    },
    {
      "id": 69,
      "category": "Rakı / Şarap",
      "title": "Rakı şişe - 100 cl",
      "price": 885
    },
    {
      "id": 65,
      "category": "Rakı / Şarap",
      "title": "Rakı şişe - 20 cl",
      "price": 220
    },
    {
      "id": 66,
      "category": "Rakı / Şarap",
      "title": "Rakı şişe - 35 cl",
      "price": 325
    },
    {
      "id": 67,
      "category": "Rakı / Şarap",
      "title": "Rakı şişe - 50 cl",
      "price": 550
    },
    {
      "id": 68,
      "category": "Rakı / Şarap",
      "title": "Rakı şişe - 70 cl",
      "price": 650
    },
    {
      "id": 63,
      "category": "Rakı / Şarap",
      "title": "Rakı Tek",
      "price": 45
    },
    {
      "id": 57,
      "category": "Rakı / Şarap",
      "title": "Şarap kadeh (Yakut / Çankaya)",
      "price": 60
    },
    {
      "id": 55,
      "category": "Rakı / Şarap",
      "title": "Şarap kadeh Beyaz (Angora)",
      "price": 55
    },
    {
      "id": 54,
      "category": "Rakı / Şarap",
      "title": "Şarap kadeh Kırmızı",
      "price": 55
    },
    {
      "id": 56,
      "category": "Rakı / Şarap",
      "title": "Şarap kadeh Rose (Angora)",
      "price": 60
    },
    {
      "id": 62,
      "category": "Rakı / Şarap",
      "title": "Şarap şişe - Çankaya",
      "price": 310
    },
    {
      "id": 61,
      "category": "Rakı / Şarap",
      "title": "Şarap şişe - Yakut",
      "price": 310
    },
    {
      "id": 59,
      "category": "Rakı / Şarap",
      "title": "Şarap şişe Beyaz - Angora",
      "price": 280
    },
    {
      "id": 58,
      "category": "Rakı / Şarap",
      "title": "Şarap şişe Kırmızı",
      "price": 280
    },
    {
      "id": 60,
      "category": "Rakı / Şarap",
      "title": "Şarap şişe Rose - Angora",
      "price": 310
    },
    {
      "id": 71,
      "category": "Kokteyl / Sert İçki",
      "title": "Absolut Red Bull Kokteyl",
      "price": 110
    },
    {
      "id": 72,
      "category": "Kokteyl / Sert İçki",
      "title": "Absolut Vodka Kokteyl",
      "price": 90
    },
    {
      "id": 73,
      "category": "Kokteyl / Sert İçki",
      "title": "Absolut Vodka Shot",
      "price": 50
    },
    {
      "id": 74,
      "category": "Kokteyl / Sert İçki",
      "title": "Absolut Votka 6cl",
      "price": 80
    },
    {
      "id": 75,
      "category": "Kokteyl / Sert İçki",
      "title": "Archers 6cl",
      "price": 65
    },
    {
      "id": 76,
      "category": "Kokteyl / Sert İçki",
      "title": "B52 Shot",
      "price": 65
    },
    {
      "id": 77,
      "category": "Kokteyl / Sert İçki",
      "title": "Baileys 6cl",
      "price": 65
    },
    {
      "id": 78,
      "category": "Kokteyl / Sert İçki",
      "title": "Barmenin Seçimi",
      "price": 125
    },
    {
      "id": 79,
      "category": "Kokteyl / Sert İçki",
      "title": "Beefeater Cin 6cl",
      "price": 85
    },
    {
      "id": 80,
      "category": "Kokteyl / Sert İçki",
      "title": "Beefeater Cin Kokteyl",
      "price": 95
    },
    {
      "id": 81,
      "category": "Kokteyl / Sert İçki",
      "title": "Bloody Mary",
      "price": 90
    },
    {
      "id": 82,
      "category": "Kokteyl / Sert İçki",
      "title": "Cointreu 6cl",
      "price": 140
    },
    {
      "id": 83,
      "category": "Kokteyl / Sert İçki",
      "title": "Cuba Libre",
      "price": 110
    },
    {
      "id": 84,
      "category": "Kokteyl / Sert İçki",
      "title": "Gilbeys Cin 6cl",
      "price": 65
    },
    {
      "id": 85,
      "category": "Kokteyl / Sert İçki",
      "title": "Gilbeys Cin Kokteyl",
      "price": 75
    },
    {
      "id": 86,
      "category": "Kokteyl / Sert İçki",
      "title": "Gilbeys Vodka 6cl",
      "price": 60
    },
    {
      "id": 87,
      "category": "Kokteyl / Sert İçki",
      "title": "Gilbeys Vodka Kokteyl",
      "price": 65
    },
    {
      "id": 88,
      "category": "Kokteyl / Sert İçki",
      "title": "Gilbeys Vodka Shot",
      "price": 35
    },
    {
      "id": 89,
      "category": "Kokteyl / Sert İçki",
      "title": "Gordon Cin 6cl",
      "price": 80
    },
    {
      "id": 90,
      "category": "Kokteyl / Sert İçki",
      "title": "Gordon Cin Kokteyl",
      "price": 95
    },
    {
      "id": 91,
      "category": "Kokteyl / Sert İçki",
      "title": "Jack  Daniels Shot",
      "price": 65
    },
    {
      "id": 92,
      "category": "Kokteyl / Sert İçki",
      "title": "Jack Daniels 6cl",
      "price": 95
    },
    {
      "id": 93,
      "category": "Kokteyl / Sert İçki",
      "title": "Jack Nar",
      "price": 110
    },
    {
      "id": 94,
      "category": "Kokteyl / Sert İçki",
      "title": "Jager 6cl",
      "price": 95
    },
    {
      "id": 95,
      "category": "Kokteyl / Sert İçki",
      "title": "Jager Shot",
      "price": 60
    },
    {
      "id": 96,
      "category": "Kokteyl / Sert İçki",
      "title": "Jameson 6cl",
      "price": 90
    },
    {
      "id": 97,
      "category": "Kokteyl / Sert İçki",
      "title": "Jameson Shot",
      "price": 60
    },
    {
      "id": 98,
      "category": "Kokteyl / Sert İçki",
      "title": "Kahlua 6cl",
      "price": 70
    },
    {
      "id": 99,
      "category": "Kokteyl / Sert İçki",
      "title": "Kahlua Shot",
      "price": 45
    },
    {
      "id": 100,
      "category": "Kokteyl / Sert İçki",
      "title": "Long Island Ice Tea Kokteyl",
      "price": 130
    },
    {
      "id": 101,
      "category": "Kokteyl / Sert İçki",
      "title": "Lyncburg Lemonade",
      "price": 120
    },
    {
      "id": 102,
      "category": "Kokteyl / Sert İçki",
      "title": "Malibu 6cl",
      "price": 65
    },
    {
      "id": 103,
      "category": "Kokteyl / Sert İçki",
      "title": "Margarita",
      "price": 115
    },
    {
      "id": 104,
      "category": "Kokteyl / Sert İçki",
      "title": "Martini",
      "price": 80
    },
    {
      "id": 105,
      "category": "Kokteyl / Sert İçki",
      "title": "Martini Espresso",
      "price": 115
    },
    {
      "id": 106,
      "category": "Kokteyl / Sert İçki",
      "title": "Meyveli Kokteyl",
      "price": 125
    },
    {
      "id": 107,
      "category": "Kokteyl / Sert İçki",
      "title": "Mojito / Daiquiri Kokteyl",
      "price": 95
    },
    {
      "id": 108,
      "category": "Kokteyl / Sert İçki",
      "title": "Rom Havana 6cl",
      "price": 95
    },
    {
      "id": 109,
      "category": "Kokteyl / Sert İçki",
      "title": "Tequila Olmeca Gold 6cl",
      "price": 90
    },
    {
      "id": 110,
      "category": "Kokteyl / Sert İçki",
      "title": "Tequila Olmeca Gold Shot",
      "price": 60
    },
    {
      "id": 111,
      "category": "Kokteyl / Sert İçki",
      "title": "Tequila Olmeca Silver 6cl",
      "price": 85
    },
    {
      "id": 112,
      "category": "Kokteyl / Sert İçki",
      "title": "Tequila Olmeca Silver Shot",
      "price": 50
    },
    {
      "id": 113,
      "category": "Kokteyl / Sert İçki",
      "title": "Tequila Sun Rise Kokteyl",
      "price": 100
    },
    {
      "id": 114,
      "category": "Kokteyl / Sert İçki",
      "title": "Whiskey Sour",
      "price": 110
    },
    {
      "id": 115,
      "category": "Kokteyl / Sert İçki",
      "title": "White / Black Russian",
      "price": 110
    },
    {
      "id": 116,
      "category": "Kokteyl / Sert İçki",
      "title": "Yerli Büyük Shaker",
      "price": 200
    },
    {
      "id": 117,
      "category": "Kokteyl / Sert İçki",
      "title": "Yerli Küçük Shaker",
      "price": 150
    }
  ]
export default products