// GoogleTagManager.js

import Script from "next/script";

const GoogleTagManager = () => (
  <>
    {/* Google Tag Manager script for the head */}
    <Script strategy="lazyOnload">
      {`
        // Google Tag Manager head script
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtag/js?id=G-SM7H9X2PXT'; 
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-SM7H9X2PXT'); 
      `}
    </Script>

    {/* Google Tag Manager script for the body */}
    <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SM7H9X2PXT/UbnHCPH6tYMZELPW9qYp', {
          'phone_conversion_number': '+91-9967164485'
        });
      `}
    </Script>
  </>
);

export default GoogleTagManager;
