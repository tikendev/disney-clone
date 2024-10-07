export type IconNames = 'Home' | 'Search' | 'List' | 'Movies' | 'Series' | 'Originals' | 'Download';

interface NavbarItem {
    title: string;
    icon: IconNames,
    path: string;
    isMobile: boolean;
}

export const navbarItems = [
    {
        title: 'inicio',
        icon: 'Home',
        path: '/',
        isMobile: true,
    },
    {
        title: 'búsqueda',
        icon: 'Search',
        path: '/search',
        isMobile: true,
    },
    {
        title: 'mi lista',
        icon: 'List',
        path: '/watchlist',
        isMobile: false,
    },
    {
        title: 'películas',
        icon: 'Movies',
        path: '/movies',
        isMobile: false,
    },
    {
        title: 'series',
        icon: 'Series',
        path: '/series',
        isMobile: false,
    },
    {
        title: 'originales',
        icon: 'Originals',
        path: '/originals',
        isMobile: false,
    },
    {
        title: 'download',
        icon: 'Download',
        path: '/download',
        isMobile: true,
    },
];