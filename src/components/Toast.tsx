import React from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export interface ToastData {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'loading';
}

interface ToastProps {
  toasts: ToastData[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          onClick={() => onDismiss(toast.id)}
          className={`toast ${toast.type} cursor-pointer`}
          role="alert"
        >
          <div className="toast-icon shrink-0">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
            {toast.type === 'loading' && <Loader2 className="w-5 h-5 text-[#D4AF37] animate-spin" />}
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-white tracking-wide">
              {toast.title}
            </span>
            <span className="text-[11px] text-[#9a9a9a] leading-tight mt-0.5">
              {toast.message}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
