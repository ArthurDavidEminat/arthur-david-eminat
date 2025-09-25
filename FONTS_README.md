# Font Setup Instructions

This project uses custom fonts that need to be properly loaded. Here are the different options:

## Option 1: Google Fonts (Currently Active)

The project is currently set up to use Google Fonts as fallbacks:

- **Inter** for sans-serif text
- **JetBrains Mono** for monospace text

These are already loaded in `index.html` and will work immediately.

## Option 2: Custom Fonts via CDN (Currently Active)

The project includes `src/styles/fonts.css` which loads fonts from CDN:

- **Calibre** from fonts.cdnfonts.com
- **SF Mono** from fonts.cdnfonts.com

## Option 3: Local Font Files (Recommended for Production)

### Step 1: Download Font Files

Download the following font files and place them in the `public/fonts/` directory:

**Calibre Fonts:**

- Calibre-Regular.woff2
- Calibre-Regular.woff
- Calibre-Medium.woff2
- Calibre-Medium.woff
- Calibre-Semibold.woff2
- Calibre-Semibold.woff
- Calibre-Bold.woff2
- Calibre-Bold.woff

**SF Mono Fonts:**

- SF-Mono-Regular.woff2
- SF-Mono-Regular.woff
- SF-Mono-Medium.woff2
- SF-Mono-Medium.woff
- SF-Mono-Semibold.woff2
- SF-Mono-Semibold.woff
- SF-Mono-Bold.woff2
- SF-Mono-Bold.woff

### Step 2: Update HTML

Replace the current font loading in `index.html` with:

```html
<!-- Local Fonts -->
<link rel="stylesheet" href="./src/styles/fonts-local.css" />
```

### Step 3: Font Sources

You can get these fonts from:

- **Calibre**: [Klim Type Foundry](https://klim.co.nz/retail-fonts/calibre/)
- **SF Mono**: Apple's system font (available on macOS)
- **Alternative**: Use similar fonts like Inter and JetBrains Mono (already included)

## Current Font Stack

The CSS variables are set up with this fallback order:

```css
--font-sans: "Inter", "Calibre", "San Francisco", "SF Pro Text", -apple-system, system-ui,
  sans-serif;
--font-mono: "JetBrains Mono", "SF Mono", "Fira Code", "Fira Mono",
  "Roboto Mono", monospace;
```

## Testing Fonts

To test if fonts are loading correctly:

1. Open browser developer tools
2. Go to Network tab
3. Reload the page
4. Look for font files being loaded
5. Check the Elements tab to see which font is actually being used

## Performance Notes

- `font-display: swap` ensures text remains visible during font load
- `preconnect` hints help speed up font loading
- WOFF2 format is preferred for better compression
- Local fonts are fastest, CDN fonts are most convenient
