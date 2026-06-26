export const menuData = {
  categories: [
    {
      id: "classic",
      name: "Classic Cocktails",
      icon: "🍹",
      description: "Timeless classics, perfectly crafted",
      items: [
        { id: 1,  name: "Negroni",          price: 500, description: "Gin, Campari, sweet vermouth" },
        { id: 2,  name: "Mojito",           price: 500, description: "Rum, fresh mint, lime, soda", tags: ["popular"] },
        { id: 3,  name: "Aperol Spritz",    price: 500, description: "Aperol, prosecco, soda, orange slice", tags: ["popular"] },
        { id: 4,  name: "Moscow Mule",      price: 500, description: "Vodka, ginger beer, lime, mint" },
        { id: 5,  name: "Pornstar Martini", price: 500, description: "Vanilla vodka, passion fruit, prosecco shot", tags: ["popular"] },
        { id: 6,  name: "Pina Colada",      price: 500, description: "Rum, coconut cream, pineapple juice" },
        { id: 7,  name: "Pink Lady",        price: 500, description: "Gin, grenadine, lemon juice, egg white" },
        { id: 8,  name: "Daiquiri",         price: 500, description: "Rum, lime juice, sugar syrup" },
      ]
    },
    {
      id: "signature",
      name: "Signature Cocktails",
      icon: "✨",
      description: "Palm originals — you won't find these anywhere else",
      items: [
        { id: 10, name: "American Gangster", price: 700, description: "Forest fruit, whiskey, lime, mint", tags: ["signature"] },
        { id: 11, name: "Pencilin",          price: 700, description: "Whiskey, cinnamon, lime, honey, ginger beer", tags: ["signature"] },
        { id: 12, name: "Ansagna",           price: 700, description: "Vodka, passion fruit, pineapple, Aperol, lime", tags: ["signature"] },
        { id: 13, name: "Amore",             price: 700, description: "Vodka, lime, strawberry, rose, rosemary", tags: ["signature", "popular"] },
        { id: 14, name: "Valentino",         price: 700, description: "Grenadine, elderflower, rum, lime, secret aphrodisiac spirit", tags: ["signature"] },
        { id: 15, name: "Caliente",          price: 700, description: "Vodka, gin, elderflower, passion fruit, lemon, orange, Disaronno, Angostura bitter", tags: ["signature"] },
        { id: 16, name: "Liberanga",         price: 700, description: "Rum, blue curaçao, mint, coconut, lime", tags: ["signature"] },
        { id: 17, name: "Charlie Chaplin",   price: 700, description: "Rum, peach, lime, mint", tags: ["signature"] },
      ]
    },
    {
      id: "mocktails",
      name: "Mocktails",
      icon: "🥤",
      description: "All the fun, zero alcohol",
      items: [
        { id: 20, name: "Virgin Mojito",    price: 500, description: "Fresh mint, lime, soda, sugar" },
        { id: 21, name: "Tropical Sunrise", price: 500, description: "Orange, mango, grenadine, soda" },
        { id: 22, name: "Passion Cooler",   price: 500, description: "Passion fruit, lemon, ginger, soda" },
        { id: 23, name: "Berry Splash",     price: 500, description: "Mixed berries, lemon juice, soda" },
        { id: 24, name: "Pina Colada Zero", price: 500, description: "Coconut milk, pineapple juice, cream" },
      ]
    },
    {
      id: "shots",
      name: "Shots",
      icon: "🥃",
      description: "Quick & bold — choose your poison",
      items: [
        { id: 30, name: "Tequila Shot",  price: 300, description: "100% agave tequila with lime & salt" },
        { id: 32, name: "Jägermeister", price: 350, description: "German herbal liqueur" },
      ]
    },
    {
      id: "beer",
      name: "Beer",
      icon: "🍺",
      description: "Cold & refreshing",
      items: [
        { id: 40, name: "Korca",           price: 250, description: "Albanian lager, Draft Beer", tags: ["popular"] },
        { id: 41, name: "Estrella Galicia", price: 350, description: "Spanish premium lager, Draft Beer" },
      ]
    },
  ]
};
