import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.actafarm',
  appName: 'actafarm',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
