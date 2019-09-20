import React, { useState } from 'react';
import { useColorMode } from 'theme-ui';
import Switch from 'react-switch';

export default function ThemeSwitcher() {
  const [colorMode, setColorMode] = useColorMode('default');
  const [checked, setChecked] = useState(true);

  return (
    <div style={{
      position: 'fixed',
      bottom: 10,
      right: 20,
    }}>
      <Switch
        onChange={value => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
          setChecked(value)
        }}
        offColor="#A085FF"
        onColor="#3227b6"
        checked={checked}
        checkedIcon={
          <span role="img" aria-label="light mode" style={{
            padding: '3px 0 3px 6px',
          }}>
            ☀️
      </span>
        }
        uncheckedIcon={
          <span role="img" aria-label="dark mode" style={{
            padding: '3px 0 3px 6px',
          }}>
            🌙
      </span>
        }
      />
    </div>
  )
}