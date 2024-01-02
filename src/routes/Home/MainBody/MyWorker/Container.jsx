import Card from "components/common/Card";
import { Field } from "components/common/Field";
import React, { useEffect, useState } from "react";
import profile from "assets/images/profilephoto/302321278.jpg";
import { Button } from "components/common";
import { useNavigate } from "react-router";

export const MyWorker = () => {

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Card height="calc(100vh - 250px)" margin="24px 0 0 0">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Field
            type={"dropdown"}
            label={"انتخاب محدوده"}
            firstData={"انتخاب کنید"}
            dropData={["بهشتی", "شریعتی", "ولی‌عصر"]}
          ></Field>
          <Card color="#def0f2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  src={profile}
                  width="50px"
                  height="50px"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <div>
                  <h4>علی مرتضوی</h4>
                  <p>398</p>
                </div>
              </div>
              <div
                style={{
                  background: "#27C29B",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  color: "#fff",
                }}
              >
                تایید
              </div>
            </div>
          </Card>
          <Card color="#def0f2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  src={profile}
                  width="50px"
                  height="50px"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <div>
                  <h4>رضا موسوی</h4>
                  <p>398</p>
                </div>
              </div>
              <div
                style={{
                  background: "#FA4B24",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  color: "#fff",
                }}
              >
                عدم تایید
              </div>
            </div>
          </Card>
          <Card color="#def0f2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  src={profile}
                  width="50px"
                  height="50px"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <div>
                  <h4>رضا موسوی</h4>
                  <p>398</p>
                </div>
              </div>
              <div
                style={{
                  background: "#FA4B24",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  color: "#fff",
                }}
              >
                عدم تایید
              </div>
            </div>
          </Card>
          <Card color="#def0f2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  src={profile}
                  width="50px"
                  height="50px"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <div>
                  <h4>رضا موسوی</h4>
                  <p>398</p>
                </div>
              </div>
              <div
                style={{
                  background: "#FA4B24",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  color: "#fff",
                }}
              >
                عدم تایید
              </div>
            </div>
          </Card>
          <Card color="#def0f2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  src={profile}
                  width="50px"
                  height="50px"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <div>
                  <h4>علی مرتضوی</h4>
                  <p>398</p>
                </div>
              </div>
              <div
                style={{
                  background: "#FFBF00",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  color: "#fff",
                }}
              >
                در انتظار بررسی
              </div>
            </div>
          </Card>
          <Card color="#def0f2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  src={profile}
                  width="50px"
                  height="50px"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <div>
                  <h4>علی مرتضوی</h4>
                  <p>398</p>
                </div>
              </div>
              <div
                style={{
                  background: "#27C29B",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  color: "#fff",
                }}
              >
                تایید
              </div>
            </div>
          </Card>
          <Card color="#def0f2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <img
                  src={profile}
                  width="50px"
                  height="50px"
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <div>
                  <h4>علی مرتضوی</h4>
                  <p>398</p>
                </div>
              </div>
              <div
                style={{
                  background: "#27C29B",
                  borderRadius: "8px",
                  padding: "4px 16px",
                  color: "#fff",
                }}
              >
                تایید
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};
