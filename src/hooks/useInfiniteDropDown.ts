import { useEffect, useState, useCallback } from 'react';
import { usePaginatedQuery } from '@/hooks/usePaginatedQuery';

export function useInfiniteDropdown(endpoint: string) {
    const [options, setOptions] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    // Debounce search input
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchQuery);
            setPage(1); // Reset to page 1 when search changes
        }, 1000); // 500ms delay
        // 1s delay

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const {
        records,
        totalRecords,
        isLoading,
        setPage: setApiPage,
    } = usePaginatedQuery(endpoint, {
        perPage: 10,
        orderBy: 'ASC',
        ...(debouncedSearch && { name: debouncedSearch }), // Add search param if exists
    });

    // Fetch page when it changes
    useEffect(() => {
        setApiPage(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    // Append new records
    useEffect(() => {
        if (!records || records.length === 0) {
            setIsLoadingMore(false);
            if (page === 1) {
                setOptions([]); // Clear options if first page has no results
            }
            return;
        }

        if (page === 1) {
            setOptions(records);
        } else {
            setOptions((prev) => [...prev, ...records]);
        }

        // Stop loading more indicator after records are loaded
        setIsLoadingMore(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [records]);

    const loadMore = () => {
        const currentTotal = totalRecords ?? 0;
        if (options.length >= currentTotal || isLoading || isLoadingMore) return;

        setIsLoadingMore(true);
        setPage((prev) => prev + 1);
    };

    const handleInputChange = useCallback((inputValue: string) => {
        setSearchQuery(inputValue);
    }, []);

    const hasMore = totalRecords ? options.length < totalRecords : false;

    return {
        options,
        loadMore,
        isLoading: (page === 1 && isLoading) || (isLoading && searchQuery !== debouncedSearch), // Show loading for first page or when search is debouncing
        isLoadingMore, // Loading more data
        hasMore, // Whether there are more options to load
        totalRecords,
        handleInputChange, // Handle search input
        searchQuery,
    };
}
