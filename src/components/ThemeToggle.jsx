import React from "react";

const ThemeToggle = () => {
  const toggleTheme = () => {
    const body = document.body;
    const isDark = body.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    body.style.setProperty("--bg-color", isDark ? "#121212" : "#ffffff");
    body.style.setProperty("--text-color", isDark ? "#e0e0e0" : "#333333");
  };

  return (
    <button onClick={toggleTheme} title="Toggle theme">
      change theme
    </button>
  );
};

export default ThemeToggle;
