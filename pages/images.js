import ChangeImageColor from '../src/components/ChangeImageColor';
import React  from 'react';

const ViewImages = () => {
    return (
        <div>
            <h1>Test uso Hooks useRef</h1>
            <br/>
            <ChangeImageColor
                primaryImg="/static/images/Girl1-BW.png"
                secondaryImg="/static/images/Girl1.png"
                alt=""
            />
            &nbsp;&nbsp;&nbsp;
            <ChangeImageColor
                primaryImg="/static/images/Girl2-BW.png"
                secondaryImg="/static/images/Girl2.png"
                alt=""
            />

        </div>

    );
};

export default ViewImages;