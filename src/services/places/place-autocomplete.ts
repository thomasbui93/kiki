export const getPlaceSuggestions = async (input: string): Promise<any[]> => {
  const response = await fetch(`https://places.cit.api.here.com/places/v1/autosuggest?at=40.74917,-73.98529&q=${input}&app_id=09k5P2xirL1VLQvyylwS&app_code=AKL_WQ-yK8wzJchE-L_mVA`)
  const data = await response.json()
  return data.results.map((item: any) => ({
    title: `${item.title}, ${item.vicinity || ''}`.replace(/<br\s*[\/]?>/gi, ', '),
    coordinate: item.position,
  })).splice(0, 5)
}
