import { RouteProps } from "react-router-dom"
import MainPage from "../pages/MainPage/MainPage"
import SingleCoinPage from "../pages/SingleCoinPage/SingleCoinPage"
import AssetsPage from "../pages/AssetsPage/AssetsPage"

export enum AppRoutes {
    MAIN = 'main',
    COIN = 'coin',
    ASSETS = 'assets'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.COIN]: '/coin',
    [AppRoutes.ASSETS]: '/assets'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />
    },
    [AppRoutes.COIN]: {
        path: `${RoutePath[AppRoutes.COIN]}/:id`,
        element: <SingleCoinPage />
    },
    [AppRoutes.ASSETS]: {
        path: RoutePath[AppRoutes.ASSETS],
        element: <AssetsPage />
    },
}