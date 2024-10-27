import usersRoutes from './users/index.js';
import urlShortnerRoutes from './urlShortNer/url.js';

export default (app) => {
    app.use('/api/users', usersRoutes);
    app.use('/api/urlShortner', urlShortnerRoutes);
};
