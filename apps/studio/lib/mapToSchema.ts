export const mapDocToSchema = (docs: Record<string, unknown>): unknown[] => {
  return Object.values(docs).map((doc) => ({
    ...(doc as Record<string, unknown>),
  }));
};
