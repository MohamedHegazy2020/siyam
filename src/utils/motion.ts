export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'left', delay = 0, duration = 0.5) => {
  const x = direction === 'left' ? '-100vw' : direction === 'right' ? '100vw' : 0;
  const y = direction === 'up' ? '-100vh' : direction === 'down' ? '100vh' : 0;

  return {
    initial: { x, y, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration, delay, ease: 'easeInOut' },
  };
};



export const fadeIn = (delay = 0, duration = 0.5) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, delay, ease: 'easeInOut' },
});

