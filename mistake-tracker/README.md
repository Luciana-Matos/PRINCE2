# PRINCE2 mistake tracker

A study page that collects every wrong answer from my PRINCE2 7 Foundation mock tests and shows where the mistakes cluster: by topic, by test and by type of error.

Open `index.html` in a browser, or the GitHub Pages version if Pages is turned on for this repo.

## What it does

- **Heatmap**: mistakes per topic in each mock test, with a trend from the first to the latest test.
- **Left to fix**: starts at the total for each topic and goes down when you answer a question correctly in quiz mode.
- **Type of error**: each mistake is tagged with why it happened (wrong timing, umbrella term, look-alike term and so on). Click a type to filter.
- **Cards**: click one to see the full question, your pick, the correct answer and why.
- **Quiz mode**: hides the answers. Pick an option to check it. Cards without saved options let you self-check with "I knew it" / "Not yet".
- **Progress is saved** in your browser, so it's still there next time you open the page on the same device.

## Logging a new mock test

**Option 1: in the page**

1. Click **Add question** and fill in the test name (for example `MT5`), the question number, topic and type of error. Add the question, options, your pick and the correct answer if you want to quiz yourself on it.
2. New questions are saved in your browser straight away.
3. To make them permanent (and visible on other devices), open **Data** → **Export questions.js**, and replace `mistake-tracker/questions.js` in the repo with the downloaded file. Then click **Discard my unsaved edits** so the browser copy and the file don't double up.

**Option 2: with Claude**

Paste your new mock test results into a chat with Claude and ask for them to be added to the tracker. Or use **Data** → **Copy my new questions as JSON** and paste that.

## Files

- `index.html`: the page.
- `questions.js`: the question data. Each field is explained at the top of the file.

## Error types

| Type | Meaning |
| --- | --- |
| Wrong timing | Picked an earlier or later step or process |
| Umbrella term | Picked the broad term instead of the precise one |
| Look-alike term | Mixed up two similar-sounding terms |
| Wrong owner | Picked the wrong role (who approves, recommends, raises) |
| Inside vs outside | Mixed up work done by the project with work done outside it |
| True but not asked | Picked a true statement about something else |
| One wrong word | Missed the word that made an option wrong |
| Missed key word | Missed the word in the question that gives the answer |
| NOT question | Forgot the question asked for the odd one out |

Mock Test 3's picks weren't saved, so its error types are estimated (marked "est.").
