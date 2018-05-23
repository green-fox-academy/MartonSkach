'use strict';

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;      

  constructor(authorName: string) {
    this.authorName = authorName;
    if (authorName === 'John Doe') {
      this.title = 'Lorem Ipsum';
      this.text = 'Lorem ipsum dolor sit amet.';
      this.publicationDate = '2000.05.04.';
    } else if (authorName === 'Tim Urban') {
      this.title = 'Wait but why';
      this.text = 'A popular long-form, stick-figure-illustrated blog about almost everything';
      this.publicationDate = '2010.10.10.';
    } else if (authorName === 'William Turton') {
      this.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
      this.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
      this.publicationDate = '2017.03.28.';
    }
  }
}

let johnDoe = new BlogPost('John Doe');
let timUrban = new BlogPost('Tim Urban');
let williamTurton = new BlogPost('William Turton');


console.log(`"${johnDoe.title}" titled by ${johnDoe.authorName} posted at ${johnDoe.publicationDate} \r\n - ${johnDoe.text}`);
console.log(`"${timUrban.title}" titled by ${timUrban.authorName} posted at ${timUrban.publicationDate} \r\n - ${timUrban.text}`);
console.log(`"${williamTurton.title}" titled by ${williamTurton.authorName} posted at ${williamTurton.publicationDate} \r\n - ${williamTurton.text}`);