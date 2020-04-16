import React from 'react'
import {HeaderComponent} from "../components/header";
import s from '../stylesheets/header.module.css'
import menuButton from '../img/mobile_menu_icon.png'

export class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuOpen: false
        };
        this.changeMobileMenuState.bind(this);
        this.mobileMenu.bind(this);
    }

    changeMobileMenuState = () => {
        this.setState({
            isMobileMenuOpen: !this.state.isMobileMenuOpen
        })
    };

    mobileMenu = () => {
        return (
            <div className={s.mobileMenu} style={{left: `${-100 * !this.state.isMobileMenuOpen}%`}}
                 onClick={() => this.changeMobileMenuState()}>
                <img src={menuButton} alt={'bc'} onClick={() => this.changeMobileMenuState()}/>
                <a href={'https://allvirusdisinfection.com/corona'} className={s.covidButton}>
                    COVID19
                </a>
                <a href={'https://allvirusdisinfection.com/home-services'} className={s.button}>
                    Resedential
                </a>
                <a href={'https://allvirusdisinfection.com/medical-disinfection'} className={s.button}>
                    Medical
                </a>
                <a href={'https://allvirusdisinfection.com/busines-services'} className={s.button}>
                    Business
                </a>
                <a href={'https://allvirusdisinfection.com/contacts'} className={s.button}>
                    Contacts
                </a>
            </div>
        );
    };

    render() {
        return (
            <HeaderComponent changeMobileMenuState={this.changeMobileMenuState} mobileMenu={this.mobileMenu}/>
        )
    }
}
