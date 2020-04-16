import React, {Fragment} from 'react'
import s from "../stylesheets/footer.module.css";
import twitter_rev from "../img/twitter_inverse.png";
import instagram_rev from "../img/instagram_inverse.png";
import facebook_rev from "../img/facebook_inverse.png";

export const FooterComponent = () => {
    return (
        <Fragment>
            <div className={s.footerDesktop}>
                <div className={s.links}>
                    <a href={'/'}> Home </a>
                    <a href={'https://allvirusdisinfection.com/corona'}> COVID-19 </a>
                    <a href={'https://allvirusdisinfection.com/busines-services'}> Business </a>
                    <a href={'https://allvirusdisinfection.com/home-services'}> Residential </a>
                    <a href={'https://allvirusdisinfection.com/medical-disinfection'}> Medical </a>
                    <a href={'https://allvirusdisinfection.com/offers'}> Offers </a>
                    <a href={'https://allvirusdisinfection.com/about-us'}> About us </a>
                    <a href={'https://allvirusdisinfection.com/contacts'}> Contacts </a>
                </div>
                <div className={s.social}>
                    <p> neowebm@gmail.com </p>
                    <a href={'https://twitter.com'} target={'blank'}> <img src={twitter_rev} alt={'twl'}/> </a>
                    <a href={'https://instagram.com'} target={'blank'}><img src={instagram_rev} alt={'inl'}/></a>
                    <a href={'https://facebook.com'} target={'blank'}><img src={facebook_rev} alt={'fbl'}/></a>
                </div>
                <div className={s.footerPhone}>
                    <a href="tel:+1234567890"> +1(234)567-890 </ a>
                </div>
            </div>
            <div className={s.footerMobile}>
                <div className={s.links}>
                    <a href={'/'}> Home </a>
                    <a href={'https://allvirusdisinfection.com/corona'}> COVID-19 </a>
                    <a href={'https://allvirusdisinfection.com/busines-services'}> Business </a>
                    <a href={'https://allvirusdisinfection.com/home-services'}> Residential </a>
                    <a href={'https://allvirusdisinfection.com/medical-disinfection'}> Medical </a>
                    <a href={'https://allvirusdisinfection.com/offers'}> Offers </a>
                    <a href={'https://allvirusdisinfection.com/about-us'}> About us </a>
                    <a href={'https://allvirusdisinfection.com/contacts'}> Contacts </a>
                </div>
                <div className={s.social}>
                    <a href={'https://twitter.com'} target={'blank'}> <img src={twitter_rev} alt={'twl'}/> </a>
                    <a href={'https://instagram.com'} target={'blank'}> <img src={instagram_rev} alt={'inl'}/></a>
                    <a href={'https://facebook.com'} target={'blank'}> <img src={facebook_rev} alt={'fbl'}/></a>
                </div>
                <div className={s.email}>
                    <p> neowebm@gmail.com </p>
                    <a href="tel:+1234567890"> +1(234)567-890 </ a>
                </div>
            </div>
        </Fragment>
    )
}
