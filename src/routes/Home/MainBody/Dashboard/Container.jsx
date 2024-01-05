/* eslint-disable react-hooks/exhaustive-deps */
// Components
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "components/common/publicTable/loading/LoadingSpinner";
import moment from "moment-jalaali";
import Calendar from "components/common/classes/Calendar";
import Widget from "components/common/Contor/Widget";
import Contor24 from "components/common/Contor/Contor24";
import { EditRequestModal } from "components/layout/EditRequestModal";
import { EditModal } from "../../../../assets/styles/layout/modals/EditModal";
import {
  fetchDashboardForDay,
  fetchDashboardForMonth,
  fetchLastAssignment,
  fetchLastLeaves,
  fetchLastTraffic,
  fetchMyAssignments,
  fetchUsers
} from "./Module";

// Styles
import { Dashboard } from "assets/styles/home/dashboard";

// Images
import PrimaryArrow from "assets/images/common/arrows/primary-down-bold.svg";
import StatusCard from "./StatusCard";
import { ModalPicker } from "components/common/datePickerMobile/modalPicker";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import MapComponent from "./MapComponent";
import styled from "styled-components";
import { Button } from "components/common";
import DateNavHeader from "components/DateNavHeader/DateNavHeader";

let dayLimit = 60;
let monthLimit = 12;
export const Container = () => {
  // States && Hooks
  const dispatch = useDispatch();
  const { Token } = useSelector((state) => state.auth);
  const { day, month, clocking, leaves, assignments, loading,users } = useSelector(
    (state) => state.dashboard
  );
  console.log("users",users);


  const today = new Date();
  const [selectedTitle, setSelectedTitle] = useState("امروز");
  const [selectedReport, setSelectedReport] = useState("کارکرد من");
  const [collapse, setCollapse] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [dayShow, setDayShow] = useState(null);
  const [monthShow, setMonthShow] = useState(null);
  const [lastTraffics, setLastTraffics] = useState(null);
  const [lastLeaves, setLastLeaves] = useState(null);
  const [lastAssignments, setLastAssignments] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [requestModal, setRequestModal] = useState({ type: "", item: {} });
  const [date, setDate] = useState(moment(today).format("jYYYY-jMM-jDD"));

  // Control contor with real time

  // const [size, setSize] = useState({ x: 50, y: 50 });
  // const [opacity, setOpacity] = useState(1);
  // const [hover, setHover] = useState("");
  // const [drag, setDrag] = useState("");

  // const handler = (mouseDownEvent) => {
  //   setDrag(true);
  //   const startSize = size;
  //   const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

  //   function onMouseMove(mouseMoveEvent) {
  //     if (startPosition.x > mouseMoveEvent.pageX) {
  //       // setOpacity(
  //       //   (startSize.x + startPosition.x - mouseMoveEvent.pageX) / 100 < 0
  //       //     ? 0
  //       //     : 1 - (startSize.x + startPosition.x - mouseMoveEvent.pageX) / 100
  //       // );
  //       setSize((currentSize) => ({
  //         x:
  //           startSize.x + startPosition.x - mouseMoveEvent.pageX > 100
  //             ? 100
  //             : startSize.x + startPosition.x - mouseMoveEvent.pageX,
  //         y:
  //           startSize.x + startPosition.x - mouseMoveEvent.pageX > 100
  //             ? 100
  //             : startSize.x + startPosition.x - mouseMoveEvent.pageX,
  //       }));
  //     } else {
  //       // setOpacity(
  //       //   (startSize.x - startPosition.x + mouseMoveEvent.pageX) / 100 < 0
  //       //     ? 0
  //       //     : 1 - (startSize.x - startPosition.x + mouseMoveEvent.pageX) / 100
  //       // );
  //       setSize((currentSize) => ({
  //         x:
  //           startSize.x - startPosition.x + mouseMoveEvent.pageX > 100
  //             ? 100
  //             : startSize.x - startPosition.x + mouseMoveEvent.pageX,
  //         y:
  //           startSize.x - startPosition.x + mouseMoveEvent.pageX > 100
  //             ? 100
  //             : startSize.x - startPosition.x + mouseMoveEvent.pageX,
  //       }));
  //     }
  //   }
  //   function onMouseUp() {
  //     document.body.removeEventListener("mousemove", onMouseMove);
  //     setSize({ x: 50, y: 50 });
  //     setOpacity(1);
  //     setDrag(false);
  //     setHover("");
  //   }

  //   document.body.addEventListener("mousemove", onMouseMove);
  //   document.body.addEventListener("mouseup", onMouseUp, { once: true });
  // };

  // Fetch data from api
  useEffect(() => {
    dispatch(
      fetchDashboardForDay(
        Token,
        `${
          date.split("-").length === 2
            ? "1402-02-02"
            : moment(date, "jYYYY-jMM-jDD").format("YYYY-MM-DD")
        }`
      )
    );
    dispatch(
      fetchDashboardForMonth(
        Token,
        date.split("-")[0],
        moment(date, "jYYYY-jMM").format("jMM")
      )
    );
  }, []);

  // Set api data to data show if it is not null or undefined or empty
  useEffect(() => {
    if (!!day) {
      setDayShow(day?.day);
    }
  }, [day]);
  useEffect(() => {
    if (!!month) {
      setMonthShow(month?.month);
    }
  }, [month]);

  // Open collapse functionality with smooth effect
  function openCollapse() {
    setCollapse(!collapse);
    var growDiv = document.getElementById("grow");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".measuringWrapper");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }





  const user= [
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
  ]
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(user));

    dispatch(fetchUsers(user));
  }, [dispatch]);
  // Set data with selected time frame
  useEffect(() => {
    collapse && openCollapse();
    if (date.split("-").length === 2) {
      dispatch(fetchLastTraffic(Token, date));
      dispatch(fetchLastLeaves(Token, date));
      dispatch(fetchLastAssignment(Token, date));
      dispatch(
        fetchMyAssignments(
          Token,
          moment(`${date}-01`, "jYYYY-jMM-jDD").format("YYYY-MM-DD"),
          moment().format("YYYY-MM-DD")
        )
      );
      // dispatch(fetchLastTraffic(Token, date));
    } else {
      dispatch(fetchLastLeaves(Token, date));
      dispatch(fetchLastAssignment(Token, date));
      dispatch(fetchLastTraffic(Token, date));
      dispatch(
        fetchMyAssignments(
          Token,
          moment(date, "jYYYY-jMM-jDD").format("YYYY-MM-DD"),
          moment(date, "jYYYY-jMM-jDD").format("YYYY-MM-DD")
        )
      );
      // dispatch(fetchLastTraffic(Token, date));
    }
    dispatch(
      fetchDashboardForDay(
        Token,
        `${
          date.split("-").length === 2
            ? "1402-02-02"
            : moment(date, "jYYYY-jMM-jDD").format("YYYY-MM-DD")
        }`
      )
    );
    dispatch(
      fetchDashboardForMonth(
        Token,
        date.split("-")[0],
        moment(date, "jYYYY-jMM").format("jMM")
      )
    );
  }, [date]);

  useEffect(() => {
    if (!!clocking) {
      setLastTraffics(clocking);
    }
    if (!!leaves) {
      setLastLeaves(leaves);
    }
    if (!!assignments) {
      setLastAssignments(assignments);
    }
  }, [clocking, leaves, assignments]);

  // Decrease date of time frame for monthly or daily
  const decreaseDate = () => {
    let changeableDate = date.split("-");
    let year = parseInt(changeableDate[0]);
    let month = parseInt(changeableDate[1]);
    let day = parseInt(changeableDate[2]);
    if (day - 1 !== 0 && !!day) {
      setDayShow(null);
      setMonthShow(null);
      setDate(
        `${year}-${month < 10 ? `0${month}` : month}-${
          day - 1 < 10 ? `0${day - 1}` : day - 1
        }`
      );
      dayLimit -= 1;
    } else if (month - 1 !== 0) {
      setDayShow(null);
      setMonthShow(null);
      setDate(
        `${year}-${month - 1 < 10 ? `0${month - 1}` : month - 1}${
          !!day
            ? `-${
                Calendar(year, month - 2).getFirstLastDayOfMonth()[0].endDay
                  .date
              }`
            : ""
        }`
      );
      !!day ? (dayLimit -= 1) : (monthLimit -= 1);
    } else {
      setDayShow(null);
      setMonthShow(null);
      setDate(`${year - 1}-${12}${!!day ? `-${29}` : ""}`);
      !!day ? (dayLimit -= 1) : (monthLimit -= 1);
    }
  };

  // Increase date of time frame for monthly or daily
  const increaseDate = () => {
    let changeableDate = date.split("-");
    let year = parseInt(changeableDate[0]);
    let month = parseInt(changeableDate[1]);
    let day = parseInt(changeableDate[2]);
    if (
      day + 1 <=
        Calendar(year, month - 1).getFirstLastDayOfMonth()[0].endDay.date &&
      !!day
    ) {
      setDayShow(null);
      setMonthShow(null);
      setDate(
        `${year}-${month < 10 ? `0${month}` : month}-${
          day + 1 < 10 ? `0${day + 1}` : day + 1
        }`
      );
      dayLimit += 1;
    } else if (month + 1 <= 12) {
      setDayShow(null);
      setMonthShow(null);
      setDate(
        `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}${
          !!day ? `-01` : ""
        }`
      );
      !!day ? (dayLimit += 1) : (monthLimit += 1);
    } else {
      setDayShow(null);
      setMonthShow(null);
      setDate(`${year + 1}-01${!!day ? `-01` : ""}`);
      !!day ? (dayLimit += 1) : (monthLimit += 1);
    }
  };

  // Header title for decreasing size of bundle
  const HeaderTitle = () => {
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
  const getDate=(date)=>{
    console.log("date",date);
    
   }
  return (
    <Dashboard.DashboardBody>
      <div
        style={{
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          padding: "10px",
        }}
      >
        {editModal && (
          <EditModal items={editModal} setModalType={setEditModal} />
        )}

        {requestModal.type === "Edit" && (
          <EditRequestModal
            items={requestModal.item}
            setModalType={setRequestModal}
          />
        )}
        {/* <DateNavHeader
          datePicker={datePicker}
          setDatePicker={setDatePicker}
          date={date}
        /> */}

        {/* <Dashboard.DashboardHeader>
          <HeaderTitle />
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
        </Dashboard.DashboardHeader> */}
<DateNavHeader getDate={getDate}/>


        {loading || dayShow === null || monthShow === null ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {selectedTitle === "امروز" ? (
                <Contor24 dataShow={dayShow} selectedTitle={selectedTitle} />
              ) : (
                <Widget
                  dataShow={
                    selectedReport === "کارکرد من"
                      ? monthShow.info[0]
                      : selectedReport === "مرخصی‌ها"
                      ? monthShow.info[1]
                      : null
                  }
                  selectedReport={selectedReport}
                />
              )}
            </div> */}
            <NeumorphicBox
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <MapComponent />
            </NeumorphicBox>
            <StatusCard
              selectedTitle={selectedTitle}
              dayShow={dayShow}
              monthShow={monthShow}
              date={date}
              setRequestModal={setRequestModal}
              lastTraffics={lastTraffics}
              lastLeaves={lastLeaves}
              lastAssignments={lastAssignments}
              setEditModal={setEditModal}
              setSelectedReport={setSelectedReport}
              selectedReport={selectedReport}
            />
          </>
        )}
      </div>
    </Dashboard.DashboardBody>
  );
};

const NeumorphicBox = styled.div`
  background-color: #f0f0f0;
  border: 5px solid #fff;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  border-raduis: 8px;
  overflow: hidden;
`;
