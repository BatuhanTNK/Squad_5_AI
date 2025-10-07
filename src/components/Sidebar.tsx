import { Minus, Plus } from 'lucide-react';
import { Persona, Routine, UserPreferences } from '../types';

interface SidebarProps {
  routines: Routine[];
  selectedRoutineId: number;
  onRoutineSelect: (id: number) => void;
  selectedPersona: Persona;
  onPersonaModalOpen: () => void;
  preferences: UserPreferences;
  onFontSizeChange: (delta: number) => void;
  onContrastModeToggle: () => void;
  onDyslexiaFontToggle: () => void;
  isOpen: boolean;
}

export default function Sidebar({
  routines,
  selectedRoutineId,
  onRoutineSelect,
  selectedPersona,
  onPersonaModalOpen,
  preferences,
  onFontSizeChange,
  onContrastModeToggle,
  onDyslexiaFontToggle,
  isOpen
}: SidebarProps) {
  return (
    <aside className={`
      ${isOpen ? 'w-[280px]' : 'w-0'}
      bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700
      transition-all duration-300 overflow-hidden flex-shrink-0
    `}>
      <div className="p-4 space-y-6 h-full overflow-y-auto">
        <div>
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
            Rutinler
          </h3>
          <nav className="space-y-1">
            {routines.map((routine) => (
              <button
                key={routine.id}
                onClick={() => onRoutineSelect(routine.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                  ${selectedRoutineId === routine.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-[1.02]'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }
                `}
                title={routine.description}
              >
                <span className="text-xl">{routine.icon}</span>
                <span className="font-medium">{routine.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
            Persona Yönetimi
          </h3>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{selectedPersona.emoji}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                  {selectedPersona.name}
                </h4>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
              <span className="font-medium">Tarzı:</span> {selectedPersona.style}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
              <span className="font-medium">Sistem:</span> "{selectedPersona.systemMessage.substring(0, 40)}..."
            </p>
            <button
              onClick={onPersonaModalOpen}
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              Değiştir
            </button>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
            Erişilebilirlik
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700 dark:text-slate-300">Font Boyutu</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onFontSizeChange(-1)}
                  disabled={preferences.fontSize <= 12}
                  className="w-7 h-7 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Decrease font size"
                >
                  <Minus size={14} />
                </button>
                <span className="text-xs w-8 text-center text-slate-600 dark:text-slate-400">
                  {preferences.fontSize}
                </span>
                <button
                  onClick={() => onFontSizeChange(1)}
                  disabled={preferences.fontSize >= 20}
                  className="w-7 h-7 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Increase font size"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-slate-700 dark:text-slate-300">Yüksek Kontrast</span>
              <input
                type="checkbox"
                checked={preferences.contrastMode}
                onChange={onContrastModeToggle}
                className="w-4 h-4 rounded accent-blue-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-slate-700 dark:text-slate-300">Disleksi Dostu</span>
              <input
                type="checkbox"
                checked={preferences.dyslexiaFont}
                onChange={onDyslexiaFontToggle}
                className="w-4 h-4 rounded accent-blue-500"
              />
            </label>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">v1.0.0</p>
          <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
            Geri Bildirim
          </button>
          <span className="text-xs text-slate-400 mx-2">•</span>
          <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
            Dokümantasyon
          </button>
        </div>
      </div>
    </aside>
  );
}
