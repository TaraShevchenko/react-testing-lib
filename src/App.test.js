import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWordElement = screen.getByText(/hello world/i);
    const buttonElement = screen.getByRole('button');
    const inputElement = screen.getByPlaceholderText(/input value/i);

    expect(helloWordElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toMatchSnapshot();
    // screen.debug()
  });

})
