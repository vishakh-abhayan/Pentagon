import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
function Communities() {
  const [Description, setDescription] = useState("");
  const [Name, setName] = useState("");
  const [Topic, SetTopic] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetTopic(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "firstName",
      headerName: "Event name",
      width: 250,
    },
    {
      field: "joinButton",
      headerName: "Join Event",
      width: 250,
      renderCell: (params: GridCellParams) => {
        const rowId = params.id;
        return (
          <button
            className="bg-blue-400 p-2 rounded-sm"
            // onClick={() => handleJoinEvent(rowId)}
          >
            Join
          </button>
        );
      },
    },
  ];

  const rows = [
    { id: 1, firstName: "Web3Sangam", Name: "Jon", age: 35 },
    { id: 2, firstName: "Foss United", Name: "Cersei", age: 42 },
    { id: 3, firstName: "Debian Meet", Name: "Jaime", age: 45 },
    { id: 4, firstName: "Amoung Us", Name: "Arya", age: 16 },
    { id: 5, firstName: "GTA 5", Name: "Daenerys", age: null },
  ];

  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1 className="text-4xl font-bold">Explore</h1>
        </div>
        <div style={{ height: 400, width: "50%", margin: 20 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-2xl mb-10 font-bold">Create A New Community</h1>
        </div>
        <div className="flex">
          <div className="flex-col justify-start">
            <div className="m-10 ">
              <TextField
                className="w-[500px]"
                label="Community Name"
                focused
                value={Name}
                onChange={handleNameChange}
              />
            </div>
            <div className="m-10 ">
              <TextField
                className="w-[500px]"
                label="Community Topic"
                focused
                value={Topic}
                onChange={handleTopicChange}
              />
            </div>
            <div className="m-10 ">
              <TextField
                className="w-[500px]"
                multiline
                label="Description"
                rows={8}
                focused
                value={Description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
          <div className="m-48">
            <Button variant="contained" disableElevation>
              Create Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communities;
