import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import TimerForm from "../components/TimerForm";
import CategorySection from "../components/CategorySection";
import ThemeToggle from "../components/ThemeToggle";
import Modal from "../components/Modal";
import useTimer from "../hooks/useTimer";
import useCategories from "../hooks/useCategories";
import useTheme from "../hooks/useTheme";
import { getCategories, groupTimersByCategory } from "../utils/timerUtils";
import { Link } from "react-router-dom";

export default function Home() {
  const {
    timers,
    alerts,
    modal,
    addTimer,
    startTimer,
    pauseTimer,
    resetTimer,
    bulkStart,
    bulkPause,
    bulkReset,
    closeModal,
  } = useTimer();
  const { categories, addCategory } = useCategories();
  const { theme, toggleTheme } = useTheme();
  const [filter, setFilter] = useState("all");
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      addCategory(newCategory.trim());
      setNewCategory("");
    }
  };

  const filteredTimers =
    filter === "all" ? timers : timers.filter((t) => t.category === filter);
  const groupedTimers = groupTimersByCategory(filteredTimers);
  const allCategories = getCategories(timers);

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-300 ${
        theme === "dark"
          ? "dark bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-blue-500 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Timer Dashboard</span>
          </h1>
          <div className="flex items-center space-x-4">
            <Link
              to="/history"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-200"
            >
              View History
            </Link>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="order-1">
            <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-gray-900 dark:text-gray-100">
              <svg
                className="w-5 h-5 text-blue-500 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Add New Timer</span>
            </h2>
            <TimerForm
              onAddTimer={addTimer}
              categories={categories}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            />
          </div>
          <div className="order-2 space-y-6">
            <div>
              <Label
                htmlFor="newCategory"
                className="text-lg font-semibold mb-2 block flex items-center space-x-2 text-gray-900 dark:text-gray-100"
              >
                <svg
                  className="w-5 h-5 text-blue-500 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span>Add New Category</span>
              </Label>
              <form onSubmit={handleAddCategory} className="flex space-x-3">
                <Input
                  id="newCategory"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter category name"
                  className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg px-6 py-2 font-medium transition-all duration-200 flex items-center space-x-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Add</span>
                </Button>
              </form>
            </div>
            <div>
              <Label className="text-lg font-semibold mb-2 block flex items-center space-x-2 text-gray-900 dark:text-gray-100">
                <svg
                  className="w-5 h-5 text-blue-500 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span>Filter by Category</span>
              </Label>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-lg">
                  <SelectItem
                    value="all"
                    className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    All Categories
                  </SelectItem>
                  {allCategories.map((cat) => (
                    <SelectItem
                      key={cat}
                      value={cat}
                      className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(groupedTimers).map(([category, timers]) => (
            <CategorySection
              key={category}
              category={category}
              timers={timers}
              onStart={startTimer}
              onPause={pauseTimer}
              onReset={resetTimer}
              onBulkStart={bulkStart}
              onBulkPause={bulkPause}
              onBulkReset={bulkReset}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 transition-all duration-200"
            />
          ))}
        </div>

        <Modal
          isOpen={modal.isOpen}
          onClose={closeModal}
          timerName={modal.timerName}
          className="bg-white dark:bg-gray-800 rounded-lg p-6"
        />

        {Object.entries(alerts).map(([id, message]) =>
          message ? (
            <div
              key={id}
              className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-lg flex items-center space-x-2 animate-slide-in"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{message}</span>
            </div>
          ) : null
        )}
      </div>
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
