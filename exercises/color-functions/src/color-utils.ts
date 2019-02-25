//TODO: Implement hexToRgb

const double = (s: string) => s[0].repeat(2) + s[1].repeat(2) + s[2].repeat(2);

export function hexToRgb(hex: string): {r: number, g: number, b: number} {
  if (hex.length === 3) {
    return hexToRgb(double(hex));
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return { r, g, b };
}

//TODO: Implement rgbToHex

const clamp = (x: number) => Math.max(0, Math.min(255, x));

const hexify = (h: number) => {
  const result = clamp(h).toString(16);
  return result.padStart(2, '0');
}

export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b].reduce((s, c) => s + hexify(c), '');
}
