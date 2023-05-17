import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import ContractManagement from './pages/Management/ContractManagement';
import EquipManagement from './pages/Management/EquipManagement';
import UnitUsed from './pages/Management/UnitUsed';
import AuthorizedUnit from './pages/Management/AuthorizedUnit';
import InfoContract from './pages/Management/InfoContract';
import DetailProduct from './pages/Management/DetailProduct';
import InfoContractDetail from './pages/Management/InfoContractDetail';
import AddNewContractAuthority from './pages/Management/AddNewContractAuthority';
import Guide from './pages/Help/Guide';
import DownloadApp from './pages/Help/DownloadApp';
import Feedback from './pages/Help/Feedback';
import PeriodCycle from './pages/Setting/PeriodCycle';
import RecordStore from './pages/Store/RecordStore';
import RecordApproval from './pages/Store/RecordApproval';
import UpdateRecordStore from './pages/Store/UpdateRecordStore';
import Playlist from './pages/Playlist/Playlist';
import Schedule from './pages/Schedule/Schedule';
import ScheduleDetail1 from './pages/Schedule/ScheduleDetail1';
import AddSchedule from './pages/Schedule/AddSchedule ';

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
        <Route path="/detail-product/1" element={<DetailProduct />} />
        <Route path="/new-contract" element={<AddNewContractAuthority />} />
        <Route path="/help/guide" element={<Guide />} />
        <Route path="/help/download" element={<DownloadApp />} />
        <Route path="/help/feedback" element={<Feedback />} />
        <Route path="/setting/period" element={<PeriodCycle />} />
        <Route path="/record-store" element={<RecordStore />} />
        <Route path="/record-approval" element={<RecordApproval />} />
        <Route path="/update-record" element={<UpdateRecordStore />} />
        <Route path="/playist" element={<Playlist />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule/:id" element={<ScheduleDetail1 />} />
        <Route path="/add-schedule" element={<AddSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
