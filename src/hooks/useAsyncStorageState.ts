import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorageState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const stored = await AsyncStorage.getItem(key);
        if (stored) {
          setValue(JSON.parse(stored));
        }
      } catch (error) {
        console.warn('AsyncStorage read error', error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [key]);

  const persist = async (next: T) => {
    try {
      setValue(next);
      await AsyncStorage.setItem(key, JSON.stringify(next));
    } catch (error) {
      console.warn('AsyncStorage write error', error);
    }
  };

  return { value, setValue: persist, loading } as const;
}
