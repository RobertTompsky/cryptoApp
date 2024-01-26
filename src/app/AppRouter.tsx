import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from '../config/routeConfig';

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(RouteConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={element} />
            ))}
        </Routes>
    );
};

export default AppRouter;