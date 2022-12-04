import { ReactNode } from 'react';
import '../OutlinedPrimaryButton.css';

const OutlinedPrimaryButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="outlined-primary-button d-flex align-items-center">
      {children}
    </button>
  );
};

export default OutlinedPrimaryButton;
