import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import { Metrics, Routine } from '../types';

interface AcceptanceCriteriaProps {
  isOpen: boolean;
  onToggle: () => void;
  metrics: Metrics;
  routine: Routine;
  onResetMetrics: () => void;
}

export default function AcceptanceCriteria({
  isOpen,
  onToggle,
  metrics,
  routine,
  onResetMetrics
}: AcceptanceCriteriaProps) {
  const getPerformanceColor = (responseTime: number) => {
    if (responseTime < 1.5) return 'bg-green-500';
    if (responseTime < 2) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 95) return 'text-green-600 dark:text-green-400';
    if (accuracy >= 85) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <>
      <button
        onClick={onToggle}
        className={`
          fixed right-0 top-1/2 -translate-y-1/2 z-40
          bg-gradient-to-r from-blue-500 to-purple-500 text-white
          rounded-l-lg shadow-lg transition-all duration-300 hover:scale-105
          ${isOpen ? 'translate-x-0' : 'translate-x-0'}
        `}
        style={{ right: isOpen ? '400px' : '0' }}
      >
        <div className="p-3">
          {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </div>
      </button>

      <div
        className={`
          fixed right-0 top-[70px] bottom-0 w-[400px] bg-white dark:bg-slate-800
          border-l border-slate-200 dark:border-slate-700 shadow-2xl
          transition-transform duration-300 overflow-y-auto z-30
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={24} />
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                Acceptance Criteria
              </h3>
            </div>
            <button
              onClick={onResetMetrics}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Metrikleri sıfırla"
            >
              <RotateCcw size={18} />
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Hız (Performance)
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Target: &lt; {routine.acceptanceCriteria.responseTime}s
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getPerformanceColor(metrics.responseTime)} transition-all duration-500`}
                    style={{ width: `${Math.min((metrics.responseTime / routine.acceptanceCriteria.responseTime) * 100, 100)}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 min-w-[48px] text-right">
                  {metrics.responseTime.toFixed(2)}s
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {metrics.responseTime < 1.5 ? 'Mükemmel hız!' : metrics.responseTime < 2 ? 'İyi hız' : 'Yavaş'}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Doğruluk (Accuracy)
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Target: {routine.acceptanceCriteria.accuracy}%
                </span>
              </div>
              <div className="flex items-center justify-center mb-2">
                <div className="relative w-32 h-32">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-slate-200 dark:text-slate-700"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - metrics.accuracy / 100)}`}
                      className={`${getAccuracyColor(metrics.accuracy)} transition-all duration-500`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-2xl font-bold ${getAccuracyColor(metrics.accuracy)}`}>
                      {metrics.accuracy}%
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
                {metrics.accuracy >= 95 ? 'Harika doğruluk!' : metrics.accuracy >= 85 ? 'İyi seviye' : 'İyileştirme gerekli'}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Persona Tutarlılığı
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Target: Tutarlı
                </span>
              </div>
              <div className="flex items-center justify-center py-2">
                {metrics.consistency ? (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle size={32} />
                    <span className="text-lg font-semibold">Tutarlı</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <XCircle size={32} />
                    <span className="text-lg font-semibold">Tutarsız</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Format Uygunluğu
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Target: Doğru format
                </span>
              </div>
              <div className="flex items-center justify-center py-2">
                {metrics.formatValid ? (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle size={32} />
                    <span className="text-lg font-semibold">Geçerli</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <XCircle size={32} />
                    <span className="text-lg font-semibold">Geçersiz</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Beklenen Output
            </h4>
            <p className="text-xs text-blue-700 dark:text-blue-400">
              {routine.outputFormat}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
