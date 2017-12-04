import MoviesHandlers from './movies';
import RootSSRHandlers from './root-ssr';
import RootPublicHandlers from './root-public';
import Topics from './topics';

const Routes = [...Topics, ...MoviesHandlers, ...RootSSRHandlers, ...RootPublicHandlers];

export default Routes;
