import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  
})
export class MovieComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  movieName: string = '';
  rating: number | null = null;
  review: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient,private firestoreService: AuthService) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }
  
  addDocument(): void {
   
    if (this.movieName && this.rating && this.review) {
      const document = {
        movieName: this.movieName,
        rating: this.rating,
        review: this.review
      };

      this.firestoreService.addDocument('movieRating', document).then(() => {
        console.log('Document added');
        this.resetForm();
      }).catch(error => {
        console.error('Error adding document: ', error);
      });
    } else {
      console.error('All fields are required');
    }
  }

  
resetForm(): void {
  this.movieName = '';
  this.rating = null;
  this.review = '';
}
}