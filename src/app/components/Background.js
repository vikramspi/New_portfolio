// app/components/background.tsx
'use client';

import Galaxy from './Galaxy';

export default function Background() {
  return <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={1}
    glowIntensity={0.3}
    saturation={0.5}
    hueShift={240}
  />;
}