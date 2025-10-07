import { X } from 'lucide-react';
import { Persona } from '../types';

interface PersonaModalProps {
  isOpen: boolean;
  onClose: () => void;
  personas: Persona[];
  selectedPersonaId: number;
  onPersonaSelect: (id: number) => void;
}

export default function PersonaModal({
  isOpen,
  onClose,
  personas,
  selectedPersonaId,
  onPersonaSelect
}: PersonaModalProps) {
  if (!isOpen) return null;

  const handleSelect = (id: number) => {
    onPersonaSelect(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 animate-scaleIn">
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Persona Seç
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => handleSelect(persona.id)}
                className={`
                  p-5 rounded-xl text-left transition-all duration-200
                  ${selectedPersonaId === persona.id
                    ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg scale-[1.02]'
                    : 'bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 hover:shadow-md'
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{persona.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1">{persona.name}</h3>
                    <p className={`text-sm mb-2 ${selectedPersonaId === persona.id ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}`}>
                      <span className="font-medium">Tarzı:</span> {persona.style}
                    </p>
                    <p className={`text-sm mb-2 ${selectedPersonaId === persona.id ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'}`}>
                      <span className="font-medium">Tonalite:</span> {persona.tone}
                    </p>
                    <p className={`text-xs italic ${selectedPersonaId === persona.id ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                      "{persona.systemMessage}"
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
