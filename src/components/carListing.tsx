/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import SiteButton from "./Button";
import CarCards from "./carCards";
import BrandAutoComplete from "../components/BrandAutoComplete";
import DeletableChips from "./deletableChips";
import Image from "next/image";
import BackLogo from "../../public/backArrow.svg";
import { Field, Form, Formik } from "formik";
import * as CONSTANTS from "../CONSTANTS";
import { CarFilter } from "../services/cars/carFilter";
import { CarService } from "../services/cars/carService";
import { log } from "console";
import LoadingComponent from "./loading/LoadingComponent";

const StyledGrid = styled(Grid)`
  @media (max-width: 576px) {
    justify-content: center !important;
  }
`;

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    max-width: 430px !important;
    width: 100% !important;
  }
`;

export default function CarListing({ allCars, carListingLoading }: any) {
  // States
  const [open, setOpen] = useState(false);

  const [bodyOptions, setBodyOptions] = useState<any[]>([]);
  const [brandList, setBrandList] = useState<any[]>([]);
  const [fuelTypeList, setFuelTypeList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredCars, setFilteredCars] = useState<any[]>([]);
  const [filters, setFilters] = useState<{
    bodyType: any[];
    brands: any[];
    fuelType: string;
    priceSorting: string;
  }>({
    bodyType: [],
    brands: [],
    fuelType: "",
    priceSorting: "",
  });
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);

  // Variables
  const carFilterService = new CarFilter();
  const _allBrandService = new CarService();
  // const filterInitialValue: {
  //   bodyType: any[];
  //   brands: any[];
  // } = {
  //   // registrationYear: "",
  //   // kmsDriven: "",
  //   // budget: "",
  //   bodyType: [],
  //   brands: [],
  // };

  // Functions

  const toggleDrawer = (currentDrawerState: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (!isFilterApplied) {
      clearFilters();
    }
    setOpen(currentDrawerState);
  };

  const handleSubmit = (e: any) => {
    setFilteredCars(
      (allCars as any[])
        .filter((item) => {
          if (filters?.bodyType?.length) {
            return filters?.bodyType?.includes(item?.Car_Body?.bodyType);
          } else {
            return item;
          }
        })
        ?.filter((item) => {
          if (filters?.brands?.length) {
            return filters?.brands?.includes(item?.Car_Make?.name);
          } else {
            return item;
          }
        })
        ?.filter((item) => {
          if (filters?.fuelType) {
            return item?.Car_Detail?.fuelType === filters?.fuelType;
          } else {
            return item;
          }
        })
        ?.sort((a, b) => {
          // Car_Detail?.maxPrice;
          if (filters?.priceSorting) {
            if (filters?.priceSorting === "asc") {
              return a?.Car_Detail?.maxPrice - b?.Car_Detail?.maxPrice;
            } else {
              return b?.Car_Detail?.maxPrice - a?.Car_Detail?.maxPrice;
            }
          } else {
            return a;
          }
        })
    );
    setIsFilterApplied(true);
    setOpen(false);
  };

  const clearFilters = () => {
    setIsFilterApplied(false);
    setFilteredCars(allCars);
    setFilters({ bodyType: [], brands: [], fuelType: "", priceSorting: "" });
  };
  const handleBodyTypeChange = (event: any, item: any) => {
    if (event.target.checked) {
      setFilters({ ...filters, bodyType: [...filters.bodyType, item] });
    } else {
      // remove from list
      setFilters({
        ...filters,
        bodyType: [...filters.bodyType?.filter((data) => data !== item)],
      });
    }
  };
  const handleBrandChange = (event: any, item: any) => {
    if (event.target.checked) {
      setFilters({ ...filters, brands: [...filters.brands, item] });
    } else {
      // remove from list
      setFilters({
        ...filters,
        brands: [...filters.brands?.filter((data) => data !== item)],
      });
    }
  };

  // API Calls
  const _getAllBrands = () => {
    const brands = _allBrandService.getAllBrands();
    brands.then((res) => {
      if (res.status == 200) {
        // #1. Add the data to the brand list
        const data = res?.data?.data;
        setBrandList(data);
      }
    });
  };
  const _getAllCarBodies = () => {
    const brands = _allBrandService.getAllCarBodies();
    brands.then((res) => {
      if (res.status == 200) {
        // #1. Add the data to the brand list
        const data = res?.data?.data;
        setBodyOptions(data);
      }
    });
  };
  const _getAllFuelType = async () => {
    const fuelType = _allBrandService.getAllFuelType();
    fuelType.then((res) => {
      if (res.status == 200) {
        const data = res?.data?.data;
        setFuelTypeList(data);
      }
    });
  };
  // Effects
  useEffect(() => {
    _getAllCarBodies();
    _getAllBrands();
    _getAllFuelType();
  }, []);

  useEffect(() => {
    setFilteredCars(allCars);
  }, [allCars]);

  // useEffect(() => {
  //     if (filterData) {
  //         _postFilter(filterData);

  //     }

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filterData]);

  //   useEffect(() => {
  //     if (rawData) {
  //       // Storing the form value to local storage
  //       localStorage.setItem("filterRawData", JSON.stringify(rawData));
  //     }
  //   }, [rawData]);
  return (
    <section className="car-listing">
      <Container maxWidth="lg">
        <div className="flex-container">
          <h3 className="section-title">
            {/* Our <span>Collection </span> */}
            Current <span>Stock</span>
            {/* {`(${filteredCars?.length})`} */}
          </h3>
          <SiteButton text="Filter" arrow={true} onClick={toggleDrawer(true)} />
        </div>
        {/* <div>
          <DeletableChips rawData={rawData} />
        </div> */}
        <StyledDrawer
          anchor="right"
          open={open}
          //  onClose={toggleDrawer(false)}
        >
          <div className="filter-wrapper">
            <div className="drawer-header-with-icon">
              <IconButton onClick={toggleDrawer(false)}>
                <Image src={BackLogo} alt="Add comment" />
              </IconButton>
              <h4>Filters</h4>
            </div>
            <div className="filter">
              <h5>Price</h5>
              <ul className="filter-list">
                <li>
                  <input
                    type="radio"
                    value="asc"
                    id="asc"
                    name="price-sorting"
                    onChange={(e) => {
                      setFilters({ ...filters, priceSorting: "asc" });
                    }}
                    checked={filters.priceSorting === "asc"}
                  />
                  <label htmlFor={"asc"}>Low To High</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="desc"
                    id="desc"
                    name="price-sorting"
                    onChange={(e) => {
                      setFilters({ ...filters, priceSorting: "desc" });
                    }}
                    checked={filters.priceSorting === "desc"}
                  />
                  <label htmlFor={"desc"}>High to Low</label>
                </li>
              </ul>
            </div>
            <div className="filter">
              <h5>Body</h5>
              <ul className="filter-list">
                {bodyOptions &&
                  bodyOptions.map((body, index) => (
                    <li key={index}>
                      {/* <Field
                        type="checkbox"
                        value={body?.bodyType}
                        id={body?.bodyType}
                        name="bodyType"
                      /> */}
                      <input
                        type="checkbox"
                        value={body?.bodyType}
                        id={body?.bodyType}
                        name="bodyType"
                        onChange={(e) =>
                          handleBodyTypeChange(e, body?.bodyType)
                        }
                        checked={filters.bodyType?.includes(body?.bodyType)}
                      />
                      <label htmlFor={body?.bodyType}>{body?.bodyType}</label>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="filter">
              <h5>Brands</h5>
              <ul className="filter-list">
                {brandList &&
                  brandList.map((brand, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        value={brand?.name}
                        id={brand?.name}
                        name="brand"
                        onChange={(e) => handleBrandChange(e, brand?.name)}
                        checked={filters.brands?.includes(brand?.name)}
                      />
                      <label htmlFor={brand?.name}>{brand?.name}</label>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="filter">
              <h5>Fuel Type</h5>
              <ul className="filter-list">
                {fuelTypeList &&
                  fuelTypeList.map((fuel, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        value={fuel?.value}
                        id={fuel?.value}
                        name="fuel-type"
                        onChange={(e) => {
                          setFilters({ ...filters, fuelType: fuel?.value });
                        }}
                        checked={filters.fuelType === fuel?.value}
                      />
                      <label htmlFor={fuel?.value}>{fuel?.name}</label>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="filter-footer">
              {/* <SiteButton
                text="Clear Filters"
                // onClick={handleReset.bind(null, formik)}
                onClick={() => clearFilters()}
                type="button"
                buttonVariant="secondary"
              /> */}
              <Button onClick={() => clearFilters()} variant="outlined">
                Clear Filter
              </Button>
              <SiteButton
                // type="submit"
                className="mr0"
                styles={{ marginRight: "0px !important" }}
                onClick={handleSubmit}
                disabled={isLoading}
                text={isLoading ? "Loading..." : "Apply Changes"}
              />
            </div>
          </div>
        </StyledDrawer>
        {carListingLoading ? (
          <div className="car-listing-loading-container">
            <LoadingComponent />
          </div>
        ) : (
          <>
            {filteredCars?.length ? (
              <StyledGrid container rowSpacing={3} spacing={2}>
                {(!filters?.priceSorting
                  ? filteredCars?.sort(function (a: any, b: any) {
                      return a.Car_Detail.carOrder - b.Car_Detail.carOrder;
                    })
                  : filteredCars
                ).map((car: any, index: number) => (
                  <Grid key={index} item sm={6} lg={4}>
                    <CarCards {...car} variant="card2" />
                  </Grid>
                ))}
              </StyledGrid>
            ) : (
              <div className="no-cars-found">
                <p>No Cars Found</p>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}
