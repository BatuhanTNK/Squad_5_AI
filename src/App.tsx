import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import PersonaModal from './components/PersonaModal';
import AcceptanceCriteria from './components/AcceptanceCriteria';
import { personas } from './data/personas';
import { routines } from './data/routines';
import { getMockResponse } from './utils/mockResponses';
import { Message, Metrics, UserPreferences } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [personaModalOpen, setPersonaModalOpen] = useState(false);
  const [criteriaOpen, setCriteriaOpen] = useState(false);
  const [selectedRoutineId, setSelectedRoutineId] = useState(1);
  const [selectedPersonaId, setSelectedPersonaId] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [messageIdCounter, setMessageIdCounter] = useState(1);
  const [metrics, setMetrics] = useState<Metrics>({
    responseTime: 1.5,
    accuracy: 95,
    consistency: true,
    formatValid: true
  });
  const [preferences, setPreferences] = useState<UserPreferences>({
    fontSize: 16,
    contrastMode: false,
    dyslexiaFont: false
  });

  const currentRoutine = routines.find(r => r.id === selectedRoutineId) || routines[0];
  const currentPersona = personas.find(p => p.id === selectedPersonaId) || personas[0];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${preferences.fontSize}px`;
  }, [preferences.fontSize]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: messageIdCounter,
      role: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setMessageIdCounter(prev => prev + 1);

    setIsTyping(true);

    const startTime = Date.now();

    setTimeout(() => {
      const aiResponse = getMockResponse(selectedRoutineId, selectedPersonaId);
      const aiMessage: Message = {
        id: messageIdCounter + 1,
        role: 'ai',
        content: aiResponse,
        timestamp: new Date(),
        personaId: selectedPersonaId
      };

      const responseTime = (Date.now() - startTime) / 1000;

      setMessages(prev => [...prev, aiMessage]);
      setMessageIdCounter(prev => prev + 2);
      setIsTyping(false);

      setMetrics(prev => ({
        ...prev,
        responseTime: Number(responseTime.toFixed(2)),
        accuracy: Math.floor(Math.random() * 10) + 90,
        consistency: true,
        formatValid: true
      }));
    }, 2000 + Math.random() * 1000);
  };

  const handleDeleteMessage = (id: number) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const handleRoutineChange = (id: number) => {
    if (id === selectedRoutineId) return;

    const confirmed = messages.length === 0 || window.confirm(
      'Rutini değiştirmek chat geçmişini silecek. Devam etmek istiyor musunuz?'
    );

    if (confirmed) {
      setSelectedRoutineId(id);
      setMessages([]);
      setMessageIdCounter(1);
    }
  };

  const handlePersonaChange = (id: number) => {
    setSelectedPersonaId(id);
    const persona = personas.find(p => p.id === id);
    if (persona) {
      const systemMessage: Message = {
        id: messageIdCounter,
        role: 'ai',
        content: `Persona değiştirildi: ${persona.name}\n\n${persona.systemMessage}`,
        timestamp: new Date(),
        personaId: id
      };
      setMessages(prev => [...prev, systemMessage]);
      setMessageIdCounter(prev => prev + 1);
    }
  };

  const handleResetMetrics = () => {
    const confirmed = window.confirm('Metrikleri sıfırlamak istediğinizden emin misiniz?');
    if (confirmed) {
      setMetrics({
        responseTime: 1.5,
        accuracy: 95,
        consistency: true,
        formatValid: true
      });
    }
  };

  const handleFontSizeChange = (delta: number) => {
    setPreferences(prev => ({
      ...prev,
      fontSize: Math.max(12, Math.min(20, prev.fontSize + delta))
    }));
  };

  const activeTaskCount = messages.filter(m => m.role === 'user').length;

  return (
    <div className={`min-h-screen ${preferences.contrastMode ? 'contrast-more' : ''} ${preferences.dyslexiaFont ? 'font-mono' : ''}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        routineName={currentRoutine.name}
        activeTaskCount={activeTaskCount}
      />

      <div className="flex h-[calc(100vh-70px)]">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed left-4 top-24 z-50 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg flex items-center justify-center md:hidden hover:scale-105 transition-transform"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Sidebar
          routines={routines}
          selectedRoutineId={selectedRoutineId}
          onRoutineSelect={handleRoutineChange}
          selectedPersona={currentPersona}
          onPersonaModalOpen={() => setPersonaModalOpen(true)}
          preferences={preferences}
          onFontSizeChange={handleFontSizeChange}
          onContrastModeToggle={() => setPreferences(prev => ({ ...prev, contrastMode: !prev.contrastMode }))}
          onDyslexiaFontToggle={() => setPreferences(prev => ({ ...prev, dyslexiaFont: !prev.dyslexiaFont }))}
          isOpen={sidebarOpen}
        />

        <Chat
          messages={messages}
          currentRoutine={currentRoutine}
          currentPersona={currentPersona}
          onSendMessage={handleSendMessage}
          onDeleteMessage={handleDeleteMessage}
          isTyping={isTyping}
        />

        <AcceptanceCriteria
          isOpen={criteriaOpen}
          onToggle={() => setCriteriaOpen(!criteriaOpen)}
          metrics={metrics}
          routine={currentRoutine}
          onResetMetrics={handleResetMetrics}
        />
      </div>

      <PersonaModal
        isOpen={personaModalOpen}
        onClose={() => setPersonaModalOpen(false)}
        personas={personas}
        selectedPersonaId={selectedPersonaId}
        onPersonaSelect={handlePersonaChange}
      />
    </div>
  );
}

export default App;
