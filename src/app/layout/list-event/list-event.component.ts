import { Component } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent {

  searchText: string = '';

  events: Event[] = [
    {
      id: 1,
      titre: 'Concert de Jazz',
      description: 'Un super concert de jazz à Paris.',
      date: new Date('2025-12-01'),
      lieu: 'Paris',
      prix: 50,
      organisateurId: 1,
      imageUrl: 'images/banner.png',
      nbplaces: 100,
      nbrLike: 0
    },
    {
      id: 2,
      titre: 'Exposition d’art',
      description: 'Découvrez les œuvres modernes.',
      date: new Date('2025-12-20'),
      lieu: 'Lyon',
      prix: 20,
      organisateurId: 2,
      imageUrl: 'images/banner.png',

      nbplaces: 50,
      nbrLike: 0
    }
   
  ];

 
  incrementLike(event: Event) {
    event.nbrLike++;
  }

  isExpired(event: Event): boolean {
    return new Date(event.date) < new Date();
  }

}
