import '../../utils/style/main.css'
import '../../utils/style/about.css'
import Banner from '../../components/banner/Banner'
import Collapse from '../../components/Collapse'
import img_src_2 from '../../assets/img_src_2.svg'
import data from '../../data/about.json'

function About() {
  return (
    <div className="div__about">
      <Banner imgSrc={img_src_2} titleContent="" />
      {data.map((item, index) => (
        <Collapse
          key={index}
          title={item.title}
          content={<p>{item.content}</p>}
          accordionClass="accordion__about"
          itemClass="item__about"
        />
      ))}
    </div>
  )
}

export default About
