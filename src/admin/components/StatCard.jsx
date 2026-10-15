import React from 'react';

const StatCard = ({ title, value, subtitle, icon: Icon, accent = false }) => {
  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-md ${
        accent
          ? 'bg-[#FF6534] border-[#FF6534] text-white'
          : 'bg-white border-gray-100 text-[#1F1B2E]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`text-xs font-bold uppercase tracking-wide ${accent ? 'text-white/80' : 'text-gray-500'}`}>
            {title}
          </p>
          <p className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">{value}</p>
          {subtitle && (
            <p className={`mt-1 text-xs font-medium ${accent ? 'text-white/80' : 'text-gray-500'}`}>
              {subtitle}
            </p>
          )}
        </div>
        {Icon && (
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
              accent ? 'bg-white/20' : 'bg-[#FF6534]/10 text-[#FF6534]'
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
