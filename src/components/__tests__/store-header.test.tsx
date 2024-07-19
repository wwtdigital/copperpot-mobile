import { fireEvent, render, screen } from '@testing-library/react-native';

import StoreHeader from '@/components/store-header';
import { PILOT_STORES } from '@/features/stores/stores-api';

describe('StoreHeader', () => {
  it('names the selected store and its address', () => {
    render(<StoreHeader store={PILOT_STORES[0]} onChangeStore={() => {}} />);
    expect(screen.getByText('Riverside Commons')).toBeTruthy();
    expect(screen.getByText('120 Riverside Pkwy, Fallbrook')).toBeTruthy();
  });

  it('prompts for a store when none is selected and opens the picker on press', () => {
    const onChangeStore = jest.fn();
    render(<StoreHeader store={null} onChangeStore={onChangeStore} />);
    fireEvent.press(screen.getByText('Choose a store'));
    expect(onChangeStore).toHaveBeenCalledTimes(1);
  });
});
