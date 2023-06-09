import {
  Home,
  ResetPassword,
  Dashboard,
  ContractManagement,
  EquipManagement,
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
  UnitUsed
} from './pages'

import UpdateInfo from './pages/Management/AuthorizedUnit/UpdateInfo'
import DetailUnitUsed from './pages/Management/UnitsUsed/DetailUnitUsed'
import DetailUserUsed from './pages/Management/UnitsUsed/DetailUserUsed'
import AddUser from './pages/Management/UnitsUsed/AddUser'
import InfoCreation from './pages/Setting/InfoCreation'
import SettingContract from './pages/Setting/SettingContract'
import Configuration from './pages/Setting/Configuration'
import Permission from './pages/Setting/Permission'
import EditUser from './components/Setting/EditUser'
import AddUser1 from './components/Setting/AddUser'
import UpdateRole from './components/Setting/UpdateRole'
import AddRole from './components/Setting/AddRole'
import Distribution from './pages/Income/Distribution'
import DetailDistribution from './pages/Income/DetailDistribution'
import InCome from './pages/Income/InCome'
import DetailInCome from './pages/Income/DetailInCome'
import DetailInComeProfit from './pages/Income/DetailInComeProfit'
import HistorySync from './pages/Income/HistorySync'
import History from './pages/Income/History'
import AddDevice from './pages/Management/Equip/AddDevice'
import InfoDevice from './pages/Management/Equip/InfoDevice'
import InfoMiningContract from './pages/Management/Contract/InfoMiningContract'
import CopyContract from './pages/Management/Contract/CopyContract'
import WatchFeedback from './pages/Help/WatchFeedback'

