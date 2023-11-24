import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/form/Form';

test('renders the form with testid "form"', () => {
  render(<Form />);

  const formElement = screen.getByTestId('form');
  expect(formElement).toBeInTheDocument();
});

test('renders three radio buttons for gender selection', () => {
  render(<Form />);

  const genderRadioButtons = screen.getAllByRole('radio');
  expect(genderRadioButtons).toHaveLength(3);
});

test('clicking on radio buttons updates the selected gender', () => {
  render(<Form />);

  const genderMale = screen.getAllByLabelText(/male/i)[0];
  const genderFemale = screen.getAllByLabelText(/female/i)[0];
  const genderOther = screen.getAllByLabelText(/other/i)[0];

  fireEvent.click(genderMale);

  expect(genderMale.checked).toEqual(true);
  expect(genderFemale.checked).toEqual(false);
  expect(genderOther.checked).toEqual(false);

  fireEvent.click(genderFemale);

  expect(genderMale.checked).toEqual(false);
  expect(genderFemale.checked).toEqual(true);
  expect(genderOther.checked).toEqual(false);

  fireEvent.click(genderOther);

  expect(genderMale.checked).toEqual(false);
  expect(genderFemale.checked).toEqual(false);
  expect(genderOther.checked).toEqual(true);
});

test('user interaction flow: select gender, enter age, add to survey, and check result', async () => {
    render(<Form />);
  
    const genderRadioButtons = screen.getAllByLabelText(/male|female|other/i);
    const [genderMale, genderFemale, genderOther] = genderRadioButtons;
  
    userEvent.click(genderMale);
    expect(genderMale).toBeChecked();
    expect(genderFemale).not.toBeChecked();
    expect(genderOther).not.toBeChecked();
  
    const ageInput = screen.getByPlaceholderText('Enter your age');
    userEvent.type(ageInput, '25');
    expect(ageInput).toHaveValue(25);

    const addButton = screen.getByText('Add +');
    userEvent.click(addButton);
  
    const submitButton = screen.getByText('Submit');
    userEvent.click(submitButton);
  
    await waitFor(() => {
      const resultHeader = screen.getByText('Result:');
      expect(resultHeader).toBeInTheDocument();
    });
  
    const totalMenResult = screen.getByText(/Total amount of Men: 1 - with an average age of 25/i);
    expect(totalMenResult).toBeInTheDocument();
  
    const totalWomenResult = screen.getByText(/Total amount of Women:/i);
    expect(totalWomenResult).toBeInTheDocument();
  
    const totalOtherResult = screen.getByText(/Total amount of Other:/i);
    expect(totalOtherResult).toBeInTheDocument();
  });