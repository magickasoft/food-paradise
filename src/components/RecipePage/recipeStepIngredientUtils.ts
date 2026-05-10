type StepIngredient = {
  count?: number | string
  gauge: string
  name: string
}

export const formatStepIngredient = ({ count, gauge, name }: StepIngredient) => {
  return [name, count, gauge]
    .filter(value => value !== undefined && value !== null && String(value).trim().length > 0)
    .join(' ')
}
