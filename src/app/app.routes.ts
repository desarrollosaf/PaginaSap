import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
       
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'pages',
        loadComponent: () => import('./dashboard/pages/pages.component'),
        children: [
            {
                path: 'secretaria',
                title: 'Secretaria',
                loadComponent: () => import('./dashboard/pages/secretaria/secretaria.component'),
            },
            {
                path: 'diputadasydiputados',
                title: 'Diputados',
                loadComponent: () => import('./dashboard/pages/diputados/diputados.component'),
            }

        ]
       
    },



];
