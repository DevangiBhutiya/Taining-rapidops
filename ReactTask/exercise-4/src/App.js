import React, { useState, useRef, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./App.css";
import { CSVLink } from "react-csv";
import DeleteButton from "./componentts/DeleteButton";
// import { EuiSelect, useGeneratedHtmlId } from "@elastic/eui";
// import { DisplayToggles } from './display_toggles';
import {
  EuiButton,
  EuiContextMenu,
  EuiFormRow,
  EuiIcon,
  EuiPopover,
  EuiSwitch,
  EuiSpacer,
  useGeneratedHtmlId,
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
} from "@elastic/eui";

const dateFormatter = (params) => {
  return new Date(params.value).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
let nextId = 6;
function App() {
  let csvLink = useRef();
  let liRef = useRef();

  const handleDelete = (id) => {
    const filter = rowData.filter((item, index) => item.id !== id);
    setRowData(filter);
  };
  const [rowData, setRowData] = useState([
    {
      id: 1,
      firstName: "Tesla",
      lastName: "Model Y",
      gender: "Male",
      dateOfBirth: "2001-01-30",
    },
    {
      id: 2,
      firstName: "Ford",
      lastName: "F-Series",
      gender: "Female",
      dateOfBirth: "2001-01-05",
    },
    {
      id: 3,
      firstName: "Toyota",
      lastName: "Corolla",
      gender: "Male",
      dateOfBirth: "2001-09-20",
    },
    {
      id: 4,
      firstName: "Devangi",
      lastName: "Bhutiya",
      gender: "Female",
      dateOfBirth: "2001-09-20",
    },
    {
      id: 5,
      firstName: "Mahek",
      lastName: "Bhutiya",
      gender: "Female",
      dateOfBirth: "2001-09-20",
    },
  ]);

  const colDefs = [
    { field: "id" },
    { field: "firstName" },
    { field: "lastName" },
    { field: "gender" },
    { field: "dateOfBirth", valueFormatter: dateFormatter },
    {
      headerName: "Icon",
      field: "icon",
      cellRenderer: (params) => (
        <span>
          <FontAwesomeIcon icon={faPenToSquare} />{" "}
          <DeleteButton onDelete={() => handleDelete(params.data.id)} />{" "}
        </span>
      ),
    },
  ];
  const select = ["lastName", "gender"];
  const selected = colDefs.filter((col) => {
    return select.includes(col.field);
  });
  // console.log("selected",selected)

  const [isPopoverOpen, setPopover] = useState(false);
  const [api, setApi] = useState(null);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [isFlyoutVisible, setFlyoutVisible] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const basicSelectId = useGeneratedHtmlId({ prefix: "basicSelect" });

  // useEffect(() => {
  //   console.log({ isFlyoutVisible });
  // }, [isFlyoutVisible]);

  const handleClick = () => {
    setRowData([
      ...rowData,
      {
        id: nextId++,
        firstName: "Chintan",
        lastName: "Bhutiya",
        gender: "Male",
        dateOfBirth: "2007-05-19",
      },
    ]);
  };

  const handleDownload = () => {
    csvLink.current.link.click();
  };
  // console.log(rowData);

  const contextMenuPopoverId = useGeneratedHtmlId({
    prefix: "contextMenuPopover",
  });

  const closePopover = () => {
    setPopover(false);
  };
  const onButtonClick = () => {
    setPopover(true);
  };
  const clmn = ["lastName", "gender"];
  const selectedCol = colDefs.filter((col) => {
    return selectedColumns.includes(col.field);
  });
  // console.log("<<<<",selectedCol)
  const onColumnToggle = (columnName) => {
    // console.log(columnName)
    // Toggle the selected column
    const updatedColumns = selectedColumns.includes(columnName)
      ? selectedColumns.filter((col) => col !== columnName)
      : [...selectedColumns, columnName];
    // console.log(">>>>>>>>>>",selectedColumns.includes(columnName))
    setSelectedColumns(updatedColumns);

    // Show/hide columns based on user selection
    api.setColumnVisible(columnName, selectedColumns.includes(columnName));
  };
  //  console.log("column",selectedColumns)

  const panels = [  
    {
      id: 0,
      items: [
        ...selected.map((col, index) => ({
          name: col.field,
          icon: selectedColumns.includes(col.field) ? "eyeClosed" : "eye", // You can customize the icon
          // onClick: closePopover,
          onClick: () => onColumnToggle(col.field),
          checked: selected.includes(col.field),
        })),
      ],
    },
  ];
  
  const button = (
    <EuiButton iconType="arrowDown" iconSide="right" onClick={onButtonClick}>
      View Setting
    </EuiButton>
  );

  const onGridReady = (params) => {

    setApi(params.api);
  };

  const showFlyout = (data, event) => {
    const nativeEvent = event && event.event;
  if (nativeEvent && nativeEvent.target) {
    // Check if the click target is not the delete icon
    console.log(nativeEvent.target.classList.contains("fa-pen-to-square"))
    if (!nativeEvent.target.classList.contains("fa-pen-to-square")) {
      setSelectedRowData(data);
      setFlyoutVisible(true);
    }
  }

  };

  const closeFlyout = () => {
    console.log("click");
    setFlyoutVisible(false);
  };


  const flyoutContent = useMemo(()=>  
   isFlyoutVisible && (
    <EuiFlyout
      ownFocus
      outsideClickCloses={true}
      onClose={closeFlyout}
      size="s"
      aria-labelledby="flyoutTitle"
    >
      <EuiFlyoutHeader hasBorder>
        <h2 id="flyoutTitle">{`Details for ${selectedRowData.firstName} ${selectedRowData.lastName}`}</h2>
      </EuiFlyoutHeader>
      <EuiFlyoutBody>
        <p>{`ID: ${selectedRowData.id}`}</p>
        <p>{`First Name: ${selectedRowData.firstName}`}</p>
        <p>{`Last Name: ${selectedRowData.lastName}`}</p>
        <p>{`Gender: ${selectedRowData.gender}`}</p>
        <p>{`Date of Birth: ${selectedRowData.dateOfBirth}`}</p>
      </EuiFlyoutBody>
    </EuiFlyout>
  )
    ,[isFlyoutVisible])
  return (
    <div
      className={"ag-theme-quartz"}
      style={{
        height: "500px",
        width: "800px",
        alignItems: "center",
      }}
    >
      <h1>Ag-Grid</h1>
      <div className="flex-container">
        <label>Search: </label> <input placeholder="Enter any text to Filter" />
        <button onClick={handleClick}>Add</button>{" "}
        <button onClick={handleDownload}>Export to Excel</button>
        <CSVLink
          data={rowData}
          filename="myfile.csv"
          className="hidden"
          ref={csvLink}
          target="_blank"
        />
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <EuiPopover
            id={contextMenuPopoverId}
            button={button}
            isOpen={isPopoverOpen}
            closePopover={closePopover} 
            panelPaddingSize="s"
            anchorPosition="downRight"
          >
            <EuiContextMenu initialPanelId={0} panels={panels} />
          </EuiPopover>
        </div>
      </div>

      <EuiSpacer size="s" />
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        onRowClicked={(event) => showFlyout(event.data, event)}
        pagination={true}
        paginationPageSize={5}
        paginationPageSizeSelector={[5, 10, 15, 20]}
        paginationAutoPageSize={true}
        onGridReady={onGridReady}
      />
      {flyoutContent}
    </div>
  );
}

export default App;
