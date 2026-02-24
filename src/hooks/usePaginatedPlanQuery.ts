/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react';
import { useGetAllDataQuery } from '@/services/api/api';

export interface UsePaginatedPlanQueryResult<T> {
    planDetail: any | null;
    cards: T[];
    response: any;
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    perPage: number;
    isLoading: boolean;
    isFetching: boolean;
    setPage: (page: number) => void;
    setSearchTerm: (term: string) => void;
    setPerPage: (n: number) => void;
    updateFilters: (obj: Record<string, any>) => void;
    refetch: () => void;
}

export function usePaginatedPlanQuery<T = any>(
    url: string,
    defaultParams: Record<string, any> = {},
    skip: boolean = false,
    queryOptions: any = {}
): UsePaginatedPlanQueryResult<T> {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [perPage, setPerPage] = useState(10);
    const [filters, setFilters] = useState<Record<string, any>>({});

    const updateFilters = useCallback((newFilters: Record<string, any>) => {
        setFilters((prev) => ({ ...prev, ...newFilters }));
        setCurrentPage(1);
    }, []);

    const {
        data: response = {
            data: {
                planDetail: null,
                cards: { records: [], totalRecords: 0, totalPages: 0, currentPage: 1, perPage: 10 },
            },
        },
        isLoading,
        isFetching,
        refetch,
    } = useGetAllDataQuery(
        {
            url,
            params: {
                page: currentPage,
                perPage,
                searchTerm,
                ...defaultParams,
                ...filters,
            },
        },
        {
            skip,
            ...queryOptions,
        }
    );

    // Extract planDetail and cards
    const planDetail = response?.data?.planDetail ?? null;
    const cardsData = response?.data?.cards ?? {};
    const cards: T[] = cardsData?.records ?? [];
    const totalRecords = cardsData?.totalRecords ?? 0;
    const totalPages = cardsData?.totalPages ?? 0;
    const perPageFromResp = cardsData?.perPage ?? perPage;
    const currentPageFromResp = cardsData?.currentPage ?? currentPage;

    const setPage = useCallback((page: number) => setCurrentPage(page), []);
    const handleSearch = useCallback((term: string) => {
        setSearchTerm(term);
        setCurrentPage(1);
    }, []);
    const handlePerPage = useCallback((n: number) => {
        setPerPage(n);
        setCurrentPage(1);
    }, []);

    return {
        planDetail,
        cards,
        response,
        totalRecords,
        totalPages,
        currentPage: currentPageFromResp,
        perPage: perPageFromResp,
        isLoading,
        isFetching,
        setPage,
        setSearchTerm: handleSearch,
        setPerPage: handlePerPage,
        updateFilters,
        refetch,
    };
}
