import { LockClosed } from 'heroicons-react';

const LockedFeature = () => {
  return (
    <div className="relative w-10 h-5 flex items-center justify-center rounded overflow-hidden ml-5">
      <div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 171.71deg at 50% 50%, #CE3165 -26.28deg, #F48B11 23.23deg, #9383F9 68.35deg, #004873 98.86deg, #020304 132.49deg, #000000 237.54deg, #670889 286.46deg, #CC2C69 331.92deg, #CE3165 333.72deg, #F48B11 383.23deg)`,
        }}
      ></div>
      <LockClosed
        className="w-3 h-3 text-white z-10"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </div>
  );
};

export default LockedFeature;
