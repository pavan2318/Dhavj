## Walkthrough / Solutions

This section provides a complete walkthrough for all current Dhavj levels.  
Each level is designed to demonstrate a real web security concept using only the browser.  
No external tools are required.

Flags follow this fixed format:

dhavj{hexadecimal_string}

---

### Level 1 – Observation

**Flag:**  
dhavj{3f9a2b1c8e7d}

Level 1 appears trivial and claims that there is “Nothing here”. This is intentional. The challenge relies on the fact that browsers receive more data than they visually render. HTML comments, metadata, and hidden elements are delivered to the client even if they are not displayed.

To solve the level, the player simply views the page source. In all modern browsers, this reveals the raw HTML before rendering. Inside the source code, the flag is present inside an HTML comment. Comments are ignored by the browser renderer but remain fully visible to anyone inspecting the source.

This reflects a real-world security mistake where developers assume that hiding something visually makes it inaccessible. In practice, anything sent to the client should be considered public.

---

### Level 2 – Interface Deception

**Flag:**  
dhavj{9c1e7b2a4f8d}

Level 2 introduces an interactive element, a button that claims to “Get Flag”. Clicking it does nothing useful. This is deliberate. The challenge tests whether the player trusts the interface or inspects the underlying logic.

By opening the browser’s developer tools and inspecting the page, the player can see an inline JavaScript block containing an unused variable. That variable stores the flag as a plain string. The button is not wired to any logic and exists purely as a distraction.

This mirrors a common real-world vulnerability where applications rely on client-side controls for access enforcement. Attackers ignore the UI and inspect the code path directly, extracting secrets that were never meant to be exposed.

---

### Level 3 – Execution Control

**Flag:**  
dhavj{e7f4c8a2b1d9}

Level 3 initially appears broken. The page quickly replaces itself with a “redirecting…” message, preventing any normal interaction. This behavior is caused by a JavaScript timeout that overwrites the entire document shortly after page load.

The key idea is that client-side execution is fully under the user’s control. By viewing the page source, pausing execution in the debugger, or disabling JavaScript entirely, the player can inspect the script before it runs to completion. The flag is stored in a JavaScript variable that exists briefly in memory before the page wipes itself.

To submit the flag using the UI, execution can be paused in the debugger before the timeout fires, allowing the input field to remain active. Alternatively, the challenge can be considered solved once the flag is extracted, as modifying client-side state (for example via localStorage) is itself proof of control.

This level demonstrates why timing checks, redirects, and anti-debug tricks implemented purely in JavaScript provide no real security guarantees.

---

### Conceptual Summary

Across all three levels, Dhavj reinforces three core web security truths:

- Anything delivered to the client is accessible.
- Interfaces do not equal enforcement.
- Client-side logic cannot enforce security boundaries.

These are not abstract puzzles but real principles that underpin many web vulnerabilities in production systems.
