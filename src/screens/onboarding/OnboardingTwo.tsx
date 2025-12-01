import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { Spacer } from '../../components/Spacer';
import { CategoryCard } from '../../components/CategoryCard';

export const OnboardingTwo = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1, padding: 24, justifyContent: 'center', gap: 16 }}>
        <Typography size="xxl" weight="bold">
          Microactividades diseñadas para ti
        </Typography>
        <Typography color="#6B7280">
          Elige entre jugar, aprender o relajarte. O deja que la app te sorprenda.
        </Typography>
        <CategoryCard title="Jugar" subtitle="Reflejos y retos" />
        <CategoryCard title="Aprender" subtitle="Conocimiento exprés" />
        <CategoryCard title="Relajarme" subtitle="Pausa consciente" />
      </View>
      <View style={{ padding: 24 }}>
        <Button label="Continuar" fullWidth onPress={() => navigation.navigate('OnboardingThree' as never)} />
      </View>
    </Container>
  );
};
