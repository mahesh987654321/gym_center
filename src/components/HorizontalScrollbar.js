import { Box } from "@mui/system";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
export const HorizontalScrollbar = ({ data, bodyParts, setBodyPart }) => {
  console.log(data);
  return (
    <ScrollMenu LeftArrow={LeftArrowIcon} RightArrow={RightArrowIcon}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyParts}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};
