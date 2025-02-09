import { Stack } from '@mui/material';
import { motion } from 'framer-motion';

export default function BrandStack() {
   return (
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <motion.img
        src="/src/assets/capitals.svg"
        alt="WSH Team"
        className="w-30 h-auto"
        initial={{ opacity: 0, x: -20 }}  // Начальные значения
        animate={{ opacity: 1, x: 0 }}    // Конечные значения
        transition={{ duration: 1 }}      // Параметры анимации
      />
      <motion.img
        src="/src/assets/NHL.png"
        alt="NHL"
        className="w-40 h-auto"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.img
        src="/src/assets/Fanatics.png"
        alt="Fanatics"
        className="w-50 h-auto"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.img
        src="/src/assets/50years.png"
        alt="50 Years"
        className="w-30 h-auto"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </Stack>
   );
}