export const myPath = [
  {
    path: '/dashboard',
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    )
  },
  {
    path: '/management/contract',
    element: (
      <MainLayout>
        <ContractManagement />
      </MainLayout>
    )
  },
  {
    path: '/management/equip',
    element: (
      <MainLayout>
        <EquipManagement />
      </MainLayout>
    )
  },
  {
    path: '/management/equip/:id',
    element: (
      <MainLayout>
        <InfoDevice />
      </MainLayout>
    )
  },

  {
    path: '/management/equip/add',
    element: (
      <MainLayout>
        <AddDevice />
      </MainLayout>
    )
  },
  {
    path: '/management/authority',
    element: (
      <MainLayout>
        <AuthorizedUnit />
      </MainLayout>
    )
  },
  {
    path: '/management/authority/update',
    element: (
      <MainLayout>
        <UpdateInfo />
      </MainLayout>
    )
  },
  {
    path: '/management/used',
    element: (
      <MainLayout>
        <UnitUsed />
      </MainLayout>
    )
  },
  {
    path: '/management/used/add-user',
    element: (
      <MainLayout>
        <AddUser />
      </MainLayout>
    )
  },
  {
    path: '/management/used/detail-user',
    element: (
      <MainLayout>
        <DetailUserUsed />
      </MainLayout>
    )
  },
  {
    path: '/management/used/detail',
    element: (
      <MainLayout>
        <DetailUnitUsed />
      </MainLayout>
    )
  },

  {
    path: '/management/contract/detail-authority',
    element: (
      <MainLayout>
        <InfoContract />
      </MainLayout>
    )
  },
  {
    path: '/management/contract/detail-mining',
    element: (
      <MainLayout>
        <InfoMiningContract />
      </MainLayout>
    )
  },
  {
    path: '/management/contract/1/detail',
    element: (
      <MainLayout>
        <InfoContractDetail />
      </MainLayout>
    )
  },
  {
    path: '/management/contract/copy',
    element: (
      <MainLayout>
        <CopyContract />
      </MainLayout>
    )
  },
  {
    path: '/management/contract/detail-mining',
    element: (
      <MainLayout>
        <InfoMiningContract />
      </MainLayout>
    )
  },
  {
    path: '/detail-product/1',
    element: (
      <MainLayout>
        <DetailProduct />
      </MainLayout>
    )
  },
  {
    path: '/new-contract',
    element: (
      <MainLayout>
        <AddNewContractAuthority />
      </MainLayout>
    )
  },
  {
    path: '/help/guide',
    element: (
      <MainLayout>
        <Guide />
      </MainLayout>
    )
  },
  {
    path: '/help/download',
    element: (
      <MainLayout>
        <DownloadApp />
      </MainLayout>
    )
  },
  {
    path: '/help/feedback',
    element: (
      <MainLayout>
        <Feedback />
      </MainLayout>
    )
  },
  {
    path: '/help/watch-feedback',
    element: (
      <MainLayout>
        <WatchFeedback />
      </MainLayout>
    )
  },
  {
    path: '/income/distribution',
    element: (
      <MainLayout>
        <Distribution />
      </MainLayout>
    )
  },
  {
    path: '/income/distribution/detail',
    element: (
      <MainLayout>
        <DetailDistribution />
      </MainLayout>
    )
  },
  {
    path: '/income',
    element: (
      <MainLayout>
        <InCome />
      </MainLayout>
    )
  },
  {
    path: '/income/detail',
    element: (
      <MainLayout>
        <DetailInCome />
      </MainLayout>
    )
  },
  {
    path: '/income/detail/profit',
    element: (
      <MainLayout>
        <DetailInComeProfit />
      </MainLayout>
    )
  },
  {
    path: '/income/history-sync',
    element: (
      <MainLayout>
        <HistorySync />
      </MainLayout>
    )
  },
  {
    path: '/income/history',
    element: (
      <MainLayout>
        <History />
      </MainLayout>
    )
  },
  {
    path: '/setting/period',
    element: (
      <MainLayout>
        <PeriodCycle />
      </MainLayout>
    )
  },
  {
    path: '/setting/info-creation',
    element: (
      <MainLayout>
        <InfoCreation />
      </MainLayout>
    )
  },
  {
    path: '/setting/config',
    element: (
      <MainLayout>
        <Configuration />
      </MainLayout>
    )
  },
  {
    path: '/setting/permission',
    element: (
      <MainLayout>
        <Permission />
      </MainLayout>
    )
  },
  {
    path: '/setting/edit-user',
    element: (
      <MainLayout>
        <EditUser />
      </MainLayout>
    )
  },
  {
    path: '/setting/add-user',
    element: (
      <MainLayout>
        <AddUser1 />
      </MainLayout>
    )
  },
  {
    path: '/setting/update-role',
    element: (
      <MainLayout>
        <UpdateRole />
      </MainLayout>
    )
  },
  {
    path: '/setting/add-role',
    element: (
      <MainLayout>
        <AddRole />
      </MainLayout>
    )
  },
  {
    path: '/setting/contract',
    element: (
      <MainLayout>
        <SettingContract />
      </MainLayout>
    )
  },
  {
    path: '/record-store',
    element: (
      <MainLayout>
        <RecordStore />
      </MainLayout>
    )
  },
  {
    path: '/record-approval',
    element: (
      <MainLayout>
        <RecordApproval />
      </MainLayout>
    )
  },
  {
    path: '/update-record',
    element: (
      <MainLayout>
        <UpdateRecordStore />
      </MainLayout>
    )
  },
  {
    path: '/schedule',
    element: (
      <MainLayout>
        <Schedule />
      </MainLayout>
    )
  },
  {
    path: '/schedule/:id',
    element: (
      <MainLayout>
        <ScheduleDetail1 />
      </MainLayout>
    )
  },
  {
    path: '/add-schedule',
    element: (
      <MainLayout>
        <AddSchedule />
      </MainLayout>
    )
  },
  {
    path: '/edit-schedule',
    element: (
      <MainLayout>
        <EditSchedule />
      </MainLayout>
    )
  },
  {
    path: '/choose-device',
    element: (
      <MainLayout>
        <ChooseDevice />
      </MainLayout>
    )
  },
  {
    path: '/playlist',
    element: (
      <MainLayout>
        <Playlist />
      </MainLayout>
    )
  },
  {
    path: '/top-playlist',
    element: (
      <MainLayout>
        <TopPlaylist />
      </MainLayout>
    )
  },
  {
    path: '/add-playlist',
    element: (
      <MainLayout>
        <AddPlaylist />
      </MainLayout>
    )
  },
  {
    path: '/add-record',
    element: (
      <MainLayout>
        <AddRecord />
      </MainLayout>
    )
  }
]
