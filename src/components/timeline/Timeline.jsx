import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import SchoolIcon from "@mui/icons-material/School";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import SurfingIcon from "@mui/icons-material/Surfing";
import LaptopIcon from "@mui/icons-material/Laptop";

import "../../styles/timeline.css";

const TimeLine = () => {
  return (
    <div
      style={{ padding: "20px 0 40px 0", borderBottom: "solid 1px #BBBBBB" }}
    >
      <h2 className="timelineTitle">My journey in a timeline</h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" className="timeLineDot">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            className="timeLineContent"
            sx={{ py: "12px", px: 2 }}
          >
            <Typography variant="h5" component="span">
              Graduated from my CSEng degree
            </Typography>
            <Typography className="subText">
              At Universidad Carlos III, Madrid
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" className="timeLineDot">
              <LaptopIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            className="timeLineContent"
            sx={{ py: "12px", px: 2 }}
          >
            <Typography variant="h5" component="span">
              Signed as Software Architect Intern
            </Typography>
            <Typography className="subText">
              At Ntt Data, Europe & Latam
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" className="timeLineDot">
              <SurfingIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            className="timeLineContent"
            sx={{ py: "12px", px: 2 }}
          >
            <Typography variant="h5" component="span">
              Moved to Australia
            </Typography>
            <Typography className="subText">
              Completed my CS degree at UNSW
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" className="timeLineDot">
              <LogoDevIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            className="timeLineContent"
            sx={{ py: "12px", px: 2 }}
          >
            <Typography variant="h5" component="span">
              Enrolled in a CSEng degree
            </Typography>
            <Typography className="subText">
              At Universidad Carlos III, Madrid
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
