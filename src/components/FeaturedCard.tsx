import { Star, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FeaturedCardProps {
  image: string;
  nameKo: string;
  nameVi: string;
  rating: number;
  deliveryTime: string;
  price: string;
  tag?: string;
}

export function FeaturedCard({
  image,
  nameKo,
  nameVi,
  rating,
  deliveryTime,
  price,
  tag,
}: FeaturedCardProps) {
  return (
    <div className="flex-shrink-0 w-[280px] bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-[180px]">
        <ImageWithFallback
          src={image}
          alt={nameKo}
          className="w-full h-full object-cover"
        />
        {tag && (
          <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-[11px]">
            {tag}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-[15px] mb-0.5">{nameKo}</h3>
        <p className="text-[12px] text-muted-foreground mb-3">{nameVi}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{deliveryTime}</span>
            </div>
          </div>
          <div className="text-primary text-[14px]">{price}</div>
        </div>
      </div>
    </div>
  );
}
