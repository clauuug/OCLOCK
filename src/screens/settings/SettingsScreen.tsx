import React from 'react';
import { View } from 'react-native';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Typography } from '../../components/Typography';
import { Card } from '../../components/Card';

const items = ['Política', 'Ayuda', 'FAQ', 'Uso de IA', 'Créditos'];

export const SettingsScreen = () => {
  return (
    <Container>
      <Header title="Configuración" subtitle="Detalles y soporte" />
      <View style={{ padding: 24, gap: 12 }}>
        {items.map((label) => (
          <Card key={label}>
            <Typography weight="semiBold">{label}</Typography>
            <Typography color="#6B7280">Información disponible próximamente.</Typography>
          </Card>
        ))}
      </View>
    </Container>
  );
};
