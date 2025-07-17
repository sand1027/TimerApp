import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

export default function TimerForm({ onAddTimer, categories }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [halfwayAlert, setHalfwayAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && duration && category) {
      onAddTimer({
        id: Date.now(),
        name,
        duration: parseInt(duration),
        category,
        halfwayAlert,
        remaining: parseInt(duration),
        status: "Paused",
      });
      setName("");
      setDuration("");
      setCategory("");
      setHalfwayAlert(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all duration-300"
    >
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center space-x-2"
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Timer Name</span>
        </Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter timer name"
          className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="duration"
          className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center space-x-2"
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Duration (seconds)</span>
        </Label>
        <Input
          id="duration"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter duration"
          className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="category"
          className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center space-x-2"
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
          <span>Category</span>
        </Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-lg">
            {categories.map((cat) => (
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
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="halfwayAlert"
          checked={halfwayAlert}
          onChange={(e) => setHalfwayAlert(e.target.checked)}
          className="h-5 w-5 text-blue-500 dark:text-blue-400 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-900"
        />
        <Label
          htmlFor="halfwayAlert"
          className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center space-x-2"
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span>Halfway Alert</span>
        </Label>
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg py-3 font-medium transition-all duration-200 flex items-center justify-center space-x-2"
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
        <span>Add Timer</span>
      </Button>
    </form>
  );
}
