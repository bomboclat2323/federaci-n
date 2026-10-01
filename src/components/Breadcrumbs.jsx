import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="bg-slate-100/80 border-b border-slate-200 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5">
        <Link to="/" className="flex items-center gap-1 hover:text-blue-900 transition-colors text-slate-500 font-medium">
          <Home className="w-3.5 h-3.5" />
          <span>Úvod</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-slate-900 truncate">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-blue-900 transition-colors text-slate-600">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
