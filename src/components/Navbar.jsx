import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { routes } from '../router/routes';

import logo from '../../src/assets/graphql+react.png';
import Toggle from './themeToggle';

export const Navbar = () => {
  return (
    
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
        <nav className="bg-zinc-200 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-slate-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src={ logo } className="mr-3 h-6 sm:h-9" alt="GraphQL and React Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">GraphQL</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>

                <div className="absolute right-0 top-0 mr-10 mt-2 md:mr-3 md:mt-4">
                  <Toggle />
                </div>

                <div className="hidden w-full mr-10 md:block md:w-auto" id="navbar-default">

                  <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row dark:text-white dark:bg-white md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-zinc-300 md:dark:bg-gray-600 dark:border-gray-700">
                    {
                      routes.map(({ to, name }) => (
                        <li key={ to }>
                          <NavLink to={ to } className={ ({ isActive }) => isActive ? 'nav-active' : '' }> { name } </NavLink>        
                        </li>     
                      ))
                    }
                  </ul>
                </div>
            </div>
        </nav>
        
        <Routes>
          {
            routes.map( ({ Component, to, path }) => (
              <Route key={ to } path={ path } element={ <Component /> } />    
            ))
          }

          <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />    
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
