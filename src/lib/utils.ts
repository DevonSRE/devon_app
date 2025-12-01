import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDriveUrl(url: string) {
  // Extract file ID from various Google Drive URL formats
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      const fileId = match[1];
      // return `https://drive.usercontent.google.com/download?id=${fileId}&export=view&authuser=0`;
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
      // return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }

  return url; // Return original if no pattern matches}
}
