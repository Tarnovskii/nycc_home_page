import React, {Fragment} from 'react'
import s from "../stylesheets/header.module.css";
import logo from "../img/logo.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import menuButton from '../img/mobile_menu_icon.png'

export const HeaderComponent = (props) => {
    return (
        <Fragment>
            <div className={s.mobileHeader}>
                <img className={s.menuIcon} src={menuButton} alt={'menuicon'}
                     onClick={() => props.changeMobileMenuState()}/>
                <a className={s.logo} href={'/'}>
                    <img src={logo} alt={'logo'}/>
                </a>
            </div>
            {props.mobileMenu()}
            <table className={s.header}>
                <tr className={s.soc}>
                    <td rowSpan={'2'}>
                        <div className={s.logo}>
                            <a href={'/'}>
                                <img src={logo} alt={'logo'}/>
                            </a>
                        </div>
                    </td>
                    <td/>
                    <td/>
                    <td>
                    </td>
                    <td>
                        <img src={twitter} alt={'twl'} onClick={() => window.open('https://twitter.com', 'blank')}/>
                        <img src={instagram} alt={'inl'} onClick={() => window.open('https://instagram.com', 'blank')}/>
                        <img src={facebook} alt={'fbl'} onClick={() => window.open('https://facebook.com', 'blank')}/>
                    </td>
                    <td>
                        <p onClick={() => window.open('tel:+1234567890', '_parent')}>+1(234)567-890</p>
                    </td>
                </tr>
                <tr className={s.buttons}>
                    <td>
                        <a href={'https://allvirusdisinfection.com/corona'} style={{gridArea: 'cor'}}
                           className={s.covidButton}>
                            COVID19
                        </a>
                    </td>
                    <td>
                        <a href={'https://allvirusdisinfection.com/home-services'} style={{gridArea: 'res'}}
                           className={s.button}>
                            Resedential
                        </a>
                    </td>
                    <td>
                        <a href={'https://allvirusdisinfection.com/medical-disinfection'} style={{gridArea: 'med'}}
                           className={s.button}>
                            Medical
                        </a>
                    </td>
                    <td>
                        <a href={'https://allvirusdisinfection.com/busines-services'} style={{gridArea: 'bus'}}
                           className={s.button}>
                            Business
                        </a>
                    </td>
                    <td>
                        <a href={'https://allvirusdisinfection.com/contacts'} style={{gridArea: 'con'}}
                           className={s.button}>
                            Contacts
                        </a>
                    </td>
                </tr>
            </table>
        </Fragment>
    )
};
