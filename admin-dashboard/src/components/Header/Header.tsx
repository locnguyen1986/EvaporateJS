import { User, Bell, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-dark-200 border-b border-evaporate-800 flex items-center justify-between px-6">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-md ml-12 lg:ml-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-dark-100 border border-evaporate-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-evaporate-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-evaporate-800 transition-colors">
          <div className="w-8 h-8 rounded-full bg-evaporate-600 flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <span className="text-sm text-white hidden sm:block">Admin</span>
        </button>
      </div>
    </header>
  );
}
