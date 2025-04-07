// import React from 'react';
//
// const BotPress = () => {
//     return (
//         <>
//             <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
//             <script src="https://files.bpcontent.cloud/2025/03/26/13/20250326131616-6VYTAGEN.js"></script>
//         </>
//     );
// };
//
// export default BotPress;
import React, { useEffect } from 'react';

const BotPress = () => {
    useEffect(() => {
        // Dynamically load the first script
        const script1 = document.createElement('script');
        script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
        script1.async = true;
        document.body.appendChild(script1);

        // Dynamically load the second script
        const script2 = document.createElement('script');
        script2.src = "https://files.bpcontent.cloud/2025/03/26/13/20250326131616-6VYTAGEN.js";
        script2.async = true;
        document.body.appendChild(script2);

        // Cleanup function to remove the scripts when the component unmounts
        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []); // The empty array ensures the effect runs only once (on mount)

    return <div id="root"></div>;
};

export default BotPress;