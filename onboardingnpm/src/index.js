import React from 'react';
import Onboarding from './views/onboarding';

const index = ({data,funciondone}) => {
    return (
        <>
            <Onboarding data={data} done={funciondone} />
        </>
    );
}

export default index;