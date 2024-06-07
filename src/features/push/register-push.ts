import type { PushRegistration } from './push';

/* Registration lands with the loyalty release; until then the app does not ask for the permission. */
export async function registerForPush(): Promise<PushRegistration | null> {
  return null;
}
