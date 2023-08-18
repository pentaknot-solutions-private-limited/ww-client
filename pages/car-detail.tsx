/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import CarDetailComponent from "../src/components/carDetail/car-detail-component";
import Head from "next/head";
import { CarService } from "../src/services/cars/carService";
import { useRouter } from "next/router";
import phoneIcon from "../public/phone-site-color.svg";
import ContactFormContext from "../src/context/ContactFormContext";
import SiteButton from "../src/components/Button";
import ContactUs from "./contact-us";

export default function CarDetail() {
  // States
  const [carDetail, setCarDetail] = useState<any[]>([]);
  // context
  const { showPopupForm, setShowPopupForm } = useContext(ContactFormContext);

  // Variables
  const carDetailService = new CarService();
  const router = useRouter();
  const carId = router.query.carId;

  // Funcitions

  const _getCarDetailService = () => {
    const carDetailData = carDetailService.getCarDetailById(carId);
    carDetailData.then((res: any) => {
      if (res.status == 200) {
        // #1. Storing all car Detail in the States
        setCarDetail(res.data.data);
      }
    });
  };

  // Effects
  useEffect(() => {
    if (carId) {
      _getCarDetailService();
    }
  }, [carId]);
  return (
    <div>
      <Head>
        <title>Wish Wheels | Car Detail</title>
      </Head>
      <CarDetailComponent carData={carDetail} />
      <SiteButton
        text={"Request A Callback"}
        className="phone-btn sharebtn"
        buttonVariant={"secondary"}
        // href="javascript:void(0)"
        // rel="noopener noreferrer"
        onClick={() => {
          setShowPopupForm(!showPopupForm);
        }}
      />
      {/* <img src={phoneIcon.src} />
      </SiteButton> */}
    </div>
  );
}
