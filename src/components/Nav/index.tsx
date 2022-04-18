import React, { useState } from 'react';
import { View, Wrap, FlexRight, LinkWp, MobileBtn, MobileMenu } from './styles';
import { Link } from 'react-router-dom';

const navDataLink = [
    {
        label: 'Telzir Fibra',
        href: 'internet'
    },
    {
        label: 'Celular',
        href: 'cell'
    },
    {
        label: 'Telzir Play',
        href: 'play'
    },
    {
        label: 'TV HD',
        href: 'tv'
    },
    {
        label: 'Minha Telzir',
        href: 'login-register'
    }
]

function Nav() {
    const [isNavMobile, setIsNavMobile] = useState(false)

    const handleMobileButton = () => {
        setIsNavMobile(!isNavMobile)
    }

    return (
        <View>
            <Wrap>
                <div>
                    <Link onClick={() => setIsNavMobile(false)} to="/">
                        <h1 className='site-title'>Telzir</h1>
                    </Link>
                </div>
                <FlexRight>
                    {
                        navDataLink.map((item, idx) => {
                            if ((idx + 1) < navDataLink.length) {
                                return (
                                    <LinkWp key={`nv-lk-${idx}`}>
                                        <Link to={item.href}>{item.label}</Link>
                                    </LinkWp>
                                )
                            } else {
                                return (
                                    <LinkWp key={`nv-lk-${idx}`} flexbases="26%" mrg="0" txtalg="end">
                                        <Link to={item.href}>{item.label}</Link>
                                    </LinkWp>
                                )
                            }
                        })
                    }
                </FlexRight>
                <MobileBtn onClick={handleMobileButton} isNavMobile={isNavMobile}>
                    <i className='bx bx-menu' ></i>
                    <i className='bx bx-plus' ></i>
                </MobileBtn>
                <MobileMenu isNavMobile={isNavMobile}>
                    {
                        navDataLink.map((item, idx) => {
                            if ((idx + 1) < navDataLink.length) {
                                return (
                                    <LinkWp key={`nv-lk-${idx}`}>
                                        <Link onClick={() => setIsNavMobile(false)} to={item.href}>{item.label}</Link>
                                    </LinkWp>
                                )
                            } else {
                                return (
                                    <LinkWp key={`nv-lk-${idx}`} flexbases="26%" mrg="0" txtalg="end">
                                        <Link onClick={() => setIsNavMobile(false)} to={item.href}>{item.label}</Link>
                                    </LinkWp>
                                )
                            }
                        })
                    }
                </MobileMenu>
            </Wrap>
        </View>
    );
}

export default Nav;