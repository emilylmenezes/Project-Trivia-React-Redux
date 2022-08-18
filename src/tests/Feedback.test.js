import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import Feedback from '../pages/Feedback';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('', () => {
    test('', () => {
        const {history} = renderWithRouterAndRedux(<App />);
        history.push('/feedback');
        const btnPlayAgain = screen.getByTestId('btn-play-again');
        userEvent.click(btnPlayAgain);
        const inputPlayerName = screen.getByTestId('input-player-name');
        expect(inputPlayerName).toBeInTheDocument();
    })

  test('', () => {
          renderWithRouterAndRedux(<Feedback />);
          const idFeedbackText = screen.getByTestId('feedback-text');
          expect(idFeedbackText).toBeDefined();
      })

    test('', () => {
        renderWithRouterAndRedux(<Feedback />);
        const headerPlayerName = screen.getByTestId('header-player-name');
        expect(headerPlayerName).toBeInTheDocument();
    })
     test('', () => {
        renderWithRouterAndRedux(<Feedback />);
        const btnPlayAgain = screen.getByTestId('btn-play-again');
        expect(btnPlayAgain).toBeInTheDocument();

        const btnRanking = screen.getByTestId('btn-ranking');
        expect(btnRanking).toBeInTheDocument();

    })   
    test('', () => {
        const {history} = renderWithRouterAndRedux(<App />);
        history.push('/feedback');
        const btnRanking = screen.getByTestId('btn-ranking');
        userEvent.click(btnRanking);
        const title = screen.getByTestId('ranking-title');
        expect(title).toBeInTheDocument();
        
    })    
    test('', () => {
        renderWithRouterAndRedux(<Feedback />);
        const headerScore = screen.getByTestId('header-score');
        expect(headerScore).toBeInTheDocument();
    })
    test('', () => {
        renderWithRouterAndRedux(<Feedback />);
        const feedbackTotalScore = screen.getByTestId('feedback-total-score');
        expect(feedbackTotalScore).toBeInTheDocument();
    })

    test('', () => {
        renderWithRouterAndRedux(<Feedback />);
        const eedbackTotalScore = screen.getByTestId('feedback-total-score');
        expect(eedbackTotalScore).toBeInTheDocument();
    })   

    test('', () => {
        renderWithRouterAndRedux(<Feedback />);
        const feedbackTotalQuestion = screen.getByTestId('feedback-total-question');
        expect(feedbackTotalQuestion).toBeInTheDocument();
    })     
})
