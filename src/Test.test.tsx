import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home, Internet, Cell, Play, Tv } from './public-app/Pages'

test('Render page Internet', () => {
  render(<Internet />);
  const linkElement = screen.getByText(/Telzir Fibra/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render page Cell', () => {
  render(<Cell />);
  const linkElement = screen.getByText(/Celular/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render page Play', () => {
  render(<Play />);
  const linkElement = screen.getByText(/Telzir Play/i);
  expect(linkElement).toBeInTheDocument();
});

test('Render page Tv', () => {
  render(<Tv />);
  const linkElement = screen.getByText(/TV HD/i);
  expect(linkElement).toBeInTheDocument();
});