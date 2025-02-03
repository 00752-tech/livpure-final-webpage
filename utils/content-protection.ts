export function disableDevTools() {
  // Disable console
  if (typeof window !== "undefined") {
    const noop = () => undefined
    const DEV_TOOLS_DISABLED_MESSAGE = "Developer tools are not allowed on this site."

    // Create a dummy console
    const dummyConsole: any = {}
    for (const property in console) {
      if (typeof console[property as keyof Console] === "function") {
        dummyConsole[property] = noop
      }
    }

    try {
      // Attempt to override console
      Object.defineProperty(window, "console", {
        get: () => dummyConsole,
        configurable: false,
      })
    } catch (e) {
      // Fallback if override fails
      console.warn = noop
      console.info = noop
      console.log = noop
      console.error = noop
      console.debug = noop
    }
  }
}

