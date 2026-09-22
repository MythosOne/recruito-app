import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Sidebar } from '@/components/Sidebar/Sidebar';
import { ApplicationsPage } from '@/pages/ApplicationsPage/ApplicationsPage';
import { SettingsPage } from '@/pages/SettingsPage/SettingsPage';
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage';

import {
  HRDashboardContainer,
  Title,
  DashboardContent,
  Loader,
} from './HRDashboardPage.styled';

const CandidatesPageLazy = lazy(
  () => import('@/pages/CandidatesPage/CandidatesPage'),
);
const VacanciesPageLazy = lazy(
  () => import('@/pages/VacanciesPage/VacanciesPage'),
);

const HRDashboard = () => {
  return (
    <HRDashboardContainer>
      <Title>HR Dashboard Page</Title>
      <Sidebar />
      <DashboardContent>
        <Suspense fallback={<Loader>Loading...</Loader>}>
          <Routes>
            <Route path="candidates" element={<CandidatesPageLazy />} />
            <Route path="vacancies" element={<VacanciesPageLazy />} />
            <Route path="applications" element={<ApplicationsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </DashboardContent>
    </HRDashboardContainer>
  );
};

export default HRDashboard;
