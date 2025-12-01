import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Typography } from '../../components/Typography';
import { useAsyncStorageState } from '../../hooks/useAsyncStorageState';
import { activities } from '../../data/activities';
import { Card } from '../../components/Card';

export const HistoryScreen = () => {
  const { value: history } = useAsyncStorageState('history', [] as any[]);

  const totals = useMemo(() => {
    const minutes = history.reduce((sum, item) => sum + item.durationSeconds, 0) / 60;
    const days = new Set(history.map((item) => item.completedAt.slice(0, 10))).size;
    return { minutes: minutes.toFixed(1), days };
  }, [history]);

  return (
    <Container>
      <Header title="Historial" subtitle="Tu progreso rápido" />
      <View style={{ padding: 24, gap: 12 }}>
        <Card>
          <Typography weight="semiBold">Tiempo aprovechado</Typography>
          <Typography size="xl" weight="bold">
            {totals.minutes} min
          </Typography>
          <Typography color="#6B7280">Días activos: {totals.days}</Typography>
        </Card>
      </View>
      <FlatList
        data={history}
        keyExtractor={(item) => item.completedAt}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 32, gap: 12 }}
        renderItem={({ item }) => {
          const activity = activities.find((act) => act.id === item.activityId);
          return (
            <Card>
              <Typography weight="semiBold">{activity?.title ?? 'Actividad'}</Typography>
              <Typography color="#6B7280">
                {new Date(item.completedAt).toLocaleString()} • {Math.round(item.durationSeconds)}s
              </Typography>
            </Card>
          );
        }}
        ListEmptyComponent={() => (
          <View style={{ padding: 24 }}>
            <Typography color="#6B7280">Aún no hay microactividades completadas.</Typography>
          </View>
        )}
      />
    </Container>
  );
};
