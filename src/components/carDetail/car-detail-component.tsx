/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CarImage from "../../../public/car-img.png";
import AccordionIcon from "../../../public/accordian-icon.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SiteButton from "../Button";
import MakeOfferCta from "../makeOfferCta";
import "react-bnb-gallery/dist/style.css";
import ReactBnbGallery from "react-bnb-gallery";
import Slider from "react-slick";
import Calender from "../../../public/calender.svg";
import Seater from "../../../public/seater.svg";
import UserDark from "../../../public/user-dark.svg";
import FuelDark from "../../../public/fuel-dark.svg";
import Spray from "../../../public/spray.svg";
import GaugeDark from "../../../public/gauge-dark.svg";
import Setting from "../../../public/setting.svg";
import ContactUs from "../../../pages/contact-us";
import { CarService } from "../../services/cars/carService";
import styled from "@emotion/styled";
import CarCards from "../carCards";
import { log } from "console";

const StyledGrid = styled(Grid)`
  @media (max-width: 576px) {
    justify-content: center !important;
  }
`;

export default function CarDetailComponent({ carData }: any) {
  // States
  const [displayToggle, setDisplayToggle] = useState(false);
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const [isOpen, setIsOpen] = useState(false);
  const [relatedCars, setRelatedCars] = useState<any[]>([]);

  // Variables
  const carImage = carData && carData[0]?.Car_Images;
  const carId = carData && carData[0]?._id;
  const carDetail = carData && carData[0]?.Car_Detail;
  const carAdditionalInfo =
    carData && carData[0]?.Car_Equipments[0].equipmentName;
  const _carService = new CarService();

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Function
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const toggleDisplay = () => {
    setDisplayToggle(!displayToggle);
  };

  const _getAllCarList = (cardBody: string[]) => {
    const allCarsList = _carService.getAllCollection();
    allCarsList.then((res: any) => {
      if (res.status == 200) {
        const minPrice = carDetail?.maxPrice * 0.5;
        const maxPrice = carDetail?.maxPrice * 1.5;
        const data = res.data.data
          .filter((item: any) => {
            return cardBody?.includes(item?.Car_Body?.bodyType);
          })
          ?.filter((item: any) => item?._id !== carData[0]?._id)
          ?.filter(
            (item: any) =>
              item?.Car_Detail?.maxPrice >= minPrice &&
              item?.Car_Detail?.maxPrice <= maxPrice
          );
        setRelatedCars(data?.slice(0, 6));
      }
    });
  };

  // Effects

  useEffect(() => {
    let cardBody = [carData[0]?.Car_Body?.bodyType];

    if (cardBody?.length) {
      _getAllCarList(cardBody);
    }
  }, [carData]);

  return (
    <section className="car-detail">
      <div className="car-detail-container">
        <Container maxWidth="lg">
          {/* <h3>Car Title </h3> */}
          {/* <h3>{carData[0]?.Car_Detail?.name} </h3> */}
          {/* {JSON.stringify(carData)} */}
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center !important" }}
          >
            <Grid item xs={12} md={5} className="order-md-2">
              <div>
                <h3>Detail</h3>
                <div className="all-summary-of-car">
                  <div className="car-summary-group">
                    <div className="img-wrapper">
                      <img src={Calender.src} height={28} width={28} alt="" />
                    </div>
                    <div className="car-summary-wrapper">
                      <div className="car-summary-title">Registration Year</div>
                      <div className="content">
                        {(carDetail && carDetail?.year) || `-`}
                      </div>
                    </div>
                  </div>
                  <div className="car-summary-group">
                    <div className="img-wrapper">
                      <img src={UserDark.src} height={28} width={28} alt="" />
                    </div>
                    <div className="car-summary-wrapper">
                      <div className="car-summary-title">Ownership</div>
                      <div className="content">
                        {(carDetail && carDetail?.ownerShip) || `-`}
                      </div>
                    </div>
                  </div>
                  <div className="car-summary-group">
                    <div className="img-wrapper">
                      <img src={FuelDark.src} height={28} width={28} alt="" />
                    </div>
                    <div className="car-summary-wrapper">
                      <div className="car-summary-title">Fuel</div>
                      <div className="content">
                        {(carDetail && carDetail?.fuelType) || `-`}
                      </div>
                    </div>
                  </div>
                  <div className="car-summary-group">
                    <div className="img-wrapper">
                      <img src={GaugeDark.src} height={28} width={28} alt="" />
                    </div>
                    <div className="car-summary-wrapper">
                      <div className="car-summary-title">KM Driven</div>
                      <div className="content">
                        {(carDetail && carDetail?.kmDriven) || `-`}
                      </div>
                    </div>
                  </div>
                  <div className="car-summary-group">
                    <div className="img-wrapper">
                      <img src={Spray.src} height={28} width={28} alt="" />
                    </div>
                    <div className="car-summary-wrapper">
                      <div className="car-summary-title">Color</div>
                      <div className="content">
                        {(carDetail && carDetail?.color) || `-`}
                      </div>
                    </div>
                  </div>

                  <div className="car-summary-group">
                    <div className="img-wrapper">
                      <img src={Seater.src} height={28} width={28} alt="" />
                    </div>
                    <div className="car-summary-wrapper">
                      <div className="car-summary-title">Vehicle No.</div>
                      <div className="content">
                        {(carDetail && carDetail?.carNumber) || `-`}
                      </div>
                    </div>
                  </div>

                  {/* <div className="car-summary-group">
                    <div className="img-wrapper">
                      <img src={Setting.src} height={28} width={28} alt="" />
                    </div>
                    <div className="car-summary-wrapper">
                      <div className="car-summary-title">Warranty Until</div>
                      <div className="content">Sept 2022</div>
                    </div>
                  </div> */}
                  {/* <div className="car-summary-group">
                    <div className="img-wrapper">
                      <img src={Setting.src} height={28} width={28} alt="" />
                    </div>
                    <div className="car-summary-wrapper">
                      <div className="car-summary-title">Service Package</div>
                      <div className="content">Sept 2022</div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div>
                {carAdditionalInfo && (
                  <div className="all-summary-of-car v-2">
                    <h6>
                      Some additional information about this vehicle are as
                      follows:
                    </h6>

                    <div
                      dangerouslySetInnerHTML={{ __html: carAdditionalInfo }}
                    />
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={12} md={7} className="order-md-1">
              <div className="card-slider">
                <Slider {...settings}>
                  {carImage &&
                    carImage.map((img: any, index: number) => (
                      <div key={index}>
                        <div className="car-detail-img">
                          <img
                            src={img.imageLink || CarImage}
                            alt="car-img"
                            height={300}
                            width={600}
                          />
                        </div>
                      </div>
                    ))}
                </Slider>
                <div className="text-right">
                  <a
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer btn-link"
                  >
                    View All
                  </a>
                </div>

                <ReactBnbGallery
                  show={isOpen}
                  photos={carImage && carImage.map((img: any) => img.imageLink)}
                  onClose={() => setIsOpen(false)}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
        {relatedCars?.length && (
          <Container maxWidth="lg">
            <div className="related-cars">
              <h3 className="page-title">Related Cars</h3>
              <StyledGrid container rowSpacing={3} spacing={2}>
                {relatedCars.map((car: any, index: number) => (
                  <Grid key={index} item sm={6} md={4}>
                    <CarCards {...car} />
                  </Grid>
                ))}
              </StyledGrid>
            </div>
          </Container>
        )}
        <ContactUs />
      </div>
      <MakeOfferCta carId={carId} carData={carDetail} />
    </section>
  );
}
