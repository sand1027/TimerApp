import useStorage from "./useStorage";

export default function useCategories() {
  const [categories, setCategories] = useStorage("categories", [
    "Workout",
    "Study",
    "Break",
  ]);

  const addCategory = (category) => {
    if (category && !categories.includes(category)) {
      setCategories((prev) => [...prev, category].sort());
    }
  };

  return { categories, addCategory };
}
