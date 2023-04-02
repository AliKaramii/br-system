import { IconButton, InputAdornment, TextField } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import React, { useRef } from "react";

const AddableFormFeild = ({ label, id, name }) => {
  const itemField = useRef();
  const handleItemAdding = () => {
    console.log(itemField.current.value);
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
    </>
  );
};

export default AddableFormFeild;
