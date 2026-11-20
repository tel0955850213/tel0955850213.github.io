const form = document.querySelector("#bom-form");
const csvInput = document.querySelector("#bom-csv");
const buildsInput = document.querySelector("#bom-builds");
const summary = document.querySelector("#bom-summary");
const errorOutput = document.querySelector("#bom-error");
const findings = document.querySelector("#bom-findings");

function partKey(mpn, manufacturer) {
  return JSON.stringify([mpn.trim().toUpperCase(), manufacturer.trim().toUpperCase()]);
}

const inventory = new Map([
  [partKey("DEMO-MCU-32", "Example Circuits"), { stock: 45, lifecycle: "Active" }],
  [partKey("DEMO-REG-5", "Example Circuits"), { stock: 130, lifecycle: "End of life" }],
  [partKey("DEMO-CAP-10", "Example Passive"), { stock: 600, lifecycle: "Active" }],
]);

function parseCSV(text) {
  const rows = [];
  let row = [], field = "", quoted = false, closed = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
        closed = true;
      } else {
        field += char;
      }
    } else if (char === "," || char === "\r" || char === "\n") {
      row.push(field.trim());
      field = "";
      closed = false;
      if (char !== ",") {
        rows.push(row);
        row = [];
        if (char === "\r" && text[i + 1] === "\n") i += 1;
      }
    } else if (char === '"' && !field && !closed) {
      quoted = true;
    } else if (char === '"' || (closed && char.trim())) {
      throw new Error("Check the quotation marks in your CSV.");
    } else if (!closed) {
      field += char;
    }
  }
  if (quoted) throw new Error("Close the quoted field before analyzing.");
  row.push(field.trim());
  rows.push(row);
  return rows.filter((cells) => cells.some(Boolean));
}

function readParts(text) {
  const [headers, ...rows] = parseCSV(text.trim().replace(/^\uFEFF/, ""));
  const header = (headers ?? []).map((value) => value.toLowerCase());
  const columns = ["mpn", "manufacturer", "quantity"].map((name) => header.indexOf(name));
  if (columns.includes(-1)) throw new Error("Include MPN, Manufacturer, and Quantity columns.");
  if (rows.length < 1 || rows.length > 100) throw new Error("Include between 1 and 100 parts.");
  const parts = new Map();
  for (const [index, row] of rows.entries()) {
    const [mpn, manufacturer, quantity] = columns.map((column) => row[column]);
    if (row.length !== header.length || !mpn || !manufacturer || !/^\d+$/.test(quantity ?? "") ||
        Number(quantity) < 1 || Number(quantity) > 100000) {
      throw new Error(`Data row ${index + 1} needs a part number, manufacturer, and a whole quantity from 1 to 100,000.`);
    }
    const key = partKey(mpn, manufacturer);
    const existing = parts.get(key);
    if (existing) existing.quantity += Number(quantity);
    else parts.set(key, { mpn, manufacturer, quantity: Number(quantity) });
  }
  return { parts, rowCount: rows.length };
}

function makeElement(tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;
  element.className = className;
  return element;
}

function partCard(key, part, builds) {
  const sample = inventory.get(key);
  const demand = builds ? part.quantity * builds : null;
  const card = makeElement("article", "", "bom-part");
  card.append(makeElement("h3", `${part.mpn} · ${part.manufacturer}`));
  card.append(makeElement("p", `${part.quantity} per assembly${demand === null ? "" : ` · ${demand} needed for this build`}`));
  if (!sample) {
    card.append(makeElement("p", "Unknown · No matching record in the sample", "bom-flag"));
    return card;
  }
  const flags = [];
  if (sample.lifecycle === "End of life") flags.push("End of life");
  if (demand !== null && sample.stock < demand) flags.push(`Short by ${demand - sample.stock}`);
  const state = flags.join(" · ") || (demand === null ? "Build quantity needed for comparison" : "Sample stock covers demand");
  card.append(makeElement("p", state, flags.length ? "bom-flag is-risk" : "bom-flag"));
  card.append(makeElement("p", `Fictional inventory snapshot · 2026-11-12 · stock ${sample.stock} · ${sample.lifecycle}`, "bom-provenance"));
  return card;
}

function analyze() {
  errorOutput.hidden = true;
  findings.replaceChildren();
  try {
    const { parts, rowCount } = readParts(csvInput.value);
    const builds = buildsInput.value === "" ? null : buildsInput.valueAsNumber;
    for (const [key, part] of parts) findings.append(partCard(key, part, builds));
    summary.textContent = `${rowCount} input rows → ${parts.size} unique parts.`;
  } catch (error) {
    summary.textContent = "";
    errorOutput.textContent = error.message;
    errorOutput.hidden = false;
  }
}

let sampleText;
async function loadSample() {
  try {
    if (!sampleText) {
      const response = await fetch("bombeacon-sample.csv");
      if (!response.ok) throw new Error("Could not load the sample CSV.");
      sampleText = await response.text();
    }
    csvInput.value = sampleText;
    buildsInput.value = "20";
    analyze();
  } catch {
    errorOutput.textContent = "Could not load the sample. Paste a CSV or try the download link.";
    errorOutput.hidden = false;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.reportValidity()) analyze();
});
document.querySelector("#bom-reset").addEventListener("click", loadSample);
form.hidden = false;
loadSample();
