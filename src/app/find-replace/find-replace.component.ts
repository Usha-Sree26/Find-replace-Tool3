import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-replace',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './find-replace.component.html',
  styleUrls: ['./find-replace.component.css']
})
export class FindReplaceComponent {
  findAndReplace(textArea: HTMLTextAreaElement, findText: string, replaceText: string) {
    const text = textArea.value;
    const updatedText = text.split(findText).join(replaceText);
    textArea.value = updatedText;
  }
}
