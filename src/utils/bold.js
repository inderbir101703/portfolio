// Converts **text** markers in data strings to <strong> HTML
export const bold = str => str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
