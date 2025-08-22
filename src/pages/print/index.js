import Image from "next/image";
import styles from "../../styles/Document.module.css";

export default function Home() {
  const pages = [
    {
      title: "First Landing Page",
      landingImage: "/image-01.png",
    },
    {
      title: "Second Landing Page",
      landingImage: "/image-02.png",
    },
    [
      {
        title: "Chilled Seafood Bar",
        image: "/image-06.png",
        isThereSpecialMeals: true,
        isImageBesidesSpecialMeals: false,
        isImageSizeSmall: false,
        notes: [],
        specialMeals: [
          {
            title: "Seafood Tower",
            symbols: ["~", "*", "(GF)"],
            ingredients: [
              "Shrimp",
              "Oysters",
              "Lobster",
              "Hiramasa Ceviche",
              "Crab Salad",
              "Tuna",
              "Dill Aioli",
              "Delilah Mignonette",
              "Cocktail Sauce",
            ],
            prices: [
              {
                amount: 150,
                notes: "serves 2 - 4",
              },
              {
                amount: 290,
                notes: "serves 4 - 6",
              },
            ],
            notes: null,
          },
        ],
        meals: [
          {
            title: "West Coast Oysters",
            symbols: ["~", "(GF)"],
            ingredients: ["Cocktail Sauce", "Delilah Mignonette", "Lemon"],
            price: {
              amount: 33,
              notes: "1/2 dozen",
            },
          },
          {
            title: "Shrimp Cocktail",
            symbols: ["*", "(GF)"],
            ingredients: ["Cocktail Sauce", "Dill Aioli"],
            price: {
              amount: 34,
              notes: null,
            },
          },
          {
            title: "Kaluga Caviar Service",
            symbols: ["*", "(GF)"],
            ingredients: [
              "100 Layer Potato",
              "Chive",
              "Red Onion",
              "Eggs Mimosa",
              "Crème Fraîche",
            ],
            price: {
              amount: 145,
              notes: null,
            },
          },
        ],
      },
      {
        title: "Appetizers",
        image: "/image-07.png",
        notes: [],
        isThereSpecialMeals: true,
        isImageBesidesSpecialMeals: true,
        isImageSizeSmall: false,
        specialMeals: [
          {
            title: "Chicken Tenders",
            symbols: null,
            ingredients: ["Spicy BBQ", "Buttermilk Ranch", "Zab's Hot Honey"],
            prices: [
              {
                amount: 31,
                notes: null,
              },
            ],
          },
        ],
        meals: [
          {
            title: "Tuna Tartare",
            symbols: ["*"],
            ingredients: ["Chili", "Avocado Mousse", "Ponzu", "Sesame Cracker"],
            price: {
              amount: 35,
              notes: null,
            },
          },
          {
            title: "Hiramasa Crudo",
            symbols: ["*", "(GF)"],
            ingredients: [
              "Coconut",
              "Thai Basil",
              "Red Onion",
              "Lychee",
              "Crispy Garlic",
            ],
            price: {
              amount: 33,
              notes: null,
            },
          },
          {
            title: "Crab Cake",
            symbols: [],
            ingredients: ["Jumbo Lump Crab", "Cabbage Slaw", "Tartar Sauce"],
            price: {
              amount: 35,
              notes: null,
            },
          },
          {
            title: "Crispy Calamari",
            symbols: [],
            ingredients: [
              "Banana Peppers",
              "Preserved Lemon Aioli",
              "Spicy Tomato",
              "Basil",
            ],
            price: {
              amount: 26,
              notes: null,
            },
          },
          {
            title: "Grilled Octopus",
            symbols: ["(GF)"],
            ingredients: [
              "Potato",
              "Fennel",
              "Olives",
              "Peppers",
              "Harissa Aioli",
            ],
            price: {
              amount: 29,
              notes: null,
            },
          },
          {
            title: "Pigs In A Blanket",
            symbols: [],
            ingredients: ["Wagyu Beef Hotdog", "Honey Mustard", "Cornichons"],
            price: {
              amount: 26,
              notes: null,
            },
          },
          {
            title: "Steak Tartare",
            symbols: ["*"],
            ingredients: [
              "Westholme Wagyu",
              "Pickled Chanterelle",
              "Capers",
              "Aged Parmesan",
            ],
            price: {
              amount: 35,
              notes: null,
            },
          },
        ],
      },
      {
        title: "Salads",
        image: "/image-08.png",
        isImageSizeSmall: true,
        isImageBesidesSpecialMeals: false,
        notes: [],
        isThereSpecialMeal: false,
        specialMeal: null,
        meals: [
          {
            title: "Iceberg Wedge",
            symbols: ["(GF)"],
            ingredients: [
              "Cherry Tomato",
              "Pickled Shallot",
              "Bacon",
              "Point Reyes Blue Cheese",
            ],
            price: {
              amount: 26,
              notes: null,
            },
          },
          {
            title: "Tomato & Mozzarella Salad",
            symbols: ["(GF)"],
            ingredients: [
              "Jalapeño Pickled Watermelon",
              "Vincotto",
              "Extra Virgin Olive Oil",
            ],
            price: {
              amount: 24,
              notes: null,
            },
          },
          {
            title: "Avocado & Citrus Salad",
            symbols: ["(GF)", "(VG)"],
            ingredients: [
              "Seasonal Citrus",
              "Mizuna",
              "Shiso",
              "Raspberry Vinaigrette",
            ],
            price: {
              amount: 27,
              notes: null,
            },
          },
        ],
      },
      {
        title: "Second Landing Page",
        sectionImage: "/image-03.png",
      },
    ],
    [
      {
        title: "Entrées",
        image: "/image-04.png",
        imageTitle: "Palm",
        notes: [],
        isThereSpecialMeal: false,
        specialMeal: null,
        isImageBesidesSpecialMeals: false,
        isImageSizeSmall: false,
        meals: [
          {
            title: "Roasted Cauliflower",
            symbols: ["(GF)"],
            ingredients: [
              "Salsa Verde",
              "Pomegranate Yogurt",
              "Pickled Shallot",
            ],
            price: {
              amount: 31,
              notes: null,
            },
          },
          {
            title: "Lobster Mafaldine",
            symbols: [],
            ingredients: ["Zucchini", "Spicy Vodka Sauce", "Crispy Basil"],
            price: {
              amount: 63,
              notes: null,
            },
          },
          {
            title: "Pan Seared Red Snapper",
            symbols: ["(GF)"],
            ingredients: ["Summer Caponata", "Clams", "Soft Herbs"],
            price: {
              amount: 57,
              notes: null,
            },
          },
          {
            title: "Roasted Branzino",
            symbols: ["(GF)"],
            ingredients: ["Sundried Tomato Chimichurri"],
            price: {
              amount: 59,
              notes: null,
            },
          },
          {
            title: "Seared Bluefin Tuna",
            symbols: ["*", "(GF)"],
            ingredients: [
              "Peppercorn Crusted",
              "Piquillo Pepper",
              "Olive",
              "Bordelaise",
            ],
            price: {
              amount: 63,
              notes: null,
            },
          },
          {
            title: "Roasted Chicken",
            symbols: [],
            ingredients: [
              "Charred Corn",
              "Crispy Sage",
              "Chanterelles",
              "Sherry Truffle Jus",
            ],
            price: {
              amount: 52,
              notes: null,
            },
          },
          {
            title: "The Burger",
            symbols: ["*"],
            ingredients: [
              "Potato Bun",
              "Special Sauce",
              "American Cheese",
              "The Fixn's",
            ],
            price: {
              amount: 31,
              notes: "actual veggies™ +9",
            },
          },
        ],
      },
      {
        title: "Steaks & Chops",
        image: null,
        notes: [
          "choice of chimichurri, bordelaise, bérnarise, truffle soy or peppercorn sauce",
          "½ GRILLED LOBSTER +42 / SAUTÉED PRAWNS +35",
        ],
        isThereSpecialMeals: true,
        isImageBesidesSpecialMeals: false,
        isImageSizeSmall: false,
        specialMeals: [
          {
            title: "32oz Wagyu Tomahawk",
            symbols: ["*", "(GF)"],
            ingredients: [
              "Westholme Australia 4/5 BMS With Choice Of Two Sides",
            ],
            prices: [
              {
                amount: 300,
                notes: null,
              },
            ],
          },
          {
            title: "A5 Miyazaki New York Strip",
            symbols: ["*"],
            ingredients: [
              "Sizzling Peppers",
              "Truffled Ponzu",
              "Garlic Truffle Butter",
            ],
            prices: [
              {
                amount: 125,
                notes: "4oz",
              },
              {
                amount: 240,
                notes: "8oz",
              },
            ],
          },
        ],
        meals: [
          {
            title: "8oz Prime Filet Mignon",
            symbols: ["*", "(GF)"],
            ingredients: ["Allen Brothers"],
            price: {
              amount: 85,
              notes: null,
            },
          },
          {
            title: "10oz Angus Skirt Steak",
            symbols: ["*", "(GF)"],
            ingredients: ["Allen Brothers"],
            price: {
              amount: 75,
              notes: null,
            },
          },
          {
            title: "16oz Wagyu New York Strip",
            symbols: ["*", "(GF)"],
            ingredients: ["Westholme Australia"],
            price: {
              amount: 125,
              notes: null,
            },
          },
          {
            title: "18oz Angus Ribeye",
            symbols: ["*", "(GF)"],
            ingredients: ["Allen Brothers"],
            price: {
              amount: 97,
              notes: null,
            },
          },
          {
            title: "Roasted Rack Of Lamb",
            symbols: ["*", "(GF)"],
            ingredients: ["Roasted Onion", "Sumac", "Aleppo"],
            price: {
              amount: 66,
              notes: null,
            },
          },
        ],
      },
      {
        title: "Sides",
        image: `/image-09.png`,
        imageTitle: "Sides",
        notes: [],
        isThereSpecialMeals: true,
        isImageBesidesSpecialMeals: true,
        isImageSizeSmall: false,
        specialMeals: [
          {
            title: "Carrot Soufflé",
            symbols: ["+"],
            ingredients: [
              "The Original Chasen's Recipe",
              "Candied Corn Flakes",
              "Walnuts",
            ],
            prices: [
              {
                amount: 20,
                notes: null,
              },
            ],
          },
        ],
        meals: [
          {
            title: "Fries",
            symbols: ["(VG)"],
            ingredients: ["Special House Seasoning"],
            notes: ["add truffle +5"],
            price: {
              amount: 18,
              notes: null,
            },
          },
          {
            title: "Macaroni Gratinée",
            symbols: [],
            ingredients: ["Mimolette Cheese Fondue", "Black Truffle Bechamel"],
            price: {
              amount: 24,
              notes: null,
            },
          },
          {
            title: "Twice Baked Potato",
            symbols: ["(GF)"],
            ingredients: [
              "Parmesan",
              "Crème Fraîche",
              "Bacon",
              "Black Truffle",
            ],
            price: {
              amount: 24,
              notes: null,
            },
          },
          {
            title: "Charred Corn",
            symbols: ["(GF)", "(VG)"],
            ingredients: ["Leeks", "Pickled Jalapeños", "Chives", "Cilantro"],
            price: {
              amount: 18,
              notes: null,
            },
          },
          {
            title: "Roasted Squash",
            symbols: ["(GF)"],
            ingredients: [
              "Cherry Tomato",
              "Cippolini",
              "Truffle",
              "Garlic",
              "Macadamia Nuts",
            ],
            price: {
              amount: 18,
              notes: null,
            },
          },
        ],
      },
    ],
    [
      {
        title: "Refreshments",
        image: null,
        notes: [],
        isThereSpecialMeals: false,
        isImageBesidesSpecialMeals: false,
        isImageSizeSmall: false,
        specialMeals: null,
        meals: [
          {
            title: "Water",
            symbols: [],
            ingredients: ["Acqua Panna", "San Pellegrino"],
            price: {
              amount: 12,
              notes: null,
            },
          },
          {
            title: "Juice",
            symbols: [],
            ingredients: ["Assorted"],
            price: {
              amount: 6,
              notes: null,
            },
          },
          {
            title: "Red Bull",
            symbols: [],
            ingredients: ["Regular", "Watermelon & Sugar Free"],
            price: {
              amount: 10,
              notes: null,
            },
          },
          {
            title: "Soda",
            symbols: [],
            ingredients: ["Assorted"],
            price: {
              amount: 6,
              notes: null,
            },
          },
          {
            title: "Tea",
            symbols: [],
            ingredients: ["Assorted Flavors", "Hot And Iced"],
            price: {
              amount: 6,
              notes: null,
            },
          },
          {
            title: "Coffee",
            symbols: [],
            ingredients: ["Americano", "Espresso", "Latte", "Cappuccino"],
            price: {
              amount: 8,
              notes: null,
            },
          },
        ],
      },
    ],
  ];

  return (
    <div className={styles.viewer}>
      {pages.map((page, idx) => {
        if (page.landingImage) {
          return (
            <div className={styles.page} key={idx}>
              <div className={styles.imageFill}>
                <Image
                  src={page.landingImage}
                  alt={page.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className={styles.page} key={idx}>
              <div className={styles.menuContent}>
                {page.map((page, idx) => {
                  if (page.sectionImage) {
                    return (
                      <div key={idx} className={styles.menuSection}>
                        <Image
                          src={page.sectionImage}
                          alt={page.title}
                          width={500}
                          height={245}
                          style={{
                            objectFit: "cover",
                            marginTop: "-20px",
                            zIndex: 1,
                          }}
                          priority
                        />
                      </div>
                    );
                  } else {
                    return (
                      <>
                        <div key={idx} className={styles.menuSection}>
                          <div
                            className={styles.menuHeader}
                            style={{
                              marginTop:
                                page.title === "Refreshments" ? "10px" : "0px",
                            }}
                          >
                            {page.isImageBesidesSpecialMeals || !page.image ? (
                              <h1
                                className={styles.title}
                                style={{
                                  marginBottom: page.isImageBesidesSpecialMeals
                                    ? page.title === "Sides"
                                      ? "-30px"
                                      : "15px"
                                    : "0px",
                                }}
                              >
                                {page.title}
                              </h1>
                            ) : (
                              <>
                                <Image
                                  src={page.image}
                                  alt={page.title}
                                  width={
                                    page.isImageSizeSmall
                                      ? 50
                                      : page?.imageTitle === "Palm"
                                      ? 200
                                      : 130
                                  }
                                  height={
                                    page.isImageSizeSmall
                                      ? 50
                                      : page?.imageTitle === "Palm"
                                      ? 150
                                      : 90
                                  }
                                  className={styles.headerImage}
                                  priority
                                />
                                <h1
                                  className={styles.title}
                                  style={{
                                    marginBottom: page.isImageSizeSmall
                                      ? "-15px"
                                      : "0px",
                                  }}
                                >
                                  {page.title}
                                </h1>
                                <Image
                                  src={page.image}
                                  alt={page.title}
                                  width={
                                    page.isImageSizeSmall
                                      ? 50
                                      : page?.imageTitle === "Palm"
                                      ? 200
                                      : 130
                                  }
                                  height={
                                    page.isImageSizeSmall
                                      ? 50
                                      : page?.imageTitle === "Palm"
                                      ? 150
                                      : 90
                                  }
                                  className={styles.headerImage}
                                  priority
                                />
                              </>
                            )}
                          </div>
                          {page.isThereSpecialMeals ? (
                            page.isImageBesidesSpecialMeals ? (
                              <div className={styles.specialMealsWithImage}>
                                <Image
                                  src={page.image}
                                  alt={page.title}
                                  width={
                                    page?.imageTitle === "Sides" ? 150 : 120
                                  }
                                  height={
                                    page?.imageTitle === "Sides" ? 150 : 80
                                  }
                                  className={styles.headerImage}
                                  priority
                                />
                                <div className={styles.specialMealsContainer}>
                                  <div className={styles.specialMeals}>
                                    {page.specialMeals.map((meal, idx) => {
                                      return (
                                        <div key={idx} className={styles.meal}>
                                          <h2 className={styles.mealTitle}>
                                            {meal.title.toUpperCase()}
                                          </h2>
                                          <p className={styles.mealIngredients}>
                                            {meal.ingredients.join(", ")}
                                            <br />
                                            {meal.prices.map(
                                              (price, priceIdx) => (
                                                <span key={priceIdx}>
                                                  {price.amount}{" "}
                                                  {price.notes &&
                                                    "(" + price.notes + ")"}
                                                  {priceIdx !==
                                                  meal.prices.length - 1
                                                    ? " / "
                                                    : ""}
                                                </span>
                                              )
                                            )}
                                          </p>
                                        </div>
                                      );
                                    })}
                                  </div>
                                  <p className={styles.specialMealsNote}>
                                    {page.notes.length > 0 &&
                                      "- " + page.notes.join(" - ")}
                                  </p>
                                </div>
                                <Image
                                  src={page.image}
                                  alt={page.title}
                                  width={
                                    page?.imageTitle === "Sides" ? 150 : 120
                                  }
                                  height={
                                    page?.imageTitle === "Sides" ? 150 : 80
                                  }
                                  priority
                                />
                              </div>
                            ) : (
                              <div className={styles.specialMealsContainer}>
                                <div className={styles.specialMeals}>
                                  {page.specialMeals.map((meal, idx) => {
                                    return (
                                      <div key={idx} className={styles.meal}>
                                        <h2 className={styles.mealTitle}>
                                          {meal.title.toUpperCase()}
                                        </h2>
                                        <p className={styles.mealIngredients}>
                                          {meal.ingredients.join(", ")}
                                          <br />
                                          {meal.prices.map(
                                            (price, priceIdx) => (
                                              <span key={priceIdx}>
                                                {price.amount}{" "}
                                                {price.notes &&
                                                  "(" + price.notes + ")"}
                                                {priceIdx !==
                                                meal.prices.length - 1
                                                  ? " / "
                                                  : ""}
                                              </span>
                                            )
                                          )}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                                <p className={styles.specialMealsNote}>
                                  {page.notes.length > 0 &&
                                    page.notes?.join(", ")}
                                </p>
                              </div>
                            )
                          ) : (
                            <></>
                          )}
                          <div
                            className={styles.meals}
                            style={{
                              width:
                                page.title === "Sides"
                                  ? "60%"
                                  : page.title === "Refreshments"
                                  ? "70%"
                                  : "",
                              marginTop: page.title === "Sides" ? "-8px" : "",
                              zIndex: 1,
                            }}
                          >
                            {page.meals?.map((meal, idx) => {
                              return (
                                <div key={idx} className={styles.meal}>
                                  <div className={styles.mealInfo}>
                                    <div>
                                      <h2 className={styles.mealTitle}>
                                        {meal.title}
                                        {meal.symbols.map((symbol, idx) => (
                                          <span key={idx}>{symbol}</span>
                                        ))}
                                      </h2>
                                      <p className={styles.mealIngredients}>
                                        {meal.ingredients.join(", ")}
                                      </p>
                                    </div>
                                    <div className={styles.price}>
                                      <span className={styles.notes}>
                                        {meal.price?.notes
                                          ? "(" + meal.price?.notes + ")"
                                          : ""}
                                      </span>
                                      <span className={styles.dots}>
                                        {" . ".repeat(100)}
                                      </span>
                                      <span className={styles.amount}>
                                        {meal.price?.amount
                                          ? +meal.price?.amount
                                          : ""}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {page.title === "Refreshments" && (
                          <p className={styles.generalNotes}>
                            VG - vegan GF - gluten free Please note a service
                            charge of 20% and a 4% entertainment fee will be
                            added to your final check . ~ There is risk
                            associated with consuming raw oysters . If you have
                            chronic illness of the liver, stomach or blood or
                            have immune disorders, you are at greater risk of
                            serious illness from raw oysters, and should eat
                            oysters fully cooked . If unsure of your risk,
                            consult a physician *Consuming raw or undercooked
                            meats, poultry, seafood, shellfish, or eggs may
                            increase your risk of foodborne illness . + Contains
                            Nuts
                          </p>
                        )}
                      </>
                    );
                  }
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
