import './styles/global.scss';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import AppProvider from './hooks';

export function App() {
  return (
    <>
    <AppProvider>
    <SideBar />
      <Content />
    </AppProvider>
    </>
  )
}