import React from 'react';
import './App.css'
import Header from './components/header/Header';
import Index from './pages/Index';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddClientes from './components/clientes/addClientes/addClientes';
import ReadClientes from './components/clientes/readClientes/ReadClientes';
import EditClientes from './components/clientes/editClientes/EditClientes';
import AddAcomodacao from './components/acomodacoes/addAcomodacao/addAcomodacao';
import ReadAcomodacao from './components/acomodacoes/readAcomodacao/readAcomodacao';
import EditAcomodacao from './components/acomodacoes/editAcomodacao/editAcomodacao';
import AddHospetagem from './components/hospetagem/addHospetagem/addHospetagem';
import ReadHospetagem from './components/hospetagem/readHospetagem/readHospetagem';
import EditHospetagem from './components/hospetagem/editHospetagem/editHospetagem';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/addClientes' element={<AddClientes />} />
        <Route path='/readClientes' element={<ReadClientes />} />
        <Route path='/editClientes/:id' element={<EditClientes />} />

        <Route path='/addAcomodacoes' element={<AddAcomodacao />} />
        <Route path='/readAcomodacoes' element={<ReadAcomodacao />} />
        <Route path='/editQuartos/:id' element={<EditAcomodacao />} />

        <Route path='/addHospetagens' element={<AddHospetagem />} />
        <Route path='/readHospetagens' element={<ReadHospetagem />} />
        <Route path='/editHospetagens/:id' element={<EditHospetagem />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
