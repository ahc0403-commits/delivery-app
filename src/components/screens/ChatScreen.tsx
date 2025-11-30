import { ChevronLeft, Send, Languages, ExternalLink, Phone, MoreVertical, Image } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigation } from "../../App";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: number;
  sender: "user" | "owner";
  text: string;
  translated?: string;
  time: string;
  type?: "text" | "delivery-link";
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "user",
    text: "배송 언제하나요?",
    translated: "Khi nào giao hàng?",
    time: "14:23",
    type: "text",
  },
  {
    id: 2,
    sender: "owner",
    text: "곧 조리가 완료되어 5분 안에 배송 출발 예정이에요! 🍳",
    translated: "Sắp nấu xong, dự kiến giao hàng trong 5 phút!",
    time: "14:24",
    type: "text",
  },
  {
    id: 3,
    sender: "owner",
    text: "배달이 시작되었습니다! 아래 링크에서 기사님 위치를 확인하세요 👇",
    translated: "Giao hàng đã bắt đầu! Kiểm tra vị trí tài xế bên dưới",
    time: "14:30",
    type: "delivery-link",
  },
];

const quickReplies = [
  { ko: "감사합니다!", vi: "Cảm ơn!" },
  { ko: "얼마나 걸려요?", vi: "Mất bao lâu?" },
  { ko: "주소 확인해주세요", vi: "Kiểm tra địa chỉ" },
  { ko: "추가 요청", vi: "Yêu cầu thêm" },
];

