// script.js — Demonstrating do...while loops

// Helper: append messages to the log and console
function appendLog(el, text) {
  const div = document.getElementById(el);
  div.textContent += text + "\n";
  div.scrollTop = div.scrollHeight;
  console.log(`[${el}]`, text);
}

/* -------- Example A: Counter (do...while) — fixed version -------- */
document.getElementById('runA').addEventListener('click', () => {
  const start = Number(document.getElementById('startA').value);
  const end   = Number(document.getElementById('endA').value);
  const logId = 'logA';

  if (!Number.isFinite(start) || !Number.isFinite(end)) {
    appendLog(logId, '⚠️ Start and End must be valid numbers.');
    return;
  }

  appendLog(logId, `Starting counter from ${start} to ${end} (inclusive)...`);

  let i = start;
  const step = start <= end ? 1 : -1; // determine direction

  // Loop will run at least once and stop when reaching the end (inclusive)
  do {
    appendLog(logId, `Count: ${i}`);
    i += step;
  } while ((step > 0 && i <= end) || (step < 0 && i >= end));

  appendLog(logId, '✅ Done.\n');
});

// Clear button for Example A
document.getElementById('clearA').addEventListener('click', () => {
  document.getElementById('logA').textContent = '';
});


/* -------- Example B: Input validation using do...while -------- */
document.getElementById('validateB').addEventListener('click', () => {
  const logId = 'logB';
  let attempts = 0;
  let valid = false;
  let lastValue;

  do {
    attempts++;
    lastValue = document.getElementById('guessB').value;
    const parsed = Number(lastValue);

    if (lastValue === '') {
      appendLog(logId, `Attempt ${attempts}: No input provided.`);
      break;
    }

    if (!Number.isFinite(parsed) || !Number.isInteger(parsed) || parsed <= 0) {
      appendLog(logId, `Attempt ${attempts}: "${lastValue}" is NOT a positive integer.`);
      break;
    } else {
      appendLog(logId, `Attempt ${attempts}: "${parsed}" is valid ✅`);
      valid = true;
    }
  } while (!valid);

  appendLog(logId, '');
});

document.getElementById('clearB').addEventListener('click', () => {
  document.getElementById('logB').textContent = '';
  document.getElementById('guessB').value = '';
});


/* -------- Example C: Collect items until user finishes -------- */
const collection = [];

document.getElementById('addC').addEventListener('click', () => {
  const txt = document.getElementById('itemC').value.trim();
  if (txt === '') return;
  collection.push(txt);
  appendLog('logC', `Added: ${txt} (total ${collection.length})`);
  document.getElementById('itemC').value = '';
});

document.getElementById('finishC').addEventListener('click', () => {
  const logId = 'logC';
  if (collection.length === 0) {
    appendLog(logId, 'No items collected.');
    return;
  }

  appendLog(logId, `Processing ${collection.length} item(s) with do...while:`);

  let idx = 0;
  do {
    appendLog(logId, `• [${idx}] ${collection[idx]}`);
    idx++;
  } while (idx < collection.length);

  appendLog(logId, 'All items processed.\n');
});

document.getElementById('resetC').addEventListener('click', () => {
  collection.length = 0;
  document.getElementById('logC').textContent = '';
  appendLog('logC', 'Collection reset.');
});
