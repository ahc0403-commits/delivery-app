import { Star, Clock, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RestaurantCardProps {
  image: string;
  nameKo: string;
  nameVi: string;
  cuisine: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  distance: string;
  deliveryFee: string;
}

export function RestaurantCard({
  image,
  nameKo,
  nameVi,
  cuisine,
  rating,
  reviews,
  deliveryTime,
  distance,
  deliveryFee,
}: RestaurantCardProps) {
  return (
    <div className="bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-3 p-3">
        <div className="flex-shrink-0 w-[100px] h-[100px] rounded-[12px] overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={nameKo}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] truncate mb-0.5">{nameKo}</h3>
          <p className="text-[12px] text-muted-foreground truncate mb-2">
            {nameVi} • {cuisine}
          </p>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span className="text-[12px]">{rating}</span>
            <span className="text-[12px] text-muted-foreground">({reviews})</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{distance}</span>
            </div>
            <span className="text-primary">{deliveryFee}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
