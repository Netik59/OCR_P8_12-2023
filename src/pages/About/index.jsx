import '../../utils/style/main.css'
import '../../utils/style/about.css'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import img_src_2 from '../../assets/img_src_2.svg'

function About() {
  return (
    <div>
      <Banner imgSrc={img_src_2} titleContent="" />
      <Collapse />
    </div>
  )
}

export default About
