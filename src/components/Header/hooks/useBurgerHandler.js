import { useState } from 'react';

const useBurgerHandler = () => {
  const [isBurgerOpen, setBurgerState] = useState(false);

  const handleBurgerState = () => {
    setBurgerState(!isBurgerOpen);
  };

  return [isBurgerOpen, handleBurgerState];
};

export default useBurgerHandler;
