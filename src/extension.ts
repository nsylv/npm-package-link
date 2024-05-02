// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "npm-package-link.openNpm",
    async () => {
      const editor = await vscode.window.activeTextEditor;

      if (!editor) {
        return;
      }

      const selection = editor.selection;

      if (!selection) {
        return;
      }

      const selectedText = editor.document.getText(selection);

      vscode.env.openExternal(
        vscode.Uri.parse(`https://www.npmjs.com/package/${selectedText}`)
      );
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
