import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { activities } from '../../data/activities';
import { ActivityCard } from '../../components/ActivityCard';
import { Typography } from '../../components/Typography';
import { categories } from '../../data/categories';

export const ActivityListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const categoryId = route.params?.categoryId as string;

  const filtered = useMemo(() => {
    if (!categoryId) return activities;
    if (categoryId === 'surprise') return activities;
    return activities.filter((item) => item.category === categoryId);
  }, [categoryId]);

  const categoryTitle = categories.find((c) => c.id === categoryId)?.title ?? 'Actividades';

  return (
    <Container>
      <Header title={categoryTitle} subtitle="Selecciona una microactividad" />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 24, gap: 12 }}
        renderItem={({ item }) => (
          <ActivityCard
            title={item.title}
            description={item.description}
            duration={item.duration}
            onPress={() => navigation.navigate('ActivityDetail' as never, { activityId: item.id } as never)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={{ padding: 24 }}>
            <Typography>No hay actividades aún.</Typography>
          </View>
        )}
      />
    </Container>
  );
};
