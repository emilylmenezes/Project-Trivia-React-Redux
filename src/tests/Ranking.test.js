import React from "react";
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import Ranking from "../pages/Ranking";

describe('Testing the ranking page', () => {
  it('Testing if the text "Ranking" is displayed on the screen', () => {
    renderWithRouterAndRedux(<Ranking />);
    const getTitle = screen.getByRole('heading', { name: /Ranking/i }, { level: 1 });
    expect(getTitle).toBeInTheDocument();
  })
  it('Testing if the "Home" button is displayed on the screen', () => {
    const { history } = renderWithRouterAndRedux(<Ranking  />);
    history.push('/ranking');
    const button = screen.getByTestId('btn-go-home');
    expect(button).toBeInTheDocument();
  })
  it('Testing if "Home" button redirects to main page', () => {
    const { history } = renderWithRouterAndRedux(<Ranking  />);
    history.push('/ranking');
    const button = screen.getByTestId('btn-go-home');
    userEvent.click(button);    
    expect(history.location.pathname).toBe('/');
  })
})