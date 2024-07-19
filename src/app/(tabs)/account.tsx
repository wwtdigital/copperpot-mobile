import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants';
import { PREVIEW_GUEST } from '@/features/account/account-api';

const Field = ({
  icon,
  label,
  value,
}: {
  icon: keyof typeof images;
  label: string;
  value: string;
}) => (
  <View className="profile-field">
    <View className="profile-field__icon">
      <Image
        source={images[icon]}
        className="size-6"
        resizeMode="contain"
        tintColor="#B5542B"
      />
    </View>
    <View>
      <Text className="body-medium text-gray-200">{label}</Text>
      <Text className="paragraph-semibold text-dark-100">{value}</Text>
    </View>
  </View>
);

export default function AccountScreen() {
  const guest = PREVIEW_GUEST;
  return (
    <SafeAreaView className="bg-white-100 h-full">
      <View className="px-5 pt-5 gap-6">
        <Text className="h1-bold text-dark-100">Account</Text>
        <View className="items-center">
          <Image source={images.avatar} className="profile-avatar" />
        </View>
        <View>
          <Field icon="user" label="Name" value={guest.name} />
          <Field icon="envelope" label="Email" value={guest.email} />
          <Field icon="phone" label="Phone" value={guest.phone} />
        </View>
      </View>
    </SafeAreaView>
  );
}
