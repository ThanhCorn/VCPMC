import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import {
  Home,
  ResetPassword,
  Dashboard,
  ContractManagement,
  EquipManagement,
  UnitUsed,
  AuthorizedUnit,
  InfoContract,
  DetailProduct,
  InfoContractDetail,
  AddNewContractAuthority,
  Guide,
  DownloadApp,
  Feedback,
  PeriodCycle,
  RecordStore,
  RecordApproval,
  UpdateRecordStore,
  Playlist,
  Schedule,
  ScheduleDetail1,
  AddSchedule,
  EditSchedule,
  ChooseDevice,
  TopPlaylist,
  AddPlaylist,
  AddRecord,
  MainLayout,
} from './pages';
import AddInfoRecord from './pages/Management/Contract/AddInfoRecord';
import UpdateInfo from './pages/Management/AuthorizedUnit/UpdateInfo';
import DetailUnitUsed from './pages/Management/UnitsUsed/DetailUnitUsed';
import DetailUserUsed from './pages/Management/UnitsUsed/DetailUserUsed';
import AddUser from './pages/Management/UnitsUsed/AddUser';

interface ProtectedRouteProps {
  element: React.ReactNode;
  path: string;
  [key: string]: any;
}

function App() {
  return (
    <React.Fragment>
      <Routes>
        {myPath.map((item) => {
          return (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path={item.path} element={item.element} key={item.path} />
            </>
          );
        })}
      </Routes>
    </React.Fragment>
  );
}

export default App;

const myPath = [
  {
    path: '/dashboard',
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
  {
    path: '/management/contract',
    element: (
      <MainLayout>
        <ContractManagement />
      </MainLayout>
    ),
  },
  {
    path: '/management/equip',
    element: (
      <MainLayout>
        <EquipManagement />
      </MainLayout>
    ),
  },
  {
    path: '/management/authority',
    element: (
      <MainLayout>
        <AuthorizedUnit />
      </MainLayout>
    ),
  },
  {
    path: '/management/authority/update',
    element: (
      <MainLayout>
        <UpdateInfo />
      </MainLayout>
    ),
  },
  {
    path: '/management/used',
    element: (
      <MainLayout>
        <UnitUsed />
      </MainLayout>
    ),
  },
  {
    path: '/management/used/add-user',
    element: (
      <MainLayout>
        <AddUser />
      </MainLayout>
    ),
  },
  {
    path: '/management/used/detail-user',
    element: (
      <MainLayout>
        <DetailUserUsed />
      </MainLayout>
    ),
  },
  {
    path: '/management/used/detail',
    element: (
      <MainLayout>
        <DetailUnitUsed />
      </MainLayout>
    ),
  },
  {
    path: '/management/add-info-record',
    element: (
      <MainLayout>
        <AddInfoRecord />
      </MainLayout>
    ),
  },
  {
    path: '/management/contract/1',
    element: (
      <MainLayout>
        <InfoContract />
      </MainLayout>
    ),
  },
  {
    path: '/management/contract/1/detail',
    element: (
      <MainLayout>
        <InfoContractDetail />
      </MainLayout>
    ),
  },
  {
    path: '/detail-product/1',
    element: (
      <MainLayout>
        <DetailProduct />
      </MainLayout>
    ),
  },
  {
    path: '/new-contract',
    element: (
      <MainLayout>
        <AddNewContractAuthority />
      </MainLayout>
    ),
  },
  {
    path: '/help/guide',
    element: (
      <MainLayout>
        <Guide />
      </MainLayout>
    ),
  },
  {
    path: '/help/download',
    element: (
      <MainLayout>
        <DownloadApp />
      </MainLayout>
    ),
  },
  {
    path: '/help/feedback',
    element: (
      <MainLayout>
        <Feedback />
      </MainLayout>
    ),
  },
  {
    path: '/setting/period',
    element: (
      <MainLayout>
        <PeriodCycle />
      </MainLayout>
    ),
  },
  {
    path: '/record-store',
    element: (
      <MainLayout>
        <RecordStore />
      </MainLayout>
    ),
  },
  {
    path: '/record-approval',
    element: (
      <MainLayout>
        <RecordApproval />
      </MainLayout>
    ),
  },
  {
    path: '/update-record',
    element: (
      <MainLayout>
        <UpdateRecordStore />
      </MainLayout>
    ),
  },
  {
    path: '/schedule',
    element: (
      <MainLayout>
        <Schedule />
      </MainLayout>
    ),
  },
  {
    path: '/schedule/:id',
    element: (
      <MainLayout>
        <ScheduleDetail1 />
      </MainLayout>
    ),
  },
  {
    path: '/add-schedule',
    element: (
      <MainLayout>
        <AddSchedule />
      </MainLayout>
    ),
  },
  {
    path: '/edit-schedule',
    element: (
      <MainLayout>
        <EditSchedule />
      </MainLayout>
    ),
  },
  {
    path: '/choose-device',
    element: (
      <MainLayout>
        <ChooseDevice />
      </MainLayout>
    ),
  },
  {
    path: '/playlist',
    element: (
      <MainLayout>
        <Playlist />
      </MainLayout>
    ),
  },
  {
    path: '/top-playlist',
    element: (
      <MainLayout>
        <TopPlaylist />
      </MainLayout>
    ),
  },
  {
    path: '/add-playlist',
    element: (
      <MainLayout>
        <AddPlaylist />
      </MainLayout>
    ),
  },
  {
    path: '/add-record',
    element: (
      <MainLayout>
        <AddRecord />
      </MainLayout>
    ),
  },
];
