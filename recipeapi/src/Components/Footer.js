import '../styles/Footer.css';

const Footer = () => {

const currentTimeline = new Date()
const time = currentTimeline.getFullYear()

return(
<div>

<footer  className='footer text-center text-dark' >{time}©Copyright: ||All rights reserved</footer>

</div>
)
}
export default Footer;