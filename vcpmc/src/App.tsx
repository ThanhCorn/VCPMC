import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import ContractManagement from './pages/ContractManagement';
import EquipManagement from './pages/EquipManagement';
import UnitUsed from './pages/UnitUsed';
import AuthorizedUnit from './pages/AuthorizedUnit';
import InfoContract from './components/Contract';
import DetailContract from './components/DetailContract';
import InfoContractDetail from './components/InfoContractDetail';
import AddNewContractAuthority from './components/AddNewContractAuthority';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/management/contract" element={<ContractManagement />} />
        <Route path="/management/equip" element={<EquipManagement />} />
        <Route path="/management/authority" element={<AuthorizedUnit />} />
        <Route path="/management/used" element={<UnitUsed />} />
        <Route path="/management/contract/1" element={<InfoContract />} />
        <Route
          path="/management/contract/1/detail"
          element={<InfoContractDetail />}
        />
        <Route path="/detail-contract/1" element={<DetailContract />} />
        <Route path="/new-contract" element={<AddNewContractAuthority />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
