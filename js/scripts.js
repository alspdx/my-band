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
albumsArray.push(new Album("Smashing Pumpkins", "Siamese Dream", "http://img.wennermedia.com/920-width/rs-135939-c3e829f539febb3395b3b476cecbfa6ec4017eb8.jpg", "", 'Siamese Dream is the second studio album by American rock band The Smashing Pumpkins, released on July 27, 1993 on Virgin Records. The album fused diverse influences such as shoegazing, dream pop, heavy metal and progressive rock.'));
albumsArray.push(new Album("Sonic Youth", "Goo", "https://images-na.ssl-images-amazon.com/images/I/71%2BbOXHJKHL._SL1400_.jpg", "", 'Goo is the sixth studio album by the American alternative rock band Sonic Youth. It was released by DGC Records on June 26, 1990; the album is the band\'s first on a major label after the group left Enigma Records to sign with Geffen. For the album, Sonic Youth sought to expand upon its trademark alternating guitar arrangements and the layered sound of the group\'s 1988 record Daydream Nation.'));
albumsArray.push(new Album("Sonic Youth", "Daydream Nation", "http://myvinylrevolution.com/wp-content/uploads/2016/07/sonic-youth-daydream-nation-box-set-1.jpg", "", 'Daydream Nation is the fifth studio album by American alternative rock band Sonic Youth. The band recorded the album between July and August 1988 at Greene St. Recording in New York City, and it was released in October by Enigma Records as a double album. Daydream Nation was the group\'s last record before signing to a major label.'));
albumsArray.push(new Album("White Zombie", "Astro Creep: 2000", "https://www.amoeba.com/sized-images/max/500/500/uploads/albums/covers/by_title/A/WhiteZombie_AstroCreep.jpg", "", 'Astro-Creep: 2000 – Songs of Love, Destruction and Other Synthetic Delusions of the Electric Head (or simply Astro-Creep: 2000) is the fourth and final studio album by White Zombie, released on April 11, 1995 by Geffen Records. The album proved to be their most commercially successful recording, peaking at number six on the Billboard 200 with the aid of the popular hit singles "More Human than Human" and "Super-Charger Heaven". It was the band\'s only album to feature John Tempesta on drums.'));
albumsArray.push(new Album("Abba", "Voulez Vous", "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/4e/76/1a/4e761ad6-0ebc-03a1-c4f0-4f3e87b9aad3/UMG_cvrart_00602537784424_01_RGB72_1500x1500_14UMGIM07612.jpg/1200x630bb.jpg", "", 'Voulez-Vous (Do You Want in French) is the sixth studio album by the Swedish group ABBA, released in 1979. It features a number of hits such as "Chiquitita", "Does Your Mother Know" and "I Have a Dream" and showed the group embrace disco music, which was at its peak at the time. The album peaked at No.1 in a number of countries and was one of the top five-selling albums in the UK for that year.'));

// BACK END FUNCTIONS-----------------------#####

// ADD ARTIST NAMES TO ARRAY
function makeAlbumArtistNamesArray(_array) {
  var albumArtistsArray = [];
  _array.map(function(album) {
    albumArtistsArray.push(album.artist);
  })
  return Array.from(new Set(albumArtistsArray));
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

// REPLACE WHITE SPACE WITH DASH
function spaceToDash(string) {
  return string.replace(/\s+/g, '-').toLowerCase();
}

// SHOW ONLY CLICKED ARTIST FROM ARTIST DROPDOWN LIST
function showOnly(artist) {
  var selectedArtistArray = [];
  albumsArray.map(function(album) {
    if (album.artist === artist) {
      selectedArtistArray.push(album)
      $('.album-card').remove();
      albumCardMarkup(selectedArtistArray);
    }
  })
}

// ATTACH CLICK-LISTENER TO ARTIST NAME IN DROPDOWN LIST
function attachClick() {
  $('.artists-dropdown').off('click', 'li').on('click', 'li', function() {
    showOnly($(this).text());
  })
}

// MAKE AND OUTPUT MARKUP FOR ARTIST CARDS
function albumCardMarkup(array) {
  array.map(function(album) {
    var newClass = spaceToDash(album.artist);
    $(".main").append('<div class="album-card ' + newClass +'">' +
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

function albumCardOutput(_array) {
  shuffleArray(_array);
  albumCardMarkup(_array);
}

// Front End Logic
$(function() {

  albumCardOutput(albumsArray);

  $('.artists-menu').hover(function() {
    var albumArtistNamesArray = makeAlbumArtistNamesArray(albumsArray);
    albumArtistNamesArray.sort();
    $('.artist-click').remove();
    albumArtistNamesArray.map(function(artists) {
      $('.artists-dropdown').append('<li class="artist-click">' + artists + '</li>');
    });
    attachClick();
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
