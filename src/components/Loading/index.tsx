import React from 'react';
import { Overlay } from './styles';

interface Props {
    nooverlay?: boolean;
    positionFixed?: boolean
}

function Loading({ nooverlay, positionFixed }: Props): JSX.Element {

    return (
        <Overlay nooverlay={nooverlay} positionFixed={positionFixed}>
            <div>
                <i className='bx bx-loader-alt bx-spin' ></i>
            </div>
        </Overlay>
    )
}

export default Loading