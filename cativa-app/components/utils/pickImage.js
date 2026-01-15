import * as ImagePicker from 'expo-image-picker';

export function usePickImage() {
  async function pickImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect: [1, 1],
      });

      if (result.canceled) {
        return null;
      }

      const uri = result.assets[0].uri;

      return uri; // 👈 só retorna a URI da imagem
    } catch (error) {
      console.log("pickImage error:", error);
      return null;
    }
  }

  return { pickImage };
}
