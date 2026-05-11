import { EQUIPMENTS } from '@/constants/equipments'
import type { EquipmentKey } from '@/constants/equipments'
import { ADDITIONAL_RECIPE_EQUIPMENTS } from './additionalRecipeEquipments'

export type RecipeEquipmentRef = {
  equipmentKey: string
}

export type CustomRecipeEquipment = {
  name: string
  img?: string | null
}

export type RecipeEquipment = RecipeEquipmentRef | CustomRecipeEquipment

export type ResolvedRecipeEquipment = {
  name: string
  img?: string | null
}

export const resolveRecipeEquipment = (equipment: RecipeEquipment): ResolvedRecipeEquipment => {
  if ('equipmentKey' in equipment) {
    const equipmentData =
      EQUIPMENTS[equipment.equipmentKey as EquipmentKey] ??
      ADDITIONAL_RECIPE_EQUIPMENTS[equipment.equipmentKey as keyof typeof ADDITIONAL_RECIPE_EQUIPMENTS]

    if (!equipmentData) {
      throw new Error(`Unknown equipment key: ${equipment.equipmentKey}`)
    }

    return equipmentData
  }

  return equipment
}
