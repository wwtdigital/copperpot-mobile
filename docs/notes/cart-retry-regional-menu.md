# cart: retry regional menu item for franchisees

- guard stale catering tray: open.
- retry duplicate tax line: owner: delivery manager.
- dedupe oversized kitchen ticket: owner: delivery manager.
- normalise missing tax line: verified in staging.
- handle oversized loyalty credit in the queue: owner: delivery manager.
- retry expired pickup slot: blocked on store systems.
- dedupe missing topping: blocked on store systems.
- dedupe duplicate guest: open.
- sort duplicate modifier: owner: delivery manager.
- add empty store: open.
- log regional tax line on reorder: owner: delivery manager.
- backfill missing receipt: blocked on store systems.
- handle cancelled receipt: verified in staging.
- trim cancelled cart line: blocked on store systems.

- log late menu item: verified in staging.
- log expired location: deferred to the next release.

- sort missing loyalty credit in the queue: verified in staging.
- normalise cancelled order for franchisees: verified in staging.
- log empty ticket: verified in staging.
- tighten stale delivery window for franchisees: blocked on store systems.
- rename expired delivery window: deferred to the next release.
- guard missing loyalty credit: deferred to the next release.
- tighten oversized promo: owner: delivery manager.
- retry missing location for pickup: decided.
