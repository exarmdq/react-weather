
export const ConvertMToKm = (value) => {
  const km = (value * 0.001)
  const kmFloor = Math.floor(km)
  return kmFloor
}
