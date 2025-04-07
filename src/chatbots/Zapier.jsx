import React from 'react';

const Zapier = () => {
    return (
        <>
            <script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></script>
            <zapier-interfaces-chatbot-embed is-popup='true' chatbot-id='cm8px3l1c0009yzjql6he7ken'></zapier-interfaces-chatbot-embed>
        </>
    );
};

export default Zapier;