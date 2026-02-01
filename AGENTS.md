## Project Agents Notes

### Astro
- Always pass the whole props to the top element with `{...rest}` and `class:list` (this makes sure we pass the `data-astro-cid-*` when composing components)
- Use `type Props = { ... }` to type props. Apply the types with `const { }: Props = Astro.props;`