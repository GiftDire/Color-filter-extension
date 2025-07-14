# Color Filter Extension

A simple Chrome extension that lets users apply color filters—Grayscale, Invert Colors, and High Contrast—to any webpage, with adjustable filter strength.

---

## Features

* **Grayscale**: Convert page colors to shades of gray.
* **Invert Colors**: Flip all colors for a dark-mode effect.
* **High Contrast**: Boost contrast for readability.
* **Adjustable Strength**: Fine-tune filter intensity with a slider.
* **Reset**: Quickly remove all filters.

---

## Prerequisites

* Google Chrome (version 70 or later)
* Basic familiarity with Chrome Extensions

---

## Installation & Local Testing

1. **Clone the repository**

   ```bash
   git clone https://github.com/GiftDire/Color-filter-extension.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd Color-filter-extension
   ```

3. **Open Chrome Extensions page**

   * In Chrome’s address bar, go to `chrome://extensions/`

4. **Enable Developer mode**

   * Toggle the switch in the top-right corner so that **Developer mode** is ON.

5. **Load the unpacked extension**

   * Click **Load unpacked**
   * Select the `Color-filter-extension` folder (the one containing `manifest.json`).

6. **Pin & Test**

   * Click the puzzle-piece icon next to the address bar.
   * Find **Color Filter Extension** in the list and click the pin icon to pin it to your toolbar.
   * Navigate to any webpage, click the extension icon, choose a filter, adjust strength, and click **Apply Filter**. Use **Reset** to clear.

---

## Usage

1. Click the **Color Filter Extension** icon in the toolbar.
2. Select one of the radio options:

   * Grayscale
   * Invert Colors
   * High Contrast
3. Adjust **Filter Strength** using the slider (0–200%).
4. Click **Apply Filter** to see changes in real time.
5. Click **Reset** to remove filters and return to normal view.

---

## Development

* The popup UI is defined in `popup.html` and styled in `popup.css`.
* Behavior is implemented in `popup.js` under the `scripts/` folder.
* To see changes after editing code, hit the refresh icon on the extension card in `chrome://extensions/`.

---

## Feedback & Contributions

Feel free to open issues or pull requests for improvements, new filter types, or bug fixes.
