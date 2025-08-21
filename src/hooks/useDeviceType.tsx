import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'desktop';

type DevicePatternMap = {
  [key: string]: DeviceType;
};

const DEVICE_TYPES: DevicePatternMap = {
  'iPad|iPhone|iPod': 'mobile',
  'Android': 'mobile',
  'Windows': 'desktop',
  'Macintosh': 'desktop',
  'Linux': 'desktop',
};

function useDeviceType(): DeviceType {
  const [device, setDevice] = useState<DeviceType>('desktop');

  useEffect(() => {
    const userAgent: string = navigator.userAgent;
    let foundDevice: DeviceType = 'desktop';

    for (const pattern in DEVICE_TYPES) {
      if (new RegExp(pattern).test(userAgent)) {
        foundDevice = DEVICE_TYPES[pattern];
        break;
      }
    }
    setDevice(foundDevice);
  }, []);

  return device;
}

export default useDeviceType;