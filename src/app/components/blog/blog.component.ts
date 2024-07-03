import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Post } from '../../interface/post.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  posts: Post[] = [
    {
      id: '1',
      title: 'First Post - Hello World!',
      subtitle: 'And so the journey begins',
      imgUrl:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/3c/dd/62.jpg',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil expedita deserunt minima, consectetur alias architecto eum, est perspiciatis iusto, possimus sit ex laborum earum rem vel laboriosam. Laborum, veritatis minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      date: '2024/05/08',
    },
    {
      id: '2',
      title: 'Where to begin',
      subtitle: 'Lost in the way',
      imgUrl:
        'https://www.molaviajar.com/wp-content/uploads/2016/06/golden-gate-por-la-noche-foto.jpg',
      content:
        'Quaerat vel magni nihil odio sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias veritatis minus beatae accusamus fugiat nostrum corporis sit accusantium itaque ad, labore sunt iusto, debitis placeat distinctio praesentium!',
      date: '2024/06/14',
    },
  ];

  onSubmittingForm(formData: NgForm): void {
    let datosFormulario = formData.value;
    let validation: boolean = true;
    let errorTxt: string =
      'Form must be fully filled. It is missing the next fields: ';

    for (const key in datosFormulario) {
      if (datosFormulario[key] === '') {
        errorTxt += ` ${key},`;
        validation = false;
      }
    }

    if (!validation) {
      errorTxt = errorTxt.replace(/\,$/, '.');
      alert(errorTxt);
      return;
    }

    datosFormulario.id = this.posts.length;
    datosFormulario.date = new Date()
      .toISOString()
      .replace(/T.+$/, '')
      .replace(/-/g, '/');
    this.posts.push(datosFormulario);
    formData.resetForm();
  }
}
