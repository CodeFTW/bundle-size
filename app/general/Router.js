import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RoutePaths } from './RoutePaths';
import { Home } from '../home/Home';
import { Access } from '../access/Access';
import { NotFound } from './NotFound';
import { Big } from '../big/Big';
import { Huge } from '../big/Huge';

export const Router = () => (
  <Routes>
    <Route path={RoutePaths.HOME} element={<Home />} />
    <Route path={RoutePaths.ACCESS} element={<Access />} />
    <Route path={RoutePaths.BIG} element={<Big />} />
    <Route path={RoutePaths.HUGE} element={<Huge />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
