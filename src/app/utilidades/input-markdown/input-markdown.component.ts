import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  contenidoMarkdown='';

  inputTextArea(texto: string){
    this.contenidoMarkdown=texto;
    this.changeMarkdown.emit(texto);
  }
}
