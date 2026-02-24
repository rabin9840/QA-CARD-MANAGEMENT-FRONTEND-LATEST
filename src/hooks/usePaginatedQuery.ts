import { useState, useCallback } from 'react';
import { useGetAllDataQuery } from '@/services/api/api';

export interface UsePaginatedQueryResult<T> {
    records: T[];
    response: { data: { records: T[]; totalRecords: number; totalPages: number } } | undefined;
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    perPage: number;
    isLoading: boolean;
    isFetching: boolean;
    setPage: (page: number) => void;
    setSearchTerm: (term: string) => void;
    setPerPage: (n: number) => void;
    updateFilters: (obj: Record<string, any>) => void; // NEW
    refetch: () => void;
}

export function usePaginatedQuery<T = any>(
    url: string,
    defaultParams: Record<string, any> = {},
    skip: boolean = false,
    queryOptions: any = {}
): UsePaginatedQueryResult<T> {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [perPage, setPerPage] = useState(10);

    // 🔥 NEW → dynamic filter values
    const [filters, setFilters] = useState<Record<string, any>>({});

    const updateFilters = useCallback((newFilters: Record<string, any>) => {
        console.log('here');
        setFilters((prev) => ({ ...prev, ...newFilters }));
        setCurrentPage(1);
    }, []);

    console.log('default params', defaultParams);

    const {
        data: response = {
            data: { records: [], totalRecords: 0, totalPages: 0 },
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
                name: searchTerm,
                ...defaultParams,
                ...filters, // 🔥 inject dynamic filters here
            },
        },
        {
            skip,
            ...queryOptions,
        }
    );

    // const { records, totalRecords, totalPages } = response.data;
    // ✅ FIX: Safely extract data with null checks and default values
    const records = response?.data?.records ?? [];
    const totalRecords = response?.data?.totalRecords ?? 0;
    const totalPages = response?.data?.totalPages ?? 0;

    const setPage = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    const handleSearch = useCallback((term: string) => {
        setSearchTerm(term);
        setCurrentPage(1);
    }, []);

    const handlePerPage = useCallback((n: number) => {
        setPerPage(n);
        setCurrentPage(1);
    }, []);

    return {
        records,
        response,
        totalRecords,
        totalPages,
        currentPage,
        perPage,
        isLoading,
        isFetching,
        setPage,
        setSearchTerm: handleSearch,
        setPerPage: handlePerPage,
        updateFilters, // 🔥 return the new filter updater
        refetch,
    };
}
