// import React from 'react';
//
// const Zapier = () => {
//     return (
//         <>
//             <script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></script>
//             <zapier-interfaces-chatbot-embed is-popup='true' chatbot-id='cm8px3l1c0009yzjql6he7ken'></zapier-interfaces-chatbot-embed>
//         </>
//     );
// };
//
// export default Zapier;
import React, { useEffect } from 'react';

const Zapier = () => {
    useEffect(() => {
        // Add custom CSS to move the Zapier chatbot to the bottom-left corner
        const style = document.createElement('style');
        style.innerHTML = `
      zapier-interfaces-chatbot-embed {
        position: fixed !important;
        bottom: 20px; /* Adjust the distance from the bottom */
        left: 20px;   /* Adjust the distance from the left */
        right: auto !important;  /* Ensure it's not on the right side */
        z-index: 9999;  /* Ensure the chatbot is on top of other elements */
      }
    `;
        document.head.appendChild(style);

        // Cleanup function to remove the injected CSS when the component unmounts
        return () => {
            document.head.removeChild(style);
        };
    }, []); // The empty array ensures the effect runs only once (on mount)

    return (
        <>
            {/* Dynamically load the Zapier chatbot script */}
            <script
                async
                type='module'
                src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'
            ></script>
            {/* Embed the Zapier chatbot */}
            <zapier-interfaces-chatbot-embed
                is-popup='true'
                chatbot-id='cm8px3l1c0009yzjql6he7ken'
            ></zapier-interfaces-chatbot-embed>
        </>
    );
};

export default Zapier;