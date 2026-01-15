import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function AppBar({ title, backTo, showBack = (true)}) {
  const navigation = useNavigation();

  function handleBack() {
    if (backTo) {
      navigation.replace(backTo);
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  const shouldShowBack =
    showBack && (backTo || navigation.canGoBack());

  return (
    <Appbar.Header elevated style={{backgroundColor:'transparent', paddingHorizontal: 20, paddingTop: 10}}>
      {shouldShowBack && (
        <Appbar.BackAction onPress={handleBack} />
      )}

      {title && <Appbar.Content title={title} />}
    </Appbar.Header>
  );
}
