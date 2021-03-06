// declare global {
    interface ReadonlyArray<T> {
        /**
         * Returns the last element of an array.
         * @param n Which element from the end (default is zero).
         */
        tail(n: number): T;
    
        /**
         * @returns a new array with all falsy values removed. The original array IS NOT modified.
         */
        coalesce(): Array<NonNullable<T>>;
    
        /**
         * Computes the unique objects inside the array
         *   e.g.
         *   ['a', 'b', 'c', 'c'] becomes ['a', 'b', 'c']
         */
        distinct(): T[];
    
        lastIndex(fn: (item: T) => boolean): number;
    
        firstIndex(fn: (item: T) => boolean): number;
    
        firstOrDefault(fn: (item: T) => boolean, notFoundValue?: T): T | undefined;
    
        /**
         * Safely returns undefined if there are no elements in the array otherwise returns the first element
         */
        first(): T | undefined;
    
        /**
         * Safely returns undefined if there are no elements in the array otherwise returns the last element
         */
        last(): T | undefined;
    
        toHashMap<U>(options?: { internalKey?: string; externalKey?: string; keyGetter?: (item: U) => string | number; valueGetter?: (item: T) => any }): U;
    
        /**
         * Differences between *this* and *other*. All differences.
         * @param other
         */
        diff(other: T[]): T[];
    
        /**
         * Difference to *this* from *other* e.g. What exists in left that doesn't exist in right
         * @param other
         */
        diffLeft(other: T[]): T[];
    
        /**
         * Difference from *this* to *other* e.g. What exists in right that doesn't exist in left
         * @param other
         */
        diffRight(other: T[]): T[];
    
        /**
         * Group values by this key
         * @param k Key
         */
        groupBy(k: string): T[];
    
        /**
         * Computes the properties in the arrays that are equivalent
         *   e.g.
         *   ['a', 'b'] and ['b', 'c'] will produce ['b']
         * @param other
         */
        intersection(other: T[]): T[];
    }
    
    interface Array<T> {
        /**
         * Returns the last element of an array.
         * @param n Which element from the end (default is zero).
         */
        tail(n: number): T;
    
        /**
         * @returns a new array with all falsy values removed. The original array IS NOT modified.
         */
        coalesce(): Array<NonNullable<T>>;
    
        /**
         * Computes the unique objects inside the array
         *   e.g.
         *   ['a', 'b', 'c', 'c'] becomes ['a', 'b', 'c']
         */
        distinct(): T[];
    
        lastIndex(fn: (item: T) => boolean): number;
    
        firstIndex(fn: (item: T) => boolean): number;
    
        firstOrDefault(fn: (item: T) => boolean, notFoundValue?: T): T | undefined;
    
        /**
         * Safely returns undefined if there are no elements in the array otherwise returns the first element
         */
        first(): T | undefined;
    
        /**
         * Safely returns undefined if there are no elements in the array otherwise returns the last element
         */
        last(): T | undefined;
    
        toHashMap<U>(options?: { internalKey?: string; externalKey?: string; keyGetter?: (item: U) => string | number; valueGetter?: (item: T) => any }): U;
    
        /**
         * Differences between *this* and *other*. All differences.
         * @param other
         */
        diff(other: T[]): T[];
    
        /**
         * Difference to *this* from *other* e.g. What exists in left that doesn't exist in right
         * @param other
         */
        diffLeft(other: T[]): T[];
    
        /**
         * Difference from *this* to *other* e.g. What exists in right that doesn't exist in left
         * @param other
         */
        diffRight(other: T[]): T[];
    
        /**
         * Group values by this key
         * @param k Key
         */
        groupBy(k: string): T[];
    
        /**
         * Computes the properties in the arrays that are equivalent
         *   e.g.
         *   ['a', 'b'] and ['b', 'c'] will produce ['b']
         * @param other
         */
        intersection(other: T[]): T[];
    }
    // }
    