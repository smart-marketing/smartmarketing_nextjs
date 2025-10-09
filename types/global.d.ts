declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

// Ten pusty eksport jest ważny, aby plik był traktowany jako moduł.
export {};