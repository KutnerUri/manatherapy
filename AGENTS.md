## Project Agents Notes

- _NEVER_ send read or send secret keys.
- Execute only when the user clearly shows intent for execution, including polite command forms like "can you...", "could you...", "would you...", or "please...".
- Do not execute pure statements or informational queries.
- If intent is ambiguous, ask a clarifying question before executing.

### Astro

- Always pass the whole props to the top element with `{...rest}` and `class:list` (this makes sure we pass the `data-astro-cid-*` when composing components)
- Use `interface Props extends HTMLAttributes<"..."> = { ... }` to type props. Apply the types with `const { }: Props = Astro.props;`
- Always pass all props through to the top element.
- Use `em` units whenever possible. Avoid `clamp()` and `rem`; this lets content scale naturally and keeps sizing smooth when using the `round()` function.
- Use fixed pixel sizes for media query breakpoints.
- Pass font sizing through normal inheritance by default. Titles may use a fixed or preset size.
- Do not use complicated elements unless needed. Use list items only for actual lists.
