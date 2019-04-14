import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  constructor() { 
    console.log(this.surveyData[2]);
  }

  ngOnInit() {
  }

  surveyData = [
    {
      "id": "5cb2ad0eeaeccf2822256ef9",
      "index": 0,
      "age": 27,
      "name": "Gillespie",
      "gender": "male",
      "favoriteFruit": "honeydew melon",
      "favoriteColor": "orange"
    },
    {
      "id": "5cb2ad0e3127d1c603d15a34",
      "index": 1,
      "age": 41,
      "name": "Marilyn",
      "gender": "female",
      "favoriteFruit": "jackfruit",
      "favoriteColor": "salmon"
    },
    {
      "id": "5cb2ad0ee19fc8ad9781a62e",
      "index": 2,
      "age": 31,
      "name": "Cathy",
      "gender": "female",
      "favoriteFruit": "dragon fruit",
      "favoriteColor": "indigo"
    },
    {
      "id": "5cb2ad0e2d35612568a29faf",
      "index": 3,
      "age": 42,
      "name": "Joyce",
      "gender": "female",
      "favoriteFruit": "apple",
      "favoriteColor": "maroon"
    },
    {
      "id": "5cb2ad0e29165105c1378d30",
      "index": 4,
      "age": 26,
      "name": "Sheree",
      "gender": "female",
      "favoriteFruit": "grape",
      "favoriteColor": "crimson"
    }
  ]

  fruits = [
      "apple", "banana", "cherry", "dragon fruit",
      "fig", "grape", "honeydew melon", "jackfruit",
      "kiwi", "lychee", "mango", "orange"];

  colors = [
    "aqua", "aquamarine", "azure", "beige", "bisque", "black",
    "blue", "brown", "burlywood", "chartreuse", "chocolate",
    "coral", "cornsilk", "crimson", "cyan", "firebrick",
    "fuchsia", "gainsboro", "gold", "goldenrod", "gray",
    "green", "honeydew", "indigo", "ivory", "khaki", "lavender",
    "lime", "linen", "magenta", "maroon", "moccasin", "olive",
    "orange", "orchid", "peru", "pink", "plum", "purple", "red",
    "salmon", "seashell", "sienna", "silver", "snow", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat",
    "white", "yellow"];
  
  genders = ["male", "female", "other"];
  
  id = this.surveyData[1].id;
  index = this.surveyData[1].index;
  name = this.surveyData[1].name;
  // age = Math.floor(Math.random() * 60) + 18;
  // gender = this.genders[Math.floor(Math.random() * this.genders.length)];
  // favoriteFruit = this.fruits[Math.floor(Math.random() * this.fruits.length)];
  // favoriteColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  age = this.surveyData[1].age;
  gender = this.surveyData[1].gender;
  favoriteFruit = this.surveyData[1].favoriteFruit;
  favoriteColor = this.surveyData[1].favoriteColor;



}
