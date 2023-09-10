import { Route, Routes } from 'react-router-dom';
import { routesList } from './Routes';

export const RoutesPokedex = () => {
    return (
        <div>
            <Routes>
                {routesList.map((route) => {
                    return <Route key={route.link} path={route.link} element={route.component} />;
                })}
            </Routes>
        </div>
    );
};
