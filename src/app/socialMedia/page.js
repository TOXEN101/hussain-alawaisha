"use client"
import socialMedia from "@/data/social media";
export default function SocialMedia(){

  const socialMediaElements= socialMedia.map((p)=>{
    return(
      <div key={p.id} onClick={()=>{window.open(p.link)}} className="social-media-item">
        <img src={p.img}></img>
        <h3>{p.platform}</h3>
      </div>
    )
  })

    return (
      <>
      <div className=" about-site">
        <h1 className="section-title">منصات خدمة علم الشيخ حسين العوايشة</h1>
      </div>
      <div className="social-grid">

      {socialMediaElements}
      </div>
      </>
    );
}