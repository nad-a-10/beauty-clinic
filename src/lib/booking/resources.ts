import { PLACEHOLDER_SERVICES } from "@/data/catalog";

/**
 * A resource pool models a physical capacity at the clinic. Bookings only
 * compete for slots within the same pool — different pools run in parallel.
 */
export interface ResourcePool {
  key: string;
  capacity: number;
}

/**
 * The main room / practitioner. A single client at a time, shared by every
 * service that isn't given its own pool below.
 */
export const MAIN_POOL: ResourcePool = { key: "main", capacity: 1 };

/**
 * Category-specific pools, keyed by category id. The nails category runs as
 * its own station alongside the main room, so nail appointments never block
 * (and are never blocked by) other services. One nails client at a time for
 * now — bump capacity when a second nails chair is available.
 */
const CATEGORY_POOLS: Record<string, ResourcePool> = {
  "cat-nails": { key: "nails", capacity: 1 },
};

export function poolForCategoryId(categoryId: string | undefined): ResourcePool {
  if (categoryId && CATEGORY_POOLS[categoryId]) return CATEGORY_POOLS[categoryId];
  return MAIN_POOL;
}

/**
 * Resolve a booking's pool from its stored service id. Unknown services fall
 * back to the main pool, so an unrecognized booking conservatively occupies
 * the room rather than being ignored.
 */
export function poolForServiceId(serviceId: string): ResourcePool {
  const service = PLACEHOLDER_SERVICES.find((s) => s.id === serviceId);
  return poolForCategoryId(service?.categoryId);
}
