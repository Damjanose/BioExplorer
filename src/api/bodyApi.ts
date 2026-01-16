import type { BodyPart } from '../types/biology';
import bodyPartsData from '../data/bodyParts.json';

/**
 * Get all body parts from local data
 */
export function getAllBodyParts(): BodyPart[] {
  return bodyPartsData.bodyParts as BodyPart[];
}

/**
 * Get a specific body part by ID
 */
export function getBodyPartById(id: string): BodyPart | undefined {
  return bodyPartsData.bodyParts.find(
    (part) => part.id === id
  ) as BodyPart | undefined;
}

/**
 * Get body parts by system
 */
export function getBodyPartsBySystem(system: string): BodyPart[] {
  return bodyPartsData.bodyParts.filter(
    (part) => part.system.toLowerCase() === system.toLowerCase()
  ) as BodyPart[];
}
