const getRatingStatus = (rating) => {
  const result = ``;
  switch (rating) {
    case rating <= 3:
      result = `Very bad`;
      break;
    case rating > 3 && rating <= 5:
      result = `Bad`;
      break;
    case rating > 5 && rating <= 7:
      result = `Not bad`;
      break;
    case rating > 7 && rating < 8.5:
      result = `Good`;
      break;
    case rating >= 8.5:
      result = `Very good`;
      break;
  }
  return result;
};

const Films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `adventures`,
    years: `2018`,
    description: `Nostrud et anim do nisi aute proident sunt ad. Duis eiusmod esse magna proident. Culpa nostrud sunt Lorem irure nisi. Enim nostrud in proident quis quis et do et nostrud aute ad magna qui aliqua. Ea veniam aliqua consectetur mollit id. Esse ex Lorem exercitation minim minim exercitation ut dolore laborum amet mollit.
    Dolor consequat et ex sunt tempor id amet. Culpa deserunt ex ullamco occaecat exercitation deserunt consectetur tempor aute ea. Qui quis incididunt nisi adipisicing eiusmod deserunt. Duis et officia exercitation magna consectetur ut cillum sint elit tempor commodo aliqua in consequat. Magna labore pariatur Lorem irure sunt ex velit sint consectetur minim do aliquip sunt. Esse ea incididunt magna occaecat cillum enim do.`,
    rating: 8,
    ratingStatus: getRatingStatus(8),
    qntRatings: 200,
    director: `Willie Baker`,
    starring: [`Elsie Simon`, `Ora Lee`, `Essie Davidson`, `Nettie Schwartz`, `Louise McGee`, `Katherine Hunt`]
  },

  {
    title: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `musical`,
    years: `2019`,
    description: `Culpa pariatur sunt ut veniam minim sint proident duis sunt ut nulla. Do mollit anim anim commodo labore proident ex incididunt officia adipisicing cupidatat. Ea laboris aliquip id exercitation excepteur Lorem. Eu proident dolore voluptate consectetur cillum. Eiusmod ipsum id qui aliqua sunt dolor incididunt dolore ea consectetur qui id sit. Culpa ut voluptate commodo fugiat et sit est.
    Eiusmod cupidatat esse velit nulla culpa Lorem irure in elit eiusmod culpa ad quis in. Ex laborum officia labore consequat consectetur aute. Do est sunt ipsum nisi enim dolor sint incididunt commodo id. Enim duis occaecat consequat id minim elit nostrud veniam nisi excepteur nulla velit in aliqua.`,
    rating: 7.5,
    ratingStatus: getRatingStatus(7.5),
    qntRatings: 150,
    director: `Rhoda Crawford`,
    starring: [`Flora Turner`, `Jane Rogers`, `Clara McDonald`]
  },

  {
    title: `Macbeth`,
    image: `img/macbeth.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `drama`,
    years: `2015`,
    description: `Quis do cillum elit quis mollit nulla quis voluptate est pariatur laboris consectetur voluptate. Esse ipsum laborum mollit proident occaecat exercitation. Mollit est ad exercitation consectetur quis labore commodo sunt excepteur. Dolor sunt voluptate nostrud velit ea ipsum aliqua cupidatat adipisicing. Duis magna enim dolore est ex dolor voluptate nisi est. Et pariatur minim duis voluptate tempor minim ullamco est cupidatat. Qui mollit qui tempor ullamco ipsum. Laborum adipisicing esse consectetur voluptate sit fugiat tempor officia. Adipisicing occaecat eu eu officia ullamco dolore aute fugiat culpa est. Laborum eiusmod excepteur pariatur nisi. Ut reprehenderit deserunt tempor pariatur mollit quis magna et commodo in ut aliqua non aute. Laborum consequat veniam veniam sunt ea ex incididunt pariatur. Magna aliqua in et ipsum. Occaecat ut incididunt ullamco excepteur amet nisi voluptate fugiat adipisicing reprehenderit deserunt ullamco. Fugiat irure anim sunt voluptate. Ullamco aliquip excepteur pariatur ipsum dolore ad dolore. Tempor anim mollit esse sunt velit nisi incididunt nostrud. Non incididunt ullamco cupidatat reprehenderit tempor duis et eu quis ut laborum commodo amet reprehenderit. Sunt anim sit esse amet sunt id eiusmod. Duis consequat dolor mollit cillum et ex qui qui magna adipisicing eiusmod consequat. Culpa laborum aliqua consequat Lorem consequat.`,
    rating: 6,
    ratingStatus: getRatingStatus(6),
    qntRatings: 230,
    director: `Roger Gregory`,
    starring: [`Jordan Watkins`, `Willie Powell`]
  },

  {
    title: `Aviator`,
    image: `img/aviator.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `comedy`,
    years: `2006`,
    description: `Nulla sunt esse excepteur est Lorem deserunt tempor ad sunt elit nulla. Anim dolor non enim consectetur. Tempor eu veniam deserunt et. Reprehenderit labore tempor consectetur excepteur incididunt. Dolor ipsum sunt et consectetur esse duis eiusmod. Ad adipisicing amet magna nisi ullamco reprehenderit. Ullamco occaecat occaecat sunt ad pariatur irure eu exercitation dolor enim dolore ex ea. Officia nisi aliqua ut aute enim est nostrud laboris laborum culpa enim veniam occaecat.`,
    rating: 9,
    ratingStatus: getRatingStatus(9),
    qntRatings: 185,
    director: `Jesus Allen`,
    starring: [`Hilda Robertson`, `Phillip Ball`, `Joe Fowler`, `Todd Payne`]
  },

  {
    title: `We need to talk about Kevin`,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `family`,
    years: `2016`,
    description: `Nulla anim esse velit ut ullamco aliqua mollit non mollit in consequat sit. Deserunt nisi quis labore aliquip pariatur magna reprehenderit exercitation ex aute incididunt aliquip est. Mollit ad id officia voluptate. Enim culpa minim aliquip eu. Labore elit quis in id nostrud ad elit occaecat Lorem minim. Aute esse consectetur nostrud nulla eu esse quis. Et deserunt ut ea amet sunt. In aliqua eiusmod commodo et. Mollit duis in et est excepteur ex nulla incididunt et qui anim labore enim. Est sint ad ipsum reprehenderit pariatur. Ex pariatur dolore fugiat proident pariatur qui ipsum cillum.`,
    rating: 5,
    ratingStatus: getRatingStatus(5),
    qntRatings: 320,
    director: `Leo Carson`,
    starring: [`Amy Mann`]
  },

  {
    title: `What We Do in the Shadows`,
    image: `img/what-we-do-in-the-shadows.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `others`,
    years: `2008`,
    description: `Duis est ea elit anim officia occaecat eu aliqua occaecat laboris in. Dolore est id veniam non reprehenderit sint exercitation proident voluptate culpa esse incididunt commodo consectetur. Do laboris quis commodo quis reprehenderit enim incididunt officia aliqua. Minim quis ipsum amet sit. Duis fugiat velit exercitation incididunt minim qui sit qui aute nisi est ad. Ex commodo magna cupidatat ipsum. Id exercitation laborum duis commodo elit consectetur magna cillum. Sint laboris aliquip aute aliquip consequat et sit laborum laboris quis fugiat. Ut cillum ullamco voluptate eu nostrud laboris. Commodo nisi commodo anim exercitation fugiat incididunt labore et incididunt dolor aliquip consectetur amet. In do officia cupidatat ullamco ea Lorem sit nulla. Non ea sunt ut proident. Sunt et do ipsum cillum irure elit ipsum adipisicing elit enim.`,
    rating: 6.5,
    ratingStatus: getRatingStatus(6.5),
    qntRatings: 56,
    director: `Elmer Bates`,
    starring: [`Justin Andrews`, `Cole Herrera`, `Travis McBride`, `Cecilia Shelton`]
  },

  {
    title: `Revenant`,
    image: `img/revenant.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `thriller`,
    years: `2007`,
    description: `Fugiat non proident minim irure mollit reprehenderit. Enim mollit enim elit aute esse non. Tempor ipsum proident ex eiusmod elit est laborum fugiat. Pariatur excepteur consectetur labore exercitation proident est magna. Ipsum Lorem cupidatat ex velit dolore fugiat exercitation occaecat anim. Consequat adipisicing duis duis minim nulla aute ipsum consequat ad non qui. Proident minim sit quis enim. Laborum sit non minim dolore in esse ea qui nisi. Enim officia ullamco pariatur velit. Lorem non anim labore dolor cupidatat est Lorem adipisicing quis. Nulla occaecat commodo officia laboris non deserunt id. Non laborum excepteur laboris laboris non dolore voluptate velit sint laboris veniam sit. Magna consequat ut consequat sint ipsum.`,
    rating: 4,
    ratingStatus: getRatingStatus(4),
    qntRatings: 97,
    director: `Dennis Long`,
    starring: [`Jonathan Schwartz`]
  },

  {
    title: `Johnny English`,
    image: `img/johnny-english.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `criminal`,
    years: `2009`,
    description: `Laborum tempor adipisicing ex labore non officia qui consectetur duis. Tempor velit incididunt nulla magna eu do in incididunt deserunt eu quis adipisicing eu. Duis minim nisi sunt et consequat nisi sit nulla fugiat ad sint qui id. Sit non ut et incididunt elit. Magna ex dolore esse amet magna consequat velit adipisicing qui et fugiat consectetur nulla amet. Dolor Lorem velit aliquip sint anim cupidatat occaecat dolore laborum. Laboris mollit irure duis est enim reprehenderit exercitation consequat non. Id consectetur nisi mollit elit pariatur. Id mollit veniam consectetur sint et amet non duis non exercitation. Veniam Lorem amet pariatur exercitation et culpa id. Reprehenderit tempor dolore culpa reprehenderit aute sit aliqua nulla elit do minim elit. Velit cillum exercitation elit aute non minim eu nulla aute id ea. Deserunt aliqua fugiat esse sint consequat ex eu. Occaecat sint non aliqua duis aute.`,
    rating: 5.5,
    ratingStatus: getRatingStatus(5.5),
    qntRatings: 232,
    director: `Leah Pittman`,
    starring: [`Aiden Patterson`, `Landon Weber`, `Gabriel Goodwin`]
  },

  {
    title: `Shutter Island`,
    image: `img/shutter-island.jpg`,
    bgImage: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `drama`,
    years: `2008`,
    description: `Ut Lorem incididunt ipsum adipisicing tempor. Esse est aliquip ea do mollit ex amet qui voluptate sunt. Dolore occaecat nisi aliqua laboris proident amet nulla fugiat nulla. Laborum aliquip ullamco qui sit eu reprehenderit excepteur nostrud dolor consectetur. Ea fugiat duis incididunt laboris. Sint tempor do in aute anim est. Sit minim nulla incididunt in aute quis. In culpa aliquip nisi sint cillum ad aliquip. Ad mollit reprehenderit dolor ex. Cupidatat qui mollit ea duis proident deserunt sunt ex laborum magna. Sunt ad exercitation ad culpa nostrud labore amet laborum consequat pariatur incididunt quis reprehenderit. Aliqua eu duis minim quis amet.`,
    rating: 9.5,
    ratingStatus: getRatingStatus(9.5),
    qntRatings: 300,
    director: `Kate Lyons`,
    starring: [`Eva Jordan`, `Margaret Yates`, `Aiden Wong`, `Bradley Myers`]
  },

];

export default Films;
