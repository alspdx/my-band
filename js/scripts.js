// Back end

// Object arrays
var albumsArray = [];

// Constructor

function Album(artist, title, art, rating, info) {
  this.artist = artist;
  this.title = title;
  this.art = art;
  this.rating = rating;
  this.info = info;
}

// Stored Albums

albumsArray.push(new Album("My Bloody Valentine", "Loveless", "https://e.snmc.io/lk/l/l/fb067570228587f6f47adf927cf0852f/3542621.jpeg", "", "Loveless is the second studio album by Irish rock band My Bloody Valentine, released on 4 November 1991 by Creation Records. The album was recorded over a two-year period between 1989 and 1991. Vocalist and guitarist Kevin Shields dominated the arduous recording process; intent on achieving a particular sound, he experimented with texturised guitar tremolo techniques and tuning systems, sampled feedback and percussion, obscured vocals, and unconventional production methods. The group cycled through nineteen studios and a larger number of engineers during the album's two-year creation, with total recording costs rumoured to have reached £250,000."));

// Back End Functions

// ALPHABETIZE
// function alphabetize(array) {
//   array.sort(function(a, b) {
//     if (a.artist < b.artist)
//       return -1;
//     if (a.artist > b.artist)
//       return 1;
//     return 0;
//   })
// }

function albumCardOutput() {
  albumsArray.map(function(album) {
    $(".main").append()//code for card here
  });
}





// Front End Logic
$(function() {
  albumsArray.map(function(album) {
    $('.artists-dropdown').append('<li class="artist-click">' + album.artist + '</li>');
  });


  $('.album-input').submit(function(event) {
    event.preventDefault();
    var albumArtist = $('input#artist').val();
    var albumTitle = $('input#title').val();
    var albumArt = $('input#art').val();
    var albumRating = $('input#rating').val();
    var albumInfo = $('input#info').val();

    var newAlbum = new Album(albumArtist, albumTitle, albumArt, albumRating, albumInfo);
    albumsArray.push(newAlbum);

  });
});
