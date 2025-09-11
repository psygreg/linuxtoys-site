# LinuxToys Website

The official website for LinuxToys - a collection of tools for Linux in a user-friendly way to make your life on Linux easier than ever.

![LinuxToys](elements/linuxtoys.png)

## 🚀 Features

### Auto-Sync Tool Lists
The website now automatically fetches and displays the latest tools directly from the main LinuxToys repository:
- ✅ **Always Up-to-Date**: No more manual maintenance of tool lists
- ✅ **Real-Time Data**: Pulls actual tool information from GitHub
- ✅ **Zero Maintenance**: Automatically reflects repository changes
- ✅ **Fallback Ready**: Gracefully handles API downtime

### Original Features
- **Responsive Design**: Works perfectly on all devices
- **Multi-language Support**: English and Portuguese translations
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized performance with intelligent caching

## 🛠 How It Works

The website uses the GitHub API to automatically sync with the main [LinuxToys repository](https://github.com/psygreg/linuxtoys):

1. **Fetches Categories**: Reads the actual folder structure from `p3/scripts/`
2. **Parses Metadata**: Extracts tool information from script headers and category files
3. **Updates Display**: Dynamically generates the tool grid with real data
4. **Smart Caching**: Caches API responses to ensure fast loading and respect rate limits

## 📁 Project Structure

```
linuxtoys.github.io/
├── index.html              # Main website
├── status.html             # Sync system monitoring dashboard  
├── js/tools-sync.js        # Auto-sync functionality
├── elements/               # Images and assets
├── AUTO_SYNC_README.md     # Detailed technical documentation
└── README.md              # This file
```

## 🔧 Monitoring

Visit [status.html](status.html) to monitor the auto-sync system:
- Real-time sync status
- GitHub API health check
- Cache statistics
- Manual testing tools
- Activity logs

## 🏗 For Developers

### Testing Locally
1. Clone this repository
2. Open `index.html` in a web browser
3. Check browser console for sync status
4. Use `status.html` for detailed monitoring

### API Usage
The system uses GitHub's Contents API with intelligent caching:
- 60 requests/hour limit (unauthenticated)
- 30-minute cache per endpoint
- ~20-30 requests per full update
- Automatic retry on failures

### Manual Sync Testing
```javascript
// Test the sync system in browser console
window.linuxToysSync.updateWebsite();
```

