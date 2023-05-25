import React, { useState } from "react";
import { StyledTextField } from "../GlobalElements";
import { Box, Grid, Zoom, useMediaQuery } from "@mui/material";
import SiteButton from "../Button";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import eachDayOfInterval from "date-fns/eachDayOfInterval";

const FormPopup = React.forwardRef(
  (
    props: {
      showPopupForm: boolean;
      setShowPopupForm: any;
      contactUsLead: any;
    },
    ref: any
  ) => {
    // States
    const [loading, setLoading] = useState<boolean>(false);
    // Form Hook
    const {
      handleSubmit,
      control,
      formState: { isValid },
      reset,
      watch,
      setValue,
    } = useForm<{ name: string; phoneNumber: number | any }>({
      mode: "all",
      defaultValues: {
        name: "",
        phoneNumber: "",
      },
    });

    const handleOnSubmit = (e: any) => {
      console.log(e);
      setLoading(true);
      props?.contactUsLead(e, () => {
        reset({
          name: "",
          phoneNumber: "",
        });
        setLoading(false);
      });
    };
    return (
      <div>
        <div
          onClick={(e: any) => {
            e.preventDefault();
            props?.setShowPopupForm(false);
          }}
          className="dropbox"
        ></div>
        <div className="popup-form fade-in">
          <span
            className="close-btn"
            onClick={(e: any) => {
              e.preventDefault();
              props?.setShowPopupForm(false);
            }}
          >
            &times;
          </span>
          <h4>Get Exclusive Access to Premium Cars</h4>
          <p>
            Share your details below for a personalized experience and let our
            team assist you in finding the perfect premium car that matches your
            style and preferences.
          </p>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item md={9 / 2} sm={6} xs={12}>
                <Box
                  sx={{
                    background: "#E6E6E6;",
                    borderRadius: "4px 4px 0px 0px",
                  }}
                >
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "This is required",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <StyledTextField
                        required
                        name="name"
                        error
                        value={field.value}
                        onChange={(e: any) => {
                          setValue("name", e?.target.value, {
                            shouldValidate: true,
                          });
                        }}
                        variant="filled"
                        label="Name"
                        fullWidth
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item md={9 / 2} sm={6} xs={12}>
                <Box
                  sx={{
                    background: "#E6E6E6;",
                    borderRadius: "4px 4px 0px 0px",
                  }}
                >
                  <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                      validate: (value) =>
                        value?.toString()?.length === 10 ||
                        "phone number is not valid",
                      required: {
                        value: true,
                        message: "This is required",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <StyledTextField
                        required
                        name="phoneNumber"
                        error
                        value={field.value}
                        type="number"
                        onInput={(e: any) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 10);
                        }}
                        onChange={(e: any) => {
                          setValue("phoneNumber", e?.target.value, {
                            shouldValidate: true,
                          });
                        }}
                        variant="filled"
                        label="Phone Number"
                        fullWidth
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item md={3} xs={12}>
                <SiteButton
                  styles={{ width: "100%" }}
                  text={loading ? "loading..." : "Get In Touch"}
                  type={"submit"}
                  disabled={!isValid}
                  arrow={true}
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
);

export default FormPopup;
