# LinuxToys Tools Update System

This system automatically updates the "Tools by Category" section of the website by fetching data from the LinuxToys repository.

## How it works

1. **GitHub Workflow** (`.github/workflows/update-tools.yml`): 
   - Triggers on manual dispatch, repository dispatch events, or daily schedule
   - Runs the data processing script
   - Commits any changes to the cache

2. **Data Processor** (`.github/scripts/update-tools.js`):
   - Fetches the latest LinuxToys repository data via GitHub API
   - Processes script metadata and category information
   - Handles translations for multiple languages
   - Generates cached data files in the `cache/` directory

3. **Client-side Loader** (`js/tools-loader.js`):
   - Loads cached data on page load
   - Updates the tools section dynamically
   - Handles language switching
   - Falls back to static content if cache is unavailable

## Cache Files

- `cache/categories.json`: Raw category and tool data
- `cache/translations.json`: Translation mappings from LinuxToys
- `cache/translated-categories.json`: Pre-translated data for all supported languages
- `cache/summary.json`: Metadata about the cache (last updated, counts, etc.)

## Manual Trigger

To manually update the tools data:

1. Go to the Actions tab in GitHub
2. Select "Update Tools Categories" workflow
3. Click "Run workflow"

## Automatic Updates

The system automatically checks for new LinuxToys releases daily at 6 AM UTC. When a new release is detected, it will update the tools cache.

## Language Support

The system supports all languages that LinuxToys supports:
- English (en)
- Portuguese (pt)
- Spanish (es)
- French (fr)
- German (de)
- Chinese (zh)
- Japanese (ja)
- Russian (ru)

## Fallback Behavior

If the cache is unavailable or fails to load, the website will fall back to the static tools list in `index.html`. This ensures the site always works even if the update system is temporarily unavailable.
