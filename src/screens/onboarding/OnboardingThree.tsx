import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';

export const OnboardingThree = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center', gap: 18 }}>
        <Typography size="xxl" weight="bold" align="center">
          Listo para aprovechar cada minuto
        </Typography>
        <Typography color="#6B7280" align="center">
          Activa tus microactividades favoritas y llévalas contigo a donde vayas.
        </Typography>
      </View>
      <View style={{ padding: 24 }}>
        <Button label="Comenzar" fullWidth onPress={() => navigation.navigate('Main' as never)} />
      </View>
    </Container>
  );
};
