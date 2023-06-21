/**
 * 
 * @param {{ variant: "h1" | "h2", children: React.ReactNode }} props
 * @example
 * // h1 Variant
 * <Heading variant="h1">Title</Heading>
 * 
 * // h2 Variant
 * <Heading variant="h2">Subtitle</Heading>
 */

export default function Heading({ variant, children }) {
    const headingCommonStyle = "font-bold";

    if (variant === "h1")
        return <h1 className={`${headingCommonStyle} dark:text-ghost-white text-3xl sm:text-2xl`}>{children}</h1>

    if (variant === "h2")
        return <h2 className={`${headingCommonStyle} text-dark-electric-blue dark:text-ceil text-lg sm:text-base`}>{children}</h2>
    
    throw new Error("Variant not defined or not recognized. Try adding a 'variant' prop to the component with value 'h1' or 'h2'.");
}