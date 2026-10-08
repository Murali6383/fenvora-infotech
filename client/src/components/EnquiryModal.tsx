import { useEffect } from 'react';
import { X } from 'lucide-react';

import DynamicForm from './DynamicForm';
import { enquiryFields } from './forms';

type EnquiryModalProps = {
  service: string;
  onClose: () => void;
};

export default function EnquiryModal({
  service,
  onClose,
}: EnquiryModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy-950/70 p-0 sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Service enquiry"
    >
      <div
        className="pop max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-6 sm:rounded-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="eyebrow">Service Enquiry</p>

            <h2 className="text-2xl font-bold text-navy-900">
              Tell us about your project
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X size={22} />
          </button>
        </div>

        {/* Enquiry Form */}
        <DynamicForm
          endpoint="enquiry"
          fields={enquiryFields}
          submitLabel="Send Enquiry"
          initial={{
            service,
          }}
          success="Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly."
        />
      </div>
    </div>
  );
}