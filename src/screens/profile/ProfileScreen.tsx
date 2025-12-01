import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Typography } from '../../components/Typography';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { useAsyncStorageState } from '../../hooks/useAsyncStorageState';
import { ThemeMode } from '../../theme/theme';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const { value: profile, setValue: setProfile } = useAsyncStorageState('profile', {
    name: 'Invitado',
    notifications: true,
    language: 'es',
  });
  const { value: themeMode, setValue: setThemeMode } = useAsyncStorageState<ThemeMode>('theme', 'light');
  const [name, setName] = useState(profile.name);

  return (
    <Container>
      <Header title="Perfil" subtitle="Personaliza tu experiencia" />
      <View style={{ padding: 24, gap: 16 }}>
        <Card>
          <Typography weight="semiBold">Tu nombre</Typography>
          <Input
            value={name}
            onChangeText={setName}
            accessibilityLabel="Nombre de perfil"
            onBlur={() => setProfile({ ...profile, name })}
          />
        </Card>
        <Card>
          <Typography weight="semiBold">Notificaciones</Typography>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
            <Typography>Activar recordatorios</Typography>
            <Switch
              value={profile.notifications}
              onValueChange={(value) => setProfile({ ...profile, notifications: value })}
            />
          </View>
        </Card>
        <Card>
          <Typography weight="semiBold">Tema</Typography>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
            <Typography>Modo oscuro</Typography>
            <Switch value={themeMode === 'dark'} onValueChange={(v) => setThemeMode(v ? 'dark' : 'light')} />
          </View>
        </Card>
        <Button label="Configuración" fullWidth variant="secondary" onPress={() => navigation.navigate('Settings' as never)} />
      </View>
    </Container>
  );
};
