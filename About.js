import aboutpic from './about.jpeg' 
import pic2 from './me.jpeg'
import "./about.css"

function About() {
  return (
    <>
        <div className="logo1">
            <img src={aboutpic} />
        </div>
        <div className="developer">
            <div className="pic">
                <img src={pic2} />
            </div>
            <div className="para">
                <p>
                Hi! I am Bhavik sood, Welcome to my WallpaperHub.com. I'm Btech student from Computer Science Department. I was born and raised in Chandigarh.
                Currently, I am doing B.E. in Computer Science from Chitkara University. I am a front-end developer. After graduation I want to pursue higher education by doing masters in USA.
                Explore the collection of Wallpapers and Experience the Best Quality. 
                
                </p>
            </div>
        </div>
    </>
  )
}

export default About