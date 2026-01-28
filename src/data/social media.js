const socialMedia$ = [
  {
    platform: "فيسبوك",
    link: `https://web.facebook.com/profile.php?id=100091333267737`,
    img: `/images/social/facebook.png`,
  },
  {
    platform: "انستاجرام",
    link: `https://www.instagram.com/hussien_bin_odeh/`,
    img: `/images/social/instagram.png`,
  },
  {
    platform: "اكس(تويتر)",
    link: `https://x.com/hussienawayshe`,
    img: `/images/social/x.png`,
  },
  {
    platform: "يوتيوب",
    link: `https://youtube.com/@HussienAlawaysheh`,
    img: `/images/social/youtube.png`,
  },
  {
    platform: "تيليجرام",
    link: `https://t.me/droos_sheikh_hussein`,
    img: `/images/social/telegram.png`,
  },
  {
    platform: "واتساب",
    link: `https://chat.whatsapp.com/BXys4PrbzHe9NGiKgblcvG`,
    img: `/images/social/whatsapp.png`,
  },
  // follow this format
  // {
  //     platform:"",
  //     link:``,
  //     img:`/images/social/`
  // },
];
let counter=0;
const  socialMedia = socialMedia$.map((p)=>{
    return{
        id:counter++,
        platform:p.platform,
        link:p.link,
        img:p.img
    }
})
export default socialMedia;