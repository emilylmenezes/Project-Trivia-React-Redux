import React from "react";
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

describe('', () => {
    it('', () => {
      renderWithRouterAndRedux(<App />);
      const fieldName = screen.getByTestId('input-player-name');
      const fieldEmail = screen.getByTestId('input-gravatar-email');

      expect(fieldName).toBeInTheDocument();
      expect(fieldEmail).toBeInTheDocument();
    })

    it('', () => {
    renderWithRouterAndRedux(<App />);
    const fieldName = screen.getByTestId('input-player-name');
    const fieldEmail = screen.getByTestId('input-gravatar-email');
    const buttonPlay = screen.getByTestId('btn-play');
  
    expect(buttonPlay).toBeDisabled();

    userEvent.type(fieldName, 'Nome');
    expect(buttonPlay).toBeDisabled();

    userEvent.type(fieldEmail, 'alguem@email.com');
    expect(buttonPlay).not.toBeDisabled();
  });

   it('', () => {
    renderWithRouterAndRedux(<App />);

    const config = screen.getByRole('button', {  name: /configurações/i});
    userEvent.click(config);

    const textConfig = screen.getByText(/configurações/i);
    expect(textConfig).toBeInTheDocument();
  });
})