const questions = [
  {
    message: "Which genre of art do you like the most?",
    option: "button",
    id: ["mordern", "impressionism", "pop"],
    isNested: false,
    choice: ["Modern", "Impressionism", "Pop"],
  },

  {
    message: "Who is your favorite artist?",
    option: "select",
    default: "Select an artist",
    isNested: true,
    choice: [
      {
        artistArr: ["Pablo Picasso", "Marcel Duchamp", "Marc Chagall"],
        museumArr: [
          "Berggruen Museum",
          "Musée d’Art moderne de Paris",
          "Marc Chagall National Museum",
        ],
      },
      {
        artistArr: ["Claude Monet", "Édouard Manet", "Gustave Caillebotte"],
        museumArr: [
          "Fondation Monet in Giverny",
          "Musées d'Orsay et de l'Orangerie",
          "Musée d'Orsay",
        ],
      },
      {
        artistArr: ["Yayoi Kusama", "Andy Warhol", "Dmitri Vrubel"],
        museumArr: ["Louisiana Museum of Modern Art", "TATE", "the Berlin Wall"],
      },
    ],
    next: "",
  },
  {
    message: "Are you an adult or a child?,",
    option: "button",
    id: ["adult", "child"],
    class: "icon",
    choice: ["🧑", "🧒"],
    isNested: false,
    next: "",
  },
  {
    // message: `You chose ${artType} and ${artist}! I recommend ${museum}. One ${age} ticket will cost you ${cost} euro. Are you happy with this?`,
    option: "button",
    choice: ["Yes", "No"],
    isNested: false,
    next: "",
  },
];

export default questions;
