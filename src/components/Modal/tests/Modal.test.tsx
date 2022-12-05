import { render, screen } from '@testing-library/react';
import Modal from '../components/Modal';

describe('the editor component', () => {
  it('should have the class hidden when show is set to false', () => {
    render(<Modal show={false} chooseH1={() => true} />);
    expect(screen.queryByTestId('modal')).toHaveClass('hidden');
  });

  it('should have the class visible when the show is set to true', () => {
    render(<Modal show={true} chooseH1={() => true} />);
    expect(screen.getByTestId('modal')).toHaveClass('visible');
  });
});
