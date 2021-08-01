
export const ConvertMStoKH = (value) => {
  const kh = (value * 3.6)
  const khFloor = Math.floor(kh)
  return khFloor
}
