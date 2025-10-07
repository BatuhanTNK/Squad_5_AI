import { Send, Paperclip, Smile } from 'lucide-react';
import { Message, Persona, Routine } from '../types';
import { useEffect, useRef, useState } from 'react';
import ChatMessage from './ChatMessage';

interface ChatProps {
  messages: Message[];
  currentRoutine: Routine;
  currentPersona: Persona;
  onSendMessage: (content: string) => void;
  onDeleteMessage: (id: number) => void;
  isTyping: boolean;
}

export default function Chat({
  messages,
  currentRoutine,
  currentPersona,
  onSendMessage,
  onDeleteMessage,
  isTyping
}: ChatProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{currentRoutine.icon}</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {currentRoutine.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {currentRoutine.description}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 dark:text-slate-400">Tahmini Süre</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {currentRoutine.estimatedTime}
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
            {currentRoutine.outputFormat}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <span className="text-6xl mb-4 block">{currentPersona.emoji}</span>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Selam! Ben Squad 5 AI Asistan'ım
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md">
                {currentRoutine.name} rutininde size yardımcı olmak için buradayım.
                Başlamak için aşağıda bir mesaj yazın!
              </p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                persona={message.role === 'ai' ? currentPersona : undefined}
                onDelete={message.role === 'user' ? onDeleteMessage : undefined}
              />
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 rounded-2xl px-5 py-3 shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{currentPersona.emoji}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      AI yazıyor
                    </span>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <div className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
        <form onSubmit={handleSubmit} className="flex gap-3 items-end">
          <button
            type="button"
            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center transition-colors flex-shrink-0"
            title="Dosya ekle"
          >
            <Paperclip size={20} />
          </button>

          <button
            type="button"
            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center transition-colors flex-shrink-0"
            title="Emoji ekle"
          >
            <Smile size={20} />
          </button>

          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Mesajınızı yazın... (Enter: gönder, Shift+Enter: yeni satır)"
            className="flex-1 resize-none rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] max-h-[200px]"
            rows={1}
          />

          <button
            type="submit"
            disabled={!input.trim()}
            className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex-shrink-0"
            title="Gönder"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
