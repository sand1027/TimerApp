export function getCategories(timers) {
  return [...new Set(timers.map((timer) => timer.category))].sort();
}

export function groupTimersByCategory(timers) {
  return timers.reduce((acc, timer) => {
    acc[timer.category] = acc[timer.category] || [];
    acc[timer.category].push(timer);
    return acc;
  }, {});
}
