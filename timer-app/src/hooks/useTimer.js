import { useState, useEffect } from "react";
import useStorage from "./useStorage";

export default function useTimer() {
  const [timers, setTimers] = useStorage("timers", []);
  const [history, setHistory] = useStorage("history", []);
  const [alerts, setAlerts] = useState({});
  const [modal, setModal] = useState({ isOpen: false, timerName: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) =>
        prev.map((timer) => {
          if (timer.status === "Running" && timer.remaining > 0) {
            const newRemaining = timer.remaining - 1;
            if (newRemaining === 0) {
              setHistory((prev) => [
                ...prev,
                { name: timer.name, completionTime: Date.now() },
              ]);
              setModal({ isOpen: true, timerName: timer.name });
              return { ...timer, remaining: 0, status: "Completed" };
            }
            if (
              timer.halfwayAlert &&
              newRemaining === Math.floor(timer.duration / 2)
            ) {
              setAlerts((prev) => ({
                ...prev,
                [timer.id]: "Halfway point reached!",
              }));
              setTimeout(() => {
                setAlerts((prev) => ({ ...prev, [timer.id]: null }));
              }, 3000);
            }
            return { ...timer, remaining: newRemaining };
          }
          return timer;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimers, setHistory]);

  const addTimer = (timer) => {
    setTimers((prev) => [...prev, timer]);
  };

  const startTimer = (id) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id ? { ...timer, status: "Running" } : timer
      )
    );
  };

  const pauseTimer = (id) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id ? { ...timer, status: "Paused" } : timer
      )
    );
  };

  const resetTimer = (id) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id
          ? { ...timer, remaining: timer.duration, status: "Paused" }
          : timer
      )
    );
  };

  const bulkStart = (category) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.category === category && timer.status !== "Completed"
          ? { ...timer, status: "Running" }
          : timer
      )
    );
  };

  const bulkPause = (category) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.category === category ? { ...timer, status: "Paused" } : timer
      )
    );
  };

  const bulkReset = (category) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.category === category
          ? { ...timer, remaining: timer.duration, status: "Paused" }
          : timer
      )
    );
  };

  const closeModal = () => {
    setModal({ isOpen: false, timerName: "" });
  };

  const exportHistory = () => {
    const dataStr = JSON.stringify(history);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "timer_history.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return {
    timers,
    history,
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
    exportHistory,
  };
}
