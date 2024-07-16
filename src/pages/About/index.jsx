import Banner from "../../components/Banner/Banner"
import Rules from "../../components/Rules/Rules"
import aboutImage from "../../assets/images/banner_about.png"

function About() {
    return (
      <div>
        <Banner
        image={aboutImage}
        additionalClass="banner-about"
      />
        <Rules />
      </div>
    )
  }
  
  export default About