import './App.css';
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, useRoutes, useLocation } from "react-router-dom";
const Landing = lazy(() => import('./components/Landing/Landing'));
const Inicio = lazy(() => import('./components/Inicio/Inicio'));
const Test = lazy(() => import('./components/Test/Test'));
const routes = [
  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: '/test/:topic',
    element: <Test />
  },
]


function Todo() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[location]);
  const element = useRoutes(routes);
  return element;
}

function App(){
  return(
    <Router>
      <Suspense fallback={'Cargando...'}>
        <Todo />
      </Suspense>
    </Router>
  )
}

export default App;
