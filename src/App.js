import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './Route/PrivateRoute';

// 1. 전체 상품 페이지, 로그인, 상품상세 페이지
// 2. 전체 상품 페이지는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지 출력
// 4. 상품 디테일을 눌렀으나 로그인이 안되어 있으면 로그인 페이지 출력.
// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지 확인 가능
// 6. 로그아웃 버튼 클릭 시 로그아웃 된다
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다.
// 8. 로그인을 하면 로그아웃으로 로그아웃하면 로그인으로 보인다.
// 9. 상품을 검색 할 수 있다.

function App() {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    console.log("auth: ", auth)
  }, [auth])

  return (
    <div>
      <Navbar auth={auth} />

      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuth={setAuth} auth={auth} />} />
        <Route path='/product/:id' element={<PrivateRoute auth={auth} />} />
      </Routes>

    </div>
  );
}

export default App;
