/*
 / My portfolio site
 / Copyright (C) 2025  ChosenSoul
 /
 / This program is free software: you can redistribute it and/or modify
 / it under the terms of the GNU General Public License as published by
 / the Free Software Foundation, either version 3 of the License, or
 / (at your option) any later version.
 /
 / This program is distributed in the hope that it will be useful,
 / but WITHOUT ANY WARRANTY; without even the implied warranty of
 / MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 / GNU General Public License for more details.
 /
 / You should have received a copy of the GNU General Public License
 / along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import { useState, useEffect, useRef } from "react";
import Tabs, { tabsClasses, type TabsProps } from "@mui/material/Tabs";
import Tab, { tabClasses } from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import useIsMobile from "@hooks/useIsMobile";
import { useLocale } from "@locale/locale";

const customColors = {
  background: "var( --color-dark-purple-800)",
  selected: "var(--color-dark-purple-900)",
  text: "var(--color-dark-purple-600)",
  textselect: "var(--color-white)",
};

const StyledTabs = styled(Tabs)(({ theme: _ }) => ({
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
  },
}));

const StyledTab = styled(Tab)(({ theme: _ }) => ({
  fontWeight: 500,
  minHeight: 44,
  minWidth: 0,
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
  const isScrollingByClick = useRef(false);
  const anchorMap = ["#hello", "#about-me", "#skills", "#projects"];
  const isMobile = useIsMobile();
  const [ t ] = useLocale();

  const handleScroll = (newValue: number) => {
    isScrollingByClick.current = true;
    setValue(newValue);
    const targetId = anchorMap[newValue].substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingByClick.current) {
        return;
      }

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

    const scrollEndHandler = () => {
      if (isScrollingByClick.current) {
        isScrollingByClick.current = false;
      }
    };

    window.addEventListener('scroll', scrollEndHandler, { once: true });
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scrollEndHandler);
    };
  }, [anchorMap]);

  return (
    <StyledTabs {...props}
      variant={isMobile ? "fullWidth" : "standard"}
      orientation={isMobile ? "horizontal": "vertical"}
      value={value}
      onChange={(_, newValue) => handleScroll(newValue)}
    >
        <StyledTab
            disableRipple
            label={t("tabs.hello")}
            iconPosition="start"
            className="text-[clamp(0.66rem,2.5vw,0.90rem)]"
        />
        <StyledTab
            disableRipple
            label={t("tabs.About Me")}
            iconPosition="start"
            className="text-[clamp(0.66rem,2.5vw,0.90rem)]"
        />
        <StyledTab
            disableRipple
            label={t("tabs.Skills")}
            iconPosition="start"
            className="text-[clamp(0.66rem,2.5vw,0.90rem)]"
        />
        <StyledTab
            disableRipple
            label={t("tabs.Projects")}
            iconPosition="start"
            className="text-[clamp(0.66rem,2.5vw,0.90rem)]"
        />
    </StyledTabs>
  );
}