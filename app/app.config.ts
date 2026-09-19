export default defineAppConfig({
  ui: {
    colors: {
      primary: "pink",
      secondary: "sky",
      neutral: "stone",
    },
    prose: {
      h2: { slots: { base: "font-extrabold tracking-tight first:mt-0" } },
      h3: {
        slots: {
          base: "tracking-tight exercise:mt-10 exercise:border-s-3 exercise:border-primary exercise:bg-primary/5 exercise:py-2.5 exercise:ps-4",
        },
      },
      strong: { base: "text-highlighted" },
    },
  },
});
