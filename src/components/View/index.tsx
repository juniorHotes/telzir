import React, { useEffect } from 'react';
import { Wrap } from './styles';

interface Props {
    title?: string | Array<string>,
    children: JSX.Element;
    padding?: string | number;
    maxwidth?: string | number;
    nogap?: boolean
}

function View({
    title,
    children,
    padding,
    maxwidth,
    nogap
}: Props): JSX.Element {
    useEffect(() => {
        document.querySelector("#root")?.scrollIntoView()
    }, [])

    const getTitle = () => {
        if (title) {
            if (typeof title === 'object') return (
                <div className="wp-title">
                    {
                        title?.map((t, i) => (
                            <h1 key={`wpt-${i}`}>{t}</h1>
                        ))
                    }
                </div>
            ); else return (
                <div className="wp-title">
                    <h1>{title}</h1>
                </div>
            );
        }
        return <></>
    }

    return (
        <Wrap padding={padding} maxwidth={maxwidth} nogap={nogap}>
            {
                getTitle()
            }
            <div>
                {children}
            </div>
        </Wrap>
    );
}

export default View;