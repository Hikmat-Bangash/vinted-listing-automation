import { createContext, useState } from 'react';

// project imports
import useLocalStorage from 'hooks/useLocalStorage';

// ==============================|| CONFIG CONTEXT ||============================== //

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useLocalStorage('vinted-config-vite-ts', {
    isOpen: [], // for active default menu
    fontFamily: 'Inter',
    borderRadius: 12,
    opened: true
  });

  const [isOpen, setIsOpen] = useState(config.isOpen);

  // drawer
  const [opened, setOpened] = useState(config.opened);

  const [fontFamily, setFontFamily] = useState(config.fontFamily);
  const [borderRadius, setBorderRadius] = useState(config.borderRadius);

  // set drawer
  const setDrawer = (opened) => {
    setOpened(opened);
    setConfig({
      ...config,
      opened
    });
  };

  // menu collapse when it is active
  const activeItem = (item) => {
    setIsOpen([item]);
  };

  // active collapse menu
  const activeID = (id) => {
    setIsOpen([id]);
  };

  // active collapse menu
  const activeItemID = (id) => {
    setIsOpen([id]);
  };

  // drawer
  const isDrawerOpened = opened;

  const value = {
    isOpen,
    opened,
    isDrawerOpened,
    fontFamily,
    borderRadius,
    activeItem,
    activeID,
    activeItemID,
    setDrawer,
    setFontFamily,
    setBorderRadius
  };

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};

export default ConfigContext;
