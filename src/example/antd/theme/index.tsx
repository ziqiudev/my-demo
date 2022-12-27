import { useRef, useState } from 'react';
import { Button, ConfigProvider } from 'antd';

type ThemeData = {
  colorPrimary: string;
};

const ThemeDemo = () => {
  const [data, setData] = useState<ThemeData>({ colorPrimary: 'red' });

  const changeColor = () => {
    setData({
      colorPrimary: `#${((Math.random() * 0xffffff) << 0).toString(16)}`,
    });
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: data.colorPrimary } }}>
      <div className="cursor-pointer mb-4" onClick={changeColor}>
        changeColor
      </div>
      <Button type="primary">按钮</Button>
    </ConfigProvider>
  );
};

export default ThemeDemo;
