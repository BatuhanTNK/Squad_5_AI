import { Bell, Moon, Settings, Sun, User } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  routineName: string;
  activeTaskCount: number;
}

export default function Header({ darkMode, toggleDarkMode, routineName, activeTaskCount }: HeaderProps) {
  return (
    <header className="h-[70px] bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">Squad 5 AI Core</h1>
              <p className="text-xs text-white/80">Persona Asistan</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <h2 className="text-lg font-semibold">{routineName}</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-150 hover:scale-105"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-150 hover:scale-105 relative"
            aria-label="Notifications"
          >
            <Bell size={20} />
            {activeTaskCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full text-xs flex items-center justify-center font-semibold">
                {activeTaskCount}
              </span>
            )}
          </button>

          <button
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-150 hover:scale-105"
            aria-label="User profile"
          >
            <User size={20} />
          </button>

          <button
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-150 hover:scale-105"
            aria-label="Settings"
          >
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
