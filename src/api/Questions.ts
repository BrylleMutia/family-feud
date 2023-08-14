type ItemAnswers = {
   order: number;
   text: string;
   points: number;
};

type Item = {
   id: number;
   question: string;
   answers: ItemAnswers[];
};

export const items: Item[] = [
   {
      id: 1,
      question: "Ano ang karaniwang umuubos sa sweldo ng mga empleyado?",
      answers: [
         {
            order: 1,
            text: "Food / Groceries",
            points: 4,
         },
         {
            order: 2,
            text: "Bills / Rent",
            points: 3,
         },
         {
            order: 3,
            text: "Transportation",
            points: 2,
         },
         {
            order: 4,
            text: "Hobbies / Recreation",
            points: 1,
         },
      ],
   },
   {
      id: 2,
      question: "Ano ang karaniwang makikita sa loob ng refrigerator?",
      answers: [
         {
            order: 1,
            text: "Tubig / Beverages",
            points: 7,
         },
         {
            order: 2,
            text: "Ulam / Viand ",
            points: 6,
         },
         {
            order: 3,
            text: "Itlog",
            points: 5,
         },
         {
            order: 4,
            text: "Gatas",
            points: 4,
         },
         {
            order: 5,
            text: "Prutas",
            points: 3,
         },
         {
            order: 6,
            text: "Gulay",
            points: 2,
         },
         {
            order: 7,
            text: "Ice cream",
            points: 1,
         },
      ],
   },
   {
      id: 3,
      question: "Bukod sa paglalaba at pagligo, saan pa ginagamit ang tubig?",
      answers: [
         {
            order: 1,
            text: "Pandilig ng halaman",
            points: 5,
         },
         {
            order: 2,
            text: "Inumin",
            points: 4,
         },
         {
            order: 3,
            text: "Hugas ng plato / baso",
            points: 3,
         },
         {
            order: 4,
            text: "Linis ng bahay",
            points: 2,
         },
         {
            order: 5,
            text: "Pagluluto",
            points: 1,
         },
      ],
   },
   {
      id: 4,
      question: "Bukod sa tubig, ano pa ang madalas mong inumin?",
      answers: [
         {
            order: 1,
            text: "Softdrinks",
            points: 4,
         },
         {
            order: 2,
            text: "Fruit / Buko Juice",
            points: 3,
         },
         {
            order: 3,
            text: "Alak",
            points: 2,
         },
         {
            order: 4,
            text: "Gatas",
            points: 1,
         },
      ],
   },
   {
      id: 5,
      question: "Anong pagkain ang mahirap kainin pag walang ngipin?",
      answers: [
         {
            order: 1,
            text: "Mani",
            points: 4,
         },
         {
            order: 2,
            text: "Mais",
            points: 3,
         },
         {
            order: 3,
            text: "Mansanas",
            points: 2,
         },
         {
            order: 4,
            text: "Karne / Meat",
            points: 1,
         },
      ],
   },
];
