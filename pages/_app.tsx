import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import Layout from "../src/layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import AuthContext from "../src/context/AuthContext";
import React, { useEffect, useState } from "react";
import useIsIOS from "../src/hooks/useIsIos";
import InstallPWAModel from "../src/hooks/installPWA";
import Script from "next/script";
import FormPopup from "../src/components/form-popup/FormPopup";
import Zoom from "@mui/material/Zoom";
import { Transition } from "react-transition-group";
import { ContactUsLeadService } from "../src/services/contact-us";
import SuccessBookingPng from "../public/success-booking.png";
import Link from "next/link";

// const outerTheme = createTheme({
//   typography:{
//     fontFamily: 'SF Compact Display',
//   }
// });

function MyApp({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [isIos, setIsIos] = useState<any>(true);
  const [hidePopup, setHidePopup] = useState<any>(false);
  const [openModel, setOpenModel] = useState<any>(false);
  const [isUserIsSubscribed, setIsUserIsSubscribed] = useState<boolean>(false);
  const [showPopupForm, setShowPopupForm] = useState<boolean>(false);
  const [successAlert, setSuccessAlert] = useState<boolean>(false);

  // Variables
  const hide = () => {
    setHidePopup(true);
  };

  const contactUsLeadService = new ContactUsLeadService();

  const _contactUsLead = (
    payload: { name: string; phoneNumber: number },
    callBack: () => void
  ) => {
    const faqData: any = contactUsLeadService.ContactUsLead(payload);
    faqData
      .then((res: any) => {
        if (res.status == 200) {
          localStorage.setItem("isUserIsSubscribed", JSON.stringify(true));
          setIsUserIsSubscribed(true);
          setShowPopupForm(false);
          setSuccessAlert(true);
        } else {
          localStorage.setItem("isUserIsSubscribed", JSON.stringify(false));
          setIsUserIsSubscribed(false);
          setShowPopupForm(true);
          setSuccessAlert(false);
        }
        callBack();
      })
      .catch((error: any) => {
        console.log(error);
        callBack();
        localStorage.setItem("isUserIsSubscribed", JSON.stringify(false));
        setIsUserIsSubscribed(false);
        setShowPopupForm(true);
        setSuccessAlert(false);
      });
  };

  // Effects
  useEffect(() => {
    let userIsSubscribed = JSON.parse(
      localStorage.getItem("isUserIsSubscribed")!
    );
    userIsSubscribed
      ? setIsUserIsSubscribed(true)
      : setIsUserIsSubscribed(false);
    let installed: any;
    if (typeof window !== "undefined") {
      // Perform localStorage action
      installed = localStorage.getItem("installPrompt");
    }
    if (installed === "true") {
      setIsIos(false);
    } else if (window.navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
      setIsIos(true);
    } else {
      setIsIos(false);
    }
    setTimeout(() => {
      setShowPopupForm(true);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("isUserIsSubscribed", { isUserIsSubscribed, showPopupForm });
  }, [isUserIsSubscribed, showPopupForm]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="googleAnalytic" strategy="lazyOnload">
        {`
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SM7H9X2PXT');
                `}
      </Script>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
          <Layout>
            <Component {...pageProps} />
            {isIos && (
              <div
                // className="add-to-home-screen"
                className={
                  !hidePopup ? "add-to-home-screen" : "add-to-home-screen hide"
                }
              >
                <button
                  onClick={() => setOpenModel(true)}
                  className="btn-secondary"
                >
                  Add to Home Screen
                </button>
                <span
                  className="closebtn"
                  onClick={(e: any) => {
                    e.preventDefault();
                    localStorage.setItem("installPrompt", JSON.stringify(true));
                    hide();
                  }}
                >
                  &times;
                </span>
                <InstallPWAModel open={openModel} setOpen={setOpenModel} />
              </div>
            )}
            {!isUserIsSubscribed && showPopupForm ? (
              <FormPopup
                contactUsLead={_contactUsLead}
                showPopupForm={showPopupForm}
                setShowPopupForm={setShowPopupForm}
              />
            ) : null}
            {successAlert && (
              <div>
                <div
                  className="dropbox"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setSuccessAlert(false);
                  }}
                ></div>
                <div className="succes-card">
                  <span
                    className="close-btn"
                    onClick={(e: any) => {
                      e.preventDefault();
                      setSuccessAlert(false);
                    }}
                  >
                    &times;
                  </span>
                  <img src={SuccessBookingPng.src} alt="succes booking" />
                  <h4>Thanks for sharing details!</h4>
                  <p>Our team will contact you shortly.</p>
                  <Link href="/car-collection">Browse Car</Link>
                </div>
              </div>
            )}
          </Layout>
        </AuthContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
