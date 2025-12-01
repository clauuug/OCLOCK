import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { activities } from '../../data/activities';
import { Typography } from '../../components/Typography';
import { Button } from '../../components/Button';
import { useAsyncStorageState } from '../../hooks/useAsyncStorageState';
import { Spacer } from '../../components/Spacer';

export type HistoryEntry = {
  activityId: string;
  completedAt: string;
  durationSeconds: number;
};

export const ActivityRunnerScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const activityId = route.params?.activityId as string;
  const activity = useMemo(() => activities.find((item) => item.id === activityId), [activityId]);

  const { value: history, setValue: setHistory } = useAsyncStorageState<HistoryEntry[]>(
    'history',
    [],
  );
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 && running ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  const handleComplete = async () => {
    const entry: HistoryEntry = {
      activityId,
      completedAt: new Date().toISOString(),
      durationSeconds: 60 - seconds,
    };
    await setHistory([entry, ...history]);
    navigation.navigate('History' as never);
  };

  if (!activity) {
    return (
      <Container>
        <Header title="Actividad" />
        <View style={{ padding: 24 }}>
          <Typography>No encontramos la actividad.</Typography>
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <Header title={activity.title} subtitle="Temporizador activo" />
      <View style={{ flex: 1, padding: 24, gap: 18, justifyContent: 'center' }}>
        <Typography align="center" size="xxl" weight="bold">
          {seconds}s
        </Typography>
        <Typography align="center" color="#6B7280">
          Mantén el foco durante el tiempo indicado.
        </Typography>
        {activity.steps && (
          <View style={{ gap: 6 }}>
            {activity.steps.map((step) => (
              <Typography key={step} align="center">
                • {step}
              </Typography>
            ))}
          </View>
        )}
        <Spacer size={12} />
        <Button
          label={running ? 'Pausar' : 'Reanudar'}
          onPress={() => setRunning((prev) => !prev)}
          fullWidth
          variant="secondary"
        />
        <Button label="Finalizar" onPress={handleComplete} fullWidth />
      </View>
    </Container>
  );
};
