import React from 'react';

import axios from 'axios';

import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import CreateUser from './createUser';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => mockedUsedNavigate,
}));

test('Test if component has renderized with success', () => {
  const { getByText } = render(<CreateUser />);
  const name = getByText('QR Code Image Generator');
  expect(name).toBeTruthy();
});

test('test to see if the component will send the registration', async () => {
  axios.post = jest.fn().mockResolvedValue({
    data: {
      user: {
        name: 'João Pedro',
        id: '23232323232323',
      },
    },
  });
  const { getByTestId } = render(<CreateUser />);
  const inputName = getByTestId('name-input');
  const inputLinkedin = getByTestId('linkedin-input');
  const inputGitHub = getByTestId('github-input');

  fireEvent.change(inputName, { target: { value: 'João Pedro' } });
  fireEvent.change(inputLinkedin, { target: { value: 'linkedinJoao' } });
  fireEvent.change(inputGitHub, { target: { value: 'gitHubJoao' } });

  fireEvent.click(getByTestId('btn-create'));

  await waitFor(() => {
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });
});
