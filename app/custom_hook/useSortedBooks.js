// custom_hook/useSortedBooks.js
import { useMemo } from 'react';

export default function useSortedBooks(books) {
    // Use useMemo to memoize the sorted books
    return useMemo(() => {
        return [...books].sort((a, b) => a.title.localeCompare(b.title));
    }, [books]);
}
