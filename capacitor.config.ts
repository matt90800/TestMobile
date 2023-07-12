import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'net.ddns.mattbld',
  appName: 'Alarme',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
