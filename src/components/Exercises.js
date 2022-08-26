import { Pagination, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ExerciseCard from "./ExerciseCard";

export const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(bodyPart);
  return (
    <div>
      <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="46px"
        >
          Showing Results
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { lg: "107px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentExercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))}
        </Stack>
        <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    </div>
  );
};
