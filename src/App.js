import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [fio, setFio] = useState("");
  const [work, setWork] = useState("");
  const [city, setCity] = useState("");
  const [org, setOrg] = useState("");
  const [lem, setLem] = useState("");
  const [reason, setReason] = useState("");
  const [duedate, setDuedate] = useState("");
  const [pasp, setPasp] = useState("");
  const [zat, setZat] = useState("");

  const onChangeFio = (event) => {
    setFio(event.target.value);
  }

  const onChangeWork = (event) => {
    setWork(event.target.value);
  }

  const onChangeCity = (event) => {
    setCity(event.target.value);
  }

  const onChangeLem = (event) => {
    setLem(event.target.value);
  }

  const onChangeReason = (event) => {
    setReason(event.target.value);
  }

  const onChangeDuedate = (event) => {
    setDuedate(event.target.value);
  }

  const onChangePassp = (event) => {
    setPasp(event.target.value);
  }

  const onChangeZat = (event) => {
    setZat(event.target.value);
  }

  const onChangeOrg = (event) => {
    setOrg(event.target.value);
  }

  function Generate() {
    let fileName = 'командировочное удостоверение.docx';
    downloadInnerHtml(fileName, 'main');
  }

  function downloadInnerHtml(filename, elId) {
    var link = document.createElement('a');
    link.setAttribute('download', filename);

    link.setAttribute
      ('href', 'data:' + 'text/doc' + ';charset=utf-8,' +
        encodeURIComponent("Командировочное удостоверение" + '\n' +
          "Выдано: " + fio + '\n' + work + '\n' + "командированному в г. " + city + '\n' +
          "от организации " + org + '\n' + "Срок командировки " + lem + " дней." + '\n' +
          "Цель договора: " + reason + '\n' + "Основание: Приказ от " + duedate + "." + '\n' +
          "Действительно при предъявлении паспорта серии " + pasp + '\n' +
          "Руководитель: " + '\n' + zat));
    link.click();
  }


  return (
    <div className="App">
      <Typography variant="h3" gutterBottom component="div">
        Создать командировочное удостоверение
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          style={{ width: "650px", marginBottom: "8px" }}
          label="Выдано, ФИО"
          onChange={onChangeFio}
        />
        <TextField
          style={{ width: "650px", marginBottom: "8px" }}
          label="Должность, место работы"
          onChange={onChangeWork}
        />
        <TextField
          style={{ width: "650px", marginBottom: "8px" }}
          label="Командированому в (пункт назначения)"
          onChange={onChangeCity}
        />
        <TextField
          style={{ width: "650px", marginBottom: "8px" }}
          label="Наименование организации"
          onChange={onChangeOrg}
        />
        <TextField
          style={{ width: "180px", marginBottom: "8px" }}
          label="Срок командировки"
          type="number"
          onChange={onChangeLem}
        />
        <TextField
          style={{ width: "650px", marginBottom: "8px" }}
          label="Цель командировки"
          onChange={onChangeReason}
        />
        <TextField
          style={{ width: "180px", marginBottom: "8px" }}
          label="Приказ от"
          onChange={onChangeDuedate}
        />
        <TextField
          style={{ width: "180px", marginBottom: "8px" }}
          label="Серия паспорта"
          onChange={onChangePassp}
        />
        <TextField
          style={{ width: "250px", marginBottom: "8px" }}
          label="Утвердил, ФИО"
          onChange={onChangeZat}
        />
        <Button variant="outlined" style={{ width: "150px" }} onClick={Generate}
        >Сгенерировать документ</Button>
      </div>
    </div >
  );
}

export default App;
