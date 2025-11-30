// Premium Line Art Strawberry Logo - Market Kurly Aesthetic
// Elegant, Abstract, Minimalist

interface StrawberryLogoLineArtProps {
  size?: number;
  color?: string;
}

export function StrawberryLogoLineArt({ size = 120, color = "#FFFFFF" }: StrawberryLogoLineArtProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Elegant Line Art Strawberry - Premium Style */}
      
      {/* Leaf/Crown - Refined Lines */}
      <path
        d="M50 20C50 20 46 16 42 18C38 20 40 24 42 26L50 24L58 26C60 24 62 20 58 18C54 16 50 20 50 20Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Leaf Details - Delicate Veins */}
      <path
        d="M50 20L50 24"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M44 22L47 24"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M56 22L53 24"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      
      {/* Main Body - Elegant Contour */}
      <path
        d="M38 28C30 32 24 40 24 50C24 60 30 70 38 78C42 82 46 88 48 94C48.5 95.5 48 98 48 98M52 98C52 98 51.5 95.5 52 94C54 88 58 82 62 78C70 70 76 60 76 50C76 40 70 32 62 28C58 26 54 24 50 24C46 24 42 26 38 28Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Seeds - Minimalist Dots (Only Outlines) */}
      <circle cx="40" cy="48" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="48" cy="44" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="52" cy="44" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="60" cy="48" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      
      <circle cx="44" cy="56" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="50" cy="54" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="56" cy="56" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      
      <circle cx="46" cy="66" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="54" cy="66" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      
      <circle cx="50" cy="76" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      
      {/* Bottom Point Detail */}
      <path
        d="M48 98C48 98 49 100 50 100C51 100 52 98 52 98"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Compact version for headers (32px)
export function StrawberryLogoLineArtCompact({ size = 32, color = "#FF4E50" }: StrawberryLogoLineArtProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Same design, more compact */}
      <path
        d="M50 20C50 20 46 16 42 18C38 20 40 24 42 26L50 24L58 26C60 24 62 20 58 18C54 16 50 20 50 20Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      <path
        d="M50 20L50 24"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      
      <path
        d="M38 28C30 32 24 40 24 50C24 60 30 70 38 78C42 82 46 88 48 94C48.5 95.5 48 98 48 98M52 98C52 98 51.5 95.5 52 94C54 88 58 82 62 78C70 70 76 60 76 50C76 40 70 32 62 28C58 26 54 24 50 24C46 24 42 26 38 28Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      <circle cx="40" cy="48" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="48" cy="44" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="52" cy="44" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="60" cy="48" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="50" cy="54" r="1.5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="50" cy="76" r="1.5" stroke={color} strokeWidth="1" fill="none" />
    </svg>
  );
}
