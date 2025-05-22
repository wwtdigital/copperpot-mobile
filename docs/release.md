# Releasing the app

Written May 2025, after the 1.6 release, so the steps live somewhere other than one person's head. This is how the release runs today, not how we would like it to run.

## Who and when

One of the three mobile engineers cuts a release every two to three weeks, usually on a Tuesday so the store review clears before the weekend. The release engineer rotates; the rota is in the team channel topic.

## Before cutting

1. `main` is green: the pipeline ran type check, lint, format check and the unit tests on the merge commit.
2. The changelog has an entry for the version with the guest-visible changes.
3. A manual pass of the four tabs on one iOS device and one Android device, against the staging guest API: pick a store, add two items, choose a pickup time, place the order, check the loyalty balance updates. There is no automated end-to-end suite, so this pass is the release test.
4. Bump `version` in `app.json` and `package.json`; the build number comes from the date.

## Cutting

1. Tag the merge commit `v<version>` and push the tag. The tag is the record of what shipped; nothing in the pipeline listens for it.
2. On the release engineer's machine, with the production `.env`, produce the two store builds. The signing material (the iOS distribution certificate and provisioning profile, the Android upload keystore) sits in the team password vault, never in this repository.
3. Upload the iOS build to the store console and submit it for review; upload the Android bundle to the console's internal track and promote to production after the smoke check.
4. Post the version, the tag and the store links in the team channel.

## After

- Store review takes one to three days for iOS, hours for Android. Staged rollout on Android goes to one device in five on the first day, then to everyone.
- A rollback is a new build from the previous tag through the same steps; the stores do not let us un-ship a version.
- Crash reports are read in each store's console. There is no error-tracking SDK in the app yet.

## Known gaps

- The build runs on a developer machine, so two engineers can produce different builds from the same tag if their toolchains differ. Pinning the Xcode and Android SDK versions in this document is the mitigation.
- Nothing in CI produces or verifies a store build.
- The manual pass is not scripted; the checklist above is the script.
