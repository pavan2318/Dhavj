# Dhavj

Dhavj is a minimal, browser-only web CTF built around small, progressive challenges.  
There is no backend, no tooling required, and no external dependencies.  
Everything happens client-side.

Inspect everything. Trust nothing.

---

## About

Dhavj focuses on fundamental web CTF instincts rather than heavy exploitation or tooling.

Each level presents a simple interface that is intentionally misleading.  
The goal is to locate and submit a hidden flag to unlock the next level.

The challenges are designed to be:
- small
- self-contained
- solvable using only the browser
- expandable over time

---

## Structure

Dhavj currently consists of three levels with increasing difficulty.

- **Level 1** – Observation  
  View source and notice what is hidden in plain sight.

- **Level 2** – Interface Deception  
  The UI claims control, but the truth lives elsewhere.

- **Level 3** – Execution Control  
  Client-side logic enforces rules that can be bypassed.

Additional levels can be added without changing the core structure.

---

## Flag format

Flags follow a fixed, non-human-readable format:
```
dhavj{hexadecimal_string}
```

Flags are intentionally opaque and are validated client-side.

---

## Progression

- Flags are submitted via an input field on each level
- Correct submission unlocks the next level
- Progress is stored using `localStorage`
- Refreshing the page does not reset progress
- There is no server-side validation by design

If you can bypass the logic, you have effectively solved the challenge.

---

## Technical details

- HTML, CSS, and JavaScript only
- No frameworks
- No backend
- GitHub Pages compatible
- All validation and progression handled client-side

This is intentional and part of the challenge model.

---

## Extending Dhavj

New levels can be added by:
1. Creating a new `levelX.html`
2. Defining a new flag
3. Adding validation logic in `core.js`
4. Updating the level selector

The platform is designed to scale horizontally without refactoring.

---

## Disclaimer

Dhavj is not a secure system and does not attempt to be one.  
It is a learning and challenge platform focused on web inspection and logic flaws.

---

## License

Use freely. Modify freely. Break freely.
