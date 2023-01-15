/**
 * @jest-environment jsdom
 */

import {render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Topbar } from '.';
describe('TopBar', () => {
  it('should render component', () => {
    const {getByRole, getByText } =render(<Topbar />)
    expect(getByText('Bazaar')).toBeInTheDocument()
    expect(getByRole('link', {name: /Bazaar/i})).toBeInTheDocument()
  });

  it('should render User Menu', () => {
    const {getByRole, getByText } =render(<Topbar />)
    userEvent.click(getByRole('button', {name: /Customise options/i}))
    expect(getByRole('menuitem', {name: /meu carrinho/i})).toBeInTheDocument()
    // expect(getByRole('link', {name: /Bazaar/i})).toBeInTheDocument()
  });
});