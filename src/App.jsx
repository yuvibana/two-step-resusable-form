import {
  Routes,
  Route,
} from "react-router-dom";

import FormOne from './components/PageOne/FormOne'
import NextPage from './components/PageTwo/FromTwo'




const App = () => {
  return (
    <div className='main flex justify-center items-center h-svh bg-slate-900'>
      <div className="centerd-div shadow-lg border-l">
        <Routes>
          <Route path="*" element={<FormOne />} />
          <Route path="/" element={<FormOne />} />
          <Route path="/NextPage" element={<NextPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
