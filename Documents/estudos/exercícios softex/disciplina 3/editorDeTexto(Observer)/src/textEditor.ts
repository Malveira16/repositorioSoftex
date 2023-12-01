import { Editor } from "./Editor";
import { iObserver } from "./iObserver";
class TextEditor implements iObserver {
    private lines: string[] = [];
    private editor: Editor;
  
    constructor(editor: Editor) {
      this.editor = editor;
      this.editor.addObserver(this);
    }
  
    update(): void {
      console.log('Editor atualizado. Conteúdo:', this.lines.join('\n'));
    }
  
    insertLine(lineNumber: number, text: string): void {
      if (lineNumber >= 0 && lineNumber <= this.lines.length) {
        this.lines.splice(lineNumber, 0, text);
        this.notifyEditor();
      } else {
        console.log('Número de linha inválido.');
      }
    }
  
    removeLine(lineNumber: number): void {
      if (lineNumber >= 0 && lineNumber < this.lines.length) {
        this.lines.splice(lineNumber, 1);
        this.notifyEditor();
      } else {
        console.log('Número de linha inválido.');
      }
    }
  
    private notifyEditor(): void {
      this.editor.notifyObservers('ContentChanged');
    }
  
    openFile(lines: string[]): void {
      this.lines = [...lines];
      this.notifyEditor();
    }
  
    saveFile(): void {
      console.log('Conteúdo salvo no arquivo.');
    }
  }