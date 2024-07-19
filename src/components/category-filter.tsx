import { FlatList, Text, TouchableOpacity } from 'react-native';

import cn from 'clsx';

import { CATEGORIES } from '@/constants';
import type { MenuCategory } from '@/features/menu/menu-item';

interface Props {
  selected: MenuCategory | 'all';
  onSelect: (category: MenuCategory | 'all') => void;
}

export default function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(c) => c.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-x-2 pb-3"
      renderItem={({ item }) => {
        const active = item.id === selected;
        return (
          <TouchableOpacity
            className={cn('filter', active ? 'bg-primary' : 'bg-white')}
            onPress={() => onSelect(item.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
          >
            <Text
              className={cn(
                'body-medium',
                active ? 'text-white' : 'text-gray-200'
              )}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}
