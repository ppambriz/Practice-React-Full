import { createBrowserRouter } from 'react-router'
import { lazy } from 'react';

import { HomePage } from '../heroes/pages/home/HomePage';
import { HeroPage } from '../heroes/pages/hero/HeroPage';
import { AdminPage } from '../admin/pages/AdminPage';
import { HeroesLayout } from '../heroes/layouts/HeroesLayout';
import { AdminLayout } from '../admin/layouts/AdminLayout';

// import { SearchPage } from '../heroes/pages/search/SearchPage';
const SearchPage = lazy(() => import('../heroes/pages/search/SearchPage'));

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HeroesLayout />,
        children: [
            {
                // index, primer hijo, la página que se muestra primero en el layout
                index: true, 
                element: <HomePage />
            },
            {
                //No es necesario poner el '/' ya que lo contiene el padre
                path: 'heroes/1',
                element: <HeroPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
        ]
    },

    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />
            }
        ]
    },    
]);