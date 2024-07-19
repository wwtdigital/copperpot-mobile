import { fireEvent, render, screen } from '@testing-library/react-native';

import MenuCard from '@/components/menu-card';
import { SAMPLE_MENU } from '@/features/menu/menu-api';

describe('MenuCard', () => {
  const item = SAMPLE_MENU[0];

  it('shows the name, description and price', () => {
    render(<MenuCard item={item} onAdd={() => {}} />);
    expect(screen.getByText('Harvest Grain Bowl')).toBeTruthy();
    expect(screen.getByText('$11.95')).toBeTruthy();
  });

  it('hands the item back when Add is pressed', () => {
    const onAdd = jest.fn();
    render(<MenuCard item={item} onAdd={onAdd} />);
    fireEvent.press(screen.getByLabelText('Add Harvest Grain Bowl'));
    expect(onAdd).toHaveBeenCalledWith(item);
  });
});
