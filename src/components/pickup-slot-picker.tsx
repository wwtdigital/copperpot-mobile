import { FlatList, Text, TouchableOpacity } from 'react-native';

import cn from 'clsx';

interface Props {
  slots: string[];
  selected: string | null;
  onSelect: (slot: string) => void;
}

export default function PickupSlotPicker({ slots, selected, onSelect }: Props) {
  if (!slots.length)
    return (
      <Text className="body-regular text-error">
        No pickup times left today at this store.
      </Text>
    );
  return (
    <FlatList
      data={slots}
      keyExtractor={(s) => s}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-x-2"
      renderItem={({ item }) => {
        const active = item === selected;
        return (
          <TouchableOpacity
            className={cn('filter', active ? 'bg-primary' : 'bg-white')}
            onPress={() => onSelect(item)}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
          >
            <Text
              className={cn(
                'body-medium',
                active ? 'text-white' : 'text-gray-200'
              )}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}
