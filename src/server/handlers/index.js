import MoviesHandlers from './movies';
import RootSSRHandlers from './root-ssr';
import RootPublicHandlers from './root-public';

const Routes = [...MoviesHandlers, ...RootSSRHandlers, ...RootPublicHandlers];

export default Routes;
