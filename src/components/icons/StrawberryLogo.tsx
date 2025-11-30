// Minimal Strawberry Logo - Karrot Style
// Location Pin + Strawberry combined silhouette
// Ultra-minimalist, Flat Vector, Geometric

interface StrawberryLogoProps {
  size?: number;
  color?: string;
}

export function StrawberryLogo({ size = 120, color = "#FFFFFF" }: StrawberryLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Strawberry Leaf/Top - Simplified */}
      <path
        d="M50 15C50 15 45 10 40 15C35 20 40 25 40 25L50 22L60 25C60 25 65 20 60 15C55 10 50 15 50 15Z"
        fill={color}
      />
      
      {/* Main Body - Location Pin + Strawberry Shape */}
      <path
        d="M60 22C75 25 85 35 85 50C85 62 75 72 65 82C62 85 58 92 56 98C55 101 60 105 60 105C60 105 55 107 50 107C45 107 40 105 40 105C40 105 45 101 44 98C42 92 38 85 35 82C25 72 15 62 15 50C15 35 25 25 40 22C40 22 45 20 50 20C55 20 60 22 60 22Z"
        fill={color}
      />
      
      {/* Strawberry Seeds - Minimal Dots */}
      <circle cx="35" cy="50" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="45" cy="45" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="55" cy="45" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="65" cy="50" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="40" cy="60" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="50" cy="58" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="60" cy="60" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="45" cy="70" r="2.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="55" cy="70" r="2.5" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

// Compact version for headers/nav (40px)
export function StrawberryLogoCompact({ size = 40, color = "#FF4E50" }: StrawberryLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Strawberry Leaf/Top */}
      <path
        d="M50 15C50 15 45 10 40 15C35 20 40 25 40 25L50 22L60 25C60 25 65 20 60 15C55 10 50 15 50 15Z"
        fill={color}
      />
      
      {/* Main Body */}
      <path
        d="M60 22C75 25 85 35 85 50C85 62 75 72 65 82C62 85 58 92 56 98C55 101 60 105 60 105C60 105 55 107 50 107C45 107 40 105 40 105C40 105 45 101 44 98C42 92 38 85 35 82C25 72 15 62 15 50C15 35 25 25 40 22C40 22 45 20 50 20C55 20 60 22 60 22Z"
        fill={color}
      />
      
      {/* Seeds */}
      <circle cx="35" cy="50" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="45" cy="45" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="55" cy="45" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="65" cy="50" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="40" cy="60" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="50" cy="58" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="60" cy="60" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="45" cy="70" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="55" cy="70" r="2.5" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}
