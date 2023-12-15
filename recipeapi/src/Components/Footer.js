import '../styles/Footer.css';

const Footer = () => {

const currentTimeline = new Date()
const timeline = currentTimeline.getFullYear()

return(
<div>

<div className="flex flex-col md:mx-20 items-center text-[#ffffff] mt-10 ">
        Copyright©Kincaid{timeline}: || All rights reserved
      </div>

</div>
)
}
export default Footer;