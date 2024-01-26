import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Coin, SearchResultCoin, SelectedCoin } from "../types/types";

export const cryptoApi = createApi({
    reducerPath: 'crypto/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://coingecko.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '2848b4ea83msh54e43d790e08ac2p183239jsn51d29a1edceb');
            headers.set('X-RapidAPI-Host', 'coingecko.p.rapidapi.com');
            return headers;
        },
    }),
    tagTypes: ['Coin'],
    endpoints: (builder) => ({
        getCoins: builder.query<Coin[], {name: string, currency: string, page: number, perPage: number, sparkline: boolean}>({
            query: (params) => ({
                url: '/coins/markets',
                params: {
                    ids: params.name,
                    vs_currency: params.currency,
                    page: params.page,
                    per_page: params.perPage,
                    sparkline: params.sparkline  
                }
            }),
            providesTags: ['Coin']
        }),
        getSelectedCoin: builder.query<SelectedCoin, string>({
            query: (id) => ({
                url: `/coins/${id}`
            }),
            providesTags: ['Coin']
        }),
        getSearchResults: builder.query<SearchResultCoin[], {search: string}>({
            query: ({search}) => ({
                url: '/search',
                params: {
                    query: search
                }
            })
        })
    })
})

export const {useGetCoinsQuery, useGetSelectedCoinQuery, useGetSearchResultsQuery} = cryptoApi