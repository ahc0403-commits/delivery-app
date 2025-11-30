import { ChevronLeft, Star, Check, Send } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const reviewTags = [
  { id: "delicious", emoji: "😋", labelKo: "JMT", labelEn: "Delicious", color: "orange" },
  { id: "value", emoji: "💰", labelKo: "가성비 최고", labelEn: "Good Value", color: "green" },
  { id: "portion", emoji: "📦", labelKo: "양이 많아요", labelEn: "Generous Portion", color: "blue" },
  { id: "fresh", emoji: "✨", labelKo: "재료가 신선해요", labelEn: "Fresh Ingredients", color: "purple" },
  { id: "fast", emoji: "⚡", labelKo: "배달이 빨라요", labelEn: "Fast Delivery", color: "yellow" },
  { id: "packaging", emoji: "🎁", labelKo: "포장이 깔끔해요", labelEn: "Great Packaging", color: "pink" },
  { id: "kind", emoji: "😊", labelKo: "사장님이 친절해요", labelEn: "Friendly Owner", color: "cyan" },
  { id: "clean", emoji: "🧼", labelKo: "위생적이에요", labelEn: "Very Clean", color: "teal" },
];

const colorClasses = {
  orange: { bg: "bg-orange-50", border: "border-orange-300", text: "text-orange-700", activeBg: "bg-orange-100" },
  green: { bg: "bg-green-50", border: "border-green-300", text: "text-green-700", activeBg: "bg-green-100" },
  blue: { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-700", activeBg: "bg-blue-100" },
  purple: { bg: "bg-purple-50", border: "border-purple-300", text: "text-purple-700", activeBg: "bg-purple-100" },
  yellow: { bg: "bg-yellow-50", border: "border-yellow-300", text: "text-yellow-700", activeBg: "bg-yellow-100" },
  pink: { bg: "bg-pink-50", border: "border-pink-300", text: "text-pink-700", activeBg: "bg-pink-100" },
  cyan: { bg: "bg-cyan-50", border: "border-cyan-300", text: "text-cyan-700", activeBg: "bg-cyan-100" },
  teal: { bg: "bg-teal-50", border: "border-teal-300", text: "text-teal-700", activeBg: "bg-teal-100" },
};

export function WriteReviewScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [reviewText, setReviewText] = useState("");

  const toggleTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter(id => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleSubmit = () => {
    if (rating === 0) {
      showToast("별점을 선택해주세요 / Please select a rating", "error");
      return;
    }
    showToast("리뷰가 등록되었어요! 감사합니다 🙏", "success");
    navigate("receipt"); // Go to receipt after review
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm border-b border-border">
        <div className="flex items-center gap-3">
          <button 
            onClick={goBack}
            className="w-9 h-9 bg-accent rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 className="text-[18px]">Write Review / 리뷰 작성</h1>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Restaurant Info Card */}
        <div className="bg-white m-5 p-4 rounded-[16px] shadow-sm border border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#00553D] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[20px]">🍜</span>
            </div>
            <div className="flex-1">
              <h2 className="text-[15px] mb-1" style={{ fontWeight: 600 }}>
                신당 떡볶이
              </h2>
              <p className="text-[12px] text-muted-foreground">
                Sindang Tteokbokki
              </p>
            </div>
          </div>
        </div>

        {/* Main Question */}
        <div className="px-5 mb-6">
          <h2 
            className="text-[24px] text-center mb-2 leading-tight"
            style={{ fontWeight: 600 }}
          >
            맛은 어떠셨나요?
          </h2>
          <p className="text-[14px] text-muted-foreground text-center">
            How was the food?
          </p>
        </div>

        {/* Star Rating - Large & Interactive */}
        <div className="px-5 mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-all active:scale-90"
              >
                <Star
                  className={`w-12 h-12 transition-all ${
                    star <= (hoveredRating || rating)
                      ? "fill-yellow-400 text-yellow-400 scale-110"
                      : "fill-gray-200 text-gray-200"
                  }`}
                  strokeWidth={0}
                />
              </button>
            ))}
          </div>
          <p className="text-center text-[13px] text-muted-foreground">
            {rating === 0 && "별점을 선택해주세요 / Tap to rate"}
            {rating === 1 && "😞 별로예요 / Poor"}
            {rating === 2 && "😐 그저 그래요 / Fair"}
            {rating === 3 && "🙂 괜찮아요 / Good"}
            {rating === 4 && "😊 맛있어요 / Great"}
            {rating === 5 && "🤩 최고예요 / Excellent"}
          </p>
        </div>

        {/* Tag Selection Section */}
        <div className="px-5 mb-6">
          <h3 className="text-[15px] mb-3" style={{ fontWeight: 600 }}>
            어떤 점이 좋았나요? (복수선택)
          </h3>
          <p className="text-[12px] text-muted-foreground mb-4">
            Select tags that describe your experience
          </p>

          {/* Tag Chips - Colorful & Interactive */}
          <div className="flex flex-wrap gap-2">
            {reviewTags.map((tag) => {
              const isSelected = selectedTags.includes(tag.id);
              const colors = colorClasses[tag.color as keyof typeof colorClasses];
              
              return (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`
                    px-4 py-3 rounded-[12px] border-2 transition-all active:scale-95
                    flex items-center gap-2
                    ${isSelected 
                      ? `${colors.activeBg} ${colors.border} ${colors.text} shadow-md` 
                      : `${colors.bg} border-transparent ${colors.text} hover:${colors.border}`
                    }
                  `}
                  style={{ fontWeight: isSelected ? 600 : 400 }}
                >
                  <span className="text-[18px]">{tag.emoji}</span>
                  <span className="text-[13px]">{tag.labelKo}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 ml-1" strokeWidth={2.5} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Count */}
          {selectedTags.length > 0 && (
            <div className="mt-4 bg-primary/10 rounded-[12px] p-3 border border-primary/20">
              <p className="text-[12px] text-primary text-center">
                ✓ {selectedTags.length}개 선택됨 / {selectedTags.length} tags selected
              </p>
            </div>
          )}
        </div>

        {/* Optional Text Review */}
        <div className="px-5 mb-6">
          <h3 className="text-[15px] mb-3" style={{ fontWeight: 600 }}>
            더 말씀해주실 내용이 있나요? (선택)
          </h3>
          <p className="text-[12px] text-muted-foreground mb-3">
            Additional comments (optional)
          </p>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="다른 고객들에게 도움이 되는 리뷰를 남겨주세요...&#10;Share details about your experience..."
            className="w-full h-32 px-4 py-3 bg-white border-2 border-border rounded-[12px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-[14px]"
          />
          <p className="text-[11px] text-muted-foreground mt-2">
            {reviewText.length} / 500 characters
          </p>
        </div>

        {/* Data Collection Info */}
        <div className="px-5 mb-6">
          <div className="bg-blue-50 rounded-[12px] p-4 border border-blue-200">
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              💡 <span style={{ fontWeight: 600 }}>Data Insight:</span> Your review tags help us understand customer preferences and help store owners improve their service. This structured data also powers our intelligent ad matching system.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-xl z-50 p-5">
        <div className="max-w-[430px] mx-auto">
          <button
            onClick={handleSubmit}
            disabled={rating === 0}
            className={`
              w-full py-4 rounded-[12px] flex items-center justify-center gap-2 transition-all
              ${rating === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary to-[#00553D] text-white shadow-lg hover:shadow-xl active:scale-[0.98]'
              }
            `}
          >
            <Send className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-[15px]" style={{ fontWeight: 700 }}>
              Submit Review / 리뷰 등록
            </span>
          </button>
          
          {selectedTags.length > 0 && (
            <p className="text-center text-[11px] text-muted-foreground mt-2">
              ✓ {selectedTags.length} tag{selectedTags.length > 1 ? 's' : ''} selected • Star rating: {rating > 0 ? `${rating}★` : 'Not selected'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}