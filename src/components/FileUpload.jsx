import React, { useState, useRef } from 'react';

const FileUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel')) {
      setUploadedFile(file);
    } else {
      alert('Please upload a valid Excel file.');
    }
  };

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', marginTop: '50px' }}>
      <div>
        <div>Upload Excel File</div>
      </div>
    </div>
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', marginTop: '20px' }}>
        <div>
          <div
            onClick={handleIconClick}
            style={{
              border: '1px solid black',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
            <img
              src={
                uploadedFile
                  ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuUlEQVR4nO3WsQ3CABBDUa+ARMH+89DQsM6noYgsSu5MkC2d0ubrFYnUnWsM3lPS7R9C2Ixh8B6H5/XMIRdJ9y0ZBk+bMQyHrMWwELISw1LIeAyLIaMx2yFjMYmQkZhUyNdjkiF6f/GPfwA/GTIV/3HpF6chtrQAFbGlBaiILS1ARWxpASpiSwtQEVtagIrY0gJUxJYWoCK2tAAVsaUFqIgtLUBFbGkBKmJLC1ARW1qAitjSAlSkU3Yv1GHq3C0e2MQAAAAASUVORK5CYII='
                  : 'data:image/png;base64,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'
              }
              alt="Icon"
              style={{
                width: '35px',
                height: '35px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
          {uploadedFile && (
            <div style={{ marginTop: '10px', textAlign: 'center', fontSize: '12px' }}>
              {uploadedFile.name}
            </div>
          )}
          <input
            type="file"
            accept=".xlsx,.xls"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </div>
    <div style={{display:'flex', justifyContent:'center', marginTop:'20px', width:'100vw'}}>
        <div style={{textAlign:'center', padding:'15px', backgroundColor:'#27ae60', border:'1px solid black', borderRadius:'15px', cursor:'pointer', width:'80px'}}>
            Submit
        </div>
    </div>
    </>
  );
};

export default FileUpload;
