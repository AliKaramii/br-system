import React, { useEffect, useState } from "react";
import UserPanelLayout from "../../components/layout/user-panel";
import { Box, Grid, Typography } from "@mui/material";
import myFlorIcon from "../../assets/svg/user-panel-myFlor.svg";
import { theme } from "../../assets/themes/theme";
import { fetchData } from "../../services/http-client";
import Loading from "../../components/base/loading";

const pageTitle = { icon: myFlorIcon, title: "واحد من" };

const MyFlorPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData("/flor-data").then((fetchedData) => setData(fetchedData));
  }, []);
  return (
    <>
      {data ? (
        <Box>
          <UserPanelLayout pageTitle={pageTitle}>
            <Box
              className="bordered-container"
              spacing={{ xs: 1, sm: 2 }}
              flexWrap="wrap"
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  md={3}
                  sx={{
                    borderRadius: " 8px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={data.avatar}
                    alt=""
                  />
                </Grid>
                <Grid item xs={12} sm={7} md={9} sx={{ padding: "1rem" }}>
                  <Box
                    marginX={2}
                    sx={{
                      textAlign: "center",
                      padding: "0.5rem",
                      marginBottom: "1rem",
                      borderBottom: `1px solid ${theme.palette.border.dark1}`,
                    }}
                  >
                    <Typography variant="">
                      مشخصات ساکن :
                      <Typography marginX={2} component="span" color="primary">
                        {data.florId}
                      </Typography>
                    </Typography>
                  </Box>
                  <Grid
                    container
                    marginX={2}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Grid
                      item
                      xs={12}
                      md={6}
                      display="flex"
                      flexDirection="column"
                    >
                      <Typography variant="">
                        نام و نام خانوادگی :
                        <Typography component="span" color="primary">
                          {data.owner}
                        </Typography>
                      </Typography>
                      <Typography variant="">
                        شارژ :
                        <Typography component="span" color="primary">
                          {data.charge} ريال
                        </Typography>
                      </Typography>
                      <Typography variant="">
                        متراژ :
                        <Typography component="span" color="primary">
                          {data.dimension} متر
                        </Typography>
                      </Typography>
                      <Typography variant="">
                        تفکیک :
                        <Typography component="span" color="primary">
                          {data.ownerType}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      display="flex"
                      flexDirection="column"
                    >
                      <Typography variant="">
                        شماره موبایل :
                        <Typography component="span" color="primary">
                          {data.mobile}
                        </Typography>
                      </Typography>
                      <Typography variant="">
                        طبقه :
                        <Typography component="span" color="primary">
                          {data.flor}
                        </Typography>
                      </Typography>
                      <Typography variant="">
                        تعداد نفرات :
                        <Typography component="span" color="primary">
                          {data.users} نفر
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </UserPanelLayout>
        </Box>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MyFlorPage;
