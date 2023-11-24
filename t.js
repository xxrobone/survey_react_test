/* 



  test('renders the form with gender selection and age input', () => {
    render(<Form />);

    const formElement = screen.getByTestId('form');
    expect(formElement).toBeInTheDocument();

    const genderLabels = screen.getAllByLabelText(/Male|Female|Other/i);
    expect(genderLabels).toHaveLength(3);

    const ageInput = screen.getByPlaceholderText(/Enter your age/i);
    expect(ageInput).toBeInTheDocument();

    const addButton = screen.getByText(/Add \+/i);
    expect(addButton).toBeInTheDocument();

    const checkResultButton = screen.getByText(/Check result/i);
    expect(checkResultButton).toBeInTheDocument();
  });

  test('adds data and displays result for Male', async () => {
    render(<Form />);

    fireEvent.click(screen.getByLabelText(/Male/i));
    fireEvent.change(screen.getByPlaceholderText(/Enter your age/i), { target: { value: '25' } });
    fireEvent.click(screen.getByText(/Add \+/i));
    fireEvent.click(screen.getByText(/Check result/i));

    const listItems = await screen.findAllByTestId('listitem');
    expect(listItems.length).toBe(1);

    const resultText = 'Total amount of Men: 1 with an average age of 25';
    expect(screen.getByText(resultText)).toBeInTheDocument();
  });

  test('adds data and displays result for Female', async () => {
    render(<Form />);

    fireEvent.click(screen.getByLabelText(/Female/i));
    fireEvent.change(screen.getByPlaceholderText(/Enter your age/i), { target: { value: '30' } });
    fireEvent.click(screen.getByText(/Add \+/i));
    fireEvent.click(screen.getByText(/Check result/i));

    const listItems = await screen.findAllByTestId('listitem');
    expect(listItems.length).toBe(1);

    const resultText = 'Total amount of Women: 1 with an average age of 30';
    expect(screen.getByText(resultText)).toBeInTheDocument();
  });

  test('adds data and displays result for Other', async () => {
    render(<Form />);

    fireEvent.click(screen.getByLabelText(/Other/i));
    fireEvent.change(screen.getByPlaceholderText(/Enter your age/i), { target: { value: '35' } });
    fireEvent.click(screen.getByText(/Add \+/i));
    fireEvent.click(screen.getByText(/Check result/i));

    const listItems = await screen.findAllByTestId('listitem');
    expect(listItems.length).toBe(1);

    const resultText = 'Total amount of Other: 1 with an average age of 35';
    expect(screen.getByText(resultText)).toBeInTheDocument();
  });
 */