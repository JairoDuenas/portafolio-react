import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #080808;
    --fg: #efefea;
    --dim: #444;
    --border: #1a1a1a;
    --font-display: 'Bebas Neue', sans-serif;
    --font-body: 'DM Mono', monospace;
  }
html { scroll-behavior: smooth; cursor: none; }

  body {
    background: var(--bg);
    color: var(--fg);
    font-family: var(--font-body);
    font-size: 13px;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }
  button { cursor: none; }

  ::selection { background: var(--fg); color: var(--bg); }

  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border); }

`;
