import React from "react";
import { Dashboard } from "assets/styles/home/dashboard";
import PrimaryArrow from "assets/images/common/arrows/primary-down-bold.svg";
import moment from "moment-jalaali";
// Header title for decreasing size of bundle
const HeaderTitle = ({
  selectedTitle,
  setDayShow,
  setMonthShow,
  setDate,
  today,
  dayLimit,
  monthLimit,
}) => {
  return ["امروز", "این ماه"].map((item, index) => (
    <Dashboard.TitleStyle
      key={index}
      style={{ cursor: "pointer" }}
      onClick={() => {
        if (selectedTitle !== item) {
          setDayShow(null);
          setMonthShow(null);
          setSelectedTitle(item);
          collapse && openCollapse();
          setDate(
            moment(today).format(
              item === "امروز" ? "jYYYY-jMM-jDD" : "jYYYY-jMM"
            )
          );
          dayLimit = 60;
          monthLimit = 12;
        }
      }}
      selected={selectedTitle === item}
    >
      {item === "امروز" ? "روز" : "ماه"}
    </Dashboard.TitleStyle>
  ));
};
const DateNavHeader = ({
  dayLimit,
  monthLimit,
  decreaseDate,
  setDatePicker,
  date,
  today,
  increaseDate,
  setMonthShow,
}) => {
  return (
    <>
      <Dashboard.DashboardHeader>
        <HeaderTitle
          selectedTitle={selectedTitle}
          setDayShow={setDayShow}
          setMonthShow={setMonthShow}
          setDate={setDate}
          today={today}
          dayLimit={dayLimit}
          monthLimit={monthLimit}
        />
      </Dashboard.DashboardHeader>
      <Dashboard.DashboardHeader>
        <img
          onClick={dayLimit !== 0 && monthLimit !== 0 ? decreaseDate : null}
          style={{
            rotate: "-90deg",
            cursor: "pointer",
            padding: "5px",
            opacity: `${dayLimit !== 0 && monthLimit !== 0 ? 1 : 0.5}`,
          }}
          src={PrimaryArrow}
          alt=""
        />
        <Dashboard.TitleStyle
          onClick={
            date.split("-").length === 3 ? () => setDatePicker(true) : null
          }
        >
          {date.split("-").length === 3
            ? `${date.split("-")[2]} ${moment(date, "jYYYY-jMM-jDD").format(
                "jMMMM"
              )} ${date.split("-")[0]}`
            : `${moment(date, "jYYYY-jMM").format("jMMMM")} ${
                date.split("-")[0]
              }`}
        </Dashboard.TitleStyle>
        <img
          style={{
            rotate: "90deg",
            cursor: "pointer",
            padding: "5px",
            opacity: `${
              date.split("-").length === 3
                ? moment(date, "jYYYY-jMM-jDD").format("jYYYY-jMM-jDD") ===
                  moment(today).format("jYYYY-jMM-jDD")
                  ? 0.5
                  : 1
                : moment(date, "jYYYY-jMM").format("jYYYY-jMM") ===
                  moment(today).format("jYYYY-jMM")
                ? 0.5
                : 1
            }`,
          }}
          onClick={
            date.split("-").length === 3
              ? moment(date, "jYYYY-jMM-jDD").format("jYYYY-jMM-jDD") ===
                moment(today).format("jYYYY-jMM-jDD")
                ? null
                : increaseDate
              : moment(date, "jYYYY-jMM").format("jYYYY-jMM") ===
                moment(today).format("jYYYY-jMM")
              ? null
              : increaseDate
          }
          src={PrimaryArrow}
          alt=""
        />
      </Dashboard.DashboardHeader>
    </>
  );
};

export default DateNavHeader;
