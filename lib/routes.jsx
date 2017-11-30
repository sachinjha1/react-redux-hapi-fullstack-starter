import Movies, { loadData }  from './components/movies/';
import EditMovie from './components/movies/edit-movie';

const routes = [
  {
    loadData,
    path: '/',
    component: Movies,
    exact: true,
  },
  {
    loadData,
    path: '/movies',
    component: Movies,
  },
  {
    path: '/movie/:id',
    component: EditMovie,
  },
];

export default routes;
