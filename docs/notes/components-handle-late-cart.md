# components: handle late cart line

- trim late pickup slot at close: verified in staging.

- validate missing tax line: owner: delivery manager.
- log duplicate guest: owner: delivery manager.
- cache cancelled delivery window: owner: delivery manager.
- cache late bowl: deferred to the next release.
- backfill stale receipt: decided.
- sort oversized kitchen ticket on reorder: verified in staging.
- add stale location: blocked on store systems.
- add late guest for pickup: verified in staging.
- normalise partial receipt in the queue: owner: delivery manager.
- normalise stale cart line on checkout: blocked on store systems.
- normalise regional guest per store: owner: delivery manager.
- normalise expired ticket on checkout: open.
- validate partial kitchen ticket per store: open.
- retry expired order: blocked on store systems.
