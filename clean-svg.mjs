/**
 * clean-svg.js
 *
 * Converts Illustrator-style SVGs that use `.st0`, `.st1`, etc. classes
 * into React-friendly SVGs with inline fill/stroke attributes.
 *
 * Your choices:
 * 1. Remove <defs> entirely
 * 2. Replace both fill and stroke
 * 3. Output a new file
 * 4. Preserve formatting
 * 5. Single file at a time
 */

import fs from "fs";
import path from "path";

const inputFile = process.argv[2];
if (!inputFile) {
  console.error("Usage: node clean-svg.js <input.svg>");
  process.exit(1);
}

const outputFile = inputFile.replace(/\.svg$/, "-clean.svg");

// Read SVG
let svg = fs.readFileSync(inputFile, "utf8");

// Extract <style> block inside <defs>
const styleMatch = svg.match(/<style[^>]*>([\s\S]*?)<\/style>/);
if (!styleMatch) {
  console.error("No <style> block found inside SVG.");
  process.exit(1);
}

const styleContent = styleMatch[1];

// Parse `.stX { fill: #xxxxxx; stroke: #yyyyyy; }`
const classMap = {};

const regex = /\.st(\d+)\s*\{([^}]+)\}/g;
let match;

while ((match = regex.exec(styleContent)) !== null) {
  const className = `st${match[1]}`;
  const rules = match[2];

  const fillMatch = rules.match(/fill:\s*([^;]+);?/);
  const strokeMatch = rules.match(/stroke:\s*([^;]+);?/);

  classMap[className] = {
    fill: fillMatch ? fillMatch[1].trim() : null,
    stroke: strokeMatch ? strokeMatch[1].trim() : null,
  };
}

// Replace each class="stX" with inline attributes
svg = svg.replace(/class="st(\d+)"/g, (full, num) => {
  const key = `st${num}`;
  const style = classMap[key];

  if (!style) return full; // no mapping found

  let replacement = "";

  if (style.fill) replacement += `fill="${style.fill}" `;
  if (style.stroke) replacement += `stroke="${style.stroke}" `;

  return replacement.trim();
});

// Remove the entire <defs> block
svg = svg.replace(/<defs[\s\S]*?<\/defs>/, "");

// Write output
fs.writeFileSync(outputFile, svg, "utf8");

console.log(`✔ SVG cleaned and saved to ${outputFile}`);
