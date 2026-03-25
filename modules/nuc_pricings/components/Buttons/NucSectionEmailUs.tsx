import React from 'react';

interface NucSectionEmailUsProps {
  onSuccess?: () => void;
}

export const NucSectionEmailUs: React.FC<NucSectionEmailUsProps> = ({ onSuccess }) => {
  return (
    <div className="p-4 border border-dashed border-gray-500 rounded text-center">
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onSuccess}
      >
      </button>
    </div>
  );
};