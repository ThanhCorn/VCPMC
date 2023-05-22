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
              <Route path={item.path} element={item.element} key={item.id} />
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
    id: 1,
    path: '/dashboard',
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
  {
    id: 2,

    path: '/management/contract',
    element: (
      <MainLayout>
        <ContractManagement />
      </MainLayout>
    ),
  },
  {
    id: 3,

    path: '/management/equip',
    element: (
      <MainLayout>
        <EquipManagement />
      </MainLayout>
    ),
  },
  {
    id: 4,

    path: '/management/authority',
    element: (
      <MainLayout>
        <AuthorizedUnit />
      </MainLayout>
    ),
  },
  {
    id: 5,

    path: '/management/used',
    element: (
      <MainLayout>
        <UnitUsed />
      </MainLayout>
    ),
  },
  {
    id: 6,

    path: '/management/contract/1',
    element: (
      <MainLayout>
        <InfoContract />
      </MainLayout>
    ),
  },
  {
    id: 7,

    path: '/management/contract/1/detail',
    element: (
      <MainLayout>
        <InfoContractDetail />
      </MainLayout>
    ),
  },
  {
    id: 8,

    path: '/detail-product/1',
    element: (
      <MainLayout>
        <DetailProduct />
      </MainLayout>
    ),
  },
  {
    id: 9,

    path: '/new-contract',
    element: (
      <MainLayout>
        <AddNewContractAuthority />
      </MainLayout>
    ),
  },
  {
    id: 10,

    path: '/help/guide',
    element: (
      <MainLayout>
        <Guide />
      </MainLayout>
    ),
  },
  {
    id: 11,

    path: '/help/download',
    element: (
      <MainLayout>
        <DownloadApp />
      </MainLayout>
    ),
  },
  {
    id: 12,

    path: '/help/feedback',
    element: (
      <MainLayout>
        <Feedback />
      </MainLayout>
    ),
  },
  {
    id: 13,
    path: '/setting/period',
    element: (
      <MainLayout>
        <PeriodCycle />
      </MainLayout>
    ),
  },
  {
    id: 14,
    path: '/record-store',
    element: (
      <MainLayout>
        <RecordStore />
      </MainLayout>
    ),
  },
  {
    id: 15,
    path: '/record-approval',
    element: (
      <MainLayout>
        <RecordApproval />
      </MainLayout>
    ),
  },
  {
    id: 16,
    path: '/update-record',
    element: (
      <MainLayout>
        <UpdateRecordStore />
      </MainLayout>
    ),
  },
  {
    id: 17,
    path: '/schedule',
    element: (
      <MainLayout>
        <Schedule />
      </MainLayout>
    ),
  },
  {
    id: 18,
    path: '/schedule/:id',
    element: (
      <MainLayout>
        <ScheduleDetail1 />
      </MainLayout>
    ),
  },
  {
    id: 19,
    path: '/add-schedule',
    element: (
      <MainLayout>
        <AddSchedule />
      </MainLayout>
    ),
  },
  {
    id: 20,
    path: '/edit-schedule',
    element: (
      <MainLayout>
        <EditSchedule />
      </MainLayout>
    ),
  },
  {
    id: 21,
    path: '/choose-device',
    element: (
      <MainLayout>
        <ChooseDevice />
      </MainLayout>
    ),
  },
  {
    id: 22,
    path: '/playlist',
    element: (
      <MainLayout>
        <Playlist />
      </MainLayout>
    ),
  },
  {
    id: 23,
    path: '/top-playlist',
    element: (
      <MainLayout>
        <TopPlaylist />
      </MainLayout>
    ),
  },
  {
    id: 24,
    path: '/add-playlist',
    element: (
      <MainLayout>
        <AddPlaylist />
      </MainLayout>
    ),
  },
  {
    id: 25,
    path: '/add-record',
    element: (
      <MainLayout>
        <AddRecord />
      </MainLayout>
    ),
  },
];
