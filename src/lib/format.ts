/**
 * Deterministic Italian number formatting for SSR/client consistency.
 * Avoids hydration mismatches from environment-specific toLocaleString behavior.
 */
export function formatItalianNumber(value: number): string {
    const [integerPart, decimalPart] = Math.abs(value).toString().split(".");
    const grouped = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const sign = value < 0 ? "-" : "";

    return decimalPart ? `${sign}${grouped},${decimalPart}` : `${sign}${grouped}`;
}
