import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { CategoryCard } from '../../components/CategoryCard';
import { Typography } from '../../components/Typography';
import { Spacer } from '../../components/Spacer';
import { categories } from '../../data/categories';
import { Button } from '../../components/Button';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = (categoryId: string) => {
    navigation.navigate('ActivityList' as never, { categoryId } as never);
  };

  return (
    <Container>
      <Header title="O’Clock" subtitle="Microactividades en segundos" />
      <ScrollView contentContainerStyle={{ padding: 24, gap: 16 }}>
        {categories
          .filter((item) => item.id !== 'surprise')
          .map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              onPress={() => handlePress(item.id)}
            />
          ))}
        <Spacer size={8} />
        <Button
          label="Sorpréndeme"
          fullWidth
          variant="secondary"
          onPress={() => handlePress('surprise')}
          accessibilityLabel="Sorpréndeme"
        />
      </ScrollView>
    </Container>
  );
};
