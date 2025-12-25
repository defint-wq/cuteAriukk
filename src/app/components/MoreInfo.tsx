import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface TableRow {
  name: string;
  description: string;
  vibe: string;
}

interface TransformingTableProps {
  title: string;
  emoji: string;
  data: TableRow[];
}

export function MoreInfo({ title, emoji, data }: TransformingTableProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!isExpanded ? (
        <motion.button
          key="button"
          onClick={() => setIsExpanded(true)}
          className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/30 transition-colors cursor-pointer w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl">{emoji}</span>
            <span className="text-xl">{title}</span>
          </div>
        </motion.button>
      ) : (
        <motion.div
          key="expanded"
          className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          layout
        >
          {/* Header */}
          <motion.div
            className="bg-[#8c3e55] p-5 h-25 flex items-center justify-between"
            animate={{ y: 0, opacity: 2 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{emoji}</span>
              <h3 className="text-2xl text-white">{title} </h3>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Options as cards */}
          <div className="p-6 space-y-4">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                className="bg-gradient-to-r from-red- to-pink-50 rounded-2xl p-4 hover:shadow-md transition-shadow cursor-pointer border border-red-100"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg text-gray-800">{item.name}</h4>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                    {item.vibe}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}