// Custom image loader for GitHub Pages compatibility
// eslint-disable-next-line no-unused-vars
export default function customImageLoader({ src, width, quality }) {
  // Check if the src is an absolute URL
  if (src.startsWith('http')) {
    return src;
  }
  
  // For GitHub Pages deployment in production
  const prefix = process.env.NODE_ENV === 'production' ? '/mariage-tania-jr' : '';
  
  // Remove leading slash if it exists to avoid double slashes
  const path = src.startsWith('/') ? src.slice(1) : src;
  
  // Return the correct path with quality parameter if provided
  return `${prefix}/${path}${quality ? `?q=${quality}` : ''}`;
}