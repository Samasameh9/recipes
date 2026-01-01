import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Select, SelectItem } from "@heroui/react";
import axios from "axios";

export default function AllMeals() {
  const categories = [
    { key: "Beef", label: "Beef" },
    { key: "Breakfast", label: "Breakfast" },
    { key: "Chicken", label: "Chicken" },
    { key: "Dessert", label: "Dessert" },
    { key: "Goat", label: "Goat" },
    { key: "Lamb", label: "Lamb" },
    { key: "Miscellaneous", label: "Miscellaneous" },
    { key: "Pasta", label: "Pasta" },
    { key: "Pork", label: "Pork" },
    { key: "Seafood", label: "Seafood" },
    { key: "Side", label: "Side" },
    { key: "Starter", label: "Starter" },
    { key: "Vegan", label: "Vegan" },
    { key: "Vegetarian", label: "Vegetarian" },
  ];

  const mealNames = [
    "Flan","Ezme","Kabse","Asado","Migas","Sushi","Cacik","Locro","Burek","Corba",
    "Borsch","Hummus","Kumpir","Knafeh","Tamiya","Bistek","Paella","Fainá","Challah",
    "Big Mac","Falafel","Lasagne","Dal fry","Koshari","Poutine"
  ];

  const [meals, setMeals] = useState([]);

  async function showMeals() {
    const results = await Promise.all(
      mealNames.map(async (mealName) => {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        );
        return data.meals?.[0] || null;
      })
    );
    setMeals(results.filter(Boolean));
  }

  useEffect(() => {
    showMeals();
  }, []);

  return (
    <>
      <div
        className="py-9 text-center md:text-start w-lg md:w-full md:ps-70 container mx-auto 2xl:ps-80">
        <h1 className="font-bold main-head text-5xl">
          Learn, Cook, Eat Your Food
        </h1>

        <Select
          className="mt-8 visible md:hidden overflow-visible border-gray-300 border-1 rounded-xl"
          placeholder="Beef"
        >
          {categories.map((category) => (
            <SelectItem key={category.key}>{category.label}</SelectItem>
          ))}
        </Select>

        <ul className="mt-5 hidden md:flex gap-5 justify-start items-center cursor-pointer flex-wrap border-b border-gray-200">
          <li>
            <NavLink to='' className='border rounded-2xl inline-block py-1 px-3 text-2xl text-gray-600 border-gray-600 transition-all hover:shadow-xl shadow duration-300 hover:bg-white hover:text-gray-700'>All</NavLink>
          </li>
          {categories.map((category) => (
            <li key={category.key}>
              <NavLink
                to={category.key}
                className="border rounded-2xl inline-block py-1 px-3 text-2xl text-gray-600 border-gray-600 transition-all hover:shadow-xl shadow duration-300 hover:bg-white hover:text-gray-700"
              >
                {category.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap mt-32 gap-7">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="md:w-full md:me-5 lg:w-1/3 xl:w-1/4 p-4 2xl:w-1/5 mb-20 bg-white relative rounded-2xl hover:scale-105 transition-all duration-400 group"
            >
              <div className="flex justify-center">
                <img
                  src={meal.strMealThumb}
                  alt=""
                  className="w-2/3 rounded-full -translate-y-10 group-hover:rotate-360 transition-all duration-700"
                />
              </div>
              <div className="text-center">
                <h2 className="font-bold text-2xl">{meal.strMeal}</h2>
                <div className="flex justify-center items-center gap-2">
                  <svg
                    stroke="currentColor"
                    className="text-green-600"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                  </svg>
                  <h5 className="text-green-600">{meal.strArea}</h5>
                </div>
                <Link to="/detailsMeals" state={{ mealId: meal.idMeal }}>
                  <button className="border rounded-2xl bg-green-600 text-white font-bold px-7 py-2 cursor-pointer mt-2 hover:bg-green-700 transition-all duration-500">
                    View Recipe
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
