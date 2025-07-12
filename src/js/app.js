// Main application logic
import { Camera } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Haptics } from '@capacitor/haptics';

export function initApp() {
  console.log('App initialized');
  
  // Example camera function
  async function takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: 'dataUrl'
    });
    return image.dataUrl;
  }

  return {
    takePhoto
  };
}
