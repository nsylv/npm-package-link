// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  const editor = await vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  const selection = editor.selection;

  if (!selection) {
    return;
  }

  const selectedText = editor.document.getText(selection);

  console.log(selectedText);
}

// This method is called when your extension is deactivated
export function deactivate() {}
