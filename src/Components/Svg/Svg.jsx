import React, { useMemo } from 'react';

const Svg = ({ className, src, width, height }) => {
    return useMemo(() => (
        <span className={className}>
            <img src={src} alt={className} width={width} height={height} />
        </span>
    ), [ className, src, width, height])
}

export default Svg;