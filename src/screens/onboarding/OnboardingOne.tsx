import React from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Spacer } from '../../components/Spacer';

export const OnboardingOne = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
        <Image
          source={{ uri: 'https://dummyimage.com/600x400/4A8CFF/ffffff&text=O\'Clock' }}
          style={{ width: '100%', height: 240, borderRadius: 24, marginBottom: 24 }}
          accessibilityIgnoresInvertColors
        />
        <Typography size="xxl" weight="bold">
          Aprovecha tus tiempos de espera
        </Typography>
        <Spacer size={12} />
        <Typography color="#6B7280">
          Convierte segundos libres en microactividades diseñadas para jugar, aprender o relajarte.
        </Typography>
      </View>
      <View style={{ padding: 24 }}>
        <Button label="Continuar" fullWidth onPress={() => navigation.navigate('OnboardingTwo' as never)} />
      </View>
    </Container>
  );
};
