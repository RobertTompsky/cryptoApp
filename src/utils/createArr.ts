export const COINS_PER_PAGE: number[] = Array.from(
    { length: 3 },
    (_, index: number) => (index + 1) * 5)