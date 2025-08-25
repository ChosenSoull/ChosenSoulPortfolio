import React, { useState, useEffect } from "react";
import Tabs, { tabsClasses,type TabsProps } from "@mui/material/Tabs";
import Tab, { tabClasses } from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

const customColors = {
  background: "#5A199B",
  selected: "#240046",
  text: "#E0AAFE",
  textselect: "#ffffff",
};

const StyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: customColors.background,
  borderRadius: "23px",
  minHeight: 44,
  [`& .${tabsClasses.flexContainerVertical}`]: {
    position: "relative",
    padding: "6px",
    zIndex: 1,
  },
  [`& .${tabsClasses.indicator}`]: {
    backgroundColor: customColors.selected,
    height: "100%",
    width: "100%",
    left: "0",
    top: "0",
    borderRadius: "23px",
    transform: 'scale(0.97)',
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.16)",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontWeight: 500,
  minHeight: 44,
  minWidth: 96,
  opacity: 0.7,
  color: customColors.text,
  zIndex: 2,
  [`&.${tabClasses.selected}`]: {
    color: customColors.textselect,
    opacity: 1,
  },
  "&:hover": {
    opacity: 1,
  },
}));

export function MyTabs(props: TabsProps) {
  const [value, setValue] = useState(0);

  const anchorMap = ["#hello", "#about-me", "#projects", "#skills"];

  const handleScroll = (newValue: number) => {
    setValue(newValue);
    const targetId = anchorMap[newValue].substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newIndex = anchorMap.indexOf(`#${entry.target.id}`);
          if (newIndex !== -1) {
            setValue(newIndex);
          }
        }
      });
    };

    const sections = anchorMap.map((anchor) =>
      document.getElementById(anchor.substring(1))
    );
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [anchorMap]);

  return (
    <StyledTabs {...props}
      orientation="vertical"
      value={value}
      onChange={(_, newValue) => handleScroll(newValue)}
    >
        <StyledTab className="font-jeko"
            disableRipple
            label="Hello"
            iconPosition="start"
        />
        <StyledTab className="font-jeko"
            disableRipple
            label="About Me"
            iconPosition="start"
        />
        <StyledTab className="font-jeko"
            disableRipple
            label="Projects"
            iconPosition="start"
        />
        <StyledTab className="font-jeko"
            disableRipple
            label="Skills"
            iconPosition="start"
        />
    </StyledTabs>
  );
}