import React, {Fragment} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import s from '../stylesheets/mainpage.module.css'
import man_banner from '../img/man_banner.png'
import sprayer from '../img/sprayer.png'
import coronaImg from '../img/coronaImg.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import com_service from '../img/com_service.jpg'
import res_service from '../img/res_service.jpg'
import md_service from '../img/md_service.jpg'
import {FooterComponent} from "./footer";
import {HeaderContainer} from "../containers/HeaderContainer";

export const HomePage = (props) => {
    return (
        <Fragment>
            <HeaderContainer/>

            <div className={s.mainPageDesktop}>

                <hr className={s.boldLine}/>
                <div className={s.banner}>
                    <img src={man_banner} alt={'banner_man'}/>
                    <h1> Disinfection Service<br/> Kills 99.9% Of Bacteria and
                        Viruses </h1>
                    <h2> Call us now! </h2>
                    <h3 onClick={() => {
                        window.open('tel:+1234567890', '_parent')
                    }}> +1(234)567-890 </h3>
                </div>
                <hr className={s.boldLine}/>

                <div className={s.content}>
                    <div className={s.entryCoronaBlock}>
                        <div className={s.startCovidBlock}>
                            <h2>WE SAVE LIVES DURING</h2>
                        </div>
                        <div className={s.covidTxt}>
                            <h2>
                                COVID-19
                            </h2>
                        </div>
                        <div className={s.endCovidBlock}/>
                    </div>
                    <div className={s.coronaEntryInfo}>
                        <h3>
                            WE DROPPED ALL FORCES TO HELP TO RELEASE THE PANDEMIC
                        </h3>
                        <p>
                            With the recent outbreak of COVID-19, a proffecional sanitizing and sisinfecting cleaning
                            helps you ensure a safe environment for YOUR FAMILY, YOUR WORKERS and remove any
                            uncertainties.
                        </p>
                    </div>
                    <div className={s.coronaInfoTable}>
                        <table>
                            <tr>
                                <th>
                                    DISINFECTION AND STERILIZING SEVICES WE OFFER:
                                </th>
                                <th>
                                    APPLICATION METHOD:
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <ul>
                                        <li> Coronavirus ( COVID-19) disinfection Service</li>
                                        <li> Residential & commercial spray services</li>
                                        <li> Computers and wires system *</li>
                                        <li> Steam cleaning for carpets, area rugs and Oriental carpets</li>
                                        <li> Steam cleaning for upholstery</li>
                                        <li> Carpet and drapery steam cleaning</li>
                                        <li> Floor disinfecting and sterilizing services</li>
                                        <li> Tile and grout disinfecting</li>
                                        <li> HVAC spray services</li>
                                        <li> And more</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Ultra-Low Volume (ULV) Misting Machines</li>
                                        <li>Fogger Machines</li>
                                        <li> Electrostatic Sprayers</li>
                                        <li>Steam Cleaners</li>
                                        <li>Microfiber Wipes</li>
                                        <li>HEPA Vacuum System</li>
                                    </ul>
                                    <a className={s.callUsButton} href={'https://allvirusdisinfection.com/contacts'}>
                                        CALL US NOW
                                    </a>
                                    <a className={s.knowMoreButton} href={'https://allvirusdisinfection.com/contacts'}>
                                        KNOW MORE...
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <h2> The best disinfectiion in NY. </h2>
                    <hr className={s.line}/>
                    <div className={s.sprayer}>
                        <p>
                            All Virus Disinfection inc is a trusted leader in the decontamination industry and employs
                            certified technicians who provide expert cleanup services for coronavirus (COVID-19)
                            disinfection, and regularly disinfects for bloodborne pathogens, viruses and bacteria such
                            as HIV, Hepatitis, MRSA, and many others.
                        </p>
                        <table>
                            <th colSpan={2}>Why Choose Us?</th>
                            <tr>
                                <td>
                                    <ul>
                                        <li>
                                            Proper Training
                                        </li>
                                        <li>
                                            Prevention of Cross Contamination
                                        </li>
                                        <li>
                                            Broad Spectrum Disinfection
                                        </li>
                                        <li>
                                            HEPA Filtered Vacuums
                                        </li>
                                        <li>
                                            OSHA Compliance
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <img src={sprayer} alt={'sprayer'}/>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={s.servecesHeadline}>
                        <h2>Services</h2>
                        <hr className={s.line}/>
                    </div>
                    <div className={s.services}>
                        <div style={{gridArea: 'rs'}} className={s.servicesBlock}>
                            <div>
                                <p>Resedential</p>
                            </div>
                            <img src={res_service} alt={'rs'}/>
                            <ul>
                                <li> Home and office disinfection and sterilizing</li>
                                <li> Furniture cleaning</li>
                                <li> Mattress cleaning</li>
                                <li> Carpet and rug cleaning</li>
                                <li> Air duct cleaning</li>
                                <li> Tile and grout cleaning</li>
                                <li> Hardwood floor cleaning</li>
                            </ul>
                            <p className={s.button}> Click to view more... </p>
                        </div>
                        <div style={{gridArea: 'ms'}} className={s.servicesBlock}>
                            <div>
                                <p>Medical</p>
                            </div>
                            <img src={md_service} alt={'md'}/>
                            <ul>
                                <li> Doctors' offices</li>
                                <li> Dentists' offices</li>
                                <li> Medical laboratories</li>
                                <li> Hospitals</li>
                                <li> Medical clinics</li>
                                <li> Surgical suites</li>
                                <li> Medical/Office complexes</li>
                                <li> Computers, wires</li>
                            </ul>
                            <p className={s.button}> Click to view more... </p>
                        </div>
                        <div style={{gridArea: 'cs'}} className={s.servicesBlock}>
                            <div>
                                <p>Commercial</p>
                            </div>
                            <img src={com_service} alt={'cs'}/>
                            <ul>
                                <li> Disinfection and sterilizing</li>
                                <li> Furniture cleaning</li>
                                <li> Mattress cleaning</li>
                                <li> Carpet and rug cleaning</li>
                                <li> Air duct cleaning</li>
                                <li> Tile and grout cleaning</li>
                                <li> Hardwood floor cleaning and protection</li>
                            </ul>
                            <p className={s.button}> Click to view more... </p>
                        </div>
                    </div>
                    <div className={s.callUsBlock}>
                        <h2> Contact us today <br/> Stay save tommorow! </h2>
                        <img src={coronaImg} alt={'coronaImg'}/>
                    </div>
                    <div className={s.phoneBlock}>
                        <hr className={s.line}/>
                        <a href="tel:+1234567890"> +1(234)567-890 </a>
                        <hr className={s.line}/>
                    </div>
                    <div style={{height: 'auto'}}>
                        <div className={s.headline}>
                            <h2>Reviews</h2>
                            <hr className={s.line}/>
                            <p>
                                Find out what our customers think of us and make sure of our ability to provide you a
                                healthy and safe future.
                            </p>
                        </div>
                        <div className={s.reviewsList}>
                            {props.reviewsList}
                        </div>
                        <div className={s.reviewsClose}>
                            <p> Left your review about us! </p>
                            <div className={s.form}>
                                <div className={s.f1}>
                                    <input required={true}
                                           type={'text'}
                                           maxLength={'24'}
                                           placeholder={'Your name'}
                                           value={props.nameText}
                                           onChange={(e) => props.handleNameTextChange(e.target.value)}
                                    />
                                    <div className={s.starsWrapper}>
                                        <p> Rate us! </p>
                                        <StarRatingComponent
                                            className={s.stars}
                                            name="reviewRate"
                                            emptyStarColor={'#010066'}
                                            starCount={5}
                                            value={props.rate}
                                            onStarClick={props.handleRateChange}
                                        />
                                    </div>
                                </div>
                                <textarea maxLength={'240'}
                                          placeholder={'Your review...'}
                                          value={props.reviewText}
                                          onChange={(e) => props.handleReviewTextChange(e.target.value)}
                                />
                                <button onClick={() => props.sendReview()}> Send!</button>
                            </div>
                        </div>
                    </div>
                    <div className={s.followUsBlock}>
                        <div style={{gridArea: 'discp'}}>
                            <h2> Follow us!</h2>
                            <p> Follow us on our social pages to stay updated with the latest news. </p>
                        </div>
                        <a href={'https://twitter.com'} target={'blank'} style={{gridArea: 'tw'}}>
                            <img src={twitter} alt={'twl'}/>
                        </a>
                        <a href={'https://instagram.com'} target={'blank'} style={{gridArea: 'inst'}}>
                            <img src={instagram} alt={'inl'}/>
                        </a>
                        <a href={'https://facebook.com'} target={'blank'} style={{gridArea: 'fb'}}>
                            <img src={facebook} alt={'fbl'}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={s.mainPageMobile}>
                <hr className={s.boldLine}/>
                <div className={s.bannerMobile}/>
                <hr className={s.boldLine}/>
                <h2> The best disinfectiion in NY. </h2>
                <p>
                    All Virus Disinfection inc is a trusted leader in the decontamination industry and employs
                    certified technicians who provide expert cleanup services for coronavirus (COVID-19)
                    disinfection, and regularly disinfects for bloodborne pathogens, viruses and bacteria such
                    as HIV, Hepatitis, MRSA, and many others.
                </p>
                <img className={s.sprayer} src={sprayer} alt={'sprayer'}/>
                <h3> Why Choose Us ?</h3>
                <div className={s.whyus}>
                    <ul>
                        <li>
                            Proper Training
                        </li>
                        <li>
                            Prevention of Cross Contamination
                        </li>
                        <li>
                            Broad Spectrum Disinfection
                        </li>
                        <li>
                            HEPA Filtered Vacuums
                        </li>
                        <li>
                            OSHA Compliance
                        </li>
                    </ul>
                </div>
                <div className={s.callUsBlock}>
                    <h2> Call us today, stay save tomorrow! </h2>
                    <hr className={s.line}/>
                    <a href="tel:+1234567890"> +1(234)567-890 </a>
                    <hr className={s.line}/>
                </div>
                <div className={s.services}>
                    <h2> Our Services </h2>
                    <div style={{gridArea: 'rs'}} className={s.servicesBlock}>
                        <div>
                            <p>Resedential</p>
                        </div>
                        <img src={res_service} alt={'rs'}/>
                        <ul>
                            <li> Home and office disinfection and sterilizing</li>
                            <li> Furniture cleaning</li>
                            <li> Mattress cleaning</li>
                            <li> Carpet and rug cleaning</li>
                            <li> Air duct cleaning</li>
                            <li> Tile and grout cleaning</li>
                            <li> Hardwood floor cleaning</li>
                        </ul>
                        <p className={s.button}> Click to view more... </p>
                    </div>
                    <div style={{gridArea: 'ms'}} className={s.servicesBlock}>
                        <div>
                            <p>Medical</p>
                        </div>
                        <img src={md_service} alt={'md'}/>
                        <ul>
                            <li> Doctors' offices</li>
                            <li> Dentists' offices</li>
                            <li> Medical laboratories</li>
                            <li> Hospitals</li>
                            <li> Medical clinics</li>
                            <li> Surgical suites</li>
                            <li> Medical/Office complexes</li>
                            <li> Computers, wires</li>
                        </ul>
                        <p className={s.button}> Click to view more... </p>
                    </div>
                    <div style={{gridArea: 'cs'}} className={s.servicesBlock}>
                        <div>
                            <p>Commercial</p>
                        </div>
                        <img src={com_service} alt={'cs'}/>
                        <ul>
                            <li> Disinfection and sterilizing</li>
                            <li> Furniture cleaning</li>
                            <li> Mattress cleaning</li>
                            <li> Carpet and rug cleaning</li>
                            <li> Air duct cleaning</li>
                            <li> Tile and grout cleaning</li>
                            <li> Hardwood floor cleaning and protection</li>
                        </ul>
                        <p className={s.button}> Click to view more... </p>
                    </div>
                </div>
                <div className={s.headline}>
                    <h2>Reviews</h2>
                    <hr className={s.line}/>
                    <p>
                        Find out what our customers think of us and make sure of our ability to provide you a
                        healthy and safe future.
                    </p>
                </div>
                <div className={s.reviewsList}>
                    {props.reviewsList}
                </div>
                <div className={s.reviewsClose}>
                    <p> Left your review about us! </p>
                    <div className={s.form}>
                        <p> Rate us! </p>
                        <StarRatingComponent
                            className={s.stars}
                            name="reviewRate"
                            emptyStarColor={'#010066'}
                            starCount={5}
                            value={props.rate}
                            onStarClick={props.handleRateChange}
                        />
                        <input required={true}
                               type={'text'}
                               maxLength={'24'}
                               placeholder={'Your name'}
                               value={props.nameText}
                               onChange={(e) => props.handleNameTextChange(e.target.value)}
                        />
                        <textarea maxLength={'240'}
                                  placeholder={'Your review...'}
                                  value={props.reviewText}
                                  onChange={(e) => props.handleReviewTextChange(e.target.value)}
                        />
                        <button onClick={() => props.sendReview()}> Send!</button>
                    </div>
                </div>

            </div>
            <FooterComponent/>
        </Fragment>
    );
};