export function ChatScreen() {
  const { navigate } = useNavigation();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false }),
      type: "text",
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate owner typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const ownerReply: Message = {
        id: messages.length + 2,
        sender: "owner",
        text: getAutoReply(text),
        time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false }),
        type: "text",
      };
      setMessages(prev => [...prev, ownerReply]);
    }, 1500);
  };

  const getAutoReply = (userMessage: string): string => {
    if (userMessage.includes("감사")) {
      return "맛있게 드세요! 좋은 리뷰 부탁드려요 😊";
    } else if (userMessage.includes("얼마") || userMessage.includes("걸려")) {
      return "현재 약 3분 후에 배달이 출발할 예정이에요! 조금만 기다려주세요 🚀";
    } else if (userMessage.includes("주소")) {
      return "주소 확인했습니다! 정확하게 배달해드릴게요 📍";
    } else {
      return "네, 알겠습니다! 곧 배달 시작해드릴게요 🙌";
    }
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  return (
    <div className="h-screen flex flex-col bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 shadow-sm border-b border-border/50">
        <button onClick={() => navigate("store")} className="p-2 hover:bg-accent rounded-full transition-all active:scale-95">
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        
        <div className="flex items-center gap-3 flex-1">
          {/* Store Avatar */}
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-[16px]">🍜</span>
          </div>
          <div className="flex-1">
            <h2 className="text-[15px]" style={{ fontWeight: 600 }}>신당 떡볶이</h2>
            <p className="text-[12px] text-green-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              지금 응답 가능
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <button className="p-2 hover:bg-accent rounded-full transition-all">
          <Phone className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
        </button>
        <button className="p-2 hover:bg-accent rounded-full transition-all">
          <MoreVertical className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
        </button>
      </div>

      {/* Translation Banner */}
      <div className="bg-blue-50 px-4 py-2 flex items-center gap-2 border-b border-blue-100">
        <Languages className="w-4 h-4 text-blue-600" />
        <p className="text-[11px] text-blue-700">
          자동 번역이 활성화되어 있습니다 • Auto-translation enabled
        </p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* Date Separator */}
        <div className="flex items-center justify-center">
          <span className="text-[11px] text-muted-foreground bg-white px-3 py-1 rounded-full shadow-sm">
            오늘
          </span>
        </div>

        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[80%] ${msg.sender === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                {/* Message Bubble */}
                <div className="flex items-end gap-2">
                  {msg.sender === "owner" && (
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[12px]">🍜</span>
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-1">
                    {msg.sender === "owner" && (
                      <span className="text-[11px] text-muted-foreground ml-1">신당 떡볶이</span>
                    )}
                    <div
                      className={`px-4 py-3 rounded-[18px] ${
                        msg.sender === "user"
                          ? "bg-primary text-white rounded-br-[4px]"
                          : "bg-white shadow-sm rounded-bl-[4px]"
                      }`}
                    >
                      <p className="text-[14px] leading-relaxed">{msg.text}</p>
                      
                      {/* Grab Delivery Link Card */}
                      {msg.type === "delivery-link" && (
                        <div className="mt-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[14px] p-4 border-2 border-[#00B14F]/30">
                          {/* Grab Header */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-11 h-11 bg-[#00B14F] rounded-xl flex items-center justify-center shadow-md">
                              <span className="text-white text-[14px]" style={{ fontWeight: 800 }}>G</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-[13px] text-gray-900" style={{ fontWeight: 600 }}>Grab Delivery</h4>
                              <p className="text-[11px] text-[#00B14F]">실시간 위치 추적</p>
                            </div>
                          </div>

                          {/* Driver Info */}
                          <div className="bg-white rounded-xl p-3 mb-3 border border-[#00B14F]/20">
                            <div className="flex items-center gap-3">
                              <span className="text-[24px]">🛵</span>
                              <div className="flex-1">
                                <p className="text-[12px] text-gray-700" style={{ fontWeight: 500 }}>Nguyen Van A 기사님</p>
                                <div className="flex items-center gap-1 text-[11px] text-[#00B14F]">
                                  <span className="w-1.5 h-1.5 bg-[#00B14F] rounded-full animate-pulse"></span>
                                  <span>배달 중 • 약 5분 후 도착</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Open Tracking Button */}
                          <button 
                            onClick={() => navigate("map")}
                            className="w-full bg-[#00B14F] text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-[13px]" style={{ fontWeight: 600 }}>Grab에서 위치 확인하기</span>
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {/* Translation - Skip for delivery link */}
                    {msg.translated && msg.type !== "delivery-link" && (
                      <div className={`flex items-center gap-1 px-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                        <Languages className="w-3 h-3 text-muted-foreground" />
                        <span className="text-[10px] text-muted-foreground">{msg.translated}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Time */}
                <span className={`text-[10px] text-muted-foreground px-2 ${msg.sender === "user" ? "text-right" : "ml-10"}`}>
                  {msg.time}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-end gap-2"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[12px]">🍜</span>
            </div>
            <div className="bg-white shadow-sm rounded-[18px] rounded-bl-[4px] px-4 py-3">
              <div className="flex items-center gap-1">
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-white/80 backdrop-blur-sm border-t border-border/30">
        {quickReplies.map((reply, idx) => (
          <button
            key={idx}
            onClick={() => handleQuickReply(reply.ko)}
            className="flex-shrink-0 px-4 py-2 bg-accent hover:bg-primary/10 border border-border/50 rounded-full text-[12px] transition-colors active:scale-95"
          >
            {reply.ko}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white border-t border-border/50 px-4 py-3 pb-6">
        <div className="flex items-center gap-2">
          {/* Attachment Button */}
          <button className="p-2 hover:bg-accent rounded-full transition-all">
            <Image className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
          </button>
          
          {/* Input Field */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage(inputValue)}
              placeholder="메시지를 입력하세요..."
              className="w-full px-4 py-3 bg-accent rounded-full text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/20 pr-12"
            />
          </div>
          
          {/* Send Button */}
          <button 
            onClick={() => sendMessage(inputValue)}
            disabled={!inputValue.trim()}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              inputValue.trim() 
                ? "bg-primary text-white active:scale-95" 
                : "bg-gray-200 text-gray-400"
            }`}
          >
            <Send className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
