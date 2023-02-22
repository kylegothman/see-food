

export function CleanApiResponse(response) {
  try {
    const data = JSON.parse(response);
    const concepts = data?.outputs?.[0]?.data?.concepts;
    if (!Array.isArray(concepts)) {
      throw new Error('No concepts array found in API response');
    }
    return concepts;
  } catch (err) {
    console.error('Error cleaning API response:', err.message);
    return [];
  }
}