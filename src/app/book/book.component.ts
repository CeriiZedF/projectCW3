import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books: any[] = [
    {
      title: 'Hobbit',
      year: '2000',
      src: '/assets/images/hobbit.jpg'
    },
    {
      title: 'Moon',
      year: '2005',
      src: '/assets/images/moon.jpg'
    },
    {
      title: 'Harry Potter',
      year: '2010',
      src: '/assets/images/harry.jpg'
    },
    {
      title: 'Dark World',
      year: '2015',
      src: '/assets/images/dark_world.jpg'
    },
    {
      title: 'Body Woods',
      year: '2020',
      src: '/assets/images/body_woods.jpg'
    },
    {
      title: 'Shadow',
      year: '2025',
      src: '/assets/images/Shadow.jpg'
    },
    {
      title: 'Dark Souls',
      year: '2030',
      src: '/assets/images/DarkSouls.jpg'
    },
  ]

  selectedBook = this.books[0];


    onSelect(item:Object){
      
      this.selectedBook = item;
      console.log(this.selectedBook.src)
  }
}
