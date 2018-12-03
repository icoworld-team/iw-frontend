export const isPrintableChar = (event: any) => event.key.length === 1/* || event.key === "Backspace"*/;

export const isCtrlOrCmd = (event: any) => event.ctrlKey || event.metaKey;

export const isSpace = (event: any) => event.key === " ";