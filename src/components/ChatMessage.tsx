import { Copy, Trash2 } from 'lucide-react';
import { Message, Persona } from '../types';
import { useState } from 'react';

interface ChatMessageProps {
  message: Message;
  persona?: Persona;
  onDelete?: (id: number) => void;
}

export default function ChatMessage({ message, persona, onDelete }: ChatMessageProps) {
  const [showActions, setShowActions] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isUser = message.role === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-slideUp`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className={`max-w-[75%] ${isUser ? 'order-1' : 'order-2'}`}>
        <div className="mb-1 px-1 flex items-center gap-2">
          {!isUser && persona && (
            <>
              <span className="text-lg">{persona.emoji}</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                AI Asistan
              </span>
            </>
          )}
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {formatTime(message.timestamp)}
          </span>
        </div>

        <div className="relative group">
          <div
            className={`
              rounded-2xl px-5 py-3 shadow-sm
              ${isUser
                ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700'
              }
            `}
          >
            <div className="whitespace-pre-wrap break-words">
              {message.content.split('\n').map((line, i) => {
                if (line.startsWith('```')) {
                  return null;
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <p key={i} className="font-bold my-2">
                      {line.slice(2, -2)}
                    </p>
                  );
                }
                if (line.startsWith('# ')) {
                  return (
                    <h3 key={i} className="text-lg font-bold mt-3 mb-2">
                      {line.slice(2)}
                    </h3>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} className="ml-4 my-1">
                      {line.slice(2)}
                    </li>
                  );
                }
                if (line.trim() === '') {
                  return <br key={i} />;
                }
                return <p key={i} className="my-1">{line}</p>;
              })}
            </div>
          </div>

          {showActions && (
            <div
              className={`
                absolute top-0 flex gap-1 animate-fadeIn
                ${isUser ? 'right-full mr-2' : 'left-full ml-2'}
              `}
            >
              <button
                onClick={handleCopy}
                className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center justify-center transition-colors shadow-sm"
                title="Kopyala"
              >
                {copied ? (
                  <span className="text-xs">✓</span>
                ) : (
                  <Copy size={16} />
                )}
              </button>
              {isUser && onDelete && (
                <button
                  onClick={() => onDelete(message.id)}
                  className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 flex items-center justify-center transition-colors shadow-sm text-red-600 dark:text-red-400"
                  title="Sil"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
