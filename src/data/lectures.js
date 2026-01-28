const lectures$ = [
  {
    lecturesTitle: "شرح كتاب الداء و الدواء",
    thumbnail: `/images/book images/الداءوالدواء.png`,
    lectures: [
      {
        title: " المحاضرة الأولى",
        link: `https://www.youtube.com/embed/4WhaHIMN6bQ`,
      },
      {
        title: " المحاضرة الثانية",
        link: `https://www.youtube.com/embed/d4Vjmb4CnyE`,
      },
      {
        title: " المحاضرة الثالثة",
        link: `https://www.youtube.com/embed/4XLaugLe1c8`,
      },
      {
        title: " المحاضرة الرابعة",
        link: `https://www.youtube.com/embed/Cg1h4qwXJVY`,
      },
      {
        title: " المحاضرة الخامسة",
        link: `https://www.youtube.com/embed/ET9WeLdgD7Y`,
      },
      {
        title: " المحاضرة السادسة",
        link: `https://www.youtube.com/embed/OCmiXKVu3Iw`,
      },
    ],
  },
  {
    lecturesTitle: "شرح مقدمة سنن ابن ماجه",
    thumbnail: `/images/book images/سنن_ابن_ماجة.jpg`,
    lectures: [
      {
        title: "المحاضرة الأولى من شرح مقدمة سنن ابن ماجه",
        link: `https://www.youtube.com/embed/6PWELCXleAo`,
      },
      {
        title: "المحاضرة الثانية من شرح مقدمة سنن ابن ماجه",
        link: `https://www.youtube.com/embed/GgMZ_b5j0_Y`,
      },
      {
        title: "المحاضرة الثالثة من شرح مقدمة سنن ابن ماجه",
        link: `https://www.youtube.com/embed/79rogv-qwKo`,
      },
      {
        title: "المحاضرة الرابعة من شرح مقدمة سنن ابن ماجه",
        link: `https://www.youtube.com/embed/ksSgF9SSsxY`,
      },
    ],
  },
  //   add lectures according to this format
  //   {
  //     lecturesTitle: "شرح مقدمة سنن ابن ماجه",
  //       thumbnail:`/images/book images/bookname`
  //     lectures: [
  //       {
  //         title: " المحاضرة الأولى",
  //         link: ``,
  //       },
  //     ],
  //   },
];
let Lscounter = 0,
  Lcounter = 0;
const lectures = lectures$.map((lecture) => {
  return {
    id: Lscounter++,
    lecturesTitle: lecture.lecturesTitle,
    thumbnail: lecture.thumbnail,
    lectures: lecture.lectures.map((lecture) => {
      return {
        id: Lcounter++,
        title: lecture.title,
        link: lecture.link,
      };
    }),
  };
});
export default lectures;
