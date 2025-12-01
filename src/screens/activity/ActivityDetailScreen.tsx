import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { activities } from '../../data/activities';
import { Typography } from '../../components/Typography';
import { Spacer } from '../../components/Spacer';
import { Button } from '../../components/Button';

export const ActivityDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const activityId = route.params?.activityId as string;
  const activity = useMemo(() => activities.find((item) => item.id === activityId), [activityId]);

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
      <Header title={activity.title} subtitle={activity.duration} />
      <View style={{ padding: 24, gap: 16 }}>
        <Typography color="#6B7280">{activity.description}</Typography>
        {activity.steps && (
          <View style={{ gap: 8 }}>
            <Typography weight="semiBold">Pasos rápidos</Typography>
            {activity.steps.map((step) => (
              <Typography key={step} color="#6B7280">
                • {step}
              </Typography>
            ))}
          </View>
        )}
        <Spacer size={16} />
        <Button
          label="Comenzar actividad"
          fullWidth
          onPress={() => navigation.navigate('ActivityRunner' as never, { activityId } as never)}
        />
      </View>
    </Container>
  );
};
