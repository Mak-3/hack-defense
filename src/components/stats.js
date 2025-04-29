import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Orders", value: 1200 },
  { label: "Revenue Generated", value: 45000 },
  { label: "New Customers", value: 320 },
  { label: "Products Sold", value: 870 },
];

export default function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      const increment = stat.value / 100;
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[i] < stat.value) {
            newCounters[i] = Math.min(newCounters[i] + increment, stat.value);
          }
          return newCounters;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="flex flex-wrap justify-center gap-8 p-6 rounded-2xl shadow-lg">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md w-52"
        >
          {/* Outlined styled number */}
          <div className="text-5xl font-extrabold text-transparent bg-white bg-clip-text stroke-text mb-2">
            {Math.round(counters[index]).toLocaleString()}+
          </div>
          {/* Label */}
          <div className="text-center text-gray-600 text-sm font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
