import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layouts/Header.tsx";
import Quiz from "./components/Quiz/Quiz.tsx";
const Home = lazy(() => import("./components/Home/Home.tsx"));
const SelectQuizLevel = lazy(
  () => import("./components/SelectQuizLevel/SelectQuizLevel.tsx")
);
const App = () => {
  const [state, setState] = useState<string>("");
  useEffect(() => {}, []);
  return (
    <div className="quiz-app">
      <BrowserRouter>
        <Suspense fallback={<h1>Wait...</h1>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/select/quiz/level/:name"
              element={<SelectQuizLevel />}
            />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
