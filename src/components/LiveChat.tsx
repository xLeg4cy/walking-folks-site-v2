
import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 max-h-[500px] flex flex-col animate-fade-in">
          <div className="bg-brand-navy text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Live Chat</h3>
            <button onClick={toggleChat} className="hover:opacity-75 transition-opacity">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-4 min-h-[300px] max-h-[300px] overflow-y-auto bg-gray-50">
            <div className="text-center text-gray-500 text-sm mb-4">
              Welcome to our live chat! How can we help you today?
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              />
              <button
                type="submit"
                className="bg-brand-navy hover:bg-brand-blue text-white p-2 rounded-lg transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-brand-navy hover:bg-brand-blue text-white p-4 rounded-full shadow-lg transition-all hover:-translate-y-1"
          aria-label="Open live chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default LiveChat;
