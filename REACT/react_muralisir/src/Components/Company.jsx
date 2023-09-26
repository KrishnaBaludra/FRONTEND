import {
  Paper,
  TableBody,
  TableCell,
  Table,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  DialogTitle,
  DialogContent,
  Stack,
  Dialog,
  TextField,
} from "@mui/material";

import { useState } from "react";

const Company = () => {
  const columns = [
    { id: "id", name: "Id" },
    { id: "name", name: "Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
    { id: "address", name: "Address" },
    { id: "type", name: "Company Type" },
    { id: "action", name: "Action" },
  ];

  const [open, openChange] = useState(false);
  const [id, idchange] = useState(0);
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  cosnt[(phone, phonechange)] = useState("");
  const [address, addresschange] = useState("");
  const [type, typechange] = useState("MNC");

  const functionAdd = () => {
    openpop();
  };

  const closePopup = () => {
    openChange(false);
  };

  return (
    <div>
      <Paper sx={{ margin: "1%" }}>
        <div style={{ margin: "1%" }}>
          <Button onClick={functionAdd} variant="contained">
            Add New (+)
          </Button>
        </div>
        <div style={{ margin: "1%" }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "midnightblue" }}>
                  {columns.map((u) => (
                    <TableCell style={{ color: "white" }} key={u.id}>
                      {u.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>

      <Dialog open={open} onClose={closePopup}>
        <DialogTitle>
          <span>Create Company</span>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <TextField label="Name" variant="outlined" />
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Company;
