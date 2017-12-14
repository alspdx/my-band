// BACK END

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
albumsArray.push(new Album("Smashing Pumpkins", "Loveless", "https://e.snmc.io/lk/l/l/fb067570228587f6f47adf927cf0852f/3542621.jpeg", "", "Loveless is the second studio album by Irish rock band My Bloody Valentine, released on 4 November 1991 by Creation Records. The album was recorded over a two-year period between 1989 and 1991. Vocalist and guitarist Kevin Shields dominated the arduous recording process; intent on achieving a particular sound, he experimented with texturised guitar tremolo techniques and tuning systems, sampled feedback and percussion, obscured vocals, and unconventional production methods. The group cycled through nineteen studios and a larger number of engineers during the album's two-year creation, with total recording costs rumoured to have reached £250,000."));
albumsArray.push(new Album("Sonic Youth", "Loveless", "https://e.snmc.io/lk/l/l/fb067570228587f6f47adf927cf0852f/3542621.jpeg", "", "Loveless is the second studio album by Irish rock band My Bloody Valentine, released on 4 November 1991 by Creation Records. The album was recorded over a two-year period between 1989 and 1991. Vocalist and guitarist Kevin Shields dominated the arduous recording process; intent on achieving a particular sound, he experimented with texturised guitar tremolo techniques and tuning systems, sampled feedback and percussion, obscured vocals, and unconventional production methods. The group cycled through nineteen studios and a larger number of engineers during the album's two-year creation, with total recording costs rumoured to have reached £250,000."));
albumsArray.push(new Album("White Zombie", "Astro Creep: 2000", "https://www.amoeba.com/sized-images/max/500/500/uploads/albums/covers/by_title/A/WhiteZombie_AstroCreep.jpg", "", 'Astro-Creep: 2000 – Songs of Love, Destruction and Other Synthetic Delusions of the Electric Head (or simply Astro-Creep: 2000) is the fourth and final studio album by White Zombie, released on April 11, 1995 by Geffen Records. The album proved to be their most commercially successful recording, peaking at number six on the Billboard 200 with the aid of the popular hit singles "More Human than Human" and "Super-Charger Heaven". It was the band\'s only album to feature John Tempesta on drums.'));
albumsArray.push(new Album("Abba", "Loveless", "https://e.snmc.io/lk/l/l/fb067570228587f6f47adf927cf0852f/3542621.jpeg", "", "Loveless is the second studio album by Irish rock band My Bloody Valentine, released on 4 November 1991 by Creation Records. The album was recorded over a two-year period between 1989 and 1991. Vocalist and guitarist Kevin Shields dominated the arduous recording process; intent on achieving a particular sound, he experimented with texturised guitar tremolo techniques and tuning systems, sampled feedback and percussion, obscured vocals, and unconventional production methods. The group cycled through nineteen studios and a larger number of engineers during the album's two-year creation, with total recording costs rumoured to have reached £250,000."));

// BACK END FUNCTIONS-----------------------#####

// ALPHABETIZE ARRAY
function alphabetizeArray(array) {
  array.sort(function(a, b) {
    if (a.artist < b.artist)
      return -1;
    if (a.artist > b.artist)
      return 1;
    return 0;
  })
}

// SHUFFLE ARRAY
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function albumCardOutput() {
  shuffleArray(albumsArray);
  albumsArray.map(function(album) {
    $(".main").append('<div class="album-card">' +
                         '<div class="album-art">' +
                           '<img class="album-cover" src="' + album.art + '" alt="' + album.artist + ': ' + album.title + '">' +
                         '</div>' +
                         '<div class="album-info">' +
                           '<div class="album-info-title">' +
                             '<span class="album-artist">' + album.artist + '</span>' +
                             '<span class="album-title">' + album.title + '</span>' +
                           '</div>' +
                           '<div class="album-info-content">' +
                            //  '<span class="album-rating">' + album.rating + '</span>' +
                             '<span class="album-cover album-cover-image">' +
                                '<img class="album-info-image" src="' + album.art + '" alt="' + album.artist + ': ' + album.title +'">' +
                             '</span>' +
                           '</div>' +
                         '</div>' +
                       '</div>'
                     );
  });
}

// Front End Logic
$(function() {

  albumCardOutput();

  $('.artists-menu').hover(function() {
    alphabetizeArray(albumsArray);
    $('.artist-click').remove();
    albumsArray.map(function(album) {
      $('.artists-dropdown').append('<li class="artist-click">' + album.artist + '</li>');
    });
  })

  $('.album-input').submit(function(event) {
    event.preventDefault();
    var albumArtist = $('input#artist').val();
    var albumTitle = $('input#title').val();
    var albumArt = $('input#art').val();
    var albumRating = $('input#rating').val();
    var albumInfo = $('input#info').val();

    var newAlbum = new Album(albumArtist, albumTitle, albumArt, albumRating, albumInfo);
    albumsArray.push(newAlbum);

    $('.album-card').remove();
    albumCardOutput();

  });
});
