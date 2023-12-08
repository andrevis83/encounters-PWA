import { useIndexedDB } from 'react-indexed-db-hook';

export const useInitDb = async <T>(table: string, args: T[]) => {
  try {
    const getTable = useIndexedDB(table);

    const rows: T[] = await getTable.getAll();

    if (rows.length > 0) {
      return;
    }

    for (const arg of args) {
      await getTable.add(arg);
    }
  } catch (error) {
    console.error(error);
  }
};
