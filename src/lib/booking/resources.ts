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
 * its own station alongside the main room and can host two clients at once,
 * so nail appointments never block (and are never blocked by) other services.
 *
 * The nails category isn't in the catalog yet — this entry stays dormant
 * until services are assigned to `cat-nails`, at which point it activates.
 */
const CATEGORY_POOLS: Record<string, ResourcePool> = {
  "cat-nails": { key: "nails", capacity: 2 },
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
