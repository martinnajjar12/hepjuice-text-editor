import { fireEvent, render, screen } from '@testing-library/react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Editor from '../components/Editor';

describe('the editor component', () => {
  it('should has | when editable is true', () => {
    render(
      <Editor
        editable={true}
        setEditable={() => true}
        cursor="|"
        setCursor={() => ''}
      />,
    );

    const editorDiv = screen.getByTestId('editor');
    fireEvent.click(editorDiv);
    expect(screen.getByText('|')).toBeInTheDocument();
  });

  it('should show the modal when / is written', () => {
    render(
      <Editor
        editable={true}
        setEditable={() => true}
        cursor="|"
        setCursor={() => ''}
      />,
    );

    const editorDiv = screen.getByTestId('editor');
    fireEvent.click(editorDiv);
    keyboard('/');
    expect(screen.queryByTestId('modal')).toHaveClass('visible');
  });

  it('should create h1 tag when clicking on the h1 option in the modal', () => {
    render(
      <Editor
        editable={true}
        setEditable={() => true}
        cursor="|"
        setCursor={() => ''}
      />,
    );

    const editorDiv = screen.getByTestId('editor');
    fireEvent.click(editorDiv);
    keyboard('/');
    const h1Option = screen.getByText('Heading 1');
    fireEvent.click(h1Option);
    expect(screen.getByTestId('heading1')).toBeInTheDocument();
    // Also make sure it has the class 'h1Active'
    expect(screen.getByTestId('heading1')).toHaveClass('h1Active');
  });
});
