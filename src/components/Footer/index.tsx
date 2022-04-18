import React from 'react';
import { View, Wrap } from './styles';

function Footer() {
    return (
        <View>
            <Wrap>
                <div>
                    <h1 className='site-title'>Telzir</h1>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Morbi blandit cursus risus at ultrices.
                    </p>
                </div>
                <div>
                    <span>Copyright &copy; Telzir 2022. All Rights Reserved</span>
                </div>
            </Wrap>
        </View>
    );
}

export default Footer;