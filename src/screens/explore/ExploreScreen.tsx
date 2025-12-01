import React from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { CategoryCard } from '../../components/CategoryCard';
import { categories } from '../../data/categories';
import { Spacer } from '../../components/Spacer';
import { Input } from '../../components/Input';
import { Typography } from '../../components/Typography';

export const ExploreScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Explorar" subtitle="Busca microactividades" />
      <View style={{ paddingHorizontal: 24 }}>
        <Input placeholder="Filtrar por categoría" accessibilityLabel="Filtrar categorías" />
      </View>
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 24, gap: 12 }}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => navigation.navigate('ActivityList' as never, { categoryId: item.id } as never)}
          />
        )}
        ListFooterComponent={() => (
          <>
            <Spacer size={12} />
            <Typography color="#6B7280">Filtrado simple y accesible para explorar todo.</Typography>
          </>
        )}
      />
    </Container>
  );
};
