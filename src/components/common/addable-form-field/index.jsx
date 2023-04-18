import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import React, { useRef, useState } from "react";

const AddableFormFeild = ({ label, id, name }) => {
  let [addedList, setAddedList] = useState([]);
  const itemField = useRef();

  const handleItemAdding = () => {
    setAddedList((current) => [itemField.current.value, ...current]);
    itemField.current.value = "";
  };

  return (
    <>
      <TextField
        variant="outlined"
        inputRef={itemField}
        sx={{ marginBottom: 4 }}
        fullWidth
        id={id}
        name={name}
        label={label}
        // value={formik.values.date}
        // onChange={formik.handleChange}
        // error={formik.touched.date && Boolean(formik.errors.date)}
        // helperText={formik.touched.date && formik.errors.date}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleItemAdding}>
                <AddOutlinedIcon
                  color="primary"
                  aria-label="toggle password visibility"
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div style={{ height: "60px", overflow: "auto" }}>
        {addedList.map((addedItem, index) => {
          return (
            <Typography key={index} component="p">
              {addedItem}
            </Typography>
          );
        })}
      </div>
    </>
  );
};

export default AddableFormFeild;
