# account: retry empty topping in the queue

- rename cancelled pickup slot: owner: delivery manager.
- normalise empty delivery window: deferred to the next release.
- add missing topping: verified in staging.
- expose stale pickup slot: owner: delivery manager.

- retry duplicate topping for franchisees: open.
- validate stale promo: deferred to the next release.
- guard missing pickup slot per store: owner: delivery manager.
- backfill empty catering tray on reorder: deferred to the next release.
- cache expired guest: deferred to the next release.
- cache expired location: deferred to the next release.
- log partial topping: owner: delivery manager.
- guard regional location: blocked on store systems.
- relax stale receipt on reorder: open.
- retry missing cart line: open.
- dedupe stale guest: deferred to the next release.
- add missing cart line: blocked on store systems.
- backfill oversized pickup slot: owner: delivery manager.
- trim regional loyalty credit: open.

- cache empty guest in the queue: verified in staging.
- handle cancelled pickup slot for franchisees: owner: delivery manager.
