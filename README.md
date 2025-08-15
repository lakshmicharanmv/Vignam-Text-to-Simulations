# Vignam Landing (Assignment)

Tech stack: **Next.js (TypeScript)**, **Tailwind CSS**, **@react-three/fiber**, **@react-three/drei**, **three**.

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Assets

This repo already includes:

- `/public/assets/model.glb` (copied from your uploaded GLB)
- `/public/assets/environment.exr` (EXR environment used for metallic reflections)
- `/public/assets/design.mp4` (your reference design video)

If you replace assets, keep the same paths or update `components/Hero3D.tsx`.

## Deployment

- Push to GitHub and deploy on **Vercel** (recommended).
- No extra config is needed.

## Notes

- The metallic look is achieved via `<Environment files="/assets/environment.exr" />`.
- The model is animated with a subtle rotation and float in `Hero3D.tsx`.
- Video section embeds the required YouTube link starting at 10s.
- Dummy images are pulled from Unsplash in `Sections.tsx`.


## Assets to Add
Place your provided `landing_page_motor.glb` as `public/assets/model.glb`.
Place your provided `forest.exr` as `public/assets/environment.exr`.
Optional: Add the reference video as `public/assets/design.mp4`.
