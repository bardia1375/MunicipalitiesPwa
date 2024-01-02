import Card from "components/common/Card";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import profile from "assets/images/profilephoto/302321278.jpg";
import { Field } from "components/common/Field";
import { Dropdown } from "components/common";

export const MyDiagramInfo = () => {
  // Data for the pie chart
  const navigate = useNavigate();
  const setSelectedState = (data) => {
    if (data.Title == "ماموریت") {
      navigate("/diagram/misiion");
    } else if (data.Title == "حضور") {
      navigate("/diagram/present");
    } else if (data.Title == "مرخصی") {
      navigate("/diagram/leave");
    } else if (data.Title == "غیبت") {
      navigate("/diagram/absence");
    }
  };
  const Personels = [
    {
      name: "محمود عباسی",
      Code: "444",
    },
    {
      name: "رضا منیری",
      Code: "123",
    },
    {
      name: "ابوالفضل آقاسی",
      Code: "453",
    },
    {
      name: "محمود کریمی",
      Code: "323",
    },
    {
      name: "سینا باباجانی",
      Code: "333",
    },
    {
      name: "رضا بنیادی",
      Code: "22",
    },
    {
      name: "سعید کاظمی",
      Code: "11",
    },
    // 10 more items added below with male names:
    {
      name: "ناصر حسینی",
      Code: "555",
    },
    {
      name: "علی زمانی",
      Code: "666",
    },
    {
      name: "حسن علیزاده",
      Code: "777",
    },
    {
      name: "محمدرضا محمدی",
      Code: "888",
    },
    {
      name: "علی اکبری",
      Code: "999",
    },
    {
      name: "محمد رحیمیان",
      Code: "101",
    },
    {
      name: "حسن اسدی",
      Code: "202",
    },
    {
      name: "حمیدرضا حسینی",
      Code: "303",
    },
    {
      name: "مصطفی محمدزاده",
      Code: "404",
    },
    {
      name: "محمدرضا اکبری",
      Code: "505",
    },
  ];

  return (
    <Card height="calc(100vh - 250px)" margin="24px 0 0 0">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Dropdown
          type={"عمومی"}
          title={"انتخاب وضعیت"}
          firstData={"انتخاب کنید"}
          setSelectedState={setSelectedState}
          dropData={[
            { id: 0, Title: "حضور" },
            { id: 1, Title: "مرخصی" },
            { id: 2, Title: "ماموریت" },
            { id: 3, Title: "غیبت" },
          ]}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr ",
            gap: "8px",
          }}
        >
          {Personels.map((Personel) => (
            <Card color="#def0f2">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  // background: "rgb(0, 227, 150)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={profile}
                    width="50px"
                    height="50px"
                    style={{
                      borderRadius: "50%",
                    }}
                  />

                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <h4>{Personel.name}</h4>
                    <p>کدپرسنلی: {Personel.Code} </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
};
