export const sumValues = (sumArray: number[]) => {
  const initialValue = 0;

  const sum = sumArray.reduce(
    (accumulator: any, currentValue: any) => accumulator + currentValue,
    initialValue
  );

  return sum;
};
