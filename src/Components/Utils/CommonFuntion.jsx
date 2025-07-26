import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const downloadCSV = (headers, data, fileName = "Failed_Records") => {
    // Convert headers to CSV format
    const csvRows = [];
    csvRows.push(headers.join(",")); // Add headers as the first row

    // Convert data to CSV format
    data?.forEach((row) => {
        const rowData = headers?.map((header) => {
            let cellValue = row[header] || ""; // Ensure empty cells are handled
            cellValue = String(cellValue).replace(/"/g, '""'); // Convert to string and escape double quotes
            return `"${cellValue}"`; // Wrap in double quotes
        });
        csvRows.push(rowData.join(",")); // Add row to CSV
    });

    // Create CSV content
    const csvContent = "\uFEFF" + csvRows.join("\n");

    // Convert to Blob and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${fileName}.csv`);
};

export const downloadTablePDF = (headers, data, fileName = "Leads_Report") => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text(fileName, 14, 15);

    // Define table headers
    const tableHeaders = headers?.map(header => ({ content: header, styles: { halign: 'center', fillColor: [255, 204, 0] } }));

    // Format data for table
    const tableData = data?.map(row => headers.map(header => row[header] || ""));

    // Add table
    doc.autoTable({
        startY: 25,
        head: [tableHeaders],
        body: tableData,
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 3 },
        headStyles: { fillColor: [255, 204, 0] }, // Yellow background
    });

    // Save the PDF
    doc.save(`${fileName}.pdf`);
};

export const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "5px 10px",
      border: "2px solid rgba(228, 228, 231, 0.7)",
      borderRadius: "6px",
      outline: "none",
      caretColor: "#ef4444",
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
      borderColor: state.isFocused ? "#007BFF" : "rgba(228, 228, 231, 0.7)",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 99999,
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 99999,
      position: "absolute",
    }),
  };
  
  
  export const onMenuOpen = (setIsMenuOpen) => () => setIsMenuOpen(true);
  export const onMenuClose = (setIsMenuOpen) => () => setIsMenuOpen(false);
  