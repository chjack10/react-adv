import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';

import logo from '../logo.svg';

export const Navigation = () => (
  <BrowserRouter>
    <div className='main-layout'>
      <nav>
        <img src={logo} alt='React Logo' />
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Shopping
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<ShoppingPage />} />

        <Route path='/*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  </BrowserRouter>
);
